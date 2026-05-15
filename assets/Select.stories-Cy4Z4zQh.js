import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{w as le,e as L,u as ae}from"./index-DPYJpPba.js";import{m as ct,c as ut,s as pt,a as dt,g as mt,b as xt,B as i,d as P}from"./Box-C4uJrM56.js";import{F as bt}from"./FormField-DENYrH6Q.js";import{T as O}from"./Text-MsVbvEyI.js";import{u as gt,d as ht,j as St,a as vt,g as yt,k as ft,l as jt,b as wt,F as Ot,c as Bt,s as zt}from"./floating-CMrvfkt4.js";import{m as At}from"./menu-CIKCa2hY.js";import{C as Ct}from"./ChipGroup-Bvf86dWx.js";import{I as Vt}from"./Icon-DVkTIUY6.js";import"./IconConfig-CwDT3tlP.js";import{L as Tt,b as Et}from"./ListItem-BN5votHI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Label-Md2wWTZa.js";import"./Tooltip-CZNUqTyw.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Spinner-DQMshQyu.js";import"./Divider-BN4yVLcR.js";import"./Checkbox-Cnhdqpcz.js";import"./Toggle-CAmOeqsZ.js";const Ie={size:"md"},It=[],Ft=[["root","select__root"],["trigger","select__trigger"],["content","select__content"],["value","select__value"],["placeholder","select__placeholder"],["chips","select__chips"],["icon","select__icon"]],Rt=Ft.map(([r,a])=>[r,dt(a,Ie,mt(It,r))]),kt=ct((r={})=>Object.fromEntries(Rt.map(([a,n])=>[a,n.recipeFn(r)]))),re=["size","multiple","autoSize"],Dt=r=>({...Ie,...ut(r)}),_t=Object.assign(kt,{__recipe__:!1,__name__:"select",raw:r=>r,classNameMap:{},variantKeys:re,variantMap:{size:["sm","md","lg","xl"],multiple:["true"],autoSize:["true","false"]},splitVariantProps(r){return pt(r,re)},getVariantProps:Dt}),l=r=>null,qt="compact",G={sm:"sm",md:"sm",lg:"md",xl:"md"},Mt=r=>{if(!r||typeof r=="string")return G[r??"md"];const n=(Array.isArray(r)?r:Object.values(r)).find(s=>typeof s=="string"&&s in G);return n?G[n]:"sm"},Wt=r=>c.isValidElement(r)&&r.type===l,N=r=>r.props.label,Lt=(r,a,n,s)=>{if(a==null||a==="")return s;if(n){const S=Array.isArray(a)?a:[a].filter(Boolean),v=r.filter(x=>S.includes(x.props.value));return v.length===0?s:v.map(N).join(", ")}const d=r.find(S=>S.props.value===a);return d?N(d):s},Pt=(r,a,n)=>{if(!n)return[];const s=Array.isArray(a)?a:a?[a]:[];return r.filter(d=>s.includes(d.props.value))},u=r=>{const{value:a,onChange:n,multiple:s=!1,placeholder:d="Select...",open:S,onOpenChange:v,placement:x="bottom-start",offset:Fe=4,children:$,id:Re,name:K,disabled:b=!1,error:H=!1,size:U="md",density:J=qt,autoSize:ke=!1,...De}=r,[_e,qe]=xt(De),Me=c.useId(),j=Re??`select-${Me}`,We=`${j}-label`,Q=`${j}-listbox`,[Le,Pe]=c.useState(!1),[Ge,Ne]=c.useState(null),[A,B]=c.useState(null),X=S!==void 0,m=X?S:Le,o=a!==void 0?a:Ge,g=c.useMemo(()=>c.Children.toArray($).filter(Wt),[$]),C=c.useMemo(()=>g.findIndex(t=>s?Array.isArray(o)&&o.includes(t.props.value):t.props.value===o),[s,g,o]),W=c.useMemo(()=>g.findIndex(t=>!t.props.disabled),[g]),$e=c.useMemo(()=>g.flatMap((t,p)=>t.props.disabled?p:[]),[g]),Ke=c.useMemo(()=>s?Array.isArray(o)?o:o?[o]:[]:typeof o=="string"?[o]:[],[s,o]);c.useEffect(()=>{if(!m){B(null);return}if(C>=0){B(C);return}B(W>=0?W:null)},[W,m,C]);const He=A!==null?`${j}-option-${A}`:void 0,V=t=>{X||Pe(t),v==null||v(t)},z=c.useCallback(t=>{a===void 0&&Ne(t),n==null||n(t)},[a,n]),h=gt({open:m,onOpenChange:t=>{b||V(t)},placement:x,middleware:ht({offset:Fe,extras:[zt({apply({rects:t,elements:p}){p.floating.style.minWidth=`${t.reference.width}px`}})]})}),Y=c.useRef([]),Z=c.useRef([]),Ue=St(h.context,{enabled:!b}),Je=vt(h.context,{enabled:!b}),Qe=yt(h.context,{role:"listbox"}),Xe=ft(h.context,{listRef:Y,activeIndex:A,selectedIndex:C,onNavigate:B,loop:!0,disabledIndices:$e}),Ye=jt(h.context,{listRef:Z,activeIndex:A,onMatch:B}),{getReferenceProps:Ze,getFloatingProps:et,getItemProps:tt}=wt([Ue,Je,Qe,Xe,Ye]),T=Lt(g,o,s,d),ee=Pt(g,o,s),y=_t({size:U,multiple:s,autoSize:ke}),lt=At({density:J}),te=o!=null&&o!=="",at=Mt(U),rt=typeof T=="string"&&T.length>0?T:d,st=t=>{b||(!m&&(t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),V(!0)),!s&&te&&(t.key==="Backspace"||t.key==="Delete")&&(t.preventDefault(),z(null)))},ot=t=>{if(s){const p=Array.isArray(o)?o:o?[o]:[],f=p.includes(t)?p.filter(w=>w!==t):[...p,t];z(f.length>0?f:null);return}if(o===t){z(null),V(!1);return}z(t),V(!1)},nt=t=>{if(!s)return;const f=(Array.isArray(o)?o:o?[o]:[]).filter(w=>w!==t);z(f.length>0?f:null)};return e.jsxs(i,{className:y.root,children:[K&&Ke.map((t,p)=>e.jsx(i,{as:"input",type:"hidden",name:K,value:t,disabled:b},`${t}-${p}`)),e.jsx(i,{as:"div",id:j,ref:h.refs.setReference,className:`${P(y.trigger,_e)} peer`,role:"combobox",tabIndex:b?-1:0,"aria-labelledby":We,"aria-label":rt,"aria-haspopup":"listbox","aria-expanded":m,"aria-controls":m?Q:void 0,"aria-activedescendant":m?He:void 0,"aria-disabled":b,"aria-invalid":H||void 0,"data-disabled":b||void 0,"data-error":H||void 0,"data-open":m||void 0,...Ze({onKeyDown:st}),...qe,children:s&&ee.length>0?e.jsx(i,{className:P(y.content,y.chips),children:ee.map(t=>e.jsx(i,{onMouseDown:p=>{p.preventDefault(),p.stopPropagation()},onClick:p=>{p.stopPropagation()},children:e.jsx(Ct,{size:at,dismissable:!0,onDismiss:()=>nt(t.props.value),children:t.props.label})},t.props.value))}):e.jsx(i,{className:P(y.content,te?y.value:y.placeholder),children:T})}),e.jsx(i,{as:"span",className:y.icon,"data-open":m||void 0,"aria-hidden":!0,children:e.jsx(Vt,{name:"caret-down"})}),m&&!b&&e.jsx(Ot,{children:e.jsx(Bt,{context:h.context,modal:!1,initialFocus:-1,children:e.jsx(Tt,{ref:h.refs.setFloating,id:Q,role:"listbox","aria-labelledby":j,"aria-multiselectable":s||void 0,density:J,className:lt.wrapper,style:h.floatingStyles,...et(),children:g.map((t,p)=>{const f=N(t),w=s?Array.isArray(o)&&o.includes(t.props.value):o===t.props.value;return e.jsx(Et,{id:`${j}-option-${p}`,ref:it=>{Y.current[p]=it,Z.current[p]=f},disabled:t.props.disabled,selected:w,variant:s?"checkbox":"default",label:f,description:t.props.description,iconBefore:s?t.props.iconLeft:t.props.iconLeft??"check",iconBeforeFill:s?void 0:w?"icon":t.props.iconLeft?void 0:"transparent",iconAfter:t.props.iconRight,...tt({onClick:()=>{t.props.disabled||ot(t.props.value)}})},t.props.value)})})})})]})};u.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SelectValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:""},autoSize:{required:!1,tsType:{name:"boolean"},description:""}}};const pl={title:"Components/Select",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Custom listbox-style select for controlled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging."}}},args:{placeholder:"Choose an option..."},argTypes:{value:{control:"text",description:"Controlled selected value for single-select usage"},placeholder:{control:"text",description:"Display text when no value is selected"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state styling"},multiple:{control:"boolean",description:"Allow multiple selected values"},size:{control:"select",options:["sm","md","lg","xl"]},density:{control:"select",options:["compact","comfortable","spacious"]},autoSize:{control:"boolean",description:"Allow the trigger content to grow vertically instead of staying on one scrollable line"}}},E={render:function(a){return e.jsx(i,{w:"xs",children:e.jsxs(u,{...a,children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})})}},I={render:()=>e.jsxs(i,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(u,{placeholder:"Default",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(u,{value:"growth",placeholder:"With value",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(u,{error:!0,placeholder:"Error state",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(u,{disabled:!0,value:"starter",placeholder:"Disabled",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]})]}),parameters:{controls:{disable:!0}}},F={render:()=>e.jsxs(i,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(u,{size:"sm",placeholder:"Small",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(u,{size:"md",placeholder:"Medium",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(u,{size:"lg",placeholder:"Large",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(u,{size:"xl",placeholder:"Extra large",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]})]}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsx(i,{w:"xs",children:e.jsxs(u,{placeholder:"Choose a support channel...",children:[e.jsx(l,{value:"email",label:"Email",description:"Best for non-urgent requests",iconLeft:"envelope"}),e.jsx(l,{value:"phone",label:"Phone",description:"Best for urgent issues",iconLeft:"at"}),e.jsx(l,{value:"chat",label:"Live chat",description:"During business hours",iconLeft:"message"})]})}),parameters:{controls:{disable:!0}}},k={render:function(){const[a,n]=c.useState(["react","typescript"]);return e.jsxs(i,{display:"grid",gap:"12",maxW:"xs",children:[e.jsxs(u,{multiple:!0,value:a,onChange:s=>{n(Array.isArray(s)?s:null)},placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"panda",label:"Panda CSS"})]}),e.jsxs(O,{size:"14",color:"text.subtle",children:["Selected: ",(a==null?void 0:a.join(", "))||"none"]})]})},parameters:{controls:{disable:!0}}},D={name:"Ex: Auto Size",render:function(){const[a,n]=c.useState("long"),[s,d]=c.useState(["react","typescript","storybook","text"]),[S,v]=c.useState(["react","typescript","storybook","text"]);return e.jsxs(i,{display:"grid",gap:"24",w:"full",maxW:"2xl",children:[e.jsxs(i,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:'autoSize="false"'}),e.jsx(i,{maxW:"xs",children:e.jsxs(u,{multiple:!0,value:s,onChange:x=>d(Array.isArray(x)?x:null),placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"text",label:"Text"})]})})]}),e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:'autoSize="true"'}),e.jsx(i,{maxW:"xs",children:e.jsxs(u,{multiple:!0,autoSize:!0,value:S,onChange:x=>v(Array.isArray(x)?x:null),placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"text",label:"Text"})]})})]})]}),e.jsxs(i,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:"Single select default"}),e.jsx(i,{maxW:"xs",children:e.jsxs(u,{value:a,onChange:n,children:[e.jsx(l,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(l,{value:"short",label:"Short label"})]})})]}),e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:"Single select autoSize"}),e.jsx(i,{maxW:"xs",children:e.jsxs(u,{autoSize:!0,value:a,onChange:n,children:[e.jsx(l,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(l,{value:"short",label:"Short label"})]})})]})]})]})},parameters:{controls:{disable:!0}}},_={name:"Ex: In FormField",render:function(){const[a,n]=c.useState(null);return e.jsx(i,{w:"sm",children:e.jsx(bt,{label:"Team size",labelFor:"team-size",helpText:"Choose the option that best fits your current headcount.",error:!a,errorText:"Select a team size.",children:e.jsxs(u,{id:"team-size",name:"teamSize",value:a,onChange:n,placeholder:"Select team size...",children:[e.jsx(l,{value:"1-10",label:"1–10 people"}),e.jsx(l,{value:"11-50",label:"11–50 people"}),e.jsx(l,{value:"51-200",label:"51–200 people"}),e.jsx(l,{value:"201-plus",label:"201+ people"})]})})})},parameters:{controls:{disable:!0}}},q={name:"Ex: Controlled",render:function(){const[a,n]=c.useState("growth");return e.jsxs(i,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(u,{value:a,onChange:n,placeholder:"Choose a plan...",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]}),e.jsxs(O,{size:"14",color:"text.subtle",children:["Selected: ",a||"none"]})]})},parameters:{controls:{disable:!0}}},M={name:"A11y: Keyboard Interaction",render:function(){const[a,n]=c.useState(null);return e.jsx(i,{w:"xs",children:e.jsxs(u,{value:a,onChange:n,placeholder:"Choose an option...",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})})},play:async({canvasElement:r})=>{const a=le(r),n=le(r.ownerDocument.body),s=a.getByRole("combobox",{name:/choose an option/i});s.focus(),L(s).toHaveFocus(),await ae.keyboard("{ArrowDown}");const d=n.getByRole("listbox");L(d).toBeVisible(),await ae.keyboard("{ArrowDown}{Enter}"),L(a.getByRole("combobox",{name:/growth/i})).toBeVisible()},parameters:{controls:{disable:!0}}};var se,oe,ne;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    return <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  }
}`,...(ne=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,ue;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,de,me;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(de=F.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var xe,be,ge;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ge=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var he,Se,ve;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var ye,fe,je;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(je=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:je.source}}};var we,Oe,Be;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Be=(Oe=_.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var ze,Ae,Ce;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ce=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Ve,Te,Ee;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};const dl=["Default","States","Sizes","WithDescriptionsAndIcons","Multiple","ExAutoSize","InFormField","ExControlled","A11yKeyboardInteraction"];export{M as A11yKeyboardInteraction,E as Default,D as ExAutoSize,q as ExControlled,_ as InFormField,k as Multiple,F as Sizes,I as States,R as WithDescriptionsAndIcons,dl as __namedExportsOrder,pl as default};
