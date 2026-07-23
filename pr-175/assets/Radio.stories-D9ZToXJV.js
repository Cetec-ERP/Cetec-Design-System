import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{f as pe,w as le,e as q,u as ue}from"./index-DPYJpPba.js";import{m as Z,a as ee,s as ne,f as me,c as he,g as ge,b as ae,B as p,d as re}from"./Box-D8syd76n.js";import{C as fe}from"./Card-DgGOuWQU.js";import{u as oe}from"./FieldContext-D6URyQos.js";import{L as ye}from"./Label-Bb6hdk3t.js";import{I as f}from"./Icon-CLSA3e9P.js";import"./IconConfig-CuyDtWEJ.js";import"./_commonjsHelpers-CqkleIqs.js";const N=ee("radioInput",{},[]),te={},A=Object.keys(te),Ie=Object.assign(Z(N.recipeFn),{__recipe__:!0,__name__:"radioInput",__getCompoundVariantCss__:N.__getCompoundVariantCss__,raw:a=>a,variantKeys:A,variantMap:te,merge(a){return me(this,a)},splitVariantProps(a){return ne(a,A)},getVariantProps:N.getVariantProps}),se={},ke=[],be=[["container","radio__container"],["input","radio__input"],["indicator","radio__indicator"],["radioBg","radio__radioBg"]],ve=be.map(([a,e])=>[a,ee(e,se,ge(ke,a))]),Re=Z((a={})=>Object.fromEntries(ve.map(([e,r])=>[e,r.recipeFn(a)]))),V=[],xe=a=>({...se,...he(a)}),Ce=Object.assign(Re,{__recipe__:!1,__name__:"radio",raw:a=>a,classNameMap:{},variantKeys:V,variantMap:{},splitVariantProps(a){return ne(a,V)},getVariantProps:xe}),h=a=>{const e=oe(),{name:r,checked:o,defaultChecked:c,onChange:l,id:u,error:R,invalid:x,disabled:C,container:S,input:_,indicator:$,radioBg:t,...j}=a,w=C??(e==null?void 0:e.disabled),m=R??(e==null?void 0:e.error),g=x??(e==null?void 0:e.invalid),[E,P]=ae(j),i=Ce({container:S,input:_,indicator:$,radioBg:t}),T=o!==void 0;return n.jsxs(p,{className:re(i.container,E),...m&&{"data-error":!0},...g&&{"data-invalid":!0},children:[n.jsx(p,{as:"input",type:"radio",className:i.input,name:r,id:u,...T?{checked:o}:{defaultChecked:c??!1},onChange:l,disabled:w,...m&&{"data-error":!0},...g&&{"data-invalid":!0,"aria-invalid":!0},...P}),n.jsx(f,{className:i.radioBg,name:"circle","aria-hidden":!0}),n.jsx(f,{className:i.indicator,name:"radio","aria-hidden":!0}),n.jsx(f,{className:i.indicator,name:"radio-checked","aria-hidden":!0}),n.jsx(f,{className:i.indicator,name:"radio-focus","aria-hidden":!0})]})};h.__docgenInfo={description:`Radio supports both controlled and uncontrolled usage.

@example
<Radio defaultChecked />

@example
const [checked, setChecked] = useState(false);
<Radio checked={checked} onChange={(e) => setChecked(e.target.checked)} />`,methods:[],displayName:"Radio",props:{name:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Se=d.createContext(null),_e=()=>d.useContext(Se),s=a=>{const e=oe(),{name:r,value:o,checked:c,defaultChecked:l,onChange:u,id:R,children:x,error:C,invalid:S,disabled:_,...$}=a,t=_e(),j=C??(e==null?void 0:e.error),w=S??(e==null?void 0:e.invalid),m=_??(t==null?void 0:t.disabled)??(e==null?void 0:e.disabled),[g,E]=ae($),P=d.useId(),i=R??P,T=(t==null?void 0:t.name)??r,B=!!(t&&o!==void 0),de=B&&t?t.value===o:c,ie=ce=>{B&&o!==void 0&&t&&t.setValue(o),u==null||u(ce)};return n.jsxs(ye,{className:re(Ie(),g),htmlFor:i,disabled:m,...E,children:[n.jsx(h,{name:T,checked:de,defaultChecked:B?void 0:l,onChange:ie,id:i,error:j,invalid:w,disabled:m}),x]})};s.__docgenInfo={description:"",methods:[],displayName:"RadioInput",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: RadioChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Ve={title:"Components/Radio",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use `RadioInput` for product forms so each option includes a label and reliable hit area. Use `Radio` only for custom composition patterns. Both standalone and grouped usage are supported."}}},argTypes:{name:{control:"text"},id:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{name:"radio-story",checked:!1,onChange:pe()}},y={render:function(){const e=d.useId(),[r,o]=d.useState("standard");return n.jsxs(p,{display:"grid",gap:"10",children:[n.jsx(s,{name:`${e}-shipping`,id:`${e}-standard`,checked:r==="standard",onChange:()=>o("standard"),children:"Standard shipping"}),n.jsx(s,{name:`${e}-shipping`,id:`${e}-express`,checked:r==="express",onChange:()=>o("express"),children:"Express shipping"})]})},parameters:{docs:{description:{story:"Recommended usage: `RadioInput` options in a controlled group with user-facing labels."}}}},I={name:"Uncontrolled",render:function(){const e=d.useId();return n.jsxs(p,{display:"grid",gap:"10",children:[n.jsx(s,{name:`${e}-shipping`,id:`${e}-standard`,defaultChecked:!0,children:"Standard shipping"}),n.jsx(s,{name:`${e}-shipping`,id:`${e}-express`,children:"Express shipping"})]})},parameters:{controls:{disable:!0}}},k={name:"All States",render:()=>n.jsxs(fe,{p:"24",bg:"bg.accent.tan.subtlest",display:"grid",gap:"12",children:[n.jsx(s,{name:"unchecked",id:"unchecked",checked:!1,onChange:()=>{},children:"Unchecked"}),n.jsx(s,{name:"checked",id:"checked",checked:!0,onChange:()=>{},children:"Checked"}),n.jsx(s,{name:"error",id:"error",checked:!1,error:!0,onChange:()=>{},children:"Error"}),n.jsx(s,{name:"disabled",id:"disabled",checked:!1,disabled:!0,onChange:()=>{},children:"Disabled"}),n.jsx(s,{name:"disabled-checked",id:"disabled-checked",checked:!0,disabled:!0,onChange:()=>{},children:"Disabled checked"})]}),parameters:{controls:{disable:!0},docs:{description:{story:"State examples are shown as `RadioInput` options because that is the primary form integration path."}}}},b={name:"Ex: Primitive Radio Only",render:function(){const e=d.useId(),[r,o]=d.useState("one");return n.jsxs(p,{display:"grid",gap:"10",children:[n.jsx(h,{name:`${e}-primitive`,id:`${e}-one`,checked:r==="one",onChange:()=>o("one")}),n.jsx(h,{name:`${e}-primitive`,id:`${e}-two`,checked:r==="two",onChange:()=>o("two")})]})},parameters:{controls:{disable:!0},docs:{description:{story:"Primitive-only example for advanced wrappers. Prefer `RadioInput` in application flows."}}}},v={name:"A11y: Arrow Key Navigation",render:function(){const e=d.useId(),[r,o]=d.useState("first"),c=l=>()=>o(l);return n.jsxs(p,{display:"grid",gap:"10",children:[n.jsx(s,{name:`${e}-a11y-group`,id:`${e}-first`,checked:r==="first",onChange:c("first"),children:"First option"}),n.jsx(s,{name:`${e}-a11y-group`,id:`${e}-second`,checked:r==="second",onChange:c("second"),children:"Second option"}),n.jsx(s,{name:`${e}-a11y-group`,id:`${e}-third`,checked:r==="third",onChange:c("third"),children:"Third option"})]})},play:async({canvasElement:a})=>{const e=le(a),r=e.getByRole("radio",{name:/first option/i});r.focus(),q(r).toHaveFocus(),await ue.keyboard("{ArrowDown}");const o=e.getByRole("radio",{name:/second option/i});q(o).toBeChecked()},parameters:{controls:{disable:!0}}};var D,F,H;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var O,K,U;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(K=I.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var M,L,z;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(L=k.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var G,J,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Y;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const De=["Default","Uncontrolled","AllStates","ExPrimitiveOnly","A11yKeyboardNavigation"];export{v as A11yKeyboardNavigation,k as AllStates,y as Default,b as ExPrimitiveOnly,I as Uncontrolled,De as __namedExportsOrder,Ve as default};
