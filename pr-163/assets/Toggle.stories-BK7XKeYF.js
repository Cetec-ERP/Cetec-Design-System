import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{f as z,w as J,e as f,u as Q}from"./index-DPYJpPba.js";import{m as W,c as X,s as Y,a as Z,b as ee,d as te,B as ne}from"./Box-DON8OdPK.js";import{C as re}from"./Card-Djc-wNfS.js";import{L as D}from"./Label-DWL0qqiH.js";import{u as ae}from"./FieldContext-D6URyQos.js";import{T as h}from"./Toggle-vB8arR6h.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-BjyDhYXA.js";import"./IconConfig-CigF0iOf.js";const u=X("toggleInput",{},[]),F={},T=Object.keys(F),se=Object.assign(W(u.recipeFn),{__recipe__:!0,__name__:"toggleInput",__getCompoundVariantCss__:u.__getCompoundVariantCss__,raw:r=>r,variantKeys:T,variantMap:F,merge(r){return Z(this,r)},splitVariantProps(r){return Y(r,T)},getVariantProps:u.getVariantProps}),s=r=>{const e=ae(),{name:n,checked:a,onChange:c,id:m,children:K,error:M,invalid:V,disabled:G,...L}=r,k=M??(e==null?void 0:e.error),H=V??(e==null?void 0:e.invalid),b=G??(e==null?void 0:e.disabled),[N,U]=ee(L),$=o.useId(),y=m??$;return t.jsxs(D,{className:te(se({}),N),htmlFor:y,error:k,disabled:b,...U,children:[t.jsx(h,{name:n,checked:a,onChange:c,id:y,error:k,invalid:H,disabled:b}),K]})};s.__docgenInfo={description:"",methods:[],displayName:"ToggleInput",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ToggleChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""}}};const be={title:"Components/Toggle",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `ToggleInput` in product settings and forms so label association and spacing are consistent. Use `Toggle` when composing custom wrappers only."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"toggle-story",checked:!1,onChange:z()}},i={render:function(){const[e,n]=o.useState(!1);return t.jsx(s,{name:"email-alerts",id:"email-alerts",checked:e,onChange:a=>n(a.target.checked),children:"Enable email alerts"})},parameters:{docs:{description:{story:"Recommended default for app settings: controlled `ToggleInput` with clear label text."}}}},d={name:"All States",render:()=>t.jsxs(re,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[t.jsx(s,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),t.jsx(s,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),t.jsx(s,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),t.jsx(s,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),t.jsx(s,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage is demonstrated with `ToggleInput`, the primary component for application usage."}}}},l={name:"Ex: Primitive Toggle Only",render:function(){const[e,n]=o.useState(!1),a=m=>n(m.target.checked),c="primitive-toggle";return t.jsxs(D,{htmlFor:c,display:"inline-flex",alignItems:"center",gap:"6",children:[t.jsx(h,{name:"primitive-toggle",id:c,checked:e,onChange:a}),"Manual composition using Toggle primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `ToggleInput` in application code."}}}},g={name:"Ex: Settings Group",render:function(){const[e,n]=o.useState({marketing:!1,updates:!0,reminders:!1});return t.jsxs(ne,{display:"grid",gap:"10",children:[t.jsx(s,{name:"marketing",id:"marketing",checked:e.marketing,onChange:a=>n({...e,marketing:a.target.checked}),children:"Marketing emails"}),t.jsx(s,{name:"updates",id:"updates",checked:e.updates,onChange:a=>n({...e,updates:a.target.checked}),children:"Product updates"}),t.jsx(s,{name:"reminders",id:"reminders",checked:e.reminders,onChange:a=>n({...e,reminders:a.target.checked}),children:"Task reminders"})]})},parameters:{controls:{disable:!0}}},p={name:"A11y: Keyboard Interaction",render:function(){const[e,n]=o.useState(!1);return t.jsx(s,{name:"a11y-toggle",id:"a11y-toggle",checked:e,onChange:a=>n(a.target.checked),children:"Turn on compact mode"})},play:async({canvasElement:r})=>{const n=J(r).getByRole("checkbox",{name:/compact mode/i});n.focus(),f(n).toHaveFocus(),await Q.keyboard(" "),f(n).toBeChecked()},parameters:{controls:{disable:!0}}};var C,I,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const [checked, setChecked] = useState(false);
    return <ToggleInput name="email-alerts" id="email-alerts" checked={checked} onChange={e => setChecked(e.target.checked)}>
        Enable email alerts
      </ToggleInput>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Recommended default for app settings: controlled \`ToggleInput\` with clear label text.'
      }
    }
  }
}`,...(x=(I=i.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var v,S,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <Card p="24" bg="bg.accent.tan.subtlest" display="grid" gap="12">
      <ToggleInput name="unchecked" id="unchecked" checked={false} onChange={() => {}}>
        Unchecked
      </ToggleInput>
      <ToggleInput name="checked" id="checked" checked={true} onChange={() => {}}>
        Checked
      </ToggleInput>
      <ToggleInput name="error" id="error" checked={false} error onChange={() => {}}>
        Error
      </ToggleInput>
      <ToggleInput name="disabled" id="disabled" checked={false} disabled onChange={() => {}}>
        Disabled
      </ToggleInput>
      <ToggleInput name="disabled-checked" id="disabled-checked" checked={true} disabled onChange={() => {}}>
        Disabled checked
      </ToggleInput>
    </Card>,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'State coverage is demonstrated with \`ToggleInput\`, the primary component for application usage.'
      }
    }
  }
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var P,j,_;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Ex: Primitive Toggle Only',
  render: function ExPrimitiveOnlyRender() {
    const [checked, setChecked] = useState(false);
    const onChange: ToggleChangeHandler = e => setChecked(e.target.checked);
    const id = 'primitive-toggle';
    return <Label htmlFor={id} display="inline-flex" alignItems="center" gap="6">
        <Toggle name="primitive-toggle" id={id} checked={checked} onChange={onChange} />
        Manual composition using Toggle primitive
      </Label>;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Primitive-only example for advanced composition. Prefer \`ToggleInput\` in application code.'
      }
    }
  }
}`,...(_=(j=l.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var R,w,A;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Ex: Settings Group',
  render: function ExSettingsGroupRender() {
    const [settings, setSettings] = useState({
      marketing: false,
      updates: true,
      reminders: false
    });
    return <Box display="grid" gap="10">
        <ToggleInput name="marketing" id="marketing" checked={settings.marketing} onChange={e => setSettings({
        ...settings,
        marketing: e.target.checked
      })}>
          Marketing emails
        </ToggleInput>
        <ToggleInput name="updates" id="updates" checked={settings.updates} onChange={e => setSettings({
        ...settings,
        updates: e.target.checked
      })}>
          Product updates
        </ToggleInput>
        <ToggleInput name="reminders" id="reminders" checked={settings.reminders} onChange={e => setSettings({
        ...settings,
        reminders: e.target.checked
      })}>
          Task reminders
        </ToggleInput>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(w=g.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,q,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'A11y: Keyboard Interaction',
  render: function A11yKeyboardInteractionRender() {
    const [checked, setChecked] = useState(false);
    return <ToggleInput name="a11y-toggle" id="a11y-toggle" checked={checked} onChange={e => setChecked(e.target.checked)}>
        Turn on compact mode
      </ToggleInput>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: /compact mode/i
    });
    toggle.focus();
    expect(toggle).toHaveFocus();
    await userEvent.keyboard(' ');
    expect(toggle).toBeChecked();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(q=p.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const ye=["Default","AllStates","ExPrimitiveOnly","ExSettingsGroup","A11yKeyboardInteraction"];export{p as A11yKeyboardInteraction,d as AllStates,i as Default,l as ExPrimitiveOnly,g as ExSettingsGroup,ye as __namedExportsOrder,be as default};
