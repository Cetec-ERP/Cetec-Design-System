import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{f as J,w as Q,e as _,u as W}from"./index-DPYJpPba.js";import{m as O,a as F,s as K,f as X,c as Z,g as ee,b as M,B as p,d as L}from"./Box-7HecziK7.js";import{C as ne}from"./Card-CRDN5tgc.js";import{L as ae}from"./Label-4WIfKQ-f.js";import{I as R}from"./Icon-Bj4A0bIZ.js";import"./_commonjsHelpers-CqkleIqs.js";const v=F("radioInput",{},[]),U={},S=Object.keys(U),re=Object.assign(O(v.recipeFn),{__recipe__:!0,__name__:"radioInput",__getCompoundVariantCss__:v.__getCompoundVariantCss__,raw:n=>n,variantKeys:S,variantMap:U,merge(n){return X(this,n)},splitVariantProps(n){return K(n,S)},getVariantProps:v.getVariantProps}),Y={},te=[],oe=[["container","radio__container"],["input","radio__input"],["indicator","radio__indicator"],["radioBg","radio__radioBg"]],se=oe.map(([n,e])=>[n,F(e,Y,ee(te,n))]),de=O((n={})=>Object.fromEntries(se.map(([e,r])=>[e,r.recipeFn(n)]))),w=[],ie=n=>({...Y,...Z(n)}),ce=Object.assign(de,{__recipe__:!1,__name__:"radio",raw:n=>n,classNameMap:{},variantKeys:w,variantMap:{},splitVariantProps(n){return K(n,w)},getVariantProps:ie}),l=n=>{const{name:e,checked:r,onChange:t,id:s,error:i,disabled:I,container:u,input:k,indicator:b,radioBg:x,...C}=n,[m,z]=M(C),c=ce({container:u,input:k,indicator:b,radioBg:x}),G=r?"radio-checked":"radio";return a.jsxs(p,{className:L(c.container,m),...i&&{"data-error":!0},children:[a.jsx(p,{as:"input",type:"radio",className:c.input,name:e,id:s,checked:r,onChange:t,disabled:I,...i&&{"data-error":!0},...z}),a.jsx(R,{className:c.radioBg,name:"circle"}),a.jsx(R,{className:c.indicator,name:G}),a.jsx(R,{className:c.indicator,name:"radio-focus"})]})};l.__docgenInfo={description:`Radio is a controlled component.
You must pass \`checked\` and \`onChange\` props.

@example
const [checked, setChecked] = useState(false);
<Radio
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`,methods:[],displayName:"Radio",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const o=n=>{const{name:e,checked:r,onChange:t,id:s,children:i,error:I,disabled:u,...k}=n,[b,x]=M(k),C=d.useId(),m=s??C;return a.jsxs(ae,{className:L(re(),b),htmlFor:m,disabled:u,...x,children:[a.jsx(l,{name:e,checked:r,onChange:t,id:m,error:I,disabled:u}),i]})};o.__docgenInfo={description:"",methods:[],displayName:"RadioInput",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Ie={title:"Components/Radio",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `RadioInput` for product forms so each option includes a label and reliable hit area. Use `Radio` only for custom composition patterns."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"radio-story",checked:!1,onChange:J()}},h={render:function(){const e=d.useId(),[r,t]=d.useState("standard");return a.jsxs(p,{display:"grid",gap:"10",children:[a.jsx(o,{name:`${e}-shipping`,id:`${e}-standard`,checked:r==="standard",onChange:()=>t("standard"),children:"Standard shipping"}),a.jsx(o,{name:`${e}-shipping`,id:`${e}-express`,checked:r==="express",onChange:()=>t("express"),children:"Express shipping"})]})},parameters:{docs:{description:{story:"Recommended usage: `RadioInput` options in a controlled group with user-facing labels."}}}},g={name:"All States",render:()=>a.jsxs(ne,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[a.jsx(o,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),a.jsx(o,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),a.jsx(o,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),a.jsx(o,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),a.jsx(o,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State examples are shown as `RadioInput` options because that is the primary form integration path."}}}},y={name:"Ex: Primitive Radio Only",render:function(){const e=d.useId(),[r,t]=d.useState("one");return a.jsxs(p,{display:"grid",gap:"10",children:[a.jsx(l,{name:`${e}-primitive`,id:`${e}-one`,checked:r==="one",onChange:()=>t("one")}),a.jsx(l,{name:`${e}-primitive`,id:`${e}-two`,checked:r==="two",onChange:()=>t("two")})]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced wrappers. Prefer `RadioInput` in application flows."}}}},f={name:"A11y: Arrow Key Navigation",render:function(){const e=d.useId(),[r,t]=d.useState("first"),s=i=>()=>t(i);return a.jsxs(p,{display:"grid",gap:"10",children:[a.jsx(o,{name:`${e}-a11y-group`,id:`${e}-first`,checked:r==="first",onChange:s("first"),children:"First option"}),a.jsx(o,{name:`${e}-a11y-group`,id:`${e}-second`,checked:r==="second",onChange:s("second"),children:"Second option"}),a.jsx(o,{name:`${e}-a11y-group`,id:`${e}-third`,checked:r==="third",onChange:s("third"),children:"Third option"})]})},play:async({canvasElement:n})=>{const e=Q(n),r=e.getByRole("radio",{name:/first option/i});r.focus(),_(r).toHaveFocus(),await W.keyboard("{ArrowDown}");const t=e.getByRole("radio",{name:/second option/i});_(t).toBeChecked()},parameters:{controls:{disable:!0}}};var j,$,E;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=($=h.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var N,T,P;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(T=g.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var B,A,q;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(A=y.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var V,D,H;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(D=f.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const ke=["Default","AllStates","ExPrimitiveOnly","A11yKeyboardNavigation"];export{f as A11yKeyboardNavigation,g as AllStates,h as Default,y as ExPrimitiveOnly,ke as __namedExportsOrder,Ie as default};
