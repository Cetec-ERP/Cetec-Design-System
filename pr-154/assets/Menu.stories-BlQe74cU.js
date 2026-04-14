import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{m as kn,f as Cn,s as Pn,a as qn,g as Nn,d as $e,B as b,e as D,H as Kt,V as Ke,F as Ut}from"./Box-7d6-wXl0.js";import{B as An}from"./BreakpointIndicator-Cv_9ebTk.js";import{B as U}from"./Button-BPTv53sm.js";import{F as he}from"./FormField-Bas2GR61.js";import{T as K}from"./Text-Cm9k3dA6.js";import{T as ie}from"./TextInput-DhhujvPk.js";import{j as Qt,u as Bn,d as On,e as Zt,s as Xt,k as Yt,a as Jt,g as en,l as tn,m as nn,b as sn,n as rn,o as nt,p as Ge,F as an,c as ln,q as Dn,r as on,t as cn,v as En,w as Rn,x as Vn,y as Fn,z as Ln,A as _n}from"./floating-AgLCAi8_.js";import{l as un,a as Wn,c as dn,H as se}from"./ListItem-D8BZ7NOY.js";import{I as _}from"./Icon-CdfbFGjj.js";import"./IconConfig-D6qOrJtl.js";import{C as Hn}from"./Checkbox-C_UCDWiX.js";import{D as zn}from"./Divider-DnnylyCd.js";import{T as Gn}from"./Toggle-RQoit5R0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag--YEh4_zB.js";import"./Spinner-DsNgvsFa.js";import"./Label-Ch2Pf9WZ.js";import"./Tooltip-C2CWoKKf.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const mn={density:"compact"},$n=[],Kn=[["wrapper","menu__wrapper"],["backHeader","menu__backHeader"],["levelsViewport","menu__levelsViewport"],["levelsTrack","menu__levelsTrack"],["level","menu__level"],["sizeProbe","menu__sizeProbe"],["noResults","menu__noResults"]],Un=Kn.map(([s,n])=>[s,qn(n,mn,Nn($n,s))]),Qn=kn((s={})=>Object.fromEntries(Un.map(([n,a])=>[n,a.recipeFn(s)]))),st=["density","panel"],Zn=s=>({...mn,...Cn(s)}),pn=Object.assign(Qn,{__recipe__:!1,__name__:"menu",raw:s=>s,classNameMap:{},variantKeys:st,variantMap:{density:["compact","comfortable","spacious"],panel:["true"]},splitVariantProps(s){return Pn(s,st)},getVariantProps:Zn}),re={group:"MenuGroup",item:"MenuItem",subMenu:"SubMenu"},Be="__menuComponentType",Xn=({label:s,description:n})=>[s,n].filter(Boolean).join(" ").trim(),Yn={query:"",filterMode:"none",highlightMatches:!0,getItemText:Xn},bn=l.createContext({...Yn}),hn=l.createContext(null),gn=l.createContext(null),Ue=()=>l.useContext(bn),Qe=()=>{const s=l.useContext(hn);if(!s)throw new Error("Menu compound components must be used within <Menu />");return s},xn=()=>l.useContext(gn),fn=bn.Provider,Jn=hn.Provider,yn=gn.Provider,qe=({textValue:s,label:n,description:a,getItemText:r})=>s||r({label:n,description:a}),Ne=({textValue:s,query:n,filterMode:a})=>a==="none"||!n.trim()?!0:s.toLowerCase().includes(n.trim().toLowerCase()),es=s=>{if(!s||typeof s!="object"||!("type"in s))return null;const n=s.type;return(n==null?void 0:n[Be])??null},Ae=(s,n)=>l.Children.toArray(s).some(a=>{if(!l.isValidElement(a))return!1;const r=a,i=es(r);if(i===re.item){if(r.props.variant==="divider")return!0;const c=qe({textValue:r.props.textValue,label:r.props.label,description:r.props.description,getItemText:n.getItemText});return Ne({textValue:c,query:n.query,filterMode:n.filterMode})}if(i===re.subMenu){const m=qe({textValue:r.props.textValue,label:r.props.label,description:r.props.description,getItemText:n.getItemText});return Ne({textValue:m,query:n.query,filterMode:n.filterMode})||Ae(r.props.children,n)}return i===re.group?Ae(r.props.children,n):!0}),ts=({label:s,description:n})=>[s,n].filter(Boolean).join(" ").trim(),rt=(s,n)=>l.Children.map(s,(a,r)=>{if(!l.isValidElement(a))return a;const i=a.key??r;return l.cloneElement(a,{key:`${n}-${String(i)}`})}),x=s=>{var et;const n=Qt(),{trigger:a,children:r,open:i,defaultOpen:m,onOpenChange:c,placement:P="bottom-start",strategy:f="absolute",closeOnSelect:ae=!0,inline:W=!1,triggerInteraction:T="click",triggerOpenDelay:le=75,triggerCloseDelay:Q=100,subMenuInteraction:E="hover",density:R="compact",panel:Z,query:X="",filterMode:H="none",renderNoResults:z,highlightMatches:k=!!X,getItemText:M=ts,...g}=s,[v,S]=$e(g),G=S.style,I=pn({density:R,panel:Z}),V=un({density:R}),u=!!a&&!W,[Y,te]=l.useState(m??!1),q=i!==void 0,w=q?i:Y,A=u?w:!0,$=(d,O,C)=>{!d&&(C==="hover"||C==="safe-polygon")&&(T==="hover"||T==="click-and-hover")||(q||te(d),c==null||c(d))},[F,y]=l.useState([]),[J,Oe]=l.useState({width:null,height:null}),j=F.length;l.useEffect(()=>{w||y([])},[w]);const N=Bn({nodeId:n,open:u?w:!0,onOpenChange:$,placement:P,strategy:f,middleware:On({extras:[Dn()]})}),ce=l.useRef([]),ue=l.useRef([]),[oe,de]=l.useState(null),De=Zt(N.context,{enabled:u&&(T==="hover"||T==="click-and-hover"),delay:{open:le,close:Q},handleClose:Xt({blockPointerEvents:!0})}),Ee=Yt(N.context,{enabled:u&&(T==="click"||T==="click-and-hover")}),Re=Jt(N.context,{enabled:u}),Ve=en(N.context,{role:"menu"}),Fe=tn(N.context,{listRef:ce,activeIndex:oe,onNavigate:de,loop:!0}),Le=nn(N.context,{listRef:ue,activeIndex:oe,onMatch:de,resetMs:600}),{getReferenceProps:_e,getFloatingProps:We,getItemProps:Ze}=sn([De,Ee,Re,Ve,Fe,Le]),me=l.useMemo(()=>({query:X,filterMode:H,highlightMatches:k,getItemText:M}),[H,M,k,X]),p=((et=F[F.length-1])==null?void 0:et.children)??r,B=Ae(p,me),o={density:R,panel:Z,closeOnSelect:ae,subMenuInteraction:E,inline:W,onCloseMenu:()=>{$(!1),y([])},onPushDiginLevel:(d,O)=>{y(C=>{const L=C[C.length-1];return L&&L.title===d&&L.children===O?C:[...C,{key:`${d}-${C.length}`,title:d,children:O}]})},onPopDiginLevel:()=>{y(d=>d.slice(0,-1))},diginDepth:j},jn={activeIndex:oe,getItemProps:d=>Ze(d)},pe=[{key:"root",title:"Menu",children:r},...F],ne=pe[Math.min(j,pe.length-1)],He=pe.length,Mn=He*100,Xe=100/He,vn=j*100/He,Sn=!!Z&&E==="digin",be=E==="digin"&&B,Ye=l.useRef(null);l.useLayoutEffect(()=>{if(!A||!be){Oe({width:null,height:null});return}const d=Ye.current;if(!d)return;const O=()=>{const L=Math.ceil(d.scrollWidth),tt=Math.ceil(d.scrollHeight);Oe(ze=>ze.width===L&&ze.height===tt?ze:{width:L,height:tt})};O();const C=new ResizeObserver(O);return C.observe(d),()=>{C.disconnect()}},[ne.children,ne.key,ne.title,R,j,B,A,be]);const In=be&&J.width&&J.height?{width:`${J.width}px`,height:`${J.height}px`}:{},Tn={...u&&!W?N.floatingStyles:{},...In,...G??{}},wn=Sn?{inset:"0",width:"100%",height:"100%"}:{},Je=e.jsx(Jn,{value:o,children:e.jsx(fn,{value:me,children:e.jsxs(b,{ref:N.refs.setFloating,className:D(I.wrapper,v),...We(),...S,style:Tn,children:[!B&&e.jsx(b,{className:I.noResults,children:z??e.jsx(K,{textStyle:"body.sm",children:"No results found"})}),B&&e.jsxs(b,{className:I.levelsViewport,children:[be&&e.jsx(b,{ref:Ye,className:I.sizeProbe,"aria-hidden":!0,style:wn,children:e.jsxs(b,{className:I.level,children:[j>0&&e.jsxs(b,{as:"button",type:"button",className:I.backHeader,children:[e.jsx(_,{name:"caret-left",fill:"icon"}),ne.title]}),e.jsx(b,{className:V,children:rt(ne.children,`${ne.key}-probe`)})]})}),e.jsx(b,{className:I.levelsTrack,style:{width:`${Mn}%`,transform:`translateX(-${vn}%)`},children:pe.map((d,O)=>{const C=O===j,L=rt(d.children,d.key);return C?e.jsx(yn,{value:jn,children:e.jsx(rn,{elementsRef:ce,labelsRef:ue,children:e.jsxs(b,{className:I.level,style:{flex:`0 0 ${Xe}%`},children:[O>0&&e.jsxs(b,{as:"button",type:"button",className:I.backHeader,onClick:o.onPopDiginLevel,children:[e.jsx(_,{name:"caret-left"}),d.title]}),e.jsx(b,{className:V,children:L})]})})},d.key):e.jsxs(b,{className:I.level,style:{flex:`0 0 ${Xe}%`},"aria-hidden":!0,children:[O>0&&e.jsxs(b,{as:"button",type:"button",className:I.backHeader,onClick:o.onPopDiginLevel,children:[e.jsx(_,{name:"caret-left"}),d.title]}),e.jsx(b,{className:V,children:L})]},d.key)})})]})]})})});return W||!a?e.jsx(nt,{children:e.jsx(Ge,{id:n,children:Je})}):e.jsx(nt,{children:e.jsxs(Ge,{id:n,children:[l.cloneElement(a,_e({ref:N.refs.setReference})),w&&e.jsx(an,{children:e.jsx(ln,{context:N.context,modal:!1,children:Je})})]})})};x.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{trigger:{required:!1,tsType:{name:"ReactElement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},strategy:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}]},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},triggerInteraction:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'click-and-hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'click-and-hover'"}]},description:""},triggerOpenDelay:{required:!1,tsType:{name:"number"},description:""},triggerCloseDelay:{required:!1,tsType:{name:"number"},description:""},subMenuInteraction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},query:{required:!1,tsType:{name:"string"},description:""},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},filterMode:{required:!1,tsType:{name:"union",raw:"'none' | 'contains'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'contains'"}]},description:""},renderNoResults:{required:!1,tsType:{name:"ReactNode"},description:""},highlightMatches:{required:!1,tsType:{name:"boolean"},description:""},getItemText:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: { label?: string; description?: string }) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ label?: string; description?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"string"}}},description:""},panel:{required:!1,tsType:{name:"MenuVariantProps['panel']",raw:"MenuVariantProps['panel']"},description:""},as:{required:!1,tsType:{name:"T"},description:""}}};const ee=s=>{const{label:n,children:a,divider:r,...i}=s,m=Qe(),c=Ue();return Ae(a,c)?e.jsx(Wn,{density:m.density,label:n,divider:r,...i,children:a}):null};ee[Be]=re.group;ee.__docgenInfo={description:"",methods:[],displayName:"MenuGroup",props:{as:{required:!1,tsType:{name:"T"},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},divider:{required:!1,tsType:{name:"boolean"},description:""}}};const t=s=>{const{label:n,description:a,variant:r="default",disabled:i,selected:m,iconBefore:c,iconAfter:P,href:f,target:ae,rel:W,closeOnSelect:T,density:le,textValue:Q,onClick:E,...R}=s,[Z,X]=$e(R),H=Qe(),z=on(),k=Ue(),M=xn(),g=r==="divider"?"default":r,v=le??H.density,S=dn({density:v,variant:g,iconBefore:!!c,iconAfter:!!P,selected:!!m}),G=qe({textValue:Q,label:n,description:a,getItemText:k.getItemText}),I=Ne({textValue:G,query:k.query,filterMode:k.filterMode}),V=cn({label:G});if(r==="divider")return e.jsx(zn,{});if(!I)return null;const u=T??H.closeOnSelect,Y=Q??n??"menu-item",te=y=>{E==null||E(y),y.defaultPrevented||z==null||z.events.emit("click"),!y.defaultPrevented&&u&&H.onCloseMenu()},q=y=>{y.preventDefault(),y.stopPropagation()},w=M?M.getItemProps({onClick:te}):{onClick:te},A=r==="checkbox"||r==="toggle"?"menuitemcheckbox":"menuitem",$=f?{as:"a",href:f,target:ae,rel:W,...i&&{onClick:y=>{y.preventDefault()}}}:{as:"button",type:"button",disabled:i},F=y=>{V.ref(y)};return e.jsxs(b,{...$,className:D(S.wrapper,Z),ref:F,role:A,"aria-checked":r==="checkbox"||r==="toggle"?!!m:void 0,"aria-disabled":i,"data-selected":m,"data-disabled":i,"data-active":M?M.activeIndex===V.index:!1,tabIndex:M?M.activeIndex===V.index?0:-1:0,...w,...X,children:[r==="checkbox"&&e.jsx(Hn,{name:Y,className:S.beforeSlot,checked:!!m,onChange:q,tabIndex:-1}),r==="toggle"&&e.jsx(Gn,{name:Y,className:S.beforeSlot,checked:!!m,onChange:q,mr:"4",tabIndex:-1}),c&&e.jsx(_,{className:D(S.icon,S.beforeSlot),name:c}),e.jsxs(b,{className:S.itemMain,children:[n&&e.jsx(K,{className:S.itemLabel,children:e.jsx(se,{value:n,query:k.query,enabled:k.highlightMatches})}),a&&e.jsx(K,{className:S.itemDescription,children:e.jsx(se,{value:a,query:k.query,enabled:k.highlightMatches})})]}),P&&e.jsx(_,{className:D(S.icon,S.afterSlot),name:P,ml:"auto"})]})};t[Be]=re.item;t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'checkbox' | 'toggle' | 'divider'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'toggle'"},{name:"literal",value:"'divider'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},iconAfter:{required:!1,tsType:{name:"IconNamesList"},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const h=s=>{const n=Qt(),a=En(),r=on(),{label:i,description:m,disabled:c,selected:P,iconBefore:f,interaction:ae,placement:W,children:T,textValue:le,density:Q,...E}=s,[R,Z]=$e(E),{style:X,...H}=Z,z=X,k=H,M=Qe(),g=Ue(),v=xn(),S=ae??M.subMenuInteraction,G=typeof Q=="string"?Q:M.density,I=pn({density:G}),V=un({density:G}),u=dn({density:G,iconBefore:!!f,iconAfter:!0,selected:!!P}),Y=qe({textValue:le,label:i,description:m,getItemText:g.getItemText}),te=Ne({textValue:Y,query:g.query,filterMode:g.filterMode}),q=cn({label:Y}),[w,A]=l.useState(!1),[$,F]=l.useState(null),y=l.useRef([]),J=l.useRef([]),j=Rn({nodeId:n,open:w,onOpenChange:(p,B,o)=>{!p&&o==="focus-out"&&S==="hover"&&a!=null||A(p)},placement:W??"right-start",whileElementsMounted:_n,middleware:[Vn({mainAxis:0,alignmentAxis:-4}),Fn(),Ln({padding:8})]}),N=Zt(j.context,{enabled:!c&&a!=null,delay:{open:75},handleClose:Xt({blockPointerEvents:!0})}),ce=Yt(j.context,{event:"mousedown",toggle:!1,ignoreMouse:!0}),ue=Jt(j.context,{bubbles:!0}),oe=en(j.context,{role:"menu"}),de=tn(j.context,{listRef:y,activeIndex:$,onNavigate:F,nested:!0}),De=nn(j.context,{listRef:J,activeIndex:$,onMatch:w?F:void 0,resetMs:600}),{getReferenceProps:Ee,getFloatingProps:Re,getItemProps:Ve}=sn([N,ce,ue,oe,de,De]);l.useEffect(()=>{if(!r)return;const p=()=>{A(!1)},B=o=>{o.nodeId!==n&&o.parentId===a&&A(!1)};return r.events.on("click",p),r.events.on("menuopen",B),()=>{r.events.off("click",p),r.events.off("menuopen",B)}},[r,n,a]),l.useEffect(()=>{w&&r&&r.events.emit("menuopen",{parentId:a,nodeId:n})},[r,w,n,a]);const Fe=l.useMemo(()=>({query:g.query,filterMode:g.filterMode,highlightMatches:g.highlightMatches,getItemText:g.getItemText}),[g]),Le={activeIndex:$,getItemProps:p=>Ve(p)},_e={...j.floatingStyles,...z||{}},We=v?v.getItemProps({onKeyDown:p=>{p.key==="ArrowRight"&&!c&&(p.preventDefault(),A(!0))}}):{onKeyDown:p=>{p.key==="ArrowRight"&&!c&&(p.preventDefault(),A(!0))}},me={...Ee(We)};if(!te)return null;if(S==="digin"){const B={...v?v.getItemProps({onClick:o=>{o==null||o.preventDefault(),o==null||o.stopPropagation(),c||M.onPushDiginLevel(i,T)},onKeyDown:o=>{(o.key==="ArrowRight"||o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),c||M.onPushDiginLevel(i,T))}}):{onClick:o=>{o==null||o.preventDefault(),o==null||o.stopPropagation(),c||M.onPushDiginLevel(i,T)},onKeyDown:o=>{o&&(o.key==="ArrowRight"||o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),c||M.onPushDiginLevel(i,T))}}};return e.jsxs("button",{...k,role:"menuitem","aria-disabled":c,disabled:c,className:D(u.wrapper,R),ref:o=>{q.ref(o)},style:z,"data-selected":P,"data-disabled":c,"data-active":v?v.activeIndex===q.index:!1,tabIndex:v?v.activeIndex===q.index?0:-1:0,...B,type:"button",children:[f&&e.jsx(_,{className:D(u.icon,u.beforeSlot),name:f}),e.jsxs(b,{className:u.itemMain,children:[e.jsx(K,{className:u.itemLabel,children:e.jsx(se,{value:i,query:g.query,enabled:g.highlightMatches})}),m&&e.jsx(K,{className:u.itemDescription,children:e.jsx(se,{value:m,query:g.query,enabled:g.highlightMatches})})]}),e.jsx(_,{className:D(u.icon,u.afterSlot),name:"caret-right",ml:"auto"})]})}return e.jsxs(Ge,{id:n,children:[e.jsxs("button",{...k,role:"menuitem","aria-haspopup":"menu","aria-expanded":w,"aria-disabled":c,disabled:c,className:u.wrapper,ref:p=>{q.ref(p),j.refs.setReference(p)},"data-selected":P,"data-disabled":c,"data-active":v?v.activeIndex===q.index:!1,tabIndex:v?v.activeIndex===q.index?0:-1:0,...me,type:"button",children:[f&&e.jsx(_,{className:D(u.icon,u.beforeSlot),name:f}),e.jsxs(b,{className:u.itemMain,children:[e.jsx(K,{className:u.itemLabel,children:e.jsx(se,{value:i,query:g.query,enabled:g.highlightMatches})}),m&&e.jsx(K,{className:u.itemDescription,children:e.jsx(se,{value:m,query:g.query,enabled:g.highlightMatches})})]}),e.jsx(_,{className:D(u.icon,u.afterSlot),name:"caret-right",ml:"auto"})]}),w&&e.jsx(an,{children:e.jsx(ln,{context:j.context,modal:!1,initialFocus:-1,returnFocus:!1,children:e.jsx(fn,{value:Fe,children:e.jsx(yn,{value:Le,children:e.jsx(b,{ref:j.refs.setFloating,className:D(I.wrapper,R),...Re({onKeyDown:p=>{p.key==="ArrowLeft"&&(p.preventDefault(),A(!1))}}),style:_e,children:e.jsx(rn,{elementsRef:y,labelsRef:J,children:e.jsx(b,{className:V,children:T})})})})})})})]})};h[Be]=re.subMenu;h.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},interaction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""}}};const Ds={title:"Components/Menu",component:x,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},ns=()=>{const[s,n]=l.useState("item-2");return e.jsxs(x,{inline:!0,closeOnSelect:!1,children:[e.jsx(t,{label:"Option One",selected:s==="item-1",onClick:()=>n("item-1")}),e.jsx(t,{label:"Option Two",selected:s==="item-2",onClick:()=>n("item-2")}),e.jsx(t,{label:"Option Three",selected:s==="item-3",onClick:()=>n("item-3")})]})},ss=()=>{const[s,n]=l.useState(["beta"]),a=r=>{n(i=>i.includes(r)?i.filter(m=>m!==r):[...i,r])};return e.jsx(x,{inline:!0,closeOnSelect:!1,children:e.jsxs(ee,{label:"Wave type",children:[e.jsx(t,{variant:"checkbox",label:"Alpha",selected:s.includes("alpha"),onClick:()=>a("alpha")}),e.jsx(t,{variant:"checkbox",label:"Beta",selected:s.includes("beta"),onClick:()=>a("beta")}),e.jsx(t,{variant:"checkbox",label:"Gamma",selected:s.includes("gamma"),onClick:()=>a("gamma")})]})})},rs=()=>{const[s,n]=l.useState(!1),[a,r]=l.useState(!0);return e.jsxs(x,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(ee,{label:"Options",divider:!0,children:[e.jsx(t,{variant:"toggle",label:"Compact mode",selected:s,onClick:()=>n(i=>!i)}),e.jsx(t,{variant:"toggle",label:"Email alerts",selected:a,onClick:()=>r(i=>!i)})]}),e.jsx(t,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},as=()=>{const[s,n]=l.useState(""),[a,r]=l.useState(""),[i,m]=l.useState(""),[c,P]=l.useState("");return e.jsxs(x,{trigger:e.jsx(U,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(t,{label:"Dashboard"}),e.jsx(h,{label:"Edit profile",children:e.jsxs(b,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(he,{label:"Profile name",labelFor:"profile-name",children:e.jsx(ie,{id:"profile-name",name:"profileName",value:s,onChange:f=>n(f.target.value)})}),e.jsx(he,{label:"Owner",labelFor:"profile-owner",children:e.jsx(ie,{id:"profile-owner",name:"profileOwner",value:a,onChange:f=>r(f.target.value)})}),e.jsx(U,{variant:"primary",children:"Submit"})]})}),e.jsx(h,{label:"Create alert",children:e.jsxs(b,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(he,{label:"Topic",labelFor:"alert-topic",children:e.jsx(ie,{id:"alert-topic",name:"alertTopic",value:i,onChange:f=>m(f.target.value)})}),e.jsx(he,{label:"Channel",labelFor:"alert-channel",children:e.jsx(ie,{id:"alert-channel",name:"alertChannel",value:c,onChange:f=>P(f.target.value)})}),e.jsx(U,{variant:"primary",children:"Submit"})]})})]})},ls=()=>{const[s,n]=l.useState("");return e.jsxs(Ke,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(ie,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:s,onChange:a=>n(a.target.value)}),e.jsxs(x,{inline:!0,query:s,filterMode:"contains",highlightMatches:!0,children:[e.jsx(t,{label:"Account settings",description:"Manage profile and security"}),e.jsx(t,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(t,{label:"Integrations",description:"Connect external tools"}),e.jsx(t,{label:"Audit history",description:"Track critical events"})]})]})},ge={render:()=>e.jsxs(x,{inline:!0,children:[e.jsx(t,{label:"Edit",iconBefore:"pencil"}),e.jsx(t,{label:"Duplicate",iconBefore:"copy"}),e.jsx(t,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},xe={render:()=>e.jsxs(x,{inline:!0,children:[e.jsxs(ee,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Rename"}),e.jsx(t,{label:"Move"})]}),e.jsx(ee,{label:"Danger Zone",children:e.jsx(t,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},fe={render:()=>e.jsx(ns,{}),parameters:{controls:{disable:!0}}},ye={render:()=>e.jsx(ss,{}),parameters:{controls:{disable:!0}}},je={render:()=>e.jsxs(Kt,{gap:"12",alignItems:"flex-start",children:[e.jsxs(x,{inline:!0,density:"compact",children:[e.jsx(t,{label:"Compact",description:"Small row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(x,{inline:!0,density:"comfortable",children:[e.jsx(t,{label:"Comfortable",description:"Default row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(x,{inline:!0,density:"spacious",children:[e.jsx(t,{label:"Spacious",description:"Large row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},Me={render:()=>e.jsxs(Ke,{children:[e.jsxs(x,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(ee,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(t,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(h,{label:"More actions",iconBefore:"apps",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(h,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),e.jsxs(K,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(An,{position:"fixed",bottom:"16",right:"16"})]}),parameters:{controls:{disable:!0}}},ve={render:()=>e.jsx(rs,{}),parameters:{controls:{disable:!0}}},Se={render:()=>e.jsxs(x,{trigger:e.jsx(U,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(t,{label:"View profile"}),e.jsxs(h,{label:"More actions",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(h,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},os=()=>{const[s,n]=l.useState(null),a=r=>({open:s===r,onOpenChange:i=>n(i?r:null)});return e.jsx(Ke,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(Kt,{alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(x,{triggerInteraction:"click-and-hover",trigger:e.jsx(U,{variant:"selectedBold",children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,...a("sales"),children:[e.jsxs(h,{label:"Quotes",children:[e.jsx(t,{label:"Open quotes"}),e.jsx(t,{label:"Draft quotes"})]}),e.jsxs(h,{label:"Orders",selected:!0,children:[e.jsx(t,{label:"Order list"}),e.jsxs(h,{label:"Used orders",selected:!0,children:[e.jsx(t,{label:"Order as used",selected:!0}),e.jsx(t,{label:"Bookings"}),e.jsx(t,{label:"Order commissions"})]})]}),e.jsxs(h,{label:"Invoices",children:[e.jsx(t,{label:"All invoices"}),e.jsx(t,{label:"Credit notes"})]})]}),e.jsxs(x,{triggerInteraction:"click-and-hover",trigger:e.jsx(U,{children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,...a("production"),children:[e.jsxs(h,{label:"Work Orders",children:[e.jsx(t,{label:"Open work orders"}),e.jsx(t,{label:"Completed"})]}),e.jsxs(h,{label:"Scheduling",children:[e.jsx(t,{label:"Production schedule"}),e.jsx(t,{label:"Resource calendar"})]}),e.jsx(t,{label:"Inventory"})]}),e.jsxs(x,{triggerInteraction:"click-and-hover",trigger:e.jsx(U,{children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,...a("admin"),children:[e.jsxs(h,{label:"Users",children:[e.jsx(t,{label:"All users"}),e.jsx(t,{label:"Roles & permissions"})]}),e.jsxs(h,{label:"Settings",children:[e.jsx(t,{label:"General"}),e.jsx(t,{label:"Integrations"}),e.jsx(t,{label:"Billing"})]}),e.jsx(t,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},Ie={name:"Top nav example",render:()=>e.jsx(os,{}),parameters:{controls:{disable:!0}}},Te={render:()=>e.jsxs(x,{trigger:e.jsx(U,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(t,{label:"Dashboard"}),e.jsxs(h,{label:"Settings",children:[e.jsx(t,{label:"Profile"}),e.jsx(t,{label:"Billing"}),e.jsxs(h,{label:"Team",children:[e.jsx(t,{label:"Members"}),e.jsx(t,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},we={render:()=>e.jsx(as,{}),parameters:{controls:{disable:!0}}},ke={render:()=>e.jsx(ls,{}),parameters:{controls:{disable:!0}}},Ce={name:"Panel as sidebar",render:()=>e.jsx(Ut,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(x,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(h,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(h,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},Pe={name:"Panel as mobile nav",render:()=>e.jsx(Ut,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(x,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(h,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(h,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var at,lt,ot;ge.parameters={...ge.parameters,docs:{...(at=ge.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(lt=ge.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};var it,ct,ut;xe.parameters={...xe.parameters,docs:{...(it=xe.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ut=(ct=xe.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var dt,mt,pt;fe.parameters={...fe.parameters,docs:{...(dt=fe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pt=(mt=fe.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var bt,ht,gt;ye.parameters={...ye.parameters,docs:{...(bt=ye.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(gt=(ht=ye.parameters)==null?void 0:ht.docs)==null?void 0:gt.source}}};var xt,ft,yt;je.parameters={...je.parameters,docs:{...(xt=je.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(yt=(ft=je.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var jt,Mt,vt;Me.parameters={...Me.parameters,docs:{...(jt=Me.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(vt=(Mt=Me.parameters)==null?void 0:Mt.docs)==null?void 0:vt.source}}};var St,It,Tt;ve.parameters={...ve.parameters,docs:{...(St=ve.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Tt=(It=ve.parameters)==null?void 0:It.docs)==null?void 0:Tt.source}}};var wt,kt,Ct;Se.parameters={...Se.parameters,docs:{...(wt=Se.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Ct=(kt=Se.parameters)==null?void 0:kt.docs)==null?void 0:Ct.source}}};var Pt,qt,Nt;Ie.parameters={...Ie.parameters,docs:{...(Pt=Ie.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Nt=(qt=Ie.parameters)==null?void 0:qt.docs)==null?void 0:Nt.source}}};var At,Bt,Ot;Te.parameters={...Te.parameters,docs:{...(At=Te.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ot=(Bt=Te.parameters)==null?void 0:Bt.docs)==null?void 0:Ot.source}}};var Dt,Et,Rt;we.parameters={...we.parameters,docs:{...(Dt=we.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Rt=(Et=we.parameters)==null?void 0:Et.docs)==null?void 0:Rt.source}}};var Vt,Ft,Lt;ke.parameters={...ke.parameters,docs:{...(Vt=ke.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Lt=(Ft=ke.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var _t,Wt,Ht;Ce.parameters={...Ce.parameters,docs:{...(_t=Ce.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Ht=(Wt=Ce.parameters)==null?void 0:Wt.docs)==null?void 0:Ht.source}}};var zt,Gt,$t;Pe.parameters={...Pe.parameters,docs:{...(zt=Pe.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...($t=(Gt=Pe.parameters)==null?void 0:Gt.docs)==null?void 0:$t.source}}};const Es=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{ge as Actions,xe as ActionsWithSections,ke as AutocompleteFiltering,Me as ConditionalBreakpoints,je as Density,ye as MultiSelect,Pe as PanelAsMobileNav,Ce as PanelAsSidebar,fe as SingleSelect,Te as SubMenuDigin,we as SubMenuDiginForms,Se as SubMenuHover,ve as ToggleOptions,Ie as TopNavExample,Es as __namedExportsOrder,Ds as default};
