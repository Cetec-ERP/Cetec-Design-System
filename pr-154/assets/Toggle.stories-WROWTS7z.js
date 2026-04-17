import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{f as L,w as H,e as f,u as N}from"./index-DPYJpPba.js";import{m as U,a as $,s as z,b as J,d as Q,e as W,B as X}from"./Box-CpGDZWWa.js";import{C as Y}from"./Card-DTNlVJDD.js";import{L as K}from"./Label-BQdsfQr5.js";import{T as h}from"./Toggle-ULDC_3e3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-BgHyrg9m.js";import"./IconConfig-D8Vw8IRf.js";const u=$("toggleInput",{},[]),M={},T=Object.keys(M),Z=Object.assign(U(u.recipeFn),{__recipe__:!0,__name__:"toggleInput",__getCompoundVariantCss__:u.__getCompoundVariantCss__,raw:r=>r,variantKeys:T,variantMap:M,merge(r){return J(this,r)},splitVariantProps(r){return z(r,T)},getVariantProps:u.getVariantProps}),s=r=>{const{name:t,checked:n,onChange:a,id:c,children:m,error:k,disabled:y,...q}=r,[F,V]=Q(q),G=o.useId(),b=c??G;return e.jsxs(K,{className:W(Z({}),F),htmlFor:b,error:k,disabled:y,...V,children:[e.jsx(h,{name:t,checked:n,onChange:a,id:b,error:k,disabled:y}),m]})};s.__docgenInfo={description:"",methods:[],displayName:"ToggleInput",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ToggleChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""}}};const le={title:"Components/Toggle",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `ToggleInput` in product settings and forms so label association and spacing are consistent. Use `Toggle` when composing custom wrappers only."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"toggle-story",checked:!1,onChange:L()}},i={render:function(){const[t,n]=o.useState(!1);return e.jsx(s,{name:"email-alerts",id:"email-alerts",checked:t,onChange:a=>n(a.target.checked),children:"Enable email alerts"})},parameters:{docs:{description:{story:"Recommended default for app settings: controlled `ToggleInput` with clear label text."}}}},d={name:"All States",render:()=>e.jsxs(Y,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[e.jsx(s,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),e.jsx(s,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),e.jsx(s,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),e.jsx(s,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),e.jsx(s,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage is demonstrated with `ToggleInput`, the primary component for application usage."}}}},l={name:"Ex: Primitive Toggle Only",render:function(){const[t,n]=o.useState(!1),a=m=>n(m.target.checked),c="primitive-toggle";return e.jsxs(K,{htmlFor:c,display:"inline-flex",alignItems:"center",gap:"6",children:[e.jsx(h,{name:"primitive-toggle",id:c,checked:t,onChange:a}),"Manual composition using Toggle primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `ToggleInput` in application code."}}}},g={name:"Ex: Settings Group",render:function(){const[t,n]=o.useState({marketing:!1,updates:!0,reminders:!1});return e.jsxs(X,{display:"grid",gap:"10",children:[e.jsx(s,{name:"marketing",id:"marketing",checked:t.marketing,onChange:a=>n({...t,marketing:a.target.checked}),children:"Marketing emails"}),e.jsx(s,{name:"updates",id:"updates",checked:t.updates,onChange:a=>n({...t,updates:a.target.checked}),children:"Product updates"}),e.jsx(s,{name:"reminders",id:"reminders",checked:t.reminders,onChange:a=>n({...t,reminders:a.target.checked}),children:"Task reminders"})]})},parameters:{controls:{disable:!0}}},p={name:"A11y: Keyboard Interaction",render:function(){const[t,n]=o.useState(!1);return e.jsx(s,{name:"a11y-toggle",id:"a11y-toggle",checked:t,onChange:a=>n(a.target.checked),children:"Turn on compact mode"})},play:async({canvasElement:r})=>{const n=H(r).getByRole("checkbox",{name:/compact mode/i});n.focus(),f(n).toHaveFocus(),await N.keyboard(" "),f(n).toBeChecked()},parameters:{controls:{disable:!0}}};var C,x,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(x=i.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var v,S,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var j,_,P;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(_=l.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var R,w,A;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(w=g.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,B,D;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const ge=["Default","AllStates","ExPrimitiveOnly","ExSettingsGroup","A11yKeyboardInteraction"];export{p as A11yKeyboardInteraction,d as AllStates,i as Default,l as ExPrimitiveOnly,g as ExSettingsGroup,ge as __namedExportsOrder,le as default};
