import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{f as F,w as H,e as b,u as N}from"./index-DPYJpPba.js";import{m as D,a as O,s as $,f as z,b as J,d as Q,B as U}from"./Box-DKmSdfHE.js";import{C as X}from"./Card-BkI1tAaZ.js";import{L as Y}from"./Label-DxRmGjyW.js";import{T as s}from"./Toggle-Btkk48OB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-D93YU_Y7.js";const u=O("toggleInput",{},[]),K={},f=Object.keys(K),Z=Object.assign(D(u.recipeFn),{__recipe__:!0,__name__:"toggleInput",__getCompoundVariantCss__:u.__getCompoundVariantCss__,raw:r=>r,variantKeys:f,variantMap:K,merge(r){return z(this,r)},splitVariantProps(r){return $(r,f)},getVariantProps:u.getVariantProps}),o=r=>{const{name:e,checked:t,onChange:n,id:p,children:L,error:P,disabled:h,...q}=r,[V,G]=J(q),M=c.useId(),k=p??M;return a.jsxs(Y,{className:Q(Z({}),V),htmlFor:k,disabled:h,...G,children:[a.jsx(s,{name:e,checked:t,onChange:n,id:k,error:P,disabled:h}),L]})};o.__docgenInfo={description:"",methods:[],displayName:"ToggleInput",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ToggleChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""}}};const ie={title:"Components/Toggle",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"toggle-story",checked:!1,onChange:F()}},d={render:function(){const[e,t]=c.useState(!1),n=p=>t(p.target.checked);return a.jsx(s,{name:"primitive-toggle",id:"primitive-toggle",checked:e,onChange:n})}},i={name:"All States",render:()=>a.jsxs(X,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[a.jsx(s,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{}}),a.jsx(s,{name:"checked",id:"checked",checked:!0,onChange:()=>{}}),a.jsx(s,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{}}),a.jsx(s,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{}}),a.jsx(s,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{}})]}),parameters:{controls:{disable:!0}}},g={name:"Ex: With ToggleInput Wrapper",render:function(){const[e,t]=c.useState(!1);return a.jsx(o,{name:"email-alerts",id:"email-alerts",checked:e,onChange:n=>t(n.target.checked),children:"Enable email alerts"})},parameters:{controls:{disable:!0}}},l={name:"Ex: Settings Group",render:function(){const[e,t]=c.useState({marketing:!1,updates:!0,reminders:!1});return a.jsxs(U,{display:"grid",gap:"10",children:[a.jsx(o,{name:"marketing",id:"marketing",checked:e.marketing,onChange:n=>t({...e,marketing:n.target.checked}),children:"Marketing emails"}),a.jsx(o,{name:"updates",id:"updates",checked:e.updates,onChange:n=>t({...e,updates:n.target.checked}),children:"Product updates"}),a.jsx(o,{name:"reminders",id:"reminders",checked:e.reminders,onChange:n=>t({...e,reminders:n.target.checked}),children:"Task reminders"})]})},parameters:{controls:{disable:!0}}},m={name:"A11y: Keyboard Interaction",render:function(){const[e,t]=c.useState(!1);return a.jsx(o,{name:"a11y-toggle",id:"a11y-toggle",checked:e,onChange:n=>t(n.target.checked),children:"Turn on compact mode"})},play:async({canvasElement:r})=>{const t=H(r).getByRole("checkbox",{name:/compact mode/i});t.focus(),b(t).toHaveFocus(),await N.keyboard(" "),b(t).toBeChecked()},parameters:{controls:{disable:!0}}};var C,y,x;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const [checked, setChecked] = useState(false);
    const onChange: ToggleChangeHandler = e => setChecked(e.target.checked);
    return <Toggle name="primitive-toggle" id="primitive-toggle" checked={checked} onChange={onChange} />;
  }
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,I,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <Card p="24" bg="bg.accent.tan.subtlest" display="grid" gap="12">
      <Toggle name="unchecked" id="unchecked" checked={false} onChange={() => {}} />
      <Toggle name="checked" id="checked" checked={true} onChange={() => {}} />
      <Toggle name="error" id="error" checked={false} error onChange={() => {}} />
      <Toggle name="disabled" id="disabled" checked={false} disabled onChange={() => {}} />
      <Toggle name="disabled-checked" id="disabled-checked" checked={true} disabled onChange={() => {}} />
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var S,v,_;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Ex: With ToggleInput Wrapper',
  render: function ExWithLabelWrapperRender() {
    const [enabled, setEnabled] = useState(false);
    return <ToggleInput name="email-alerts" id="email-alerts" checked={enabled} onChange={e => setEnabled(e.target.checked)}>
        Enable email alerts
      </ToggleInput>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(v=g.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var j,R,W;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(R=l.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var A,w,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const ge=["Default","AllStates","ExWithLabelWrapper","ExSettingsGroup","A11yKeyboardInteraction"];export{m as A11yKeyboardInteraction,i as AllStates,d as Default,l as ExSettingsGroup,g as ExWithLabelWrapper,ge as __namedExportsOrder,ie as default};
