import{m as X,g as Z,f as ee,L as ne,s as te,r as s,j as n,c as ae,d as re,B as oe}from"./iframe-ClDBFN2j.js";import{C as se}from"./Card-BwI46FZm.js";import{L as K}from"./Label-BdMP6elW.js";import{u as ce}from"./FieldContext-E_9W_pfR.js";import{T as k}from"./Toggle-D1OAVIHI.js";import"./preload-helper-BJIPxT3X.js";const h=Z("toggleInput",{},[]),L={},T=Object.keys(L),de=Object.assign(X(h.recipeFn),{__recipe__:!0,__name__:"toggleInput",__getCompoundVariantCss__:h.__getCompoundVariantCss__,raw:a=>a,variantKeys:T,variantMap:L,merge(a){return ne(this,a)},splitVariantProps(a){return ee(a,T)},getVariantProps:h.getVariantProps}),o=a=>{const e=ce(),{name:t,checked:r,defaultChecked:c,onChange:u,id:V,children:G,error:H,invalid:N,disabled:Y,...$}=a,b=H??(e==null?void 0:e.error),z=N??(e==null?void 0:e.invalid),f=Y??(e==null?void 0:e.disabled),[J,Q]=te($),W=s.useId(),y=V??W;return n.jsxs(K,{...re("ToggleInput"),className:ae(de({}),J),htmlFor:y,error:b,disabled:f,...Q,children:[n.jsx(k,{name:t,checked:r,defaultChecked:c,onChange:u,id:y,error:b,invalid:z,disabled:f}),G]})};o.__docgenInfo={description:`A toggle paired with a clickable label.

Use it for binary settings with a visible text label. It generates an ID when
needed and associates that ID with the label. Its state and field-context
precedence match {@link Toggle}.

@example
\`\`\`tsx
<ToggleInput name="emailUpdates" defaultChecked>
  Email updates
</ToggleInput>
\`\`\``,methods:[],displayName:"ToggleInput",props:{name:{required:!0,tsType:{name:"string"},description:"Form field name submitted when the toggle is on."},checked:{required:!1,tsType:{name:"boolean"},description:"Controlled on/off state. Pair with `onChange`; do not combine with `defaultChecked`."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"@default false"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ToggleChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Runs when the contained native checkbox changes."},id:{required:!1,tsType:{name:"string"},description:"Input ID. A stable ID is generated when omitted and associated with the label."},error:{required:!1,tsType:{name:"boolean"},description:"Applies error styling, overriding field context."},invalid:{required:!1,tsType:{name:"boolean"},description:"Marks the toggle invalid, overriding field context."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the label and toggle, overriding field context."},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Visible label content."}}};const{expect:I,fn:ie,userEvent:le,within:ge}=__STORYBOOK_MODULE_TEST__,fe={title:"Components/Toggle",component:k,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `ToggleInput` in product settings and forms so label association and spacing are consistent. Use `Toggle` when composing custom wrappers only. Both controlled and uncontrolled usage are supported."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"toggle-story",checked:!1,onChange:ie()}},d={render:function(){const[e,t]=s.useState(!1);return n.jsx(o,{name:"email-alerts",id:"email-alerts",checked:e,onChange:r=>t(r.target.checked),children:"Enable email alerts"})},parameters:{docs:{description:{story:"Recommended default for app settings: controlled `ToggleInput` with clear label text."}}}},i={name:"Uncontrolled",render:()=>n.jsx(o,{name:"uncontrolled-toggle",id:"uncontrolled-toggle",defaultChecked:!0,children:"Enable compact mode"}),parameters:{controls:{disable:!0}}},l={name:"All States",render:()=>n.jsxs(se,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[n.jsx(o,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),n.jsx(o,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),n.jsx(o,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),n.jsx(o,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),n.jsx(o,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage is demonstrated with `ToggleInput`, the primary component for application usage."}}}},g={name:"Ex: Primitive Toggle Only",render:function(){const[e,t]=s.useState(!1),r=u=>t(u.target.checked),c="primitive-toggle";return n.jsxs(K,{htmlFor:c,display:"inline-flex",alignItems:"center",gap:"6",children:[n.jsx(k,{name:"primitive-toggle",id:c,checked:e,onChange:r}),"Manual composition using Toggle primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `ToggleInput` in application code."}}}},p={name:"Ex: Settings Group",render:function(){const[e,t]=s.useState({marketing:!1,updates:!0,reminders:!1});return n.jsxs(oe,{display:"grid",gap:"10",children:[n.jsx(o,{name:"marketing",id:"marketing",checked:e.marketing,onChange:r=>t({...e,marketing:r.target.checked}),children:"Marketing emails"}),n.jsx(o,{name:"updates",id:"updates",checked:e.updates,onChange:r=>t({...e,updates:r.target.checked}),children:"Product updates"}),n.jsx(o,{name:"reminders",id:"reminders",checked:e.reminders,onChange:r=>t({...e,reminders:r.target.checked}),children:"Task reminders"})]})},parameters:{controls:{disable:!0}}},m={name:"A11y: Keyboard Interaction",render:function(){const[e,t]=s.useState(!1);return n.jsx(o,{name:"a11y-toggle",id:"a11y-toggle",checked:e,onChange:r=>t(r.target.checked),children:"Turn on compact mode"})},play:async({canvasElement:a})=>{const t=ge(a).getByRole("checkbox",{name:/compact mode/i});t.focus(),I(t).toHaveFocus(),await le.keyboard(" "),I(t).toBeChecked()},parameters:{controls:{disable:!0}}},ye=["Default","Uncontrolled","AllStates","ExPrimitiveOnly","ExSettingsGroup","A11yKeyboardInteraction"];var C,x,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var E,S,_;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Uncontrolled',
  render: () => <ToggleInput name="uncontrolled-toggle" id="uncontrolled-toggle" defaultChecked>
      Enable compact mode
    </ToggleInput>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var w,P,j;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(P=l.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var R,D,A;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(D=g.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var O,U,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(U=p.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var M,q,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};export{m as A11yKeyboardInteraction,l as AllStates,d as Default,g as ExPrimitiveOnly,p as ExSettingsGroup,i as Uncontrolled,ye as __namedExportsOrder,fe as default};
