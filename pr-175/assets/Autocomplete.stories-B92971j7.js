import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BKyFwriW.js";import{w as P,u as j,e as x}from"./index-DPYJpPba.js";import{m as dn,c as mn,s as gn,a as yn,g as bn,d as Ia,B as c,b as fn}from"./Box-D8syd76n.js";import{B as vn}from"./Button-BWDAz4-3.js";import{F as Aa}from"./FormField-BCqo4WB8.js";import{u as hn,c as wn,s as xn,b as Tn,d as kn,e as Bn,g as Rn,F as In,h as An}from"./Tooltip-xtYRh-KS.js";import{S as Sn}from"./Spinner-BUXJIvki.js";import{m as On}from"./menu-bfhB-Iew.js";import{L as Cn,b as jn}from"./ListItem-BUdKCnJt.js";import{C as Vn}from"./ChipGroup-3Owzh4_0.js";import{u as En}from"./FieldContext-D6URyQos.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CLSA3e9P.js";import"./IconConfig-CuyDtWEJ.js";import"./Label-Bb6hdk3t.js";import"./Text-OMCUSOol.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Divider-KBSxUyGs.js";import"./Checkbox-CiUwpcUt.js";import"./Toggle-CUhhVt_e.js";import"./useControllableState-ByGfjEIG.js";const Sa={size:"md"},qn=[],Dn=[["root","autocomplete__root"],["control","autocomplete__control"],["valueContainer","autocomplete__valueContainer"],["input","autocomplete__input"],["token","autocomplete__token"],["overflowIndicator","autocomplete__overflowIndicator"],["loadingIndicator","autocomplete__loadingIndicator"],["listbox","autocomplete__listbox"],["status","autocomplete__status"],["liveRegion","autocomplete__liveRegion"]],Mn=Dn.map(([e,a])=>[e,yn(a,Sa,bn(qn,e))]),Ln=dn((e={})=>Object.fromEntries(Mn.map(([a,o])=>[a,o.recipeFn(e)]))),ft=["size"],Fn=e=>({...Sa,...mn(e)}),Pn=Object.assign(Ln,{__recipe__:!1,__name__:"autocomplete",raw:e=>e,classNameMap:{},variantKeys:ft,variantMap:{size:["sm","md","lg","xl"]},splitVariantProps(e){return gn(e,ft)},getVariantProps:Fn}),Oa=e=>{const{activeIndex:a,baseId:o,density:l,floatingProps:f,floatingRef:y,floatingStyles:S,getItemProps:E,items:T,listboxClassName:k,listboxId:v,loading:_,loadingMore:z,loadingText:m,multiple:D,noOptionsText:I,onScroll:N,onSelect:U,query:H,selectedValues:h,setItemRef:W,statusClassName:K,value:O}=e,C=On({density:l}),B=_&&T.length===0,A=!_&&T.length===0;return n.jsxs(Cn,{ref:y,id:v,role:"listbox","aria-label":"Suggestions","aria-multiselectable":D||void 0,"aria-busy":_||z||void 0,density:l,query:H,highlightMatches:!0,className:Ia(C.wrapper,k),style:S,onScroll:N,...f,children:[T.map((b,V)=>{const J=D?h.includes(b.value):O===b.value;return n.jsx(jn,{id:`${o}-option-${V}`,ref:$=>W(V,$),disabled:b.disabled,selected:J,density:l,variant:D?"checkbox":"default",label:b.label,description:b.description,iconBefore:b.iconLeft,iconAfter:b.iconRight,highlightMatches:!b.created,tabIndex:-1,bg:a===V?"bg.neutral.hovered":void 0,"data-active":a===V||void 0,...E({onMouseDown:$=>$.preventDefault(),onClick:()=>{b.disabled||U(b)}})},`${b.created?"create":"option"}-${b.value}`)}),B&&n.jsx(c,{className:K,role:"status",children:m}),A&&n.jsx(c,{className:K,role:"status",children:I}),z&&n.jsx(c,{className:K,role:"status",children:m})]})};Oa.__docgenInfo={description:"",methods:[],displayName:"AutocompleteListbox",props:{activeIndex:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},baseId:{required:!0,tsType:{name:"string"},description:""},density:{required:!0,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},floatingProps:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},floatingRef:{required:!0,tsType:{name:"RefCallback",elements:[{name:"HTMLDivElement"}],raw:"RefCallback<HTMLDivElement>"},description:""},floatingStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},getItemProps:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: HTMLProps<HTMLElement>) => Record<string, unknown>",signature:{arguments:[{type:{name:"HTMLProps",elements:[{name:"HTMLElement"}],raw:"HTMLProps<HTMLElement>"},name:"props"}],return:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}}},description:""},items:{required:!0,tsType:{name:"unknown"},description:""},listboxClassName:{required:!0,tsType:{name:"string"},description:""},listboxId:{required:!0,tsType:{name:"string"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},loadingMore:{required:!0,tsType:{name:"boolean"},description:""},loadingText:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},noOptionsText:{required:!0,tsType:{name:"ReactNode"},description:""},onScroll:{required:!0,tsType:{name:"UIEventHandler",elements:[{name:"HTMLDivElement"}],raw:"UIEventHandler<HTMLDivElement>"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOptionData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
  created?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"iconLeft",value:{name:"IconNamesList",required:!1}},{key:"iconRight",value:{name:"IconNamesList",required:!1}},{key:"created",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},query:{required:!0,tsType:{name:"string"},description:""},selectedValues:{required:!0,tsType:{name:"unknown"},description:""},setItemRef:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, node: HTMLElement | null) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"node"}],return:{name:"void"}}},description:""},statusClassName:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""}}};const Ca=e=>{const{className:a,disabled:o,dismissButtonRef:l,label:f,onDismiss:y,onKeyDown:S,size:E}=e;return n.jsx(Vn,{className:a,size:E,dismissable:!0,disabled:o,dismissButtonRef:l,dismissButtonTabIndex:-1,onDismiss:y,onDismissKeyDown:S,children:f})};Ca.__docgenInfo={description:"",methods:[],displayName:"AutocompleteToken",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dismissButtonRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""}}};const _n=e=>e?[]:null,Nn=({value:e,defaultValue:a,onValueChange:o,inputValue:l,defaultInputValue:f="",onInputValueChange:y,open:S,defaultOpen:E=!1,onOpenChange:T,multiple:k=!1,selectedOptionLabel:v,disabled:_=!1,readOnly:z=!1})=>{const[m,D]=r.useState(()=>a!==void 0?a:_n(k)),[I,N]=r.useState(f),[U,H]=r.useState(E),h=e!==void 0?e:m,W=l!==void 0?l:I,K=S!==void 0?S:U,O=_||z,C=r.useCallback((i,p)=>{e===void 0&&D(i),o==null||o(i,p)},[e,o]),B=r.useCallback((i,p)=>{l===void 0&&N(i),y==null||y(i,p)},[l,y]),A=r.useCallback((i,p)=>{S===void 0&&H(i),T==null||T(i,p)},[S,T]),b=r.useCallback(i=>{O||(B(i,"input"),!k&&typeof h=="string"&&i!==v&&C(null,"clear"),A(!0,"input"))},[B,A,C,O,k,v,h]),V=r.useCallback((i,p="select-option")=>{if(!(O||i.disabled)){if(k){const Q=Array.isArray(h)?h:[];if(Q.includes(i.value))return;C([...Q,i.value],p),B("","selection"),A(!0,"selection");return}h!==i.value&&(C(i.value,p),B(i.label,"selection"),A(!1,"selection"))}},[B,A,C,O,k,h]),J=r.useCallback(i=>{const p=i.trim();p&&V({value:p,label:p},"create-option")},[V]),$=r.useCallback(i=>{if(!O){if(k){const p=Array.isArray(h)?h:[];if(!p.includes(i))return;C(p.filter(Q=>Q!==i),"remove-option");return}h===i&&(C(null,"remove-option"),B("","clear"))}},[B,C,O,k,h]),Y=r.useCallback(i=>{O||A(!0,i)},[A,O]),Z=r.useCallback(i=>{A(!1,i)},[A]);return{value:h,inputValue:W,open:K,setInputValue:b,selectOption:V,createOption:J,removeOption:$,openPopup:Y,closePopup:Z}},Hn="__autocompleteComponentType",ce=e=>e.trim().toLowerCase(),Kn=(e,a)=>{const o=ce(a);return o?ce(e.value)===o||ce(e.label)===o:!1},$n=(e,a)=>{const o=ce(a);return o?ce(e.label).includes(o)||e.description!==void 0&&ce(e.description).includes(o):!0},zn=e=>r.isValidElement(e)&&typeof e.type=="function"&&e.type[Hn]==="Option",Un=e=>r.Children.toArray(e).reduce((a,o)=>(zn(o)&&a.push({value:o.props.value,label:o.props.label,disabled:o.props.disabled,description:o.props.description,iconLeft:o.props.iconLeft,iconRight:o.props.iconRight,created:!1}),a),[]),vt=(...e)=>{const a=new Map;return e.forEach(o=>{o.forEach(l=>{a.has(l.value)||a.set(l.value,l)})}),Array.from(a.values())},Wn=(e,a)=>a?Array.isArray(e)?e:e?[e]:[]:typeof e=="string"?[e]:[],ht=e=>e.findIndex(a=>!a.disabled),Qn=32,Gn=e=>`Create “${e}”`,lt={sm:"sm",md:"sm",lg:"md",xl:"md"},Xn=e=>{if(!e||typeof e=="string")return lt[e??"md"];const o=(Array.isArray(e)?e:Object.values(e)).find(l=>typeof l=="string"&&l in lt);return o?lt[o]:"sm"},Jn=e=>e==="escape-key"?"escape":"outside-press",Yn=e=>{var ut,pt,dt;const a=En(),{value:o,defaultValue:l,onValueChange:f,onChange:y,inputValue:S,defaultInputValue:E,onInputValueChange:T,onInputChange:k,open:v,defaultOpen:_,onOpenChange:z,multiple:m=!1,allowCustomValue:D=!1,getCreateOptionLabel:I=Gn,limitTags:N,placeholder:U="Select...",placement:H="bottom-start",offset:h=4,children:W,id:K,name:O,disabled:C,readOnly:B=!1,error:A,valid:b=!1,invalid:V,size:J,density:$="compact",loading:Y=!1,loadingMore:Z=!1,hasMore:i=!1,onLoadMore:p,loadingText:Q="Loading options…",noOptionsText:ve="No options","aria-label":oe,"aria-labelledby":he,"aria-describedby":we,"aria-required":We,...Qe}=e,M=C??(a==null?void 0:a.disabled)??!1,xe=A??(a==null?void 0:a.error)??!1,Ge=V??(a==null?void 0:a.invalid)??!1,Te=J??(a==null?void 0:a.size)??"md",[Xe,Je]=fn(Qe),ue=r.useId(),pe=K??`autocomplete-${ue}`,Ye=pe,Ze=`${pe}-listbox`,ee=r.useRef(null),de=r.useRef(null),ke=r.useRef(null),Be=r.useRef([]),Re=r.useRef([]),[et,w]=r.useState(null),[me,te]=r.useState(!1),[re,Va]=r.useState([]),[Ea,tt]=r.useState(""),it=r.useMemo(()=>Un(W),[W]),ae=r.useMemo(()=>vt(it,re),[it,re]),ge=r.useMemo(()=>new Map(ae.map(t=>[t.value,t])),[ae]),at=o??l,qa=typeof at=="string"?((ut=ge.get(at))==null?void 0:ut.label)??at:"",Da=r.useCallback((t,s)=>{f==null||f(t,s),y==null||y(t,s)},[y,f]),Ma=r.useCallback((t,s)=>{T==null||T(t,s),k==null||k(t,s)},[k,T]),g=Nn({value:o,defaultValue:l,onValueChange:Da,inputValue:S,defaultInputValue:E??qa,onInputValueChange:Ma,open:v,defaultOpen:_,onOpenChange:z,multiple:m,selectedOptionLabel:typeof o=="string"?((pt=ge.get(o))==null?void 0:pt.label)??o:void 0,disabled:M,readOnly:B}),q=g.value,se=g.open,L=g.inputValue,le=r.useMemo(()=>Wn(q,!!m),[q,m]),La=r.useMemo(()=>le.map(t=>{var s;return((s=ge.get(t))==null?void 0:s.label)??t}),[ge,le]),nt=r.useMemo(()=>{const t=L.trim();return t?ae.filter(s=>$n(s,t)):ae},[L,ae]),ot=r.useMemo(()=>{const t=L.trim(),s=ae.some(R=>Kn(R,t));return!D||!t||s?null:{value:t,label:I(t),created:!0}},[D,L,I,ae]),G=r.useMemo(()=>ot?[...nt,ot]:nt,[ot,nt]),Fa=r.useMemo(()=>G.flatMap((t,s)=>t.disabled?s:[]),[G]),ct=ht(G),ye=se?et??(ct>=0?ct:null):null,Pa=r.useCallback((t,s,R)=>{if(t){g.openPopup("keyboard");return}w(null),g.closePopup(Jn(R))},[g]),ie=hn({open:se,onOpenChange:Pa,placement:H,middleware:wn({offset:h,extras:[xn({apply({rects:t,elements:s}){s.floating.style.minWidth=`${t.reference.width}px`}})]})}),_a=Tn(ie.context,{enabled:!M}),Na=kn(ie.context,{role:"listbox"}),Ha=Bn(ie.context,{listRef:Be,activeIndex:ye,onNavigate:w,disabledIndices:Fa,loop:!0,virtual:!0,focusItemOnOpen:!1}),{getReferenceProps:Ka,getFloatingProps:$a,getItemProps:za}=Rn([_a,Na,Ha]),Ua=Pn({size:Te}),Wa=Xn(Te),Qa=!!m&&typeof N=="number"&&N>=0&&!me?N:le.length,F=le.slice(0,Qa),Ga=le.length-F.length,Xa=typeof q=="string"?((dt=ge.get(q))==null?void 0:dt.label)??q:"",Ja=!m&&typeof q=="string"&&!L?Xa:L,X=r.useCallback(()=>{var t;(t=ke.current)==null||t.focus()},[]),ne=r.useCallback(t=>{var s;(s=Re.current[t])==null||s.focus()},[]),rt=r.useCallback(t=>{if(!t.disabled){if(t.created){const s={...t,label:t.value};Va(R=>vt(R,[s])),g.selectOption(s,"create-option"),tt(`${t.value} created and selected.`)}else g.selectOption(t),tt(`${t.label} selected.`);w(null),requestAnimationFrame(X)}},[X,g]),st=r.useCallback((t,s)=>{g.removeOption(t),tt(`${s} removed.`)},[g]),Ya=r.useCallback((t,s,R,be)=>{if(t.key==="ArrowLeft"){t.preventDefault(),ne(s>0?s-1:F.length-1);return}if(t.key==="ArrowRight"){t.preventDefault(),s<F.length-1?ne(s+1):X();return}if(t.key==="Escape"){t.preventDefault(),X();return}(t.key==="Backspace"||t.key==="Delete")&&(t.preventDefault(),st(R,be),requestAnimationFrame(()=>{s>0?ne(s-1):X()}))},[X,ne,st,F.length]),Za=r.useCallback(t=>{w(null),g.setInputValue(t.target.value)},[g]),en=r.useCallback(t=>{te(!0),g.openPopup("focus"),!m&&typeof q=="string"&&t.currentTarget.select()},[q,m,g]),tn=r.useCallback(t=>{!m&&typeof q=="string"&&document.activeElement!==t.currentTarget&&(t.preventDefault(),t.currentTarget.focus(),t.currentTarget.select())},[q,m]),an=r.useCallback(t=>{if(!(M||B)){if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(!se){t.preventDefault(),g.openPopup("keyboard");const R=(t.key==="ArrowDown"?1:-1)===1?ht(G):G.findLastIndex(be=>!be.disabled);w(R>=0?R:null)}return}if(t.key==="Enter"&&ye!==null){const s=G[ye];s&&(t.preventDefault(),rt(s));return}if(t.key==="Escape"&&se){t.preventDefault(),w(null),g.closePopup("escape");return}if((t.key==="Backspace"||t.key==="Delete")&&L.length===0&&m&&F.length>0){t.preventDefault(),ne(F.length-1);return}t.key==="ArrowLeft"&&L.length===0&&m&&F.length>0&&(t.preventDefault(),ne(F.length-1))}},[L.length,M,ne,rt,se,m,G,B,ye,g,F.length]),nn=r.useCallback(t=>{const s=t.relatedTarget;requestAnimationFrame(()=>{var mt,gt,yt,bt;const R=document.activeElement,be=s&&((mt=ee.current)==null?void 0:mt.contains(s))||R&&((gt=ee.current)==null?void 0:gt.contains(R)),pn=s&&((yt=de.current)==null?void 0:yt.contains(s))||R&&((bt=de.current)==null?void 0:bt.contains(R));!be&&!pn&&(te(!1),w(null),g.closePopup("outside-press"))})},[g]),on=r.useCallback(()=>{te(!0)},[]),rn=r.useCallback(t=>{const s=t.target;s instanceof Element&&s.closest("button, input")!==null||(t.preventDefault(),X())},[X]),sn=r.useCallback(t=>{if(!i||Y||Z||M||!p)return;const s=t.currentTarget;s.scrollHeight-s.scrollTop-s.clientHeight<=Qn&&p()},[M,i,Y,Z,p]),ln=r.useCallback((t,s)=>{Re.current[t]=s},[]),cn=r.useCallback((t,s)=>{Be.current[t]=s},[]),un=r.useCallback(t=>{de.current=t,ie.refs.setFloating(t)},[ie.refs]);return{activeIndex:ye,announcement:Ea,ariaDescribedBy:we,ariaLabel:oe,ariaLabelledBy:he,ariaRequired:We,baseId:pe,chipSize:Wa,classes:Ua,className:Xe,currentInputValue:L,currentValue:q,density:$,disabled:M,displayedInputValue:Ja,error:xe,floating:ie,getFloatingProps:$a,getItemProps:za,getReferenceProps:Ka,handleBlurCapture:nn,handleControlMouseDown:rn,handleFocusCapture:on,handleInputChange:Za,handleInputFocus:en,handleInputKeyDown:an,handleInputMouseDown:tn,handleListScroll:sn,handleOptionSelect:rt,handleTokenKeyDown:Ya,hiddenTagCount:Ga,inputId:Ye,inputRef:ke,invalid:Ge,isOpen:se,listboxId:Ze,loading:Y,loadingMore:Z,loadingText:Q,multiple:m,name:O,navigationItems:G,noOptionsText:ve,otherProps:Je,placeholder:U,readOnly:B,removeSelectedValue:st,rootRef:ee,selectedLabels:La,selectedValues:le,setFloatingRef:un,setItemRef:cn,setTokenRef:ln,valid:b,visibleSelectedValues:F}},u=e=>{const a=Yn(e),{activeIndex:o,announcement:l,ariaDescribedBy:f,ariaLabel:y,ariaLabelledBy:S,ariaRequired:E,baseId:T,chipSize:k,classes:v,className:_,currentInputValue:z,currentValue:m,density:D,disabled:I,displayedInputValue:N,error:U,floating:H,getFloatingProps:h,getItemProps:W,getReferenceProps:K,handleBlurCapture:O,handleControlMouseDown:C,handleFocusCapture:B,handleInputChange:A,handleInputFocus:b,handleInputKeyDown:V,handleInputMouseDown:J,handleListScroll:$,handleOptionSelect:Y,handleTokenKeyDown:Z,hiddenTagCount:i,inputId:p,inputRef:Q,invalid:ve,isOpen:oe,listboxId:he,loading:we,loadingMore:We,loadingText:Qe,multiple:M,name:xe,navigationItems:Ge,noOptionsText:Te,otherProps:Xe,placeholder:Je,readOnly:ue,removeSelectedValue:pe,rootRef:Ye,selectedLabels:Ze,selectedValues:ee,setFloatingRef:de,setItemRef:ke,setTokenRef:Be,valid:Re,visibleSelectedValues:et}=a;return n.jsxs(c,{ref:Ye,className:Ia(v.root,_),"data-disabled":I||void 0,"aria-disabled":I||void 0,onFocusCapture:B,onBlurCapture:O,...Xe,children:[xe&&ee.map(w=>n.jsx(c,{as:"input",type:"hidden",name:xe,value:w,disabled:I},`hidden-${w}`)),n.jsxs(c,{ref:H.refs.setReference,className:v.control,"data-open":oe||void 0,"data-disabled":I||void 0,"data-error":U||void 0,"data-valid":Re||void 0,"data-invalid":ve||void 0,onMouseDown:C,children:[n.jsxs(c,{className:v.valueContainer,children:[M&&et.map((w,me)=>{const te=Ze[me]??w;return n.jsx(Ca,{className:v.token,size:k,label:te,disabled:I||ue,dismissButtonRef:re=>Be(me,re),onDismiss:()=>pe(w,te),onKeyDown:re=>Z(re,me,w,te)},w)}),i>0&&n.jsx(c,{as:"span",className:v.overflowIndicator,"aria-label":`${i} more selected`,children:`+${i}`}),n.jsx(c,{as:"input",id:p,ref:Q,type:"text",role:"combobox","aria-expanded":oe,"aria-controls":he,"aria-autocomplete":"list","aria-activedescendant":oe&&o!==null?`${T}-option-${o}`:void 0,"aria-haspopup":"listbox","aria-label":y,"aria-labelledby":S,"aria-describedby":f,"aria-required":E,"aria-disabled":I||void 0,"aria-invalid":U||ve||void 0,disabled:I,readOnly:ue,placeholder:ee.length===0?Je:void 0,value:N,className:v.input,onChange:A,...K({onFocus:b,onKeyDown:V,onMouseDown:J}),autoComplete:"off"})]}),we&&n.jsx(c,{as:"span",className:v.loadingIndicator,"aria-hidden":!0,children:n.jsx(Sn,{size:"sm"})})]}),n.jsx(c,{as:"span",className:v.liveRegion,role:"status","aria-live":"polite","aria-atomic":"true",children:l}),oe&&!I&&!ue&&n.jsx(In,{children:n.jsx(An,{context:H.context,modal:!1,initialFocus:-1,children:n.jsx(Oa,{activeIndex:o,baseId:T,density:D,floatingProps:h(),floatingRef:de,floatingStyles:H.floatingStyles,getItemProps:w=>W(w),items:Ge,listboxClassName:v.listbox,listboxId:he,loading:we,loadingMore:We,loadingText:Qe,multiple:!!M,noOptionsText:Te,onScroll:$,onSelect:Y,query:z.trim(),selectedValues:ee,setItemRef:ke,statusClassName:v.status,value:m})})})]})};u.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{value:{required:!1,tsType:{name:"unknown"},description:""},defaultValue:{required:!1,tsType:{name:"unknown"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: AutocompleteValue<Multiple>,
  reason: AutocompleteChangeReason,
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"},{type:{name:"union",raw:`| 'select-option'
| 'remove-option'
| 'clear'
| 'create-option'`,elements:[{name:"literal",value:"'select-option'"},{name:"literal",value:"'remove-option'"},{name:"literal",value:"'clear'"},{name:"literal",value:"'create-option'"}]},name:"reason"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: AutocompleteValue<Multiple>,
  reason: AutocompleteChangeReason,
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"},{type:{name:"union",raw:`| 'select-option'
| 'remove-option'
| 'clear'
| 'create-option'`,elements:[{name:"literal",value:"'select-option'"},{name:"literal",value:"'remove-option'"},{name:"literal",value:"'clear'"},{name:"literal",value:"'create-option'"}]},name:"reason"}],return:{name:"void"}}},description:"@deprecated Use onValueChange."},inputValue:{required:!1,tsType:{name:"string"},description:""},defaultInputValue:{required:!1,tsType:{name:"string"},description:""},onInputValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: string,
  reason: AutocompleteInputChangeReason,
) => void`,signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"union",raw:"'input' | 'selection' | 'clear'",elements:[{name:"literal",value:"'input'"},{name:"literal",value:"'selection'"},{name:"literal",value:"'clear'"}]},name:"reason"}],return:{name:"void"}}},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: string,
  reason: AutocompleteInputChangeReason,
) => void`,signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"union",raw:"'input' | 'selection' | 'clear'",elements:[{name:"literal",value:"'input'"},{name:"literal",value:"'selection'"},{name:"literal",value:"'clear'"}]},name:"reason"}],return:{name:"void"}}},description:"@deprecated Use onInputValueChange."},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  open: boolean,
  reason: AutocompleteOpenChangeReason,
) => void`,signature:{arguments:[{type:{name:"boolean"},name:"open"},{type:{name:"union",raw:`| 'input'
| 'focus'
| 'keyboard'
| 'selection'
| 'escape'
| 'outside-press'`,elements:[{name:"literal",value:"'input'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'keyboard'"},{name:"literal",value:"'selection'"},{name:"literal",value:"'escape'"},{name:"literal",value:"'outside-press'"}]},name:"reason"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"Multiple"},description:""},allowCustomValue:{required:!1,tsType:{name:"boolean"},description:""},getCreateOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => string",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"string"}}},description:""},limitTags:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},valid:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},loadingMore:{required:!1,tsType:{name:"boolean"},description:""},hasMore:{required:!1,tsType:{name:"boolean"},description:""},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loadingText:{required:!1,tsType:{name:"ReactNode"},description:""},noOptionsText:{required:!1,tsType:{name:"ReactNode"},description:""}}};const fe=e=>null;fe.__autocompleteComponentType="Option";const ja=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],Ue=[...ja,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],d=(e=ja)=>e.map(a=>n.jsx(fe,{value:a.value,label:a.label,description:a.description},a.value)),Bo={title:"Components/Autocomplete",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},Ie={render:function(a){const[o,l]=r.useState(null);return n.jsx(c,{w:"xs",children:n.jsx(u,{...a,value:o,onValueChange:l,name:"technology",children:d()})})}},Ae={render:()=>n.jsx(c,{w:"xs",children:n.jsx(u,{name:"technology-filter","aria-label":"Filter technologies",children:d()})}),play:async({canvasElement:e})=>{const a=P(e),o=P(document.body),l=a.getByRole("combobox");await j.type(l,"typ"),await x(o.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await x(o.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await j.clear(l),await j.type(l,"workshop");const f=o.getByRole("option",{name:/storybook component workshop/i});await x(P(f).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Se={render:e=>n.jsx(c,{w:"xs",children:n.jsx(u,{...e,defaultValue:"react",name:"technology",children:d()})}),play:async({canvasElement:e})=>{const a=P(e).getByRole("combobox",{name:"Technology"});await j.click(a),await j.keyboard("P"),await x(a).toHaveValue("P")}},Oe={render:function(){const[a,o]=r.useState(["react","typescript","storybook"]);return n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,value:a,onValueChange:o,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:d()})})}},Ce={render:()=>n.jsx(c,{w:"224",children:n.jsx(u,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:d()})}),parameters:{controls:{disable:!0}}},je={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:d()})}),play:async({canvasElement:e})=>{const a=P(e);await x(a.getByText("+3")).toBeInTheDocument(),await j.click(a.getByRole("combobox")),await x(a.queryByText("+3")).not.toBeInTheDocument(),await x(a.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Ve={render:()=>n.jsx(c,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(e=>n.jsx(u,{size:e,defaultValue:"react",name:`technology-${e}`,"aria-label":`${e} autocomplete`,children:d()},e))}),parameters:{controls:{disable:!0}}},Ee={render:()=>n.jsxs(c,{display:"grid",gap:"12",w:"sm",children:[n.jsx(u,{name:"default","aria-label":"Default",children:d()}),n.jsx(u,{name:"valid","aria-label":"Valid",valid:!0,children:d()}),n.jsx(u,{name:"invalid","aria-label":"Invalid",invalid:!0,children:d()}),n.jsx(u,{name:"error","aria-label":"Error",error:!0,children:d()})]}),parameters:{controls:{disable:!0}}},qe={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:d()})}),play:async({canvasElement:e})=>{const a=P(e);await x(a.getByRole("combobox")).toBeDisabled(),await x(a.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},De={render:()=>n.jsx(c,{w:"sm",children:n.jsxs(u,{name:"framework","aria-label":"Framework",children:[n.jsx(fe,{value:"react",label:"React"}),n.jsx(fe,{value:"legacy",label:"Legacy framework",disabled:!0}),n.jsx(fe,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},Me={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,allowCustomValue:!0,defaultValue:["react"],name:"custom-stack","aria-label":"Technologies",placeholder:"Add a technology…",children:d()})}),play:async({canvasElement:e})=>{const a=P(e),o=a.getByRole("combobox");await j.type(o,"Svelte");const l=P(document.body);await x(l.getByRole("option",{name:/create “svelte”/i})).toBeInTheDocument(),await j.keyboard("{ArrowDown}{Enter}"),await x(a.getByRole("button",{name:"Remove Svelte"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Le={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},Fe={render:function(){const[a,o]=r.useState(()=>Ue.slice(0,8)),[l,f]=r.useState(!1),y=a.length<Ue.length,S=()=>{l||!y||(f(!0),window.setTimeout(()=>{o(E=>Ue.slice(0,E.length+4)),f(!1)},200))};return n.jsx(c,{w:"sm",children:n.jsx(u,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:y,loadingMore:l,onLoadMore:S,children:d(a)})})},parameters:{controls:{disable:!0}}},Pe={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:d()})}),parameters:{controls:{disable:!0}}},_e={render:function(){const[a,o]=r.useState("");return n.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[n.jsx(u,{inputValue:a,onInputValueChange:o,name:"controlled-input","aria-label":"Controlled query",children:d()}),n.jsx(c,{color:"text.subtle",children:`Query: ${a||"empty"}`})]})},parameters:{controls:{disable:!0}}},Ne={render:function(){const[a,o]=r.useState(!1);return n.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[n.jsx(vn,{onClick:()=>o(l=>!l),children:"Toggle suggestions"}),n.jsx(u,{open:a,onOpenChange:o,name:"controlled-open","aria-label":"Controlled suggestions",children:d()})]})},parameters:{controls:{disable:!0}}},He={name:"Ex: With FormField",render:()=>n.jsx(c,{w:"sm",children:n.jsx(Aa,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:n.jsx(u,{id:"primary-technology",name:"primaryTechnology",children:d()})})}),parameters:{controls:{disable:!0}}},Ke={name:"Ex: Technology Assignment",render:()=>n.jsx(c,{w:"md",children:n.jsx(Aa,{label:"Project stack",labelFor:"project-stack",helpText:"Search the supported catalog or create a project-specific value.",children:n.jsx(u,{id:"project-stack",name:"projectStack",multiple:!0,allowCustomValue:!0,defaultValue:["react","typescript"],placeholder:"Add technology…",children:d(Ue)})})}),parameters:{controls:{disable:!0}}},$e={name:"Ex: Keyboard Selection",render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{name:"keyboard","aria-label":"Keyboard selection",children:d()})}),play:async({canvasElement:e})=>{const o=P(e).getByRole("combobox");await j.click(o),await x(o).toHaveAttribute("aria-expanded","true"),await x(o).toHaveAttribute("aria-activedescendant"),await j.keyboard("{Enter}"),await x(o).toHaveValue("React")},parameters:{controls:{disable:!0}}},ze={name:"Ex: Keyboard Token Editing",render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:d()})}),play:async({canvasElement:e})=>{const a=P(e),o=a.getByRole("combobox"),l=a.getByRole("button",{name:"Remove TypeScript"});await j.click(o),await j.keyboard("{Backspace}"),await x(l).toHaveFocus(),await x(l).toBeInTheDocument(),await j.keyboard("{Backspace}"),await x(a.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}};var wt,xt,Tt;Ie.parameters={...Ie.parameters,docs:{...(wt=Ie.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | string[] | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} value={value} onValueChange={setValue} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(Tt=(xt=Ie.parameters)==null?void 0:xt.docs)==null?void 0:Tt.source}}};var kt,Bt,Rt;Ae.parameters={...Ae.parameters,docs:{...(kt=Ae.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Rt=(Bt=Ae.parameters)==null?void 0:Bt.docs)==null?void 0:Rt.source}}};var It,At,St;Se.parameters={...Se.parameters,docs:{...(It=Se.parameters)==null?void 0:It.docs,source:{originalSource:`{
  render: args => <Box w="xs">
      <Autocomplete {...args} defaultValue="react" name="technology">
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
}`,...(St=(At=Se.parameters)==null?void 0:At.docs)==null?void 0:St.source}}};var Ot,Ct,jt;Oe.parameters={...Oe.parameters,docs:{...(Ot=Oe.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  render: function MultipleRender() {
    const [value, setValue] = useState<string[]>(['react', 'typescript', 'storybook']);
    return <Box w="sm">
        <Autocomplete multiple value={value} onValueChange={setValue} name="stack" aria-label="Project stack" placeholder="Add technology…">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(jt=(Ct=Oe.parameters)==null?void 0:Ct.docs)==null?void 0:jt.source}}};var Vt,Et,qt;Ce.parameters={...Ce.parameters,docs:{...(Vt=Ce.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(qt=(Et=Ce.parameters)==null?void 0:Et.docs)==null?void 0:qt.source}}};var Dt,Mt,Lt;je.parameters={...je.parameters,docs:{...(Dt=je.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Lt=(Mt=je.parameters)==null?void 0:Mt.docs)==null?void 0:Lt.source}}};var Ft,Pt,_t;Ve.parameters={...Ve.parameters,docs:{...(Ft=Ve.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(_t=(Pt=Ve.parameters)==null?void 0:Pt.docs)==null?void 0:_t.source}}};var Nt,Ht,Kt;Ee.parameters={...Ee.parameters,docs:{...(Nt=Ee.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Kt=(Ht=Ee.parameters)==null?void 0:Ht.docs)==null?void 0:Kt.source}}};var $t,zt,Ut;qe.parameters={...qe.parameters,docs:{...($t=qe.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Ut=(zt=qe.parameters)==null?void 0:zt.docs)==null?void 0:Ut.source}}};var Wt,Qt,Gt;De.parameters={...De.parameters,docs:{...(Wt=De.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Gt=(Qt=De.parameters)==null?void 0:Qt.docs)==null?void 0:Gt.source}}};var Xt,Jt,Yt;Me.parameters={...Me.parameters,docs:{...(Xt=Me.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(Yt=(Jt=Me.parameters)==null?void 0:Jt.docs)==null?void 0:Yt.source}}};var Zt,ea,ta;Le.parameters={...Le.parameters,docs:{...(Zt=Le.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ta=(ea=Le.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,oa;Fe.parameters={...Fe.parameters,docs:{...(aa=Fe.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(oa=(na=Fe.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,sa,la;Pe.parameters={...Pe.parameters,docs:{...(ra=Pe.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(la=(sa=Pe.parameters)==null?void 0:sa.docs)==null?void 0:la.source}}};var ia,ca,ua;_e.parameters={..._e.parameters,docs:{...(ia=_e.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ua=(ca=_e.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var pa,da,ma;Ne.parameters={...Ne.parameters,docs:{...(pa=Ne.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  render: function ControlledOpenRender() {
    const [open, setOpen] = useState(false);
    return <Box display="grid" gap="8" w="sm">
        <Button onClick={() => setOpen(currentOpen => !currentOpen)}>
          Toggle suggestions
        </Button>
        <Autocomplete open={open} onOpenChange={setOpen} name="controlled-open" aria-label="Controlled suggestions">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ma=(da=Ne.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ga,ya,ba;He.parameters={...He.parameters,docs:{...(ga=He.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(ba=(ya=He.parameters)==null?void 0:ya.docs)==null?void 0:ba.source}}};var fa,va,ha;Ke.parameters={...Ke.parameters,docs:{...(fa=Ke.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(ha=(va=Ke.parameters)==null?void 0:va.docs)==null?void 0:ha.source}}};var wa,xa,Ta;$e.parameters={...$e.parameters,docs:{...(wa=$e.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(Ta=(xa=$e.parameters)==null?void 0:xa.docs)==null?void 0:Ta.source}}};var ka,Ba,Ra;ze.parameters={...ze.parameters,docs:{...(ka=ze.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(Ra=(Ba=ze.parameters)==null?void 0:Ba.docs)==null?void 0:Ra.source}}};const Ro=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing"];export{Me as AllowCustomValue,_e as ControlledInput,Ne as ControlledOpen,Ie as Default,qe as Disabled,De as DisabledOptions,Pe as EmptyResults,Ae as Filtering,Fe as InfiniteLoading,$e as KeyboardSelection,ze as KeyboardTokenEditing,je as LimitTags,Le as Loading,Oe as Multiple,Ce as MultipleLongValues,Se as Selected,Ve as Sizes,Ke as TechnologyAssignmentExample,Ee as ValidationStates,He as WithFormField,Ro as __namedExportsOrder,Bo as default};
