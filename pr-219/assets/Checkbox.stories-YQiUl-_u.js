import{j as e,r as k,B as x}from"./iframe-CXsJ8nBA.js";import{C as H}from"./Card-sRYsG2eK.js";import{C as c}from"./CheckboxInput-B8_c_Ijd.js";import{L as M}from"./Label-BFoBrT1R.js";import{C as L}from"./Checkbox-B8P2AyWW.js";import"./preload-helper-CNOPt5Zm.js";import"./FieldContext-B4fdc69l.js";const{expect:C,fn:Y,userEvent:q,within:z}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Checkbox",component:L,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `CheckboxInput` for app forms so labels, spacing, and click targets are wired by default. Use `Checkbox` only when building a custom composed wrapper. Both controlled and uncontrolled usage are supported."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},indeterminate:{control:"boolean"}},args:{name:"checkbox-story",checked:!1,onChange:Y()}},i={render:function(){const[t,n]=k.useState(!1);return e.jsx(c,{name:"updates",id:"updates",checked:t,onChange:a=>n(a.target.checked),children:"Send me release updates"})},parameters:{docs:{description:{story:"Recommended default for product UI: `CheckboxInput` with visible label copy."}}}},l={name:"Uncontrolled",render:()=>e.jsx(c,{name:"uncontrolled",id:"uncontrolled",defaultChecked:!0,children:"Remember this choice"}),parameters:{controls:{disable:!0}}},h={name:"All States",render:()=>e.jsxs(H,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[e.jsx(c,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),e.jsx(c,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),e.jsx(c,{name:"indeterminate",id:"indeterminate",checked:!1,indeterminate:!0,onChange:()=>{},children:"Indeterminate"}),e.jsx(c,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),e.jsx(c,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),e.jsx(c,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage shown with `CheckboxInput`, which is the primary integration surface in forms."}}}},m={name:"Ex: Primitive Checkbox Only",render:function(){const[t,n]=k.useState(!1),a=b=>n(b.target.checked),s="primitive-checkbox";return e.jsxs(M,{htmlFor:s,display:"inline-flex",alignItems:"center",gap:"6",children:[e.jsx(L,{name:"primitive-checkbox",id:s,checked:t,onChange:a}),"Manual composition using Checkbox primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `CheckboxInput` in application code."}}}},p={name:"Ex: Select All Pattern",render:function(){const[t,n]=k.useState({a:!1,b:!0,c:!1}),a=Object.values(t).filter(Boolean).length,s=Object.keys(t).length,b=a===s,F=a>0&&a<s;return e.jsxs(x,{display:"grid",gap:"10",children:[e.jsx(c,{name:"all",id:"all",checked:b,indeterminate:F,onChange:o=>{const d=o.target.checked;n({a:d,b:d,c:d})},children:"Select all"}),e.jsx(x,{pl:"24",display:"grid",gap:"10",children:Object.entries(t).map(([o,d])=>e.jsxs(c,{name:o,id:o,checked:d,onChange:T=>n({...t,[o]:T.target.checked}),children:["Item ",o.toUpperCase()]},o))})]})},parameters:{controls:{disable:!0}}},u={name:"A11y: Keyboard Interaction",render:function(){const[t,n]=k.useState(!1);return e.jsx(c,{name:"a11y-checkbox",id:"a11y-checkbox",checked:t,onChange:a=>n(a.target.checked),children:"Enable notifications"})},play:async({canvasElement:r})=>{const n=z(r).getByRole("checkbox",{name:/enable notifications/i});n.focus(),C(n).toHaveFocus(),await q.keyboard(" "),C(n).toBeChecked()},parameters:{controls:{disable:!0}}},$=["Default","Uncontrolled","AllStates","ExPrimitiveOnly","ExSelectAllPattern","A11yKeyboardInteraction"];var g,f,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const [checked, setChecked] = useState(false);
    return <CheckboxInput name="updates" id="updates" checked={checked} onChange={e => setChecked(e.target.checked)}>
        Send me release updates
      </CheckboxInput>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Recommended default for product UI: \`CheckboxInput\` with visible label copy.'
      }
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var I,v,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Uncontrolled',
  render: () => <CheckboxInput name="uncontrolled" id="uncontrolled" defaultChecked>
      Remember this choice
    </CheckboxInput>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var E,j,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <Card p="24" bg="bg.accent.tan.subtlest" display="grid" gap="12">
      <CheckboxInput name="unchecked" id="unchecked" checked={false} onChange={() => {}}>
        Unchecked
      </CheckboxInput>
      <CheckboxInput name="checked" id="checked" checked={true} onChange={() => {}}>
        Checked
      </CheckboxInput>
      <CheckboxInput name="indeterminate" id="indeterminate" checked={false} indeterminate onChange={() => {}}>
        Indeterminate
      </CheckboxInput>
      <CheckboxInput name="error" id="error" checked={false} error onChange={() => {}}>
        Error
      </CheckboxInput>
      <CheckboxInput name="disabled" id="disabled" checked={false} disabled onChange={() => {}}>
        Disabled
      </CheckboxInput>
      <CheckboxInput name="disabled-checked" id="disabled-checked" checked={true} disabled onChange={() => {}}>
        Disabled checked
      </CheckboxInput>
    </Card>,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'State coverage shown with \`CheckboxInput\`, which is the primary integration surface in forms.'
      }
    }
  }
}`,...(O=(j=h.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var A,P,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Ex: Primitive Checkbox Only',
  render: function ExPrimitiveOnlyRender() {
    const [checked, setChecked] = useState(false);
    const onChange: CheckboxChangeHandler = e => setChecked(e.target.checked);
    const id = 'primitive-checkbox';
    return <Label htmlFor={id} display="inline-flex" alignItems="center" gap="6">
        <Checkbox name="primitive-checkbox" id={id} checked={checked} onChange={onChange} />
        Manual composition using Checkbox primitive
      </Label>;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Primitive-only example for advanced composition. Prefer \`CheckboxInput\` in application code.'
      }
    }
  }
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var w,B,U;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Ex: Select All Pattern',
  render: function ExSelectAllPatternRender() {
    const [items, setItems] = useState({
      a: false,
      b: true,
      c: false
    });
    const checkedCount = Object.values(items).filter(Boolean).length;
    const total = Object.keys(items).length;
    const allChecked = checkedCount === total;
    const someChecked = checkedCount > 0 && checkedCount < total;
    return <Box display="grid" gap="10">
        <CheckboxInput name="all" id="all" checked={allChecked} indeterminate={someChecked} onChange={e => {
        const next = e.target.checked;
        setItems({
          a: next,
          b: next,
          c: next
        });
      }}>
          Select all
        </CheckboxInput>

        <Box pl="24" display="grid" gap="10">
          {Object.entries(items).map(([key, value]) => <CheckboxInput key={key} name={key} id={key} checked={value} onChange={e => setItems({
          ...items,
          [key]: e.target.checked
        })}>
              Item {key.toUpperCase()}
            </CheckboxInput>)}
        </Box>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(B=p.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var D,_,K;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'A11y: Keyboard Interaction',
  render: function A11yKeyboardInteractionRender() {
    const [checked, setChecked] = useState(false);
    return <CheckboxInput name="a11y-checkbox" id="a11y-checkbox" checked={checked} onChange={e => setChecked(e.target.checked)}>
        Enable notifications
      </CheckboxInput>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /enable notifications/i
    });
    checkbox.focus();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(' ');
    expect(checkbox).toBeChecked();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(_=u.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};export{u as A11yKeyboardInteraction,h as AllStates,i as Default,m as ExPrimitiveOnly,p as ExSelectAllPattern,l as Uncontrolled,$ as __namedExportsOrder,Z as default};
