import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BKyFwriW.js";import{w as B,u as w,e as i}from"./index-DPYJpPba.js";import{m as wo,c as To,s as ko,a as Bo,g as Ro,d as Va,B as c,b as Ao,e as Io}from"./dsComponent-BHDs0HDk.js";import{B as Oo}from"./Button-BfCEQkD2.js";import{F as La}from"./FormField-BoVf7KNn.js";import{u as Co,c as So,s as Eo,b as Do,d as jo,e as Vo,g as Lo,F as Mo,D as Fo,h as qo}from"./Tooltip-DYuA0tjJ.js";import{d as Ho}from"./dsPart-nnoJM9m6.js";import{S as Po}from"./Spinner-B-M3ZmXc.js";import{m as _o}from"./menu-CodcmOD4.js";import{I as No}from"./Icon-BTgxAqZ-.js";import{L as $o,a as zo}from"./ListItem-y1iEx-Ml.js";import{C as Ko}from"./Chip-7kIei0ie.js";import{u as Uo}from"./FieldContext-D6URyQos.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconConfig-C2HauHyg.js";import"./Label-BK7bFm5Q.js";import"./Text-C8GrCxX4.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-Cfs9c8bA.js";import"./Checkbox-BjVg7QEK.js";import"./Divider-BaeFZ7j-.js";import"./Toggle-CI2PMwjp.js";const Ma={size:"md"},Wo=[],Qo=[["root","autocomplete__root"],["control","autocomplete__control"],["valueContainer","autocomplete__valueContainer"],["input","autocomplete__input"],["token","autocomplete__token"],["overflowIndicator","autocomplete__overflowIndicator"],["loadingIndicator","autocomplete__loadingIndicator"],["listbox","autocomplete__listbox"],["status","autocomplete__status"],["liveRegion","autocomplete__liveRegion"]],Go=Qo.map(([e,t])=>[e,Bo(t,Ma,Ro(Wo,e))]),Xo=wo((e={})=>Object.fromEntries(Go.map(([t,n])=>[t,n.recipeFn(e)]))),ft=["size"],Jo=e=>({...Ma,...To(e)}),Yo=Object.assign(Xo,{__recipe__:!1,__name__:"autocomplete",raw:e=>e,classNameMap:{},variantKeys:ft,variantMap:{size:["sm","md","lg","xl"]},splitVariantProps(e){return ko(e,ft)},getVariantProps:Jo}),Fa=e=>{const{activeIndex:t,baseId:n,density:l,floatingProps:u,floatingRef:p,floatingStyles:b,getItemProps:j,items:R,listboxClassName:A,listboxId:T,loading:_,loadingMore:W,loadingText:h,multiple:M,noOptionsText:C,onScroll:N,onSelect:Q,query:$,selectedValues:k,setItemRef:G,statusClassName:z,value:E}=e,D=_o({density:l}),I=_&&R.length===0,S=!_&&R.length===0,Z=new Set(k);return o.jsxs($o,{ref:p,id:T,role:"listbox","aria-label":"Suggestions","aria-multiselectable":M||void 0,"aria-busy":_||W||void 0,density:l,query:$,highlightMatches:!0,className:Va(D.wrapper,A),style:b,onScroll:N,...u,children:[R.map((v,F)=>{const K=M?Z.has(v.value):E===v.value;return o.jsx(zo,{id:`${n}-option-${F}`,ref:V=>G(F,V),disabled:v.disabled,selected:K,density:l,before:M?o.jsx(No,{name:K?"checkbox-checked":"checkbox",fill:K?"icon":"icon.subtlest","aria-hidden":!0}):void 0,label:v.label,description:v.description,iconBefore:v.iconLeft,iconAfter:v.iconRight,highlightMatches:!v.created,tabIndex:-1,bg:t===F?"bg.neutral.hovered":void 0,"data-active":t===F||void 0,...j({onMouseDown:V=>V.preventDefault(),onClick:()=>{v.disabled||Q(v)}})},`${v.created?"create":"option"}-${v.value}`)}),I&&o.jsx(c,{className:z,role:"status",children:h}),S&&o.jsx(c,{className:z,role:"status",children:C}),W&&o.jsx(c,{className:z,role:"status",children:h})]})};Fa.__docgenInfo={description:"",methods:[],displayName:"AutocompleteListbox",props:{activeIndex:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},baseId:{required:!0,tsType:{name:"string"},description:""},density:{required:!0,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},floatingProps:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},floatingRef:{required:!0,tsType:{name:"RefCallback",elements:[{name:"HTMLDivElement"}],raw:"RefCallback<HTMLDivElement>"},description:""},floatingStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},getItemProps:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: HTMLProps<HTMLElement>) => Record<string, unknown>",signature:{arguments:[{type:{name:"HTMLProps",elements:[{name:"HTMLElement"}],raw:"HTMLProps<HTMLElement>"},name:"props"}],return:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}}},description:""},items:{required:!0,tsType:{name:"unknown"},description:""},listboxClassName:{required:!0,tsType:{name:"string"},description:""},listboxId:{required:!0,tsType:{name:"string"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},loadingMore:{required:!0,tsType:{name:"boolean"},description:""},loadingText:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},noOptionsText:{required:!0,tsType:{name:"ReactNode"},description:""},onScroll:{required:!0,tsType:{name:"UIEventHandler",elements:[{name:"HTMLDivElement"}],raw:"UIEventHandler<HTMLDivElement>"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOptionData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
  created?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"iconLeft",value:{name:"IconNamesList",required:!1}},{key:"iconRight",value:{name:"IconNamesList",required:!1}},{key:"created",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},query:{required:!0,tsType:{name:"string"},description:""},selectedValues:{required:!0,tsType:{name:"unknown"},description:""},setItemRef:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, node: HTMLElement | null) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"node"}],return:{name:"void"}}},description:""},statusClassName:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""}}};const qa=e=>{const{className:t,disabled:n,dismissButtonRef:l,label:u,onDismiss:p,onKeyDown:b,size:j}=e;return o.jsx(Ko,{className:t,size:j,dismissable:!0,disabled:n,dismissButtonRef:l,dismissButtonTabIndex:-1,onDismiss:p,onDismissKeyDown:b,children:u})};qa.__docgenInfo={description:"",methods:[],displayName:"AutocompleteToken",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dismissButtonRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""}}};const Zo=e=>e?[]:null,en=({value:e,defaultValue:t,onValueChange:n,inputValue:l,defaultInputValue:u="",onInputValueChange:p,open:b,defaultOpen:j=!1,onOpenChange:R,multiple:A=!1,selectedOptionLabel:T,disabled:_=!1,readOnly:W=!1})=>{const[h,M]=s.useState(()=>t!==void 0?t:Zo(A)),[C,N]=s.useState(u),[Q,$]=s.useState(j),k=e!==void 0?e:h,G=l!==void 0?l:C,z=b!==void 0?b:Q,E=_||W,D=s.useCallback((d,y)=>{e===void 0&&M(d),n==null||n(d,y)},[e,n]),I=s.useCallback((d,y)=>{l===void 0&&N(d),p==null||p(d,y)},[l,p]),S=s.useCallback((d,y)=>{b===void 0&&$(d),R==null||R(d,y)},[b,R]),Z=s.useCallback(d=>{E||(I(d,"input"),!A&&typeof k=="string"&&d!==T&&D(null,"clear"),S(!0,"input"))},[I,S,D,E,A,T,k]),v=s.useCallback((d,y="select-option")=>{if(!(E||d.disabled)){if(A){const X=Array.isArray(k)?k:[];if(X.includes(d.value))return;D([...X,d.value],y),I("","selection"),S(!0,"selection");return}k!==d.value&&(D(d.value,y),I(d.label,"selection"),S(!1,"selection"))}},[I,S,D,E,A,k]),F=s.useCallback(d=>{const y=d.trim();y&&v({value:y,label:y},"create-option")},[v]),K=s.useCallback(d=>{if(!E){if(A){const y=Array.isArray(k)?k:[];if(!y.includes(d))return;D(y.filter(X=>X!==d),"remove-option");return}k===d&&(D(null,"remove-option"),I("","clear"))}},[I,D,E,A,k]),V=s.useCallback(d=>{E||S(!0,d)},[S,E]),ee=s.useCallback(d=>{S(!1,d)},[S]);return{value:k,inputValue:G,open:z,setInputValue:Z,selectOption:v,createOption:F,removeOption:K,openPopup:V,closePopup:ee}},tn="__autocompleteComponentType",ue=e=>e.trim().toLowerCase(),an=(e,t)=>{const n=ue(t);return n?ue(e.value)===n||ue(e.label)===n:!1},on=(e,t)=>{const n=ue(t);return n?ue(e.label).includes(n)||e.description!==void 0&&ue(e.description).includes(n):!0},nn=e=>s.isValidElement(e)&&typeof e.type=="function"&&e.type[tn]==="Option",sn=e=>s.Children.toArray(e).reduce((t,n)=>(nn(n)&&t.push({value:n.props.value,label:n.props.label,disabled:n.props.disabled,description:n.props.description,iconLeft:n.props.iconLeft,iconRight:n.props.iconRight,created:!1}),t),[]),xt=(...e)=>{const t=new Map;return e.forEach(n=>{n.forEach(l=>{t.has(l.value)||t.set(l.value,l)})}),Array.from(t.values())},rn=(e,t)=>t?Array.isArray(e)?e:e?[e]:[]:typeof e=="string"?[e]:[],wt=e=>e.findIndex(t=>!t.disabled),ln=32,cn=e=>`Create “${e}”`,ct={sm:"sm",md:"sm",lg:"md",xl:"md"},un=e=>{if(!e||typeof e=="string")return ct[e??"md"];const n=(Array.isArray(e)?e:Object.values(e)).find(l=>typeof l=="string"&&l in ct);return n?ct[n]:"sm"},dn=e=>e==="escape-key"?"escape":"outside-press",pn=e=>{var pt,mt,bt;const t=Uo(),{value:n,defaultValue:l,onValueChange:u,onChange:p,inputValue:b,defaultInputValue:j,onInputValueChange:R,onInputChange:A,open:T,defaultOpen:_,onOpenChange:W,multiple:h=!1,allowCustomValue:M=!1,getCreateOptionLabel:C=cn,limitTags:N,placeholder:Q="Select...",placement:$="bottom-start",offset:k=4,children:G,id:z,name:E,disabled:D,readOnly:I=!1,error:S,valid:Z=!1,invalid:v,size:F,density:K="compact",loading:V=!1,loadingMore:ee=!1,hasMore:d=!1,onLoadMore:y,loadingText:X="Loading options…",noOptionsText:Xe="No options","aria-label":he,"aria-labelledby":re,"aria-describedby":ve,"aria-required":fe,...Je}=e,U=D??(t==null?void 0:t.disabled)??!1,xe=S??(t==null?void 0:t.error)??!1,we=v??(t==null?void 0:t.invalid)??!1,Te=F??(t==null?void 0:t.size)??"md",[Ye,Ze]=Ao(Je),et=s.useId(),te=z??`autocomplete-${et}`,tt=te,at=`${te}-listbox`,ae=s.useRef(null),de=s.useRef(null),ke=s.useRef(null),Be=s.useRef([]),Re=s.useRef([]),[ot,O]=s.useState(null),[pe,oe]=s.useState(!1),[le,Pa]=s.useState([]),[_a,nt]=s.useState(""),ut=s.useMemo(()=>sn(G),[G]),ne=s.useMemo(()=>xt(ut,le),[ut,le]),me=s.useMemo(()=>new Map(ne.map(a=>[a.value,a])),[ne]),st=n??l,Na=typeof st=="string"?((pt=me.get(st))==null?void 0:pt.label)??st:"",$a=s.useCallback((a,r)=>{if(h){const Y=a;u==null||u(Y,r),p==null||p(Y,r);return}const x=a;u==null||u(x,r),p==null||p(x,r)},[h,p,u]),za=s.useCallback((a,r)=>{R==null||R(a,r),A==null||A(a,r)},[A,R]),f=en({value:n,defaultValue:l,onValueChange:$a,inputValue:b,defaultInputValue:j??Na,onInputValueChange:za,open:T,defaultOpen:_,onOpenChange:W,multiple:h,selectedOptionLabel:typeof n=="string"?((mt=me.get(n))==null?void 0:mt.label)??n:void 0,disabled:U,readOnly:I}),L=f.value,be=f.open,q=f.inputValue,ie=s.useMemo(()=>rn(L,!!h),[L,h]),Ka=s.useMemo(()=>ie.map(a=>{var r;return((r=me.get(a))==null?void 0:r.label)??a}),[me,ie]),rt=s.useMemo(()=>{const a=q.trim();return a?ne.filter(r=>on(r,a)):ne},[q,ne]),lt=s.useMemo(()=>{const a=q.trim(),r=ne.some(x=>an(x,a));return!M||!a||r?null:{value:a,label:C(a),created:!0}},[M,q,C,ne]),J=s.useMemo(()=>lt?[...rt,lt]:rt,[lt,rt]),Ua=s.useMemo(()=>J.flatMap((a,r)=>a.disabled?r:[]),[J]),dt=wt(J),ge=be?ot??(dt>=0?dt:null):null,Wa=s.useCallback((a,r,x)=>{if(a){f.openPopup("keyboard");return}O(null),f.closePopup(dn(x))},[f]),ce=Co({open:be,onOpenChange:Wa,placement:$,middleware:So({offset:k,extras:[Eo({apply({rects:a,elements:r}){r.floating.style.minWidth=`${a.reference.width}px`}})]})}),Qa=Do(ce.context,{enabled:!U}),Ga=jo(ce.context,{role:"listbox"}),Xa=Vo(ce.context,{listRef:Be,activeIndex:ge,onNavigate:O,disabledIndices:Ua,loop:!0,virtual:!0,focusItemOnOpen:!1}),{getReferenceProps:Ja,getFloatingProps:Ya,getItemProps:Za}=Lo([Qa,Ga,Xa]),eo=Yo({size:Te}),to=un(Te),ao=!!h&&typeof N=="number"&&N>=0&&!pe?N:ie.length,H=ie.slice(0,ao),oo=ie.length-H.length,no=typeof L=="string"?((bt=me.get(L))==null?void 0:bt.label)??L:"",so=!h&&typeof L=="string"&&!q?no:q,P=s.useCallback(()=>{var a;(a=ke.current)==null||a.focus()},[]),se=s.useCallback(a=>{var r;(r=Re.current[a])==null||r.focus()},[]),it=s.useCallback(a=>{if(!a.disabled){if(a.created){const r={...a,label:a.value};Pa(x=>xt(x,[r])),f.selectOption(r,"create-option"),nt(`${a.value} created and selected.`)}else f.selectOption(a),nt(`${a.label} selected.`);O(null),requestAnimationFrame(P)}},[P,f]),Ae=s.useCallback((a,r)=>{f.removeOption(a),nt(`${r} removed.`)},[f]),ro=s.useCallback((a,r)=>{Ae(a,r),requestAnimationFrame(P)},[P,Ae]),lo=s.useCallback((a,r,x,Y)=>{if(a.key==="ArrowLeft"){a.preventDefault(),se(r>0?r-1:H.length-1);return}if(a.key==="ArrowRight"){a.preventDefault(),r<H.length-1?se(r+1):P();return}if(a.key==="Escape"){a.preventDefault(),P();return}(a.key==="Backspace"||a.key==="Delete")&&(a.preventDefault(),Ae(x,Y),requestAnimationFrame(()=>{r>0?se(r-1):P()}))},[P,se,Ae,H.length]),io=s.useCallback(a=>{O(null),f.setInputValue(a.target.value)},[f]),co=s.useCallback(a=>{oe(!0),f.openPopup("focus"),!h&&typeof L=="string"&&a.currentTarget.select()},[L,h,f]),uo=s.useCallback(a=>{!h&&typeof L=="string"&&document.activeElement!==a.currentTarget&&(a.preventDefault(),a.currentTarget.focus(),a.currentTarget.select())},[L,h]),po=s.useCallback(a=>{if(!(U||I)){if(a.key==="ArrowDown"||a.key==="ArrowUp"){if(!be){a.preventDefault(),f.openPopup("keyboard");const x=(a.key==="ArrowDown"?1:-1)===1?wt(J):J.findLastIndex(Y=>!Y.disabled);O(x>=0?x:null)}return}if(a.key==="Enter"&&ge!==null){const r=J[ge];r&&(a.preventDefault(),it(r));return}if((a.key==="Backspace"||a.key==="Delete")&&q.length===0&&h&&H.length>0){a.preventDefault(),se(H.length-1);return}a.key==="ArrowLeft"&&q.length===0&&h&&H.length>0&&(a.preventDefault(),se(H.length-1))}},[q.length,U,se,it,be,h,J,I,ge,f,H.length]),mo=s.useCallback(a=>{const r=a.relatedTarget;requestAnimationFrame(()=>{var gt,yt,ht,vt;const x=document.activeElement,Y=r&&((gt=ae.current)==null?void 0:gt.contains(r))||x&&((yt=ae.current)==null?void 0:yt.contains(x)),xo=r&&((ht=de.current)==null?void 0:ht.contains(r))||x&&((vt=de.current)==null?void 0:vt.contains(x));!Y&&!xo&&(oe(!1),O(null),f.closePopup("outside-press"))})},[f]),bo=s.useCallback(()=>{oe(!0)},[]),go=s.useCallback(a=>{const r=a.target;r instanceof Element&&r.closest("button, input")!==null||(a.preventDefault(),P())},[P]),yo=s.useCallback(a=>{if(!d||V||ee||U||!y)return;const r=a.currentTarget;r.scrollHeight-r.scrollTop-r.clientHeight<=ln&&y()},[U,d,V,ee,y]),ho=s.useCallback((a,r)=>{Re.current[a]=r},[]),vo=s.useCallback((a,r)=>{Be.current[a]=r},[]),fo=s.useCallback(a=>{de.current=a,ce.refs.setFloating(a)},[ce.refs]);return{activeIndex:ge,announcement:_a,ariaDescribedBy:ve,ariaLabel:he,ariaLabelledBy:re,ariaRequired:fe,baseId:te,chipSize:to,classes:eo,className:Ye,currentInputValue:q,currentValue:L,density:K,disabled:U,displayedInputValue:so,error:xe,floating:ce,getFloatingProps:Ya,getItemProps:Za,getReferenceProps:Ja,handleBlurCapture:mo,handleControlMouseDown:go,handleFocusCapture:bo,handleInputChange:io,handleInputFocus:co,handleInputKeyDown:po,handleInputMouseDown:uo,handleListScroll:yo,handleOptionSelect:it,handleTokenDismiss:ro,handleTokenKeyDown:lo,hiddenTagCount:oo,inputId:tt,inputRef:ke,invalid:we,isOpen:be,listboxId:at,loading:V,loadingMore:ee,loadingText:X,multiple:h,name:E,navigationItems:J,noOptionsText:Xe,otherProps:Ze,placeholder:Q,readOnly:I,rootRef:ae,selectedLabels:Ka,selectedValues:ie,setFloatingRef:fo,setItemRef:vo,setTokenRef:ho,valid:Z,visibleSelectedValues:H}},m=e=>{const t=pn(e),{activeIndex:n,announcement:l,ariaDescribedBy:u,ariaLabel:p,ariaLabelledBy:b,ariaRequired:j,baseId:R,chipSize:A,classes:T,className:_,currentInputValue:W,currentValue:h,density:M,disabled:C,displayedInputValue:N,error:Q,floating:$,getFloatingProps:k,getItemProps:G,getReferenceProps:z,handleBlurCapture:E,handleControlMouseDown:D,handleFocusCapture:I,handleInputChange:S,handleInputFocus:Z,handleInputKeyDown:v,handleInputMouseDown:F,handleListScroll:K,handleOptionSelect:V,handleTokenDismiss:ee,handleTokenKeyDown:d,hiddenTagCount:y,inputId:X,inputRef:Xe,invalid:he,isOpen:re,listboxId:ve,loading:fe,loadingMore:Je,loadingText:U,multiple:xe,name:we,navigationItems:Te,noOptionsText:Ye,otherProps:Ze,placeholder:et,readOnly:te,rootRef:tt,selectedLabels:at,selectedValues:ae,setFloatingRef:de,setItemRef:ke,setTokenRef:Be,valid:Re,visibleSelectedValues:ot}=t;return o.jsxs(c,{...Io("Autocomplete"),ref:tt,className:Va(T.root,_),"data-disabled":C||void 0,"aria-disabled":C||void 0,onFocusCapture:I,onBlurCapture:E,...Ze,children:[we&&ae.map(O=>o.jsx(c,{as:"input",type:"hidden",name:we,value:O,disabled:C},`hidden-${O}`)),o.jsxs(c,{ref:$.refs.setReference,className:T.control,"data-open":re||void 0,"data-disabled":C||void 0,"data-error":Q||void 0,"data-valid":Re||void 0,"data-invalid":he||void 0,onMouseDown:D,children:[o.jsxs(c,{className:T.valueContainer,children:[xe&&ot.map((O,pe)=>{const oe=at[pe]??O;return o.jsx(qa,{className:T.token,size:A,label:oe,disabled:C||te,dismissButtonRef:le=>Be(pe,le),onDismiss:()=>ee(O,oe),onKeyDown:le=>d(le,pe,O,oe)},O)}),y>0&&o.jsx(c,{as:"span",className:T.overflowIndicator,"aria-label":`${y} more selected`,children:`+${y}`}),o.jsx(c,{as:"input",...Ho("trigger"),id:X,ref:Xe,type:"text",role:"combobox","aria-expanded":re,"aria-controls":ve,"aria-autocomplete":"list","aria-activedescendant":re&&n!==null?`${R}-option-${n}`:void 0,"aria-haspopup":"listbox","aria-label":p,"aria-labelledby":b,"aria-describedby":u,"aria-required":j,"aria-disabled":C||void 0,"aria-invalid":Q||he||void 0,disabled:C,readOnly:te,placeholder:ae.length===0?et:void 0,value:N,className:T.input,onChange:S,...z({onFocus:Z,onKeyDown:v,onMouseDown:F}),autoComplete:"off"})]}),fe&&o.jsx(c,{as:"span",className:T.loadingIndicator,"aria-hidden":!0,children:o.jsx(Po,{size:"sm"})})]}),o.jsx(c,{as:"span",className:T.liveRegion,role:"status","aria-live":"polite","aria-atomic":"true",children:l}),re&&!C&&!te&&o.jsx(Mo,{children:o.jsx(Fo,{children:o.jsx(qo,{context:$.context,modal:!1,initialFocus:-1,children:o.jsx(Fa,{activeIndex:n,baseId:R,density:M,floatingProps:k(),floatingRef:de,floatingStyles:$.floatingStyles,getItemProps:O=>G(O),items:Te,listboxClassName:T.listbox,listboxId:ve,loading:fe,loadingMore:Je,loadingText:U,multiple:!!xe,noOptionsText:Ye,onScroll:K,onSelect:V,query:W.trim(),selectedValues:ae,setItemRef:ke,statusClassName:T.status,value:h})})})})]})};m.__docgenInfo={description:'Filters and selects one or more metadata-only `Option` values.\n\nUse controlled `value` and `onValueChange`, or initialize uncontrolled state\nwith `defaultValue`. The input uses combobox semantics; arrow keys navigate,\nEnter selects, and Escape closes the listbox. Supply `aria-label` or\n`aria-labelledby` when no external label is associated with the input.\n\n@example\n```tsx\n<Autocomplete defaultValue="active" aria-label="Status">\n  <Option value="active" label="Active" />\n  <Option value="archived" label="Archived" />\n</Autocomplete>\n```',methods:[],displayName:"Autocomplete"};const ye=e=>null;ye.__autocompleteComponentType="Option";const Ha=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],Ge=[...Ha,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],g=(e=Ha)=>e.map(t=>o.jsx(ye,{value:t.value,label:t.label,description:t.description},t.value)),qn={title:"Components/Autocomplete",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},Ie={render:function(t){const[n,l]=s.useState(null);return o.jsx(c,{w:"xs",children:o.jsx(m,{...t,multiple:!1,value:n,defaultValue:void 0,onValueChange:l,onChange:void 0,name:"technology",children:g()})})}},Oe={render:()=>o.jsx(c,{w:"xs",children:o.jsx(m,{name:"technology-filter","aria-label":"Filter technologies",children:g()})}),play:async({canvasElement:e})=>{const t=B(e),n=B(document.body),l=t.getByRole("combobox");await w.type(l,"typ"),await i(n.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await i(n.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await w.clear(l),await w.type(l,"workshop");const u=n.getByRole("option",{name:/storybook component workshop/i});await i(B(u).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Ce={render:e=>o.jsx(c,{w:"xs",children:o.jsx(m,{...e,multiple:!1,value:void 0,defaultValue:"react",onValueChange:void 0,onChange:void 0,name:"technology",children:g()})}),play:async({canvasElement:e})=>{const t=B(e).getByRole("combobox",{name:"Technology"});await w.click(t),await w.keyboard("P"),await i(t).toHaveValue("P")}},Se={render:function(){const[t,n]=s.useState(["react","typescript","storybook"]);return o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,value:t,onValueChange:n,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:g()})})},play:async({canvasElement:e})=>{const t=B(e),n=B(document.body),l=t.getByRole("combobox"),u=t.getByRole("button",{name:"Remove React"});await w.click(l),await i(n.queryByRole("checkbox")).not.toBeInTheDocument(),await w.click(u),await i(t.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument(),await i(l).toHaveFocus()},parameters:{controls:{disable:!0}}},Ee={render:()=>o.jsx(c,{w:"224",children:o.jsx(m,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:g()})}),parameters:{controls:{disable:!0}}},De={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:g()})}),play:async({canvasElement:e})=>{const t=B(e);await i(t.getByText("+3")).toBeInTheDocument(),await w.click(t.getByRole("combobox")),await i(t.queryByText("+3")).not.toBeInTheDocument(),await i(t.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},je={render:()=>o.jsx(c,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(e=>o.jsx(m,{size:e,defaultValue:"react",name:`technology-${e}`,"aria-label":`${e} autocomplete`,children:g()},e))}),parameters:{controls:{disable:!0}}},Ve={render:()=>o.jsxs(c,{display:"grid",gap:"12",w:"sm",children:[o.jsx(m,{name:"default","aria-label":"Default",children:g()}),o.jsx(m,{name:"valid","aria-label":"Valid",valid:!0,children:g()}),o.jsx(m,{name:"invalid","aria-label":"Invalid",invalid:!0,children:g()}),o.jsx(m,{name:"error","aria-label":"Error",error:!0,children:g()})]}),parameters:{controls:{disable:!0}}},Le={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:g()})}),play:async({canvasElement:e})=>{const t=B(e);await i(t.getByRole("combobox")).toBeDisabled(),await i(t.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},Me={render:()=>o.jsx(c,{w:"sm",children:o.jsxs(m,{name:"framework","aria-label":"Framework",children:[o.jsx(ye,{value:"react",label:"React"}),o.jsx(ye,{value:"legacy",label:"Legacy framework",disabled:!0}),o.jsx(ye,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},Fe={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,allowCustomValue:!0,defaultValue:["react"],name:"custom-stack","aria-label":"Technologies",placeholder:"Add a technology…",children:g()})}),play:async({canvasElement:e})=>{const t=B(e),n=t.getByRole("combobox");await w.type(n,"Svelte");const l=B(document.body);await i(l.getByRole("option",{name:/create “svelte”/i})).toBeInTheDocument(),await w.keyboard("{ArrowDown}{Enter}"),await i(t.getByRole("button",{name:"Remove Svelte"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},qe={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},He={render:function(){const[t,n]=s.useState(()=>Ge.slice(0,8)),[l,u]=s.useState(!1),p=t.length<Ge.length,b=()=>{l||!p||(u(!0),window.setTimeout(()=>{n(j=>Ge.slice(0,j.length+4)),u(!1)},200))};return o.jsx(c,{w:"sm",children:o.jsx(m,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:p,loadingMore:l,onLoadMore:b,children:g(t)})})},parameters:{controls:{disable:!0}}},Pe={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:g()})}),parameters:{controls:{disable:!0}}},_e={render:function(){const[t,n]=s.useState("");return o.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[o.jsx(m,{inputValue:t,onInputValueChange:n,name:"controlled-input","aria-label":"Controlled query",children:g()}),o.jsx(c,{color:"text.subtle",children:`Query: ${t||"empty"}`})]})},parameters:{controls:{disable:!0}}},Ne={render:function(){const[t,n]=s.useState(!1),[l,u]=s.useState(0),p=b=>{n(b),u(j=>j+1)};return o.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[o.jsx(Oo,{onClick:()=>n(b=>!b),children:"Toggle suggestions"}),o.jsx(m,{open:t,onOpenChange:p,name:"controlled-open","aria-label":"Controlled suggestions",children:g()}),o.jsx(c,{color:"text.subtle",children:`Open changes: ${l}`})]})},play:async({canvasElement:e})=>{const t=B(e),n=t.getByRole("combobox");await w.click(n),await i(t.getByText("Open changes: 1")).toBeInTheDocument(),await w.keyboard("{Escape}"),await i(t.getByText("Open changes: 2")).toBeInTheDocument(),await i(n).toHaveAttribute("aria-expanded","false")},parameters:{controls:{disable:!0}}},$e={name:"Ex: With FormField",render:()=>o.jsx(c,{w:"sm",children:o.jsx(La,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:o.jsx(m,{id:"primary-technology",name:"primaryTechnology",children:g()})})}),parameters:{controls:{disable:!0}}},ze={name:"Ex: Technology Assignment",render:()=>o.jsx(c,{w:"md",children:o.jsx(La,{label:"Project stack",labelFor:"project-stack",helpText:"Search the supported catalog or create a project-specific value.",children:o.jsx(m,{id:"project-stack",name:"projectStack",multiple:!0,allowCustomValue:!0,defaultValue:["react","typescript"],placeholder:"Add technology…",children:g(Ge)})})}),parameters:{controls:{disable:!0}}},Ke={name:"Ex: Keyboard Selection",render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{name:"keyboard","aria-label":"Keyboard selection",children:g()})}),play:async({canvasElement:e})=>{const n=B(e).getByRole("combobox");await w.click(n),await i(n).toHaveAttribute("aria-expanded","true"),await i(n).toHaveAttribute("aria-activedescendant"),await w.keyboard("{Enter}"),await i(n).toHaveValue("React")},parameters:{controls:{disable:!0}}},Ue={name:"Ex: Keyboard Token Editing",render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:g()})}),play:async({canvasElement:e})=>{const t=B(e),n=t.getByRole("combobox"),l=t.getByRole("button",{name:"Remove TypeScript"});await w.click(n),await w.keyboard("{Backspace}"),await i(l).toHaveFocus(),await i(l).toBeInTheDocument(),await w.keyboard("{Backspace}"),await i(t.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},We={name:"Ex: Test Id Reaches The Listbox",render:()=>o.jsx(c,{w:"sm","data-testid":"filters",children:o.jsx(m,{"data-testid":"technology","aria-label":"Technology",children:g()})}),play:async({canvasElement:e})=>{const t=B(e),n=B(e.ownerDocument.body),l=t.getByTestId("technology"),u=t.getByRole("combobox");await i(l).not.toBe(u),await i(l).toContainElement(u),await i(u).not.toHaveAttribute("data-testid"),await i(u).toHaveAttribute("data-ds-part","trigger"),await i(l).not.toHaveAttribute("data-ds-part"),await w.click(u);const p=await n.findByRole("listbox");await i(l.contains(p)).toBe(!1);const b=p.closest("[data-ds-chain]");await i(b).toHaveAttribute("data-ds-chain","filters>technology"),await i(b==null?void 0:b.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},Qe={name:"Test: data-ds-component",render:()=>o.jsxs(c,{display:"flex",flexDirection:"column",gap:"8",w:"sm",children:[o.jsx(m,{"data-testid":"ds-default","aria-label":"Default technology",children:g()}),o.jsx(m,{"data-testid":"ds-override","data-ds-component":"TechnologyPicker","aria-label":"Overridden technology",children:g()})]}),play:async({canvasElement:e})=>{const t=B(e),n=B(e.ownerDocument.body),l=t.getByTestId("ds-default");await i(l).toHaveAttribute("data-ds-component","Autocomplete");const u=t.getByRole("combobox",{name:"Default technology"});await i(u).toHaveAttribute("data-ds-part","trigger"),await i(u).not.toHaveAttribute("data-ds-component");const p=t.getByTestId("ds-override");await i(p).toHaveAttribute("data-ds-component","TechnologyPicker"),await i(t.getByRole("combobox",{name:"Overridden technology"})).not.toHaveAttribute("data-ds-component"),await w.click(u);const b=await n.findByRole("listbox");await i(b).not.toHaveAttribute("data-ds-component","Autocomplete"),await i(b).not.toHaveAttribute("data-ds-component","TechnologyPicker")},parameters:{controls:{disable:!0}}};var Tt,kt,Bt;Ie.parameters={...Ie.parameters,docs:{...(Tt=Ie.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} multiple={false} value={value} defaultValue={undefined} onValueChange={setValue} onChange={undefined} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(Bt=(kt=Ie.parameters)==null?void 0:kt.docs)==null?void 0:Bt.source}}};var Rt,At,It;Oe.parameters={...Oe.parameters,docs:{...(Rt=Oe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  render: () => <Box w="xs">
      <Autocomplete name="technology-filter" aria-label="Filter technologies">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'typ');
    await expect(body.getByRole('option', {
      name: /typescript type safety/i
    })).toBeInTheDocument();
    await expect(body.queryByRole('option', {
      name: /storybook/i
    })).not.toBeInTheDocument();
    await userEvent.clear(input);
    await userEvent.type(input, 'workshop');
    const descriptionMatch = body.getByRole('option', {
      name: /storybook component workshop/i
    });
    await expect(within(descriptionMatch).getByText('workshop', {
      selector: 'mark'
    })).toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(It=(At=Oe.parameters)==null?void 0:At.docs)==null?void 0:It.source}}};var Ot,Ct,St;Ce.parameters={...Ce.parameters,docs:{...(Ot=Ce.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  render: args => <Box w="xs">
      <Autocomplete {...args} multiple={false} value={undefined} defaultValue="react" onValueChange={undefined} onChange={undefined} name="technology">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('combobox', {
      name: 'Technology'
    });
    await userEvent.click(input);
    await userEvent.keyboard('P');
    await expect(input).toHaveValue('P');
  }
}`,...(St=(Ct=Ce.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var Et,Dt,jt;Se.parameters={...Se.parameters,docs:{...(Et=Se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  render: function MultipleRender() {
    const [value, setValue] = useState<string[]>(['react', 'typescript', 'storybook']);
    return <Box w="sm">
        <Autocomplete multiple value={value} onValueChange={setValue} name="stack" aria-label="Project stack" placeholder="Add technology…">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox');
    const removeReact = canvas.getByRole('button', {
      name: 'Remove React'
    });
    await userEvent.click(input);
    await expect(body.queryByRole('checkbox')).not.toBeInTheDocument();
    await userEvent.click(removeReact);
    await expect(canvas.queryByRole('button', {
      name: 'Remove React'
    })).not.toBeInTheDocument();
    await expect(input).toHaveFocus();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(jt=(Dt=Se.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};var Vt,Lt,Mt;Ee.parameters={...Ee.parameters,docs:{...(Vt=Ee.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  render: () => <Box w="224">
      <Autocomplete multiple defaultValue={['storybook', 'floating-ui', 'typescript']} name="narrow-stack" aria-label="Narrow project stack" placeholder="Add…">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Mt=(Lt=Ee.parameters)==null?void 0:Lt.docs)==null?void 0:Mt.source}}};var Ft,qt,Ht;De.parameters={...De.parameters,docs:{...(Ft=De.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete multiple limitTags={2} defaultValue={['react', 'typescript', 'storybook', 'panda', 'floating-ui']} name="limited-stack" aria-label="Limited project stack">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('+3')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('combobox'));
    await expect(canvas.queryByText('+3')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Remove Floating UI'
    })).toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ht=(qt=De.parameters)==null?void 0:qt.docs)==null?void 0:Ht.source}}};var Pt,_t,Nt;je.parameters={...je.parameters,docs:{...(Pt=je.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" w="sm">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Autocomplete key={size} size={size} defaultValue="react" name={\`technology-\${size}\`} aria-label={\`\${size} autocomplete\`}>
          {renderOptions()}
        </Autocomplete>)}
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Nt=(_t=je.parameters)==null?void 0:_t.docs)==null?void 0:Nt.source}}};var $t,zt,Kt;Ve.parameters={...Ve.parameters,docs:{...($t=Ve.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" w="sm">
      <Autocomplete name="default" aria-label="Default">
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="valid" aria-label="Valid" valid>
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="invalid" aria-label="Invalid" invalid>
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="error" aria-label="Error" error>
        {renderOptions()}
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Kt=(zt=Ve.parameters)==null?void 0:zt.docs)==null?void 0:Kt.source}}};var Ut,Wt,Qt;Le.parameters={...Le.parameters,docs:{...(Ut=Le.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete multiple disabled defaultValue={['react', 'typescript']} name="disabled-stack" aria-label="Disabled technologies">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Remove React'
    })).toBeDisabled();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Qt=(Wt=Le.parameters)==null?void 0:Wt.docs)==null?void 0:Qt.source}}};var Gt,Xt,Jt;Me.parameters={...Me.parameters,docs:{...(Gt=Me.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete name="framework" aria-label="Framework">
        <Option value="react" label="React" />
        <Option value="legacy" label="Legacy framework" disabled />
        <Option value="storybook" label="Storybook" />
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Jt=(Xt=Me.parameters)==null?void 0:Xt.docs)==null?void 0:Jt.source}}};var Yt,Zt,ea;Fe.parameters={...Fe.parameters,docs:{...(Yt=Fe.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete multiple allowCustomValue defaultValue={['react']} name="custom-stack" aria-label="Technologies" placeholder="Add a technology…">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'Svelte');
    const body = within(document.body);
    await expect(body.getByRole('option', {
      name: /create “svelte”/i
    })).toBeInTheDocument();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Remove Svelte'
    })).toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ea=(Zt=Fe.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,oa;qe.parameters={...qe.parameters,docs:{...(ta=qe.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oa=(aa=qe.parameters)==null?void 0:aa.docs)==null?void 0:oa.source}}};var na,sa,ra;He.parameters={...He.parameters,docs:{...(na=He.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: function InfiniteLoadingRender() {
    const [options, setOptions] = useState(() => extendedOptions.slice(0, 8));
    const [loadingMore, setLoadingMore] = useState(false);
    const hasMore = options.length < extendedOptions.length;
    const loadMore = () => {
      if (loadingMore || !hasMore) {
        return;
      }
      setLoadingMore(true);
      window.setTimeout(() => {
        setOptions(currentOptions => extendedOptions.slice(0, currentOptions.length + 4));
        setLoadingMore(false);
      }, 200);
    };
    return <Box w="sm">
        <Autocomplete defaultOpen name="infinite" aria-label="Technology with more results" hasMore={hasMore} loadingMore={loadingMore} onLoadMore={loadMore}>
          {renderOptions(options)}
        </Autocomplete>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ra=(sa=He.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var la,ia,ca;Pe.parameters={...Pe.parameters,docs:{...(la=Pe.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete defaultInputValue="angular" defaultOpen name="empty" aria-label="Technology with no matches">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ca=(ia=Pe.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var ua,da,pa;_e.parameters={..._e.parameters,docs:{...(ua=_e.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  render: function ControlledInputRender() {
    const [inputValue, setInputValue] = useState('');
    return <Box display="grid" gap="8" w="sm">
        <Autocomplete inputValue={inputValue} onInputValueChange={setInputValue} name="controlled-input" aria-label="Controlled query">
          {renderOptions()}
        </Autocomplete>
        <Box color="text.subtle">{\`Query: \${inputValue || 'empty'}\`}</Box>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pa=(da=_e.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ma,ba,ga;Ne.parameters={...Ne.parameters,docs:{...(ma=Ne.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  render: function ControlledOpenRender() {
    const [open, setOpen] = useState(false);
    const [openChangeCount, setOpenChangeCount] = useState(0);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      setOpenChangeCount(currentCount => currentCount + 1);
    };
    return <Box display="grid" gap="8" w="sm">
        <Button onClick={() => setOpen(currentOpen => !currentOpen)}>
          Toggle suggestions
        </Button>
        <Autocomplete open={open} onOpenChange={handleOpenChange} name="controlled-open" aria-label="Controlled suggestions">
          {renderOptions()}
        </Autocomplete>
        <Box color="text.subtle">{\`Open changes: \${openChangeCount}\`}</Box>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.click(input);
    await expect(canvas.getByText('Open changes: 1')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(canvas.getByText('Open changes: 2')).toBeInTheDocument();
    await expect(input).toHaveAttribute('aria-expanded', 'false');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ga=(ba=Ne.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var ya,ha,va;$e.parameters={...$e.parameters,docs:{...(ya=$e.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  name: 'Ex: With FormField',
  render: () => <Box w="sm">
      <FormField label="Primary technology" labelFor="primary-technology" helpText="Choose the technology this project depends on most.">
        <Autocomplete id="primary-technology" name="primaryTechnology">
          {renderOptions()}
        </Autocomplete>
      </FormField>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(va=(ha=$e.parameters)==null?void 0:ha.docs)==null?void 0:va.source}}};var fa,xa,wa;ze.parameters={...ze.parameters,docs:{...(fa=ze.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: 'Ex: Technology Assignment',
  render: () => <Box w="md">
      <FormField label="Project stack" labelFor="project-stack" helpText="Search the supported catalog or create a project-specific value.">
        <Autocomplete id="project-stack" name="projectStack" multiple allowCustomValue defaultValue={['react', 'typescript']} placeholder="Add technology…">
          {renderOptions(extendedOptions)}
        </Autocomplete>
      </FormField>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(wa=(xa=ze.parameters)==null?void 0:xa.docs)==null?void 0:wa.source}}};var Ta,ka,Ba;Ke.parameters={...Ke.parameters,docs:{...(Ta=Ke.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  name: 'Ex: Keyboard Selection',
  render: () => <Box w="sm">
      <Autocomplete name="keyboard" aria-label="Keyboard selection">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.click(input);
    await expect(input).toHaveAttribute('aria-expanded', 'true');
    await expect(input).toHaveAttribute('aria-activedescendant');
    await userEvent.keyboard('{Enter}');
    await expect(input).toHaveValue('React');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ba=(ka=Ke.parameters)==null?void 0:ka.docs)==null?void 0:Ba.source}}};var Ra,Aa,Ia;Ue.parameters={...Ue.parameters,docs:{...(Ra=Ue.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  name: 'Ex: Keyboard Token Editing',
  render: () => <Box w="sm">
      <Autocomplete multiple defaultValue={['react', 'typescript']} name="token-editing" aria-label="Token editing">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const removeTypeScript = canvas.getByRole('button', {
      name: 'Remove TypeScript'
    });
    await userEvent.click(input);
    await userEvent.keyboard('{Backspace}');
    await expect(removeTypeScript).toHaveFocus();
    await expect(removeTypeScript).toBeInTheDocument();
    await userEvent.keyboard('{Backspace}');
    await expect(canvas.queryByRole('button', {
      name: 'Remove TypeScript'
    })).not.toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ia=(Aa=Ue.parameters)==null?void 0:Aa.docs)==null?void 0:Ia.source}}};var Oa,Ca,Sa;We.parameters={...We.parameters,docs:{...(Oa=We.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  name: 'Ex: Test Id Reaches The Listbox',
  render: () => <Box w="sm" data-testid="filters">
      <Autocomplete data-testid="technology" aria-label="Technology">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);

    // The test id is written on the root, not on the combobox input, so the
    // chain scope it opens encloses the portal the input only sits beside.
    const root = canvas.getByTestId('technology');
    const input = canvas.getByRole('combobox');
    await expect(root).not.toBe(input);
    await expect(root).toContainElement(input);
    await expect(input).not.toHaveAttribute('data-testid');

    // The input keeps a stable query handle through \`data-ds-part\`, which the
    // component emits on its own. It marks the trigger only, never the root.
    await expect(input).toHaveAttribute('data-ds-part', 'trigger');
    await expect(root).not.toHaveAttribute('data-ds-part');
    await userEvent.click(input);
    const listbox = await screen.findByRole('listbox');

    // The listbox is portaled out of the root, so only the chain connects them.
    await expect(root.contains(listbox)).toBe(false);
    const chainRoot = listbox.closest('[data-ds-chain]');

    // The chain is built from \`data-testid\` alone, so the trigger's
    // \`data-ds-part\` contributes no node to it.
    await expect(chainRoot).toHaveAttribute('data-ds-chain', 'filters>technology');
    await expect(chainRoot?.getAttribute('data-ds-chain')).not.toContain('trigger');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Sa=(Ca=We.parameters)==null?void 0:Ca.docs)==null?void 0:Sa.source}}};var Ea,Da,ja;Qe.parameters={...Qe.parameters,docs:{...(Ea=Qe.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <Box display="flex" flexDirection="column" gap="8" w="sm">
      <Autocomplete data-testid="ds-default" aria-label="Default technology">
        {renderOptions()}
      </Autocomplete>
      <Autocomplete data-testid="ds-override" data-ds-component="TechnologyPicker" aria-label="Overridden technology">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);

    // Emitted automatically on the root, without an author opting in.
    const root = canvas.getByTestId('ds-default');
    await expect(root).toHaveAttribute('data-ds-component', 'Autocomplete');

    // The combobox input is an inner part of the root, so it stays unmarked.
    const input = canvas.getByRole('combobox', {
      name: 'Default technology'
    });
    await expect(input).toHaveAttribute('data-ds-part', 'trigger');
    await expect(input).not.toHaveAttribute('data-ds-component');

    // An explicitly passed value wins, still on the root and not the input.
    const overriddenRoot = canvas.getByTestId('ds-override');
    await expect(overriddenRoot).toHaveAttribute('data-ds-component', 'TechnologyPicker');
    await expect(canvas.getByRole('combobox', {
      name: 'Overridden technology'
    })).not.toHaveAttribute('data-ds-component');

    // The portaled listbox is not the Autocomplete root either.
    await userEvent.click(input);
    const listbox = await screen.findByRole('listbox');
    await expect(listbox).not.toHaveAttribute('data-ds-component', 'Autocomplete');
    await expect(listbox).not.toHaveAttribute('data-ds-component', 'TechnologyPicker');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ja=(Da=Qe.parameters)==null?void 0:Da.docs)==null?void 0:ja.source}}};const Hn=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing","TestIdReachesPortaledListbox","DsComponentAttribute"];export{Fe as AllowCustomValue,_e as ControlledInput,Ne as ControlledOpen,Ie as Default,Le as Disabled,Me as DisabledOptions,Qe as DsComponentAttribute,Pe as EmptyResults,Oe as Filtering,He as InfiniteLoading,Ke as KeyboardSelection,Ue as KeyboardTokenEditing,De as LimitTags,qe as Loading,Se as Multiple,Ee as MultipleLongValues,Ce as Selected,je as Sizes,ze as TechnologyAssignmentExample,We as TestIdReachesPortaledListbox,Ve as ValidationStates,$e as WithFormField,Hn as __namedExportsOrder,qn as default};
