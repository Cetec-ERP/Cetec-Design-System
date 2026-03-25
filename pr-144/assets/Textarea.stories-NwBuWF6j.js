import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import{V as m,G as R}from"./Box-B-dS-qo0.js";import{F as a}from"./FormField-BicW-5-b.js";import{T as c}from"./Text-BlqN2xhk.js";import{T as r}from"./Textarea-Cq6qTfE4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CMDYjoHI.js";import"./IconConfig-DO2Dck3c.js";import"./Label-C4IxB5qt.js";import"./Tooltip-NolcpUTM.js";import"./floating-AgLCAi8_.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const L={title:"Components/Textarea",component:r,args:{name:"textarea"},parameters:{layout:"centered",docs:{description:{component:`Textarea component for multi-line text entry.

Features:
- Four sizes (sm, md, lg, xl)
- Error and disabled states
- Auto-sizing via \`fieldSizing: content\`
- Resizable by default
- Pairs with FormField for labels, help text, and error messages`}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Textarea size",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Error state — sets data-error and error styling"},disabled:{control:"boolean",description:"Disabled state"},autoSize:{control:"boolean",description:"Auto-size height to content",table:{defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"Placeholder text"},name:{control:"text",description:"Textarea name attribute"}}},s={render:()=>e.jsx(m,{gap:"12",alignItems:"flex-start",children:["sm","md","lg","xl"].map(o=>e.jsx(r,{size:o,name:o,placeholder:`Size: ${o}`},o))}),parameters:{controls:{disable:!0}}},l={render:()=>e.jsxs(R,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(c,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(r,{name:"default",placeholder:"Default"}),e.jsx(c,{textStyle:"mono.md",mr:"16",children:"disabled"}),e.jsx(r,{name:"disabled",placeholder:"Disabled",disabled:!0}),e.jsx(c,{textStyle:"mono.md",mr:"16",children:"error"}),e.jsx(r,{name:"error",placeholder:"Error",error:!0})]}),parameters:{controls:{disable:!0}}},n={render:()=>e.jsxs(m,{gap:"12",alignItems:"flex-start",maxW:"3xl",children:[e.jsx(r,{name:"auto-sm",size:"sm",autoSize:!0,placeholder:"Auto size sm — type to grow"}),e.jsx(r,{name:"auto-md",size:"md",autoSize:!0,placeholder:"Auto size md — type to grow"}),e.jsx(r,{name:"auto-lg",size:"lg",autoSize:!0,placeholder:"Auto size lg — type to grow"})]}),parameters:{controls:{disable:!0}}},i={name:"Ex: With FormField",render:()=>e.jsxs(m,{gap:"24",alignItems:"stretch",w:"xs",children:[e.jsx(a,{label:"Description",labelFor:"description",required:!0,children:e.jsx(r,{name:"description",id:"description",placeholder:"Enter a description..."})}),e.jsx(a,{label:"Notes",labelFor:"notes",helpText:"Add any additional context.",tooltipText:"Optional notes for the team",children:e.jsx(r,{name:"notes",id:"notes",placeholder:"Additional notes..."})}),e.jsx(a,{label:"Comments",labelFor:"comments",error:!0,errorText:"Comments are required.",children:e.jsx(r,{name:"comments",id:"comments",error:!0})}),e.jsx(a,{label:"Remarks",labelFor:"remarks",disabled:!0,children:e.jsx(r,{name:"remarks",id:"remarks",placeholder:"Read-only remarks",disabled:!0})})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Inline FormField",render:()=>e.jsxs(m,{gap:"16",alignItems:"stretch",w:"md",children:[e.jsx(a,{layout:"inline",labelFor:"description2",label:"Description",required:!0,children:e.jsx(r,{name:"description2",id:"description2",placeholder:"Enter a description..."})}),e.jsx(a,{layout:"inline",label:"Notes",labelFor:"notes2",helpText:"Add any additional context.",tooltipText:"Optional notes for the team",children:e.jsx(r,{name:"notes2",id:"notes2",placeholder:"Additional notes..."})}),e.jsx(a,{layout:"inline",label:"Comments",labelFor:"comments2",error:!0,errorText:"Comments are required.",children:e.jsx(r,{name:"comments2",id:"comments2",error:!0})}),e.jsx(a,{layout:"inline",label:"Remarks",labelFor:"remarks2",disabled:!0,children:e.jsx(r,{name:"remarks2",id:"remarks2",placeholder:"Read-only remarks",disabled:!0})})]}),parameters:{controls:{disable:!0}}},t={args:{name:"demo",size:"md",placeholder:"Type something...",error:!1,disabled:!1,autoSize:!1}};var p,u,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Textarea key={size} size={size} name={size} placeholder={\`Size: \${size}\`} />)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,F,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        default
      </Text>
      <Textarea name="default" placeholder="Default" />
      <Text textStyle="mono.md" mr="16">
        disabled
      </Text>
      <Textarea name="disabled" placeholder="Disabled" disabled />
      <Text textStyle="mono.md" mr="16">
        error
      </Text>
      <Textarea name="error" placeholder="Error" error />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(F=l.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var g,T,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start" maxW="3xl">
      <Textarea name="auto-sm" size="sm" autoSize placeholder="Auto size sm — type to grow" />
      <Textarea name="auto-md" size="md" autoSize placeholder="Auto size md — type to grow" />
      <Textarea name="auto-lg" size="lg" autoSize placeholder="Auto size lg — type to grow" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var z,S,f;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Ex: With FormField',
  render: () => <VStack gap="24" alignItems="stretch" w="xs">
      <FormField label="Description" labelFor="description" required>
        <Textarea name="description" id="description" placeholder="Enter a description..." />
      </FormField>
      <FormField label="Notes" labelFor="notes" helpText="Add any additional context." tooltipText="Optional notes for the team">
        <Textarea name="notes" id="notes" placeholder="Additional notes..." />
      </FormField>
      <FormField label="Comments" labelFor="comments" error errorText="Comments are required.">
        <Textarea name="comments" id="comments" error />
      </FormField>
      <FormField label="Remarks" labelFor="remarks" disabled>
        <Textarea name="remarks" id="remarks" placeholder="Read-only remarks" disabled />
      </FormField>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var j,k,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Ex: Inline FormField',
  render: () => <VStack gap="16" alignItems="stretch" w="md">
      <FormField layout="inline" labelFor="description2" label="Description" required>
        <Textarea name="description2" id="description2" placeholder="Enter a description..." />
      </FormField>
      <FormField layout="inline" label="Notes" labelFor="notes2" helpText="Add any additional context." tooltipText="Optional notes for the team">
        <Textarea name="notes2" id="notes2" placeholder="Additional notes..." />
      </FormField>
      <FormField layout="inline" label="Comments" labelFor="comments2" error errorText="Comments are required.">
        <Textarea name="comments2" id="comments2" error />
      </FormField>
      <FormField layout="inline" label="Remarks" labelFor="remarks2" disabled>
        <Textarea name="remarks2" id="remarks2" placeholder="Read-only remarks" disabled />
      </FormField>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var I,E,w,V,C;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'demo',
    size: 'md',
    placeholder: 'Type something...',
    error: false,
    disabled: false,
    autoSize: false
  }
}`,...(w=(E=t.parameters)==null?void 0:E.docs)==null?void 0:w.source},description:{story:"Interactive playground to test all props",...(C=(V=t.parameters)==null?void 0:V.docs)==null?void 0:C.description}}};const M=["Sizes","States","AutoSize","WithFormField","InlineFormField","Interactive"];export{n as AutoSize,d as InlineFormField,t as Interactive,s as Sizes,l as States,i as WithFormField,M as __namedExportsOrder,L as default};
