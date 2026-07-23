import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BKyFwriW.js";import{w as ne,u as F,e as V}from"./index-DPYJpPba.js";import{m as ln,c as cn,s as un,a as dn,g as pn,d as Ta,B as c,b as mn}from"./Box-D8syd76n.js";import{B as gn}from"./Button-BOfSUZKt.js";import{F as ka}from"./FormField-B0u84Tqi.js";import{u as yn,d as bn,s as fn,a as vn,g as hn,k as xn,b as wn,F as Tn,c as kn}from"./floating-CMrvfkt4.js";import{S as Bn}from"./Spinner-BUXJIvki.js";import{m as Rn}from"./menu-bfhB-Iew.js";import{L as In,b as An}from"./ListItem-Cn5IbNKt.js";import{C as Sn}from"./ChipGroup-D3G6jUbY.js";import{u as Cn}from"./FieldContext-D6URyQos.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CLSA3e9P.js";import"./IconConfig-CuyDtWEJ.js";import"./Label-Bb6hdk3t.js";import"./Text-OMCUSOol.js";import"./Tooltip-CwX3MQ24.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Divider-KBSxUyGs.js";import"./Checkbox-CiUwpcUt.js";import"./Toggle-CUhhVt_e.js";const Ba={size:"md"},On=[],Vn=[["root","autocomplete__root"],["control","autocomplete__control"],["valueContainer","autocomplete__valueContainer"],["input","autocomplete__input"],["token","autocomplete__token"],["overflowIndicator","autocomplete__overflowIndicator"],["loadingIndicator","autocomplete__loadingIndicator"],["listbox","autocomplete__listbox"],["status","autocomplete__status"],["liveRegion","autocomplete__liveRegion"]],jn=Vn.map(([e,a])=>[e,dn(a,Ba,pn(On,e))]),qn=ln((e={})=>Object.fromEntries(jn.map(([a,o])=>[a,o.recipeFn(e)]))),bt=["size"],En=e=>({...Ba,...cn(e)}),Mn=Object.assign(qn,{__recipe__:!1,__name__:"autocomplete",raw:e=>e,classNameMap:{},variantKeys:bt,variantMap:{size:["sm","md","lg","xl"]},splitVariantProps(e){return un(e,bt)},getVariantProps:En}),Ra=e=>{const{activeIndex:a,baseId:o,density:l,floatingProps:m,floatingRef:d,floatingStyles:w,getItemProps:S,items:T,listboxClassName:k,listboxId:v,loading:P,loadingMore:K,loadingText:g,multiple:E,noOptionsText:I,onScroll:_,onSelect:$,query:N,selectedValues:h,setItemRef:U,statusClassName:H,value:C}=e,O=Rn({density:l}),B=P&&T.length===0,A=!P&&T.length===0;return n.jsxs(In,{ref:d,id:v,role:"listbox","aria-label":"Suggestions","aria-multiselectable":E||void 0,"aria-busy":P||K||void 0,density:l,query:N,highlightMatches:!0,className:Ta(O.wrapper,k),style:w,onScroll:_,...m,children:[T.map((f,j)=>{const X=E?h.includes(f.value):C===f.value;return n.jsx(An,{id:`${o}-option-${j}`,ref:z=>U(j,z),disabled:f.disabled,selected:X,density:l,variant:E?"checkbox":"default",label:f.label,description:f.description,iconBefore:f.iconLeft,iconAfter:f.iconRight,highlightMatches:!f.created,highlightMatchMode:"fuzzy",tabIndex:-1,bg:a===j?"bg.neutral.hovered":void 0,"data-active":a===j||void 0,...S({onMouseDown:z=>z.preventDefault(),onClick:()=>{f.disabled||$(f)}})},`${f.created?"create":"option"}-${f.value}`)}),B&&n.jsx(c,{className:H,role:"status",children:g}),A&&n.jsx(c,{className:H,role:"status",children:I}),K&&n.jsx(c,{className:H,role:"status",children:g})]})};Ra.__docgenInfo={description:"",methods:[],displayName:"AutocompleteListbox",props:{activeIndex:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},baseId:{required:!0,tsType:{name:"string"},description:""},density:{required:!0,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},floatingProps:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},floatingRef:{required:!0,tsType:{name:"RefCallback",elements:[{name:"HTMLDivElement"}],raw:"RefCallback<HTMLDivElement>"},description:""},floatingStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},getItemProps:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: HTMLProps<HTMLElement>) => Record<string, unknown>",signature:{arguments:[{type:{name:"HTMLProps",elements:[{name:"HTMLElement"}],raw:"HTMLProps<HTMLElement>"},name:"props"}],return:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}}},description:""},items:{required:!0,tsType:{name:"unknown"},description:""},listboxClassName:{required:!0,tsType:{name:"string"},description:""},listboxId:{required:!0,tsType:{name:"string"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},loadingMore:{required:!0,tsType:{name:"boolean"},description:""},loadingText:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},noOptionsText:{required:!0,tsType:{name:"ReactNode"},description:""},onScroll:{required:!0,tsType:{name:"UIEventHandler",elements:[{name:"HTMLDivElement"}],raw:"UIEventHandler<HTMLDivElement>"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOptionData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
  created?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"iconLeft",value:{name:"IconNamesList",required:!1}},{key:"iconRight",value:{name:"IconNamesList",required:!1}},{key:"created",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},query:{required:!0,tsType:{name:"string"},description:""},selectedValues:{required:!0,tsType:{name:"unknown"},description:""},setItemRef:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, node: HTMLElement | null) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"node"}],return:{name:"void"}}},description:""},statusClassName:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""}}};const Ia=e=>{const{className:a,disabled:o,dismissButtonRef:l,label:m,onDismiss:d,onKeyDown:w,size:S}=e;return n.jsx(Sn,{className:a,size:S,dismissable:!0,disabled:o,dismissButtonRef:l,dismissButtonTabIndex:-1,onDismiss:d,onDismissKeyDown:w,children:m})};Ia.__docgenInfo={description:"",methods:[],displayName:"AutocompleteToken",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dismissButtonRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""}}};const Ln=e=>e?[]:null,Dn=({value:e,defaultValue:a,onValueChange:o,inputValue:l,defaultInputValue:m="",onInputValueChange:d,open:w,defaultOpen:S=!1,onOpenChange:T,multiple:k=!1,selectedOptionLabel:v,disabled:P=!1,readOnly:K=!1})=>{const[g,E]=r.useState(()=>a!==void 0?a:Ln(k)),[I,_]=r.useState(m),[$,N]=r.useState(S),h=e!==void 0?e:g,U=l!==void 0?l:I,H=w!==void 0?w:$,C=P||K,O=r.useCallback((i,p)=>{e===void 0&&E(i),o==null||o(i,p)},[e,o]),B=r.useCallback((i,p)=>{l===void 0&&_(i),d==null||d(i,p)},[l,d]),A=r.useCallback((i,p)=>{w===void 0&&N(i),T==null||T(i,p)},[w,T]),f=r.useCallback(i=>{C||(B(i,"input"),!k&&typeof h=="string"&&i!==v&&O(null,"clear"),A(!0,"input"))},[B,A,O,C,k,v,h]),j=r.useCallback((i,p="select-option")=>{if(!(C||i.disabled)){if(k){const W=Array.isArray(h)?h:[];if(W.includes(i.value))return;O([...W,i.value],p),B("","selection"),A(!0,"selection");return}h!==i.value&&(O(i.value,p),B(i.label,"selection"),A(!1,"selection"))}},[B,A,O,C,k,h]),X=r.useCallback(i=>{const p=i.trim();p&&j({value:p,label:p},"create-option")},[j]),z=r.useCallback(i=>{if(!C){if(k){const p=Array.isArray(h)?h:[];if(!p.includes(i))return;O(p.filter(W=>W!==i),"remove-option");return}h===i&&(O(null,"remove-option"),B("","clear"))}},[B,O,C,k,h]),J=r.useCallback(i=>{C||A(!0,i)},[A,C]),Y=r.useCallback(i=>{A(!1,i)},[A]);return{value:h,inputValue:U,open:H,setInputValue:f,selectOption:j,createOption:X,removeOption:z,openPopup:J,closePopup:Y}},Fn="__autocompleteComponentType",be=e=>e.trim().toLowerCase(),Pn=e=>[e.label,e.description].filter(Boolean).join(" ").trim(),_n=(e,a)=>{const o=be(a);return o?be(e.value)===o||be(e.label)===o:!1},Nn=(e,a)=>{const o=be(a);if(!o)return!0;const l=be(e);if(l.includes(o))return!0;let m=0;for(let d=0;d<o.length;d+=1){const w=o[d];let S=!1;for(;m<l.length;){if(l[m]===w){S=!0,m+=1;break}m+=1}if(!S)return!1}return!0},Hn=e=>r.isValidElement(e)&&typeof e.type=="function"&&e.type[Fn]==="Option",zn=e=>r.Children.toArray(e).reduce((a,o)=>(Hn(o)&&a.push({value:o.props.value,label:o.props.label,disabled:o.props.disabled,description:o.props.description,iconLeft:o.props.iconLeft,iconRight:o.props.iconRight,created:!1}),a),[]),ft=(...e)=>{const a=new Map;return e.forEach(o=>{o.forEach(l=>{a.has(l.value)||a.set(l.value,l)})}),Array.from(a.values())},Kn=(e,a)=>a?Array.isArray(e)?e:e?[e]:[]:typeof e=="string"?[e]:[],vt=e=>e.findIndex(a=>!a.disabled),$n=32,Un=e=>`Create “${e}”`,st={sm:"sm",md:"sm",lg:"md",xl:"md"},Wn=e=>{if(!e||typeof e=="string")return st[e??"md"];const o=(Array.isArray(e)?e:Object.values(e)).find(l=>typeof l=="string"&&l in st);return o?st[o]:"sm"},Qn=e=>e==="escape-key"?"escape":"outside-press",Gn=e=>{var ct,ut,dt;const a=Cn(),{value:o,defaultValue:l,onValueChange:m,onChange:d,inputValue:w,defaultInputValue:S,onInputValueChange:T,onInputChange:k,open:v,defaultOpen:P,onOpenChange:K,multiple:g=!1,allowCustomValue:E=!1,getCreateOptionLabel:I=Un,limitTags:_,placeholder:$="Select...",placement:N="bottom-start",offset:h=4,children:U,id:H,name:C,disabled:O,readOnly:B=!1,error:A,valid:f=!1,invalid:j,size:X,density:z="compact",loading:J=!1,loadingMore:Y=!1,hasMore:i=!1,onLoadMore:p,loadingText:W="Loading options…",noOptionsText:ve="No options","aria-label":oe,"aria-labelledby":he,"aria-describedby":xe,"aria-required":Ue,...We}=e,M=O??(a==null?void 0:a.disabled)??!1,we=A??(a==null?void 0:a.error)??!1,Qe=j??(a==null?void 0:a.invalid)??!1,Te=X??(a==null?void 0:a.size)??"md",[Ge,Xe]=mn(We),ce=r.useId(),ue=H??`autocomplete-${ce}`,Je=ue,Ye=`${ue}-listbox`,Z=r.useRef(null),de=r.useRef(null),ke=r.useRef(null),Be=r.useRef([]),Re=r.useRef([]),[Ze,x]=r.useState(null),[pe,ee]=r.useState(!1),[re,Sa]=r.useState([]),[Ca,et]=r.useState(""),lt=r.useMemo(()=>zn(U),[U]),te=r.useMemo(()=>ft(lt,re),[lt,re]),me=r.useMemo(()=>new Map(te.map(t=>[t.value,t])),[te]),tt=o??l,Oa=typeof tt=="string"?((ct=me.get(tt))==null?void 0:ct.label)??tt:"",Va=r.useCallback((t,s)=>{m==null||m(t,s),d==null||d(t,s)},[d,m]),ja=r.useCallback((t,s)=>{T==null||T(t,s),k==null||k(t,s)},[k,T]),y=Dn({value:o,defaultValue:l,onValueChange:Va,inputValue:w,defaultInputValue:S??Oa,onInputValueChange:ja,open:v,defaultOpen:P,onOpenChange:K,multiple:g,selectedOptionLabel:typeof o=="string"?((ut=me.get(o))==null?void 0:ut.label)??o:void 0,disabled:M,readOnly:B}),q=y.value,se=y.open,L=y.inputValue,le=r.useMemo(()=>Kn(q,!!g),[q,g]),qa=r.useMemo(()=>le.map(t=>{var s;return((s=me.get(t))==null?void 0:s.label)??t}),[me,le]),at=r.useMemo(()=>{const t=L.trim();return t?te.filter(s=>Nn(Pn(s),t)):te},[L,te]),nt=r.useMemo(()=>{const t=L.trim(),s=te.some(R=>_n(R,t));return!E||!t||s?null:{value:t,label:I(t),created:!0}},[E,L,I,te]),Q=r.useMemo(()=>nt?[...at,nt]:at,[nt,at]),Ea=r.useMemo(()=>Q.flatMap((t,s)=>t.disabled?s:[]),[Q]),it=vt(Q),ge=se?Ze??(it>=0?it:null):null,Ma=r.useCallback((t,s,R)=>{if(t){y.openPopup("keyboard");return}x(null),y.closePopup(Qn(R))},[y]),ie=yn({open:se,onOpenChange:Ma,placement:N,middleware:bn({offset:h,extras:[fn({apply({rects:t,elements:s}){s.floating.style.minWidth=`${t.reference.width}px`}})]})}),La=vn(ie.context,{enabled:!M}),Da=hn(ie.context,{role:"listbox"}),Fa=xn(ie.context,{listRef:Be,activeIndex:ge,onNavigate:x,disabledIndices:Ea,loop:!0,virtual:!0,focusItemOnOpen:!1}),{getReferenceProps:Pa,getFloatingProps:_a,getItemProps:Na}=wn([La,Da,Fa]),Ha=Mn({size:Te}),za=Wn(Te),Ka=!!g&&typeof _=="number"&&_>=0&&!pe?_:le.length,D=le.slice(0,Ka),$a=le.length-D.length,Ua=typeof q=="string"?((dt=me.get(q))==null?void 0:dt.label)??q:"",Wa=!g&&typeof q=="string"&&!L?Ua:L,G=r.useCallback(()=>{var t;(t=ke.current)==null||t.focus()},[]),ae=r.useCallback(t=>{var s;(s=Re.current[t])==null||s.focus()},[]),ot=r.useCallback(t=>{if(!t.disabled){if(t.created){const s={...t,label:t.value};Sa(R=>ft(R,[s])),y.selectOption(s,"create-option"),et(`${t.value} created and selected.`)}else y.selectOption(t),et(`${t.label} selected.`);x(null),requestAnimationFrame(G)}},[G,y]),rt=r.useCallback((t,s)=>{y.removeOption(t),et(`${s} removed.`)},[y]),Qa=r.useCallback((t,s,R,ye)=>{if(t.key==="ArrowLeft"){t.preventDefault(),ae(s>0?s-1:D.length-1);return}if(t.key==="ArrowRight"){t.preventDefault(),s<D.length-1?ae(s+1):G();return}if(t.key==="Escape"){t.preventDefault(),G();return}(t.key==="Backspace"||t.key==="Delete")&&(t.preventDefault(),rt(R,ye),requestAnimationFrame(()=>{s>0?ae(s-1):G()}))},[G,ae,rt,D.length]),Ga=r.useCallback(t=>{x(null),y.setInputValue(t.target.value)},[y]),Xa=r.useCallback(t=>{ee(!0),y.openPopup("focus"),!g&&typeof q=="string"&&t.currentTarget.select()},[q,g,y]),Ja=r.useCallback(t=>{!g&&typeof q=="string"&&document.activeElement!==t.currentTarget&&(t.preventDefault(),t.currentTarget.focus(),t.currentTarget.select())},[q,g]),Ya=r.useCallback(t=>{if(!(M||B)){if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(!se){t.preventDefault(),y.openPopup("keyboard");const R=(t.key==="ArrowDown"?1:-1)===1?vt(Q):Q.findLastIndex(ye=>!ye.disabled);x(R>=0?R:null)}return}if(t.key==="Enter"&&ge!==null){const s=Q[ge];s&&(t.preventDefault(),ot(s));return}if(t.key==="Escape"&&se){t.preventDefault(),x(null),y.closePopup("escape");return}if((t.key==="Backspace"||t.key==="Delete")&&L.length===0&&g&&D.length>0){t.preventDefault(),ae(D.length-1);return}t.key==="ArrowLeft"&&L.length===0&&g&&D.length>0&&(t.preventDefault(),ae(D.length-1))}},[L.length,M,ae,ot,se,g,Q,B,ge,y,D.length]),Za=r.useCallback(t=>{const s=t.relatedTarget;requestAnimationFrame(()=>{var pt,mt,gt,yt;const R=document.activeElement,ye=s&&((pt=Z.current)==null?void 0:pt.contains(s))||R&&((mt=Z.current)==null?void 0:mt.contains(R)),sn=s&&((gt=de.current)==null?void 0:gt.contains(s))||R&&((yt=de.current)==null?void 0:yt.contains(R));!ye&&!sn&&(ee(!1),x(null),y.closePopup("outside-press"))})},[y]),en=r.useCallback(()=>{ee(!0)},[]),tn=r.useCallback(t=>{const s=t.target;s instanceof Element&&s.closest("button, input")!==null||(t.preventDefault(),G())},[G]),an=r.useCallback(t=>{if(!i||J||Y||M||!p)return;const s=t.currentTarget;s.scrollHeight-s.scrollTop-s.clientHeight<=$n&&p()},[M,i,J,Y,p]),nn=r.useCallback((t,s)=>{Re.current[t]=s},[]),on=r.useCallback((t,s)=>{Be.current[t]=s},[]),rn=r.useCallback(t=>{de.current=t,ie.refs.setFloating(t)},[ie.refs]);return{activeIndex:ge,announcement:Ca,ariaDescribedBy:xe,ariaLabel:oe,ariaLabelledBy:he,ariaRequired:Ue,baseId:ue,chipSize:za,classes:Ha,className:Ge,currentInputValue:L,currentValue:q,density:z,disabled:M,displayedInputValue:Wa,error:we,floating:ie,getFloatingProps:_a,getItemProps:Na,getReferenceProps:Pa,handleBlurCapture:Za,handleControlMouseDown:tn,handleFocusCapture:en,handleInputChange:Ga,handleInputFocus:Xa,handleInputKeyDown:Ya,handleInputMouseDown:Ja,handleListScroll:an,handleOptionSelect:ot,handleTokenKeyDown:Qa,hiddenTagCount:$a,inputId:Je,inputRef:ke,invalid:Qe,isOpen:se,listboxId:Ye,loading:J,loadingMore:Y,loadingText:W,multiple:g,name:C,navigationItems:Q,noOptionsText:ve,otherProps:Xe,placeholder:$,readOnly:B,removeSelectedValue:rt,rootRef:Z,selectedLabels:qa,selectedValues:le,setFloatingRef:rn,setItemRef:on,setTokenRef:nn,valid:f,visibleSelectedValues:D}},u=e=>{const a=Gn(e),{activeIndex:o,announcement:l,ariaDescribedBy:m,ariaLabel:d,ariaLabelledBy:w,ariaRequired:S,baseId:T,chipSize:k,classes:v,className:P,currentInputValue:K,currentValue:g,density:E,disabled:I,displayedInputValue:_,error:$,floating:N,getFloatingProps:h,getItemProps:U,getReferenceProps:H,handleBlurCapture:C,handleControlMouseDown:O,handleFocusCapture:B,handleInputChange:A,handleInputFocus:f,handleInputKeyDown:j,handleInputMouseDown:X,handleListScroll:z,handleOptionSelect:J,handleTokenKeyDown:Y,hiddenTagCount:i,inputId:p,inputRef:W,invalid:ve,isOpen:oe,listboxId:he,loading:xe,loadingMore:Ue,loadingText:We,multiple:M,name:we,navigationItems:Qe,noOptionsText:Te,otherProps:Ge,placeholder:Xe,readOnly:ce,removeSelectedValue:ue,rootRef:Je,selectedLabels:Ye,selectedValues:Z,setFloatingRef:de,setItemRef:ke,setTokenRef:Be,valid:Re,visibleSelectedValues:Ze}=a;return n.jsxs(c,{ref:Je,className:Ta(v.root,P),"data-disabled":I||void 0,"aria-disabled":I||void 0,onFocusCapture:B,onBlurCapture:C,...Ge,children:[we&&Z.map(x=>n.jsx(c,{as:"input",type:"hidden",name:we,value:x,disabled:I},`hidden-${x}`)),n.jsxs(c,{ref:N.refs.setReference,className:v.control,"data-open":oe||void 0,"data-disabled":I||void 0,"data-error":$||void 0,"data-valid":Re||void 0,"data-invalid":ve||void 0,onMouseDown:O,children:[n.jsxs(c,{className:v.valueContainer,children:[M&&Ze.map((x,pe)=>{const ee=Ye[pe]??x;return n.jsx(Ia,{className:v.token,size:k,label:ee,disabled:I||ce,dismissButtonRef:re=>Be(pe,re),onDismiss:()=>ue(x,ee),onKeyDown:re=>Y(re,pe,x,ee)},x)}),i>0&&n.jsx(c,{as:"span",className:v.overflowIndicator,"aria-label":`${i} more selected`,children:`+${i}`}),n.jsx(c,{as:"input",id:p,ref:W,type:"text",role:"combobox","aria-expanded":oe,"aria-controls":he,"aria-autocomplete":"list","aria-activedescendant":oe&&o!==null?`${T}-option-${o}`:void 0,"aria-haspopup":"listbox","aria-label":d,"aria-labelledby":w,"aria-describedby":m,"aria-required":S,"aria-disabled":I||void 0,"aria-invalid":$||ve||void 0,disabled:I,readOnly:ce,placeholder:Z.length===0?Xe:void 0,value:_,className:v.input,onChange:A,...H({onFocus:f,onKeyDown:j,onMouseDown:X}),autoComplete:"off"})]}),xe&&n.jsx(c,{as:"span",className:v.loadingIndicator,"aria-hidden":!0,children:n.jsx(Bn,{size:"sm"})})]}),n.jsx(c,{as:"span",className:v.liveRegion,role:"status","aria-live":"polite","aria-atomic":"true",children:l}),oe&&!I&&!ce&&n.jsx(Tn,{children:n.jsx(kn,{context:N.context,modal:!1,initialFocus:-1,children:n.jsx(Ra,{activeIndex:o,baseId:T,density:E,floatingProps:h(),floatingRef:de,floatingStyles:N.floatingStyles,getItemProps:x=>U(x),items:Qe,listboxClassName:v.listbox,listboxId:he,loading:xe,loadingMore:Ue,loadingText:We,multiple:!!M,noOptionsText:Te,onScroll:z,onSelect:J,query:K,selectedValues:Z,setItemRef:ke,statusClassName:v.status,value:g})})})]})};u.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{value:{required:!1,tsType:{name:"unknown"},description:""},defaultValue:{required:!1,tsType:{name:"unknown"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
| 'outside-press'`,elements:[{name:"literal",value:"'input'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'keyboard'"},{name:"literal",value:"'selection'"},{name:"literal",value:"'escape'"},{name:"literal",value:"'outside-press'"}]},name:"reason"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"Multiple"},description:""},allowCustomValue:{required:!1,tsType:{name:"boolean"},description:""},getCreateOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => string",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"string"}}},description:""},limitTags:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},valid:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},loadingMore:{required:!1,tsType:{name:"boolean"},description:""},hasMore:{required:!1,tsType:{name:"boolean"},description:""},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loadingText:{required:!1,tsType:{name:"ReactNode"},description:""},noOptionsText:{required:!1,tsType:{name:"ReactNode"},description:""}}};const fe=e=>null;fe.__autocompleteComponentType="Option";const Aa=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],$e=[...Aa,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],b=(e=Aa)=>e.map(a=>n.jsx(fe,{value:a.value,label:a.label,description:a.description},a.value)),wo={title:"Components/Autocomplete",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},Ie={render:function(a){const[o,l]=r.useState(null);return n.jsx(c,{w:"xs",children:n.jsx(u,{...a,value:o,onValueChange:l,name:"technology",children:b()})})}},Ae={render:e=>n.jsx(c,{w:"xs",children:n.jsx(u,{...e,defaultValue:"react",name:"technology",children:b()})}),play:async({canvasElement:e})=>{const a=ne(e).getByRole("combobox",{name:"Technology"});await F.click(a),await F.keyboard("P"),await V(a).toHaveValue("P")}},Se={render:function(){const[a,o]=r.useState(["react","typescript","storybook"]);return n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,value:a,onValueChange:o,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:b()})})}},Ce={render:()=>n.jsx(c,{w:"224",children:n.jsx(u,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:b()})}),parameters:{controls:{disable:!0}}},Oe={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:b()})}),play:async({canvasElement:e})=>{const a=ne(e);await V(a.getByText("+3")).toBeInTheDocument(),await F.click(a.getByRole("combobox")),await V(a.queryByText("+3")).not.toBeInTheDocument(),await V(a.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Ve={render:()=>n.jsx(c,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(e=>n.jsx(u,{size:e,defaultValue:"react",name:`technology-${e}`,"aria-label":`${e} autocomplete`,children:b()},e))}),parameters:{controls:{disable:!0}}},je={render:()=>n.jsxs(c,{display:"grid",gap:"12",w:"sm",children:[n.jsx(u,{name:"default","aria-label":"Default",children:b()}),n.jsx(u,{name:"valid","aria-label":"Valid",valid:!0,children:b()}),n.jsx(u,{name:"invalid","aria-label":"Invalid",invalid:!0,children:b()}),n.jsx(u,{name:"error","aria-label":"Error",error:!0,children:b()})]}),parameters:{controls:{disable:!0}}},qe={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:b()})}),play:async({canvasElement:e})=>{const a=ne(e);await V(a.getByRole("combobox")).toBeDisabled(),await V(a.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},Ee={render:()=>n.jsx(c,{w:"sm",children:n.jsxs(u,{name:"framework","aria-label":"Framework",children:[n.jsx(fe,{value:"react",label:"React"}),n.jsx(fe,{value:"legacy",label:"Legacy framework",disabled:!0}),n.jsx(fe,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},Me={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,allowCustomValue:!0,defaultValue:["react"],name:"custom-stack","aria-label":"Technologies",placeholder:"Add a technology…",children:b()})}),play:async({canvasElement:e})=>{const a=ne(e),o=a.getByRole("combobox");await F.type(o,"Svelte");const l=ne(document.body);await V(l.getByRole("option",{name:/create “svelte”/i})).toBeInTheDocument(),await F.keyboard("{ArrowDown}{Enter}"),await V(a.getByRole("button",{name:"Remove Svelte"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Le={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},De={render:function(){const[a,o]=r.useState(()=>$e.slice(0,8)),[l,m]=r.useState(!1),d=a.length<$e.length,w=()=>{l||!d||(m(!0),window.setTimeout(()=>{o(S=>$e.slice(0,S.length+4)),m(!1)},200))};return n.jsx(c,{w:"sm",children:n.jsx(u,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:d,loadingMore:l,onLoadMore:w,children:b(a)})})},parameters:{controls:{disable:!0}}},Fe={render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:b()})}),parameters:{controls:{disable:!0}}},Pe={render:function(){const[a,o]=r.useState("");return n.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[n.jsx(u,{inputValue:a,onInputValueChange:o,name:"controlled-input","aria-label":"Controlled query",children:b()}),n.jsx(c,{color:"text.subtle",children:`Query: ${a||"empty"}`})]})},parameters:{controls:{disable:!0}}},_e={render:function(){const[a,o]=r.useState(!1);return n.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[n.jsx(gn,{onClick:()=>o(l=>!l),children:"Toggle suggestions"}),n.jsx(u,{open:a,onOpenChange:o,name:"controlled-open","aria-label":"Controlled suggestions",children:b()})]})},parameters:{controls:{disable:!0}}},Ne={name:"Ex: With FormField",render:()=>n.jsx(c,{w:"sm",children:n.jsx(ka,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:n.jsx(u,{id:"primary-technology",name:"primaryTechnology",children:b()})})}),parameters:{controls:{disable:!0}}},He={name:"Ex: Technology Assignment",render:()=>n.jsx(c,{w:"md",children:n.jsx(ka,{label:"Project stack",labelFor:"project-stack",helpText:"Search the supported catalog or create a project-specific value.",children:n.jsx(u,{id:"project-stack",name:"projectStack",multiple:!0,allowCustomValue:!0,defaultValue:["react","typescript"],placeholder:"Add technology…",children:b($e)})})}),parameters:{controls:{disable:!0}}},ze={name:"Ex: Keyboard Selection",render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{name:"keyboard","aria-label":"Keyboard selection",children:b()})}),play:async({canvasElement:e})=>{const o=ne(e).getByRole("combobox");await F.click(o),await V(o).toHaveAttribute("aria-expanded","true"),await V(o).toHaveAttribute("aria-activedescendant"),await F.keyboard("{Enter}"),await V(o).toHaveValue("React")},parameters:{controls:{disable:!0}}},Ke={name:"Ex: Keyboard Token Editing",render:()=>n.jsx(c,{w:"sm",children:n.jsx(u,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:b()})}),play:async({canvasElement:e})=>{const a=ne(e),o=a.getByRole("combobox"),l=a.getByRole("button",{name:"Remove TypeScript"});await F.click(o),await F.keyboard("{Backspace}"),await V(l).toHaveFocus(),await V(l).toBeInTheDocument(),await F.keyboard("{Backspace}"),await V(a.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}};var ht,xt,wt;Ie.parameters={...Ie.parameters,docs:{...(ht=Ie.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | string[] | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} value={value} onValueChange={setValue} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(wt=(xt=Ie.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Tt,kt,Bt;Ae.parameters={...Ae.parameters,docs:{...(Tt=Ae.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Bt=(kt=Ae.parameters)==null?void 0:kt.docs)==null?void 0:Bt.source}}};var Rt,It,At;Se.parameters={...Se.parameters,docs:{...(Rt=Se.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  render: function MultipleRender() {
    const [value, setValue] = useState<string[]>(['react', 'typescript', 'storybook']);
    return <Box w="sm">
        <Autocomplete multiple value={value} onValueChange={setValue} name="stack" aria-label="Project stack" placeholder="Add technology…">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(At=(It=Se.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var St,Ct,Ot;Ce.parameters={...Ce.parameters,docs:{...(St=Ce.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Ot=(Ct=Ce.parameters)==null?void 0:Ct.docs)==null?void 0:Ot.source}}};var Vt,jt,qt;Oe.parameters={...Oe.parameters,docs:{...(Vt=Oe.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(qt=(jt=Oe.parameters)==null?void 0:jt.docs)==null?void 0:qt.source}}};var Et,Mt,Lt;Ve.parameters={...Ve.parameters,docs:{...(Et=Ve.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Lt=(Mt=Ve.parameters)==null?void 0:Mt.docs)==null?void 0:Lt.source}}};var Dt,Ft,Pt;je.parameters={...je.parameters,docs:{...(Dt=je.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Pt=(Ft=je.parameters)==null?void 0:Ft.docs)==null?void 0:Pt.source}}};var _t,Nt,Ht;qe.parameters={...qe.parameters,docs:{...(_t=qe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Ht=(Nt=qe.parameters)==null?void 0:Nt.docs)==null?void 0:Ht.source}}};var zt,Kt,$t;Ee.parameters={...Ee.parameters,docs:{...(zt=Ee.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...($t=(Kt=Ee.parameters)==null?void 0:Kt.docs)==null?void 0:$t.source}}};var Ut,Wt,Qt;Me.parameters={...Me.parameters,docs:{...(Ut=Me.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Qt=(Wt=Me.parameters)==null?void 0:Wt.docs)==null?void 0:Qt.source}}};var Gt,Xt,Jt;Le.parameters={...Le.parameters,docs:{...(Gt=Le.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Jt=(Xt=Le.parameters)==null?void 0:Xt.docs)==null?void 0:Jt.source}}};var Yt,Zt,ea;De.parameters={...De.parameters,docs:{...(Yt=De.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(ea=(Zt=De.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;Fe.parameters={...Fe.parameters,docs:{...(ta=Fe.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(na=(aa=Fe.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var oa,ra,sa;Pe.parameters={...Pe.parameters,docs:{...(oa=Pe.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(sa=(ra=Pe.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var la,ia,ca;_e.parameters={..._e.parameters,docs:{...(la=_e.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ca=(ia=_e.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var ua,da,pa;Ne.parameters={...Ne.parameters,docs:{...(ua=Ne.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(pa=(da=Ne.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ma,ga,ya;He.parameters={...He.parameters,docs:{...(ma=He.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(ya=(ga=He.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var ba,fa,va;ze.parameters={...ze.parameters,docs:{...(ba=ze.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(fa=ze.parameters)==null?void 0:fa.docs)==null?void 0:va.source}}};var ha,xa,wa;Ke.parameters={...Ke.parameters,docs:{...(ha=Ke.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(wa=(xa=Ke.parameters)==null?void 0:xa.docs)==null?void 0:wa.source}}};const To=["Default","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing"];export{Me as AllowCustomValue,Pe as ControlledInput,_e as ControlledOpen,Ie as Default,qe as Disabled,Ee as DisabledOptions,Fe as EmptyResults,De as InfiniteLoading,ze as KeyboardSelection,Ke as KeyboardTokenEditing,Oe as LimitTags,Le as Loading,Se as Multiple,Ce as MultipleLongValues,Ae as Selected,Ve as Sizes,He as TechnologyAssignmentExample,je as ValidationStates,Ne as WithFormField,To as __namedExportsOrder,wo as default};
