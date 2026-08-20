import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BKyFwriW.js";import{w as D,u as k,e as u}from"./index-DPYJpPba.js";import{m as so,c as ro,s as lo,a as io,g as co,d as Ba,B as c,b as uo}from"./Box-hQsv43T0.js";import{B as po}from"./Button-CclGr6PH.js";import{F as Ta}from"./FormField-QmgHgoTh.js";import{u as mo,c as bo,s as yo,b as go,d as ho,e as vo,g as fo,F as xo,h as wo}from"./Tooltip-5ocLrcmg.js";import{S as ko}from"./Spinner-CWYNaIMm.js";import{m as Bo}from"./menu-B62u-Pgp.js";import{I as To}from"./Icon-CeNev6VN.js";import{L as Ro,a as Io}from"./ListItem-NY1dUmu2.js";import{C as Ao}from"./Chip-zHgni3MA.js";import{u as Oo}from"./FieldContext-D6URyQos.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconConfig--ZkZIXf6.js";import"./Label-E-JLjBSC.js";import"./Text-Du5uM3rO.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-CQH7sxBN.js";import"./Checkbox-D9bBXgHU.js";import"./Divider-DrXBfsNR.js";import"./Toggle-Bk_B4o8o.js";const Ra={size:"md"},So=[],Co=[["root","autocomplete__root"],["control","autocomplete__control"],["valueContainer","autocomplete__valueContainer"],["input","autocomplete__input"],["token","autocomplete__token"],["overflowIndicator","autocomplete__overflowIndicator"],["loadingIndicator","autocomplete__loadingIndicator"],["listbox","autocomplete__listbox"],["status","autocomplete__status"],["liveRegion","autocomplete__liveRegion"]],Eo=Co.map(([e,t])=>[e,io(t,Ra,co(So,e))]),Do=so((e={})=>Object.fromEntries(Eo.map(([t,n])=>[t,n.recipeFn(e)]))),bt=["size"],jo=e=>({...Ra,...ro(e)}),Vo=Object.assign(Do,{__recipe__:!1,__name__:"autocomplete",raw:e=>e,classNameMap:{},variantKeys:bt,variantMap:{size:["sm","md","lg","xl"]},splitVariantProps(e){return lo(e,bt)},getVariantProps:jo}),Ia=e=>{const{activeIndex:t,baseId:n,density:l,floatingProps:d,floatingRef:p,floatingStyles:v,getItemProps:C,items:f,listboxClassName:T,listboxId:R,loading:$,loadingMore:z,loadingText:O,multiple:L,noOptionsText:A,onScroll:F,onSelect:K,query:B,selectedValues:Z,setItemRef:Q,statusClassName:I,value:S}=e,E=Bo({density:l}),x=$&&f.length===0,ee=!$&&f.length===0,U=new Set(Z);return o.jsxs(Ro,{ref:p,id:R,role:"listbox","aria-label":"Suggestions","aria-multiselectable":L||void 0,"aria-busy":$||z||void 0,density:l,query:B,highlightMatches:!0,className:Ba(E.wrapper,T),style:v,onScroll:F,...d,children:[f.map((w,q)=>{const W=L?U.has(w.value):S===w.value;return o.jsx(Io,{id:`${n}-option-${q}`,ref:j=>Q(q,j),disabled:w.disabled,selected:W,density:l,before:L?o.jsx(To,{name:W?"checkbox-checked":"checkbox",fill:W?"icon":"icon.subtlest",display:"block","aria-hidden":!0}):void 0,label:w.label,description:w.description,iconBefore:w.iconLeft,iconAfter:w.iconRight,highlightMatches:!w.created,tabIndex:-1,bg:t===q?"bg.neutral.hovered":void 0,"data-active":t===q||void 0,...C({onMouseDown:j=>j.preventDefault(),onClick:()=>{w.disabled||K(w)}})},`${w.created?"create":"option"}-${w.value}`)}),x&&o.jsx(c,{className:I,role:"status",children:O}),ee&&o.jsx(c,{className:I,role:"status",children:A}),z&&o.jsx(c,{className:I,role:"status",children:O})]})};Ia.__docgenInfo={description:"",methods:[],displayName:"AutocompleteListbox",props:{activeIndex:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},baseId:{required:!0,tsType:{name:"string"},description:""},density:{required:!0,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},floatingProps:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},floatingRef:{required:!0,tsType:{name:"RefCallback",elements:[{name:"HTMLDivElement"}],raw:"RefCallback<HTMLDivElement>"},description:""},floatingStyles:{required:!0,tsType:{name:"CSSProperties"},description:""},getItemProps:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: HTMLProps<HTMLElement>) => Record<string, unknown>",signature:{arguments:[{type:{name:"HTMLProps",elements:[{name:"HTMLElement"}],raw:"HTMLProps<HTMLElement>"},name:"props"}],return:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}}},description:""},items:{required:!0,tsType:{name:"unknown"},description:""},listboxClassName:{required:!0,tsType:{name:"string"},description:""},listboxId:{required:!0,tsType:{name:"string"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},loadingMore:{required:!0,tsType:{name:"boolean"},description:""},loadingText:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},noOptionsText:{required:!0,tsType:{name:"ReactNode"},description:""},onScroll:{required:!0,tsType:{name:"UIEventHandler",elements:[{name:"HTMLDivElement"}],raw:"UIEventHandler<HTMLDivElement>"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOptionData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
  created?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"iconLeft",value:{name:"IconNamesList",required:!1}},{key:"iconRight",value:{name:"IconNamesList",required:!1}},{key:"created",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},query:{required:!0,tsType:{name:"string"},description:""},selectedValues:{required:!0,tsType:{name:"unknown"},description:""},setItemRef:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, node: HTMLElement | null) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},name:"node"}],return:{name:"void"}}},description:""},statusClassName:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""}}};const Aa=e=>{const{className:t,disabled:n,dismissButtonRef:l,isNew:d,label:p,onDismiss:v,onKeyDown:C,size:f}=e;return o.jsx(Ao,{className:t,"data-new":d||void 0,size:f,dismissable:!0,disabled:n,dismissButtonRef:l,dismissButtonTabIndex:-1,onDismiss:v,onDismissKeyDown:C,children:p})};Aa.__docgenInfo={description:"",methods:[],displayName:"AutocompleteToken",props:{className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dismissButtonRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},isNew:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""}}};const Mo=e=>e?[]:null,Lo=({value:e,defaultValue:t,onValueChange:n,inputValue:l,defaultInputValue:d="",onInputValueChange:p,open:v,defaultOpen:C=!1,onOpenChange:f,multiple:T=!1,disabled:R=!1,readOnly:$=!1})=>{const[z,O]=s.useState(()=>t!==void 0?t:Mo(T)),[L,A]=s.useState(d),[F,K]=s.useState(C),B=e!==void 0?e:z,Z=l!==void 0?l:L,Q=v!==void 0?v:F,I=R||$,S=s.useCallback((i,g)=>{e===void 0&&O(i),n==null||n(i,g)},[e,n]),E=s.useCallback((i,g)=>{l===void 0&&A(i),p==null||p(i,g)},[l,p]),x=s.useCallback((i,g)=>{v===void 0&&K(i),f==null||f(i,g)},[v,f]),ee=s.useCallback(i=>{I||(E(i,"input"),!T&&typeof B=="string"&&S(null,"clear"),x(!0,"input"))},[E,x,S,I,T,B]),U=s.useCallback((i,g="select-option")=>{if(!(I||i.disabled)){if(T){const P=Array.isArray(B)?B:[];if(P.includes(i.value))return;S([...P,i.value],g),E("","selection"),x(!0,"selection");return}B!==i.value&&(S(i.value,g),E("","selection"),x(!1,"selection"))}},[E,x,S,I,T,B]),w=s.useCallback(i=>{const g=i.trim();g&&U({value:g,label:g},"create-option")},[U]),q=s.useCallback(i=>{if(!I){if(T){const g=Array.isArray(B)?B:[];if(!g.includes(i))return;S(g.filter(P=>P!==i),"remove-option");return}B===i&&(S(null,"remove-option"),E("","clear"))}},[E,S,I,T,B]),W=s.useCallback(i=>{I||x(!0,i)},[x,I]),j=s.useCallback(i=>{x(!1,i)},[x]);return{value:B,inputValue:Z,open:Q,setInputValue:ee,selectOption:U,createOption:w,removeOption:q,openPopup:W,closePopup:j}},Fo="__autocompleteComponentType",le=e=>e.trim().toLowerCase(),qo=(e,t)=>{const n=le(t);return n?le(e.value)===n||le(e.label)===n:!1},Po=(e,t)=>{const n=le(t);return n?le(e.label).includes(n)||e.description!==void 0&&le(e.description).includes(n):!0},Ho=e=>s.isValidElement(e)&&typeof e.type=="function"&&e.type[Fo]==="Option",No=e=>s.Children.toArray(e).reduce((t,n)=>(Ho(n)&&t.push({value:n.props.value,label:n.props.label,disabled:n.props.disabled,description:n.props.description,iconLeft:n.props.iconLeft,iconRight:n.props.iconRight,created:!1}),t),[]),yt=(...e)=>{const t=new Map;return e.forEach(n=>{n.forEach(l=>{t.has(l.value)||t.set(l.value,l)})}),Array.from(t.values())},_o=(e,t)=>t?Array.isArray(e)?e:e?[e]:[]:typeof e=="string"?[e]:[],gt=e=>e.findIndex(t=>!t.disabled),$o=32,zo=e=>`Add “${e}”`,rt={sm:"sm",md:"sm",lg:"md",xl:"md"},Ko=e=>{if(!e||typeof e=="string")return rt[e??"md"];const n=(Array.isArray(e)?e:Object.values(e)).find(l=>typeof l=="string"&&l in rt);return n?rt[n]:"sm"},Uo=e=>e==="escape-key"?"escape":"outside-press",Wo=e=>{const t=Oo(),{value:n,defaultValue:l,onValueChange:d,onChange:p,inputValue:v,defaultInputValue:C,onInputValueChange:f,onInputChange:T,open:R,defaultOpen:$,onOpenChange:z,multiple:O=!1,allowCustomValue:L=!1,getCreateOptionLabel:A=zo,limitTags:F,placeholder:K="Select...",placement:B="bottom-start",offset:Z=4,children:Q,id:I,name:S,disabled:E,readOnly:x=!1,error:ee,valid:U=!1,invalid:w,size:q,density:W="compact",loading:j=!1,loadingMore:i=!1,hasMore:g=!1,onLoadMore:P,loadingText:he="Loading options…",noOptionsText:oe="No options","aria-label":ve,"aria-labelledby":fe,"aria-describedby":Ue,"aria-required":We,...Qe}=e,H=E??(t==null?void 0:t.disabled)??!1,Ge=ee??(t==null?void 0:t.error)??!1,Xe=w??(t==null?void 0:t.invalid)??!1,xe=q??(t==null?void 0:t.size)??"md",[Je,ie]=uo(Qe),Ye=s.useId(),ce=I??`autocomplete-${Ye}`,Ze=ce,ue=`${ce}-listbox`,de=s.useRef(null),pe=s.useRef(null),we=s.useRef(null),ke=s.useRef([]),Be=s.useRef([]),[V,M]=s.useState(null),[me,ne]=s.useState(!1),[se,Sa]=s.useState([]),[Ca,et]=s.useState(""),lt=s.useMemo(()=>No(Q),[Q]),te=s.useMemo(()=>yt(lt,se),[lt,se]),it=s.useMemo(()=>new Map(te.map(a=>[a.value,a])),[te]),Ea=s.useCallback((a,r)=>{if(O){const Y=a;d==null||d(Y,r),p==null||p(Y,r);return}const b=a;d==null||d(b,r),p==null||p(b,r)},[O,p,d]),Da=s.useCallback((a,r)=>{f==null||f(a,r),T==null||T(a,r)},[T,f]),h=Lo({value:n,defaultValue:l,onValueChange:Ea,inputValue:v,defaultInputValue:C,onInputValueChange:Da,open:R,defaultOpen:$,onOpenChange:z,multiple:O,disabled:H,readOnly:x}),tt=h.value,be=h.open,G=h.inputValue,X=s.useMemo(()=>_o(tt,!!O),[tt,O]),at=s.useMemo(()=>X.map(a=>it.get(a)),[it,X]),ja=s.useMemo(()=>X.map((a,r)=>{var b;return((b=at[r])==null?void 0:b.label)??a}),[at,X]),ot=s.useMemo(()=>{const a=G.trim();return a?te.filter(r=>Po(r,a)):te},[G,te]),nt=s.useMemo(()=>{const a=G.trim(),r=te.some(b=>qo(b,a));return!L||!a||r?null:{value:a,label:A(a),created:!0}},[L,G,A,te]),J=s.useMemo(()=>nt?[nt,...ot]:ot,[nt,ot]),Va=s.useMemo(()=>J.flatMap((a,r)=>a.disabled?r:[]),[J]),ct=gt(J),ye=be?V??(ct>=0?ct:null):null,Ma=s.useCallback((a,r,b)=>{if(a){h.openPopup("keyboard");return}M(null),h.closePopup(Uo(b))},[h]),re=mo({open:be,onOpenChange:Ma,placement:B,middleware:bo({offset:Z,extras:[yo({apply({rects:a,elements:r}){r.floating.style.minWidth=`${a.reference.width}px`}})]})}),La=go(re.context,{enabled:!H}),Fa=ho(re.context,{role:"listbox"}),qa=vo(re.context,{listRef:ke,activeIndex:ye,onNavigate:M,disabledIndices:Va,loop:!0,virtual:!0,focusItemOnOpen:!1}),{getReferenceProps:Pa,getFloatingProps:Ha,getItemProps:Na}=fo([La,Fa,qa]),_a=Vo({size:xe}),$a=Ko(xe),za=!!O&&typeof F=="number"&&F>=0&&!me?F:X.length,N=X.slice(0,za),Ka=X.length-N.length,_=s.useCallback(()=>{var a;(a=we.current)==null||a.focus()},[]),ae=s.useCallback(a=>{var r;(r=Be.current[a])==null||r.focus()},[]),st=s.useCallback(a=>{if(!a.disabled){if(a.created){const r={...a,label:a.value};Sa(b=>yt(b,[r])),h.selectOption(r,"create-option"),et(`${a.value} created and selected.`)}else h.selectOption(a),et(`${a.label} selected.`);M(null),requestAnimationFrame(_)}},[_,h]),Te=s.useCallback((a,r)=>{h.removeOption(a),et(`${r} removed.`)},[h]),Ua=s.useCallback((a,r)=>{Te(a,r),requestAnimationFrame(_)},[_,Te]),Wa=s.useCallback((a,r,b,Y)=>{if(a.key==="ArrowLeft"){a.preventDefault(),ae(r>0?r-1:N.length-1);return}if(a.key==="ArrowRight"){a.preventDefault(),r<N.length-1?ae(r+1):_();return}if(a.key==="Escape"){a.preventDefault(),_();return}(a.key==="Backspace"||a.key==="Delete")&&(a.preventDefault(),Te(b,Y),requestAnimationFrame(()=>{r>0?ae(r-1):_()}))},[_,ae,Te,N.length]),Qa=s.useCallback(a=>{M(null),h.setInputValue(a.target.value)},[h]),Ga=s.useCallback(()=>{ne(!0),h.openPopup("focus")},[h]),Xa=s.useCallback(a=>{if(!(H||x)){if(a.key==="ArrowDown"||a.key==="ArrowUp"){if(!be){a.preventDefault(),h.openPopup("keyboard");const b=(a.key==="ArrowDown"?1:-1)===1?gt(J):J.findLastIndex(Y=>!Y.disabled);M(b>=0?b:null)}return}if(a.key==="Enter"&&ye!==null){const r=J[ye];r&&(a.preventDefault(),st(r));return}if((a.key==="Backspace"||a.key==="Delete")&&G.length===0&&N.length>0){a.preventDefault(),ae(N.length-1);return}a.key==="ArrowLeft"&&G.length===0&&N.length>0&&(a.preventDefault(),ae(N.length-1))}},[G.length,H,ae,st,be,J,x,ye,h,N.length]),Ja=s.useCallback(a=>{const r=a.relatedTarget;requestAnimationFrame(()=>{var ut,dt,pt,mt;const b=document.activeElement,Y=r&&((ut=de.current)==null?void 0:ut.contains(r))||b&&((dt=de.current)==null?void 0:dt.contains(b)),no=r&&((pt=pe.current)==null?void 0:pt.contains(r))||b&&((mt=pe.current)==null?void 0:mt.contains(b));!Y&&!no&&(ne(!1),M(null),h.closePopup("outside-press"))})},[h]),Ya=s.useCallback(()=>{ne(!0)},[]),Za=s.useCallback(a=>{const r=a.target;r instanceof Element&&r.closest("button, input")!==null||(a.preventDefault(),_())},[_]),eo=s.useCallback(a=>{if(!g||j||i||H||!P)return;const r=a.currentTarget;r.scrollHeight-r.scrollTop-r.clientHeight<=$o&&P()},[H,g,j,i,P]),to=s.useCallback((a,r)=>{Be.current[a]=r},[]),ao=s.useCallback((a,r)=>{ke.current[a]=r},[]),oo=s.useCallback(a=>{pe.current=a,re.refs.setFloating(a)},[re.refs]);return{activeIndex:ye,announcement:Ca,ariaDescribedBy:Ue,ariaLabel:ve,ariaLabelledBy:fe,ariaRequired:We,baseId:ce,chipSize:$a,classes:_a,className:Je,currentInputValue:G,currentValue:tt,density:W,disabled:H,error:Ge,floating:re,getFloatingProps:Ha,getItemProps:Na,getReferenceProps:Pa,handleBlurCapture:Ja,handleControlMouseDown:Za,handleFocusCapture:Ya,handleInputChange:Qa,handleInputFocus:Ga,handleInputKeyDown:Xa,handleListScroll:eo,handleOptionSelect:st,handleTokenDismiss:Ua,handleTokenKeyDown:Wa,hiddenTagCount:Ka,inputId:Ze,inputRef:we,invalid:Xe,isOpen:be,listboxId:ue,loading:j,loadingMore:i,loadingText:he,multiple:O,name:S,navigationItems:J,noOptionsText:oe,otherProps:ie,placeholder:K,readOnly:x,rootRef:de,selectedLabels:ja,selectedOptions:at,selectedValues:X,setFloatingRef:oo,setItemRef:ao,setTokenRef:to,valid:U,visibleSelectedValues:N}},m=e=>{const t=Wo(e),{activeIndex:n,announcement:l,ariaDescribedBy:d,ariaLabel:p,ariaLabelledBy:v,ariaRequired:C,baseId:f,chipSize:T,classes:R,className:$,currentInputValue:z,currentValue:O,density:L,disabled:A,error:F,floating:K,getFloatingProps:B,getItemProps:Z,getReferenceProps:Q,handleBlurCapture:I,handleControlMouseDown:S,handleFocusCapture:E,handleInputChange:x,handleInputFocus:ee,handleInputKeyDown:U,handleListScroll:w,handleOptionSelect:q,handleTokenDismiss:W,handleTokenKeyDown:j,hiddenTagCount:i,inputId:g,inputRef:P,invalid:he,isOpen:oe,listboxId:ve,loading:fe,loadingMore:Ue,loadingText:We,multiple:Qe,name:H,navigationItems:Ge,noOptionsText:Xe,otherProps:xe,placeholder:Je,readOnly:ie,rootRef:Ye,selectedLabels:ce,selectedOptions:Ze,selectedValues:ue,setFloatingRef:de,setItemRef:pe,setTokenRef:we,valid:ke,visibleSelectedValues:Be}=t;return o.jsxs(c,{ref:Ye,className:Ba(R.root,$),"data-disabled":A||void 0,"aria-disabled":A||void 0,onFocusCapture:E,onBlurCapture:I,...xe,children:[H&&ue.map(V=>o.jsx(c,{as:"input",type:"hidden",name:H,value:V,disabled:A},`hidden-${V}`)),o.jsxs(c,{ref:K.refs.setReference,className:R.control,"data-open":oe||void 0,"data-disabled":A||void 0,"data-error":F||void 0,"data-valid":ke||void 0,"data-invalid":he||void 0,onMouseDown:S,children:[o.jsxs(c,{className:R.valueContainer,children:[Be.map((V,M)=>{var ne;const me=ce[M]??V;return o.jsx(Aa,{className:R.token,size:T,label:me,isNew:(ne=Ze[M])==null?void 0:ne.created,disabled:A||ie,dismissButtonRef:se=>we(M,se),onDismiss:()=>W(V,me),onKeyDown:se=>j(se,M,V,me)},V)}),i>0&&o.jsx(c,{as:"span",className:R.overflowIndicator,"aria-label":`${i} more selected`,children:`+${i}`}),o.jsx(c,{as:"input",id:g,ref:P,type:"text",role:"combobox","aria-expanded":oe,"aria-controls":ve,"aria-autocomplete":"list","aria-activedescendant":oe&&n!==null?`${f}-option-${n}`:void 0,"aria-haspopup":"listbox","aria-label":p,"aria-labelledby":v,"aria-describedby":d,"aria-required":C,"aria-disabled":A||void 0,"aria-invalid":F||he||void 0,disabled:A,readOnly:ie,placeholder:ue.length===0?Je:void 0,value:z,className:R.input,onChange:x,...Q({onFocus:ee,onKeyDown:U}),autoComplete:"off"})]}),fe&&o.jsx(c,{as:"span",className:R.loadingIndicator,"aria-hidden":!0,children:o.jsx(ko,{size:"sm"})})]}),o.jsx(c,{as:"span",className:R.liveRegion,role:"status","aria-live":"polite","aria-atomic":"true",children:l}),oe&&!A&&!ie&&o.jsx(xo,{children:o.jsx(wo,{context:K.context,modal:!1,initialFocus:-1,children:o.jsx(Ia,{activeIndex:n,baseId:f,density:L,floatingProps:B(),floatingRef:de,floatingStyles:K.floatingStyles,getItemProps:V=>Z(V),items:Ge,listboxClassName:R.listbox,listboxId:ve,loading:fe,loadingMore:Ue,loadingText:We,multiple:!!Qe,noOptionsText:Xe,onScroll:w,onSelect:q,query:z.trim(),selectedValues:ue,setItemRef:pe,statusClassName:R.status,value:O})})})]})};m.__docgenInfo={description:'Filters and selects one or more metadata-only `Option` values.\n\nUse controlled `value` and `onValueChange`, or initialize uncontrolled state\nwith `defaultValue`. The input uses combobox semantics; arrow keys navigate,\nEnter selects, and Escape closes the listbox. Supply `aria-label` or\n`aria-labelledby` when no external label is associated with the input.\nSelected values render as dismissible chips in both single- and\nmultiple-selection modes.\n\n@example\n```tsx\n<Autocomplete defaultValue="active" aria-label="Status">\n  <Option value="active" label="Active" />\n  <Option value="archived" label="Archived" />\n</Autocomplete>\n```',methods:[],displayName:"Autocomplete"};const ge=e=>null;ge.__autocompleteComponentType="Option";const Oa=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],Ke=[...Oa,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],y=(e=Oa)=>e.map(t=>o.jsx(ge,{value:t.value,label:t.label,description:t.description},t.value)),fn={title:"Components/Autocomplete",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},Re={render:function(t){const[n,l]=s.useState(null);return o.jsx(c,{w:"xs",children:o.jsx(m,{...t,multiple:!1,value:n,defaultValue:void 0,onValueChange:l,onChange:void 0,name:"technology",children:y()})})}},Ie={render:()=>o.jsx(c,{w:"xs",children:o.jsx(m,{name:"technology-filter","aria-label":"Filter technologies",children:y()})}),play:async({canvasElement:e})=>{const t=D(e),n=D(document.body),l=t.getByRole("combobox");await k.type(l,"typ"),await u(n.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await u(n.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await k.clear(l),await k.type(l,"workshop");const d=n.getByRole("option",{name:/storybook component workshop/i});await u(D(d).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Ae={render:e=>o.jsx(c,{w:"xs",children:o.jsx(m,{...e,multiple:!1,value:void 0,defaultValue:"react",onValueChange:void 0,onChange:void 0,name:"technology",children:y()})}),play:async({canvasElement:e})=>{const t=D(e),n=t.getByRole("combobox",{name:"Technology"});await u(n).toHaveValue(""),await u(t.getByRole("button",{name:"Remove React"})).toBeInTheDocument(),await k.click(n),await k.keyboard("P"),await u(n).toHaveValue("P"),await u(t.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument()}},Oe={render:function(){const[t,n]=s.useState(["react","typescript","storybook"]);return o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,value:t,onValueChange:n,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:y()})})},play:async({canvasElement:e})=>{const t=D(e),n=D(document.body),l=t.getByRole("combobox"),d=t.getByRole("button",{name:"Remove React"});await k.click(l),await u(n.queryByRole("checkbox")).not.toBeInTheDocument(),await k.click(d),await u(t.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument(),await u(l).toHaveFocus()},parameters:{controls:{disable:!0}}},Se={render:()=>o.jsx(c,{w:"224",children:o.jsx(m,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:y()})}),parameters:{controls:{disable:!0}}},Ce={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:y()})}),play:async({canvasElement:e})=>{const t=D(e);await u(t.getByText("+3")).toBeInTheDocument(),await k.click(t.getByRole("combobox")),await u(t.queryByText("+3")).not.toBeInTheDocument(),await u(t.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},Ee={render:()=>o.jsx(c,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(e=>o.jsx(m,{size:e,defaultValue:"react",name:`technology-${e}`,"aria-label":`${e} autocomplete`,children:y()},e))}),parameters:{controls:{disable:!0}}},De={render:()=>o.jsxs(c,{display:"grid",gap:"12",w:"sm",children:[o.jsx(m,{name:"default","aria-label":"Default",children:y()}),o.jsx(m,{name:"valid","aria-label":"Valid",valid:!0,children:y()}),o.jsx(m,{name:"invalid","aria-label":"Invalid",invalid:!0,children:y()}),o.jsx(m,{name:"error","aria-label":"Error",error:!0,children:y()})]}),parameters:{controls:{disable:!0}}},je={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:y()})}),play:async({canvasElement:e})=>{const t=D(e);await u(t.getByRole("combobox")).toBeDisabled(),await u(t.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},Ve={render:()=>o.jsx(c,{w:"sm",children:o.jsxs(m,{name:"framework","aria-label":"Framework",children:[o.jsx(ge,{value:"react",label:"React"}),o.jsx(ge,{value:"legacy",label:"Legacy framework",disabled:!0}),o.jsx(ge,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},Me={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,allowCustomValue:!0,defaultValue:["react"],name:"custom-stack","aria-label":"Technologies",placeholder:"Add a technology…",children:y()})}),play:async({canvasElement:e})=>{const t=D(e),n=t.getByRole("combobox");await k.type(n,"Script");const l=D(document.body),d=l.getAllByRole("option");await u(d[0]).toHaveAccessibleName(/add “script”/i),await u(d[1]).toHaveAccessibleName(/typescript type safety/i),await k.keyboard("{Enter}");const p=t.getByRole("button",{name:"Remove Script"});await u(p).toBeInTheDocument(),await u(p.parentElement).toHaveAttribute("data-new","true"),await k.type(n,"React"),await u(l.queryByRole("option",{name:/add “react”/i})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},Le={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},Fe={render:function(){const[t,n]=s.useState(()=>Ke.slice(0,8)),[l,d]=s.useState(!1),p=t.length<Ke.length,v=()=>{l||!p||(d(!0),window.setTimeout(()=>{n(C=>Ke.slice(0,C.length+4)),d(!1)},200))};return o.jsx(c,{w:"sm",children:o.jsx(m,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:p,loadingMore:l,onLoadMore:v,children:y(t)})})},parameters:{controls:{disable:!0}}},qe={render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:y()})}),parameters:{controls:{disable:!0}}},Pe={render:function(){const[t,n]=s.useState("");return o.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[o.jsx(m,{inputValue:t,onInputValueChange:n,name:"controlled-input","aria-label":"Controlled query",children:y()}),o.jsx(c,{color:"text.subtle",children:`Query: ${t||"empty"}`})]})},parameters:{controls:{disable:!0}}},He={render:function(){const[t,n]=s.useState(!1),[l,d]=s.useState(0),p=v=>{n(v),d(C=>C+1)};return o.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[o.jsx(po,{onClick:()=>n(v=>!v),children:"Toggle suggestions"}),o.jsx(m,{open:t,onOpenChange:p,name:"controlled-open","aria-label":"Controlled suggestions",children:y()}),o.jsx(c,{color:"text.subtle",children:`Open changes: ${l}`})]})},play:async({canvasElement:e})=>{const t=D(e),n=t.getByRole("combobox");await k.click(n),await u(t.getByText("Open changes: 1")).toBeInTheDocument(),await k.keyboard("{Escape}"),await u(t.getByText("Open changes: 2")).toBeInTheDocument(),await u(n).toHaveAttribute("aria-expanded","false")},parameters:{controls:{disable:!0}}},Ne={name:"Ex: With FormField",render:()=>o.jsx(c,{w:"sm",children:o.jsx(Ta,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:o.jsx(m,{id:"primary-technology",name:"primaryTechnology",children:y()})})}),parameters:{controls:{disable:!0}}},_e={name:"Ex: Technology Assignment",render:()=>o.jsx(c,{w:"md",children:o.jsx(Ta,{label:"Project stack",labelFor:"project-stack",helpText:"Search the supported catalog or create a project-specific value.",children:o.jsx(m,{id:"project-stack",name:"projectStack",multiple:!0,allowCustomValue:!0,defaultValue:["react","typescript"],placeholder:"Add technology…",children:y(Ke)})})}),parameters:{controls:{disable:!0}}},$e={name:"Ex: Keyboard Selection",render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{name:"keyboard","aria-label":"Keyboard selection",children:y()})}),play:async({canvasElement:e})=>{const t=D(e),n=t.getByRole("combobox");await k.click(n),await u(n).toHaveAttribute("aria-expanded","true"),await u(n).toHaveAttribute("aria-activedescendant"),await k.keyboard("{Enter}"),await u(n).toHaveValue(""),await u(t.getByRole("button",{name:"Remove React"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},ze={name:"Ex: Keyboard Token Editing",render:()=>o.jsx(c,{w:"sm",children:o.jsx(m,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:y()})}),play:async({canvasElement:e})=>{const t=D(e),n=t.getByRole("combobox"),l=t.getByRole("button",{name:"Remove TypeScript"});await k.click(n),await k.keyboard("{Backspace}"),await u(l).toHaveFocus(),await u(l).toBeInTheDocument(),await k.keyboard("{Backspace}"),await u(t.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}};var ht,vt,ft;Re.parameters={...Re.parameters,docs:{...(ht=Re.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} multiple={false} value={value} defaultValue={undefined} onValueChange={setValue} onChange={undefined} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(ft=(vt=Re.parameters)==null?void 0:vt.docs)==null?void 0:ft.source}}};var xt,wt,kt;Ie.parameters={...Ie.parameters,docs:{...(xt=Ie.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(kt=(wt=Ie.parameters)==null?void 0:wt.docs)==null?void 0:kt.source}}};var Bt,Tt,Rt;Ae.parameters={...Ae.parameters,docs:{...(Bt=Ae.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Rt=(Tt=Ae.parameters)==null?void 0:Tt.docs)==null?void 0:Rt.source}}};var It,At,Ot;Oe.parameters={...Oe.parameters,docs:{...(It=Oe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Ot=(At=Oe.parameters)==null?void 0:At.docs)==null?void 0:Ot.source}}};var St,Ct,Et;Se.parameters={...Se.parameters,docs:{...(St=Se.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Et=(Ct=Se.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var Dt,jt,Vt;Ce.parameters={...Ce.parameters,docs:{...(Dt=Ce.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Vt=(jt=Ce.parameters)==null?void 0:jt.docs)==null?void 0:Vt.source}}};var Mt,Lt,Ft;Ee.parameters={...Ee.parameters,docs:{...(Mt=Ee.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ft=(Lt=Ee.parameters)==null?void 0:Lt.docs)==null?void 0:Ft.source}}};var qt,Pt,Ht;De.parameters={...De.parameters,docs:{...(qt=De.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Ht=(Pt=De.parameters)==null?void 0:Pt.docs)==null?void 0:Ht.source}}};var Nt,_t,$t;je.parameters={...je.parameters,docs:{...(Nt=je.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...($t=(_t=je.parameters)==null?void 0:_t.docs)==null?void 0:$t.source}}};var zt,Kt,Ut;Ve.parameters={...Ve.parameters,docs:{...(zt=Ve.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Kt=Ve.parameters)==null?void 0:Kt.docs)==null?void 0:Ut.source}}};var Wt,Qt,Gt;Me.parameters={...Me.parameters,docs:{...(Wt=Me.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Gt=(Qt=Me.parameters)==null?void 0:Qt.docs)==null?void 0:Gt.source}}};var Xt,Jt,Yt;Le.parameters={...Le.parameters,docs:{...(Xt=Le.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Yt=(Jt=Le.parameters)==null?void 0:Jt.docs)==null?void 0:Yt.source}}};var Zt,ea,ta;Fe.parameters={...Fe.parameters,docs:{...(Zt=Fe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ta=(ea=Fe.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,oa,na;qe.parameters={...qe.parameters,docs:{...(aa=qe.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(na=(oa=qe.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};var sa,ra,la;Pe.parameters={...Pe.parameters,docs:{...(sa=Pe.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(la=(ra=Pe.parameters)==null?void 0:ra.docs)==null?void 0:la.source}}};var ia,ca,ua;He.parameters={...He.parameters,docs:{...(ia=He.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ua=(ca=He.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var da,pa,ma;Ne.parameters={...Ne.parameters,docs:{...(da=Ne.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(pa=Ne.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ba,ya,ga;_e.parameters={..._e.parameters,docs:{...(ba=_e.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(ga=(ya=_e.parameters)==null?void 0:ya.docs)==null?void 0:ga.source}}};var ha,va,fa;$e.parameters={...$e.parameters,docs:{...(ha=$e.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(fa=(va=$e.parameters)==null?void 0:va.docs)==null?void 0:fa.source}}};var xa,wa,ka;ze.parameters={...ze.parameters,docs:{...(xa=ze.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(ka=(wa=ze.parameters)==null?void 0:wa.docs)==null?void 0:ka.source}}};const xn=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing"];export{Me as AllowCustomValue,Pe as ControlledInput,He as ControlledOpen,Re as Default,je as Disabled,Ve as DisabledOptions,qe as EmptyResults,Ie as Filtering,Fe as InfiniteLoading,$e as KeyboardSelection,ze as KeyboardTokenEditing,Ce as LimitTags,Le as Loading,Oe as Multiple,Se as MultipleLongValues,Ae as Selected,Ee as Sizes,_e as TechnologyAssignmentExample,De as ValidationStates,Ne as WithFormField,xn as __namedExportsOrder,fn as default};
