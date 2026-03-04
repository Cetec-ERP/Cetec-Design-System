import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BKyFwriW.js";import{f as L,w as H,e as x,u as F}from"./index-DPYJpPba.js";import{B as b}from"./Box-DKmSdfHE.js";import{C as U}from"./Card-BkI1tAaZ.js";import{C as p}from"./CheckboxInput-DpOEKrFw.js";import{C as n}from"./Checkbox-C_pvbuEu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Label-DxRmGjyW.js";import"./Icon-D93YU_Y7.js";const X={title:"Components/Checkbox",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},indeterminate:{control:"boolean"}},args:{name:"checkbox-story",checked:!1,onChange:L()}},i={render:function(){const[a,t]=u.useState(!1),c=d=>t(d.target.checked);return e.jsx(n,{name:"primitive-checkbox",id:"primitive-checkbox",checked:a,onChange:c})}},l={name:"All States",render:()=>e.jsxs(U,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[e.jsx(n,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{}}),e.jsx(n,{name:"checked",id:"checked",checked:!0,onChange:()=>{}}),e.jsx(n,{name:"indeterminate",id:"indeterminate",checked:!1,indeterminate:!0,onChange:()=>{}}),e.jsx(n,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{}}),e.jsx(n,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{}}),e.jsx(n,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{}})]}),parameters:{controls:{disable:!0}}},h={name:"Ex: With CheckboxInput Wrapper",render:function(){const[a,t]=u.useState(!1);return e.jsx(b,{maxW:"prose",display:"grid",gap:"12",children:e.jsx(p,{name:"terms",id:"terms",checked:a,onChange:c=>t(c.target.checked),children:"I agree to the terms and conditions"})})},parameters:{controls:{disable:!0}}},m={name:"Ex: Select All Pattern",render:function(){const[a,t]=u.useState({a:!1,b:!0,c:!1}),c=Object.values(a).filter(Boolean).length,d=Object.keys(a).length,P=c===d,w=c>0&&c<d;return e.jsxs(b,{display:"grid",gap:"10",children:[e.jsx(p,{name:"all",id:"all",checked:P,indeterminate:w,onChange:r=>{const s=r.target.checked;t({a:s,b:s,c:s})},children:"Select all"}),e.jsx(b,{pl:"24",display:"grid",gap:"10",children:Object.entries(a).map(([r,s])=>e.jsxs(p,{name:r,id:r,checked:s,onChange:D=>t({...a,[r]:D.target.checked}),children:["Item ",r.toUpperCase()]},r))})]})},parameters:{controls:{disable:!0}}},k={name:"A11y: Keyboard Interaction",render:function(){const[a,t]=u.useState(!1);return e.jsx(p,{name:"a11y-checkbox",id:"a11y-checkbox",checked:a,onChange:c=>t(c.target.checked),children:"Enable notifications"})},play:async({canvasElement:o})=>{const t=H(o).getByRole("checkbox",{name:/enable notifications/i});t.focus(),x(t).toHaveFocus(),await F.keyboard(" "),x(t).toBeChecked()},parameters:{controls:{disable:!0}}};var C,g,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const [checked, setChecked] = useState(false);
    const onChange: CheckboxChangeHandler = e => setChecked(e.target.checked);
    return <Checkbox name="primitive-checkbox" id="primitive-checkbox" checked={checked} onChange={onChange} />;
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,I,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <Card p="24" bg="bg.accent.tan.subtlest" display="grid" gap="12">
      <Checkbox name="unchecked" id="unchecked" checked={false} onChange={() => {}} />
      <Checkbox name="checked" id="checked" checked={true} onChange={() => {}} />
      <Checkbox name="indeterminate" id="indeterminate" checked={false} indeterminate onChange={() => {}} />
      <Checkbox name="error" id="error" checked={false} error onChange={() => {}} />
      <Checkbox name="disabled" id="disabled" checked={false} disabled onChange={() => {}} />
      <Checkbox name="disabled-checked" id="disabled-checked" checked={true} disabled onChange={() => {}} />
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var j,E,v;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Ex: With CheckboxInput Wrapper',
  render: function ExWithLabelWrapperRender() {
    const [checked, setChecked] = useState(false);
    return <Box maxW="prose" display="grid" gap="12">
        <CheckboxInput name="terms" id="terms" checked={checked} onChange={e => setChecked(e.target.checked)}>
          I agree to the terms and conditions
        </CheckboxInput>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(E=h.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var A,B,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var R,O,K;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(K=(O=k.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};const Y=["Default","AllStates","ExWithLabelWrapper","ExSelectAllPattern","A11yKeyboardInteraction"];export{k as A11yKeyboardInteraction,l as AllStates,i as Default,m as ExSelectAllPattern,h as ExWithLabelWrapper,Y as __namedExportsOrder,X as default};
