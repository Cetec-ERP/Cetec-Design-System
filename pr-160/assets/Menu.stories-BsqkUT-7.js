import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{m as Ln,e as Vn,s as _n,c as Wn,g as Kn,b as et,B as x,d as $,H as Hn,V as tt,F as nn}from"./Box-DON8OdPK.js";import{B as zn}from"./BreakpointIndicator-IW1tL_SP.js";import{B as re}from"./Button-bJZgY1X2.js";import{F as Me}from"./FormField-p60hppUE.js";import{T as ne}from"./Text-BxMUKbtC.js";import{T as be}from"./TextInput-4kRq56Y3.js";import{k as rn,u as Gn,d as $n,e as sn,s as an,l as on,a as ln,g as cn,m as un,n as dn,b as pn,o as mn,p as Un,q as dt,r as Je,F as fn,c as gn,t as Qn,v as bn,w as hn,x as Zn,y as Xn,z as Yn,A as Jn,B as er,C as tr}from"./floating-KWRh7SVq.js";import{l as xn,a as nr,c as yn,H as ue}from"./ListItem-aAq0wejK.js";import{I as X}from"./Icon-BjyDhYXA.js";import"./IconConfig-CigF0iOf.js";import{C as rr}from"./Checkbox-kKlHOLuN.js";import{D as sr}from"./Divider-Bl0MrEIB.js";import{T as ar}from"./Toggle-vB8arR6h.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-CdyncLWL.js";import"./Spinner-VZexnvVV.js";import"./FieldContext-D6URyQos.js";import"./Label-DWL0qqiH.js";import"./Tooltip-CbjHgvJ3.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const Mn={density:"compact"},or=[],lr=[["wrapper","menu__wrapper"],["backHeader","menu__backHeader"],["levelsViewport","menu__levelsViewport"],["levelsTrack","menu__levelsTrack"],["level","menu__level"],["sizeProbe","menu__sizeProbe"],["noResults","menu__noResults"]],ir=lr.map(([r,n])=>[r,Wn(n,Mn,Kn(or,r))]),cr=Ln((r={})=>Object.fromEntries(ir.map(([n,s])=>[n,s.recipeFn(r)]))),pt=["density","panel"],ur=r=>({...Mn,...Vn(r)}),jn=Object.assign(cr,{__recipe__:!1,__name__:"menu",raw:r=>r,classNameMap:{},variantKeys:pt,variantMap:{density:["compact","comfortable","spacious"],panel:["true"]},splitVariantProps(r){return _n(r,pt)},getVariantProps:ur}),de={group:"MenuGroup",item:"MenuItem",subMenu:"SubMenu"},Fe="__menuComponentType",dr=({label:r,description:n})=>[r,n].filter(Boolean).join(" ").trim(),pr={query:"",filterMode:"none",highlightMatches:!0,getItemText:dr},vn=o.createContext({...pr}),Sn=o.createContext(null),wn=o.createContext(null),nt=()=>o.useContext(vn),rt=()=>{const r=o.useContext(Sn);if(!r)throw new Error("Menu compound components must be used within <Menu />");return r},In=()=>o.useContext(wn),Tn=vn.Provider,mr=Sn.Provider,kn=wn.Provider,Re=({textValue:r,label:n,description:s,getItemText:a})=>r||a({label:n,description:s}),Be=({textValue:r,query:n,filterMode:s})=>s==="none"||!n.trim()?!0:r.toLowerCase().includes(n.trim().toLowerCase()),fr=r=>{if(!r||typeof r!="object"||!("type"in r))return null;const n=r.type;return(n==null?void 0:n[Fe])??null},Oe=(r,n)=>o.Children.toArray(r).some(s=>{if(!o.isValidElement(s))return!1;const a=s,i=fr(a);if(i===de.item){if(a.props.variant==="divider")return!0;const d=Re({textValue:a.props.textValue,label:a.props.label,description:a.props.description,getItemText:n.getItemText});return Be({textValue:d,query:n.query,filterMode:n.filterMode})}if(i===de.subMenu){const b=Re({textValue:a.props.textValue,label:a.props.label,description:a.props.description,getItemText:n.getItemText});return Be({textValue:b,query:n.query,filterMode:n.filterMode})||Oe(a.props.children,n)}return i===de.group?Oe(a.props.children,n):!0});function Pn(){const[r,n]=o.useState(!1);return o.useLayoutEffect(()=>{const s=window.matchMedia("(any-pointer: coarse)"),a=()=>{n(!s.matches)};return a(),s.addEventListener("change",a),()=>s.removeEventListener("change",a)},[]),r}function gr(r){const n=r.current;if(!(n!=null&&n.length))return null;for(let s=0;s<n.length;s++){const a=n[s];if(a&&!(a.hasAttribute("disabled")||a.getAttribute("aria-disabled")==="true"))return s}return null}function An(r,n,s){const a=r.current,i=a.length;if(i===0)return s??null;const b=g=>{const m=a[g];return m?m.hasAttribute("disabled")||m.getAttribute("aria-disabled")==="true":!0};let d=s??0;for(let g=0;g<i;g++)if(d=(d+n+i)%i,!b(d))return d;return s??null}const br=({label:r,description:n})=>[r,n].filter(Boolean).join(" ").trim(),mt=(r,n)=>o.Children.map(r,(s,a)=>{if(!o.isValidElement(s))return s;const i=s.key??a;return o.cloneElement(s,{key:`${n}-${String(i)}`})}),v=r=>{var ct;const n=rn(),{trigger:s,children:a,open:i,defaultOpen:b,onOpenChange:d,placement:g="bottom-start",strategy:m="absolute",closeOnSelect:H=!0,inline:L=!1,triggerInteraction:I="click",triggerOpenDelay:Y=75,triggerCloseDelay:O=100,subMenuInteraction:z="hover",density:A="compact",panel:se,query:ae="",filterMode:G="none",renderNoResults:J,highlightMatches:D=!!ae,getItemText:T=br,onMenubarEdgeNavigate:h,...p}=r,[ee,te]=et(p),q=te.style,k=jn({density:A,panel:se}),y=xn({density:A}),R=!!s&&!L,[pe,V]=o.useState(b??!1),j=i!==void 0,S=j?i:pe,_=R?S:!0,N=(f,P,C)=>{!f&&(C==="hover"||C==="safe-polygon")&&(I==="hover"||I==="click-and-hover")||(j||V(f),d==null||d(f))},[F,U]=o.useState([]),[W,ie]=o.useState({width:null,height:null}),B=F.length;o.useEffect(()=>{S||U([])},[S]);const c=Gn({nodeId:n,open:R?S:!0,onOpenChange:N,placement:g,strategy:m,middleware:$n({extras:[Qn()]})}),Q=o.useRef([]),Le=o.useRef([]),[E,me]=o.useState(null),Ve=Pn(),_e=sn(c.context,{enabled:R&&(I==="hover"||I==="click-and-hover"),delay:{open:Y,close:O},handleClose:an({blockPointerEvents:Ve})}),We=on(c.context,{enabled:R&&(I==="click"||I==="click-and-hover")}),Ke=ln(c.context,{enabled:R}),He=cn(c.context,{role:"menu"}),ze=un(c.context,{listRef:Q,activeIndex:E,onNavigate:me,loop:!0}),Ge=dn(c.context,{listRef:Le,activeIndex:E,onMatch:me,resetMs:600}),{getReferenceProps:$e,getFloatingProps:Ue,getItemProps:Qe}=pn([_e,We,Ke,He,ze,Ge]),he=o.useMemo(()=>({query:ae,filterMode:G,highlightMatches:D,getItemText:T}),[G,T,D,ae]),st=((ct=F[F.length-1])==null?void 0:ct.children)??a,ce=Oe(st,he),fe={density:A,panel:se,closeOnSelect:H,subMenuInteraction:z,inline:L,onCloseMenu:()=>{N(!1),U([])},onPushDiginLevel:(f,P)=>{U(C=>{const K=C[C.length-1];return K&&K.title===f&&K.children===P?C:[...C,{key:`${f}-${C.length}`,title:f,children:P}]})},onPopDiginLevel:()=>{U(f=>f.slice(0,-1))},diginDepth:B,onMenubarEdgeNavigate:h},Ze=o.useCallback(f=>{me(P=>An(Q,f,P))},[]),Xe={activeIndex:E,getItemProps:f=>Qe(f),navigateMainAxis:Ze,nestedMenuDepth:0},oe=[{key:"root",title:"Menu",children:a},...F],Z=oe[Math.min(B,oe.length-1)],ge=oe.length,l=ge*100,w=100/ge,u=B*100/ge,Dn=!!se&&z==="digin",xe=z==="digin"&&ce,at=o.useRef(null);o.useLayoutEffect(()=>{if(!_||!xe){ie({width:null,height:null});return}const f=at.current;if(!f)return;const P=()=>{const K=Math.ceil(f.scrollWidth),ut=Math.ceil(f.scrollHeight);ie(Ye=>Ye.width===K&&Ye.height===ut?Ye:{width:K,height:ut})};P();const C=new ResizeObserver(P);return C.observe(f),()=>{C.disconnect()}},[Z.children,Z.key,Z.title,A,B,ce,_,xe]);const Nn=xe&&W.width&&W.height?{width:`${W.width}px`,height:`${W.height}px`}:{},Cn={...R&&!L?c.floatingStyles:{},...Nn,...q??{}},qn=Dn?{inset:"0",width:"100%",height:"100%"}:{},ot=e.jsx(mr,{value:fe,children:e.jsx(Tn,{value:he,children:e.jsxs(x,{ref:c.refs.setFloating,className:$(k.wrapper,ee),...Ue(),...te,style:Cn,children:[!ce&&e.jsx(x,{className:k.noResults,children:J??e.jsx(ne,{textStyle:"body.sm",children:"No results found"})}),ce&&e.jsxs(x,{className:k.levelsViewport,children:[xe&&e.jsx(x,{ref:at,className:k.sizeProbe,"aria-hidden":!0,style:qn,children:e.jsxs(x,{className:k.level,children:[B>0&&e.jsxs(x,{as:"button",type:"button",className:k.backHeader,children:[e.jsx(X,{name:"caret-left",fill:"icon"}),Z.title]}),e.jsx(x,{className:y,children:mt(Z.children,`${Z.key}-probe`)})]})}),e.jsx(x,{className:k.levelsTrack,style:{width:`${l}%`,transform:`translateX(-${u}%)`},children:oe.map((f,P)=>{const C=P===B,K=mt(f.children,f.key);return C?e.jsx(kn,{value:Xe,children:e.jsx(mn,{elementsRef:Q,labelsRef:Le,children:e.jsxs(x,{className:k.level,style:{flex:`0 0 ${w}%`},children:[P>0&&e.jsxs(x,{as:"button",type:"button",className:k.backHeader,onClick:fe.onPopDiginLevel,children:[e.jsx(X,{name:"caret-left"}),f.title]}),e.jsx(x,{className:y,children:K})]})})},f.key):e.jsxs(x,{className:k.level,style:{flex:`0 0 ${w}%`},"aria-hidden":!0,children:[P>0&&e.jsxs(x,{as:"button",type:"button",className:k.backHeader,onClick:fe.onPopDiginLevel,children:[e.jsx(X,{name:"caret-left"}),f.title]}),e.jsx(x,{className:y,children:K})]},f.key)})})]})]})})}),En=L||!s,Rn=o.isValidElement(s)?s.props.ref:void 0,Bn=Un([Rn,c.refs.setReference]);if(En)return e.jsx(dt,{children:e.jsx(Je,{id:n,children:ot})});const lt=o.isValidElement(s)&&s.props?(()=>{const{ref:f,children:P,onKeyDown:C,...K}=s.props;return{rest:K,onKeyDown:C}})():{rest:{},onKeyDown:void 0},On=lt.rest,ye=lt.onKeyDown,it=$e({...On,ref:Bn}),Fn=f=>{if(S&&(f.key==="ArrowLeft"||f.key==="ArrowRight")&&typeof ye=="function"){ye(f);return}const P=it.onKeyDown;typeof P=="function"&&P(f),typeof ye=="function"&&ye(f)};return e.jsx(dt,{children:e.jsxs(Je,{id:n,children:[o.cloneElement(s,{...it,onKeyDown:Fn}),S&&e.jsx(fn,{children:e.jsx(gn,{context:c.context,modal:!1,order:h?["reference","content"]:void 0,children:ot})})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{trigger:{required:!1,tsType:{name:"ReactElement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},strategy:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}]},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},triggerInteraction:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'click-and-hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'click-and-hover'"}]},description:""},triggerOpenDelay:{required:!1,tsType:{name:"number"},description:""},triggerCloseDelay:{required:!1,tsType:{name:"number"},description:""},subMenuInteraction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},query:{required:!1,tsType:{name:"string"},description:""},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},filterMode:{required:!1,tsType:{name:"union",raw:"'none' | 'contains'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'contains'"}]},description:""},renderNoResults:{required:!1,tsType:{name:"ReactNode"},description:""},highlightMatches:{required:!1,tsType:{name:"boolean"},description:""},getItemText:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: { label?: string; description?: string }) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ label?: string; description?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"string"}}},description:""},panel:{required:!1,tsType:{name:"MenuVariantProps['panel']",raw:"MenuVariantProps['panel']"},description:""},onMenubarEdgeNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(direction: 1 | -1) => void",signature:{arguments:[{type:{name:"union",raw:"1 | -1",elements:[{name:"literal",value:"1"},{name:"literal",value:"-1"}]},name:"direction"}],return:{name:"void"}}},description:`When this \`Menu\` is used as one section of a horizontal menubar, pass a
handler so Arrow Left / Arrow Right on **leaf** items and at the first
submenu level can move to the previous/next menubar section (APG Navigation
Menubar pattern). Typically closes this menu then focuses/opens the
adjacent section’s trigger.
Also enables focus order so the trigger keeps focus while the panel is open
until the user arrows into the list (otherwise focus would jump to the first
row and horizontal menubar keys would not run on the trigger).`},as:{required:!1,tsType:{name:"T"},description:""}}};const le=r=>{const{label:n,children:s,divider:a,...i}=r,b=rt(),d=nt();return Oe(s,d)?e.jsx(nr,{density:b.density,label:n,divider:a,...i,children:s}):null};le[Fe]=de.group;le.__docgenInfo={description:"",methods:[],displayName:"MenuGroup",props:{as:{required:!1,tsType:{name:"T"},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},divider:{required:!1,tsType:{name:"boolean"},description:""}}};const t=r=>{const{label:n,description:s,variant:a="default",disabled:i,selected:b,iconBefore:d,iconAfter:g,href:m,target:H,rel:L,closeOnSelect:I,density:Y,textValue:O,onClick:z,...A}=r,[se,ae]=et(A),G={...ae},J="onKeyDown"in G&&typeof G.onKeyDown=="function"?G.onKeyDown:void 0;delete G.onKeyDown;const D=rt(),T=bn(),h=nt(),p=In(),ee=a==="divider"?"default":a,te=Y??D.density,q=yn({density:te,variant:ee,iconBefore:!!d,iconAfter:!!g,selected:!!b}),k=Re({textValue:O,label:n,description:s,getItemText:h.getItemText}),y=Be({textValue:k,query:h.query,filterMode:h.filterMode}),R=hn({label:k});if(a==="divider")return e.jsx(sr,{});if(!y)return null;const pe=I??D.closeOnSelect,V=O??n??"menu-item",j=c=>{z==null||z(c),c.defaultPrevented||T==null||T.events.emit("click"),!c.defaultPrevented&&pe&&D.onCloseMenu()},S=c=>{c.preventDefault(),c.stopPropagation()},_=p?p.getItemProps({onClick:j}):{onClick:j},{onKeyDown:N,...F}=_,U=c=>{if(c.key==="ArrowLeft"||c.key==="ArrowRight"){if(m){N==null||N(c);return}const Q=(p==null?void 0:p.nestedMenuDepth)??0;if(c.key==="ArrowLeft"&&Q>0&&(p!=null&&p.closeParentSubMenuFlyout)){c.preventDefault(),c.stopPropagation(),p.closeParentSubMenuFlyout();return}if(c.key==="ArrowLeft"&&Q===0&&D.onMenubarEdgeNavigate){c.preventDefault(),c.stopPropagation(),D.onCloseMenu(),D.onMenubarEdgeNavigate(-1);return}if(c.key==="ArrowRight"&&D.onMenubarEdgeNavigate){c.preventDefault(),c.stopPropagation(),D.onCloseMenu(),D.onMenubarEdgeNavigate(1);return}}N==null||N(c),J==null||J(c)},W=a==="checkbox"||a==="toggle"?"menuitemcheckbox":"menuitem",ie=m?{as:"a",href:m,target:H,rel:L,...i&&{onClick:c=>{c.preventDefault()}}}:{as:"button",type:"button",disabled:i},B=c=>{R.ref(c)};return e.jsxs(x,{...ie,className:$(q.wrapper,se),ref:B,role:W,"aria-checked":a==="checkbox"||a==="toggle"?!!b:void 0,"aria-disabled":i,"data-selected":b,"data-disabled":i,"data-active":p?p.activeIndex===R.index:!1,tabIndex:p?p.activeIndex===R.index?0:-1:0,...F,onKeyDown:U,...G,children:[a==="checkbox"&&e.jsx(rr,{name:V,className:q.beforeSlot,checked:!!b,onChange:S,tabIndex:-1}),a==="toggle"&&e.jsx(ar,{name:V,className:q.beforeSlot,checked:!!b,onChange:S,mr:"4",tabIndex:-1}),d&&e.jsx(X,{className:$(q.icon,q.beforeSlot),name:d}),e.jsxs(x,{className:q.itemMain,children:[n&&e.jsx(ne,{className:q.itemLabel,children:e.jsx(ue,{value:n,query:h.query,enabled:h.highlightMatches})}),s&&e.jsx(ne,{className:q.itemDescription,children:e.jsx(ue,{value:s,query:h.query,enabled:h.highlightMatches})})]}),g&&e.jsx(X,{className:$(q.icon,q.afterSlot),name:g,ml:"auto"})]})};t[Fe]=de.item;t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'checkbox' | 'toggle' | 'divider'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'toggle'"},{name:"literal",value:"'divider'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},iconAfter:{required:!1,tsType:{name:"IconNamesList"},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const M=r=>{const n=rn(),s=Zn(),a=bn(),{label:i,description:b,disabled:d,selected:g,iconBefore:m,interaction:H,placement:L,children:I,textValue:Y,density:O,...z}=r,[A,se]=et(z),{style:ae,...G}=se,J=ae,D=G,T=rt(),h=nt(),p=In(),ee=H??T.subMenuInteraction,te=typeof O=="string"?O:T.density,q=jn({density:te}),k=xn({density:te}),y=yn({density:te,iconBefore:!!m,iconAfter:!0,selected:!!g}),R=Re({textValue:Y,label:i,description:b,getItemText:h.getItemText}),pe=Be({textValue:R,query:h.query,filterMode:h.filterMode}),V=hn({label:R}),[j,S]=o.useState(!1),[_,N]=o.useState(null),F=o.useRef([]),U=o.useRef([]),W=o.useRef(null),ie=Pn(),B=o.useRef(!1),c=o.useRef(!1),Q=o.useCallback(()=>{B.current=!0,S(!0)},[]),E=Xn({nodeId:n,open:j,onOpenChange:(l,w,u)=>{!l&&u==="focus-out"&&ee==="hover"&&s!=null||S(l)},placement:L??"right-start",whileElementsMounted:tr,middleware:[Yn({mainAxis:0,alignmentAxis:-4}),Jn(),er({padding:8})]}),me=sn(E.context,{enabled:!d&&s!=null,delay:{open:75},handleClose:an({blockPointerEvents:ie})}),Ve=on(E.context,{event:"mousedown",toggle:!1,ignoreMouse:!0}),_e=ln(E.context,{bubbles:!0}),We=cn(E.context,{role:"menu"}),Ke=un(E.context,{listRef:F,activeIndex:_,onNavigate:N,nested:!0,focusItemOnOpen:!1}),He=dn(E.context,{listRef:U,activeIndex:_,onMatch:j?N:void 0,resetMs:600}),{getReferenceProps:ze,getFloatingProps:Ge,getItemProps:$e}=pn([me,Ve,_e,We,Ke,He]);o.useEffect(()=>{if(!a)return;const l=()=>{S(!1)},w=u=>{u.nodeId!==n&&u.parentId===s&&S(!1)};return a.events.on("click",l),a.events.on("menuopen",w),()=>{a.events.off("click",l),a.events.off("menuopen",w)}},[a,n,s]),o.useEffect(()=>{j&&a&&a.events.emit("menuopen",{parentId:s,nodeId:n})},[a,j,n,s]),o.useEffect(()=>{j||N(null)},[j]),o.useLayoutEffect(()=>{if(!j||!B.current)return;const l=()=>{const w=gr(F);return w===null?!1:(B.current=!1,c.current=!0,N(w),!0)};l()||requestAnimationFrame(()=>{l()||(B.current=!1)})},[j]),o.useEffect(()=>{if(!j){c.current=!1;return}if(!c.current||_===null)return;const l=F.current[_];l&&l.focus({preventScroll:!0}),c.current=!1},[j,_]);const Ue=o.useMemo(()=>({query:h.query,filterMode:h.filterMode,highlightMatches:h.highlightMatches,getItemText:h.getItemText}),[h]),Qe=o.useCallback(l=>{N(w=>An(F,l,w))},[]),he=o.useCallback(()=>{S(!1),queueMicrotask(()=>{var l;(l=W.current)==null||l.focus()})},[]),ce=((p==null?void 0:p.nestedMenuDepth)??0)+1,fe={activeIndex:_,getItemProps:l=>$e(l),navigateMainAxis:Qe,nestedMenuDepth:ce,closeParentSubMenuFlyout:he},Ze={...E.floatingStyles,...J||{}},Xe=p?p.getItemProps({onKeyDown:l=>{l.key==="ArrowRight"&&!d&&(l.preventDefault(),Q())}}):{onKeyDown:l=>{l.key==="ArrowRight"&&!d&&(l.preventDefault(),Q())}},oe=ze(Xe),Z=oe.onKeyDown,ge={...oe,onKeyDown:l=>{if(ee!=="digin"&&p){const w=p.nestedMenuDepth??0;if(l.key==="ArrowLeft"){if(j){l.preventDefault(),l.stopPropagation(),S(!1),queueMicrotask(()=>{var u;return(u=W.current)==null?void 0:u.focus()});return}if(w===0&&T.onMenubarEdgeNavigate){l.preventDefault(),l.stopPropagation(),T.onCloseMenu(),T.onMenubarEdgeNavigate(-1);return}}}if(ee!=="digin"&&(p!=null&&p.navigateMainAxis)&&(l.key==="ArrowDown"||l.key==="ArrowUp")){l.preventDefault(),l.stopPropagation(),j&&S(!1),p.navigateMainAxis(l.key==="ArrowDown"?1:-1);return}typeof Z=="function"&&Z(l)}};if(!pe)return null;if(ee==="digin"){const w={...p?p.getItemProps({onClick:u=>{u==null||u.preventDefault(),u==null||u.stopPropagation(),d||T.onPushDiginLevel(i,I)},onKeyDown:u=>{(u.key==="ArrowRight"||u.key==="Enter"||u.key===" ")&&(u.preventDefault(),u.stopPropagation(),d||T.onPushDiginLevel(i,I))}}):{onClick:u=>{u==null||u.preventDefault(),u==null||u.stopPropagation(),d||T.onPushDiginLevel(i,I)},onKeyDown:u=>{u&&(u.key==="ArrowRight"||u.key==="Enter"||u.key===" ")&&(u.preventDefault(),u.stopPropagation(),d||T.onPushDiginLevel(i,I))}}};return e.jsxs("button",{...D,role:"menuitem","aria-disabled":d,disabled:d,className:$(y.wrapper,A),ref:u=>{V.ref(u)},style:J,"data-selected":g,"data-disabled":d,"data-active":p?p.activeIndex===V.index:!1,tabIndex:p?p.activeIndex===V.index?0:-1:0,...w,type:"button",children:[m&&e.jsx(X,{className:$(y.icon,y.beforeSlot),name:m}),e.jsxs(x,{className:y.itemMain,children:[e.jsx(ne,{className:y.itemLabel,children:e.jsx(ue,{value:i,query:h.query,enabled:h.highlightMatches})}),b&&e.jsx(ne,{className:y.itemDescription,children:e.jsx(ue,{value:b,query:h.query,enabled:h.highlightMatches})})]}),e.jsx(X,{className:$(y.icon,y.afterSlot),name:"caret-right",ml:"auto"})]})}return e.jsxs(Je,{id:n,children:[e.jsxs("button",{...D,role:"menuitem","aria-haspopup":"menu","aria-expanded":j,"aria-disabled":d,disabled:d,className:y.wrapper,ref:l=>{W.current=l,V.ref(l),E.refs.setReference(l)},"data-selected":g,"data-disabled":d,"data-active":p?p.activeIndex===V.index:!1,tabIndex:p?p.activeIndex===V.index?0:-1:0,...ge,type:"button",children:[m&&e.jsx(X,{className:$(y.icon,y.beforeSlot),name:m}),e.jsxs(x,{className:y.itemMain,children:[e.jsx(ne,{className:y.itemLabel,children:e.jsx(ue,{value:i,query:h.query,enabled:h.highlightMatches})}),b&&e.jsx(ne,{className:y.itemDescription,children:e.jsx(ue,{value:b,query:h.query,enabled:h.highlightMatches})})]}),e.jsx(X,{className:$(y.icon,y.afterSlot),name:"caret-right",ml:"auto"})]}),j&&e.jsx(fn,{children:e.jsx(gn,{context:E.context,modal:!1,initialFocus:-1,returnFocus:!1,children:e.jsx(Tn,{value:Ue,children:e.jsx(kn,{value:fe,children:e.jsx(x,{ref:E.refs.setFloating,className:$(q.wrapper,A),...Ge({onKeyDown:l=>{l.key==="ArrowLeft"&&(l.preventDefault(),S(!1),queueMicrotask(()=>{var w;return(w=W.current)==null?void 0:w.focus()}))}}),style:Ze,children:e.jsx(mn,{elementsRef:F,labelsRef:U,children:e.jsx(x,{className:k,children:I})})})})})})})]})};M[Fe]=de.subMenu;M.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},interaction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""}}};const Zr={title:"Components/Menu",component:v,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},hr=()=>{const[r,n]=o.useState("item-2");return e.jsxs(v,{inline:!0,closeOnSelect:!1,children:[e.jsx(t,{label:"Option One",selected:r==="item-1",onClick:()=>n("item-1")}),e.jsx(t,{label:"Option Two",selected:r==="item-2",onClick:()=>n("item-2")}),e.jsx(t,{label:"Option Three",selected:r==="item-3",onClick:()=>n("item-3")})]})},xr=()=>{const[r,n]=o.useState(["beta"]),s=a=>{n(i=>i.includes(a)?i.filter(b=>b!==a):[...i,a])};return e.jsx(v,{inline:!0,closeOnSelect:!1,children:e.jsxs(le,{label:"Wave type",children:[e.jsx(t,{variant:"checkbox",label:"Alpha",selected:r.includes("alpha"),onClick:()=>s("alpha")}),e.jsx(t,{variant:"checkbox",label:"Beta",selected:r.includes("beta"),onClick:()=>s("beta")}),e.jsx(t,{variant:"checkbox",label:"Gamma",selected:r.includes("gamma"),onClick:()=>s("gamma")})]})})},yr=()=>{const[r,n]=o.useState(!1),[s,a]=o.useState(!0);return e.jsxs(v,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(le,{label:"Options",divider:!0,children:[e.jsx(t,{variant:"toggle",label:"Compact mode",selected:r,onClick:()=>n(i=>!i)}),e.jsx(t,{variant:"toggle",label:"Email alerts",selected:s,onClick:()=>a(i=>!i)})]}),e.jsx(t,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},Mr=()=>{const[r,n]=o.useState(""),[s,a]=o.useState(""),[i,b]=o.useState(""),[d,g]=o.useState("");return e.jsxs(v,{trigger:e.jsx(re,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(t,{label:"Dashboard"}),e.jsx(M,{label:"Edit profile",children:e.jsxs(x,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(Me,{label:"Profile name",labelFor:"profile-name",children:e.jsx(be,{id:"profile-name",name:"profileName",value:r,onChange:m=>n(m.target.value)})}),e.jsx(Me,{label:"Owner",labelFor:"profile-owner",children:e.jsx(be,{id:"profile-owner",name:"profileOwner",value:s,onChange:m=>a(m.target.value)})}),e.jsx(re,{variant:"primary",children:"Submit"})]})}),e.jsx(M,{label:"Create alert",children:e.jsxs(x,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(Me,{label:"Topic",labelFor:"alert-topic",children:e.jsx(be,{id:"alert-topic",name:"alertTopic",value:i,onChange:m=>b(m.target.value)})}),e.jsx(Me,{label:"Channel",labelFor:"alert-channel",children:e.jsx(be,{id:"alert-channel",name:"alertChannel",value:d,onChange:m=>g(m.target.value)})}),e.jsx(re,{variant:"primary",children:"Submit"})]})})]})},jr=()=>{const[r,n]=o.useState("");return e.jsxs(tt,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(be,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:r,onChange:s=>n(s.target.value)}),e.jsxs(v,{inline:!0,query:r,filterMode:"contains",highlightMatches:!0,children:[e.jsx(t,{label:"Account settings",description:"Manage profile and security"}),e.jsx(t,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(t,{label:"Integrations",description:"Connect external tools"}),e.jsx(t,{label:"Audit history",description:"Track critical events"})]})]})},je={render:()=>e.jsxs(v,{inline:!0,children:[e.jsx(t,{label:"Edit",iconBefore:"pencil"}),e.jsx(t,{label:"Duplicate",iconBefore:"copy"}),e.jsx(t,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},ve={render:()=>e.jsxs(v,{inline:!0,children:[e.jsxs(le,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Rename"}),e.jsx(t,{label:"Move"})]}),e.jsx(le,{label:"Danger Zone",children:e.jsx(t,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},Se={render:()=>e.jsx(hr,{}),parameters:{controls:{disable:!0}}},we={render:()=>e.jsx(xr,{}),parameters:{controls:{disable:!0}}},Ie={render:()=>e.jsxs(Hn,{gap:"12",alignItems:"flex-start",children:[e.jsxs(v,{inline:!0,density:"compact",children:[e.jsx(t,{label:"Compact",description:"Small row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(v,{inline:!0,density:"comfortable",children:[e.jsx(t,{label:"Comfortable",description:"Default row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(v,{inline:!0,density:"spacious",children:[e.jsx(t,{label:"Spacious",description:"Large row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},Te={render:()=>e.jsxs(tt,{children:[e.jsxs(v,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(le,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(t,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(M,{label:"More actions",iconBefore:"apps",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),e.jsxs(ne,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(zn,{})]}),parameters:{controls:{disable:!0}}},ke={render:()=>e.jsx(yr,{}),parameters:{controls:{disable:!0}}},Pe={render:()=>e.jsxs(v,{trigger:e.jsx(re,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},vr=()=>{const r=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],n=["sales","production","admin"],[s,a]=o.useState(null),i=g=>({open:s===g,onOpenChange:m=>{if(m){a(g);return}a(H=>H===g?null:H)}}),b=(g,m)=>{const H=n.indexOf(m),L=n.length,I=(H+g+L*10)%L,Y=n[I],O=r[I];if(Y===void 0)return;if(!(s!==null)){window.requestAnimationFrame(()=>{var A;O&&((A=document.getElementById(O))==null||A.focus())});return}window.requestAnimationFrame(()=>{var A;a(Y),O&&((A=document.getElementById(O))==null||A.focus())})},d=g=>m=>{m.key!=="ArrowLeft"&&m.key!=="ArrowRight"||(m.preventDefault(),m.stopPropagation(),b(m.key==="ArrowRight"?1:-1,g))};return e.jsx(tt,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(x,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(re,{id:r[0],variant:"selectedBold",onKeyDown:d("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"sales"),...i("sales"),children:[e.jsxs(M,{label:"Quotes",children:[e.jsx(t,{label:"Open quotes"}),e.jsx(t,{label:"Draft quotes"})]}),e.jsxs(M,{label:"Orders",selected:!0,children:[e.jsx(t,{label:"Order list"}),e.jsxs(M,{label:"Used orders",selected:!0,children:[e.jsx(t,{label:"Order as used",selected:!0}),e.jsx(t,{label:"Bookings"}),e.jsx(t,{label:"Order commissions"})]})]}),e.jsxs(M,{label:"Invoices",children:[e.jsx(t,{label:"All invoices"}),e.jsx(t,{label:"Credit notes"})]})]}),e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(re,{id:r[1],onKeyDown:d("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"production"),...i("production"),children:[e.jsxs(M,{label:"Work Orders",children:[e.jsx(t,{label:"Open work orders"}),e.jsx(t,{label:"Completed"})]}),e.jsxs(M,{label:"Scheduling",children:[e.jsx(t,{label:"Production schedule"}),e.jsx(t,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(t,{label:"Inventory"})]}),e.jsxs(v,{triggerInteraction:"click-and-hover",trigger:e.jsx(re,{id:r[2],onKeyDown:d("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:g=>b(g,"admin"),...i("admin"),children:[e.jsxs(M,{label:"Users",children:[e.jsx(t,{label:"All users"}),e.jsx(t,{label:"Roles & permissions"})]}),e.jsxs(M,{label:"Settings",children:[e.jsx(t,{label:"General"}),e.jsx(t,{label:"Integrations"}),e.jsx(t,{label:"Billing"})]}),e.jsx(t,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},Ae={name:"Top nav example",render:()=>e.jsx(vr,{}),parameters:{controls:{disable:!0}}},De={render:()=>e.jsxs(v,{trigger:e.jsx(re,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(t,{label:"Dashboard"}),e.jsxs(M,{label:"Settings",children:[e.jsx(t,{label:"Profile"}),e.jsx(t,{label:"Billing"}),e.jsxs(M,{label:"Team",children:[e.jsx(t,{label:"Members"}),e.jsx(t,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},Ne={render:()=>e.jsx(Mr,{}),parameters:{controls:{disable:!0}}},Ce={render:()=>e.jsx(jr,{}),parameters:{controls:{disable:!0}}},qe={name:"Panel as sidebar",render:()=>e.jsx(nn,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(v,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},Ee={name:"Panel as mobile nav",render:()=>e.jsx(nn,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(v,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(M,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(M,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var ft,gt,bt;je.parameters={...je.parameters,docs:{...(ft=je.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Pt=(kt=Ie.parameters)==null?void 0:kt.docs)==null?void 0:Pt.source}}};var At,Dt,Nt;Te.parameters={...Te.parameters,docs:{...(At=Te.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Nt=(Dt=Te.parameters)==null?void 0:Dt.docs)==null?void 0:Nt.source}}};var Ct,qt,Et;ke.parameters={...ke.parameters,docs:{...(Ct=ke.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Et=(qt=ke.parameters)==null?void 0:qt.docs)==null?void 0:Et.source}}};var Rt,Bt,Ot;Pe.parameters={...Pe.parameters,docs:{...(Rt=Pe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ot=(Bt=Pe.parameters)==null?void 0:Bt.docs)==null?void 0:Ot.source}}};var Ft,Lt,Vt;Ae.parameters={...Ae.parameters,docs:{...(Ft=Ae.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Vt=(Lt=Ae.parameters)==null?void 0:Lt.docs)==null?void 0:Vt.source}}};var _t,Wt,Kt;De.parameters={...De.parameters,docs:{...(_t=De.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Kt=(Wt=De.parameters)==null?void 0:Wt.docs)==null?void 0:Kt.source}}};var Ht,zt,Gt;Ne.parameters={...Ne.parameters,docs:{...(Ht=Ne.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Gt=(zt=Ne.parameters)==null?void 0:zt.docs)==null?void 0:Gt.source}}};var $t,Ut,Qt;Ce.parameters={...Ce.parameters,docs:{...($t=Ce.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Qt=(Ut=Ce.parameters)==null?void 0:Ut.docs)==null?void 0:Qt.source}}};var Zt,Xt,Yt;qe.parameters={...qe.parameters,docs:{...(Zt=qe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(Yt=(Xt=qe.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Jt,en,tn;Ee.parameters={...Ee.parameters,docs:{...(Jt=Ee.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(tn=(en=Ee.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};const Xr=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{je as Actions,ve as ActionsWithSections,Ce as AutocompleteFiltering,Te as ConditionalBreakpoints,Ie as Density,we as MultiSelect,Ee as PanelAsMobileNav,qe as PanelAsSidebar,Se as SingleSelect,De as SubMenuDigin,Ne as SubMenuDiginForms,Pe as SubMenuHover,ke as ToggleOptions,Ae as TopNavExample,Xr as __namedExportsOrder,Zr as default};
