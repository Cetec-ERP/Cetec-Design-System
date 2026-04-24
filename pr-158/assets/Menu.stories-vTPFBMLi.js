import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BKyFwriW.js";import{d as et,B as x,e as $,H as On,V as tt,F as tn}from"./Box-BV3UiX_0.js";import{B as Fn}from"./BreakpointIndicator-C69HApca.js";import{B as re}from"./Button-mWx37-yQ.js";import{F as Me}from"./FormField-B2xdQbyO.js";import{T as ne}from"./Text-CaLd5y6v.js";import{T as be}from"./TextInput-D_4I3ulq.js";import{n as nn,u as Ln,d as Vn,e as rn,o as sn,j as on,a as an,g as ln,k as cn,l as un,b as dn,p as pn,q as Wn,r as dt,t as Je,F as mn,c as fn,s as Kn,v as gn,w as bn,x as _n,y as Hn,z as Gn,A as zn,B as $n,C as Un}from"./floating-CMrvfkt4.js";import{l as hn,a as Qn,c as xn,H as ue}from"./ListItem-_ihLpW6x.js";import{m as yn}from"./menu-yedgcErm.js";import{I as X}from"./Icon-B7squOvl.js";import"./IconConfig-B5QOCK9V.js";import{C as Zn}from"./Checkbox-DAJZm7_j.js";import{D as Xn}from"./Divider-BpaRy6Xf.js";import{T as Yn}from"./Toggle-Cg1zN6hm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-C3WQDt71.js";import"./Spinner-BnBbwk1J.js";import"./Label-Bpfbgc4x.js";import"./Tooltip-Q0L3A7IH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const de={group:"MenuGroup",item:"MenuItem",subMenu:"SubMenu"},Fe="__menuComponentType",Jn=({label:o,description:n})=>[o,n].filter(Boolean).join(" ").trim(),er={query:"",filterMode:"none",highlightMatches:!0,getItemText:Jn},Mn=a.createContext({...er}),jn=a.createContext(null),vn=a.createContext(null),nt=()=>a.useContext(Mn),rt=()=>{const o=a.useContext(jn);if(!o)throw new Error("Menu compound components must be used within <Menu />");return o},Sn=()=>a.useContext(vn),wn=Mn.Provider,tr=jn.Provider,In=vn.Provider,Be=({textValue:o,label:n,description:s,getItemText:r})=>o||r({label:n,description:s}),Re=({textValue:o,query:n,filterMode:s})=>s==="none"||!n.trim()?!0:o.toLowerCase().includes(n.trim().toLowerCase()),nr=o=>{if(!o||typeof o!="object"||!("type"in o))return null;const n=o.type;return(n==null?void 0:n[Fe])??null},Oe=(o,n)=>a.Children.toArray(o).some(s=>{if(!a.isValidElement(s))return!1;const r=s,i=nr(r);if(i===de.item){if(r.props.variant==="divider")return!0;const d=Be({textValue:r.props.textValue,label:r.props.label,description:r.props.description,getItemText:n.getItemText});return Re({textValue:d,query:n.query,filterMode:n.filterMode})}if(i===de.subMenu){const b=Be({textValue:r.props.textValue,label:r.props.label,description:r.props.description,getItemText:n.getItemText});return Re({textValue:b,query:n.query,filterMode:n.filterMode})||Oe(r.props.children,n)}return i===de.group?Oe(r.props.children,n):!0});function Tn(){const[o,n]=a.useState(!1);return a.useLayoutEffect(()=>{const s=window.matchMedia("(any-pointer: coarse)"),r=()=>{n(!s.matches)};return r(),s.addEventListener("change",r),()=>s.removeEventListener("change",r)},[]),o}function rr(o){const n=o.current;if(!(n!=null&&n.length))return null;for(let s=0;s<n.length;s++){const r=n[s];if(r&&!(r.hasAttribute("disabled")||r.getAttribute("aria-disabled")==="true"))return s}return null}function kn(o,n,s){const r=o.current,i=r.length;if(i===0)return s??null;const b=g=>{const m=r[g];return m?m.hasAttribute("disabled")||m.getAttribute("aria-disabled")==="true":!0};let d=s??0;for(let g=0;g<i;g++)if(d=(d+n+i)%i,!b(d))return d;return s??null}const sr=({label:o,description:n})=>[o,n].filter(Boolean).join(" ").trim(),pt=(o,n)=>a.Children.map(o,(s,r)=>{if(!a.isValidElement(s))return s;const i=s.key??r;return a.cloneElement(s,{key:`${n}-${String(i)}`})}),v=o=>{var ct;const n=nn(),{trigger:s,children:r,open:i,defaultOpen:b,onOpenChange:d,placement:g="bottom-start",strategy:m="absolute",closeOnSelect:H=!0,inline:L=!1,triggerInteraction:I="click",triggerOpenDelay:Y=75,triggerCloseDelay:O=100,subMenuInteraction:G="hover",density:A="compact",panel:se,query:oe="",filterMode:z="none",renderNoResults:J,highlightMatches:D=!!oe,getItemText:T=sr,onMenubarEdgeNavigate:h,...p}=o,[ee,te]=et(p),q=te.style,k=yn({density:A,panel:se}),y=hn({density:A}),B=!!s&&!L,[pe,V]=a.useState(b??!1),j=i!==void 0,S=j?i:pe,W=B?S:!0,N=(f,P,C)=>{!f&&(C==="hover"||C==="safe-polygon")&&(I==="hover"||I==="click-and-hover")||(j||V(f),d==null||d(f))},[F,U]=a.useState([]),[K,ie]=a.useState({width:null,height:null}),R=F.length;a.useEffect(()=>{S||U([])},[S]);const c=Ln({nodeId:n,open:B?S:!0,onOpenChange:N,placement:g,strategy:m,middleware:Vn({extras:[Kn()]})}),Q=a.useRef([]),Le=a.useRef([]),[E,me]=a.useState(null),Ve=Tn(),We=rn(c.context,{enabled:B&&(I==="hover"||I==="click-and-hover"),delay:{open:Y,close:O},handleClose:sn({blockPointerEvents:Ve})}),Ke=on(c.context,{enabled:B&&(I==="click"||I==="click-and-hover")}),_e=an(c.context,{enabled:B}),He=ln(c.context,{role:"menu"}),Ge=cn(c.context,{listRef:Q,activeIndex:E,onNavigate:me,loop:!0}),ze=un(c.context,{listRef:Le,activeIndex:E,onMatch:me,resetMs:600}),{getReferenceProps:$e,getFloatingProps:Ue,getItemProps:Qe}=dn([We,Ke,_e,He,Ge,ze]),he=a.useMemo(()=>({query:oe,filterMode:z,highlightMatches:D,getItemText:T}),[z,T,D,oe]),st=((ct=F[F.length-1])==null?void 0:ct.children)??r,ce=Oe(st,he),fe={density:A,panel:se,closeOnSelect:H,subMenuInteraction:G,inline:L,onCloseMenu:()=>{N(!1),U([])},onPushDiginLevel:(f,P)=>{U(C=>{const _=C[C.length-1];return _&&_.title===f&&_.children===P?C:[...C,{key:`${f}-${C.length}`,title:f,children:P}]})},onPopDiginLevel:()=>{U(f=>f.slice(0,-1))},diginDepth:R,onMenubarEdgeNavigate:h},Ze=a.useCallback(f=>{me(P=>kn(Q,f,P))},[]),Xe={activeIndex:E,getItemProps:f=>Qe(f),navigateMainAxis:Ze,nestedMenuDepth:0},ae=[{key:"root",title:"Menu",children:r},...F],Z=ae[Math.min(R,ae.length-1)],ge=ae.length,l=ge*100,w=100/ge,u=R*100/ge,Pn=!!se&&G==="digin",xe=G==="digin"&&ce,ot=a.useRef(null);a.useLayoutEffect(()=>{if(!W||!xe){ie({width:null,height:null});return}const f=ot.current;if(!f)return;const P=()=>{const _=Math.ceil(f.scrollWidth),ut=Math.ceil(f.scrollHeight);ie(Ye=>Ye.width===_&&Ye.height===ut?Ye:{width:_,height:ut})};P();const C=new ResizeObserver(P);return C.observe(f),()=>{C.disconnect()}},[Z.children,Z.key,Z.title,A,R,ce,W,xe]);const An=xe&&K.width&&K.height?{width:`${K.width}px`,height:`${K.height}px`}:{},Dn={...B&&!L?c.floatingStyles:{},...An,...q??{}},Nn=Pn?{inset:"0",width:"100%",height:"100%"}:{},at=e.jsx(tr,{value:fe,children:e.jsx(wn,{value:he,children:e.jsxs(x,{ref:c.refs.setFloating,className:$(k.wrapper,ee),...Ue(),...te,style:Dn,children:[!ce&&e.jsx(x,{className:k.noResults,children:J??e.jsx(ne,{textStyle:"body.sm",children:"No results found"})}),ce&&e.jsxs(x,{className:k.levelsViewport,children:[xe&&e.jsx(x,{ref:ot,className:k.sizeProbe,"aria-hidden":!0,style:Nn,children:e.jsxs(x,{className:k.level,children:[R>0&&e.jsxs(x,{as:"button",type:"button",className:k.backHeader,children:[e.jsx(X,{name:"caret-left",fill:"icon"}),Z.title]}),e.jsx(x,{className:y,children:pt(Z.children,`${Z.key}-probe`)})]})}),e.jsx(x,{className:k.levelsTrack,style:{width:`${l}%`,transform:`translateX(-${u}%)`},children:ae.map((f,P)=>{const C=P===R,_=pt(f.children,f.key);return C?e.jsx(In,{value:Xe,children:e.jsx(pn,{elementsRef:Q,labelsRef:Le,children:e.jsxs(x,{className:k.level,style:{flex:`0 0 ${w}%`},children:[P>0&&e.jsxs(x,{as:"button",type:"button",className:k.backHeader,onClick:fe.onPopDiginLevel,children:[e.jsx(X,{name:"caret-left"}),f.title]}),e.jsx(x,{className:y,children:_})]})})},f.key):e.jsxs(x,{className:k.level,style:{flex:`0 0 ${w}%`},"aria-hidden":!0,children:[P>0&&e.jsxs(x,{as:"button",type:"button",className:k.backHeader,onClick:fe.onPopDiginLevel,children:[e.jsx(X,{name:"caret-left"}),f.title]}),e.jsx(x,{className:y,children:_})]},f.key)})})]})]})})}),Cn=L||!s,qn=a.isValidElement(s)?s.props.ref:void 0,En=Wn([qn,c.refs.setReference]);if(Cn)return e.jsx(dt,{children:e.jsx(Je,{id:n,children:at})});const lt=a.isValidElement(s)&&s.props?(()=>{const{ref:f,children:P,onKeyDown:C,..._}=s.props;return{rest:_,onKeyDown:C}})():{rest:{},onKeyDown:void 0},Bn=lt.rest,ye=lt.onKeyDown,it=$e({...Bn,ref:En}),Rn=f=>{if(S&&(f.key==="ArrowLeft"||f.key==="ArrowRight")&&typeof ye=="function"){ye(f);return}const P=it.onKeyDown;typeof P=="function"&&P(f),typeof ye=="function"&&ye(f)};return e.jsx(dt,{children:e.jsxs(Je,{id:n,children:[a.cloneElement(s,{...it,onKeyDown:Rn}),S&&e.jsx(mn,{children:e.jsx(fn,{context:c.context,modal:!1,order:h?["reference","content"]:void 0,children:at})})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{trigger:{required:!1,tsType:{name:"ReactElement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},strategy:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}]},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},triggerInteraction:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'click-and-hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'click-and-hover'"}]},description:""},triggerOpenDelay:{required:!1,tsType:{name:"number"},description:""},triggerCloseDelay:{required:!1,tsType:{name:"number"},description:""},subMenuInteraction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},query:{required:!1,tsType:{name:"string"},description:""},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},filterMode:{required:!1,tsType:{name:"union",raw:"'none' | 'contains'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'contains'"}]},description:""},renderNoResults:{required:!1,tsType:{name:"ReactNode"},description:""},highlightMatches:{required:!1,tsType:{name:"boolean"},description:""},getItemText:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: { label?: string; description?: string }) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ label?: string; description?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"string"}}},description:""},panel:{required:!1,tsType:{name:"MenuVariantProps['panel']",raw:"MenuVariantProps['panel']"},description:""},onMenubarEdgeNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(direction: 1 | -1) => void",signature:{arguments:[{type:{name:"union",raw:"1 | -1",elements:[{name:"literal",value:"1"},{name:"literal",value:"-1"}]},name:"direction"}],return:{name:"void"}}},description:`When this \`Menu\` is used as one section of a horizontal menubar, pass a
handler so Arrow Left / Arrow Right on **leaf** items and at the first
submenu level can move to the previous/next menubar section (APG Navigation
Menubar pattern). Typically closes this menu then focuses/opens the
adjacent section’s trigger.
Also enables focus order so the trigger keeps focus while the panel is open
until the user arrows into the list (otherwise focus would jump to the first
row and horizontal menubar keys would not run on the trigger).`},as:{required:!1,tsType:{name:"T"},description:""}}};const le=o=>{const{label:n,children:s,divider:r,...i}=o,b=rt(),d=nt();return Oe(s,d)?e.jsx(Qn,{density:b.density,label:n,divider:r,...i,children:s}):null};le[Fe]=de.group;le.__docgenInfo={description:"",methods:[],displayName:"MenuGroup",props:{as:{required:!1,tsType:{name:"T"},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},divider:{required:!1,tsType:{name:"boolean"},description:""}}};const t=o=>{const{label:n,description:s,variant:r="default",disabled:i,selected:b,iconBefore:d,iconAfter:g,href:m,target:H,rel:L,closeOnSelect:I,density:Y,textValue:O,onClick:G,...A}=o,[se,oe]=et(A),z={...oe},J="onKeyDown"in z&&typeof z.onKeyDown=="function"?z.onKeyDown:void 0;delete z.onKeyDown;const D=rt(),T=gn(),h=nt(),p=Sn(),ee=r==="divider"?"default":r,te=Y??D.density,q=xn({density:te,variant:ee,iconBefore:!!d,iconAfter:!!g,selected:!!b}),k=Be({textValue:O,label:n,description:s,getItemText:h.getItemText}),y=Re({textValue:k,query:h.query,filterMode:h.filterMode}),B=bn({label:k});if(r==="divider")return e.jsx(Xn,{});if(!y)return null;const pe=I??D.closeOnSelect,V=O??n??"menu-item",j=c=>{G==null||G(c),c.defaultPrevented||T==null||T.events.emit("click"),!c.defaultPrevented&&pe&&D.onCloseMenu()},S=c=>{c.preventDefault(),c.stopPropagation()},W=p?p.getItemProps({onClick:j}):{onClick:j},{onKeyDown:N,...F}=W,U=c=>{if(c.key==="ArrowLeft"||c.key==="ArrowRight"){if(m){N==null||N(c);return}const Q=(p==null?void 0:p.nestedMenuDepth)??0;if(c.key==="ArrowLeft"&&Q>0&&(p!=null&&p.closeParentSubMenuFlyout)){c.preventDefault(),c.stopPropagation(),p.closeParentSubMenuFlyout();return}if(c.key==="ArrowLeft"&&Q===0&&D.onMenubarEdgeNavigate){c.preventDefault(),c.stopPropagation(),D.onCloseMenu(),D.onMenubarEdgeNavigate(-1);return}if(c.key==="ArrowRight"&&D.onMenubarEdgeNavigate){c.preventDefault(),c.stopPropagation(),D.onCloseMenu(),D.onMenubarEdgeNavigate(1);return}}N==null||N(c),J==null||J(c)},K=r==="checkbox"||r==="toggle"?"menuitemcheckbox":"menuitem",ie=m?{as:"a",href:m,target:H,rel:L,...i&&{onClick:c=>{c.preventDefault()}}}:{as:"button",type:"button",disabled:i},R=c=>{B.ref(c)};return e.jsxs(x,{...ie,className:$(q.wrapper,se),ref:R,role:K,"aria-checked":r==="checkbox"||r==="toggle"?!!b:void 0,"aria-disabled":i,"data-selected":b,"data-disabled":i,"data-active":p?p.activeIndex===B.index:!1,tabIndex:p?p.activeIndex===B.index?0:-1:0,...F,onKeyDown:U,...z,children:[r==="checkbox"&&e.jsx(Zn,{name:V,className:q.beforeSlot,checked:!!b,onChange:S,tabIndex:-1}),r==="toggle"&&e.jsx(Yn,{name:V,className:q.beforeSlot,checked:!!b,onChange:S,mr:"4",tabIndex:-1}),d&&e.jsx(X,{className:$(q.icon,q.beforeSlot),name:d}),e.jsxs(x,{className:q.itemMain,children:[n&&e.jsx(ne,{className:q.itemLabel,children:e.jsx(ue,{value:n,query:h.query,enabled:h.highlightMatches})}),s&&e.jsx(ne,{className:q.itemDescription,children:e.jsx(ue,{value:s,query:h.query,enabled:h.highlightMatches})})]}),g&&e.jsx(X,{className:$(q.icon,q.afterSlot),name:g,ml:"auto"})]})};t[Fe]=de.item;t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'checkbox' | 'toggle' | 'divider'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'toggle'"},{name:"literal",value:"'divider'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},iconAfter:{required:!1,tsType:{name:"IconNamesList"},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const M=o=>{const n=nn(),s=_n(),r=gn(),{label:i,description:b,disabled:d,selected:g,iconBefore:m,interaction:H,placement:L,children:I,textValue:Y,density:O,...G}=o,[A,se]=et(G),{style:oe,...z}=se,J=oe,D=z,T=rt(),h=nt(),p=Sn(),ee=H??T.subMenuInteraction,te=typeof O=="string"?O:T.density,q=yn({density:te}),k=hn({density:te}),y=xn({density:te,iconBefore:!!m,iconAfter:!0,selected:!!g}),B=Be({textValue:Y,label:i,description:b,getItemText:h.getItemText}),pe=Re({textValue:B,query:h.query,filterMode:h.filterMode}),V=bn({label:B}),[j,S]=a.useState(!1),[W,N]=a.useState(null),F=a.useRef([]),U=a.useRef([]),K=a.useRef(null),ie=Tn(),R=a.useRef(!1),c=a.useRef(!1),Q=a.useCallback(()=>{R.current=!0,S(!0)},[]),E=Hn({nodeId:n,open:j,onOpenChange:(l,w,u)=>{!l&&u==="focus-out"&&ee==="hover"&&s!=null||S(l)},placement:L??"right-start",whileElementsMounted:Un,middleware:[Gn({mainAxis:0,alignmentAxis:-4}),zn(),$n({padding:8})]}),me=rn(E.context,{enabled:!d&&s!=null,delay:{open:75},handleClose:sn({blockPointerEvents:ie})}),Ve=on(E.context,{event:"mousedown",toggle:!1,ignoreMouse:!0}),We=an(E.context,{bubbles:!0}),Ke=ln(E.context,{role:"menu"}),_e=cn(E.context,{listRef:F,activeIndex:W,onNavigate:N,nested:!0,focusItemOnOpen:!1}),He=un(E.context,{listRef:U,activeIndex:W,onMatch:j?N:void 0,resetMs:600}),{getReferenceProps:Ge,getFloatingProps:ze,getItemProps:$e}=dn([me,Ve,We,Ke,_e,He]);a.useEffect(()=>{if(!r)return;const l=()=>{S(!1)},w=u=>{u.nodeId!==n&&u.parentId===s&&S(!1)};return r.events.on("click",l),r.events.on("menuopen",w),()=>{r.events.off("click",l),r.events.off("menuopen",w)}},[r,n,s]),a.useEffect(()=>{j&&r&&r.events.emit("menuopen",{parentId:s,nodeId:n})},[r,j,n,s]),a.useEffect(()=>{j||N(null)},[j]),a.useLayoutEffect(()=>{if(!j||!R.current)return;const l=()=>{const w=rr(F);return w===null?!1:(R.current=!1,c.current=!0,N(w),!0)};l()||requestAnimationFrame(()=>{l()||(R.current=!1)})},[j]),a.useEffect(()=>{if(!j){c.current=!1;return}if(!c.current||W===null)return;const l=F.current[W];l&&l.focus({preventScroll:!0}),c.current=!1},[j,W]);const Ue=a.useMemo(()=>({query:h.query,filterMode:h.filterMode,highlightMatches:h.highlightMatches,getItemText:h.getItemText}),[h]),Qe=a.useCallback(l=>{N(w=>kn(F,l,w))},[]),he=a.useCallback(()=>{S(!1),queueMicrotask(()=>{var l;(l=K.current)==null||l.focus()})},[]),ce=((p==null?void 0:p.nestedMenuDepth)??0)+1,fe={activeIndex:W,getItemProps:l=>$e(l),navigateMainAxis:Qe,nestedMenuDepth:ce,closeParentSubMenuFlyout:he},Ze={...E.floatingStyles,...J||{}},Xe=p?p.getItemProps({onKeyDown:l=>{l.key==="ArrowRight"&&!d&&(l.preventDefault(),Q())}}):{onKeyDown:l=>{l.key==="ArrowRight"&&!d&&(l.preventDefault(),Q())}},ae=Ge(Xe),Z=ae.onKeyDown,ge={...ae,onKeyDown:l=>{if(ee!=="digin"&&p){const w=p.nestedMenuDepth??0;if(l.key==="ArrowLeft"){if(j){l.preventDefault(),l.stopPropagation(),S(!1),queueMicrotask(()=>{var u;return(u=K.current)==null?void 0:u.focus()});return}if(w===0&&T.onMenubarEdgeNavigate){l.preventDefault(),l.stopPropagation(),T.onCloseMenu(),T.onMenubarEdgeNavigate(-1);return}}}if(ee!=="digin"&&(p!=null&&p.navigateMainAxis)&&(l.key==="ArrowDown"||l.key==="ArrowUp")){l.preventDefault(),l.stopPropagation(),j&&S(!1),p.navigateMainAxis(l.key==="ArrowDown"?1:-1);return}typeof Z=="function"&&Z(l)}};if(!pe)return null;if(ee==="digin"){const w={...p?p.getItemProps({onClick:u=>{u==null||u.preventDefault(),u==null||u.stopPropagation(),d||T.onPushDiginLevel(i,I)},onKeyDown:u=>{(u.key==="ArrowRight"||u.key==="Enter"||u.key===" ")&&(u.preventDefault(),u.stopPropagation(),d||T.onPushDiginLevel(i,I))}}):{onClick:u=>{u==null||u.preventDefault(),u==null||u.stopPropagation(),d||T.onPushDiginLevel(i,I)},onKeyDown:u=>{u&&(u.key==="ArrowRight"||u.key==="Enter"||u.key===" ")&&(u.preventDefault(),u.stopPropagation(),d||T.onPushDiginLevel(i,I))}}};return e.jsxs("button",{...D,role:"menuitem","aria-disabled":d,disabled:d,className:$(y.wrapper,A),ref:u=>{V.ref(u)},style:J,"data-selected":g,"data-disabled":d,"data-active":p?p.activeIndex===V.index:!1,tabIndex:p?p.activeIndex===V.index?0:-1:0,...w,type:"button",children:[m&&e.jsx(X,{className:$(y.icon,y.beforeSlot),name:m}),e.jsxs(x,{className:y.itemMain,children:[e.jsx(ne,{className:y.itemLabel,children:e.jsx(ue,{value:i,query:h.query,enabled:h.highlightMatches})}),b&&e.jsx(ne,{className:y.itemDescription,children:e.jsx(ue,{value:b,query:h.query,enabled:h.highlightMatches})})]}),e.jsx(X,{className:$(y.icon,y.afterSlot),name:"caret-right",ml:"auto"})]})}return e.jsxs(Je,{id:n,children:[e.jsxs("button",{...D,role:"menuitem","aria-haspopup":"menu","aria-expanded":j,"aria-disabled":d,disabled:d,className:y.wrapper,ref:l=>{K.current=l,V.ref(l),E.refs.setReference(l)},"data-selected":g,"data-disabled":d,"data-active":p?p.activeIndex===V.index:!1,tabIndex:p?p.activeIndex===V.index?0:-1:0,...ge,type:"button",children:[m&&e.jsx(X,{className:$(y.icon,y.beforeSlot),name:m}),e.jsxs(x,{className:y.itemMain,children:[e.jsx(ne,{className:y.itemLabel,children:e.jsx(ue,{value:i,query:h.query,enabled:h.highlightMatches})}),b&&e.jsx(ne,{className:y.itemDescription,children:e.jsx(ue,{value:b,query:h.query,enabled:h.highlightMatches})})]}),e.jsx(X,{className:$(y.icon,y.afterSlot),name:"caret-right",ml:"auto"})]}),j&&e.jsx(mn,{children:e.jsx(fn,{context:E.context,modal:!1,initialFocus:-1,returnFocus:!1,children:e.jsx(wn,{value:Ue,children:e.jsx(In,{value:fe,children:e.jsx(x,{ref:E.refs.setFloating,className:$(q.wrapper,A),...ze({onKeyDown:l=>{l.key==="ArrowLeft"&&(l.preventDefault(),S(!1),queueMicrotask(()=>{var w;return(w=K.current)==null?void 0:w.focus()}))}}),style:Ze,children:e.jsx(pn,{elementsRef:F,labelsRef:U,children:e.jsx(x,{className:k,children:I})})})})})})})]})};M[Fe]=de.subMenu;M.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},interaction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""}}};const Fr={title:"Components/Menu",component:v,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},or=()=>{const[o,n]=a.useState("item-2");return e.jsxs(v,{inline:!0,closeOnSelect:!1,children:[e.jsx(t,{label:"Option One",selected:o==="item-1",onClick:()=>n("item-1")}),e.jsx(t,{label:"Option Two",selected:o==="item-2",onClick:()=>n("item-2")}),e.jsx(t,{label:"Option Three",selected:o==="item-3",onClick:()=>n("item-3")})]})},ar=()=>{const[o,n]=a.useState(["beta"]),s=r=>{n(i=>i.includes(r)?i.filter(b=>b!==r):[...i,r])};return e.jsx(v,{inline:!0,closeOnSelect:!1,children:e.jsxs(le,{label:"Wave type",children:[e.jsx(t,{variant:"checkbox",label:"Alpha",selected:o.includes("alpha"),onClick:()=>s("alpha")}),e.jsx(t,{variant:"checkbox",label:"Beta",selected:o.includes("beta"),onClick:()=>s("beta")}),e.jsx(t,{variant:"checkbox",label:"Gamma",selected:o.includes("gamma"),onClick:()=>s("gamma")})]})})},lr=()=>{const[o,n]=a.useState(!1),[s,r]=a.useState(!0);return e.jsxs(v,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(le,{label:"Options",divider:!0,children:[e.jsx(t,{variant:"toggle",label:"Compact mode",selected:o,onClick:()=>n(i=>!i)}),e.jsx(t,{variant:"toggle",label:"Email alerts",selected:s,onClick:()=>r(i=>!i)})]}),e.jsx(t,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},ir=()=>{const[o,n]=a.useState(""),[s,r]=a.useState(""),[i,b]=a.useState(""),[d,g]=a.useState("");return e.jsxs(v,{trigger:e.jsx(re,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(t,{label:"Dashboard"}),e.jsx(M,{label:"Edit profile",children:e.jsxs(x,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(Me,{label:"Profile name",labelFor:"profile-name",children:e.jsx(be,{id:"profile-name",name:"profileName",value:o,onChange:m=>n(m.target.value)})}),e.jsx(Me,{label:"Owner",labelFor:"profile-owner",children:e.jsx(be,{id:"profile-owner",name:"profileOwner",value:s,onChange:m=>r(m.target.value)})}),e.jsx(re,{variant:"primary",children:"Submit"})]})}),e.jsx(M,{label:"Create alert",children:e.jsxs(x,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(Me,{label:"Topic",labelFor:"alert-topic",children:e.jsx(be,{id:"alert-topic",name:"alertTopic",value:i,onChange:m=>b(m.target.value)})}),e.jsx(Me,{label:"Channel",labelFor:"alert-channel",children:e.jsx(be,{id:"alert-channel",name:"alertChannel",value:d,onChange:m=>g(m.target.value)})}),e.jsx(re,{variant:"primary",children:"Submit"})]})})]})},cr=()=>{const[o,n]=a.useState("");return e.jsxs(tt,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(be,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:o,onChange:s=>n(s.target.value)}),e.jsxs(v,{inline:!0,query:o,filterMode:"contains",highlightMatches:!0,children:[e.jsx(t,{label:"Account settings",description:"Manage profile and security"}),e.jsx(t,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(t,{label:"Integrations",description:"Connect external tools"}),e.jsx(t,{label:"Audit history",description:"Track critical events"})]})]})},je={render:()=>e.jsxs(v,{inline:!0,children:[e.jsx(t,{label:"Edit",iconBefore:"pencil"}),e.jsx(t,{label:"Duplicate",iconBefore:"copy"}),e.jsx(t,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},ve={render:()=>e.jsxs(v,{inline:!0,children:[e.jsxs(le,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Rename"}),e.jsx(t,{label:"Move"})]}),e.jsx(le,{label:"Danger Zone",children:e.jsx(t,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},Se={render:()=>e.jsx(or,{}),parameters:{controls:{disable:!0}}},we={render:()=>e.jsx(ar,{}),parameters:{controls:{disable:!0}}},Ie={render:()=>e.jsxs(On,{gap:"12",alignItems:"flex-start",children:[e.jsxs(v,{inline:!0,density:"compact",children:[e.jsx(t,{label:"Compact",description:"Small row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(v,{inline:!0,density:"comfortable",children:[e.jsx(t,{label:"Comfortable",description:"Default row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(v,{inline:!0,density:"spacious",children:[e.jsx(t,{label:"Spacious",description:"Large row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},Te={render:()=>e.jsxs(tt,{children:[e.jsxs(v,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(le,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(t,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(M,{label:"More actions",iconBefore:"apps",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),e.jsxs(ne,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Fn,{})]}),parameters:{controls:{disable:!0}}},ke={render:()=>e.jsx(lr,{}),parameters:{controls:{disable:!0}}},Pe={render:()=>e.jsxs(v,{trigger:e.jsx(re,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},ur=()=>{const o=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],n=["sales","production","admin"],[s,r]=a.useState(null),i=g=>({open:s===g,onOpenChange:m=>{if(m){r(g);return}r(H=>H===g?null:H)}}),b=(g,m)=>{const H=n.indexOf(m),L=n.length,I=(H+g+L*10)%L,Y=n[I],O=o[I];if(Y===void 0)return;if(!(s!==null)){window.requestAnimationFrame(()=>{var A;O&&((A=document.getElementById(O))==null||A.focus())});return}window.requestAnimationFrame(()=>{var A;r(Y),O&&((A=document.getElementById(O))==null||A.focus())})},d=g=>m=>{m.key!=="ArrowLeft"&&m.key!=="ArrowRight"||(m.preventDefault(),m.stopPropagation(),b(m.key==="ArrowRight"?1:-1,g))};return e.jsx(tt,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(x,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(re,{id:o[0],variant:"selectedBold",onKeyDown:d("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"sales"),...i("sales"),children:[e.jsxs(M,{label:"Quotes",children:[e.jsx(t,{label:"Open quotes"}),e.jsx(t,{label:"Draft quotes"})]}),e.jsxs(M,{label:"Orders",selected:!0,children:[e.jsx(t,{label:"Order list"}),e.jsxs(M,{label:"Used orders",selected:!0,children:[e.jsx(t,{label:"Order as used",selected:!0}),e.jsx(t,{label:"Bookings"}),e.jsx(t,{label:"Order commissions"})]})]}),e.jsxs(M,{label:"Invoices",children:[e.jsx(t,{label:"All invoices"}),e.jsx(t,{label:"Credit notes"})]})]}),e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(re,{id:o[1],onKeyDown:d("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"production"),...i("production"),children:[e.jsxs(M,{label:"Work Orders",children:[e.jsx(t,{label:"Open work orders"}),e.jsx(t,{label:"Completed"})]}),e.jsxs(M,{label:"Scheduling",children:[e.jsx(t,{label:"Production schedule"}),e.jsx(t,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(t,{label:"Inventory"})]}),e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(re,{id:o[2],onKeyDown:d("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"admin"),...i("admin"),children:[e.jsxs(M,{label:"Users",children:[e.jsx(t,{label:"All users"}),e.jsx(t,{label:"Roles & permissions"})]}),e.jsxs(M,{label:"Settings",children:[e.jsx(t,{label:"General"}),e.jsx(t,{label:"Integrations"}),e.jsx(t,{label:"Billing"})]}),e.jsx(t,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},Ae={name:"Top nav example",render:()=>e.jsx(ur,{}),parameters:{controls:{disable:!0}}},De={render:()=>e.jsxs(v,{trigger:e.jsx(re,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(t,{label:"Dashboard"}),e.jsxs(M,{label:"Settings",children:[e.jsx(t,{label:"Profile"}),e.jsx(t,{label:"Billing"}),e.jsxs(M,{label:"Team",children:[e.jsx(t,{label:"Members"}),e.jsx(t,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},Ne={render:()=>e.jsx(ir,{}),parameters:{controls:{disable:!0}}},Ce={render:()=>e.jsx(cr,{}),parameters:{controls:{disable:!0}}},qe={name:"Panel as sidebar",render:()=>e.jsx(tn,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(v,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},Ee={name:"Panel as mobile nav",render:()=>e.jsx(tn,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(v,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var mt,ft,gt;je.parameters={...je.parameters,docs:{...(mt=je.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(gt=(ft=je.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var bt,ht,xt;ve.parameters={...ve.parameters,docs:{...(bt=ve.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(xt=(ht=ve.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var yt,Mt,jt;Se.parameters={...Se.parameters,docs:{...(yt=Se.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(jt=(Mt=Se.parameters)==null?void 0:Mt.docs)==null?void 0:jt.source}}};var vt,St,wt;we.parameters={...we.parameters,docs:{...(vt=we.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(wt=(St=we.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};var It,Tt,kt;Ie.parameters={...Ie.parameters,docs:{...(It=Ie.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(kt=(Tt=Ie.parameters)==null?void 0:Tt.docs)==null?void 0:kt.source}}};var Pt,At,Dt;Te.parameters={...Te.parameters,docs:{...(Pt=Te.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Dt=(At=Te.parameters)==null?void 0:At.docs)==null?void 0:Dt.source}}};var Nt,Ct,qt;ke.parameters={...ke.parameters,docs:{...(Nt=ke.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(qt=(Ct=ke.parameters)==null?void 0:Ct.docs)==null?void 0:qt.source}}};var Et,Bt,Rt;Pe.parameters={...Pe.parameters,docs:{...(Et=Pe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Rt=(Bt=Pe.parameters)==null?void 0:Bt.docs)==null?void 0:Rt.source}}};var Ot,Ft,Lt;Ae.parameters={...Ae.parameters,docs:{...(Ot=Ae.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Lt=(Ft=Ae.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var Vt,Wt,Kt;De.parameters={...De.parameters,docs:{...(Vt=De.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Kt=(Wt=De.parameters)==null?void 0:Wt.docs)==null?void 0:Kt.source}}};var _t,Ht,Gt;Ne.parameters={...Ne.parameters,docs:{...(_t=Ne.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Gt=(Ht=Ne.parameters)==null?void 0:Ht.docs)==null?void 0:Gt.source}}};var zt,$t,Ut;Ce.parameters={...Ce.parameters,docs:{...(zt=Ce.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ut=($t=Ce.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var Qt,Zt,Xt;qe.parameters={...qe.parameters,docs:{...(Qt=qe.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Xt=(Zt=qe.parameters)==null?void 0:Zt.docs)==null?void 0:Xt.source}}};var Yt,Jt,en;Ee.parameters={...Ee.parameters,docs:{...(Yt=Ee.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(en=(Jt=Ee.parameters)==null?void 0:Jt.docs)==null?void 0:en.source}}};const Lr=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{je as Actions,ve as ActionsWithSections,Ce as AutocompleteFiltering,Te as ConditionalBreakpoints,Ie as Density,we as MultiSelect,Ee as PanelAsMobileNav,qe as PanelAsSidebar,Se as SingleSelect,De as SubMenuDigin,Ne as SubMenuDiginForms,Pe as SubMenuHover,ke as ToggleOptions,Ae as TopNavExample,Lr as __namedExportsOrder,Fr as default};
