import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{f as ne,w as ae,e as E,u as re}from"./index-DPYJpPba.js";import{m as U,c as Y,s as z,a as oe,e as te,g as se,b as G,B as p,d as J}from"./Box-DON8OdPK.js";import{C as ie}from"./Card-Djc-wNfS.js";import{u as Q}from"./FieldContext-D6URyQos.js";import{L as de}from"./Label-DWL0qqiH.js";import{I as j}from"./Icon-BjyDhYXA.js";import"./IconConfig-CigF0iOf.js";import"./_commonjsHelpers-CqkleIqs.js";const $=Y("radioInput",{},[]),W={},P=Object.keys(W),ce=Object.assign(U($.recipeFn),{__recipe__:!0,__name__:"radioInput",__getCompoundVariantCss__:$.__getCompoundVariantCss__,raw:n=>n,variantKeys:P,variantMap:W,merge(n){return oe(this,n)},splitVariantProps(n){return z(n,P)},getVariantProps:$.getVariantProps}),X={},pe=[],le=[["container","radio__container"],["input","radio__input"],["indicator","radio__indicator"],["radioBg","radio__radioBg"]],ue=le.map(([n,e])=>[n,Y(e,X,se(pe,n))]),me=U((n={})=>Object.fromEntries(ue.map(([e,r])=>[e,r.recipeFn(n)]))),T=[],he=n=>({...X,...te(n)}),ge=Object.assign(me,{__recipe__:!1,__name__:"radio",raw:n=>n,classNameMap:{},variantKeys:T,variantMap:{},splitVariantProps(n){return z(n,T)},getVariantProps:he}),l=n=>{const e=Q(),{name:r,checked:o,onChange:s,id:d,error:k,invalid:v,disabled:R,container:x,input:C,indicator:_,radioBg:S,...u}=n,w=R??(e==null?void 0:e.disabled),m=k??(e==null?void 0:e.error),h=v??(e==null?void 0:e.invalid),[g,Z]=G(u),c=ge({container:x,input:C,indicator:_,radioBg:S}),ee=o?"radio-checked":"radio";return a.jsxs(p,{className:J(c.container,g),...m&&{"data-error":!0},...h&&{"data-invalid":!0},children:[a.jsx(p,{as:"input",type:"radio",className:c.input,name:r,id:d,checked:o,onChange:s,disabled:w,...m&&{"data-error":!0},...h&&{"data-invalid":!0,"aria-invalid":!0},...Z}),a.jsx(j,{className:c.radioBg,name:"circle"}),a.jsx(j,{className:c.indicator,name:ee}),a.jsx(j,{className:c.indicator,name:"radio-focus"})]})};l.__docgenInfo={description:`Radio is a controlled component.
You must pass \`checked\` and \`onChange\` props.

@example
const [checked, setChecked] = useState(false);
<Radio
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`,methods:[],displayName:"Radio",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const t=n=>{const e=Q(),{name:r,checked:o,onChange:s,id:d,children:k,error:v,invalid:R,disabled:x,...C}=n,_=v??(e==null?void 0:e.error),S=R??(e==null?void 0:e.invalid),u=x??(e==null?void 0:e.disabled),[w,m]=G(C),h=i.useId(),g=d??h;return a.jsxs(de,{className:J(ce(),w),htmlFor:g,disabled:u,...m,children:[a.jsx(l,{name:r,checked:o,onChange:s,id:g,error:_,invalid:S,disabled:u}),k]})};t.__docgenInfo={description:"",methods:[],displayName:"RadioInput",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Se={title:"Components/Radio",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `RadioInput` for product forms so each option includes a label and reliable hit area. Use `Radio` only for custom composition patterns."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"radio-story",checked:!1,onChange:ne()}},y={render:function(){const e=i.useId(),[r,o]=i.useState("standard");return a.jsxs(p,{display:"grid",gap:"10",children:[a.jsx(t,{name:`${e}-shipping`,id:`${e}-standard`,checked:r==="standard",onChange:()=>o("standard"),children:"Standard shipping"}),a.jsx(t,{name:`${e}-shipping`,id:`${e}-express`,checked:r==="express",onChange:()=>o("express"),children:"Express shipping"})]})},parameters:{docs:{description:{story:"Recommended usage: `RadioInput` options in a controlled group with user-facing labels."}}}},I={name:"All States",render:()=>a.jsxs(ie,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[a.jsx(t,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),a.jsx(t,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),a.jsx(t,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),a.jsx(t,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),a.jsx(t,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State examples are shown as `RadioInput` options because that is the primary form integration path."}}}},b={name:"Ex: Primitive Radio Only",render:function(){const e=i.useId(),[r,o]=i.useState("one");return a.jsxs(p,{display:"grid",gap:"10",children:[a.jsx(l,{name:`${e}-primitive`,id:`${e}-one`,checked:r==="one",onChange:()=>o("one")}),a.jsx(l,{name:`${e}-primitive`,id:`${e}-two`,checked:r==="two",onChange:()=>o("two")})]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced wrappers. Prefer `RadioInput` in application flows."}}}},f={name:"A11y: Arrow Key Navigation",render:function(){const e=i.useId(),[r,o]=i.useState("first"),s=d=>()=>o(d);return a.jsxs(p,{display:"grid",gap:"10",children:[a.jsx(t,{name:`${e}-a11y-group`,id:`${e}-first`,checked:r==="first",onChange:s("first"),children:"First option"}),a.jsx(t,{name:`${e}-a11y-group`,id:`${e}-second`,checked:r==="second",onChange:s("second"),children:"Second option"}),a.jsx(t,{name:`${e}-a11y-group`,id:`${e}-third`,checked:r==="third",onChange:s("third"),children:"Third option"})]})},play:async({canvasElement:n})=>{const e=ae(n),r=e.getByRole("radio",{name:/first option/i});r.focus(),E(r).toHaveFocus(),await re.keyboard("{ArrowDown}");const o=e.getByRole("radio",{name:/second option/i});E(o).toBeChecked()},parameters:{controls:{disable:!0}}};var N,B,q;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(B=y.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var A,V,D;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(V=I.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var F,H,O;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(H=b.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var K,M,L;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(L=(M=f.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const we=["Default","AllStates","ExPrimitiveOnly","A11yKeyboardNavigation"];export{f as A11yKeyboardNavigation,I as AllStates,y as Default,b as ExPrimitiveOnly,we as __namedExportsOrder,Se as default};
