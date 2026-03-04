import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{f as J,w as Q,e as _,u as U}from"./index-DPYJpPba.js";import{m as F,a as K,s as M,f as X,c as Z,g as ee,b as P,B as l,d as D}from"./Box-DKmSdfHE.js";import{C as ne}from"./Card-BkI1tAaZ.js";import{L as ae}from"./Label-DxRmGjyW.js";import{I as R}from"./Icon-D93YU_Y7.js";import"./_commonjsHelpers-CqkleIqs.js";const v=K("radioInput",{},[]),O={},S=Object.keys(O),re=Object.assign(F(v.recipeFn),{__recipe__:!0,__name__:"radioInput",__getCompoundVariantCss__:v.__getCompoundVariantCss__,raw:n=>n,variantKeys:S,variantMap:O,merge(n){return X(this,n)},splitVariantProps(n){return M(n,S)},getVariantProps:v.getVariantProps}),Y={},te=[],se=[["container","radio__container"],["input","radio__input"],["indicator","radio__indicator"],["radioBg","radio__radioBg"]],oe=se.map(([n,e])=>[n,K(e,Y,ee(te,n))]),de=F((n={})=>Object.fromEntries(oe.map(([e,r])=>[e,r.recipeFn(n)]))),j=[],ie=n=>({...Y,...Z(n)}),ce=Object.assign(de,{__recipe__:!1,__name__:"radio",raw:n=>n,classNameMap:{},variantKeys:j,variantMap:{},splitVariantProps(n){return M(n,j)},getVariantProps:ie}),o=n=>{const{name:e,checked:r,onChange:t,id:s,error:d,disabled:C,container:u,input:k,indicator:x,radioBg:I,...b}=n,[m,z]=P(b),p=ce({container:u,input:k,indicator:x,radioBg:I}),G=r?"radio-checked":"radio";return a.jsxs(l,{className:D(p.container,m),...d&&{"data-error":!0},children:[a.jsx(l,{as:"input",type:"radio",className:p.input,name:e,id:s,checked:r,onChange:t,disabled:C,...d&&{"data-error":!0},...z}),a.jsx(R,{className:p.radioBg,name:"circle"}),a.jsx(R,{className:p.indicator,name:G}),a.jsx(R,{className:p.indicator,name:"radio-focus"})]})};o.__docgenInfo={description:`Radio is a controlled component.
You must pass \`checked\` and \`onChange\` props.

@example
const [checked, setChecked] = useState(false);
<Radio
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`,methods:[],displayName:"Radio",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const c=n=>{const{name:e,checked:r,onChange:t,id:s,children:d,error:C,disabled:u,...k}=n,[x,I]=P(k),b=i.useId(),m=s??b;return a.jsxs(ae,{className:D(re(),x),htmlFor:m,disabled:u,...I,children:[a.jsx(o,{name:e,checked:r,onChange:t,id:m,error:C,disabled:u}),d]})};c.__docgenInfo={description:"",methods:[],displayName:"RadioInput",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Ce={title:"Components/Radio",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"radio-story",checked:!1,onChange:J()}},g={render:function(){const e=i.useId(),[r,t]=i.useState("one");return a.jsxs(l,{display:"grid",gap:"10",children:[a.jsx(o,{name:`${e}-primitive`,id:`${e}-one`,checked:r==="one",onChange:()=>t("one")}),a.jsx(o,{name:`${e}-primitive`,id:`${e}-two`,checked:r==="two",onChange:()=>t("two")})]})}},h={name:"All States",render:()=>a.jsxs(ne,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[a.jsx(o,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{}}),a.jsx(o,{name:"checked",id:"checked",checked:!0,onChange:()=>{}}),a.jsx(o,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{}}),a.jsx(o,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{}}),a.jsx(o,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{}})]}),parameters:{controls:{disable:!0}}},y={name:"Ex: With RadioInput Wrapper",render:function(){const e=i.useId(),[r,t]=i.useState("standard"),s=d=>{if(d.target.id.endsWith("express")){t("express");return}t("standard")};return a.jsxs(l,{display:"grid",gap:"10",children:[a.jsx(c,{name:`${e}-shipping`,id:`${e}-standard`,checked:r==="standard",onChange:s,children:"Standard shipping"}),a.jsx(c,{name:`${e}-shipping`,id:`${e}-express`,checked:r==="express",onChange:s,children:"Express shipping"})]})},parameters:{controls:{disable:!0}}},f={name:"A11y: Arrow Key Navigation",render:function(){const e=i.useId(),[r,t]=i.useState("first"),s=d=>()=>t(d);return a.jsxs(l,{display:"grid",gap:"10",children:[a.jsx(c,{name:`${e}-a11y-group`,id:`${e}-first`,checked:r==="first",onChange:s("first"),children:"First option"}),a.jsx(c,{name:`${e}-a11y-group`,id:`${e}-second`,checked:r==="second",onChange:s("second"),children:"Second option"}),a.jsx(c,{name:`${e}-a11y-group`,id:`${e}-third`,checked:r==="third",onChange:s("third"),children:"Third option"})]})},play:async({canvasElement:n})=>{const e=Q(n),r=e.getByRole("radio",{name:/first option/i});r.focus(),_(r).toHaveFocus(),await U.keyboard("{ArrowDown}");const t=e.getByRole("radio",{name:/second option/i});_(t).toBeChecked()},parameters:{controls:{disable:!0}}};var $,E,w;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const groupId = useId();
    const [selected, setSelected] = useState('one');
    return <Box display="grid" gap="10">
        <Radio name={\`\${groupId}-primitive\`} id={\`\${groupId}-one\`} checked={selected === 'one'} onChange={() => setSelected('one')} />
        <Radio name={\`\${groupId}-primitive\`} id={\`\${groupId}-two\`} checked={selected === 'two'} onChange={() => setSelected('two')} />
      </Box>;
  }
}`,...(w=(E=g.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var T,N,B;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <Card p="24" bg="bg.accent.tan.subtlest" display="grid" gap="12">
      <Radio name="unchecked" id="unchecked" checked={false} onChange={() => {}} />
      <Radio name="checked" id="checked" checked={true} onChange={() => {}} />
      <Radio name="error" id="error" checked={false} error onChange={() => {}} />
      <Radio name="disabled" id="disabled" checked={false} disabled onChange={() => {}} />
      <Radio name="disabled-checked" id="disabled-checked" checked={true} disabled onChange={() => {}} />
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(N=h.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var A,W,q;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Ex: With RadioInput Wrapper',
  render: function ExWithLabelWrapperRender() {
    const groupId = useId();
    const [selected, setSelected] = useState('standard');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.id.endsWith('express')) {
        setSelected('express');
        return;
      }
      setSelected('standard');
    };
    return <Box display="grid" gap="10">
        <RadioInput name={\`\${groupId}-shipping\`} id={\`\${groupId}-standard\`} checked={selected === 'standard'} onChange={handleChange}>
          Standard shipping
        </RadioInput>
        <RadioInput name={\`\${groupId}-shipping\`} id={\`\${groupId}-express\`} checked={selected === 'express'} onChange={handleChange}>
          Express shipping
        </RadioInput>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(W=y.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var V,H,L;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(H=f.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const ke=["Default","AllStates","ExWithLabelWrapper","A11yKeyboardNavigation"];export{f as A11yKeyboardNavigation,h as AllStates,g as Default,y as ExWithLabelWrapper,ke as __namedExportsOrder,Ce as default};
