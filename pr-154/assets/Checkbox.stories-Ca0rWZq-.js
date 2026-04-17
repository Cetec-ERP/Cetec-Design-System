import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-BKyFwriW.js";import{f as F,w as L,e as b,u as H}from"./index-DPYJpPba.js";import{B as x}from"./Box-CpGDZWWa.js";import{C as M}from"./Card-DTNlVJDD.js";import{C as n}from"./CheckboxInput-KWEc1Mat.js";import{L as _}from"./Label-BQdsfQr5.js";import{C as D}from"./Checkbox-BJSXYQS3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-BgHyrg9m.js";import"./IconConfig-D8Vw8IRf.js";const Z={title:"Components/Checkbox",component:D,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `CheckboxInput` for app forms so labels, spacing, and click targets are wired by default. Use `Checkbox` only when building a custom composed wrapper."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},indeterminate:{control:"boolean"}},args:{name:"checkbox-story",checked:!1,onChange:F()}},i={render:function(){const[c,t]=k.useState(!1);return e.jsx(n,{name:"updates",id:"updates",checked:c,onChange:a=>t(a.target.checked),children:"Send me release updates"})},parameters:{docs:{description:{story:"Recommended default for product UI: `CheckboxInput` with visible label copy."}}}},l={name:"All States",render:()=>e.jsxs(M,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[e.jsx(n,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),e.jsx(n,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),e.jsx(n,{name:"indeterminate",id:"indeterminate",checked:!1,indeterminate:!0,onChange:()=>{},children:"Indeterminate"}),e.jsx(n,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),e.jsx(n,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),e.jsx(n,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage shown with `CheckboxInput`, which is the primary integration surface in forms."}}}},h={name:"Ex: Primitive Checkbox Only",render:function(){const[c,t]=k.useState(!1),a=u=>t(u.target.checked),s="primitive-checkbox";return e.jsxs(_,{htmlFor:s,display:"inline-flex",alignItems:"center",gap:"6",children:[e.jsx(D,{name:"primitive-checkbox",id:s,checked:c,onChange:a}),"Manual composition using Checkbox primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `CheckboxInput` in application code."}}}},m={name:"Ex: Select All Pattern",render:function(){const[c,t]=k.useState({a:!1,b:!0,c:!1}),a=Object.values(c).filter(Boolean).length,s=Object.keys(c).length,u=a===s,U=a>0&&a<s;return e.jsxs(x,{display:"grid",gap:"10",children:[e.jsx(n,{name:"all",id:"all",checked:u,indeterminate:U,onChange:o=>{const d=o.target.checked;t({a:d,b:d,c:d})},children:"Select all"}),e.jsx(x,{pl:"24",display:"grid",gap:"10",children:Object.entries(c).map(([o,d])=>e.jsxs(n,{name:o,id:o,checked:d,onChange:K=>t({...c,[o]:K.target.checked}),children:["Item ",o.toUpperCase()]},o))})]})},parameters:{controls:{disable:!0}}},p={name:"A11y: Keyboard Interaction",render:function(){const[c,t]=k.useState(!1);return e.jsx(n,{name:"a11y-checkbox",id:"a11y-checkbox",checked:c,onChange:a=>t(a.target.checked),children:"Enable notifications"})},play:async({canvasElement:r})=>{const t=L(r).getByRole("checkbox",{name:/enable notifications/i});t.focus(),b(t).toHaveFocus(),await H.keyboard(" "),b(t).toBeChecked()},parameters:{controls:{disable:!0}}};var C,g,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,I,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(I=l.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var S,j,E;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(j=h.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var w,A,P;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var O,R,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const $=["Default","AllStates","ExPrimitiveOnly","ExSelectAllPattern","A11yKeyboardInteraction"];export{p as A11yKeyboardInteraction,l as AllStates,i as Default,h as ExPrimitiveOnly,m as ExSelectAllPattern,$ as __namedExportsOrder,Z as default};
