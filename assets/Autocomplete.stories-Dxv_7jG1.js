import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BKyFwriW.js";import{w as j,u as T,e as b}from"./index-DPYJpPba.js";import{m as mo,c as bo,s as yo,a as go,g as ho,d as Ia,B as c,b as fo}from"./dsComponent-BZ80dv4C.js";import{B as vo}from"./Button-z2Z4O7J0.js";import{F as Oa}from"./FormField-Lr50FCdA.js";import{u as xo,c as wo,s as ko,b as To,d as Bo,e as Ro,g as Io,F as Oo,h as Ao}from"./Tooltip-DME5tuVI.js";import{S as So}from"./Spinner-DgZ9SPqi.js";import{m as Co}from"./menu-B6ipdU15.js";import{I as Eo}from"./Icon-CPS1ygZT.js";import{L as Do,a as jo}from"./ListItem-BoV_dBGk.js";import{C as Vo}from"./Chip-Q7MK9m9_.js";import{u as Mo}from"./FieldContext-D6URyQos.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconConfig-BUkzhV0S.js";import"./Label-CcjMpbMI.js";import"./Text-BnqT0XMf.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-BZrC_CJE.js";import"./Checkbox-BKgxmDIf.js";import"./Divider-Ccg9DqVP.js";import"./Toggle-O_SZ-6vY.js";const Aa={size:"md"},Lo=[],Fo=[["root","autocomplete__root"],["control","autocomplete__control"],["valueContainer","autocomplete__valueContainer"],["input","autocomplete__input"],["token","autocomplete__token"],["overflowIndicator","autocomplete__overflowIndicator"],["loadingIndicator","autocomplete__loadingIndicator"],["listbox","autocomplete__listbox"],["status","autocomplete__status"],["liveRegion","autocomplete__liveRegion"]],qo=Fo.map(([e,t])=>[e,go(t,Aa,ho(Lo,e))]),Po=mo((e={})=>Object.fromEntries(qo.map(([t,n])=>[t,n.recipeFn(e)]))),ht=["size"],_o=e=>({...Aa,...bo(e)}),Ho=Object.assign(Po,{__recipe__:!1,__name__:"autocomplete",raw:e=>e,classNameMap:{},variantKeys:ht,variantMap:{size:["sm","md","lg","xl"]},splitVariantProps(e){return yo(e,ht)},getVariantProps:_o}),Sa=e=>{const{activeIndex:t,baseId:n,density:l,floatingProps:d,floatingRef:p,floatingStyles:x,getItemProps:D,items:B,listboxClassName:R,listboxId:w,loading:H,loadingMore:W,loadingText:y,multiple:L,noOptionsText:A,onScroll:N,onSelect:Q,query:$,selectedValues:k,setItemRef:G,statusClassName:z,value:C}=e,E=Co({density:l}),I=H&&B.length===0,S=!H&&B.length===0,Z=new Set(k);return o.jsxs(Do,{ref:p,id:w,role:"listbox","aria-label":"Suggestions","aria-multiselectable":L||void 0,"aria-busy":H||W||void 0,density:l,query:$,highlightMatches:!0,className:Ia(E.wrapper,R),style:x,onScroll:N,...d,children:[B.map((h,F)=>{const K=L?Z.has(h.value):C===h.value;return o.jsx(jo,{id:`${n}-option-${F}`,ref:V=>G(F,V),disabled:h.disabled,selected:K,density:l,before:L?o.jsx(Eo,{name:K?"checkbox-checked":"checkbox",fill:K?"icon":"icon.subtlest","aria-hidden":!0}):void 0,label:h.label,description:h.description,iconBefore:h.iconLeft,iconAfter:h.iconRight,highlightMatches:!h.created,tabIndex:-1,bg:t===F?"bg.neutral.hovered":void 0,"data-active":t===F||void 0,...D({onMouseDown:V=>V.preventDefault(),onClick:()=>{h.disabled||Q(h)}})},`${h.created?"create":"option"}-${h.value}`)}),I&&o.jsx(c,{className:z,role:"status",children:y}),S&&o.jsx(c,{className:z,role:"status",children:A}),W&&o.jsx(c,{className:z,role:"status",children:y})]})};Sa.__docgenInfo={description:"",methods:[],displayName:"AutocompleteListbox",props:{activeIndex:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},baseId:{required:!0,tsType:{name:"string"},description:""},density:{required:!0,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},floatingProps:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},floatingRef:{required:!0,tsType:{name:"RefCallback",elements:[{name:"HTMLDivElement"}],raw:"RefCallback<HTMLDivElement>"},description:""},floatingStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},getItemProps:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: HTMLProps<HTMLElement>) => Record<string, unknown>",signature:{arguments:[{type:{name:"HTMLProps",elements:[{name:"HTMLElement"}],raw:"HTMLProps<HTMLElement>"},name:"props"}],return:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}}},description:""},items:{required:!0,tsType:{name:"unknown"},description:""},listboxClassName:{required:!0,tsType:{name:"string"},description:""},listboxId:{required:!0,tsType:{name:"string"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},loadingMore:{required:!0,tsType:{name:"boolean"},description:""},loadingText:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},noOptionsText:{required:!0,tsType:{name:"ReactNode"},description:""},onScroll:{required:!0,tsType:{name:"UIEventHandler",elements:[{name:"HTMLDivElement"}],raw:"UIEventHandler<HTMLDivElement>"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOptionData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
  created?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"iconLeft",value:{name:"IconNamesList",required:!1}},{key:"iconRight",value:{name:"IconNamesList",required:!1}},{key:"created",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},query:{required:!0,tsType:{name:"string"},description:""},selectedValues:{required:!0,tsType:{name:"unknown"},description:""},setItemRef:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, node: HTMLElement | null) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"node"}],return:{name:"void"}}},description:""},statusClassName:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""}}};const Ca=e=>{const{className:t,disabled:n,dismissButtonRef:l,label:d,onDismiss:p,onKeyDown:x,size:D}=e;return o.jsx(Vo,{className:t,size:D,dismissable:!0,disabled:n,dismissButtonRef:l,dismissButtonTabIndex:-1,onDismiss:p,onDismissKeyDown:x,children:d})};Ca.__docgenInfo={description:"",methods:[],displayName:"AutocompleteToken",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dismissButtonRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""}}};const No=e=>e?[]:null,$o=({value:e,defaultValue:t,onValueChange:n,inputValue:l,defaultInputValue:d="",onInputValueChange:p,open:x,defaultOpen:D=!1,onOpenChange:B,multiple:R=!1,selectedOptionLabel:w,disabled:H=!1,readOnly:W=!1})=>{const[y,L]=r.useState(()=>t!==void 0?t:No(R)),[A,N]=r.useState(d),[Q,$]=r.useState(D),k=e!==void 0?e:y,G=l!==void 0?l:A,z=x!==void 0?x:Q,C=H||W,E=r.useCallback((i,m)=>{e===void 0&&L(i),n==null||n(i,m)},[e,n]),I=r.useCallback((i,m)=>{l===void 0&&N(i),p==null||p(i,m)},[l,p]),S=r.useCallback((i,m)=>{x===void 0&&$(i),B==null||B(i,m)},[x,B]),Z=r.useCallback(i=>{C||(I(i,"input"),!R&&typeof k=="string"&&i!==w&&E(null,"clear"),S(!0,"input"))},[I,S,E,C,R,w,k]),h=r.useCallback((i,m="select-option")=>{if(!(C||i.disabled)){if(R){const X=Array.isArray(k)?k:[];if(X.includes(i.value))return;E([...X,i.value],m),I("","selection"),S(!0,"selection");return}k!==i.value&&(E(i.value,m),I(i.label,"selection"),S(!1,"selection"))}},[I,S,E,C,R,k]),F=r.useCallback(i=>{const m=i.trim();m&&h({value:m,label:m},"create-option")},[h]),K=r.useCallback(i=>{if(!C){if(R){const m=Array.isArray(k)?k:[];if(!m.includes(i))return;E(m.filter(X=>X!==i),"remove-option");return}k===i&&(E(null,"remove-option"),I("","clear"))}},[I,E,C,R,k]),V=r.useCallback(i=>{C||S(!0,i)},[S,C]),ee=r.useCallback(i=>{S(!1,i)},[S]);return{value:k,inputValue:G,open:z,setInputValue:Z,selectOption:h,createOption:F,removeOption:K,openPopup:V,closePopup:ee}},zo="__autocompleteComponentType",ue=e=>e.trim().toLowerCase(),Ko=(e,t)=>{const n=ue(t);return n?ue(e.value)===n||ue(e.label)===n:!1},Uo=(e,t)=>{const n=ue(t);return n?ue(e.label).includes(n)||e.description!==void 0&&ue(e.description).includes(n):!0},Wo=e=>r.isValidElement(e)&&typeof e.type=="function"&&e.type[zo]==="Option",Qo=e=>r.Children.toArray(e).reduce((t,n)=>(Wo(n)&&t.push({value:n.props.value,label:n.props.label,disabled:n.props.disabled,description:n.props.description,iconLeft:n.props.iconLeft,iconRight:n.props.iconRight,created:!1}),t),[]),ft=(...e)=>{const t=new Map;return e.forEach(n=>{n.forEach(l=>{t.has(l.value)||t.set(l.value,l)})}),Array.from(t.values())},Go=(e,t)=>t?Array.isArray(e)?e:e?[e]:[]:typeof e=="string"?[e]:[],vt=e=>e.findIndex(t=>!t.disabled),Xo=32,Jo=e=>`Create “${e}”`,lt={sm:"sm",md:"sm",lg:"md",xl:"md"},Yo=e=>{if(!e||typeof e=="string")return lt[e??"md"];const n=(Array.isArray(e)?e:Object.values(e)).find(l=>typeof l=="string"&&l in lt);return n?lt[n]:"sm"},Zo=e=>e==="escape-key"?"escape":"outside-press",en=e=>{var ut,dt,pt;const t=Mo(),{value:n,defaultValue:l,onValueChange:d,onChange:p,inputValue:x,defaultInputValue:D,onInputValueChange:B,onInputChange:R,open:w,defaultOpen:H,onOpenChange:W,multiple:y=!1,allowCustomValue:L=!1,getCreateOptionLabel:A=Jo,limitTags:N,placeholder:Q="Select...",placement:$="bottom-start",offset:k=4,children:G,id:z,name:C,disabled:E,readOnly:I=!1,error:S,valid:Z=!1,invalid:h,size:F,density:K="compact",loading:V=!1,loadingMore:ee=!1,hasMore:i=!1,onLoadMore:m,loadingText:X="Loading options…",noOptionsText:Qe="No options","aria-label":he,"aria-labelledby":se,"aria-describedby":fe,"aria-required":ve,...Ge}=e,U=E??(t==null?void 0:t.disabled)??!1,xe=S??(t==null?void 0:t.error)??!1,we=h??(t==null?void 0:t.invalid)??!1,ke=F??(t==null?void 0:t.size)??"md",[Xe,Je]=fo(Ge),Ye=r.useId(),te=z??`autocomplete-${Ye}`,Ze=te,et=`${te}-listbox`,ae=r.useRef(null),de=r.useRef(null),Te=r.useRef(null),Be=r.useRef([]),Re=r.useRef([]),[tt,O]=r.useState(null),[pe,oe]=r.useState(!1),[le,Da]=r.useState([]),[ja,at]=r.useState(""),it=r.useMemo(()=>Qo(G),[G]),ne=r.useMemo(()=>ft(it,le),[it,le]),me=r.useMemo(()=>new Map(ne.map(a=>[a.value,a])),[ne]),ot=n??l,Va=typeof ot=="string"?((ut=me.get(ot))==null?void 0:ut.label)??ot:"",Ma=r.useCallback((a,s)=>{if(y){const Y=a;d==null||d(Y,s),p==null||p(Y,s);return}const v=a;d==null||d(v,s),p==null||p(v,s)},[y,p,d]),La=r.useCallback((a,s)=>{B==null||B(a,s),R==null||R(a,s)},[R,B]),f=$o({value:n,defaultValue:l,onValueChange:Ma,inputValue:x,defaultInputValue:D??Va,onInputValueChange:La,open:w,defaultOpen:H,onOpenChange:W,multiple:y,selectedOptionLabel:typeof n=="string"?((dt=me.get(n))==null?void 0:dt.label)??n:void 0,disabled:U,readOnly:I}),M=f.value,be=f.open,q=f.inputValue,ie=r.useMemo(()=>Go(M,!!y),[M,y]),Fa=r.useMemo(()=>ie.map(a=>{var s;return((s=me.get(a))==null?void 0:s.label)??a}),[me,ie]),nt=r.useMemo(()=>{const a=q.trim();return a?ne.filter(s=>Uo(s,a)):ne},[q,ne]),rt=r.useMemo(()=>{const a=q.trim(),s=ne.some(v=>Ko(v,a));return!L||!a||s?null:{value:a,label:A(a),created:!0}},[L,q,A,ne]),J=r.useMemo(()=>rt?[...nt,rt]:nt,[rt,nt]),qa=r.useMemo(()=>J.flatMap((a,s)=>a.disabled?s:[]),[J]),ct=vt(J),ye=be?tt??(ct>=0?ct:null):null,Pa=r.useCallback((a,s,v)=>{if(a){f.openPopup("keyboard");return}O(null),f.closePopup(Zo(v))},[f]),ce=xo({open:be,onOpenChange:Pa,placement:$,middleware:wo({offset:k,extras:[ko({apply({rects:a,elements:s}){s.floating.style.minWidth=`${a.reference.width}px`}})]})}),_a=To(ce.context,{enabled:!U}),Ha=Bo(ce.context,{role:"listbox"}),Na=Ro(ce.context,{listRef:Be,activeIndex:ye,onNavigate:O,disabledIndices:qa,loop:!0,virtual:!0,focusItemOnOpen:!1}),{getReferenceProps:$a,getFloatingProps:za,getItemProps:Ka}=Io([_a,Ha,Na]),Ua=Ho({size:ke}),Wa=Yo(ke),Qa=!!y&&typeof N=="number"&&N>=0&&!pe?N:ie.length,P=ie.slice(0,Qa),Ga=ie.length-P.length,Xa=typeof M=="string"?((pt=me.get(M))==null?void 0:pt.label)??M:"",Ja=!y&&typeof M=="string"&&!q?Xa:q,_=r.useCallback(()=>{var a;(a=Te.current)==null||a.focus()},[]),re=r.useCallback(a=>{var s;(s=Re.current[a])==null||s.focus()},[]),st=r.useCallback(a=>{if(!a.disabled){if(a.created){const s={...a,label:a.value};Da(v=>ft(v,[s])),f.selectOption(s,"create-option"),at(`${a.value} created and selected.`)}else f.selectOption(a),at(`${a.label} selected.`);O(null),requestAnimationFrame(_)}},[_,f]),Ie=r.useCallback((a,s)=>{f.removeOption(a),at(`${s} removed.`)},[f]),Ya=r.useCallback((a,s)=>{Ie(a,s),requestAnimationFrame(_)},[_,Ie]),Za=r.useCallback((a,s,v,Y)=>{if(a.key==="ArrowLeft"){a.preventDefault(),re(s>0?s-1:P.length-1);return}if(a.key==="ArrowRight"){a.preventDefault(),s<P.length-1?re(s+1):_();return}if(a.key==="Escape"){a.preventDefault(),_();return}(a.key==="Backspace"||a.key==="Delete")&&(a.preventDefault(),Ie(v,Y),requestAnimationFrame(()=>{s>0?re(s-1):_()}))},[_,re,Ie,P.length]),eo=r.useCallback(a=>{O(null),f.setInputValue(a.target.value)},[f]),to=r.useCallback(a=>{oe(!0),f.openPopup("focus"),!y&&typeof M=="string"&&a.currentTarget.select()},[M,y,f]),ao=r.useCallback(a=>{!y&&typeof M=="string"&&document.activeElement!==a.currentTarget&&(a.preventDefault(),a.currentTarget.focus(),a.currentTarget.select())},[M,y]),oo=r.useCallback(a=>{if(!(U||I)){if(a.key==="ArrowDown"||a.key==="ArrowUp"){if(!be){a.preventDefault(),f.openPopup("keyboard");const v=(a.key==="ArrowDown"?1:-1)===1?vt(J):J.findLastIndex(Y=>!Y.disabled);O(v>=0?v:null)}return}if(a.key==="Enter"&&ye!==null){const s=J[ye];s&&(a.preventDefault(),st(s));return}if((a.key==="Backspace"||a.key==="Delete")&&q.length===0&&y&&P.length>0){a.preventDefault(),re(P.length-1);return}a.key==="ArrowLeft"&&q.length===0&&y&&P.length>0&&(a.preventDefault(),re(P.length-1))}},[q.length,U,re,st,be,y,J,I,ye,f,P.length]),no=r.useCallback(a=>{const s=a.relatedTarget;requestAnimationFrame(()=>{var mt,bt,yt,gt;const v=document.activeElement,Y=s&&((mt=ae.current)==null?void 0:mt.contains(s))||v&&((bt=ae.current)==null?void 0:bt.contains(v)),po=s&&((yt=de.current)==null?void 0:yt.contains(s))||v&&((gt=de.current)==null?void 0:gt.contains(v));!Y&&!po&&(oe(!1),O(null),f.closePopup("outside-press"))})},[f]),ro=r.useCallback(()=>{oe(!0)},[]),so=r.useCallback(a=>{const s=a.target;s instanceof Element&&s.closest("button, input")!==null||(a.preventDefault(),_())},[_]),lo=r.useCallback(a=>{if(!i||V||ee||U||!m)return;const s=a.currentTarget;s.scrollHeight-s.scrollTop-s.clientHeight<=Xo&&m()},[U,i,V,ee,m]),io=r.useCallback((a,s)=>{Re.current[a]=s},[]),co=r.useCallback((a,s)=>{Be.current[a]=s},[]),uo=r.useCallback(a=>{de.current=a,ce.refs.setFloating(a)},[ce.refs]);return{activeIndex:ye,announcement:ja,ariaDescribedBy:fe,ariaLabel:he,ariaLabelledBy:se,ariaRequired:ve,baseId:te,chipSize:Wa,classes:Ua,className:Xe,currentInputValue:q,currentValue:M,density:K,disabled:U,displayedInputValue:Ja,error:xe,floating:ce,getFloatingProps:za,getItemProps:Ka,getReferenceProps:$a,handleBlurCapture:no,handleControlMouseDown:so,handleFocusCapture:ro,handleInputChange:eo,handleInputFocus:to,handleInputKeyDown:oo,handleInputMouseDown:ao,handleListScroll:lo,handleOptionSelect:st,handleTokenDismiss:Ya,handleTokenKeyDown:Za,hiddenTagCount:Ga,inputId:Ze,inputRef:Te,invalid:we,isOpen:be,listboxId:et,loading:V,loadingMore:ee,loadingText:X,multiple:y,name:C,navigationItems:J,noOptionsText:Qe,otherProps:Je,placeholder:Q,readOnly:I,rootRef:ae,selectedLabels:Fa,selectedValues:ie,setFloatingRef:uo,setItemRef:co,setTokenRef:io,valid:Z,visibleSelectedValues:P}},u=e=>{const t=en(e),{activeIndex:n,announcement:l,ariaDescribedBy:d,ariaLabel:p,ariaLabelledBy:x,ariaRequired:D,baseId:B,chipSize:R,classes:w,className:H,currentInputValue:W,currentValue:y,density:L,disabled:A,displayedInputValue:N,error:Q,floating:$,getFloatingProps:k,getItemProps:G,getReferenceProps:z,handleBlurCapture:C,handleControlMouseDown:E,handleFocusCapture:I,handleInputChange:S,handleInputFocus:Z,handleInputKeyDown:h,handleInputMouseDown:F,handleListScroll:K,handleOptionSelect:V,handleTokenDismiss:ee,handleTokenKeyDown:i,hiddenTagCount:m,inputId:X,inputRef:Qe,invalid:he,isOpen:se,listboxId:fe,loading:ve,loadingMore:Ge,loadingText:U,multiple:xe,name:we,navigationItems:ke,noOptionsText:Xe,otherProps:Je,placeholder:Ye,readOnly:te,rootRef:Ze,selectedLabels:et,selectedValues:ae,setFloatingRef:de,setItemRef:Te,setTokenRef:Be,valid:Re,visibleSelectedValues:tt}=t;return o.jsxs(c,{ref:Ze,className:Ia(w.root,H),"data-disabled":A||void 0,"aria-disabled":A||void 0,onFocusCapture:I,onBlurCapture:C,...Je,children:[we&&ae.map(O=>o.jsx(c,{as:"input",type:"hidden",name:we,value:O,disabled:A},`hidden-${O}`)),o.jsxs(c,{ref:$.refs.setReference,className:w.control,"data-open":se||void 0,"data-disabled":A||void 0,"data-error":Q||void 0,"data-valid":Re||void 0,"data-invalid":he||void 0,onMouseDown:E,children:[o.jsxs(c,{className:w.valueContainer,children:[xe&&tt.map((O,pe)=>{const oe=et[pe]??O;return o.jsx(Ca,{className:w.token,size:R,label:oe,disabled:A||te,dismissButtonRef:le=>Be(pe,le),onDismiss:()=>ee(O,oe),onKeyDown:le=>i(le,pe,O,oe)},O)}),m>0&&o.jsx(c,{as:"span",className:w.overflowIndicator,"aria-label":`${m} more selected`,children:`+${m}`}),o.jsx(c,{as:"input",id:X,ref:Qe,type:"text",role:"combobox","aria-expanded":se,"aria-controls":fe,"aria-autocomplete":"list","aria-activedescendant":se&&n!==null?`${B}-option-${n}`:void 0,"aria-haspopup":"listbox","aria-label":p,"aria-labelledby":x,"aria-describedby":d,"aria-required":D,"aria-disabled":A||void 0,"aria-invalid":Q||he||void 0,disabled:A,readOnly:te,placeholder:ae.length===0?Ye:void 0,value:N,className:w.input,onChange:S,...z({onFocus:Z,onKeyDown:h,onMouseDown:F}),autoComplete:"off"})]}),ve&&o.jsx(c,{as:"span",className:w.loadingIndicator,"aria-hidden":!0,children:o.jsx(So,{size:"sm"})})]}),o.jsx(c,{as:"span",className:w.liveRegion,role:"status","aria-live":"polite","aria-atomic":"true",children:l}),se&&!A&&!te&&o.jsx(Oo,{children:o.jsx(Ao,{context:$.context,modal:!1,initialFocus:-1,children:o.jsx(Sa,{activeIndex:n,baseId:B,density:L,floatingProps:k(),floatingRef:de,floatingStyles:$.floatingStyles,getItemProps:O=>G(O),items:ke,listboxClassName:w.listbox,listboxId:fe,loading:ve,loadingMore:Ge,loadingText:U,multiple:!!xe,noOptionsText:Xe,onScroll:K,onSelect:V,query:W.trim(),selectedValues:ae,setItemRef:Te,statusClassName:w.status,value:y})})})]})};u.__docgenInfo={description:'Filters and selects one or more metadata-only `Option` values.\n\nUse controlled `value` and `onValueChange`, or initialize uncontrolled state\nwith `defaultValue`. The input uses combobox semantics; arrow keys navigate,\nEnter selects, and Escape closes the listbox. Supply `aria-label` or\n`aria-labelledby` when no external label is associated with the input.\n\n@example\n```tsx\n<Autocomplete defaultValue="active" aria-label="Status">\n  <Option value="active" label="Active" />\n  <Option value="archived" label="Archived" />\n</Autocomplete>\n```',methods:[],displayName:"Autocomplete"};const ge=e=>null;ge.__autocompleteComponentType="Option";const Ea=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],We=[...Ea,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],g=(e=Ea)=>e.map(t=>o.jsx(ge,{value:t.value,label:t.label,description:t.description},t.value)),In={title:"Components/Autocomplete",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},Oe={render:function(t){const[n,l]=r.useState(null);return o.jsx(c,{w:"xs",children:o.jsx(u,{...t,multiple:!1,value:n,defaultValue:void 0,onValueChange:l,onChange:void 0,name:"technology",children:g()})})}},Ae={render:()=>o.jsx(c,{w:"xs",children:o.jsx(u,{name:"technology-filter","aria-label":"Filter technologies",children:g()})}),play:async({canvasElement:e})=>{const t=j(e),n=j(document.body),l=t.getByRole("combobox");await T.type(l,"typ"),await b(n.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await b(n.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await T.clear(l),await T.type(l,"workshop");const d=n.getByRole("option",{name:/storybook component workshop/i});await b(j(d).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Se={render:e=>o.jsx(c,{w:"xs",children:o.jsx(u,{...e,multiple:!1,value:void 0,defaultValue:"react",onValueChange:void 0,onChange:void 0,name:"technology",children:g()})}),play:async({canvasElement:e})=>{const t=j(e).getByRole("combobox",{name:"Technology"});await T.click(t),await T.keyboard("P"),await b(t).toHaveValue("P")}},Ce={render:function(){const[t,n]=r.useState(["react","typescript","storybook"]);return o.jsx(c,{w:"sm",children:o.jsx(u,{multiple:!0,value:t,onValueChange:n,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:g()})})},play:async({canvasElement:e})=>{const t=j(e),n=j(document.body),l=t.getByRole("combobox"),d=t.getByRole("button",{name:"Remove React"});await T.click(l),await b(n.queryByRole("checkbox")).not.toBeInTheDocument(),await T.click(d),await b(t.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument(),await b(l).toHaveFocus()},parameters:{controls:{disable:!0}}},Ee={render:()=>o.jsx(c,{w:"224",children:o.jsx(u,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:g()})}),parameters:{controls:{disable:!0}}},De={render:()=>o.jsx(c,{w:"sm",children:o.jsx(u,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:g()})}),play:async({canvasElement:e})=>{const t=j(e);await b(t.getByText("+3")).toBeInTheDocument(),await T.click(t.getByRole("combobox")),await b(t.queryByText("+3")).not.toBeInTheDocument(),await b(t.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},je={render:()=>o.jsx(c,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(e=>o.jsx(u,{size:e,defaultValue:"react",name:`technology-${e}`,"aria-label":`${e} autocomplete`,children:g()},e))}),parameters:{controls:{disable:!0}}},Ve={render:()=>o.jsxs(c,{display:"grid",gap:"12",w:"sm",children:[o.jsx(u,{name:"default","aria-label":"Default",children:g()}),o.jsx(u,{name:"valid","aria-label":"Valid",valid:!0,children:g()}),o.jsx(u,{name:"invalid","aria-label":"Invalid",invalid:!0,children:g()}),o.jsx(u,{name:"error","aria-label":"Error",error:!0,children:g()})]}),parameters:{controls:{disable:!0}}},Me={render:()=>o.jsx(c,{w:"sm",children:o.jsx(u,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:g()})}),play:async({canvasElement:e})=>{const t=j(e);await b(t.getByRole("combobox")).toBeDisabled(),await b(t.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},Le={render:()=>o.jsx(c,{w:"sm",children:o.jsxs(u,{name:"framework","aria-label":"Framework",children:[o.jsx(ge,{value:"react",label:"React"}),o.jsx(ge,{value:"legacy",label:"Legacy framework",disabled:!0}),o.jsx(ge,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},Fe={render:()=>o.jsx(c,{w:"sm",children:o.jsx(u,{multiple:!0,allowCustomValue:!0,defaultValue:["react"],name:"custom-stack","aria-label":"Technologies",placeholder:"Add a technology…",children:g()})}),play:async({canvasElement:e})=>{const t=j(e),n=t.getByRole("combobox");await T.type(n,"Svelte");const l=j(document.body);await b(l.getByRole("option",{name:/create “svelte”/i})).toBeInTheDocument(),await T.keyboard("{ArrowDown}{Enter}"),await b(t.getByRole("button",{name:"Remove Svelte"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},qe={render:()=>o.jsx(c,{w:"sm",children:o.jsx(u,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},Pe={render:function(){const[t,n]=r.useState(()=>We.slice(0,8)),[l,d]=r.useState(!1),p=t.length<We.length,x=()=>{l||!p||(d(!0),window.setTimeout(()=>{n(D=>We.slice(0,D.length+4)),d(!1)},200))};return o.jsx(c,{w:"sm",children:o.jsx(u,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:p,loadingMore:l,onLoadMore:x,children:g(t)})})},parameters:{controls:{disable:!0}}},_e={render:()=>o.jsx(c,{w:"sm",children:o.jsx(u,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:g()})}),parameters:{controls:{disable:!0}}},He={render:function(){const[t,n]=r.useState("");return o.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[o.jsx(u,{inputValue:t,onInputValueChange:n,name:"controlled-input","aria-label":"Controlled query",children:g()}),o.jsx(c,{color:"text.subtle",children:`Query: ${t||"empty"}`})]})},parameters:{controls:{disable:!0}}},Ne={render:function(){const[t,n]=r.useState(!1),[l,d]=r.useState(0),p=x=>{n(x),d(D=>D+1)};return o.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[o.jsx(vo,{onClick:()=>n(x=>!x),children:"Toggle suggestions"}),o.jsx(u,{open:t,onOpenChange:p,name:"controlled-open","aria-label":"Controlled suggestions",children:g()}),o.jsx(c,{color:"text.subtle",children:`Open changes: ${l}`})]})},play:async({canvasElement:e})=>{const t=j(e),n=t.getByRole("combobox");await T.click(n),await b(t.getByText("Open changes: 1")).toBeInTheDocument(),await T.keyboard("{Escape}"),await b(t.getByText("Open changes: 2")).toBeInTheDocument(),await b(n).toHaveAttribute("aria-expanded","false")},parameters:{controls:{disable:!0}}},$e={name:"Ex: With FormField",render:()=>o.jsx(c,{w:"sm",children:o.jsx(Oa,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:o.jsx(u,{id:"primary-technology",name:"primaryTechnology",children:g()})})}),parameters:{controls:{disable:!0}}},ze={name:"Ex: Technology Assignment",render:()=>o.jsx(c,{w:"md",children:o.jsx(Oa,{label:"Project stack",labelFor:"project-stack",helpText:"Search the supported catalog or create a project-specific value.",children:o.jsx(u,{id:"project-stack",name:"projectStack",multiple:!0,allowCustomValue:!0,defaultValue:["react","typescript"],placeholder:"Add technology…",children:g(We)})})}),parameters:{controls:{disable:!0}}},Ke={name:"Ex: Keyboard Selection",render:()=>o.jsx(c,{w:"sm",children:o.jsx(u,{name:"keyboard","aria-label":"Keyboard selection",children:g()})}),play:async({canvasElement:e})=>{const n=j(e).getByRole("combobox");await T.click(n),await b(n).toHaveAttribute("aria-expanded","true"),await b(n).toHaveAttribute("aria-activedescendant"),await T.keyboard("{Enter}"),await b(n).toHaveValue("React")},parameters:{controls:{disable:!0}}},Ue={name:"Ex: Keyboard Token Editing",render:()=>o.jsx(c,{w:"sm",children:o.jsx(u,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:g()})}),play:async({canvasElement:e})=>{const t=j(e),n=t.getByRole("combobox"),l=t.getByRole("button",{name:"Remove TypeScript"});await T.click(n),await T.keyboard("{Backspace}"),await b(l).toHaveFocus(),await b(l).toBeInTheDocument(),await T.keyboard("{Backspace}"),await b(t.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}};var xt,wt,kt;Oe.parameters={...Oe.parameters,docs:{...(xt=Oe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} multiple={false} value={value} defaultValue={undefined} onValueChange={setValue} onChange={undefined} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(kt=(wt=Oe.parameters)==null?void 0:wt.docs)==null?void 0:kt.source}}};var Tt,Bt,Rt;Ae.parameters={...Ae.parameters,docs:{...(Tt=Ae.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Rt=(Bt=Ae.parameters)==null?void 0:Bt.docs)==null?void 0:Rt.source}}};var It,Ot,At;Se.parameters={...Se.parameters,docs:{...(It=Se.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(At=(Ot=Se.parameters)==null?void 0:Ot.docs)==null?void 0:At.source}}};var St,Ct,Et;Ce.parameters={...Ce.parameters,docs:{...(St=Ce.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Et=(Ct=Ce.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var Dt,jt,Vt;Ee.parameters={...Ee.parameters,docs:{...(Dt=Ee.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Vt=(jt=Ee.parameters)==null?void 0:jt.docs)==null?void 0:Vt.source}}};var Mt,Lt,Ft;De.parameters={...De.parameters,docs:{...(Mt=De.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ft=(Lt=De.parameters)==null?void 0:Lt.docs)==null?void 0:Ft.source}}};var qt,Pt,_t;je.parameters={...je.parameters,docs:{...(qt=je.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(_t=(Pt=je.parameters)==null?void 0:Pt.docs)==null?void 0:_t.source}}};var Ht,Nt,$t;Ve.parameters={...Ve.parameters,docs:{...(Ht=Ve.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...($t=(Nt=Ve.parameters)==null?void 0:Nt.docs)==null?void 0:$t.source}}};var zt,Kt,Ut;Me.parameters={...Me.parameters,docs:{...(zt=Me.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Kt=Me.parameters)==null?void 0:Kt.docs)==null?void 0:Ut.source}}};var Wt,Qt,Gt;Le.parameters={...Le.parameters,docs:{...(Wt=Le.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Gt=(Qt=Le.parameters)==null?void 0:Qt.docs)==null?void 0:Gt.source}}};var Xt,Jt,Yt;Fe.parameters={...Fe.parameters,docs:{...(Xt=Fe.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(Yt=(Jt=Fe.parameters)==null?void 0:Jt.docs)==null?void 0:Yt.source}}};var Zt,ea,ta;qe.parameters={...qe.parameters,docs:{...(Zt=qe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ta=(ea=qe.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,oa,na;Pe.parameters={...Pe.parameters,docs:{...(aa=Pe.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(na=(oa=Pe.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};var ra,sa,la;_e.parameters={..._e.parameters,docs:{...(ra=_e.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(la=(sa=_e.parameters)==null?void 0:sa.docs)==null?void 0:la.source}}};var ia,ca,ua;He.parameters={...He.parameters,docs:{...(ia=He.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ua=(ca=He.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var da,pa,ma;Ne.parameters={...Ne.parameters,docs:{...(da=Ne.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(pa=Ne.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ba,ya,ga;$e.parameters={...$e.parameters,docs:{...(ba=$e.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(ga=(ya=$e.parameters)==null?void 0:ya.docs)==null?void 0:ga.source}}};var ha,fa,va;ze.parameters={...ze.parameters,docs:{...(ha=ze.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(va=(fa=ze.parameters)==null?void 0:fa.docs)==null?void 0:va.source}}};var xa,wa,ka;Ke.parameters={...Ke.parameters,docs:{...(xa=Ke.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(ka=(wa=Ke.parameters)==null?void 0:wa.docs)==null?void 0:ka.source}}};var Ta,Ba,Ra;Ue.parameters={...Ue.parameters,docs:{...(Ta=Ue.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Ra=(Ba=Ue.parameters)==null?void 0:Ba.docs)==null?void 0:Ra.source}}};const On=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing"];export{Fe as AllowCustomValue,He as ControlledInput,Ne as ControlledOpen,Oe as Default,Me as Disabled,Le as DisabledOptions,_e as EmptyResults,Ae as Filtering,Pe as InfiniteLoading,Ke as KeyboardSelection,Ue as KeyboardTokenEditing,De as LimitTags,qe as Loading,Ce as Multiple,Ee as MultipleLongValues,Se as Selected,je as Sizes,ze as TechnologyAssignmentExample,Ve as ValidationStates,$e as WithFormField,On as __namedExportsOrder,In as default};
