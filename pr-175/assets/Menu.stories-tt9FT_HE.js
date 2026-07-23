import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BKyFwriW.js";import{b as et,B as x,d as L,e as dt,H as Fn,V as tt,F as nn}from"./Box-D8syd76n.js";import{B as Ln}from"./BreakpointIndicator-l9udiV1Y.js";import{B as ne}from"./Button-BOfSUZKt.js";import{F as Me}from"./FormField-B0u84Tqi.js";import{T as te}from"./Text-OMCUSOol.js";import{T as be}from"./TextInput-DSkIHNie.js";import{n as rn,u as Vn,d as Wn,e as sn,o as on,j as an,a as ln,g as cn,k as un,l as dn,b as pn,p as mn,q as Kn,r as pt,t as Je,F as fn,c as gn,s as _n,v as bn,w as hn,x as Hn,y as Gn,z as zn,A as $n,B as Un,C as Qn}from"./floating-CMrvfkt4.js";import{l as xn,a as Zn,c as yn,H as ue}from"./ListItem-Cn5IbNKt.js";import{m as Mn}from"./menu-bfhB-Iew.js";import{I as Z}from"./Icon-CLSA3e9P.js";import"./IconConfig-CuyDtWEJ.js";import{C as Xn}from"./Checkbox-CiUwpcUt.js";import{D as Yn}from"./Divider-KBSxUyGs.js";import{T as Jn}from"./Toggle-CUhhVt_e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-C_pdiug7.js";import"./radii-qsSgFAtK.js";import"./index-DOpYXeGo.js";import"./colors-CSSfwm93.js";import"./Tag-PXCuOP37.js";import"./Spinner-BUXJIvki.js";import"./FieldContext-D6URyQos.js";import"./Label-Bb6hdk3t.js";import"./Tooltip-CwX3MQ24.js";import"./IconButton-sGjsS_RJ.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const de={group:"MenuGroup",item:"MenuItem",subMenu:"SubMenu"},Fe="__menuComponentType",er=({label:o,description:n})=>[o,n].filter(Boolean).join(" ").trim(),tr={query:"",filterMode:"none",highlightMatches:!0,getItemText:er},jn=a.createContext({...tr}),vn=a.createContext(null),Sn=a.createContext(null),nt=()=>a.useContext(jn),rt=()=>{const o=a.useContext(vn);if(!o)throw new Error("Menu compound components must be used within <Menu />");return o},wn=()=>a.useContext(Sn),In=jn.Provider,nr=vn.Provider,Tn=Sn.Provider,Be=({textValue:o,label:n,description:s,getItemText:r})=>o||r({label:n,description:s}),Oe=({textValue:o,query:n,filterMode:s})=>s==="none"||!n.trim()?!0:o.toLowerCase().includes(n.trim().toLowerCase()),rr=o=>{if(!o||typeof o!="object"||!("type"in o))return null;const n=o.type;return(n==null?void 0:n[Fe])??null},Re=(o,n)=>a.Children.toArray(o).some(s=>{if(!a.isValidElement(s))return!1;const r=s,i=rr(r);if(i===de.item){if(r.props.variant==="divider")return!0;const u=Be({textValue:r.props.textValue,label:r.props.label,description:r.props.description,getItemText:n.getItemText});return Oe({textValue:u,query:n.query,filterMode:n.filterMode})}if(i===de.subMenu){const b=Be({textValue:r.props.textValue,label:r.props.label,description:r.props.description,getItemText:n.getItemText});return Oe({textValue:b,query:n.query,filterMode:n.filterMode})||Re(r.props.children,n)}return i===de.group?Re(r.props.children,n):!0});function kn(){const[o,n]=a.useState(!1);return a.useLayoutEffect(()=>{const s=window.matchMedia("(any-pointer: coarse)"),r=()=>{n(!s.matches)};return r(),s.addEventListener("change",r),()=>s.removeEventListener("change",r)},[]),o}function sr(o){const n=o.current;if(!(n!=null&&n.length))return null;for(let s=0;s<n.length;s++){const r=n[s];if(r&&!(r.hasAttribute("disabled")||r.getAttribute("aria-disabled")==="true"))return s}return null}function Pn(o,n,s){const r=o.current,i=r.length;if(i===0)return s??null;const b=g=>{const m=r[g];return m?m.hasAttribute("disabled")||m.getAttribute("aria-disabled")==="true":!0};let u=s??0;for(let g=0;g<i;g++)if(u=(u+n+i)%i,!b(u))return u;return s??null}const or=({label:o,description:n})=>[o,n].filter(Boolean).join(" ").trim(),mt=(o,n)=>a.Children.map(o,(s,r)=>{if(!a.isValidElement(s))return s;const i=s.key??r;return a.cloneElement(s,{key:`${n}-${String(i)}`})}),v=o=>{var ct;const n=rn(),{trigger:s,children:r,open:i,defaultOpen:b,onOpenChange:u,placement:g="bottom-start",strategy:m="absolute",closeOnSelect:H=!0,inline:V=!1,triggerInteraction:I="click",triggerOpenDelay:X=75,triggerCloseDelay:R=100,subMenuInteraction:G="hover",density:D="compact",panel:re,query:se="",filterMode:z="none",renderNoResults:Y,highlightMatches:q=!!se,getItemText:k=or,onMenubarEdgeNavigate:h,...d}=o,[J,ee]=et(d),E=ee.style,P=Mn({density:D,panel:re}),y=xn({density:D}),O=!!s&&!V,[pe,W]=a.useState(b??!1),j=i!==void 0,T=j?i:pe,A=O?T:!0,$=(f,N,C)=>{!f&&(C==="hover"||C==="safe-polygon")&&(I==="hover"||I==="click-and-hover")||(j||W(f),u==null||u(f))},[F,U]=a.useState([]),[K,le]=a.useState({width:null,height:null}),p=F.length;a.useEffect(()=>{T||U([])},[T]);const S=Vn({nodeId:n,open:O?T:!0,onOpenChange:$,placement:g,strategy:m,middleware:Wn({extras:[_n()]})}),ie=a.useRef([]),Le=a.useRef([]),[B,me]=a.useState(null),Ve=kn(),We=sn(S.context,{enabled:O&&(I==="hover"||I==="click-and-hover"),delay:{open:X,close:R},handleClose:on({blockPointerEvents:Ve})}),Ke=an(S.context,{enabled:O&&(I==="click"||I==="click-and-hover")}),_e=ln(S.context,{enabled:O}),He=cn(S.context,{role:"menu"}),Ge=un(S.context,{listRef:ie,activeIndex:B,onNavigate:me,loop:!0}),ze=dn(S.context,{listRef:Le,activeIndex:B,onMatch:me,resetMs:600}),{getReferenceProps:$e,getFloatingProps:Ue,getItemProps:Qe}=pn([We,Ke,_e,He,Ge,ze]),he=a.useMemo(()=>({query:se,filterMode:z,highlightMatches:q,getItemText:k}),[z,k,q,se]),st=((ct=F[F.length-1])==null?void 0:ct.children)??r,ce=Re(st,he),fe={density:D,panel:re,closeOnSelect:H,subMenuInteraction:G,inline:V,onCloseMenu:()=>{$(!1),U([])},onPushDiginLevel:(f,N)=>{U(C=>{const _=C[C.length-1];return _&&_.title===f&&_.children===N?C:[...C,{key:`${f}-${C.length}`,title:f,children:N}]})},onPopDiginLevel:()=>{U(f=>f.slice(0,-1))},diginDepth:p,onMenubarEdgeNavigate:h},Ze=a.useCallback(f=>{me(N=>Pn(ie,f,N))},[]),Xe={activeIndex:B,getItemProps:f=>Qe(f),navigateMainAxis:Ze,nestedMenuDepth:0},oe=[{key:"root",title:"Menu",children:r},...F],Q=oe[Math.min(p,oe.length-1)],ge=oe.length,l=ge*100,w=100/ge,c=p*100/ge,An=!!re&&G==="digin",xe=G==="digin"&&ce,ot=a.useRef(null);a.useLayoutEffect(()=>{if(!A||!xe){le({width:null,height:null});return}const f=ot.current;if(!f)return;const N=()=>{const _=Math.ceil(f.scrollWidth),ut=Math.ceil(f.scrollHeight);le(Ye=>Ye.width===_&&Ye.height===ut?Ye:{width:_,height:ut})};N();const C=new ResizeObserver(N);return C.observe(f),()=>{C.disconnect()}},[Q.children,Q.key,Q.title,D,p,ce,A,xe]);const Nn=xe&&K.width&&K.height?{width:`${K.width}px`,height:`${K.height}px`}:{},Dn={...O&&!V?S.floatingStyles:{},...Nn,...E??{}},qn=An?{inset:"0",width:"100%",height:"100%"}:{},at=e.jsx(nr,{value:fe,children:e.jsx(In,{value:he,children:e.jsxs(x,{ref:S.refs.setFloating,className:L(P.wrapper,J),...Ue(),...ee,style:Dn,children:[!ce&&e.jsx(x,{className:P.noResults,children:Y??e.jsx(te,{textStyle:"body.sm",children:"No results found"})}),ce&&e.jsxs(x,{className:P.levelsViewport,children:[xe&&e.jsx(x,{ref:ot,className:P.sizeProbe,"aria-hidden":!0,style:qn,children:e.jsxs(x,{className:P.level,children:[p>0&&e.jsxs(x,{as:"button",type:"button",className:P.backHeader,children:[e.jsx(Z,{name:"caret-left",fill:"icon"}),Q.title]}),e.jsx(x,{className:y,children:mt(Q.children,`${Q.key}-probe`)})]})}),e.jsx(x,{className:P.levelsTrack,style:{width:`${l}%`,transform:`translateX(-${c}%)`},children:oe.map((f,N)=>{const C=N===p,_=mt(f.children,f.key);return C?e.jsx(Tn,{value:Xe,children:e.jsx(mn,{elementsRef:ie,labelsRef:Le,children:e.jsxs(x,{className:P.level,style:{flex:`0 0 ${w}%`},children:[N>0&&e.jsxs(x,{as:"button",type:"button",className:P.backHeader,onClick:fe.onPopDiginLevel,children:[e.jsx(Z,{name:"caret-left"}),f.title]}),e.jsx(x,{className:y,children:_})]})})},f.key):e.jsxs(x,{className:P.level,style:{flex:`0 0 ${w}%`},"aria-hidden":!0,children:[N>0&&e.jsxs(x,{as:"button",type:"button",className:P.backHeader,onClick:fe.onPopDiginLevel,children:[e.jsx(Z,{name:"caret-left"}),f.title]}),e.jsx(x,{className:y,children:_})]},f.key)})})]})]})})}),Cn=V||!s,En=a.isValidElement(s)?s.props.ref:void 0,Bn=Kn([En,S.refs.setReference]);if(Cn)return e.jsx(pt,{children:e.jsx(Je,{id:n,children:at})});const lt=a.isValidElement(s)&&s.props?(()=>{const{ref:f,children:N,onKeyDown:C,..._}=s.props;return{rest:_,onKeyDown:C}})():{rest:{},onKeyDown:void 0},On=lt.rest,ye=lt.onKeyDown,it=$e({...On,ref:Bn}),Rn=f=>{if(T&&(f.key==="ArrowLeft"||f.key==="ArrowRight")&&typeof ye=="function"){ye(f);return}const N=it.onKeyDown;typeof N=="function"&&N(f),typeof ye=="function"&&ye(f)};return e.jsx(pt,{children:e.jsxs(Je,{id:n,children:[a.cloneElement(s,{...it,onKeyDown:Rn}),T&&e.jsx(fn,{children:e.jsx(gn,{context:S.context,modal:!1,order:h?["reference","content"]:void 0,children:at})})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{trigger:{required:!1,tsType:{name:"ReactElement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},strategy:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}]},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},triggerInteraction:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'click-and-hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'click-and-hover'"}]},description:""},triggerOpenDelay:{required:!1,tsType:{name:"number"},description:""},triggerCloseDelay:{required:!1,tsType:{name:"number"},description:""},subMenuInteraction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},query:{required:!1,tsType:{name:"string"},description:""},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},filterMode:{required:!1,tsType:{name:"union",raw:"'none' | 'contains'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'contains'"}]},description:""},renderNoResults:{required:!1,tsType:{name:"ReactNode"},description:""},highlightMatches:{required:!1,tsType:{name:"boolean"},description:""},getItemText:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: { label?: string; description?: string }) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ label?: string; description?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"string"}}},description:""},panel:{required:!1,tsType:{name:"MenuVariantProps['panel']",raw:"MenuVariantProps['panel']"},description:""},onMenubarEdgeNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(direction: 1 | -1) => void",signature:{arguments:[{type:{name:"union",raw:"1 | -1",elements:[{name:"literal",value:"1"},{name:"literal",value:"-1"}]},name:"direction"}],return:{name:"void"}}},description:`When this \`Menu\` is used as one section of a horizontal menubar, pass a
handler so Arrow Left / Arrow Right on **leaf** items and at the first
submenu level can move to the previous/next menubar section (APG Navigation
Menubar pattern). Typically closes this menu then focuses/opens the
adjacent section’s trigger.
Also enables focus order so the trigger keeps focus while the panel is open
until the user arrows into the list (otherwise focus would jump to the first
row and horizontal menubar keys would not run on the trigger).`},as:{required:!1,tsType:{name:"T"},description:""}}};const ae=o=>{const{label:n,children:s,divider:r,...i}=o,b=rt(),u=nt();return Re(s,u)?e.jsx(Zn,{density:b.density,label:n,divider:r,...i,children:s}):null};ae[Fe]=de.group;ae.__docgenInfo={description:"",methods:[],displayName:"MenuGroup",props:{as:{required:!1,tsType:{name:"T"},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},divider:{required:!1,tsType:{name:"boolean"},description:""}}};const t=o=>{const{label:n,description:s,variant:r="default",disabled:i,selected:b,iconBefore:u,iconAfter:g,href:m,target:H,rel:V,closeOnSelect:I,density:X,textValue:R,onClick:G,...D}=o,[re,se]=et(D),z={...se},Y="onKeyDown"in z&&typeof z.onKeyDown=="function"?z.onKeyDown:void 0;delete z.onKeyDown;const q=rt(),k=bn(),h=nt(),d=wn(),J=r==="divider"?"default":r,ee=X??q.density,E=yn({density:ee,variant:J,iconBefore:!!u,iconAfter:!!g,selected:!!b}),P=Be({textValue:R,label:n,description:s,getItemText:h.getItemText}),y=Oe({textValue:P,query:h.query,filterMode:h.filterMode}),O=hn({label:P});if(r==="divider")return e.jsx(Yn,{});if(!y)return null;const pe=I??q.closeOnSelect,W=R??n??"menu-item",j=p=>{G==null||G(p),p.defaultPrevented||k==null||k.events.emit("click"),!p.defaultPrevented&&pe&&q.onCloseMenu()},T=d?d.getItemProps({onClick:j}):{onClick:j},{onKeyDown:A,...$}=T,F=p=>{if(p.key==="ArrowLeft"||p.key==="ArrowRight"){if(m){A==null||A(p);return}const S=(d==null?void 0:d.nestedMenuDepth)??0;if(p.key==="ArrowLeft"&&S>0&&(d!=null&&d.closeParentSubMenuFlyout)){p.preventDefault(),p.stopPropagation(),d.closeParentSubMenuFlyout();return}if(p.key==="ArrowLeft"&&S===0&&q.onMenubarEdgeNavigate){p.preventDefault(),p.stopPropagation(),q.onCloseMenu(),q.onMenubarEdgeNavigate(-1);return}if(p.key==="ArrowRight"&&q.onMenubarEdgeNavigate){p.preventDefault(),p.stopPropagation(),q.onCloseMenu(),q.onMenubarEdgeNavigate(1);return}}A==null||A(p),Y==null||Y(p)},U=r==="checkbox"||r==="toggle"?"menuitemcheckbox":"menuitem",K=m?{as:"a",href:m,target:H,rel:V,...i&&{onClick:p=>{p.preventDefault()}}}:{as:"button",type:"button",disabled:i},le=p=>{O.ref(p)};return e.jsxs(x,{...K,className:L(E.wrapper,re),ref:le,role:U,"aria-checked":r==="checkbox"||r==="toggle"?!!b:void 0,"aria-disabled":i,"data-selected":b,"data-disabled":i,"data-active":d?d.activeIndex===O.index:!1,tabIndex:d?d.activeIndex===O.index?0:-1:0,...$,onKeyDown:F,...z,children:[r==="checkbox"&&e.jsx(Xn,{name:W,className:L(E.beforeSlot,dt({pointerEvents:"none"})),checked:!!b,readOnly:!0,tabIndex:-1,"aria-hidden":!0}),r==="toggle"&&e.jsx(Jn,{name:W,className:L(E.beforeSlot,dt({pointerEvents:"none"})),checked:!!b,readOnly:!0,mr:"4",tabIndex:-1,"aria-hidden":!0}),u&&e.jsx(Z,{className:L(E.icon,E.beforeSlot),name:u}),e.jsxs(x,{className:E.itemMain,children:[n&&e.jsx(te,{className:E.itemLabel,children:e.jsx(ue,{value:n,query:h.query,enabled:h.highlightMatches})}),s&&e.jsx(te,{className:E.itemDescription,children:e.jsx(ue,{value:s,query:h.query,enabled:h.highlightMatches})})]}),g&&e.jsx(Z,{className:L(E.icon,E.afterSlot),name:g,ml:"auto"})]})};t[Fe]=de.item;t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'checkbox' | 'toggle' | 'divider'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'toggle'"},{name:"literal",value:"'divider'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},iconAfter:{required:!1,tsType:{name:"IconNamesList"},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const M=o=>{const n=rn(),s=Hn(),r=bn(),{label:i,description:b,disabled:u,selected:g,iconBefore:m,interaction:H,placement:V,children:I,textValue:X,density:R,...G}=o,[D,re]=et(G),{style:se,...z}=re,Y=se,q=z,k=rt(),h=nt(),d=wn(),J=H??k.subMenuInteraction,ee=typeof R=="string"?R:k.density,E=Mn({density:ee}),P=xn({density:ee}),y=yn({density:ee,iconBefore:!!m,iconAfter:!0,selected:!!g}),O=Be({textValue:X,label:i,description:b,getItemText:h.getItemText}),pe=Oe({textValue:O,query:h.query,filterMode:h.filterMode}),W=hn({label:O}),[j,T]=a.useState(!1),[A,$]=a.useState(null),F=a.useRef([]),U=a.useRef([]),K=a.useRef(null),le=kn(),p=a.useRef(!1),S=a.useRef(!1),ie=a.useCallback(()=>{p.current=!0,T(!0)},[]),B=Gn({nodeId:n,open:j,onOpenChange:(l,w,c)=>{!l&&c==="focus-out"&&J==="hover"&&s!=null||T(l)},placement:V??"right-start",whileElementsMounted:Qn,middleware:[zn({mainAxis:0,alignmentAxis:-4}),$n(),Un({padding:8})]}),me=sn(B.context,{enabled:!u&&s!=null,delay:{open:75},handleClose:on({blockPointerEvents:le})}),Ve=an(B.context,{event:"mousedown",toggle:!1,ignoreMouse:!0}),We=ln(B.context,{bubbles:!0}),Ke=cn(B.context,{role:"menu"}),_e=un(B.context,{listRef:F,activeIndex:A,onNavigate:$,nested:!0,focusItemOnOpen:!1}),He=dn(B.context,{listRef:U,activeIndex:A,onMatch:j?$:void 0,resetMs:600}),{getReferenceProps:Ge,getFloatingProps:ze,getItemProps:$e}=pn([me,Ve,We,Ke,_e,He]);a.useEffect(()=>{if(!r)return;const l=()=>{T(!1)},w=c=>{c.nodeId!==n&&c.parentId===s&&T(!1)};return r.events.on("click",l),r.events.on("menuopen",w),()=>{r.events.off("click",l),r.events.off("menuopen",w)}},[r,n,s]),a.useEffect(()=>{j&&r&&r.events.emit("menuopen",{parentId:s,nodeId:n})},[r,j,n,s]),a.useEffect(()=>{j||$(null)},[j]),a.useLayoutEffect(()=>{if(!j||!p.current)return;const l=()=>{const w=sr(F);return w===null?!1:(p.current=!1,S.current=!0,$(w),!0)};l()||requestAnimationFrame(()=>{l()||(p.current=!1)})},[j]),a.useEffect(()=>{if(!j){S.current=!1;return}if(!S.current||A===null)return;const l=F.current[A];l&&l.focus({preventScroll:!0}),S.current=!1},[j,A]);const Ue=a.useMemo(()=>({query:h.query,filterMode:h.filterMode,highlightMatches:h.highlightMatches,getItemText:h.getItemText}),[h]),Qe=a.useCallback(l=>{$(w=>Pn(F,l,w))},[]),he=a.useCallback(()=>{T(!1),queueMicrotask(()=>{var l;(l=K.current)==null||l.focus()})},[]),ce=((d==null?void 0:d.nestedMenuDepth)??0)+1,fe={activeIndex:A,getItemProps:l=>$e(l),navigateMainAxis:Qe,nestedMenuDepth:ce,closeParentSubMenuFlyout:he},Ze={...B.floatingStyles,...Y||{}},Xe=d?d.getItemProps({onKeyDown:l=>{l.key==="ArrowRight"&&!u&&(l.preventDefault(),ie())}}):{onKeyDown:l=>{l.key==="ArrowRight"&&!u&&(l.preventDefault(),ie())}},oe=Ge(Xe),Q=oe.onKeyDown,ge={...oe,onKeyDown:l=>{if(J!=="digin"&&d){const w=d.nestedMenuDepth??0;if(l.key==="ArrowLeft"){if(j){l.preventDefault(),l.stopPropagation(),T(!1),queueMicrotask(()=>{var c;return(c=K.current)==null?void 0:c.focus()});return}if(w===0&&k.onMenubarEdgeNavigate){l.preventDefault(),l.stopPropagation(),k.onCloseMenu(),k.onMenubarEdgeNavigate(-1);return}}}if(J!=="digin"&&(d!=null&&d.navigateMainAxis)&&(l.key==="ArrowDown"||l.key==="ArrowUp")){l.preventDefault(),l.stopPropagation(),j&&T(!1),d.navigateMainAxis(l.key==="ArrowDown"?1:-1);return}typeof Q=="function"&&Q(l)}};if(!pe)return null;if(J==="digin"){const w={...d?d.getItemProps({onClick:c=>{c==null||c.preventDefault(),c==null||c.stopPropagation(),u||k.onPushDiginLevel(i,I)},onKeyDown:c=>{(c.key==="ArrowRight"||c.key==="Enter"||c.key===" ")&&(c.preventDefault(),c.stopPropagation(),u||k.onPushDiginLevel(i,I))}}):{onClick:c=>{c==null||c.preventDefault(),c==null||c.stopPropagation(),u||k.onPushDiginLevel(i,I)},onKeyDown:c=>{c&&(c.key==="ArrowRight"||c.key==="Enter"||c.key===" ")&&(c.preventDefault(),c.stopPropagation(),u||k.onPushDiginLevel(i,I))}}};return e.jsxs("button",{...q,role:"menuitem","aria-disabled":u,disabled:u,className:L(y.wrapper,D),ref:c=>{W.ref(c)},style:Y,"data-selected":g,"data-disabled":u,"data-active":d?d.activeIndex===W.index:!1,tabIndex:d?d.activeIndex===W.index?0:-1:0,...w,type:"button",children:[m&&e.jsx(Z,{className:L(y.icon,y.beforeSlot),name:m}),e.jsxs(x,{className:y.itemMain,children:[e.jsx(te,{className:y.itemLabel,children:e.jsx(ue,{value:i,query:h.query,enabled:h.highlightMatches})}),b&&e.jsx(te,{className:y.itemDescription,children:e.jsx(ue,{value:b,query:h.query,enabled:h.highlightMatches})})]}),e.jsx(Z,{className:L(y.icon,y.afterSlot),name:"caret-right",ml:"auto"})]})}return e.jsxs(Je,{id:n,children:[e.jsxs("button",{...q,role:"menuitem","aria-haspopup":"menu","aria-expanded":j,"aria-disabled":u,disabled:u,className:y.wrapper,ref:l=>{K.current=l,W.ref(l),B.refs.setReference(l)},"data-selected":g,"data-disabled":u,"data-active":d?d.activeIndex===W.index:!1,tabIndex:d?d.activeIndex===W.index?0:-1:0,...ge,type:"button",children:[m&&e.jsx(Z,{className:L(y.icon,y.beforeSlot),name:m}),e.jsxs(x,{className:y.itemMain,children:[e.jsx(te,{className:y.itemLabel,children:e.jsx(ue,{value:i,query:h.query,enabled:h.highlightMatches})}),b&&e.jsx(te,{className:y.itemDescription,children:e.jsx(ue,{value:b,query:h.query,enabled:h.highlightMatches})})]}),e.jsx(Z,{className:L(y.icon,y.afterSlot),name:"caret-right",ml:"auto"})]}),j&&e.jsx(fn,{children:e.jsx(gn,{context:B.context,modal:!1,initialFocus:-1,returnFocus:!1,children:e.jsx(In,{value:Ue,children:e.jsx(Tn,{value:fe,children:e.jsx(x,{ref:B.refs.setFloating,className:L(E.wrapper,D),...ze({onKeyDown:l=>{l.key==="ArrowLeft"&&(l.preventDefault(),T(!1),queueMicrotask(()=>{var w;return(w=K.current)==null?void 0:w.focus()}))}}),style:Ze,children:e.jsx(mn,{elementsRef:F,labelsRef:U,children:e.jsx(x,{className:P,children:I})})})})})})})]})};M[Fe]=de.subMenu;M.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},interaction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""}}};const Wr={title:"Components/Menu",component:v,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},ar=()=>{const[o,n]=a.useState("item-2");return e.jsxs(v,{inline:!0,closeOnSelect:!1,children:[e.jsx(t,{label:"Option One",selected:o==="item-1",onClick:()=>n("item-1")}),e.jsx(t,{label:"Option Two",selected:o==="item-2",onClick:()=>n("item-2")}),e.jsx(t,{label:"Option Three",selected:o==="item-3",onClick:()=>n("item-3")})]})},lr=()=>{const[o,n]=a.useState(["beta"]),s=r=>{n(i=>i.includes(r)?i.filter(b=>b!==r):[...i,r])};return e.jsx(v,{inline:!0,closeOnSelect:!1,children:e.jsxs(ae,{label:"Wave type",children:[e.jsx(t,{variant:"checkbox",label:"Alpha",selected:o.includes("alpha"),onClick:()=>s("alpha")}),e.jsx(t,{variant:"checkbox",label:"Beta",selected:o.includes("beta"),onClick:()=>s("beta")}),e.jsx(t,{variant:"checkbox",label:"Gamma",selected:o.includes("gamma"),onClick:()=>s("gamma")})]})})},ir=()=>{const[o,n]=a.useState(!1),[s,r]=a.useState(!0);return e.jsxs(v,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(ae,{label:"Options",divider:!0,children:[e.jsx(t,{variant:"toggle",label:"Compact mode",selected:o,onClick:()=>n(i=>!i)}),e.jsx(t,{variant:"toggle",label:"Email alerts",selected:s,onClick:()=>r(i=>!i)})]}),e.jsx(t,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},cr=()=>{const[o,n]=a.useState(""),[s,r]=a.useState(""),[i,b]=a.useState(""),[u,g]=a.useState("");return e.jsxs(v,{trigger:e.jsx(ne,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(t,{label:"Dashboard"}),e.jsx(M,{label:"Edit profile",children:e.jsxs(x,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(Me,{label:"Profile name",labelFor:"profile-name",children:e.jsx(be,{id:"profile-name",name:"profileName",value:o,onChange:m=>n(m.target.value)})}),e.jsx(Me,{label:"Owner",labelFor:"profile-owner",children:e.jsx(be,{id:"profile-owner",name:"profileOwner",value:s,onChange:m=>r(m.target.value)})}),e.jsx(ne,{variant:"primary",children:"Submit"})]})}),e.jsx(M,{label:"Create alert",children:e.jsxs(x,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(Me,{label:"Topic",labelFor:"alert-topic",children:e.jsx(be,{id:"alert-topic",name:"alertTopic",value:i,onChange:m=>b(m.target.value)})}),e.jsx(Me,{label:"Channel",labelFor:"alert-channel",children:e.jsx(be,{id:"alert-channel",name:"alertChannel",value:u,onChange:m=>g(m.target.value)})}),e.jsx(ne,{variant:"primary",children:"Submit"})]})})]})},ur=()=>{const[o,n]=a.useState("");return e.jsxs(tt,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(be,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:o,onChange:s=>n(s.target.value)}),e.jsxs(v,{inline:!0,query:o,filterMode:"contains",highlightMatches:!0,children:[e.jsx(t,{label:"Account settings",description:"Manage profile and security"}),e.jsx(t,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(t,{label:"Integrations",description:"Connect external tools"}),e.jsx(t,{label:"Audit history",description:"Track critical events"})]})]})},je={render:()=>e.jsxs(v,{inline:!0,children:[e.jsx(t,{label:"Edit",iconBefore:"pencil"}),e.jsx(t,{label:"Duplicate",iconBefore:"copy"}),e.jsx(t,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},ve={render:()=>e.jsxs(v,{inline:!0,children:[e.jsxs(ae,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Rename"}),e.jsx(t,{label:"Move"})]}),e.jsx(ae,{label:"Danger Zone",children:e.jsx(t,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},Se={render:()=>e.jsx(ar,{}),parameters:{controls:{disable:!0}}},we={render:()=>e.jsx(lr,{}),parameters:{controls:{disable:!0}}},Ie={render:()=>e.jsxs(Fn,{gap:"12",alignItems:"flex-start",children:[e.jsxs(v,{inline:!0,density:"compact",children:[e.jsx(t,{label:"Compact",description:"Small row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(v,{inline:!0,density:"comfortable",children:[e.jsx(t,{label:"Comfortable",description:"Default row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(v,{inline:!0,density:"spacious",children:[e.jsx(t,{label:"Spacious",description:"Large row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},Te={render:()=>e.jsxs(tt,{children:[e.jsxs(v,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(ae,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(t,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(M,{label:"More actions",iconBefore:"apps",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),e.jsxs(te,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Ln,{})]}),parameters:{controls:{disable:!0}}},ke={render:()=>e.jsx(ir,{}),parameters:{controls:{disable:!0}}},Pe={render:()=>e.jsxs(v,{trigger:e.jsx(ne,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},dr=()=>{const o=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],n=["sales","production","admin"],[s,r]=a.useState(null),i=g=>({open:s===g,onOpenChange:m=>{if(m){r(g);return}r(H=>H===g?null:H)}}),b=(g,m)=>{const H=n.indexOf(m),V=n.length,I=(H+g+V*10)%V,X=n[I],R=o[I];if(X===void 0)return;if(!(s!==null)){window.requestAnimationFrame(()=>{var D;R&&((D=document.getElementById(R))==null||D.focus())});return}window.requestAnimationFrame(()=>{var D;r(X),R&&((D=document.getElementById(R))==null||D.focus())})},u=g=>m=>{m.key!=="ArrowLeft"&&m.key!=="ArrowRight"||(m.preventDefault(),m.stopPropagation(),b(m.key==="ArrowRight"?1:-1,g))};return e.jsx(tt,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(x,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(ne,{id:o[0],variant:"selectedBold",onKeyDown:u("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"sales"),...i("sales"),children:[e.jsxs(M,{label:"Quotes",children:[e.jsx(t,{label:"Open quotes"}),e.jsx(t,{label:"Draft quotes"})]}),e.jsxs(M,{label:"Orders",selected:!0,children:[e.jsx(t,{label:"Order list"}),e.jsxs(M,{label:"Used orders",selected:!0,children:[e.jsx(t,{label:"Order as used",selected:!0}),e.jsx(t,{label:"Bookings"}),e.jsx(t,{label:"Order commissions"})]})]}),e.jsxs(M,{label:"Invoices",children:[e.jsx(t,{label:"All invoices"}),e.jsx(t,{label:"Credit notes"})]})]}),e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(ne,{id:o[1],onKeyDown:u("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"production"),...i("production"),children:[e.jsxs(M,{label:"Work Orders",children:[e.jsx(t,{label:"Open work orders"}),e.jsx(t,{label:"Completed"})]}),e.jsxs(M,{label:"Scheduling",children:[e.jsx(t,{label:"Production schedule"}),e.jsx(t,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(t,{label:"Inventory"})]}),e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(ne,{id:o[2],onKeyDown:u("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"admin"),...i("admin"),children:[e.jsxs(M,{label:"Users",children:[e.jsx(t,{label:"All users"}),e.jsx(t,{label:"Roles & permissions"})]}),e.jsxs(M,{label:"Settings",children:[e.jsx(t,{label:"General"}),e.jsx(t,{label:"Integrations"}),e.jsx(t,{label:"Billing"})]}),e.jsx(t,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},Ae={name:"Top nav example",render:()=>e.jsx(dr,{}),parameters:{controls:{disable:!0}}},Ne={render:()=>e.jsxs(v,{trigger:e.jsx(ne,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(t,{label:"Dashboard"}),e.jsxs(M,{label:"Settings",children:[e.jsx(t,{label:"Profile"}),e.jsx(t,{label:"Billing"}),e.jsxs(M,{label:"Team",children:[e.jsx(t,{label:"Members"}),e.jsx(t,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},De={render:()=>e.jsx(cr,{}),parameters:{controls:{disable:!0}}},qe={render:()=>e.jsx(ur,{}),parameters:{controls:{disable:!0}}},Ce={name:"Panel as sidebar",render:()=>e.jsx(nn,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(v,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},Ee={name:"Panel as mobile nav",render:()=>e.jsx(nn,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(v,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var ft,gt,bt;je.parameters={...je.parameters,docs:{...(ft=je.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: () => <Menu inline>
      <MenuItem label="Edit" iconBefore="pencil" />
      <MenuItem label="Duplicate" iconBefore="copy" />
      <MenuItem label="Archive" iconBefore="trash" />
    </Menu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(bt=(gt=je.parameters)==null?void 0:gt.docs)==null?void 0:bt.source}}};var ht,xt,yt;ve.parameters={...ve.parameters,docs:{...(ht=ve.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: () => <Menu inline>
      <MenuGroup label="Actions" divider>
        <MenuItem label="Rename" />
        <MenuItem label="Move" />
      </MenuGroup>
      <MenuGroup label="Danger Zone">
        <MenuItem label="Delete" iconBefore="trash" />
      </MenuGroup>
    </Menu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(yt=(xt=ve.parameters)==null?void 0:xt.docs)==null?void 0:yt.source}}};var Mt,jt,vt;Se.parameters={...Se.parameters,docs:{...(Mt=Se.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(vt=(jt=Se.parameters)==null?void 0:jt.docs)==null?void 0:vt.source}}};var St,wt,It;we.parameters={...we.parameters,docs:{...(St=we.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(It=(wt=we.parameters)==null?void 0:wt.docs)==null?void 0:It.source}}};var Tt,kt,Pt;Ie.parameters={...Ie.parameters,docs:{...(Tt=Ie.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: () => <HStack gap="12" alignItems="flex-start">
      <Menu inline density="compact">
        <MenuItem label="Compact" description="Small row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
      <Menu inline density="comfortable">
        <MenuItem label="Comfortable" description="Default row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
      <Menu inline density="spacious">
        <MenuItem label="Spacious" description="Large row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Pt=(kt=Ie.parameters)==null?void 0:kt.docs)==null?void 0:Pt.source}}};var At,Nt,Dt;Te.parameters={...Te.parameters,docs:{...(At=Te.parameters)==null?void 0:At.docs,source:{originalSource:`{
  render: () => <VStack>
      <Menu inline closeOnSelect={false} density={{
      base: 'spacious',
      xs: 'comfortable',
      sm: 'compact'
    }}>
        <MenuGroup label="Actions" divider>
          <MenuItem label="Edit profile" iconBefore="pencil" />
          <MenuItem label="Notifications" iconBefore="bell" />
        </MenuGroup>
        <SubMenu label="More actions" iconBefore="apps">
          <MenuItem label="Export" />
          <MenuItem label="Share" />
          <SubMenu label="Advanced">
            <MenuItem label="Audit log" />
            <MenuItem label="Settings" />
          </SubMenu>
        </SubMenu>
      </Menu>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"spacious"',
        xs: '"comfortable"',
        sm: '"compact"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Dt=(Nt=Te.parameters)==null?void 0:Nt.docs)==null?void 0:Dt.source}}};var qt,Ct,Et;ke.parameters={...ke.parameters,docs:{...(qt=ke.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Et=(Ct=ke.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var Bt,Ot,Rt;Pe.parameters={...Pe.parameters,docs:{...(Bt=Pe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open menu</Button>} subMenuInteraction="hover">
      <MenuItem label="View profile" />
      <SubMenu label="More actions">
        <MenuItem label="Export" />
        <MenuItem label="Share" />
        <SubMenu label="Advanced">
          <MenuItem label="Audit log" />
          <MenuItem label="Settings" />
        </SubMenu>
      </SubMenu>
    </Menu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Rt=(Ot=Pe.parameters)==null?void 0:Ot.docs)==null?void 0:Rt.source}}};var Ft,Lt,Vt;Ae.parameters={...Ae.parameters,docs:{...(Ft=Ae.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Vt=(Lt=Ae.parameters)==null?void 0:Lt.docs)==null?void 0:Vt.source}}};var Wt,Kt,_t;Ne.parameters={...Ne.parameters,docs:{...(Wt=Ne.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open menu</Button>} subMenuInteraction="digin">
      <MenuItem label="Dashboard" />
      <SubMenu label="Settings">
        <MenuItem label="Profile" />
        <MenuItem label="Billing" />
        <SubMenu label="Team">
          <MenuItem label="Members" />
          <MenuItem label="Permissions" />
        </SubMenu>
      </SubMenu>
    </Menu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_t=(Kt=Ne.parameters)==null?void 0:Kt.docs)==null?void 0:_t.source}}};var Ht,Gt,zt;De.parameters={...De.parameters,docs:{...(Ht=De.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(zt=(Gt=De.parameters)==null?void 0:Gt.docs)==null?void 0:zt.source}}};var $t,Ut,Qt;qe.parameters={...qe.parameters,docs:{...($t=qe.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Qt=(Ut=qe.parameters)==null?void 0:Ut.docs)==null?void 0:Qt.source}}};var Zt,Xt,Yt;Ce.parameters={...Ce.parameters,docs:{...(Zt=Ce.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  name: 'Panel as sidebar',
  render: () => <Flex minW="3xl" h="lg" bg="bg.neutral" overflow="hidden" boxShadow="overlay">
      <Menu subMenuInteraction="hover" panel={true} maxW="264" density="comfortable">
        <MenuItem label="View profile" />
        <SubMenu label="More actions" minW="180">
          <MenuItem label="Export" />
          <MenuItem label="Share" />
          <SubMenu label="Advanced" minW="180">
            <MenuItem label="Audit log" />
            <MenuItem label="Settings" />
          </SubMenu>
        </SubMenu>
      </Menu>
    </Flex>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Yt=(Xt=Ce.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Jt,en,tn;Ee.parameters={...Ee.parameters,docs:{...(Jt=Ee.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  name: 'Panel as mobile nav',
  render: () => <Flex minW="3xl" h="lg" bg="bg.neutral" overflow="hidden" boxShadow="overlay">
      <Menu subMenuInteraction="digin" panel={true} maxW="264" w="full" density="comfortable">
        <MenuItem label="View profile" />
        <SubMenu label="More actions" minW="180">
          <MenuItem label="Export" />
          <MenuItem label="Share" />
          <SubMenu label="Advanced" minW="180">
            <MenuItem label="Audit log" />
            <MenuItem label="Settings" />
          </SubMenu>
        </SubMenu>
      </Menu>
    </Flex>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(tn=(en=Ee.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};const Kr=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{je as Actions,ve as ActionsWithSections,qe as AutocompleteFiltering,Te as ConditionalBreakpoints,Ie as Density,we as MultiSelect,Ee as PanelAsMobileNav,Ce as PanelAsSidebar,Se as SingleSelect,Ne as SubMenuDigin,De as SubMenuDiginForms,Pe as SubMenuHover,ke as ToggleOptions,Ae as TopNavExample,Kr as __namedExportsOrder,Wr as default};
