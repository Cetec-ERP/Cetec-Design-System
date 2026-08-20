import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BKyFwriW.js";import{f as pe,w as le,e as q,u as ue}from"./index-DPYJpPba.js";import{m as Z,a as ee,s as ne,f as me,c as he,g as ge,b as ae,B as p,d as re}from"./Box-hQsv43T0.js";import{C as fe}from"./Card-froQLtvM.js";import{u as te}from"./FieldContext-D6URyQos.js";import{L as ve}from"./Label-E-JLjBSC.js";import{I as f}from"./Icon-CeNev6VN.js";import"./_commonjsHelpers-CqkleIqs.js";const B=ee("radioInput",{},[]),oe={},A=Object.keys(oe),ye=Object.assign(Z(B.recipeFn),{__recipe__:!0,__name__:"radioInput",__getCompoundVariantCss__:B.__getCompoundVariantCss__,raw:a=>a,variantKeys:A,variantMap:oe,merge(a){return me(this,a)},splitVariantProps(a){return ne(a,A)},getVariantProps:B.getVariantProps}),ie={},be=[],Ie=[["container","radio__container"],["input","radio__input"],["indicator","radio__indicator"],["radioBg","radio__radioBg"]],ke=Ie.map(([a,e])=>[a,ee(e,ie,ge(be,a))]),xe=Z((a={})=>Object.fromEntries(ke.map(([e,r])=>[e,r.recipeFn(a)]))),V=[],Re=a=>({...ie,...he(a)}),Ce=Object.assign(xe,{__recipe__:!1,__name__:"radio",raw:a=>a,classNameMap:{},variantKeys:V,variantMap:{},splitVariantProps(a){return ne(a,V)},getVariantProps:Re}),h=a=>{const e=te(),{name:r,checked:t,defaultChecked:c,onChange:l,id:u,error:x,invalid:R,disabled:C,container:w,input:S,indicator:_,radioBg:o,...$}=a,j=C??(e==null?void 0:e.disabled),m=x??(e==null?void 0:e.error),g=R??(e==null?void 0:e.invalid),[E,P]=ae($),d=Ce({container:w,input:S,indicator:_,radioBg:o}),T=t!==void 0;return n.jsxs(p,{className:re(d.container,E),...m&&{"data-error":!0},...g&&{"data-invalid":!0},children:[n.jsx(p,{as:"input",type:"radio",className:d.input,name:r,id:u,...T?{checked:t}:{defaultChecked:c??!1},onChange:l,disabled:j,...m&&{"data-error":!0},...g&&{"data-invalid":!0,"aria-invalid":!0},...P}),n.jsx(f,{className:d.radioBg,name:"circle","aria-hidden":!0}),n.jsx(f,{className:d.indicator,name:"radio","aria-hidden":!0}),n.jsx(f,{className:d.indicator,name:"radio-checked","aria-hidden":!0}),n.jsx(f,{className:d.indicator,name:"radio-focus","aria-hidden":!0})]})};h.__docgenInfo={description:'A native radio control without a visible label.\n\nPrefer {@link RadioInput} inside {@link RadioGroup} for a labelled,\nkeyboard-navigable choice group. For standalone use, group radios by `name`\nand associate each with a label using `id`. Use `checked` with `onChange` for\ncontrolled state, or `defaultChecked` only for uncontrolled state.\n\n@example\n```tsx\n<Radio name="shipping" defaultChecked />\n```\n\n@example\n```tsx\nconst [checked, setChecked] = useState(false);\n<Radio name="shipping" checked={checked} onChange={(event) => setChecked(event.target.checked)} />\n```',methods:[],displayName:"Radio",props:{name:{required:!1,tsType:{name:"string"},description:"Native radio group name. Radios with the same name are mutually exclusive."},checked:{required:!1,tsType:{name:"boolean"},description:"Controlled selected state. Pair with `onChange`; do not combine with `defaultChecked`."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"@default false"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Runs for the native input change event when this radio becomes selected."},id:{required:!1,tsType:{name:"string"},description:"Native input ID used by an external label."},error:{required:!1,tsType:{name:"boolean"},description:"Applies error styling, overriding field context."},invalid:{required:!1,tsType:{name:"boolean"},description:"Marks the native input invalid with `aria-invalid`, overriding field context."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables interaction, overriding field context."}}};const we=s.createContext(null),Se=()=>s.useContext(we),i=a=>{const e=te(),{name:r,value:t,checked:c,defaultChecked:l,onChange:u,id:x,children:R,error:C,invalid:w,disabled:S,..._}=a,o=Se(),$=C??(e==null?void 0:e.error),j=w??(e==null?void 0:e.invalid),m=S??(o==null?void 0:o.disabled)??(e==null?void 0:e.disabled),[g,E]=ae(_),P=s.useId(),d=x??P,T=(o==null?void 0:o.name)??r,N=!!(o&&t!==void 0),se=N&&o?o.value===t:c,de=ce=>{N&&t!==void 0&&o&&o.setValue(t),u==null||u(ce)};return n.jsxs(ve,{className:re(ye(),g),htmlFor:d,disabled:m,...E,children:[n.jsx(h,{name:T,checked:se,defaultChecked:N?void 0:l,onChange:de,id:d,error:$,invalid:j,disabled:m}),R]})};i.__docgenInfo={description:'A labelled radio option.\n\nPlace it in {@link RadioGroup} with a unique `value` to receive shared\nselection state, its name, and group-disabled state. Outside a group it acts\nlike a labelled {@link Radio}; supply `name` to form a native radio group.\nExplicit `disabled` wins over group and field context.\n\n@example\n```tsx\n<RadioGroup name="plan" defaultValue="standard" label="Plan">\n  <RadioInput value="standard">Standard</RadioInput>\n</RadioGroup>\n```',methods:[],displayName:"RadioInput",props:{name:{required:!1,tsType:{name:"string"},description:"Native group name when the input is not inside a `RadioGroup`; group context takes precedence."},value:{required:!1,tsType:{name:"string"},description:"Value reported to the nearest `RadioGroup`; required for the input to participate in that group."},checked:{required:!1,tsType:{name:"boolean"},description:"Controlled state for standalone use. Group context takes precedence when `value` is supplied."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"@default false"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:"Runs after group selection is requested and for standalone native changes. The group `onChange` receives the selected value."},id:{required:!1,tsType:{name:"string"},description:"Input ID. A stable ID is generated when omitted and associated with the wrapper label."},error:{required:!1,tsType:{name:"boolean"},description:"Applies error styling, overriding field context."},invalid:{required:!1,tsType:{name:"boolean"},description:"Marks the radio invalid, overriding field context."},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Visible label content."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the radio, overriding group and field context."}}};const Ae={title:"Components/Radio",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `RadioInput` for product forms so each option includes a label and reliable hit area. Use `Radio` only for custom composition patterns. Both standalone and grouped usage are supported."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"radio-story",checked:!1,onChange:pe()}},v={render:function(){const e=s.useId(),[r,t]=s.useState("standard");return n.jsxs(p,{display:"grid",gap:"10",children:[n.jsx(i,{name:`${e}-shipping`,id:`${e}-standard`,checked:r==="standard",onChange:()=>t("standard"),children:"Standard shipping"}),n.jsx(i,{name:`${e}-shipping`,id:`${e}-express`,checked:r==="express",onChange:()=>t("express"),children:"Express shipping"})]})},parameters:{docs:{description:{story:"Recommended usage: `RadioInput` options in a controlled group with user-facing labels."}}}},y={name:"Uncontrolled",render:function(){const e=s.useId();return n.jsxs(p,{display:"grid",gap:"10",children:[n.jsx(i,{name:`${e}-shipping`,id:`${e}-standard`,defaultChecked:!0,children:"Standard shipping"}),n.jsx(i,{name:`${e}-shipping`,id:`${e}-express`,children:"Express shipping"})]})},parameters:{controls:{disable:!0}}},b={name:"All States",render:()=>n.jsxs(fe,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[n.jsx(i,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),n.jsx(i,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),n.jsx(i,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),n.jsx(i,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),n.jsx(i,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State examples are shown as `RadioInput` options because that is the primary form integration path."}}}},I={name:"Ex: Primitive Radio Only",render:function(){const e=s.useId(),[r,t]=s.useState("one");return n.jsxs(p,{display:"grid",gap:"10",children:[n.jsx(h,{name:`${e}-primitive`,id:`${e}-one`,checked:r==="one",onChange:()=>t("one")}),n.jsx(h,{name:`${e}-primitive`,id:`${e}-two`,checked:r==="two",onChange:()=>t("two")})]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced wrappers. Prefer `RadioInput` in application flows."}}}},k={name:"A11y: Arrow Key Navigation",render:function(){const e=s.useId(),[r,t]=s.useState("first"),c=l=>()=>t(l);return n.jsxs(p,{display:"grid",gap:"10",children:[n.jsx(i,{name:`${e}-a11y-group`,id:`${e}-first`,checked:r==="first",onChange:c("first"),children:"First option"}),n.jsx(i,{name:`${e}-a11y-group`,id:`${e}-second`,checked:r==="second",onChange:c("second"),children:"Second option"}),n.jsx(i,{name:`${e}-a11y-group`,id:`${e}-third`,checked:r==="third",onChange:c("third"),children:"Third option"})]})},play:async({canvasElement:a})=>{const e=le(a),r=e.getByRole("radio",{name:/first option/i});r.focus(),q(r).toHaveFocus(),await ue.keyboard("{ArrowDown}");const t=e.getByRole("radio",{name:/second option/i});q(t).toBeChecked()},parameters:{controls:{disable:!0}}};var D,F,O;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const groupId = useId();
    const [selected, setSelected] = useState('standard');
    return <Box display="grid" gap="10">
        <RadioInput name={\`\${groupId}-shipping\`} id={\`\${groupId}-standard\`} checked={selected === 'standard'} onChange={() => setSelected('standard')}>
          Standard shipping
        </RadioInput>
        <RadioInput name={\`\${groupId}-shipping\`} id={\`\${groupId}-express\`} checked={selected === 'express'} onChange={() => setSelected('express')}>
          Express shipping
        </RadioInput>
      </Box>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Recommended usage: \`RadioInput\` options in a controlled group with user-facing labels.'
      }
    }
  }
}`,...(O=(F=v.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var H,U,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Uncontrolled',
  render: function UncontrolledRender() {
    const groupId = useId();
    return <Box display="grid" gap="10">
        <RadioInput name={\`\${groupId}-shipping\`} id={\`\${groupId}-standard\`} defaultChecked>
          Standard shipping
        </RadioInput>
        <RadioInput name={\`\${groupId}-shipping\`} id={\`\${groupId}-express\`}>
          Express shipping
        </RadioInput>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(U=y.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var M,G,L;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <Card p="24" bg="bg.accent.tan.subtlest" display="grid" gap="12">
      <RadioInput name="unchecked" id="unchecked" checked={false} onChange={() => {}}>
        Unchecked
      </RadioInput>
      <RadioInput name="checked" id="checked" checked={true} onChange={() => {}}>
        Checked
      </RadioInput>
      <RadioInput name="error" id="error" checked={false} error onChange={() => {}}>
        Error
      </RadioInput>
      <RadioInput name="disabled" id="disabled" checked={false} disabled onChange={() => {}}>
        Disabled
      </RadioInput>
      <RadioInput name="disabled-checked" id="disabled-checked" checked={true} disabled onChange={() => {}}>
        Disabled checked
      </RadioInput>
    </Card>,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'State examples are shown as \`RadioInput\` options because that is the primary form integration path.'
      }
    }
  }
}`,...(L=(G=b.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var z,J,Q;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Ex: Primitive Radio Only',
  render: function ExPrimitiveOnlyRender() {
    const groupId = useId();
    const [selected, setSelected] = useState('one');
    return <Box display="grid" gap="10">
        <Radio name={\`\${groupId}-primitive\`} id={\`\${groupId}-one\`} checked={selected === 'one'} onChange={() => setSelected('one')} />
        <Radio name={\`\${groupId}-primitive\`} id={\`\${groupId}-two\`} checked={selected === 'two'} onChange={() => setSelected('two')} />
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Primitive-only example for advanced wrappers. Prefer \`RadioInput\` in application flows.'
      }
    }
  }
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Y;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'A11y: Arrow Key Navigation',
  render: function A11yKeyboardNavigationRender() {
    const groupId = useId();
    const [selected, setSelected] = useState('first');
    const makeChangeHandler = (value: 'first' | 'second' | 'third') => {
      return () => setSelected(value);
    };
    return <Box display="grid" gap="10">
        <RadioInput name={\`\${groupId}-a11y-group\`} id={\`\${groupId}-first\`} checked={selected === 'first'} onChange={makeChangeHandler('first')}>
          First option
        </RadioInput>
        <RadioInput name={\`\${groupId}-a11y-group\`} id={\`\${groupId}-second\`} checked={selected === 'second'} onChange={makeChangeHandler('second')}>
          Second option
        </RadioInput>
        <RadioInput name={\`\${groupId}-a11y-group\`} id={\`\${groupId}-third\`} checked={selected === 'third'} onChange={makeChangeHandler('third')}>
          Third option
        </RadioInput>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole('radio', {
      name: /first option/i
    });
    first.focus();
    expect(first).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    const second = canvas.getByRole('radio', {
      name: /second option/i
    });
    expect(second).toBeChecked();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ve=["Default","Uncontrolled","AllStates","ExPrimitiveOnly","A11yKeyboardNavigation"];export{k as A11yKeyboardNavigation,b as AllStates,v as Default,I as ExPrimitiveOnly,y as Uncontrolled,Ve as __namedExportsOrder,Ae as default};
