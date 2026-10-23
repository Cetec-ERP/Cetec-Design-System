import{j as n,r as i,B as y}from"./iframe-CFHeyDfP.js";import{C as G}from"./Card-CA_E1cNo.js";import{C as a}from"./CheckboxInput-CHhpS4Fj.js";import{L as J}from"./Label-B9D_a5Et.js";import{C as g}from"./Checkbox-BWfVF6hn.js";import"./preload-helper-Bx88jSaX.js";import"./FieldContext-DZ6s47uw.js";const{expect:C,fn:N,userEvent:Q,within:Y}=__STORYBOOK_MODULE_TEST__,te={title:"Components/Checkbox",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `CheckboxInput` for app forms so labels, spacing, and click targets are wired by default. Use `Checkbox` only when building a custom composed wrapper. Both controlled and uncontrolled usage are supported."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},indeterminate:{control:"boolean"}},args:{name:"checkbox-story",checked:!1,onChange:N()}},l={render:function(){const[c,e]=i.useState(!1);return n.jsx(a,{name:"updates",id:"updates",checked:c,onChange:t=>e(t.target.checked),children:"Send me release updates"})},parameters:{docs:{description:{story:"Recommended default for product UI: `CheckboxInput` with visible label copy."}}}},h={name:"Uncontrolled",render:()=>n.jsx(a,{name:"uncontrolled",id:"uncontrolled",defaultChecked:!0,children:"Remember this choice"}),parameters:{controls:{disable:!0}}},m={name:"All States",render:()=>n.jsxs(G,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[n.jsx(a,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),n.jsx(a,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),n.jsx(a,{name:"indeterminate",id:"indeterminate",checked:!1,indeterminate:!0,onChange:()=>{},children:"Indeterminate"}),n.jsx(a,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),n.jsx(a,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),n.jsx(a,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State coverage shown with `CheckboxInput`, which is the primary integration surface in forms."}}}},k={name:"Ex: Primitive Checkbox Only",render:function(){const[c,e]=i.useState(!1),t=x=>e(x.target.checked),r="primitive-checkbox";return n.jsxs(J,{htmlFor:r,display:"inline-flex",alignItems:"center",gap:"6",children:[n.jsx(g,{name:"primitive-checkbox",id:r,checked:c,onChange:t}),"Manual composition using Checkbox primitive"]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced composition. Prefer `CheckboxInput` in application code."}}}},p={name:"Ex: Select All Pattern",render:function(){const[c,e]=i.useState({a:!1,b:!0,c:!1}),t=Object.values(c).filter(Boolean).length,r=Object.keys(c).length,x=t===r,q=t>0&&t<r;return n.jsxs(y,{display:"grid",gap:"10",children:[n.jsx(a,{name:"all",id:"all",checked:x,indeterminate:q,onChange:s=>{const d=s.target.checked;e({a:d,b:d,c:d})},children:"Select all"}),n.jsx(y,{pl:"24",display:"grid",gap:"10",children:Object.entries(c).map(([s,d])=>n.jsxs(a,{name:s,id:s,checked:d,onChange:z=>e({...c,[s]:z.target.checked}),children:["Item ",s.toUpperCase()]},s))})]})},parameters:{controls:{disable:!0}}},u={name:"A11y: Keyboard Interaction",render:function(){const[c,e]=i.useState(!1);return n.jsx(a,{name:"a11y-checkbox",id:"a11y-checkbox",checked:c,onChange:t=>e(t.target.checked),children:"Enable notifications"})},play:async({canvasElement:o})=>{const e=Y(o).getByRole("checkbox",{name:/enable notifications/i});e.focus(),C(e).toHaveFocus(),await Q.keyboard(" "),C(e).toBeChecked()},parameters:{controls:{disable:!0}}},b={name:"A11y: Box Click Target",render:function(){const[c,e]=i.useState(!1);return n.jsx(g,{name:"box-click-target","aria-label":"Box click target",checked:c,onChange:t=>e(t.target.checked)})},play:async({canvasElement:o})=>{const e=Y(o).getByRole("checkbox",{name:/box click target/i}),t=e.getBoundingClientRect(),r=document.elementFromPoint(t.left+t.width/2,t.top+t.height/2);C(r).toBe(e)},parameters:{controls:{disable:!0}}},ce=["Default","Uncontrolled","AllStates","ExPrimitiveOnly","ExSelectAllPattern","A11yKeyboardInteraction","A11yBoxClickTarget"];var f,I,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(I=l.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var S,B,E;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Uncontrolled',
  render: () => <CheckboxInput name="uncontrolled" id="uncontrolled" defaultChecked>
      Remember this choice
    </CheckboxInput>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(B=h.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var j,A,R;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var w,P,O;k.parameters={...k.parameters,docs:{...(w=k.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(P=k.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var U,T,D;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var _,K,F;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(K=u.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var L,H,M;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'A11y: Box Click Target',
  render: function A11yBoxClickTargetRender() {
    const [checked, setChecked] = useState(false);
    return <Checkbox name="box-click-target" aria-label="Box click target" checked={checked} onChange={e => setChecked(e.target.checked)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /box click target/i
    });
    const box = checkbox.getBoundingClientRect();

    // The icons drawn over the input must let clicks through to it.
    const target = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
    expect(target).toBe(checkbox);
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(H=b.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};export{b as A11yBoxClickTarget,u as A11yKeyboardInteraction,m as AllStates,l as Default,k as ExPrimitiveOnly,p as ExSelectAllPattern,h as Uncontrolled,ce as __namedExportsOrder,te as default};
