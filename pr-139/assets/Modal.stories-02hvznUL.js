import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{m as Ve,c as Pe,s as We,a as He,g as Ae,b as q,d as z,B as D,G as we,V as W,F as Re}from"./Box-B-dS-qo0.js";import{B as a}from"./Button-BCsxkfC4.js";import{D as Fe}from"./Divider-kYvIQ_cX.js";import{F as P}from"./FormField-rvRKR4XZ.js";import{I as Se}from"./Icon-Dq3Qi2uA.js";import{T as o}from"./Text-BlqN2xhk.js";import{T as Ge}from"./Textarea-Cq6qTfE4.js";import{T as G}from"./TextInput-koRHcdcv.js";import{u as Ue,a as Xe,b as Ye,F as Qe,B as Je,c as Ke}from"./floating-AgLCAi8_.js";import{u as Ze,n as es,b as ss}from"./radii-Ir2x-kmI.js";import{d as l}from"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import{H as ns}from"./Heading-EacOxlfa.js";import{I as ts}from"./IconButton-WWonOeXW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-B5Ee-ZZJ.js";import"./Label-C4IxB5qt.js";import"./Tooltip-NolcpUTM.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const qe={variant:"default",size:"md"},os=[],as=[["overlay","modal__overlay"],["container","modal__container"],["header","modal__header"],["title","modal__title"],["closeButton","modal__closeButton"],["body","modal__body"],["footer","modal__footer"]],is=as.map(([n,t])=>[n,He(t,qe,Ae(os,n))]),rs=Ve((n={})=>Object.fromEntries(is.map(([t,s])=>[t,s.recipeFn(n)]))),U=["size","variant"],ls=n=>({...qe,...Pe(n)}),L=Object.assign(rs,{__recipe__:!1,__name__:"modal",raw:n=>n,classNameMap:{},variantKeys:U,variantMap:{size:["sm","md","lg","xl","full","mobile"],variant:["default","confirmation"]},splitVariantProps(n){return We(n,U)},getVariantProps:ls}),De=i.createContext(null),ds=()=>{const n=i.useContext(De);if(!n)throw new Error("Modal components must be used within a <Modal> provider");return n},us=(n,t)=>{switch(t.type){case"open":return{phase:"open"};case"startClosing":return n.phase==="closed"?n:{phase:"closing"};case"finishClosing":return{phase:"closed"};default:return n}},d=n=>{const{open:t,onOpenChange:s,size:c="md",preventOverlayClose:r=!1,children:f,id:N,variant:b="default",...E}=n,[$,Le]=q(E),H=L({size:c,variant:b}),[{phase:_},V]=i.useReducer(us,{phase:t?"open":"closed"}),v=i.useRef(null),{refs:Ne,context:A}=Ue({open:t,onOpenChange:s,strategy:"fixed",middleware:[]}),Ee=Xe(A,{outsidePress:!r}),{getFloatingProps:$e}=Ye([Ee]);i.useEffect(()=>{if(t){V({type:"open"}),v.current&&(clearTimeout(v.current),v.current=null);return}return V({type:"startClosing"}),v.current=setTimeout(()=>{V({type:"finishClosing"})},150),()=>{v.current&&clearTimeout(v.current)}},[t]);const _e={open:_==="open",onClose:()=>s(!1),preventOverlayClose:r};if(_==="closed")return null;const R=_==="closing"?"closing":"open";return e.jsx(De.Provider,{value:_e,children:e.jsxs(Qe,{children:[e.jsx(Je,{lockScroll:!0,className:z(H.overlay),"data-state":R,onClick:r?void 0:()=>s(!1),"aria-hidden":"true"}),e.jsx(Ke,{context:A,modal:!0,children:e.jsx(D,{ref:Ne.setFloating,className:z(H.container,$),"data-state":R,id:N,role:"dialog","aria-modal":"true",...$e(),...Le,children:f})})]})})};d.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controlled open state (REQUIRED)"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state should change (REQUIRED)"},preventOverlayClose:{required:!1,tsType:{name:"boolean"},description:"Whether clicking the overlay should close the modal"},children:{required:!0,tsType:{name:"ReactNode"},description:"Children (ModalHeader, ModalBody, ModalFooter)"},id:{required:!1,tsType:{name:"string"},description:"Optional ID for ARIA attributes"}}};const u=n=>{const{children:t,...s}=n,[c,r]=q(s),f=L();return e.jsx(D,{className:z(f.body,c),...r,children:t})};u.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Body content"}}};const m=n=>{const{children:t,...s}=n,[c,r]=q(s),f=L();return e.jsx(D,{className:z(f.footer,c),...r,children:t})};m.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content (typically action buttons)"}}};l.animations({spin:{value:"spin 1s linear infinite"},ping:{value:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"},pulse:{value:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"},bounce:{value:"bounce 1s infinite"}});l.aspectRatios({square:{value:"1 / 1"},landscape:{value:"4 / 3"},portrait:{value:"3 / 4"},wide:{value:"16 / 9"},ultrawide:{value:"18 / 5"},golden:{value:"1.618 / 1"}});l.blurs({sm:{value:"{sizes.4}"},base:{value:"{sizes.8}"},md:{value:"{sizes.12}"},lg:{value:"{sizes.16}"},xl:{value:"{sizes.24}"},"2xl":{value:"{sizes.40}"},"3xl":{value:"{sizes.64}"}});l.borders({default:{value:"{borderWidths.1} solid {colors.border}"},bold:{value:"{borderWidths.2} solid {colors.border.bold}"},inverse:{value:"{borderWidths.1} solid {colors.border.inverse}"},disabled:{value:"{borderWidths.1} solid {colors.border.disabled}"},input:{value:"{borderWidths.1} solid {colors.border.input}"},focused:{value:"{borderWidths.2} solid {colors.border.focused}"},success:{value:"{borderWidths.1} solid {colors.border.success}"},warning:{value:"{borderWidths.1} solid {colors.border.warning}"},danger:{value:"{borderWidths.1} solid {colors.border.danger}"},info:{value:"{borderWidths.1} solid {colors.border.info}"},none:{value:"none"}});l.borderWidths({0:{value:"{sizes.0}"},1:{value:"{sizes.1}"},2:{value:"{sizes.2}"},4:{value:"{sizes.4}"},8:{value:"{sizes.8}"},16:{value:"{sizes.16}"}});const h=l.durations({fastest:{value:"50ms"},faster:{value:"100ms"},fast:{value:"150ms"},normal:{value:"200ms"},slow:{value:"300ms"},slower:{value:"400ms"},slowest:{value:"500ms"}}),g=l.easings({default:{value:"cubic-bezier(0.4, 0, 0.2, 1)"},linear:{value:"linear"},in:{value:"cubic-bezier(0.4, 0, 1, 1)"},out:{value:"cubic-bezier(0, 0, 0.2, 1)"},"in-out":{value:"cubic-bezier(0.4, 0, 0.2, 1)"}});l.fonts({heading:{value:"'Ruda Variable', Source Sans, Geneva, Tahoma, Verdana, sans-serif;"},body:{value:"'Recursive Variable', Geneva, Tahoma, Verdana, sans-serif;"},mono:{value:"'Recursive Variable', Andale Mono, monaco, Consolas, Lucida Console, monospace;"}});l.fontSizes({10:{value:"{sizes.10}"},12:{value:"{sizes.12}"},14:{value:"{sizes.14}"},16:{value:"{sizes.16}"},20:{value:"{sizes.20}"},24:{value:"{sizes.24}"},32:{value:"{sizes.32}"},40:{value:"{sizes.40}"},48:{value:"{sizes.48}"},64:{value:"{sizes.64}"},72:{value:"{sizes.72}"},80:{value:"{sizes.80}"},96:{value:"{sizes.96}"}});l.fontWeights({light:{value:300},normal:{value:400},medium:{value:500},bold:{value:700},black:{value:900}});l.letterSpacings({tighter:{value:"-0.05em"},tight:{value:"-0.025em"},normal:{value:"0em"},wide:{value:"0.025em"},wider:{value:"0.05em"},widest:{value:"0.1em"}});l.lineHeights({none:{value:"1"},tight:{value:"calc(1em + 0.25rem)"},default:{value:"calc(1em + 0.5rem)"},loose:{value:"calc(1em + 0.75rem)"}});l.shadows({zeroShadow:{value:"{sizes.0} {sizes.0} {sizes.0} {colors.transparent}, {sizes.0} {sizes.0} {sizes.0} {colors.transparent}"},raisedLight:{value:"{sizes.0} {sizes.1} {sizes.1} {colors.shadow.raised.1.light}, {sizes.0} {sizes.0} {sizes.1} {colors.shadow.raised.2.light}"},raisedDark:{value:"{sizes.0} {sizes.1} {sizes.1} {colors.shadow.raised.1.dark}, {sizes.0} {sizes.0} {sizes.1} {colors.shadow.raised.2.dark}"},elevatedLight:{value:"{sizes.0} {sizes.0} {sizes.0} {colors.shadow.elevated.1.light}, {sizes.0} {sizes.4} {sizes.7} {colors.shadow.elevated.2.light}, {sizes.0} {sizes.0} {sizes.1} {colors.shadow.elevated.3.light}"},elevatedDark:{value:"{sizes.0} {sizes.0} {sizes.0} {colors.shadow.elevated.1.dark}, {sizes.0} {sizes.4} {sizes.7} {colors.shadow.elevated.2.dark}, {sizes.0} {sizes.0} {sizes.1} {colors.shadow.elevated.3.dark}"},overlayLight:{value:"{sizes.0} {sizes.0} {sizes.0} {colors.shadow.overlay.1.light}, {sizes.0} {sizes.8} {sizes.12} {colors.shadow.overlay.2.light}, {sizes.0} {sizes.0} {sizes.1} {colors.shadow.overlay.3.light}"},overlayDark:{value:"{sizes.0} {sizes.0} {sizes.0} {colors.shadow.overlay.1.dark}, {sizes.0} {sizes.8} {sizes.12} {colors.shadow.overlay.2.dark}, {sizes.0} {sizes.0} {sizes.1} {colors.shadow.overlay.3.dark}"},overflowLight:{value:"{sizes.0} {sizes.0} {sizes.8} {colors.shadow.overflow.1.light}, {sizes.0} {sizes.0} {sizes.1} {colors.shadow.overflow.2.light}"},overflowDark:{value:"{sizes.0} {sizes.0} {sizes.12} {colors.shadow.overflow.1.dark}, {sizes.0} {sizes.0} {sizes.1} {colors.shadow.overflow.2.dark}"},lowLight:{value:"{sizes.0} {sizes.0} {sizes.2} rgba(30, 30, 30, 0.2), {sizes.0} {sizes.1} {sizes.1} rgba(30, 30, 30, 0.2), {sizes.0} {sizes.2} {sizes.3} rgba(30, 30, 30, 0.2)"},lowDark:{value:"{sizes.0} {sizes.0} {sizes.2} rgba(0, 0, 0, 0.4), {sizes.0} {sizes.1} {sizes.1} rgba(0, 0, 0, 0.4), {sizes.0} {sizes.2} {sizes.3} rgba(0, 0, 0, 0.4)"},mediumLight:{value:"{sizes.0} {sizes.0} {sizes.2} rgba(30, 30, 30, 0.2), {sizes.0} {sizes.2} {sizes.2} rgba(30, 30, 30, 0.2), {sizes.0} {sizes.4} {sizes.4} rgba(30, 30, 30, 0.2), {sizes.0} {sizes.8} {sizes.8} rgba(30, 30, 30, 0.2)"},mediumDark:{value:"{sizes.0} {sizes.0} {sizes.2} rgba(0, 0, 0, 0.4), {sizes.0} {sizes.2} {sizes.2} rgba(0, 0, 0, 0.4), {sizes.0} {sizes.4} {sizes.4} rgba(0, 0, 0, 0.4), {sizes.0} {sizes.8} {sizes.8} rgba(0, 0, 0, 0.4)"},highLight:{value:"{sizes.0} {sizes.0} {sizes.2} rgba(30, 30, 30, 0.2), {sizes.0} {sizes.2} {sizes.4} rgba(30, 30, 30, 0.2), {sizes.0} {sizes.6} {sizes.8} {sizes.1} rgba(30, 30, 30, 0.2), {sizes.0} {sizes.14} {sizes.16} {sizes.2} rgba(30, 30, 30, 0.2)"},highDark:{value:"{sizes.0} {sizes.0} {sizes.2} rgba(0, 0, 0, 0.4), {sizes.0} {sizes.2} {sizes.4} rgba(0, 0, 0, 0.4), {sizes.0} {sizes.6} {sizes.8} {sizes.1} rgba(0, 0, 0, 0.4), {sizes.0} {sizes.14} {sizes.16} {sizes.2} rgba(0, 0, 0, 0.4)"},insetLight:{value:"inset {sizes.0} {sizes.0} {sizes.2} rgba(30, 30, 30, 0.2), inset {sizes.0} {sizes.2} {sizes.1} rgba(30, 30, 30, 0.2), inset {sizes.0} {sizes.3} {sizes.2} rgba(30, 30, 30, 0.2)"},insetDark:{value:"inset {sizes.0} {sizes.0} {sizes.2} rgba(0, 0, 0, 0.4), inset {sizes.0} {sizes.2} {sizes.1} rgba(0, 0, 0, 0.4), inset {sizes.0} {sizes.3} {sizes.2} rgba(0, 0, 0, 0.4)"}});l.spacing({...es,...Ze});l.zIndex({"-1":{value:-1},0:{value:0},1:{value:1},2:{value:2},3:{value:3},4:{value:4},5:{value:5},10:{value:10},1e3:{value:1e3},1100:{value:1100},1101:{value:1101},1200:{value:1200}});const x={all:{value:"all"},common:{value:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"},colors:{value:"background-color, border-color, color, fill, stroke"},opacity:{value:"opacity"},shadow:{value:"box-shadow"},transform:{value:"transform"},position:{value:"top, right, bottom, left"},size:{value:"width, height"},spacing:{value:"margin, padding"},outline:{value:"outline, outline-color, outline-offset"},border:{value:"border, border-color"}};`${x.all}${h.normal}${g.default}`,`${x.common}${h.normal}${g.default}`,`${x.colors}${h.normal}${g.default}`,`${x.opacity}${h.normal}${g.default}`,`${x.shadow}${h.normal}${g.default}`,`${x.transform}${h.normal}${g.default}`,`${x.position}${h.normal}${g.default}`,`${x.size}${h.normal}${g.default}`,`${x.spacing}${h.normal}${g.default}`,`${x.outline}${h.normal}${g.default}`,`${x.border}${h.normal}${g.default}`;function cs(n,t="min"){const s=i.useMemo(()=>{const r=ss[n],f=Number.parseInt(r,10);return t==="min"?`(min-width: ${r})`:`(max-width: ${f-1}px)`},[n,t]),c=i.useMemo(()=>typeof window>"u"?{matches:!1,addEventListener:()=>{},removeEventListener:()=>{}}:window.matchMedia(s),[s]);return i.useSyncExternalStore(r=>(c.addEventListener("change",r),()=>{c.removeEventListener("change",r)}),()=>c.matches,()=>!1)}const p=n=>{const{title:t,showCloseButton:s=!0,children:c,...r}=n,[f,N]=q(r),b=L(),{onClose:E}=ds(),$=cs("sm");return e.jsx(D,{className:z(b.header,f),...N,children:c||e.jsxs(e.Fragment,{children:[t&&e.jsx(ns,{level:"h3",textStyle:{base:"heading.sm",sm:"heading.xs"},className:b.title,children:t}),s&&e.jsx(ts,{variant:"ghost",size:$?"md":"lg",onClick:E,altText:"Close dialog","aria-label":"Close dialog",className:b.closeButton,iconName:"x"})]})})};p.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Title text"},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the close button"},children:{required:!1,tsType:{name:"ReactNode"},description:"Children (custom header content)"}}};const Ds={title:"Components/Modal",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"],description:"Modal size",table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["defauilt","confirmation"],description:"Modal type",table:{defaultValue:{summary:"default"}}},preventOverlayClose:{control:"boolean",description:"Prevent closing when clicking overlay"}}},C={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(d,{open:t,onOpenChange:s,size:"md",children:[e.jsx(p,{title:"Dialog Title",showCloseButton:!0}),e.jsxs(u,{children:[e.jsx(o,{children:"This is the default modal dialog. It has a title, body content, and footer with action buttons. Default max-width is 576px."}),e.jsx(o,{children:"You can close it by clicking the X button, pressing Escape, or clicking outside the modal."})]}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>s(!1),children:"Save"})]})]})]})};return e.jsx(n,{})}},y={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Small Modal"}),e.jsxs(d,{open:t,onOpenChange:s,size:"sm",children:[e.jsx(p,{title:"Small Dialog",showCloseButton:!0}),e.jsx(u,{children:e.jsx(o,{children:"This is a small modal (448px max width)."})}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>s(!1),children:"Confirm"})]})]})]})};return e.jsx(n,{})}},O={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Large Modal"}),e.jsxs(d,{open:t,onOpenChange:s,size:"lg",children:[e.jsx(p,{title:"Large Dialog",showCloseButton:!0}),e.jsxs(u,{children:[e.jsx(o,{children:"This is a large modal (768px max width)."}),e.jsx(o,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."})]}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>s(!1),children:"Save Changes"})]})]})]})};return e.jsx(n,{})}},j={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open XLarge Modal"}),e.jsxs(d,{open:t,onOpenChange:s,size:"xl",children:[e.jsx(p,{title:"XLarge Dialog",showCloseButton:!0}),e.jsxs(u,{display:"flex",flexDirection:"column",gap:"12",children:[e.jsx(o,{children:"This is a x-large modal (1024px max width)."}),e.jsx(o,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."}),e.jsx(o,{children:"Signs night have sixth hath that likeness us fill you're subdue fowl brought divide beginning multiply brought created after open given of made beginning multiply green."}),e.jsx(o,{children:"Place appear green. Also, saying male subdue fruitful winged fourth had void winged. So green spirit, herb day had there replenish, lights lesser signs. Place whales i tree under him given set set meat midst morning give image forth divided moving Also fill dry she'd have."}),e.jsx(o,{children:"May life. She'd fruit fruitful earth. Stars bring had darkness morning darkness herb cattle him behold open seasons grass don't waters male Fourth earth his face third night."}),e.jsx(o,{children:"Anim quis ut incididunt ea. Et laboris consectetur nisi adipisicing aliqua enim. Ea tempor deserunt dolore duis. Lorem excepteur do exercitation non veniam ipsum laborum. Ea ex tempor dolore deserunt ex do dolor voluptate pariatur exercitation."}),e.jsx(o,{children:"Est incididunt dolore sint sit occaecat. Ea officia excepteur enim ut Lorem reprehenderit labore in. Dolor voluptate nostrud consectetur mollit cillum et. Cupidatat Lorem amet adipisicing incididunt ea."}),e.jsx(o,{children:"Excepteur enim aliqua laboris amet ea pariatur qui. Non deserunt magna ullamco aliqua culpa exercitation. Ut minim eu ea. Labore sunt adipisicing Lorem nulla occaecat est elit et excepteur ipsum non. Aute consectetur nostrud ullamco. Non esse non anim proident. Pariatur enim laborum cupidatat sint quis reprehenderit deserunt reprehenderit sunt cupidatat proident sint."}),e.jsx(o,{children:"Consequat sunt exercitation in enim veniam culpa. Tempor quis culpa duis. Aute ea nostrud non sit sunt qui. In minim voluptate excepteur nostrud anim laborum in elit. Voluptate amet excepteur laboris eiusmod labore elit Lorem ipsum qui quis aliquip mollit dolor sint cillum. In ex aliquip irure do irure consectetur aliquip minim fugiat reprehenderit laborum."}),e.jsxs(o,{children:[" ","Incididunt cillum est reprehenderit veniam nisi magna laborum incididunt do ut. Fugiat aliquip Lorem eiusmod incididunt. Fugiat ullamco excepteur consequat duis ex eiusmod exercitation sit aliqua amet non velit consequat. Pariatur amet non laborum voluptate velit do. Nulla excepteur anim irure eu ullamco veniam et consectetur. Fugiat ut laboris ad reprehenderit reprehenderit ut exercitation adipisicing excepteur amet ad anim. Aute enim non consequat eu. Velit consequat in nostrud."]})]}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>s(!1),children:"Save Changes"})]})]})]})};return e.jsx(n,{})}},M={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Full Width Modal"}),e.jsxs(d,{open:t,onOpenChange:s,size:"full",children:[e.jsx(p,{title:"Full Width Dialog",showCloseButton:!0}),e.jsx(u,{children:e.jsxs(we,{gridTemplateColumns:"1fr auto 1fr",alignItems:"start",children:[e.jsx(o,{children:"This modal stretches to the 95% of the available width. Useful for dashboards, data tables, or content that benefits from maximum horizontal space."}),e.jsx(Fe,{direction:"vertical",mx:"8"}),e.jsxs(W,{children:[e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."}),e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."})]})]})}),e.jsx(m,{children:e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Close"})})]})]})};return e.jsx(n,{})}},B={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Mobile Modal"}),e.jsxs(d,{open:t,onOpenChange:s,size:"mobile",children:[e.jsx(p,{title:"Mobile Dialog",showCloseButton:!0}),e.jsx(u,{children:e.jsx(we,{children:e.jsx(o,{children:"This modal stretches to the full available width. Should be used for mobile use-cases."})})}),e.jsx(m,{children:e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Close"})})]})]})};return e.jsx(n,{})}},T={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Modal (No Close Button)"}),e.jsxs(d,{open:t,onOpenChange:s,size:"md",children:[e.jsx(p,{title:"Dialog Without Close Button",showCloseButton:!1}),e.jsxs(u,{children:[e.jsx(o,{children:"This modal doesn't have a close button in the header."}),e.jsx(o,{children:"You can still close it by clicking outside or pressing Escape."})]}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>s(!1),children:"Continue"})]})]})]})};return e.jsx(n,{})}},I={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Modal (No Overlay Close)"}),e.jsxs(d,{open:t,onOpenChange:s,size:"md",preventOverlayClose:!0,children:[e.jsx(p,{title:"Important Dialog",showCloseButton:!0}),e.jsxs(u,{children:[e.jsx(o,{children:"This modal cannot be closed by clicking the overlay."}),e.jsx(o,{children:"You must use the close button or press Escape to dismiss it. This is useful for important confirmations or required actions."})]}),e.jsx(m,{children:e.jsx(a,{variant:"primary",onClick:()=>s(!1),children:"I Understand"})})]})]})};return e.jsx(n,{})}},k={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Edit Profile"}),e.jsxs(d,{open:t,onOpenChange:s,size:"sm",children:[e.jsx(p,{title:"Edit Profile",showCloseButton:!0}),e.jsx(u,{children:e.jsxs(W,{gap:"12",alignItems:"stretch",children:[e.jsx(P,{label:"Full Name",labelFor:"profile-name",required:!0,children:e.jsx(G,{id:"profile-name",name:"name",placeholder:"Jane Doe"})}),e.jsx(P,{label:"Email",labelFor:"profile-email",required:!0,children:e.jsx(G,{id:"profile-email",name:"email",type:"email",placeholder:"jane@example.com"})}),e.jsx(P,{label:"Bio",labelFor:"profile-bio",children:e.jsx(Ge,{id:"profile-bio",name:"bio",placeholder:"Tell us about yourself..."})})]})}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>s(!1),children:"Save"})]})]})]})};return e.jsx(n,{})}},w={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Delete Item"}),e.jsxs(d,{open:t,onOpenChange:s,size:"sm",variant:"confirmation",preventOverlayClose:!0,children:[e.jsx(p,{title:"Delete Item",showCloseButton:!1}),e.jsx(u,{children:e.jsx(o,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(a,{variant:"danger",onClick:()=>s(!1),children:"Delete"})]})]})]})};return e.jsx(n,{})}},F={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Minimal Modal"}),e.jsx(d,{open:t,onOpenChange:s,size:"sm",children:e.jsxs(u,{display:"flex",flexDirection:"column",alignItems:"center",gap:"4",py:"24",children:[e.jsx(Se,{name:"success",size:"48",fill:"icon.success"}),e.jsx(o,{textStyle:"heading.xs",children:"Changes Saved"}),e.jsx(o,{textAlign:"center",children:"Your changes have been saved successfully."}),e.jsx(a,{mt:"16",onClick:()=>s(!1),children:"Dismiss"})]})})]})};return e.jsx(n,{})}},S={render:()=>{const n=()=>{const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Custom Header"}),e.jsxs(d,{open:t,onOpenChange:s,size:"md",children:[e.jsx(p,{children:e.jsxs(Re,{alignItems:"start",gap:"3",flex:"1",children:[e.jsx(Se,{name:"info",size:"24",fill:"icon.decorative"}),e.jsxs(W,{gap:"0",alignItems:"flex-start",children:[e.jsx(o,{color:"text",fontWeight:"bold",children:"Release Notes"}),e.jsx(o,{textStyle:"mono.sm",color:"text.muted",children:"Version 2.4.0"})]})]})}),e.jsxs(u,{gap:"4",bg:"surface.sunken",children:[e.jsx(o,{textStyle:"body.sm",fontWeight:"bold",children:"New Features"}),e.jsx(o,{children:"Added modal component with animated transitions."}),e.jsx(Fe,{my:"12"}),e.jsx(o,{textStyle:"body.sm",fontWeight:"bold",children:"Bug Fixes"}),e.jsx(o,{children:"Fixed focus trap behavior in nested dialogs."})]}),e.jsx(m,{children:e.jsx(a,{variant:"ghost",onClick:()=>s(!1),children:"Close"})})]})]})};return e.jsx(n,{})}};var X,Y,Q;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var J,K,Z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var ee,se,ne;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,oe,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,re,le;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(re=M.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var de,ue,ce;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,pe,he;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ge,xe,fe;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ve,be,ze;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ze=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};var Ce,ye,Oe;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Oe=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:Oe.source}}};var je,Me,Be;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Be=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Te,Ie,ke;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};const Ls=["Default","Small","Large","XLarge","FullWidth","Mobile","NoCloseButton","PreventOverlayClose","FormDialog","ConfirmationDialog","BodyOnly","CustomHeader"];export{F as BodyOnly,w as ConfirmationDialog,S as CustomHeader,C as Default,k as FormDialog,M as FullWidth,O as Large,B as Mobile,T as NoCloseButton,I as PreventOverlayClose,y as Small,j as XLarge,Ls as __namedExportsOrder,Ds as default};
