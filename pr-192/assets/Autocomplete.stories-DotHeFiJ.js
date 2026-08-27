import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BKyFwriW.js";import{w as k,u as v,e as l}from"./index-DPYJpPba.js";import{m as bo,c as yo,s as go,a as ho,g as vo,d as Ea,B as u,b as fo,e as xo}from"./dsComponent-Chqat_43.js";import{B as wo}from"./Button-CHQvsDSE.js";import{F as Da}from"./FormField-BVlqItDA.js";import{u as Bo,c as To,s as ko,b as Ro,d as Ao,e as Io,g as Oo,F as So,D as Co,h as Eo}from"./Tooltip-Dq2_w23H.js";import{d as Do}from"./dsPart-nnoJM9m6.js";import{S as jo}from"./Spinner-DBiMU6GJ.js";import{m as Vo}from"./menu-levquAML.js";import{I as Lo}from"./Icon-8ZK6Q4Mp.js";import{L as Mo,a as Fo}from"./ListItem-ibDez8pV.js";import{C as Ho}from"./Chip-BRia20oj.js";import{u as qo}from"./FieldContext-D6URyQos.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconConfig-DhZIRpXD.js";import"./Label-C45KaWUT.js";import"./Text-d1FwRHEe.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-Cwu-DE_2.js";import"./Checkbox-edG__xm_.js";import"./Divider-CDS0Pv-n.js";import"./Toggle-D98SoxpI.js";const ja={size:"md"},Po=[],No=[["root","autocomplete__root"],["control","autocomplete__control"],["valueContainer","autocomplete__valueContainer"],["input","autocomplete__input"],["token","autocomplete__token"],["overflowIndicator","autocomplete__overflowIndicator"],["loadingIndicator","autocomplete__loadingIndicator"],["listbox","autocomplete__listbox"],["status","autocomplete__status"],["liveRegion","autocomplete__liveRegion"]],_o=No.map(([e,t])=>[e,ho(t,ja,vo(Po,e))]),$o=bo((e={})=>Object.fromEntries(_o.map(([t,n])=>[t,n.recipeFn(e)]))),gt=["size"],zo=e=>({...ja,...yo(e)}),Ko=Object.assign($o,{__recipe__:!1,__name__:"autocomplete",raw:e=>e,classNameMap:{},variantKeys:gt,variantMap:{size:["sm","md","lg","xl"]},splitVariantProps(e){return go(e,gt)},getVariantProps:zo}),Va=e=>{const{activeIndex:t,baseId:n,density:i,floatingProps:c,floatingRef:p,floatingStyles:b,getItemProps:E,items:x,listboxClassName:R,listboxId:A,loading:$,loadingMore:z,loadingText:S,multiple:M,noOptionsText:O,onScroll:F,onSelect:K,query:T,selectedValues:Z,setItemRef:Q,statusClassName:I,value:C}=e,D=Vo({density:i}),w=$&&x.length===0,ee=!$&&x.length===0,U=new Set(Z);return o.jsxs(Mo,{ref:p,id:A,role:"listbox","aria-label":"Suggestions","aria-multiselectable":M||void 0,"aria-busy":$||z||void 0,density:i,query:T,highlightMatches:!0,className:Ea(D.wrapper,R),style:b,onScroll:F,...c,children:[x.map((B,H)=>{const W=M?U.has(B.value):C===B.value;return o.jsx(Fo,{id:`${n}-option-${H}`,ref:j=>Q(H,j),disabled:B.disabled,selected:W,density:i,before:M?o.jsx(Lo,{name:W?"checkbox-checked":"checkbox",fill:W?"icon":"icon.subtlest",display:"block","aria-hidden":!0}):void 0,label:B.label,description:B.description,iconBefore:B.iconLeft,iconAfter:B.iconRight,highlightMatches:!B.created,tabIndex:-1,bg:t===H?"bg.neutral.hovered":void 0,"data-active":t===H||void 0,...E({onMouseDown:j=>j.preventDefault(),onClick:()=>{B.disabled||K(B)}})},`${B.created?"create":"option"}-${B.value}`)}),w&&o.jsx(u,{className:I,role:"status",children:S}),ee&&o.jsx(u,{className:I,role:"status",children:O}),z&&o.jsx(u,{className:I,role:"status",children:S})]})};Va.__docgenInfo={description:"",methods:[],displayName:"AutocompleteListbox",props:{activeIndex:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},baseId:{required:!0,tsType:{name:"string"},description:""},density:{required:!0,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},floatingProps:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},floatingRef:{required:!0,tsType:{name:"RefCallback",elements:[{name:"HTMLDivElement"}],raw:"RefCallback<HTMLDivElement>"},description:""},floatingStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},getItemProps:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: HTMLProps<HTMLElement>) => Record<string, unknown>",signature:{arguments:[{type:{name:"HTMLProps",elements:[{name:"HTMLElement"}],raw:"HTMLProps<HTMLElement>"},name:"props"}],return:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}}},description:""},items:{required:!0,tsType:{name:"unknown"},description:""},listboxClassName:{required:!0,tsType:{name:"string"},description:""},listboxId:{required:!0,tsType:{name:"string"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},loadingMore:{required:!0,tsType:{name:"boolean"},description:""},loadingText:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},noOptionsText:{required:!0,tsType:{name:"ReactNode"},description:""},onScroll:{required:!0,tsType:{name:"UIEventHandler",elements:[{name:"HTMLDivElement"}],raw:"UIEventHandler<HTMLDivElement>"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOptionData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
  created?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"iconLeft",value:{name:"IconNamesList",required:!1}},{key:"iconRight",value:{name:"IconNamesList",required:!1}},{key:"created",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},query:{required:!0,tsType:{name:"string"},description:""},selectedValues:{required:!0,tsType:{name:"unknown"},description:""},setItemRef:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, node: HTMLElement | null) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"node"}],return:{name:"void"}}},description:""},statusClassName:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""}}};const La=e=>{const{className:t,disabled:n,dismissButtonRef:i,isNew:c,label:p,onDismiss:b,onKeyDown:E,size:x}=e;return o.jsx(Ho,{className:t,"data-new":c||void 0,size:x,dismissable:!0,disabled:n,dismissButtonRef:i,dismissButtonTabIndex:-1,onDismiss:b,onDismissKeyDown:E,children:p})};La.__docgenInfo={description:"",methods:[],displayName:"AutocompleteToken",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dismissButtonRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},isNew:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""}}};const Uo=e=>e?[]:null,Wo=({value:e,defaultValue:t,onValueChange:n,inputValue:i,defaultInputValue:c="",onInputValueChange:p,open:b,defaultOpen:E=!1,onOpenChange:x,multiple:R=!1,disabled:A=!1,readOnly:$=!1})=>{const[z,S]=s.useState(()=>t!==void 0?t:Uo(R)),[M,O]=s.useState(c),[F,K]=s.useState(E),T=e!==void 0?e:z,Z=i!==void 0?i:M,Q=b!==void 0?b:F,I=A||$,C=s.useCallback((d,h)=>{e===void 0&&S(d),n==null||n(d,h)},[e,n]),D=s.useCallback((d,h)=>{i===void 0&&O(d),p==null||p(d,h)},[i,p]),w=s.useCallback((d,h)=>{b===void 0&&K(d),x==null||x(d,h)},[b,x]),ee=s.useCallback(d=>{I||(D(d,"input"),!R&&typeof T=="string"&&C(null,"clear"),w(!0,"input"))},[D,w,C,I,R,T]),U=s.useCallback((d,h="select-option")=>{if(!(I||d.disabled)){if(R){const q=Array.isArray(T)?T:[];if(q.includes(d.value))return;C([...q,d.value],h),D("","selection"),w(!0,"selection");return}T!==d.value&&(C(d.value,h),D("","selection"),w(!1,"selection"))}},[D,w,C,I,R,T]),B=s.useCallback(d=>{const h=d.trim();h&&U({value:h,label:h},"create-option")},[U]),H=s.useCallback(d=>{if(!I){if(R){const h=Array.isArray(T)?T:[];if(!h.includes(d))return;C(h.filter(q=>q!==d),"remove-option");return}T===d&&(C(null,"remove-option"),D("","clear"))}},[D,C,I,R,T]),W=s.useCallback(d=>{I||w(!0,d)},[w,I]),j=s.useCallback(d=>{w(!1,d)},[w]);return{value:T,inputValue:Z,open:Q,setInputValue:ee,selectOption:U,createOption:B,removeOption:H,openPopup:W,closePopup:j}},Qo="__autocompleteComponentType",ie=e=>e.trim().toLowerCase(),Go=(e,t)=>{const n=ie(t);return n?ie(e.value)===n||ie(e.label)===n:!1},Xo=(e,t)=>{const n=ie(t);return n?ie(e.label).includes(n)||e.description!==void 0&&ie(e.description).includes(n):!0},Jo=e=>s.isValidElement(e)&&typeof e.type=="function"&&e.type[Qo]==="Option",Yo=e=>s.Children.toArray(e).reduce((t,n)=>(Jo(n)&&t.push({value:n.props.value,label:n.props.label,disabled:n.props.disabled,description:n.props.description,iconLeft:n.props.iconLeft,iconRight:n.props.iconRight,created:!1}),t),[]),ht=(...e)=>{const t=new Map;return e.forEach(n=>{n.forEach(i=>{t.has(i.value)||t.set(i.value,i)})}),Array.from(t.values())},Zo=(e,t)=>t?Array.isArray(e)?e:e?[e]:[]:typeof e=="string"?[e]:[],vt=e=>e.findIndex(t=>!t.disabled),en=32,tn=e=>`Add “${e}”`,lt={sm:"sm",md:"sm",lg:"md",xl:"md"},an=e=>{if(!e||typeof e=="string")return lt[e??"md"];const n=(Array.isArray(e)?e:Object.values(e)).find(i=>typeof i=="string"&&i in lt);return n?lt[n]:"sm"},on=e=>e==="escape-key"?"escape":"outside-press",nn=e=>{const t=qo(),{value:n,defaultValue:i,onValueChange:c,onChange:p,inputValue:b,defaultInputValue:E,onInputValueChange:x,onInputChange:R,open:A,defaultOpen:$,onOpenChange:z,multiple:S=!1,allowCustomValue:M=!1,getCreateOptionLabel:O=tn,limitTags:F,placeholder:K="Select...",placement:T="bottom-start",offset:Z=4,children:Q,id:I,name:C,disabled:D,readOnly:w=!1,error:ee,valid:U=!1,invalid:B,size:H,density:W="compact",loading:j=!1,loadingMore:d=!1,hasMore:h=!1,onLoadMore:q,loadingText:he="Loading options…",noOptionsText:oe="No options","aria-label":ve,"aria-labelledby":fe,"aria-describedby":Qe,"aria-required":Ge,...Xe}=e,P=D??(t==null?void 0:t.disabled)??!1,Je=ee??(t==null?void 0:t.error)??!1,Ye=B??(t==null?void 0:t.invalid)??!1,xe=H??(t==null?void 0:t.size)??"md",[Ze,le]=fo(Xe),et=s.useId(),ce=I??`autocomplete-${et}`,tt=ce,ue=`${ce}-listbox`,de=s.useRef(null),pe=s.useRef(null),we=s.useRef(null),Be=s.useRef([]),Te=s.useRef([]),[V,L]=s.useState(null),[me,ne]=s.useState(!1),[se,Fa]=s.useState([]),[Ha,at]=s.useState(""),ct=s.useMemo(()=>Yo(Q),[Q]),te=s.useMemo(()=>ht(ct,se),[ct,se]),ut=s.useMemo(()=>new Map(te.map(a=>[a.value,a])),[te]),qa=s.useCallback((a,r)=>{if(S){const Y=a;c==null||c(Y,r),p==null||p(Y,r);return}const g=a;c==null||c(g,r),p==null||p(g,r)},[S,p,c]),Pa=s.useCallback((a,r)=>{x==null||x(a,r),R==null||R(a,r)},[R,x]),f=Wo({value:n,defaultValue:i,onValueChange:qa,inputValue:b,defaultInputValue:E,onInputValueChange:Pa,open:A,defaultOpen:$,onOpenChange:z,multiple:S,disabled:P,readOnly:w}),ot=f.value,be=f.open,G=f.inputValue,X=s.useMemo(()=>Zo(ot,!!S),[ot,S]),nt=s.useMemo(()=>X.map(a=>ut.get(a)),[ut,X]),Na=s.useMemo(()=>X.map((a,r)=>{var g;return((g=nt[r])==null?void 0:g.label)??a}),[nt,X]),st=s.useMemo(()=>{const a=G.trim();return a?te.filter(r=>Xo(r,a)):te},[G,te]),rt=s.useMemo(()=>{const a=G.trim(),r=te.some(g=>Go(g,a));return!M||!a||r?null:{value:a,label:O(a),created:!0}},[M,G,O,te]),J=s.useMemo(()=>rt?[rt,...st]:st,[rt,st]),_a=s.useMemo(()=>J.flatMap((a,r)=>a.disabled?r:[]),[J]),dt=vt(J),ye=be?V??(dt>=0?dt:null):null,$a=s.useCallback((a,r,g)=>{if(a){f.openPopup("keyboard");return}L(null),f.closePopup(on(g))},[f]),re=Bo({open:be,onOpenChange:$a,placement:T,middleware:To({offset:Z,extras:[ko({apply({rects:a,elements:r}){r.floating.style.minWidth=`${a.reference.width}px`}})]})}),za=Ro(re.context,{enabled:!P}),Ka=Ao(re.context,{role:"listbox"}),Ua=Io(re.context,{listRef:Be,activeIndex:ye,onNavigate:L,disabledIndices:_a,loop:!0,virtual:!0,focusItemOnOpen:!1}),{getReferenceProps:Wa,getFloatingProps:Qa,getItemProps:Ga}=Oo([za,Ka,Ua]),Xa=Ko({size:xe}),Ja=an(xe),Ya=!!S&&typeof F=="number"&&F>=0&&!me?F:X.length,N=X.slice(0,Ya),Za=X.length-N.length,_=s.useCallback(()=>{var a;(a=we.current)==null||a.focus()},[]),ae=s.useCallback(a=>{var r;(r=Te.current[a])==null||r.focus()},[]),it=s.useCallback(a=>{if(!a.disabled){if(a.created){const r={...a,label:a.value};Fa(g=>ht(g,[r])),f.selectOption(r,"create-option"),at(`${a.value} created and selected.`)}else f.selectOption(a),at(`${a.label} selected.`);L(null),requestAnimationFrame(_)}},[_,f]),ke=s.useCallback((a,r)=>{f.removeOption(a),at(`${r} removed.`)},[f]),eo=s.useCallback((a,r)=>{ke(a,r),requestAnimationFrame(_)},[_,ke]),to=s.useCallback((a,r,g,Y)=>{if(a.key==="ArrowLeft"){a.preventDefault(),ae(r>0?r-1:N.length-1);return}if(a.key==="ArrowRight"){a.preventDefault(),r<N.length-1?ae(r+1):_();return}if(a.key==="Escape"){a.preventDefault(),_();return}(a.key==="Backspace"||a.key==="Delete")&&(a.preventDefault(),ke(g,Y),requestAnimationFrame(()=>{r>0?ae(r-1):_()}))},[_,ae,ke,N.length]),ao=s.useCallback(a=>{L(null),f.setInputValue(a.target.value)},[f]),oo=s.useCallback(()=>{ne(!0),f.openPopup("focus")},[f]),no=s.useCallback(a=>{if(!(P||w)){if(a.key==="ArrowDown"||a.key==="ArrowUp"){if(!be){a.preventDefault(),f.openPopup("keyboard");const g=(a.key==="ArrowDown"?1:-1)===1?vt(J):J.findLastIndex(Y=>!Y.disabled);L(g>=0?g:null)}return}if(a.key==="Enter"&&ye!==null){const r=J[ye];r&&(a.preventDefault(),it(r));return}if((a.key==="Backspace"||a.key==="Delete")&&G.length===0&&N.length>0){a.preventDefault(),ae(N.length-1);return}a.key==="ArrowLeft"&&G.length===0&&N.length>0&&(a.preventDefault(),ae(N.length-1))}},[G.length,P,ae,it,be,J,w,ye,f,N.length]),so=s.useCallback(a=>{const r=a.relatedTarget;requestAnimationFrame(()=>{var pt,mt,bt,yt;const g=document.activeElement,Y=r&&((pt=de.current)==null?void 0:pt.contains(r))||g&&((mt=de.current)==null?void 0:mt.contains(g)),mo=r&&((bt=pe.current)==null?void 0:bt.contains(r))||g&&((yt=pe.current)==null?void 0:yt.contains(g));!Y&&!mo&&(ne(!1),L(null),f.closePopup("outside-press"))})},[f]),ro=s.useCallback(()=>{ne(!0)},[]),io=s.useCallback(a=>{const r=a.target;r instanceof Element&&r.closest("button, input")!==null||(a.preventDefault(),_())},[_]),lo=s.useCallback(a=>{if(!h||j||d||P||!q)return;const r=a.currentTarget;r.scrollHeight-r.scrollTop-r.clientHeight<=en&&q()},[P,h,j,d,q]),co=s.useCallback((a,r)=>{Te.current[a]=r},[]),uo=s.useCallback((a,r)=>{Be.current[a]=r},[]),po=s.useCallback(a=>{pe.current=a,re.refs.setFloating(a)},[re.refs]);return{activeIndex:ye,announcement:Ha,ariaDescribedBy:Qe,ariaLabel:ve,ariaLabelledBy:fe,ariaRequired:Ge,baseId:ce,chipSize:Ja,classes:Xa,className:Ze,currentInputValue:G,currentValue:ot,density:W,disabled:P,error:Je,floating:re,getFloatingProps:Qa,getItemProps:Ga,getReferenceProps:Wa,handleBlurCapture:so,handleControlMouseDown:io,handleFocusCapture:ro,handleInputChange:ao,handleInputFocus:oo,handleInputKeyDown:no,handleListScroll:lo,handleOptionSelect:it,handleTokenDismiss:eo,handleTokenKeyDown:to,hiddenTagCount:Za,inputId:tt,inputRef:we,invalid:Ye,isOpen:be,listboxId:ue,loading:j,loadingMore:d,loadingText:he,multiple:S,name:C,navigationItems:J,noOptionsText:oe,otherProps:le,placeholder:K,readOnly:w,rootRef:de,selectedLabels:Na,selectedOptions:nt,selectedValues:X,setFloatingRef:po,setItemRef:uo,setTokenRef:co,valid:U,visibleSelectedValues:N}},m=e=>{const t=nn(e),{activeIndex:n,announcement:i,ariaDescribedBy:c,ariaLabel:p,ariaLabelledBy:b,ariaRequired:E,baseId:x,chipSize:R,classes:A,className:$,currentInputValue:z,currentValue:S,density:M,disabled:O,error:F,floating:K,getFloatingProps:T,getItemProps:Z,getReferenceProps:Q,handleBlurCapture:I,handleControlMouseDown:C,handleFocusCapture:D,handleInputChange:w,handleInputFocus:ee,handleInputKeyDown:U,handleListScroll:B,handleOptionSelect:H,handleTokenDismiss:W,handleTokenKeyDown:j,hiddenTagCount:d,inputId:h,inputRef:q,invalid:he,isOpen:oe,listboxId:ve,loading:fe,loadingMore:Qe,loadingText:Ge,multiple:Xe,name:P,navigationItems:Je,noOptionsText:Ye,otherProps:xe,placeholder:Ze,readOnly:le,rootRef:et,selectedLabels:ce,selectedOptions:tt,selectedValues:ue,setFloatingRef:de,setItemRef:pe,setTokenRef:we,valid:Be,visibleSelectedValues:Te}=t;return o.jsxs(u,{...xo("Autocomplete"),ref:et,className:Ea(A.root,$),"data-disabled":O||void 0,"aria-disabled":O||void 0,onFocusCapture:D,onBlurCapture:I,...xe,children:[P&&ue.map(V=>o.jsx(u,{as:"input",type:"hidden",name:P,value:V,disabled:O},`hidden-${V}`)),o.jsxs(u,{ref:K.refs.setReference,className:A.control,"data-open":oe||void 0,"data-disabled":O||void 0,"data-error":F||void 0,"data-valid":Be||void 0,"data-invalid":he||void 0,onMouseDown:C,children:[o.jsxs(u,{className:A.valueContainer,children:[Te.map((V,L)=>{var ne;const me=ce[L]??V;return o.jsx(La,{className:A.token,size:R,label:me,isNew:(ne=tt[L])==null?void 0:ne.created,disabled:O||le,dismissButtonRef:se=>we(L,se),onDismiss:()=>W(V,me),onKeyDown:se=>j(se,L,V,me)},V)}),d>0&&o.jsx(u,{as:"span",className:A.overflowIndicator,"aria-label":`${d} more selected`,children:`+${d}`}),o.jsx(u,{as:"input",...Do("trigger"),id:h,ref:q,type:"text",role:"combobox","aria-expanded":oe,"aria-controls":ve,"aria-autocomplete":"list","aria-activedescendant":oe&&n!==null?`${x}-option-${n}`:void 0,"aria-haspopup":"listbox","aria-label":p,"aria-labelledby":b,"aria-describedby":c,"aria-required":E,"aria-disabled":O||void 0,"aria-invalid":F||he||void 0,disabled:O,readOnly:le,placeholder:ue.length===0?Ze:void 0,value:z,className:A.input,onChange:w,...Q({onFocus:ee,onKeyDown:U}),autoComplete:"off"})]}),fe&&o.jsx(u,{as:"span",className:A.loadingIndicator,"aria-hidden":!0,children:o.jsx(jo,{size:"sm"})})]}),o.jsx(u,{as:"span",className:A.liveRegion,role:"status","aria-live":"polite","aria-atomic":"true",children:i}),oe&&!O&&!le&&o.jsx(So,{children:o.jsx(Co,{children:o.jsx(Eo,{context:K.context,modal:!1,initialFocus:-1,children:o.jsx(Va,{activeIndex:n,baseId:x,density:M,floatingProps:T(),floatingRef:de,floatingStyles:K.floatingStyles,getItemProps:V=>Z(V),items:Je,listboxClassName:A.listbox,listboxId:ve,loading:fe,loadingMore:Qe,loadingText:Ge,multiple:!!Xe,noOptionsText:Ye,onScroll:B,onSelect:H,query:z.trim(),selectedValues:ue,setItemRef:pe,statusClassName:A.status,value:S})})})})]})};m.__docgenInfo={description:'Filters and selects one or more metadata-only `Option` values.\n\nUse controlled `value` and `onValueChange`, or initialize uncontrolled state\nwith `defaultValue`. The input uses combobox semantics; arrow keys navigate,\nEnter selects, and Escape closes the listbox. Supply `aria-label` or\n`aria-labelledby` when no external label is associated with the input.\nSelected values render as dismissible chips in both single- and\nmultiple-selection modes.\n\n@example\n```tsx\n<Autocomplete defaultValue="active" aria-label="Status">\n  <Option value="active" label="Active" />\n  <Option value="archived" label="Archived" />\n</Autocomplete>\n```',methods:[],displayName:"Autocomplete"};const ge=e=>null;ge.__autocompleteComponentType="Option";const Ma=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],We=[...Ma,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],y=(e=Ma)=>e.map(t=>o.jsx(ge,{value:t.value,label:t.label,description:t.description},t.value)),En={title:"Components/Autocomplete",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},Re={render:function(t){const[n,i]=s.useState(null);return o.jsx(u,{w:"xs",children:o.jsx(m,{...t,multiple:!1,value:n,defaultValue:void 0,onValueChange:i,onChange:void 0,name:"technology",children:y()})})}},Ae={render:()=>o.jsx(u,{w:"xs",children:o.jsx(m,{name:"technology-filter","aria-label":"Filter technologies",children:y()})}),play:async({canvasElement:e})=>{const t=k(e),n=k(document.body),i=t.getByRole("combobox");await v.type(i,"typ"),await l(n.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await l(n.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await v.clear(i),await v.type(i,"workshop");const c=n.getByRole("option",{name:/storybook component workshop/i});await l(k(c).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Ie={render:e=>o.jsx(u,{w:"xs",children:o.jsx(m,{...e,multiple:!1,value:void 0,defaultValue:"react",onValueChange:void 0,onChange:void 0,name:"technology",children:y()})}),play:async({canvasElement:e})=>{const t=k(e),n=t.getByRole("combobox",{name:"Technology"});await l(n).toHaveValue(""),await l(t.getByRole("button",{name:"Remove React"})).toBeInTheDocument(),await v.click(n),await v.keyboard("P"),await l(n).toHaveValue("P"),await l(t.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument()}},Oe={render:function(){const[t,n]=s.useState(["react","typescript","storybook"]);return o.jsx(u,{w:"sm",children:o.jsx(m,{multiple:!0,value:t,onValueChange:n,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:y()})})},play:async({canvasElement:e})=>{const t=k(e),n=k(document.body),i=t.getByRole("combobox"),c=t.getByRole("button",{name:"Remove React"});await v.click(i),await l(n.queryByRole("checkbox")).not.toBeInTheDocument(),await v.click(c),await l(t.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument(),await l(i).toHaveFocus()},parameters:{controls:{disable:!0}}},Se={render:()=>o.jsx(u,{w:"224",children:o.jsx(m,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:y()})}),parameters:{controls:{disable:!0}}},Ce={render:()=>o.jsx(u,{w:"sm",children:o.jsx(m,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:y()})}),play:async({canvasElement:e})=>{const t=k(e);await l(t.getByText("+3")).toBeInTheDocument(),await v.click(t.getByRole("combobox")),await l(t.queryByText("+3")).not.toBeInTheDocument(),await l(t.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Ee={render:()=>o.jsx(u,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(e=>o.jsx(m,{size:e,defaultValue:"react",name:`technology-${e}`,"aria-label":`${e} autocomplete`,children:y()},e))}),parameters:{controls:{disable:!0}}},De={render:()=>o.jsxs(u,{display:"grid",gap:"12",w:"sm",children:[o.jsx(m,{name:"default","aria-label":"Default",children:y()}),o.jsx(m,{name:"valid","aria-label":"Valid",valid:!0,children:y()}),o.jsx(m,{name:"invalid","aria-label":"Invalid",invalid:!0,children:y()}),o.jsx(m,{name:"error","aria-label":"Error",error:!0,children:y()})]}),parameters:{controls:{disable:!0}}},je={render:()=>o.jsx(u,{w:"sm",children:o.jsx(m,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:y()})}),play:async({canvasElement:e})=>{const t=k(e);await l(t.getByRole("combobox")).toBeDisabled(),await l(t.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},Ve={render:()=>o.jsx(u,{w:"sm",children:o.jsxs(m,{name:"framework","aria-label":"Framework",children:[o.jsx(ge,{value:"react",label:"React"}),o.jsx(ge,{value:"legacy",label:"Legacy framework",disabled:!0}),o.jsx(ge,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},Le={render:()=>o.jsx(u,{w:"sm",children:o.jsx(m,{multiple:!0,allowCustomValue:!0,defaultValue:["react"],name:"custom-stack","aria-label":"Technologies",placeholder:"Add a technology…",children:y()})}),play:async({canvasElement:e})=>{const t=k(e),n=t.getByRole("combobox");await v.type(n,"Script");const i=k(document.body),c=i.getAllByRole("option");await l(c[0]).toHaveAccessibleName(/add “script”/i),await l(c[1]).toHaveAccessibleName(/typescript type safety/i),await v.keyboard("{Enter}");const p=t.getByRole("button",{name:"Remove Script"});await l(p).toBeInTheDocument(),await l(p.parentElement).toHaveAttribute("data-new","true"),await v.type(n,"React"),await l(i.queryByRole("option",{name:/add “react”/i})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},Me={render:()=>o.jsx(u,{w:"sm",children:o.jsx(m,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},Fe={render:function(){const[t,n]=s.useState(()=>We.slice(0,8)),[i,c]=s.useState(!1),p=t.length<We.length,b=()=>{i||!p||(c(!0),window.setTimeout(()=>{n(E=>We.slice(0,E.length+4)),c(!1)},200))};return o.jsx(u,{w:"sm",children:o.jsx(m,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:p,loadingMore:i,onLoadMore:b,children:y(t)})})},parameters:{controls:{disable:!0}}},He={render:()=>o.jsx(u,{w:"sm",children:o.jsx(m,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:y()})}),parameters:{controls:{disable:!0}}},qe={render:function(){const[t,n]=s.useState("");return o.jsxs(u,{display:"grid",gap:"8",w:"sm",children:[o.jsx(m,{inputValue:t,onInputValueChange:n,name:"controlled-input","aria-label":"Controlled query",children:y()}),o.jsx(u,{color:"text.subtle",children:`Query: ${t||"empty"}`})]})},parameters:{controls:{disable:!0}}},Pe={render:function(){const[t,n]=s.useState(!1),[i,c]=s.useState(0),p=b=>{n(b),c(E=>E+1)};return o.jsxs(u,{display:"grid",gap:"8",w:"sm",children:[o.jsx(wo,{onClick:()=>n(b=>!b),children:"Toggle suggestions"}),o.jsx(m,{open:t,onOpenChange:p,name:"controlled-open","aria-label":"Controlled suggestions",children:y()}),o.jsx(u,{color:"text.subtle",children:`Open changes: ${i}`})]})},play:async({canvasElement:e})=>{const t=k(e),n=t.getByRole("combobox");await v.click(n),await l(t.getByText("Open changes: 1")).toBeInTheDocument(),await v.keyboard("{Escape}"),await l(t.getByText("Open changes: 2")).toBeInTheDocument(),await l(n).toHaveAttribute("aria-expanded","false")},parameters:{controls:{disable:!0}}},Ne={name:"Ex: With FormField",render:()=>o.jsx(u,{w:"sm",children:o.jsx(Da,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:o.jsx(m,{id:"primary-technology",name:"primaryTechnology",children:y()})})}),parameters:{controls:{disable:!0}}},_e={name:"Ex: Technology Assignment",render:()=>o.jsx(u,{w:"md",children:o.jsx(Da,{label:"Project stack",labelFor:"project-stack",helpText:"Search the supported catalog or create a project-specific value.",children:o.jsx(m,{id:"project-stack",name:"projectStack",multiple:!0,allowCustomValue:!0,defaultValue:["react","typescript"],placeholder:"Add technology…",children:y(We)})})}),parameters:{controls:{disable:!0}}},$e={name:"Ex: Keyboard Selection",render:()=>o.jsx(u,{w:"sm",children:o.jsx(m,{name:"keyboard","aria-label":"Keyboard selection",children:y()})}),play:async({canvasElement:e})=>{const t=k(e),n=t.getByRole("combobox");await v.click(n),await l(n).toHaveAttribute("aria-expanded","true"),await l(n).toHaveAttribute("aria-activedescendant"),await v.keyboard("{Enter}"),await l(n).toHaveValue(""),await l(t.getByRole("button",{name:"Remove React"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},ze={name:"Ex: Keyboard Token Editing",render:()=>o.jsx(u,{w:"sm",children:o.jsx(m,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:y()})}),play:async({canvasElement:e})=>{const t=k(e),n=t.getByRole("combobox"),i=t.getByRole("button",{name:"Remove TypeScript"});await v.click(n),await v.keyboard("{Backspace}"),await l(i).toHaveFocus(),await l(i).toBeInTheDocument(),await v.keyboard("{Backspace}"),await l(t.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},Ke={name:"Ex: Test Id Reaches The Listbox",render:()=>o.jsx(u,{w:"sm","data-testid":"filters",children:o.jsx(m,{"data-testid":"technology","aria-label":"Technology",children:y()})}),play:async({canvasElement:e})=>{const t=k(e),n=k(e.ownerDocument.body),i=t.getByTestId("technology"),c=t.getByRole("combobox");await l(i).not.toBe(c),await l(i).toContainElement(c),await l(c).not.toHaveAttribute("data-testid"),await l(c).toHaveAttribute("data-ds-part","trigger"),await l(i).not.toHaveAttribute("data-ds-part"),await v.click(c);const p=await n.findByRole("listbox");await l(i.contains(p)).toBe(!1);const b=p.closest("[data-ds-chain]");await l(b).toHaveAttribute("data-ds-chain","filters>technology"),await l(b==null?void 0:b.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},Ue={name:"Test: data-ds-component",render:()=>o.jsxs(u,{display:"flex",flexDirection:"column",gap:"8",w:"sm",children:[o.jsx(m,{"data-testid":"ds-default","aria-label":"Default technology",children:y()}),o.jsx(m,{"data-testid":"ds-override","data-ds-component":"TechnologyPicker","aria-label":"Overridden technology",children:y()})]}),play:async({canvasElement:e})=>{const t=k(e),n=k(e.ownerDocument.body),i=t.getByTestId("ds-default");await l(i).toHaveAttribute("data-ds-component","Autocomplete");const c=t.getByRole("combobox",{name:"Default technology"});await l(c).toHaveAttribute("data-ds-part","trigger"),await l(c).not.toHaveAttribute("data-ds-component");const p=t.getByTestId("ds-override");await l(p).toHaveAttribute("data-ds-component","TechnologyPicker"),await l(t.getByRole("combobox",{name:"Overridden technology"})).not.toHaveAttribute("data-ds-component"),await v.click(c);const b=await n.findByRole("listbox");await l(b).not.toHaveAttribute("data-ds-component","Autocomplete"),await l(b).not.toHaveAttribute("data-ds-component","TechnologyPicker")},parameters:{controls:{disable:!0}}};var ft,xt,wt;Re.parameters={...Re.parameters,docs:{...(ft=Re.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} multiple={false} value={value} defaultValue={undefined} onValueChange={setValue} onChange={undefined} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(wt=(xt=Re.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Bt,Tt,kt;Ae.parameters={...Ae.parameters,docs:{...(Bt=Ae.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(kt=(Tt=Ae.parameters)==null?void 0:Tt.docs)==null?void 0:kt.source}}};var Rt,At,It;Ie.parameters={...Ie.parameters,docs:{...(Rt=Ie.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  render: args => <Box w="xs">
      <Autocomplete {...args} multiple={false} value={undefined} defaultValue="react" onValueChange={undefined} onChange={undefined} name="technology">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'Technology'
    });
    await expect(input).toHaveValue('');
    await expect(canvas.getByRole('button', {
      name: 'Remove React'
    })).toBeInTheDocument();
    await userEvent.click(input);
    await userEvent.keyboard('P');
    await expect(input).toHaveValue('P');
    await expect(canvas.queryByRole('button', {
      name: 'Remove React'
    })).not.toBeInTheDocument();
  }
}`,...(It=(At=Ie.parameters)==null?void 0:At.docs)==null?void 0:It.source}}};var Ot,St,Ct;Oe.parameters={...Oe.parameters,docs:{...(Ot=Oe.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Ct=(St=Oe.parameters)==null?void 0:St.docs)==null?void 0:Ct.source}}};var Et,Dt,jt;Se.parameters={...Se.parameters,docs:{...(Et=Se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(jt=(Dt=Se.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};var Vt,Lt,Mt;Ce.parameters={...Ce.parameters,docs:{...(Vt=Ce.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Mt=(Lt=Ce.parameters)==null?void 0:Lt.docs)==null?void 0:Mt.source}}};var Ft,Ht,qt;Ee.parameters={...Ee.parameters,docs:{...(Ft=Ee.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(qt=(Ht=Ee.parameters)==null?void 0:Ht.docs)==null?void 0:qt.source}}};var Pt,Nt,_t;De.parameters={...De.parameters,docs:{...(Pt=De.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(_t=(Nt=De.parameters)==null?void 0:Nt.docs)==null?void 0:_t.source}}};var $t,zt,Kt;je.parameters={...je.parameters,docs:{...($t=je.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Kt=(zt=je.parameters)==null?void 0:zt.docs)==null?void 0:Kt.source}}};var Ut,Wt,Qt;Ve.parameters={...Ve.parameters,docs:{...(Ut=Ve.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Qt=(Wt=Ve.parameters)==null?void 0:Wt.docs)==null?void 0:Qt.source}}};var Gt,Xt,Jt;Le.parameters={...Le.parameters,docs:{...(Gt=Le.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
    await userEvent.type(input, 'Script');
    const body = within(document.body);
    const options = body.getAllByRole('option');
    await expect(options[0]).toHaveAccessibleName(/add “script”/i);
    await expect(options[1]).toHaveAccessibleName(/typescript type safety/i);
    await userEvent.keyboard('{Enter}');
    const removeScript = canvas.getByRole('button', {
      name: 'Remove Script'
    });
    await expect(removeScript).toBeInTheDocument();
    await expect(removeScript.parentElement).toHaveAttribute('data-new', 'true');
    await userEvent.type(input, 'React');
    await expect(body.queryByRole('option', {
      name: /add “react”/i
    })).not.toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Jt=(Xt=Le.parameters)==null?void 0:Xt.docs)==null?void 0:Jt.source}}};var Yt,Zt,ea;Me.parameters={...Me.parameters,docs:{...(Yt=Me.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ea=(Zt=Me.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,oa;Fe.parameters={...Fe.parameters,docs:{...(ta=Fe.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(oa=(aa=Fe.parameters)==null?void 0:aa.docs)==null?void 0:oa.source}}};var na,sa,ra;He.parameters={...He.parameters,docs:{...(na=He.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(ra=(sa=He.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var ia,la,ca;qe.parameters={...qe.parameters,docs:{...(ia=qe.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ca=(la=qe.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var ua,da,pa;Pe.parameters={...Pe.parameters,docs:{...(ua=Pe.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(pa=(da=Pe.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ma,ba,ya;Ne.parameters={...Ne.parameters,docs:{...(ma=Ne.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(ya=(ba=Ne.parameters)==null?void 0:ba.docs)==null?void 0:ya.source}}};var ga,ha,va;_e.parameters={..._e.parameters,docs:{...(ga=_e.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(va=(ha=_e.parameters)==null?void 0:ha.docs)==null?void 0:va.source}}};var fa,xa,wa;$e.parameters={...$e.parameters,docs:{...(fa=$e.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
    await expect(input).toHaveValue('');
    await expect(canvas.getByRole('button', {
      name: 'Remove React'
    })).toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(wa=(xa=$e.parameters)==null?void 0:xa.docs)==null?void 0:wa.source}}};var Ba,Ta,ka;ze.parameters={...ze.parameters,docs:{...(Ba=ze.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(ka=(Ta=ze.parameters)==null?void 0:Ta.docs)==null?void 0:ka.source}}};var Ra,Aa,Ia;Ke.parameters={...Ke.parameters,docs:{...(Ra=Ke.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Ia=(Aa=Ke.parameters)==null?void 0:Aa.docs)==null?void 0:Ia.source}}};var Oa,Sa,Ca;Ue.parameters={...Ue.parameters,docs:{...(Oa=Ue.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(Ca=(Sa=Ue.parameters)==null?void 0:Sa.docs)==null?void 0:Ca.source}}};const Dn=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing","TestIdReachesPortaledListbox","DsComponentAttribute"];export{Le as AllowCustomValue,qe as ControlledInput,Pe as ControlledOpen,Re as Default,je as Disabled,Ve as DisabledOptions,Ue as DsComponentAttribute,He as EmptyResults,Ae as Filtering,Fe as InfiniteLoading,$e as KeyboardSelection,ze as KeyboardTokenEditing,Ce as LimitTags,Me as Loading,Oe as Multiple,Se as MultipleLongValues,Ie as Selected,Ee as Sizes,_e as TechnologyAssignmentExample,Ke as TestIdReachesPortaledListbox,De as ValidationStates,Ne as WithFormField,Dn as __namedExportsOrder,En as default};
