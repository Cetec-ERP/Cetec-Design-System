import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{w as ne,e as N,u as ie}from"./index-DPYJpPba.js";import{m as St,c as vt,s as ft,a as yt,g as wt,b as jt,B as s,d as $}from"./dsComponent-BZ80dv4C.js";import{F as Ot}from"./FormField-Lr50FCdA.js";import{T as O}from"./Text-BnqT0XMf.js";import{u as Ct,c as Bt,a as Vt,b as At,d as zt,e as Tt,f as Et,g as It,F as Ft,h as kt,s as Rt}from"./Tooltip-DME5tuVI.js";import{m as Dt}from"./menu-B6ipdU15.js";import{C as qt}from"./Chip-Q7MK9m9_.js";import{I as Mt}from"./Icon-CPS1ygZT.js";import{L as _t,a as Wt}from"./ListItem-roR1WE0Y.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Label-CcjMpbMI.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconConfig-BUkzhV0S.js";import"./Spinner-DgZ9SPqi.js";import"./HighlightText-BZrC_CJE.js";import"./Checkbox-BKgxmDIf.js";import"./Divider-Ccg9DqVP.js";import"./Toggle-O_SZ-6vY.js";const We={size:"md"},Lt=[],Pt=[["root","select__root"],["trigger","select__trigger"],["content","select__content"],["value","select__value"],["placeholder","select__placeholder"],["chips","select__chips"],["icon","select__icon"]],Gt=Pt.map(([r,a])=>[r,yt(a,We,wt(Lt,r))]),Nt=St((r={})=>Object.fromEntries(Gt.map(([a,i])=>[a,i.recipeFn(r)]))),ce=["size","multiple","autoSize"],$t=r=>({...We,...vt(r)}),Kt=Object.assign(Nt,{__recipe__:!1,__name__:"select",raw:r=>r,classNameMap:{},variantKeys:ce,variantMap:{size:["sm","md","lg","xl"],multiple:["true"],autoSize:["true","false"]},splitVariantProps(r){return ft(r,ce)},getVariantProps:$t}),l=r=>null,Ut="compact",K={sm:"sm",md:"sm",lg:"md",xl:"md"},Ht=r=>{if(!r||typeof r=="string")return K[r??"md"];const i=(Array.isArray(r)?r:Object.values(r)).find(u=>typeof u=="string"&&u in K);return i?K[i]:"sm"},Jt=r=>c.isValidElement(r)&&r.type===l,U=r=>r.props.label,Qt=(r,a,i,u)=>{if(a==null||a==="")return u;if(i){const m=Array.isArray(a)?a:[a].filter(Boolean),y=new Set(m),x=r.filter(C=>y.has(C.props.value));return x.length===0?u:x.map(U).join(", ")}const o=r.find(m=>m.props.value===a);return o?U(o):u},Xt=(r,a,i)=>{if(!i)return[];const u=Array.isArray(a)?a:a?[a]:[],o=new Set(u);return r.filter(m=>o.has(m.props.value))},p=r=>{const{value:a,defaultValue:i=null,onChange:u,multiple:o=!1,placeholder:m="Select...",open:y,defaultOpen:x=!1,onOpenChange:C,placement:Le="bottom-start",offset:Pe=4,children:H,id:Ge,name:J,disabled:h=!1,error:Q=!1,size:X="md",density:Y=Ut,autoSize:Ne=!1,...$e}=r,[Ke,Ue]=jt($e),He=c.useId(),w=Ge??`select-${He}`,Je=`${w}-label`,Z=`${w}-listbox`,[Qe,Xe]=c.useState(x),[Ye,Ze]=c.useState(i),[et,W]=c.useState(null),ee=y!==void 0,b=ee?y:Qe,n=a!==void 0?a:Ye,g=c.useMemo(()=>c.Children.toArray(H).filter(Jt),[H]),L=c.useMemo(()=>o?Array.isArray(n)?n:n?[n]:[]:typeof n=="string"?[n]:[],[o,n]),P=c.useMemo(()=>new Set(L),[L]),G=c.useMemo(()=>g.findIndex(t=>o?P.has(t.props.value):t.props.value===n),[o,g,P,n]),te=c.useMemo(()=>g.findIndex(t=>!t.props.disabled),[g]),tt=c.useMemo(()=>g.flatMap((t,d)=>t.props.disabled?d:[]),[g]),le=G>=0?G:te>=0?te:null,V=b?et??le:null,lt=V!==null?`${w}-option-${V}`:void 0,A=t=>{W(t?le:null),ee||Xe(t),C==null||C(t)},B=c.useCallback(t=>{a===void 0&&Ze(t),u==null||u(t)},[a,u]),S=Ct({open:b,onOpenChange:t=>{h||A(t)},placement:Le,middleware:Bt({offset:Pe,extras:[Rt({apply({rects:t,elements:d}){d.floating.style.minWidth=`${t.reference.width}px`}})]})}),ae=c.useRef([]),re=c.useRef([]),at=Vt(S.context,{enabled:!h}),rt=At(S.context,{enabled:!h}),st=zt(S.context,{role:"listbox"}),ot=Tt(S.context,{listRef:ae,activeIndex:V,selectedIndex:G,onNavigate:W,loop:!0,disabledIndices:tt}),nt=Et(S.context,{listRef:re,activeIndex:V,onMatch:W}),{getReferenceProps:it,getFloatingProps:ct,getItemProps:ut}=It([at,rt,st,ot,nt]),z=Qt(g,n,o,m),se=Xt(g,n,o),v=Kt({size:X,multiple:o,autoSize:Ne}),pt=Dt({density:Y}),oe=n!=null&&n!=="",dt=Ht(X),mt=typeof z=="string"&&z.length>0?z:m,xt=t=>{h||(!b&&(t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),A(!0)),!o&&oe&&(t.key==="Backspace"||t.key==="Delete")&&(t.preventDefault(),B(null)))},ht=t=>{if(o){const d=Array.isArray(n)?n:n?[n]:[],f=d.includes(t)?d.filter(j=>j!==t):[...d,t];B(f.length>0?f:null);return}if(n===t){B(null),A(!1);return}B(t),A(!1)},bt=t=>{if(!o)return;const f=(Array.isArray(n)?n:n?[n]:[]).filter(j=>j!==t);B(f.length>0?f:null)};return e.jsxs(s,{className:v.root,children:[J&&L.map(t=>e.jsx(s,{as:"input",type:"hidden",name:J,value:t,disabled:h},t)),e.jsx(s,{as:"div",id:w,ref:S.refs.setReference,className:`${$(v.trigger,Ke)} peer`,role:"combobox",tabIndex:h?-1:0,"aria-labelledby":Je,"aria-label":mt,"aria-haspopup":"listbox","aria-expanded":b,"aria-controls":b?Z:void 0,"aria-activedescendant":b?lt:void 0,"aria-disabled":h,"aria-invalid":Q||void 0,"data-disabled":h||void 0,"data-error":Q||void 0,"data-open":b||void 0,...it({onKeyDown:xt}),...Ue,children:o&&se.length>0?e.jsx(s,{className:$(v.content,v.chips),children:se.map(t=>e.jsx(s,{onMouseDown:d=>{d.preventDefault(),d.stopPropagation()},onClick:d=>{d.stopPropagation()},children:e.jsx(qt,{size:dt,dismissable:!0,onDismiss:()=>bt(t.props.value),children:t.props.label})},t.props.value))}):e.jsx(s,{className:$(v.content,oe?v.value:v.placeholder),children:z})}),e.jsx(s,{as:"span",className:v.icon,"data-open":b||void 0,"aria-hidden":!0,children:e.jsx(Mt,{name:"caret-down"})}),b&&!h&&e.jsx(Ft,{children:e.jsx(kt,{context:S.context,modal:!1,initialFocus:-1,children:e.jsx(_t,{ref:S.refs.setFloating,id:Z,role:"listbox","aria-labelledby":w,"aria-multiselectable":o||void 0,density:Y,className:pt.wrapper,style:S.floatingStyles,...ct(),children:g.map((t,d)=>{const f=U(t),j=o?P.has(t.props.value):n===t.props.value;return e.jsx(Wt,{id:`${w}-option-${d}`,ref:gt=>{ae.current[d]=gt,re.current[d]=f},disabled:t.props.disabled,selected:j,variant:o?"checkbox":"default",label:f,description:t.props.description,iconBefore:o?t.props.iconLeft:t.props.iconLeft??"check",iconBeforeFill:o?void 0:j?"icon":t.props.iconLeft?void 0:"transparent",iconAfter:t.props.iconRight,...ut({onClick:()=>{t.props.disabled||ht(t.props.value)}})},t.props.value)})})})})]})};p.__docgenInfo={description:`Chooses one or more values from metadata-only {@link SelectOption} children.

The trigger uses combobox/listbox semantics. Arrow keys, Enter, and Space open
it; typeahead and arrow keys navigate options; Escape or outside press closes
it. Focus stays on the trigger when the non-modal popup opens.

@example
\`\`\`tsx
<Select defaultValue="draft" name="status">
  <SelectOption value="draft" label="Draft" />
  <SelectOption value="published" label="Published" />
</Select>
\`\`\``,methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:"Controlled selected value. Use a string for single selection or a string array for multiple selection, with `onChange` to accept changes."},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:`Initial selected value for an uncontrolled select. It is used only on first render.
@default null`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SelectValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[] | null",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Called when the user selects, deselects, or clears an option. In controlled mode, update `value` with the supplied value."},multiple:{required:!1,tsType:{name:"boolean"},description:`Allows several options to be selected and renders selected options as removable chips.
@default false`},placeholder:{required:!1,tsType:{name:"string"},description:`Text shown while no option is selected.
@default 'Select...'`},open:{required:!1,tsType:{name:"boolean"},description:"Controlled popup state. Pair with `onOpenChange`; omit it to use `defaultOpen`."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:`Initial popup state for an uncontrolled select. It is used only on first render.
@default false`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when user interaction requests that the popup open or close."},placement:{required:!1,tsType:{name:"Placement"},description:`Floating UI placement for the listbox relative to the trigger.
@default 'bottom-start'`},offset:{required:!1,tsType:{name:"number"},description:`Gap between the trigger and listbox, in pixels.
@default 4`},children:{required:!1,tsType:{name:"ReactNode"},description:"Metadata-only `SelectOption` children used to build the listbox. Other children are ignored."},id:{required:!1,tsType:{name:"string"},description:"Identifier for the combobox trigger. A generated identifier is used when omitted."},name:{required:!1,tsType:{name:"string"},description:"Form field name. Each selected value is submitted through a hidden input."},disabled:{required:!1,tsType:{name:"boolean"},description:`Prevents opening, selection, and hidden-input submission.
@default false`},error:{required:!1,tsType:{name:"boolean"},description:"Marks the combobox as invalid with `aria-invalid` and error styling.\n@default false"},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:`Density applied to the popup options.
@default 'compact'`},autoSize:{required:!1,tsType:{name:"boolean"},description:`Shrinks the trigger to its content instead of using the standard select width.
@default false`}}};const fl={title:"Components/Select",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Custom listbox-style select for controlled and uncontrolled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging."}}},args:{placeholder:"Choose an option..."},argTypes:{value:{control:"text",description:"Controlled selected value for single-select usage"},placeholder:{control:"text",description:"Display text when no value is selected"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state styling"},multiple:{control:"boolean",description:"Allow multiple selected values"},size:{control:"select",options:["sm","md","lg","xl"]},density:{control:"select",options:["compact","comfortable","spacious"]},autoSize:{control:"boolean",description:"Allow the trigger content to grow vertically instead of staying on one scrollable line"}}},T={render:function(a){return e.jsx(s,{w:"xs",children:e.jsxs(p,{...a,children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})})}},E={name:"Uncontrolled",render:()=>e.jsx(s,{w:"xs",children:e.jsxs(p,{defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(s,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(p,{placeholder:"Default",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(p,{value:"growth",placeholder:"With value",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(p,{error:!0,placeholder:"Error state",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]}),e.jsxs(p,{disabled:!0,value:"starter",placeholder:"Disabled",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"})]})]}),parameters:{controls:{disable:!0}}},F={render:()=>e.jsxs(s,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(p,{size:"sm",placeholder:"Small",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(p,{size:"md",placeholder:"Medium",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(p,{size:"lg",placeholder:"Large",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]}),e.jsxs(p,{size:"xl",placeholder:"Extra large",children:[e.jsx(l,{value:"a",label:"Alpha"}),e.jsx(l,{value:"b",label:"Beta"})]})]}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsx(s,{w:"xs",children:e.jsxs(p,{placeholder:"Choose a support channel...",children:[e.jsx(l,{value:"email",label:"Email",description:"Best for non-urgent requests",iconLeft:"envelope"}),e.jsx(l,{value:"phone",label:"Phone",description:"Best for urgent issues",iconLeft:"at"}),e.jsx(l,{value:"chat",label:"Live chat",description:"During business hours",iconLeft:"message"})]})}),parameters:{controls:{disable:!0}}},R={render:function(){const[a,i]=c.useState(["react","typescript"]);return e.jsxs(s,{display:"grid",gap:"12",maxW:"xs",children:[e.jsxs(p,{multiple:!0,value:a,onChange:u=>{i(Array.isArray(u)?u:null)},placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"panda",label:"Panda CSS"})]}),e.jsxs(O,{size:"14",color:"text.subtle",children:["Selected: ",(a==null?void 0:a.join(", "))||"none"]})]})},parameters:{controls:{disable:!0}}},D={name:"Ex: Auto Size",render:function(){const[a,i]=c.useState("long"),[u,o]=c.useState(["react","typescript","storybook","text"]),[m,y]=c.useState(["react","typescript","storybook","text"]);return e.jsxs(s,{display:"grid",gap:"24",w:"full",maxW:"2xl",children:[e.jsxs(s,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(s,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:'autoSize="false"'}),e.jsx(s,{maxW:"xs",children:e.jsxs(p,{multiple:!0,value:u,onChange:x=>o(Array.isArray(x)?x:null),placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"text",label:"Text"})]})})]}),e.jsxs(s,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:'autoSize="true"'}),e.jsx(s,{maxW:"xs",children:e.jsxs(p,{multiple:!0,autoSize:!0,value:m,onChange:x=>y(Array.isArray(x)?x:null),placeholder:"Choose tags...",children:[e.jsx(l,{value:"react",label:"React"}),e.jsx(l,{value:"typescript",label:"TypeScript"}),e.jsx(l,{value:"storybook",label:"Storybook"}),e.jsx(l,{value:"text",label:"Text"})]})})]})]}),e.jsxs(s,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(s,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:"Single select default"}),e.jsx(s,{maxW:"xs",children:e.jsxs(p,{value:a,onChange:i,children:[e.jsx(l,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(l,{value:"short",label:"Short label"})]})})]}),e.jsxs(s,{display:"grid",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:"Single select autoSize"}),e.jsx(s,{maxW:"xs",children:e.jsxs(p,{autoSize:!0,value:a,onChange:i,children:[e.jsx(l,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(l,{value:"short",label:"Short label"})]})})]})]})]})},parameters:{controls:{disable:!0}}},q={name:"Ex: In FormField",render:function(){const[a,i]=c.useState(null);return e.jsx(s,{w:"sm",children:e.jsx(Ot,{label:"Team size",labelFor:"team-size",helpText:"Choose the option that best fits your current headcount.",error:!a,errorText:"Select a team size.",children:e.jsxs(p,{id:"team-size",name:"teamSize",value:a,onChange:i,placeholder:"Select team size...",children:[e.jsx(l,{value:"1-10",label:"1–10 people"}),e.jsx(l,{value:"11-50",label:"11–50 people"}),e.jsx(l,{value:"51-200",label:"51–200 people"}),e.jsx(l,{value:"201-plus",label:"201+ people"})]})})})},parameters:{controls:{disable:!0}}},M={name:"Ex: Controlled",render:function(){const[a,i]=c.useState("growth");return e.jsxs(s,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(p,{value:a,onChange:i,placeholder:"Choose a plan...",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]}),e.jsxs(O,{size:"14",color:"text.subtle",children:["Selected: ",a||"none"]})]})},parameters:{controls:{disable:!0}}},_={name:"A11y: Keyboard Interaction",render:function(){const[a,i]=c.useState(null);return e.jsx(s,{w:"xs",children:e.jsxs(p,{value:a,onChange:i,placeholder:"Choose an option...",children:[e.jsx(l,{value:"starter",label:"Starter"}),e.jsx(l,{value:"growth",label:"Growth"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})})},play:async({canvasElement:r})=>{const a=ne(r),i=ne(r.ownerDocument.body),u=a.getByRole("combobox",{name:/choose an option/i});u.focus(),N(u).toHaveFocus(),await ie.keyboard("{ArrowDown}");const o=i.getByRole("listbox");N(o).toBeVisible(),await ie.keyboard("{ArrowDown}{Enter}"),N(a.getByRole("combobox",{name:/growth/i})).toBeVisible()},parameters:{controls:{disable:!0}}};var ue,pe,de;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    return <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  }
}`,...(de=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,xe,he;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var be,ge,Se;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var ve,fe,ye;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var we,je,Oe;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Oe=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var Ce,Be,Ve;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ve=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Ae,ze,Te;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Te=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:Te.source}}};var Ee,Ie,Fe;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Fe=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var ke,Re,De;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Re=M.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var qe,Me,_e;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(_e=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};const yl=["Default","Uncontrolled","States","Sizes","WithDescriptionsAndIcons","Multiple","ExAutoSize","InFormField","ExControlled","A11yKeyboardInteraction"];export{_ as A11yKeyboardInteraction,T as Default,D as ExAutoSize,M as ExControlled,q as InFormField,R as Multiple,F as Sizes,I as States,E as Uncontrolled,k as WithDescriptionsAndIcons,yl as __namedExportsOrder,fl as default};
