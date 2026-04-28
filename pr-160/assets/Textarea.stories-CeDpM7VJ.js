import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import{V as p,G as W}from"./Box-DON8OdPK.js";import{B as v}from"./BreakpointIndicator-IW1tL_SP.js";import{F as t}from"./FormField-p60hppUE.js";import{T as c}from"./Text-BxMUKbtC.js";import{T as r}from"./Textarea-oNGRgzfZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-CdyncLWL.js";import"./Icon-BjyDhYXA.js";import"./IconConfig-CigF0iOf.js";import"./FieldContext-D6URyQos.js";import"./Label-DWL0qqiH.js";import"./Tooltip-CbjHgvJ3.js";import"./floating-KWRh7SVq.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const se={title:"Components/Textarea",component:r,args:{name:"textarea"},parameters:{layout:"centered",docs:{description:{component:`Textarea component for multi-line text entry.

Features:
- Four sizes (sm, md, lg, xl)
- Error and disabled states
- Auto-sizing via \`fieldSizing: content\`
- Resizable by default
- Pairs with FormField for labels, help text, and error messages`}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Textarea size",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Error state — sets data-error and error styling"},disabled:{control:"boolean",description:"Disabled state"},autoSize:{control:"boolean",description:"Auto-size height to content",table:{defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"Placeholder text"},name:{control:"text",description:"Textarea name attribute"}}},s={render:()=>e.jsx(p,{gap:"12",alignItems:"flex-start",children:["sm","md","lg","xl"].map(o=>e.jsx(r,{size:o,name:o,placeholder:`Size: ${o}`},o))}),parameters:{controls:{disable:!0}}},l={render:()=>e.jsxs(W,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(r,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},name:"pizza",placeholder:"pizza"}),e.jsxs(c,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(v,{})]}),parameters:{controls:{disable:!0}}},n={render:()=>e.jsxs(W,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(c,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(r,{name:"default",placeholder:"Default"}),e.jsx(c,{textStyle:"mono.md",mr:"16",children:"disabled"}),e.jsx(r,{name:"disabled",placeholder:"Disabled",disabled:!0}),e.jsx(c,{textStyle:"mono.md",mr:"16",children:"error"}),e.jsx(r,{name:"error",placeholder:"Error",error:!0})]}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsxs(p,{gap:"12",alignItems:"flex-start",maxW:"3xl",children:[e.jsx(r,{name:"auto-sm",size:"sm",autoSize:!0,placeholder:"Auto size sm — type to grow"}),e.jsx(r,{name:"auto-md",size:"md",autoSize:!0,placeholder:"Auto size md — type to grow"}),e.jsx(r,{name:"auto-lg",size:"lg",autoSize:!0,placeholder:"Auto size lg — type to grow"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: With FormField",render:()=>e.jsxs(p,{gap:"24",alignItems:"stretch",w:"xs",children:[e.jsx(t,{label:"Description",labelFor:"description",required:!0,children:e.jsx(r,{name:"description",id:"description",placeholder:"Enter a description..."})}),e.jsx(t,{label:"Notes",labelFor:"notes",helpText:"Add any additional context.",tooltipText:"Optional notes for the team",children:e.jsx(r,{name:"notes",id:"notes",placeholder:"Additional notes..."})}),e.jsx(t,{label:"Comments",labelFor:"comments",error:!0,errorText:"Comments are required.",children:e.jsx(r,{name:"comments",id:"comments",error:!0})}),e.jsx(t,{label:"Remarks",labelFor:"remarks",disabled:!0,children:e.jsx(r,{name:"remarks",id:"remarks",placeholder:"Read-only remarks",disabled:!0})})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: Inline FormField",render:()=>e.jsxs(p,{gap:"16",alignItems:"stretch",w:"md",children:[e.jsx(t,{layout:"inline",labelFor:"description2",label:"Description",required:!0,children:e.jsx(r,{name:"description2",id:"description2",placeholder:"Enter a description..."})}),e.jsx(t,{layout:"inline",label:"Notes",labelFor:"notes2",helpText:"Add any additional context.",tooltipText:"Optional notes for the team",children:e.jsx(r,{name:"notes2",id:"notes2",placeholder:"Additional notes..."})}),e.jsx(t,{layout:"inline",label:"Comments",labelFor:"comments2",error:!0,errorText:"Comments are required.",children:e.jsx(r,{name:"comments2",id:"comments2",error:!0})}),e.jsx(t,{layout:"inline",label:"Remarks",labelFor:"remarks2",disabled:!0,children:e.jsx(r,{name:"remarks2",id:"remarks2",placeholder:"Read-only remarks",disabled:!0})})]}),parameters:{controls:{disable:!0}}},a={args:{name:"demo",size:"md",placeholder:"Type something...",error:!1,disabled:!1,autoSize:!1}};var x,u,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Textarea key={size} size={size} name={size} placeholder={\`Size: \${size}\`} />)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,F,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <Textarea size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} name="pizza" placeholder="pizza" />
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"xl"',
        xs: '"lg"',
        sm: '"md"',
        md: '"sm"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(F=l.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var z,T,f;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var y,S,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,I,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(I=d.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var w,C,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var V,G,R,D,q;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: 'demo',
    size: 'md',
    placeholder: 'Type something...',
    error: false,
    disabled: false,
    autoSize: false
  }
}`,...(R=(G=a.parameters)==null?void 0:G.docs)==null?void 0:R.source},description:{story:"Interactive playground to test all props",...(q=(D=a.parameters)==null?void 0:D.docs)==null?void 0:q.description}}};const le=["Sizes","ConditionalBreakpoints","States","AutoSize","WithFormField","InlineFormField","Interactive"];export{i as AutoSize,l as ConditionalBreakpoints,m as InlineFormField,a as Interactive,s as Sizes,n as States,d as WithFormField,le as __namedExportsOrder,se as default};
