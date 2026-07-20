import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-BKyFwriW.js";import{f as _,w as T,e as x,u as q}from"./index-DPYJpPba.js";import{B as C}from"./Box-C4uJrM56.js";import{C as z}from"./Card-rEDbr8LR.js";import{C as n}from"./CheckboxInput-DLXWfkmA.js";import{L as G}from"./Label-Md2wWTZa.js";import{C as L}from"./Checkbox-D03hsQ_a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Icon-DVkTIUY6.js";import"./IconConfig-CwDT3tlP.js";const ne={title:"Components/Checkbox",component:L,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `CheckboxInput` for app forms so labels, spacing, and click targets are wired by default. Use `Checkbox` only when building a custom composed wrapper. Both controlled and uncontrolled usage are supported."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},indeterminate:{control:"boolean"}},args:{name:"checkbox-story",checked:!1,onChange:_()}},i={render:function(){const[c,t]=k.useState(!1);return e.jsx(n,{name:"updates",id:"updates",checked:c,onChange:a=>t(a.target.checked),children:"Send me release updates"})},parameters:{docs:{description:{story:"Recommended default for product UI: `CheckboxInput` with visible label copy."}}}},l={name:"Uncontrolled",render:()=>e.jsx(n,{name:"uncontrolled",id:"uncontrolled",defaultChecked:!0,children:"Remember this choice"}),parameters:{controls:{disable:!0}}},h={name:"All States",render:()=>e.jsxs(z,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[e.jsx(n,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),e.jsx(n,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),e.jsx(n,{name:"indeterminate",id:"indeterminate",checked:!1,indeterminate:!0,onChange:()=>{},children:"Indeterminate"}),e.jsx(n,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),e.jsx(n,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),e.jsx(n,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage shown with `CheckboxInput`, which is the primary integration surface in forms."}}}},m={name:"Ex: Primitive Checkbox Only",render:function(){const[c,t]=k.useState(!1),a=b=>t(b.target.checked),s="primitive-checkbox";return e.jsxs(G,{htmlFor:s,display:"inline-flex",alignItems:"center",gap:"6",children:[e.jsx(L,{name:"primitive-checkbox",id:s,checked:c,onChange:a}),"Manual composition using Checkbox primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `CheckboxInput` in application code."}}}},p={name:"Ex: Select All Pattern",render:function(){const[c,t]=k.useState({a:!1,b:!0,c:!1}),a=Object.values(c).filter(Boolean).length,s=Object.keys(c).length,b=a===s,H=a>0&&a<s;return e.jsxs(C,{display:"grid",gap:"10",children:[e.jsx(n,{name:"all",id:"all",checked:b,indeterminate:H,onChange:r=>{const d=r.target.checked;t({a:d,b:d,c:d})},children:"Select all"}),e.jsx(C,{pl:"24",display:"grid",gap:"10",children:Object.entries(c).map(([r,d])=>e.jsxs(n,{name:r,id:r,checked:d,onChange:M=>t({...c,[r]:M.target.checked}),children:["Item ",r.toUpperCase()]},r))})]})},parameters:{controls:{disable:!0}}},u={name:"A11y: Keyboard Interaction",render:function(){const[c,t]=k.useState(!1);return e.jsx(n,{name:"a11y-checkbox",id:"a11y-checkbox",checked:c,onChange:a=>t(a.target.checked),children:"Enable notifications"})},play:async({canvasElement:o})=>{const t=T(o).getByRole("checkbox",{name:/enable notifications/i});t.focus(),x(t).toHaveFocus(),await q.keyboard(" "),x(t).toBeChecked()},parameters:{controls:{disable:!0}}};var g,f,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,E,w;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(E=h.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var A,P,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var B,O,U;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var D,K,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(K=u.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};const ae=["Default","Uncontrolled","AllStates","ExPrimitiveOnly","ExSelectAllPattern","A11yKeyboardInteraction"];export{u as A11yKeyboardInteraction,h as AllStates,i as Default,m as ExPrimitiveOnly,p as ExSelectAllPattern,l as Uncontrolled,ae as __namedExportsOrder,ne as default};
