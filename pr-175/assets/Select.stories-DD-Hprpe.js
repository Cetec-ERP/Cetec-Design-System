import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{w as re,e as G,u as se}from"./index-DPYJpPba.js";import{m as bt,c as gt,s as ht,a as St,g as vt,b as yt,B as o,d as N}from"./Box-D8syd76n.js";import{F as ft}from"./FormField-B0u84Tqi.js";import{T as O}from"./Text-OMCUSOol.js";import{u as jt,d as wt,j as Ot,a as Bt,g as zt,k as At,l as Vt,b as Ct,F as Tt,c as Et,s as It}from"./floating-CMrvfkt4.js";import{m as Ft}from"./menu-bfhB-Iew.js";import{C as Rt}from"./ChipGroup-D3G6jUbY.js";import{I as kt}from"./Icon-CLSA3e9P.js";import"./IconConfig-CuyDtWEJ.js";import{L as Dt,b as qt}from"./ListItem-Cn5IbNKt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Label-Bb6hdk3t.js";import"./Tooltip-CwX3MQ24.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Spinner-BUXJIvki.js";import"./Divider-KBSxUyGs.js";import"./Checkbox-CiUwpcUt.js";import"./Toggle-CUhhVt_e.js";const qe={size:"md"},_t=[],Mt=[["root","select__root"],["trigger","select__trigger"],["content","select__content"],["value","select__value"],["placeholder","select__placeholder"],["chips","select__chips"],["icon","select__icon"]],Wt=Mt.map(([r,a])=>[r,St(a,qe,vt(_t,r))]),Lt=bt((r={})=>Object.fromEntries(Wt.map(([a,i])=>[a,i.recipeFn(r)]))),oe=["size","multiple","autoSize"],Pt=r=>({...qe,...gt(r)}),Gt=Object.assign(Lt,{__recipe__:!1,__name__:"select",raw:r=>r,classNameMap:{},variantKeys:oe,variantMap:{size:["sm","md","lg","xl"],multiple:["true"],autoSize:["true","false"]},splitVariantProps(r){return ht(r,oe)},getVariantProps:Pt}),l=r=>null,Nt="compact",$={sm:"sm",md:"sm",lg:"md",xl:"md"},$t=r=>{if(!r||typeof r=="string")return $[r??"md"];const i=(Array.isArray(r)?r:Object.values(r)).find(u=>typeof u=="string"&&u in $);return i?$[i]:"sm"},Kt=r=>c.isValidElement(r)&&r.type===l,K=r=>r.props.label,Ut=(r,a,i,u)=>{if(a==null||a==="")return u;if(i){const S=Array.isArray(a)?a:[a].filter(Boolean),f=r.filter(x=>S.includes(x.props.value));return f.length===0?u:f.map(K).join(", ")}const n=r.find(S=>S.props.value===a);return n?K(n):u},Ht=(r,a,i)=>{if(!i)return[];const u=Array.isArray(a)?a:a?[a]:[];return r.filter(n=>u.includes(n.props.value))},p=r=>{const{value:a,defaultValue:i=null,onChange:u,multiple:n=!1,placeholder:S="Select...",open:f,defaultOpen:x=!1,onOpenChange:L,placement:_e="bottom-start",offset:Me=4,children:U,id:We,name:H,disabled:b=!1,error:J=!1,size:Q="md",density:X=Nt,autoSize:Le=!1,...Pe}=r,[Ge,Ne]=yt(Pe),$e=c.useId(),j=We??`select-${$e}`,Ke=`${j}-label`,Y=`${j}-listbox`,[Ue,He]=c.useState(x),[Je,Qe]=c.useState(i),[A,B]=c.useState(null),Z=f!==void 0,m=Z?f:Ue,s=a!==void 0?a:Je,g=c.useMemo(()=>c.Children.toArray(U).filter(Kt),[U]),V=c.useMemo(()=>g.findIndex(t=>n?Array.isArray(s)&&s.includes(t.props.value):t.props.value===s),[n,g,s]),P=c.useMemo(()=>g.findIndex(t=>!t.props.disabled),[g]),Xe=c.useMemo(()=>g.flatMap((t,d)=>t.props.disabled?d:[]),[g]),Ye=c.useMemo(()=>n?Array.isArray(s)?s:s?[s]:[]:typeof s=="string"?[s]:[],[n,s]);c.useEffect(()=>{if(!m){B(null);return}if(V>=0){B(V);return}B(P>=0?P:null)},[P,m,V]);const Ze=A!==null?`${j}-option-${A}`:void 0,C=t=>{Z||He(t),L==null||L(t)},z=c.useCallback(t=>{a===void 0&&Qe(t),u==null||u(t)},[a,u]),h=jt({open:m,onOpenChange:t=>{b||C(t)},placement:_e,middleware:wt({offset:Me,extras:[It({apply({rects:t,elements:d}){d.floating.style.minWidth=`${t.reference.width}px`}})]})}),ee=c.useRef([]),te=c.useRef([]),et=Ot(h.context,{enabled:!b}),tt=Bt(h.context,{enabled:!b}),lt=zt(h.context,{role:"listbox"}),at=At(h.context,{listRef:ee,activeIndex:A,selectedIndex:V,onNavigate:B,loop:!0,disabledIndices:Xe}),rt=Vt(h.context,{listRef:te,activeIndex:A,onMatch:B}),{getReferenceProps:st,getFloatingProps:ot,getItemProps:nt}=Ct([et,tt,lt,at,rt]),T=Ut(g,s,n,S),le=Ht(g,s,n),v=Gt({size:Q,multiple:n,autoSize:Le}),it=Ft({density:X}),ae=s!=null&&s!=="",ct=$t(Q),ut=typeof T=="string"&&T.length>0?T:S,pt=t=>{b||(!m&&(t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),C(!0)),!n&&ae&&(t.key==="Backspace"||t.key==="Delete")&&(t.preventDefault(),z(null)))},dt=t=>{if(n){const d=Array.isArray(s)?s:s?[s]:[],y=d.includes(t)?d.filter(w=>w!==t):[...d,t];z(y.length>0?y:null);return}if(s===t){z(null),C(!1);return}z(t),C(!1)},mt=t=>{if(!n)return;const y=(Array.isArray(s)?s:s?[s]:[]).filter(w=>w!==t);z(y.length>0?y:null)};return e.jsxs(o,{className:v.root,children:[H&&Ye.map((t,d)=>e.jsx(o,{as:"input",type:"hidden",name:H,value:t,disabled:b},`${t}-${d}`)),e.jsx(o,{as:"div",id:j,ref:h.refs.setReference,className:`${N(v.trigger,Ge)} peer`,role:"combobox",tabIndex:b?-1:0,"aria-labelledby":Ke,"aria-label":ut,"aria-haspopup":"listbox","aria-expanded":m,"aria-controls":m?Y:void 0,"aria-activedescendant":m?Ze:void 0,"aria-disabled":b,"aria-invalid":J||void 0,"data-disabled":b||void 0,"data-error":J||void 0,"data-open":m||void 0,...st({onKeyDown:pt}),...Ne,children:n&&le.length>0?e.jsx(o,{className:N(v.content,v.chips),children:le.map(t=>e.jsx(o,{onMouseDown:d=>{d.preventDefault(),d.stopPropagation()},onClick:d=>{d.stopPropagation()},children:e.jsx(Rt,{size:ct,dismissable:!0,onDismiss:()=>mt(t.props.value),children:t.props.label})},t.props.value))}):e.jsx(o,{className:N(v.content,ae?v.value:v.placeholder),children:T})}),e.jsx(o,{as:"span",className:v.icon,"data-open":m||void 0,"aria-hidden":!0,children:e.jsx(kt,{name:"caret-down"})}),m&&!b&&e.jsx(Tt,{children:e.jsx(Et,{context:h.context,modal:!1,initialFocus:-1,children:e.jsx(Dt,{ref:h.refs.setFloating,id:Y,role:"listbox","aria-labelledby":j,"aria-multiselectable":n||void 0,density:X,className:it.wrapper,style:h.floatingStyles,...ot(),children:g.map((t,d)=>{const y=K(t),w=n?Array.isArray(s)&&s.includes(t.props.value):s===t.props.value;return e.jsx(qt,{id:`${j}-option-${d}`,ref:xt=>{ee.current[d]=xt,te.current[d]=y},disabled:t.props.disabled,selected:w,variant:n?"checkbox":"default",label:y,description:t.props.description,iconBefore:n?t.props.iconLeft:t.props.iconLeft??"check",iconBeforeFill:n?void 0:w?"icon":t.props.iconLeft?void 0:"transparent",iconAfter:t.props.iconRight,...nt({onClick:()=>{t.props.disabled||dt(t.props.value)}})},t.props.value)})})})})]})};p.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SelectValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},autoSize:{required:!1,tsType:{name:"boolean"},description:""}}};const hl={title:"Components/Select",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Custom listbox-style select for controlled and uncontrolled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging."}}},args:{placeholder:"Choose an option..."},argTypes:{value:{control:"text",description:"Controlled selected value for single-select usage"},placeholder:{control:"text",description:"Display text when no value is selected"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state styling"},multiple:{control:"boolean",description:"Allow multiple selected values"},size:{control:"select",options:["sm","md","lg","xl"]},density:{control:"select",options:["compact","comfortable","spacious"]},autoSize:{control:"boolean",description:"Allow the trigger content to grow vertically instead of staying on one scrollable line"}}},E={render:function(a){return e.jsx(o,{w:"xs",children:e.jsxs(p,{...a,children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})})}},I={name:"Uncontrolled",render:()=>e.jsx(o,{w:"xs",children:e.jsxs(p,{defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})}),parameters:{controls:{disable:!0}}},F={render:()=>e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(p,{placeholder:"Default",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(p,{value:"growth",placeholder:"With value",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(p,{error:!0,placeholder:"Error state",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(p,{disabled:!0,value:"starter",placeholder:"Disabled",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]})]}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(p,{size:"sm",placeholder:"Small",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(p,{size:"md",placeholder:"Medium",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(p,{size:"lg",placeholder:"Large",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(p,{size:"xl",placeholder:"Extra large",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]})]}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsx(o,{w:"xs",children:e.jsxs(p,{placeholder:"Choose a support channel...",children:[e.jsx(l,{value:"email",label:"Email",description:"Best for non-urgent requests",iconLeft:"envelope"}),e.jsx(l,{value:"phone",label:"Phone",description:"Best for urgent issues",iconLeft:"at"}),e.jsx(l,{value:"chat",label:"Live chat",description:"During business hours",iconLeft:"message"})]})}),parameters:{controls:{disable:!0}}},D={render:function(){const[a,i]=c.useState(["react","typescript"]);return e.jsxs(o,{display:"grid",gap:"12",maxW:"xs",children:[e.jsxs(p,{multiple:!0,value:a,onChange:u=>{i(Array.isArray(u)?u:null)},placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"panda",label:"Panda CSS"})]}),e.jsxs(O,{size:"14",color:"text.subtle",children:["Selected: ",(a==null?void 0:a.join(", "))||"none"]})]})},parameters:{controls:{disable:!0}}},q={name:"Ex: Auto Size",render:function(){const[a,i]=c.useState("long"),[u,n]=c.useState(["react","typescript","storybook","text"]),[S,f]=c.useState(["react","typescript","storybook","text"]);return e.jsxs(o,{display:"grid",gap:"24",w:"full",maxW:"2xl",children:[e.jsxs(o,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:'autoSize="false"'}),e.jsx(o,{maxW:"xs",children:e.jsxs(p,{multiple:!0,value:u,onChange:x=>n(Array.isArray(x)?x:null),placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"text",label:"Text"})]})})]}),e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:'autoSize="true"'}),e.jsx(o,{maxW:"xs",children:e.jsxs(p,{multiple:!0,autoSize:!0,value:S,onChange:x=>f(Array.isArray(x)?x:null),placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"text",label:"Text"})]})})]})]}),e.jsxs(o,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:"Single select default"}),e.jsx(o,{maxW:"xs",children:e.jsxs(p,{value:a,onChange:i,children:[e.jsx(l,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(l,{value:"short",label:"Short label"})]})})]}),e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:"Single select autoSize"}),e.jsx(o,{maxW:"xs",children:e.jsxs(p,{autoSize:!0,value:a,onChange:i,children:[e.jsx(l,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(l,{value:"short",label:"Short label"})]})})]})]})]})},parameters:{controls:{disable:!0}}},_={name:"Ex: In FormField",render:function(){const[a,i]=c.useState(null);return e.jsx(o,{w:"sm",children:e.jsx(ft,{label:"Team size",labelFor:"team-size",helpText:"Choose the option that best fits your current headcount.",error:!a,errorText:"Select a team size.",children:e.jsxs(p,{id:"team-size",name:"teamSize",value:a,onChange:i,placeholder:"Select team size...",children:[e.jsx(l,{value:"1-10",label:"1–10 people"}),e.jsx(l,{value:"11-50",label:"11–50 people"}),e.jsx(l,{value:"51-200",label:"51–200 people"}),e.jsx(l,{value:"201-plus",label:"201+ people"})]})})})},parameters:{controls:{disable:!0}}},M={name:"Ex: Controlled",render:function(){const[a,i]=c.useState("growth");return e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(p,{value:a,onChange:i,placeholder:"Choose a plan...",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]}),e.jsxs(O,{size:"14",color:"text.subtle",children:["Selected: ",a||"none"]})]})},parameters:{controls:{disable:!0}}},W={name:"A11y: Keyboard Interaction",render:function(){const[a,i]=c.useState(null);return e.jsx(o,{w:"xs",children:e.jsxs(p,{value:a,onChange:i,placeholder:"Choose an option...",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})})},play:async({canvasElement:r})=>{const a=re(r),i=re(r.ownerDocument.body),u=a.getByRole("combobox",{name:/choose an option/i});u.focus(),G(u).toHaveFocus(),await se.keyboard("{ArrowDown}");const n=i.getByRole("listbox");G(n).toBeVisible(),await se.keyboard("{ArrowDown}{Enter}"),G(a.getByRole("combobox",{name:/growth/i})).toBeVisible()},parameters:{controls:{disable:!0}}};var ne,ie,ce;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    return <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  }
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,pe,de;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Uncontrolled',
  render: () => <Box w="xs">
      <Select defaultValue="growth" placeholder="Choose an option...">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
        <SelectOption value="enterprise" label="Enterprise" />
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,xe,be;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" w="xs">
      <Select placeholder="Default">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select value="growth" placeholder="With value">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select error placeholder="Error state">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select disabled value="starter" placeholder="Disabled">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(be=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ge,he,Se;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" w="xs">
      <Select size="sm" placeholder="Small">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="md" placeholder="Medium">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="lg" placeholder="Large">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="xl" placeholder="Extra large">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Se=(he=R.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var ve,ye,fe;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <Box w="xs">
      <Select placeholder="Choose a support channel...">
        <SelectOption value="email" label="Email" description="Best for non-urgent requests" iconLeft="envelope" />
        <SelectOption value="phone" label="Phone" description="Best for urgent issues" iconLeft="at" />
        <SelectOption value="chat" label="Live chat" description="During business hours" iconLeft="message" />
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(fe=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var je,we,Oe;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: function MultipleRender() {
    const [value, setValue] = useState<string[] | null>(['react', 'typescript']);
    return <Box display="grid" gap="12" maxW="xs">
        <Select multiple value={value} onChange={(nextValue: string | string[] | null) => {
        setValue(Array.isArray(nextValue) ? nextValue : null);
      }} placeholder="Choose tags...">
          <SelectOption value="react" label="React" />
          <SelectOption value="typescript" label="TypeScript" />
          <SelectOption value="storybook" label="Storybook" />
          <SelectOption value="panda" label="Panda CSS" />
        </Select>

        <Text size="14" color="text.subtle">
          Selected: {value?.join(', ') || 'none'}
        </Text>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Oe=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};var Be,ze,Ae;q.parameters={...q.parameters,docs:{...(Be=q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Ex: Auto Size',
  render: function ExAutoSizeRender() {
    const [singleValue, setSingleValue] = useState<string | string[] | null>('long');
    const [multiScrollValue, setMultiScrollValue] = useState<string[] | null>(['react', 'typescript', 'storybook', 'text']);
    const [multiWrapValue, setMultiWrapValue] = useState<string[] | null>(['react', 'typescript', 'storybook', 'text']);
    return <Box display="grid" gap="24" w="full" maxW="2xl">
        <Box display="grid" gap="12" gridTemplateColumns="repeat(2, 1fr)">
          <Box display="grid" gap="8">
            <Text size="14" color="text.subtle">
              autoSize=&#34;false&#34;
            </Text>
            <Box maxW="xs">
              <Select multiple value={multiScrollValue} onChange={nextValue => setMultiScrollValue(Array.isArray(nextValue) ? nextValue : null)} placeholder="Choose tags...">
                <SelectOption value="react" label="React" />
                <SelectOption value="typescript" label="TypeScript" />
                <SelectOption value="storybook" label="Storybook" />
                <SelectOption value="text" label="Text" />
              </Select>
            </Box>
          </Box>

          <Box display="grid" gap="8">
            <Text size="14" color="text.subtle">
              autoSize=&#34;true&#34;
            </Text>
            <Box maxW="xs">
              <Select multiple autoSize value={multiWrapValue} onChange={nextValue => setMultiWrapValue(Array.isArray(nextValue) ? nextValue : null)} placeholder="Choose tags...">
                <SelectOption value="react" label="React" />
                <SelectOption value="typescript" label="TypeScript" />
                <SelectOption value="storybook" label="Storybook" />
                <SelectOption value="text" label="Text" />
              </Select>
            </Box>
          </Box>
        </Box>

        <Box display="grid" gap="12" gridTemplateColumns="repeat(2, 1fr)">
          <Box display="grid" gap="8">
            <Text size="14" color="text.subtle">
              Single select default
            </Text>
            <Box maxW="xs">
              <Select value={singleValue} onChange={setSingleValue}>
                <SelectOption value="long" label="Enim qui laboris sunt qui laborum veniam minim dolor veniam" />
                <SelectOption value="short" label="Short label" />
              </Select>
            </Box>
          </Box>

          <Box display="grid" gap="8">
            <Text size="14" color="text.subtle">
              Single select autoSize
            </Text>
            <Box maxW="xs">
              <Select autoSize value={singleValue} onChange={setSingleValue}>
                <SelectOption value="long" label="Enim qui laboris sunt qui laborum veniam minim dolor veniam" />
                <SelectOption value="short" label="Short label" />
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ae=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:Ae.source}}};var Ve,Ce,Te;_.parameters={..._.parameters,docs:{...(Ve=_.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Ex: In FormField',
  render: function InFormFieldRender() {
    const [value, setValue] = useState<string | string[] | null>(null);
    return <Box w="sm">
        <FormField label="Team size" labelFor="team-size" helpText="Choose the option that best fits your current headcount." error={!value} errorText="Select a team size.">
          <Select id="team-size" name="teamSize" value={value} onChange={setValue} placeholder="Select team size...">
            <SelectOption value="1-10" label="1–10 people" />
            <SelectOption value="11-50" label="11–50 people" />
            <SelectOption value="51-200" label="51–200 people" />
            <SelectOption value="201-plus" label="201+ people" />
          </Select>
        </FormField>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Te=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ee,Ie,Fe;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Ex: Controlled',
  render: function ExControlledRender() {
    const [value, setValue] = useState<string | string[] | null>('growth');
    return <Box display="grid" gap="12" w="xs">
        <Select value={value} onChange={setValue} placeholder="Choose a plan...">
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>

        <Text size="14" color="text.subtle">
          Selected: {value || 'none'}
        </Text>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Fe=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var Re,ke,De;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'A11y: Keyboard Interaction',
  render: function A11yKeyboardInteractionRender() {
    const [value, setValue] = useState<string | string[] | null>(null);
    return <Box w="xs">
        <Select value={value} onChange={setValue} placeholder="Choose an option...">
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('combobox', {
      name: /choose an option/i
    });
    trigger.focus();
    expect(trigger).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeVisible();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    expect(canvas.getByRole('combobox', {
      name: /growth/i
    })).toBeVisible();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(De=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};const Sl=["Default","Uncontrolled","States","Sizes","WithDescriptionsAndIcons","Multiple","ExAutoSize","InFormField","ExControlled","A11yKeyboardInteraction"];export{W as A11yKeyboardInteraction,E as Default,q as ExAutoSize,M as ExControlled,_ as InFormField,D as Multiple,R as Sizes,F as States,I as Uncontrolled,k as WithDescriptionsAndIcons,Sl as __namedExportsOrder,hl as default};
