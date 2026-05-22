import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BKyFwriW.js";import{f as Y,w as Z,e as T,u as ee}from"./index-DPYJpPba.js";import{m as te,a as ne,s as re,f as ae,b as oe,d as se,B as ce}from"./Box-C4uJrM56.js";import{C as de}from"./Card-rEDbr8LR.js";import{L as U}from"./Label-Md2wWTZa.js";import{u as ie}from"./FieldContext-D6URyQos.js";import{T as k}from"./Toggle-gSazCA-r.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DVkTIUY6.js";import"./IconConfig-CwDT3tlP.js";const h=ne("toggleInput",{},[]),V={},C=Object.keys(V),le=Object.assign(te(h.recipeFn),{__recipe__:!0,__name__:"toggleInput",__getCompoundVariantCss__:h.__getCompoundVariantCss__,raw:r=>r,variantKeys:C,variantMap:V,merge(r){return ae(this,r)},splitVariantProps(r){return re(r,C)},getVariantProps:h.getVariantProps}),o=r=>{const e=ie(),{name:n,checked:a,defaultChecked:c,onChange:u,id:G,children:L,error:H,invalid:N,disabled:$,...z}=r,b=H??(e==null?void 0:e.error),J=N??(e==null?void 0:e.invalid),f=$??(e==null?void 0:e.disabled),[Q,W]=oe(z),X=s.useId(),y=G??X;return t.jsxs(U,{className:se(le({}),Q),htmlFor:y,error:b,disabled:f,...W,children:[t.jsx(k,{name:n,checked:a,defaultChecked:c,onChange:u,id:y,error:b,invalid:J,disabled:f}),L]})};o.__docgenInfo={description:"",methods:[],displayName:"ToggleInput",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ToggleChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""}}};const Ie={title:"Components/Toggle",component:k,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `ToggleInput` in product settings and forms so label association and spacing are consistent. Use `Toggle` when composing custom wrappers only. Both controlled and uncontrolled usage are supported."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"toggle-story",checked:!1,onChange:Y()}},d={render:function(){const[e,n]=s.useState(!1);return t.jsx(o,{name:"email-alerts",id:"email-alerts",checked:e,onChange:a=>n(a.target.checked),children:"Enable email alerts"})},parameters:{docs:{description:{story:"Recommended default for app settings: controlled `ToggleInput` with clear label text."}}}},i={name:"Uncontrolled",render:()=>t.jsx(o,{name:"uncontrolled-toggle",id:"uncontrolled-toggle",defaultChecked:!0,children:"Enable compact mode"}),parameters:{controls:{disable:!0}}},l={name:"All States",render:()=>t.jsxs(de,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[t.jsx(o,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),t.jsx(o,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),t.jsx(o,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),t.jsx(o,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),t.jsx(o,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage is demonstrated with `ToggleInput`, the primary component for application usage."}}}},g={name:"Ex: Primitive Toggle Only",render:function(){const[e,n]=s.useState(!1),a=u=>n(u.target.checked),c="primitive-toggle";return t.jsxs(U,{htmlFor:c,display:"inline-flex",alignItems:"center",gap:"6",children:[t.jsx(k,{name:"primitive-toggle",id:c,checked:e,onChange:a}),"Manual composition using Toggle primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `ToggleInput` in application code."}}}},p={name:"Ex: Settings Group",render:function(){const[e,n]=s.useState({marketing:!1,updates:!0,reminders:!1});return t.jsxs(ce,{display:"grid",gap:"10",children:[t.jsx(o,{name:"marketing",id:"marketing",checked:e.marketing,onChange:a=>n({...e,marketing:a.target.checked}),children:"Marketing emails"}),t.jsx(o,{name:"updates",id:"updates",checked:e.updates,onChange:a=>n({...e,updates:a.target.checked}),children:"Product updates"}),t.jsx(o,{name:"reminders",id:"reminders",checked:e.reminders,onChange:a=>n({...e,reminders:a.target.checked}),children:"Task reminders"})]})},parameters:{controls:{disable:!0}}},m={name:"A11y: Keyboard Interaction",render:function(){const[e,n]=s.useState(!1);return t.jsx(o,{name:"a11y-toggle",id:"a11y-toggle",checked:e,onChange:a=>n(a.target.checked),children:"Turn on compact mode"})},play:async({canvasElement:r})=>{const n=Z(r).getByRole("checkbox",{name:/compact mode/i});n.focus(),T(n).toHaveFocus(),await ee.keyboard(" "),T(n).toBeChecked()},parameters:{controls:{disable:!0}}};var I,x,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,E,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Uncontrolled',
  render: () => <ToggleInput name="uncontrolled-toggle" id="uncontrolled-toggle" defaultChecked>
      Enable compact mode
    </ToggleInput>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(E=i.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var P,_,R;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(_=l.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var w,A,q;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=(A=g.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var B,O,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(O=p.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var F,K,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const xe=["Default","Uncontrolled","AllStates","ExPrimitiveOnly","ExSettingsGroup","A11yKeyboardInteraction"];export{m as A11yKeyboardInteraction,l as AllStates,d as Default,g as ExPrimitiveOnly,p as ExSettingsGroup,i as Uncontrolled,xe as __namedExportsOrder,Ie as default};
