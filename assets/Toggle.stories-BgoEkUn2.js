import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BKyFwriW.js";import{f as Y,w as Z,e as T,u as ee}from"./index-DPYJpPba.js";import{m as te,a as ne,s as ae,h as re,b as oe,d as se,e as ce,B as ie}from"./dsComponent-BZ80dv4C.js";import{C as de}from"./Card-CI5J8vNY.js";import{L as K}from"./Label-CcjMpbMI.js";import{u as le}from"./FieldContext-D6URyQos.js";import{T as k}from"./Toggle-O_SZ-6vY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CPS1ygZT.js";const h=ne("toggleInput",{},[]),V={},I=Object.keys(V),ge=Object.assign(te(h.recipeFn),{__recipe__:!0,__name__:"toggleInput",__getCompoundVariantCss__:h.__getCompoundVariantCss__,raw:a=>a,variantKeys:I,variantMap:V,merge(a){return re(this,a)},splitVariantProps(a){return ae(a,I)},getVariantProps:h.getVariantProps}),o=a=>{const e=le(),{name:n,checked:r,defaultChecked:c,onChange:u,id:G,children:L,error:H,invalid:N,disabled:$,...z}=a,b=H??(e==null?void 0:e.error),J=N??(e==null?void 0:e.invalid),f=$??(e==null?void 0:e.disabled),[Q,W]=oe(z),X=s.useId(),y=G??X;return t.jsxs(K,{...ce("ToggleInput"),className:se(ge({}),Q),htmlFor:y,error:b,disabled:f,...W,children:[t.jsx(k,{name:n,checked:r,defaultChecked:c,onChange:u,id:y,error:b,invalid:J,disabled:f}),L]})};o.__docgenInfo={description:`A toggle paired with a clickable label.

Use it for binary settings with a visible text label. It generates an ID when
needed and associates that ID with the label. Its state and field-context
precedence match {@link Toggle}.

@example
\`\`\`tsx
<ToggleInput name="emailUpdates" defaultChecked>
  Email updates
</ToggleInput>
\`\`\``,methods:[],displayName:"ToggleInput",props:{name:{required:!0,tsType:{name:"string"},description:"Form field name submitted when the toggle is on."},checked:{required:!1,tsType:{name:"boolean"},description:"Controlled on/off state. Pair with `onChange`; do not combine with `defaultChecked`."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"@default false"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ToggleChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Runs when the contained native checkbox changes."},id:{required:!1,tsType:{name:"string"},description:"Input ID. A stable ID is generated when omitted and associated with the label."},error:{required:!1,tsType:{name:"boolean"},description:"Applies error styling, overriding field context."},invalid:{required:!1,tsType:{name:"boolean"},description:"Marks the toggle invalid, overriding field context."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the label and toggle, overriding field context."},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Visible label content."}}};const Ce={title:"Components/Toggle",component:k,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `ToggleInput` in product settings and forms so label association and spacing are consistent. Use `Toggle` when composing custom wrappers only. Both controlled and uncontrolled usage are supported."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"toggle-story",checked:!1,onChange:Y()}},i={render:function(){const[e,n]=s.useState(!1);return t.jsx(o,{name:"email-alerts",id:"email-alerts",checked:e,onChange:r=>n(r.target.checked),children:"Enable email alerts"})},parameters:{docs:{description:{story:"Recommended default for app settings: controlled `ToggleInput` with clear label text."}}}},d={name:"Uncontrolled",render:()=>t.jsx(o,{name:"uncontrolled-toggle",id:"uncontrolled-toggle",defaultChecked:!0,children:"Enable compact mode"}),parameters:{controls:{disable:!0}}},l={name:"All States",render:()=>t.jsxs(de,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[t.jsx(o,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),t.jsx(o,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),t.jsx(o,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),t.jsx(o,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),t.jsx(o,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage is demonstrated with `ToggleInput`, the primary component for application usage."}}}},g={name:"Ex: Primitive Toggle Only",render:function(){const[e,n]=s.useState(!1),r=u=>n(u.target.checked),c="primitive-toggle";return t.jsxs(K,{htmlFor:c,display:"inline-flex",alignItems:"center",gap:"6",children:[t.jsx(k,{name:"primitive-toggle",id:c,checked:e,onChange:r}),"Manual composition using Toggle primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `ToggleInput` in application code."}}}},p={name:"Ex: Settings Group",render:function(){const[e,n]=s.useState({marketing:!1,updates:!0,reminders:!1});return t.jsxs(ie,{display:"grid",gap:"10",children:[t.jsx(o,{name:"marketing",id:"marketing",checked:e.marketing,onChange:r=>n({...e,marketing:r.target.checked}),children:"Marketing emails"}),t.jsx(o,{name:"updates",id:"updates",checked:e.updates,onChange:r=>n({...e,updates:r.target.checked}),children:"Product updates"}),t.jsx(o,{name:"reminders",id:"reminders",checked:e.reminders,onChange:r=>n({...e,reminders:r.target.checked}),children:"Task reminders"})]})},parameters:{controls:{disable:!0}}},m={name:"A11y: Keyboard Interaction",render:function(){const[e,n]=s.useState(!1);return t.jsx(o,{name:"a11y-toggle",id:"a11y-toggle",checked:e,onChange:r=>n(r.target.checked),children:"Turn on compact mode"})},play:async({canvasElement:a})=>{const n=Z(a).getByRole("checkbox",{name:/compact mode/i});n.focus(),T(n).toHaveFocus(),await ee.keyboard(" "),T(n).toBeChecked()},parameters:{controls:{disable:!0}}};var C,x,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var E,S,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Uncontrolled',
  render: () => <ToggleInput name="uncontrolled-toggle" id="uncontrolled-toggle" defaultChecked>
      Enable compact mode
    </ToggleInput>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var P,j,_;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(j=l.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var R,A,D;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(A=g.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var U,q,B;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(q=p.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,M,O;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const xe=["Default","Uncontrolled","AllStates","ExPrimitiveOnly","ExSettingsGroup","A11yKeyboardInteraction"];export{m as A11yKeyboardInteraction,l as AllStates,i as Default,g as ExPrimitiveOnly,p as ExSettingsGroup,d as Uncontrolled,xe as __namedExportsOrder,Ce as default};
