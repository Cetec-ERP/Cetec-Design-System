import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{m as Sn,c as In,s as Tn,a as wn,g as Cn,b as $e,B as p,d as Pe,H as Wt,V as Ht,F as zt}from"./Box-B-dS-qo0.js";import{B as $}from"./Button-BnIyyCJl.js";import{F as be}from"./FormField-BicW-5-b.js";import{T as oe}from"./TextInput-DsbN3BIw.js";import{j as $t,u as Pn,d as qn,e as Gt,s as Kt,k as Ut,a as Qt,g as Zt,l as Xt,m as Yt,b as Jt,n as en,o as et,p as ze,F as tn,c as nn,q as kn,r as sn,t as rn,v as Nn,w as Bn,x as Dn,y as On,z as An,A as Rn}from"./floating-AgLCAi8_.js";import{l as an,a as En,c as ln,H as te}from"./ListItem-Ca71c-X8.js";import{I as V}from"./Icon-CMDYjoHI.js";import"./IconConfig-DO2Dck3c.js";import{T as Y}from"./Text-BlqN2xhk.js";import{C as Fn}from"./Checkbox-p0A9qo44.js";import{D as Vn}from"./Divider-kYvIQ_cX.js";import{T as Ln}from"./Toggle-104SzZt3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-B5Ee-ZZJ.js";import"./Label-C4IxB5qt.js";import"./Tooltip-NolcpUTM.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const on={density:"compact"},_n=[],Wn=[["wrapper","menu__wrapper"],["backHeader","menu__backHeader"],["levelsViewport","menu__levelsViewport"],["levelsTrack","menu__levelsTrack"],["level","menu__level"],["sizeProbe","menu__sizeProbe"],["noResults","menu__noResults"]],Hn=Wn.map(([s,n])=>[s,wn(n,on,Cn(_n,s))]),zn=Sn((s={})=>Object.fromEntries(Hn.map(([n,a])=>[n,a.recipeFn(s)]))),tt=["density","panel"],$n=s=>({...on,...In(s)}),cn=Object.assign(zn,{__recipe__:!1,__name__:"menu",raw:s=>s,classNameMap:{},variantKeys:tt,variantMap:{density:["compact","comfortable","spacious"],panel:["true"]},splitVariantProps(s){return Tn(s,tt)},getVariantProps:$n}),ne={group:"MenuGroup",item:"MenuItem",subMenu:"SubMenu"},Be="__menuComponentType",Gn=({label:s,description:n})=>[s,n].filter(Boolean).join(" ").trim(),Kn={query:"",filterMode:"none",highlightMatches:!0,getItemText:Gn},un=l.createContext({...Kn}),dn=l.createContext(null),mn=l.createContext(null),Ge=()=>l.useContext(un),Ke=()=>{const s=l.useContext(dn);if(!s)throw new Error("Menu compound components must be used within <Menu />");return s},pn=()=>l.useContext(mn),bn=un.Provider,Un=dn.Provider,gn=mn.Provider,qe=({textValue:s,label:n,description:a,getItemText:r})=>s||r({label:n,description:a}),ke=({textValue:s,query:n,filterMode:a})=>a==="none"||!n.trim()?!0:s.toLowerCase().includes(n.trim().toLowerCase()),Qn=s=>{if(!s||typeof s!="object"||!("type"in s))return null;const n=s.type;return(n==null?void 0:n[Be])??null},Ne=(s,n)=>l.Children.toArray(s).some(a=>{if(!l.isValidElement(a))return!1;const r=a,i=Qn(r);if(i===ne.item){if(r.props.variant==="divider")return!0;const c=qe({textValue:r.props.textValue,label:r.props.label,description:r.props.description,getItemText:n.getItemText});return ke({textValue:c,query:n.query,filterMode:n.filterMode})}if(i===ne.subMenu){const d=qe({textValue:r.props.textValue,label:r.props.label,description:r.props.description,getItemText:n.getItemText});return ke({textValue:d,query:n.query,filterMode:n.filterMode})||Ne(r.props.children,n)}return i===ne.group?Ne(r.props.children,n):!0}),Zn=({label:s,description:n})=>[s,n].filter(Boolean).join(" ").trim(),nt=(s,n)=>l.Children.map(s,(a,r)=>{if(!l.isValidElement(a))return a;const i=a.key??r;return l.cloneElement(a,{key:`${n}-${String(i)}`})}),M=s=>{var Ye;const n=$t(),{trigger:a,children:r,open:i,defaultOpen:d,onOpenChange:c,placement:C="bottom-start",strategy:h="absolute",closeOnSelect:re=!0,inline:L=!1,triggerInteraction:N="click",triggerOpenDelay:ae=75,triggerCloseDelay:G=100,subMenuInteraction:A="hover",density:_="compact",panel:K,query:U="",filterMode:W="none",renderNoResults:H,highlightMatches:T=!!U,getItemText:y=Zn,...g}=s,[j,P]=$e(g),Q=P.style,S=cn({density:_,panel:K}),R=an({}),b=!!a&&!L,[Z,J]=l.useState(d??!1),q=i!==void 0,I=q?i:Z,B=b?I:!0,z=(u,O,w)=>{N==="hover"&&!u&&(w==="hover"||w==="safe-polygon")||(q||J(u),c==null||c(u))},[E,x]=l.useState([]),[X,De]=l.useState({width:null,height:null}),f=E.length;l.useEffect(()=>{I||x([])},[I]);const k=Pn({nodeId:n,open:b?I:!0,onOpenChange:z,placement:C,strategy:h,middleware:qn({extras:[kn()]})}),ie=l.useRef([]),ce=l.useRef([]),[le,ue]=l.useState(null),Oe=Gt(k.context,{enabled:b&&N==="hover",delay:{open:ae,close:G},handleClose:Kt({blockPointerEvents:!0})}),Ae=Ut(k.context,{enabled:b&&N==="click"}),Re=Qt(k.context,{enabled:b}),Ee=Zt(k.context,{role:"menu"}),Fe=Xt(k.context,{listRef:ie,activeIndex:le,onNavigate:ue,loop:!0}),Ve=Yt(k.context,{listRef:ce,activeIndex:le,onMatch:ue,resetMs:600}),{getReferenceProps:Le,getFloatingProps:_e,getItemProps:Ue}=Jt([Oe,Ae,Re,Ee,Fe,Ve]),de=l.useMemo(()=>({query:U,filterMode:W,highlightMatches:T,getItemText:y}),[W,y,T,U]),m=((Ye=E[E.length-1])==null?void 0:Ye.children)??r,D=Ne(m,de),o={density:_,panel:K,closeOnSelect:re,subMenuInteraction:A,inline:L,onCloseMenu:()=>{z(!1),x([])},onPushDiginLevel:(u,O)=>{x(w=>{const F=w[w.length-1];return F&&F.title===u&&F.children===O?w:[...w,{key:`${u}-${w.length}`,title:u,children:O}]})},onPopDiginLevel:()=>{x(u=>u.slice(0,-1))},diginDepth:f},hn={activeIndex:le,getItemProps:u=>Ue(u)},me=[{key:"root",title:"Menu",children:r},...E],ee=me[Math.min(f,me.length-1)],We=me.length,xn=We*100,Qe=100/We,fn=f*100/We,Mn=!!K&&A==="digin",pe=A==="digin"&&D,Ze=l.useRef(null);l.useLayoutEffect(()=>{if(!B||!pe){De({width:null,height:null});return}const u=Ze.current;if(!u)return;const O=()=>{const F=Math.ceil(u.scrollWidth),Je=Math.ceil(u.scrollHeight);De(He=>He.width===F&&He.height===Je?He:{width:F,height:Je})};O();const w=new ResizeObserver(O);return w.observe(u),()=>{w.disconnect()}},[ee.children,ee.key,ee.title,_,f,D,B,pe]);const yn=pe&&X.width&&X.height?{width:`${X.width}px`,height:`${X.height}px`}:{},jn={...b&&!L?k.floatingStyles:{},...yn,...Q??{}},vn=Mn?{inset:"0",width:"100%",height:"100%"}:{},Xe=e.jsx(Un,{value:o,children:e.jsx(bn,{value:de,children:e.jsxs(p,{ref:k.refs.setFloating,className:Pe(S.wrapper,j),..._e(),...P,style:jn,children:[!D&&e.jsx(p,{className:S.noResults,children:H??e.jsx(Y,{textStyle:"body.sm",children:"No results found"})}),D&&e.jsxs(p,{className:S.levelsViewport,children:[pe&&e.jsx(p,{ref:Ze,className:S.sizeProbe,"aria-hidden":!0,style:vn,children:e.jsxs(p,{className:S.level,children:[f>0&&e.jsxs(p,{as:"button",type:"button",className:S.backHeader,children:[e.jsx(V,{name:"caret-left",fill:"icon"}),ee.title]}),e.jsx(p,{className:R,children:nt(ee.children,`${ee.key}-probe`)})]})}),e.jsx(p,{className:S.levelsTrack,style:{width:`${xn}%`,transform:`translateX(-${fn}%)`},children:me.map((u,O)=>{const w=O===f,F=nt(u.children,u.key);return w?e.jsx(gn,{value:hn,children:e.jsx(en,{elementsRef:ie,labelsRef:ce,children:e.jsxs(p,{className:S.level,style:{flex:`0 0 ${Qe}%`},children:[O>0&&e.jsxs(p,{as:"button",type:"button",className:S.backHeader,onClick:o.onPopDiginLevel,children:[e.jsx(V,{name:"caret-left"}),u.title]}),e.jsx(p,{className:R,children:F})]})})},u.key):e.jsxs(p,{className:S.level,style:{flex:`0 0 ${Qe}%`},"aria-hidden":!0,children:[O>0&&e.jsxs(p,{as:"button",type:"button",className:S.backHeader,onClick:o.onPopDiginLevel,children:[e.jsx(V,{name:"caret-left"}),u.title]}),e.jsx(p,{className:R,children:F})]},u.key)})})]})]})})});return L||!a?e.jsx(et,{children:e.jsx(ze,{id:n,children:Xe})}):e.jsx(et,{children:e.jsxs(ze,{id:n,children:[l.cloneElement(a,Le({ref:k.refs.setReference})),I&&e.jsx(tn,{children:e.jsx(nn,{context:k.context,modal:!1,children:Xe})})]})})};M.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{trigger:{required:!1,tsType:{name:"ReactElement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},strategy:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}]},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},triggerInteraction:{required:!1,tsType:{name:"union",raw:"'click' | 'hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"}]},description:""},triggerOpenDelay:{required:!1,tsType:{name:"number"},description:""},triggerCloseDelay:{required:!1,tsType:{name:"number"},description:""},subMenuInteraction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:""},query:{required:!1,tsType:{name:"string"},description:""},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},filterMode:{required:!1,tsType:{name:"union",raw:"'none' | 'contains'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'contains'"}]},description:""},renderNoResults:{required:!1,tsType:{name:"ReactNode"},description:""},highlightMatches:{required:!1,tsType:{name:"boolean"},description:""},getItemText:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: { label?: string; description?: string }) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ label?: string; description?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"string"}}},description:""},panel:{required:!1,tsType:{name:"MenuVariantProps['panel']",raw:"MenuVariantProps['panel']"},description:""},as:{required:!1,tsType:{name:"T"},description:""}}};const se=s=>{const{label:n,children:a,divider:r,...i}=s,d=Ke(),c=Ge();return Ne(a,c)?e.jsx(En,{density:d.density,label:n,divider:r,...i,children:a}):null};se[Be]=ne.group;se.__docgenInfo={description:"",methods:[],displayName:"MenuGroup",props:{as:{required:!1,tsType:{name:"T"},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},divider:{required:!1,tsType:{name:"boolean"},description:""}}};const t=s=>{const{label:n,description:a,variant:r="default",disabled:i,selected:d,iconBefore:c,iconAfter:C,href:h,target:re,rel:L,closeOnSelect:N,density:ae,textValue:G,onClick:A,..._}=s,[K,U]=$e(_),W=Ke(),H=sn(),T=Ge(),y=pn(),g=r==="divider"?"default":r,j=ae??W.density,P=ln({density:j,variant:g,iconBefore:!!c,iconAfter:!!C,selected:!!d}),Q=qe({textValue:G,label:n,description:a,getItemText:T.getItemText}),S=ke({textValue:Q,query:T.query,filterMode:T.filterMode}),R=rn({label:Q});if(r==="divider")return e.jsx(Vn,{});if(!S)return null;const b=N??W.closeOnSelect,Z=G??n??"menu-item",J=x=>{A==null||A(x),x.defaultPrevented||H==null||H.events.emit("click"),!x.defaultPrevented&&b&&W.onCloseMenu()},q=x=>{x.preventDefault(),x.stopPropagation()},I=y?y.getItemProps({onClick:J}):{onClick:J},B=r==="checkbox"||r==="toggle"?"menuitemcheckbox":"menuitem",z=h?{as:"a",href:h,target:re,rel:L,...i&&{onClick:x=>{x.preventDefault()}}}:{as:"button",type:"button",disabled:i},E=x=>{R.ref(x)};return e.jsxs(p,{...z,className:Pe(P.wrapper,K),ref:E,role:B,"aria-checked":r==="checkbox"||r==="toggle"?!!d:void 0,"aria-disabled":i,"data-selected":d,"data-disabled":i,"data-active":y?y.activeIndex===R.index:!1,tabIndex:y?y.activeIndex===R.index?0:-1:0,...I,...U,children:[r==="checkbox"&&e.jsx(Fn,{name:Z,checked:!!d,onChange:q,tabIndex:-1}),r==="toggle"&&e.jsx(Ln,{name:Z,checked:!!d,onChange:q,mr:"4",tabIndex:-1}),c&&e.jsx(V,{className:P.icon,name:c}),e.jsxs(p,{className:P.itemMain,children:[n&&e.jsx(Y,{className:P.itemLabel,children:e.jsx(te,{value:n,query:T.query,enabled:T.highlightMatches})}),a&&e.jsx(Y,{className:P.itemDescription,children:e.jsx(te,{value:a,query:T.query,enabled:T.highlightMatches})})]}),C&&e.jsx(V,{className:P.icon,name:C,ml:"auto"})]})};t[Be]=ne.item;t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'checkbox' | 'toggle' | 'divider'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'toggle'"},{name:"literal",value:"'divider'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},iconAfter:{required:!1,tsType:{name:"IconNamesList"},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:""},textValue:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const v=s=>{const n=$t(),a=Nn(),r=sn(),{label:i,description:d,disabled:c,selected:C,iconBefore:h,interaction:re,placement:L,children:N,textValue:ae,density:G,...A}=s,[_,K]=$e(A),{style:U,...W}=K,H=U,T=W,y=Ke(),g=Ge(),j=pn(),P=re??y.subMenuInteraction,Q=typeof G=="string"?G:y.density,S=cn({density:Q}),R=an({}),b=ln({density:Q,iconBefore:!!h,iconAfter:!0,selected:!!C}),Z=qe({textValue:ae,label:i,description:d,getItemText:g.getItemText}),J=ke({textValue:Z,query:g.query,filterMode:g.filterMode}),q=rn({label:Z}),[I,B]=l.useState(!1),[z,E]=l.useState(null),x=l.useRef([]),X=l.useRef([]),f=Bn({nodeId:n,open:I,onOpenChange:(m,D,o)=>{!m&&o==="focus-out"&&P==="hover"&&a!=null||B(m)},placement:L??"right-start",whileElementsMounted:Rn,middleware:[Dn({mainAxis:0,alignmentAxis:-4}),On(),An({padding:8})]}),k=Gt(f.context,{enabled:!c&&a!=null,delay:{open:75},handleClose:Kt({blockPointerEvents:!0})}),ie=Ut(f.context,{event:"mousedown",toggle:!1,ignoreMouse:!0}),ce=Qt(f.context,{bubbles:!0}),le=Zt(f.context,{role:"menu"}),ue=Xt(f.context,{listRef:x,activeIndex:z,onNavigate:E,nested:!0}),Oe=Yt(f.context,{listRef:X,activeIndex:z,onMatch:I?E:void 0,resetMs:600}),{getReferenceProps:Ae,getFloatingProps:Re,getItemProps:Ee}=Jt([k,ie,ce,le,ue,Oe]);l.useEffect(()=>{if(!r)return;const m=()=>{B(!1)},D=o=>{o.nodeId!==n&&o.parentId===a&&B(!1)};return r.events.on("click",m),r.events.on("menuopen",D),()=>{r.events.off("click",m),r.events.off("menuopen",D)}},[r,n,a]),l.useEffect(()=>{I&&r&&r.events.emit("menuopen",{parentId:a,nodeId:n})},[r,I,n,a]);const Fe=l.useMemo(()=>({query:g.query,filterMode:g.filterMode,highlightMatches:g.highlightMatches,getItemText:g.getItemText}),[g]),Ve={activeIndex:z,getItemProps:m=>Ee(m)},Le={...f.floatingStyles,...H||{}},_e=j?j.getItemProps({onKeyDown:m=>{m.key==="ArrowRight"&&!c&&(m.preventDefault(),B(!0))}}):{onKeyDown:m=>{m.key==="ArrowRight"&&!c&&(m.preventDefault(),B(!0))}},de={...Ae(_e)};if(!J)return null;if(P==="digin"){const D={...j?j.getItemProps({onClick:o=>{o==null||o.preventDefault(),o==null||o.stopPropagation(),c||y.onPushDiginLevel(i,N)},onKeyDown:o=>{(o.key==="ArrowRight"||o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),c||y.onPushDiginLevel(i,N))}}):{onClick:o=>{o==null||o.preventDefault(),o==null||o.stopPropagation(),c||y.onPushDiginLevel(i,N)},onKeyDown:o=>{o&&(o.key==="ArrowRight"||o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),c||y.onPushDiginLevel(i,N))}}};return e.jsxs("button",{...T,role:"menuitem","aria-disabled":c,disabled:c,className:Pe(b.wrapper,_),ref:o=>{q.ref(o)},style:H,"data-selected":C,"data-disabled":c,"data-active":j?j.activeIndex===q.index:!1,tabIndex:j?j.activeIndex===q.index?0:-1:0,...D,type:"button",children:[h&&e.jsx(V,{className:b.icon,name:h}),e.jsxs(p,{className:b.itemMain,children:[e.jsx(Y,{className:b.itemLabel,children:e.jsx(te,{value:i,query:g.query,enabled:g.highlightMatches})}),d&&e.jsx(Y,{className:b.itemDescription,children:e.jsx(te,{value:d,query:g.query,enabled:g.highlightMatches})})]}),e.jsx(V,{className:b.icon,name:"caret-right",ml:"auto"})]})}return e.jsxs(ze,{id:n,children:[e.jsxs("button",{...T,role:"menuitem","aria-haspopup":"menu","aria-expanded":I,"aria-disabled":c,disabled:c,className:b.wrapper,ref:m=>{q.ref(m),f.refs.setReference(m)},"data-selected":C,"data-disabled":c,"data-active":j?j.activeIndex===q.index:!1,tabIndex:j?j.activeIndex===q.index?0:-1:0,...de,type:"button",children:[h&&e.jsx(V,{className:b.icon,name:h}),e.jsxs(p,{className:b.itemMain,children:[e.jsx(Y,{className:b.itemLabel,children:e.jsx(te,{value:i,query:g.query,enabled:g.highlightMatches})}),d&&e.jsx(Y,{className:b.itemDescription,children:e.jsx(te,{value:d,query:g.query,enabled:g.highlightMatches})})]}),e.jsx(V,{className:b.icon,name:"caret-right",ml:"auto"})]}),I&&e.jsx(tn,{children:e.jsx(nn,{context:f.context,modal:!1,initialFocus:-1,returnFocus:!1,children:e.jsx(bn,{value:Fe,children:e.jsx(gn,{value:Ve,children:e.jsx(p,{ref:f.refs.setFloating,className:Pe(S.wrapper,_),...Re({onKeyDown:m=>{m.key==="ArrowLeft"&&(m.preventDefault(),B(!1))}}),style:Le,children:e.jsx(en,{elementsRef:x,labelsRef:X,children:e.jsx(p,{className:R,children:N})})})})})})})]})};v[Be]=ne.subMenu;v.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"IconNamesList"},description:""},interaction:{required:!1,tsType:{name:"union",raw:"'hover' | 'digin'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'digin'"}]},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""}}};const Ss={title:"Components/Menu",component:M,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},Xn=()=>{const[s,n]=l.useState("item-2");return e.jsxs(M,{inline:!0,closeOnSelect:!1,children:[e.jsx(t,{label:"Option One",selected:s==="item-1",onClick:()=>n("item-1")}),e.jsx(t,{label:"Option Two",selected:s==="item-2",onClick:()=>n("item-2")}),e.jsx(t,{label:"Option Three",selected:s==="item-3",onClick:()=>n("item-3")})]})},Yn=()=>{const[s,n]=l.useState(["beta"]),a=r=>{n(i=>i.includes(r)?i.filter(d=>d!==r):[...i,r])};return e.jsx(M,{inline:!0,closeOnSelect:!1,children:e.jsxs(se,{label:"Wave type",children:[e.jsx(t,{variant:"checkbox",label:"Alpha",selected:s.includes("alpha"),onClick:()=>a("alpha")}),e.jsx(t,{variant:"checkbox",label:"Beta",selected:s.includes("beta"),onClick:()=>a("beta")}),e.jsx(t,{variant:"checkbox",label:"Gamma",selected:s.includes("gamma"),onClick:()=>a("gamma")})]})})},Jn=()=>{const[s,n]=l.useState(!1),[a,r]=l.useState(!0);return e.jsxs(M,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(se,{label:"Options",divider:!0,children:[e.jsx(t,{variant:"toggle",label:"Compact mode",selected:s,onClick:()=>n(i=>!i)}),e.jsx(t,{variant:"toggle",label:"Email alerts",selected:a,onClick:()=>r(i=>!i)})]}),e.jsx(t,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},es=()=>{const[s,n]=l.useState(""),[a,r]=l.useState(""),[i,d]=l.useState(""),[c,C]=l.useState("");return e.jsxs(M,{trigger:e.jsx($,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(t,{label:"Dashboard"}),e.jsx(v,{label:"Edit profile",children:e.jsxs(p,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(be,{label:"Profile name",labelFor:"profile-name",children:e.jsx(oe,{id:"profile-name",name:"profileName",value:s,onChange:h=>n(h.target.value)})}),e.jsx(be,{label:"Owner",labelFor:"profile-owner",children:e.jsx(oe,{id:"profile-owner",name:"profileOwner",value:a,onChange:h=>r(h.target.value)})}),e.jsx($,{variant:"primary",children:"Submit"})]})}),e.jsx(v,{label:"Create alert",children:e.jsxs(p,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(be,{label:"Topic",labelFor:"alert-topic",children:e.jsx(oe,{id:"alert-topic",name:"alertTopic",value:i,onChange:h=>d(h.target.value)})}),e.jsx(be,{label:"Channel",labelFor:"alert-channel",children:e.jsx(oe,{id:"alert-channel",name:"alertChannel",value:c,onChange:h=>C(h.target.value)})}),e.jsx($,{variant:"primary",children:"Submit"})]})})]})},ts=()=>{const[s,n]=l.useState("");return e.jsxs(Ht,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(oe,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:s,onChange:a=>n(a.target.value)}),e.jsxs(M,{inline:!0,query:s,filterMode:"contains",highlightMatches:!0,children:[e.jsx(t,{label:"Account settings",description:"Manage profile and security"}),e.jsx(t,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(t,{label:"Integrations",description:"Connect external tools"}),e.jsx(t,{label:"Audit history",description:"Track critical events"})]})]})},ge={render:()=>e.jsxs(M,{inline:!0,children:[e.jsx(t,{label:"Edit",iconBefore:"pencil"}),e.jsx(t,{label:"Duplicate",iconBefore:"copy"}),e.jsx(t,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},he={render:()=>e.jsxs(M,{inline:!0,children:[e.jsxs(se,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Rename"}),e.jsx(t,{label:"Move"})]}),e.jsx(se,{label:"Danger Zone",children:e.jsx(t,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},xe={render:()=>e.jsx(Xn,{}),parameters:{controls:{disable:!0}}},fe={render:()=>e.jsx(Yn,{}),parameters:{controls:{disable:!0}}},Me={render:()=>e.jsxs(Wt,{gap:"12",alignItems:"flex-start",children:[e.jsxs(M,{inline:!0,density:"compact",children:[e.jsx(t,{label:"Compact",description:"Small row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(M,{inline:!0,density:"comfortable",children:[e.jsx(t,{label:"Comfortable",description:"Default row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(M,{inline:!0,density:"spacious",children:[e.jsx(t,{label:"Spacious",description:"Large row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},ye={render:()=>e.jsx(Jn,{}),parameters:{controls:{disable:!0}}},je={render:()=>e.jsxs(M,{trigger:e.jsx($,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(t,{label:"View profile"}),e.jsxs(v,{label:"More actions",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(v,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},ve={name:"Top nav hover trigger",render:()=>e.jsx(Ht,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(Wt,{alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(M,{triggerInteraction:"hover",trigger:e.jsx($,{variant:"selectedBold",children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,children:[e.jsxs(v,{label:"Quotes",children:[e.jsx(t,{label:"Open quotes"}),e.jsx(t,{label:"Draft quotes"})]}),e.jsxs(v,{label:"Orders",selected:!0,children:[e.jsx(t,{label:"Order list"}),e.jsxs(v,{label:"Used orders",selected:!0,children:[e.jsx(t,{label:"Order as used",selected:!0}),e.jsx(t,{label:"Bookings"}),e.jsx(t,{label:"Order commissions"})]})]}),e.jsxs(v,{label:"Invoices",children:[e.jsx(t,{label:"All invoices"}),e.jsx(t,{label:"Credit notes"})]})]}),e.jsx($,{children:"Production"}),e.jsx($,{children:"Admin"})]})}),parameters:{controls:{disable:!0}}},Se={render:()=>e.jsxs(M,{trigger:e.jsx($,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(t,{label:"Dashboard"}),e.jsxs(v,{label:"Settings",children:[e.jsx(t,{label:"Profile"}),e.jsx(t,{label:"Billing"}),e.jsxs(v,{label:"Team",children:[e.jsx(t,{label:"Members"}),e.jsx(t,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},Ie={render:()=>e.jsx(es,{}),parameters:{controls:{disable:!0}}},Te={render:()=>e.jsx(ts,{}),parameters:{controls:{disable:!0}}},we={name:"Panel as sidebar",render:()=>e.jsx(zt,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(M,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(v,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(v,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},Ce={name:"Panel as mobile nav",render:()=>e.jsx(zt,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(M,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(v,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(v,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var st,rt,at;ge.parameters={...ge.parameters,docs:{...(st=ge.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(at=(rt=ge.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var lt,ot,it;he.parameters={...he.parameters,docs:{...(lt=he.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(it=(ot=he.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var ct,ut,dt;xe.parameters={...xe.parameters,docs:{...(ct=xe.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(dt=(ut=xe.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var mt,pt,bt;fe.parameters={...fe.parameters,docs:{...(mt=fe.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(bt=(pt=fe.parameters)==null?void 0:pt.docs)==null?void 0:bt.source}}};var gt,ht,xt;Me.parameters={...Me.parameters,docs:{...(gt=Me.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(xt=(ht=Me.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var ft,Mt,yt;ye.parameters={...ye.parameters,docs:{...(ft=ye.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(yt=(Mt=ye.parameters)==null?void 0:Mt.docs)==null?void 0:yt.source}}};var jt,vt,St;je.parameters={...je.parameters,docs:{...(jt=je.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(St=(vt=je.parameters)==null?void 0:vt.docs)==null?void 0:St.source}}};var It,Tt,wt;ve.parameters={...ve.parameters,docs:{...(It=ve.parameters)==null?void 0:It.docs,source:{originalSource:`{
  name: 'Top nav hover trigger',
  render: () => <VStack alignItems="stretch" minW="3xl" h="2xl" bg="bg.neutral" p="24" gap="16">
      <HStack alignItems="center" gap="12" borderWidth="1" borderColor="border" bg="surface" px="24" py="16">
        <Menu triggerInteraction="hover" trigger={<Button variant="selectedBold">Sales</Button>} subMenuInteraction="hover" closeOnSelect={false}>
          <SubMenu label="Quotes">
            <MenuItem label="Open quotes" />
            <MenuItem label="Draft quotes" />
          </SubMenu>

          <SubMenu label="Orders" selected>
            <MenuItem label="Order list" />
            <SubMenu label="Used orders" selected>
              <MenuItem label="Order as used" selected />
              <MenuItem label="Bookings" />
              <MenuItem label="Order commissions" />
            </SubMenu>
          </SubMenu>

          <SubMenu label="Invoices">
            <MenuItem label="All invoices" />
            <MenuItem label="Credit notes" />
          </SubMenu>
        </Menu>

        <Button>Production</Button>
        <Button>Admin</Button>
      </HStack>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(wt=(Tt=ve.parameters)==null?void 0:Tt.docs)==null?void 0:wt.source}}};var Ct,Pt,qt;Se.parameters={...Se.parameters,docs:{...(Ct=Se.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(qt=(Pt=Se.parameters)==null?void 0:Pt.docs)==null?void 0:qt.source}}};var kt,Nt,Bt;Ie.parameters={...Ie.parameters,docs:{...(kt=Ie.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Bt=(Nt=Ie.parameters)==null?void 0:Nt.docs)==null?void 0:Bt.source}}};var Dt,Ot,At;Te.parameters={...Te.parameters,docs:{...(Dt=Te.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(At=(Ot=Te.parameters)==null?void 0:Ot.docs)==null?void 0:At.source}}};var Rt,Et,Ft;we.parameters={...we.parameters,docs:{...(Rt=we.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ft=(Et=we.parameters)==null?void 0:Et.docs)==null?void 0:Ft.source}}};var Vt,Lt,_t;Ce.parameters={...Ce.parameters,docs:{...(Vt=Ce.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(_t=(Lt=Ce.parameters)==null?void 0:Lt.docs)==null?void 0:_t.source}}};const Is=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ToggleOptions","SubMenuHover","TopNavHoverTrigger","SubMenuDigin","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{ge as Actions,he as ActionsWithSections,Te as AutocompleteFiltering,Me as Density,fe as MultiSelect,Ce as PanelAsMobileNav,we as PanelAsSidebar,xe as SingleSelect,Se as SubMenuDigin,Ie as SubMenuDiginForms,je as SubMenuHover,ye as ToggleOptions,ve as TopNavHoverTrigger,Is as __namedExportsOrder,Ss as default};
