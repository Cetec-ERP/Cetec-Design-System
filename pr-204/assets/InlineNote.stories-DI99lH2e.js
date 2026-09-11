import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as q,e as m}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{m as B,c as O,s as k,a as A,g as C,b as P,B as u,d as U,e as z,V as d}from"./dsComponent-COP_u32W.js";import{F as p}from"./FormField-fyzVtwPa.js";import{T as g}from"./TextInput-XB79Ld-0.js";import{I as K}from"./Icon-DykL05lh.js";import"./IconConfig-qRFEvzON.js";import{T as M}from"./Text-Bb_CaJVi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Label-BpkEpCNF.js";import"./Tooltip-BI37R98K.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Button-9qTdRXCj.js";import"./Spinner-CUl5P6MP.js";import"./IconButton-DtO38NMA.js";const _={tone:"info"},Q=[],W=[["root","inlineNote__root"],["icon","inlineNote__icon"],["message","inlineNote__message"]],G=W.map(([n,t])=>[n,A(t,_,C(Q,n))]),H=B((n={})=>Object.fromEntries(G.map(([t,l])=>[t,l.recipeFn(n)]))),h=["tone"],Y=n=>({..._,...O(n)}),$=Object.assign(H,{__recipe__:!1,__name__:"inlineNote",raw:n=>n,classNameMap:{},variantKeys:h,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(n){return k(n,h)},getVariantProps:Y}),J={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},L={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},X={info:"text.subtle",success:"text.success",warning:"text.warning",danger:"text.danger",neutral:"text.subtle"},a=n=>{const{tone:t="info",children:l,...R}=n,[S,V]=P(R),c=$({tone:t}),D=J[t];return e.jsxs(u,{...z("InlineNote"),role:t==="danger"?"alert":"status",className:U(c.root,S),...V,children:[e.jsx(u,{className:c.icon,children:e.jsx(K,{name:D,size:"16",fill:L[t],"aria-hidden":"true"})}),e.jsx(M,{textStyle:"body.xs",lineHeight:"tight",color:X[t],className:c.message,children:l})]})};a.__docgenInfo={description:'Attaches short guidance or a validation message to a single form field.\n\nAn inline note has no surface, title, actions, or dismiss control: it is the\nsmallest notification in the set and belongs directly beneath the control it\ndescribes. Use `Alert` when the message concerns a whole section.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. Reference it from the field with\n`aria-describedby` so the message reaches screen readers on focus.\n`tone="neutral"` uses the info icon.\n\n@example\n```tsx\n<InlineNote id="email-note" tone="danger">Enter a valid email address.</InlineNote>\n```',methods:[],displayName:"InlineNote",props:{tone:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:'@default "info"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The note text."}}};const Z='\n`InlineNote` is the smallest placement in the notification set: field-level\nawareness, directly beneath the control it describes. It has no title, no\nactions, and no dismiss control, and it uses the smallest type size.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. Give the note an `id` and point the field\'s\n`aria-describedby` at it so the message reaches screen readers on focus.\n`tone="neutral"` uses the info icon.\n',ye={title:"Components/InlineNote",component:a,tags:["autodocs"],parameters:{docs:{description:{component:Z}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]}},args:{tone:"info",children:"Use the format ORD-000000."}},o={},r={name:"Every tone",render:()=>e.jsxs(d,{alignItems:"start",gap:"8",children:[e.jsx(a,{tone:"info",children:"Use the format ORD-000000."}),e.jsx(a,{tone:"success",children:"Order number is available."}),e.jsx(a,{tone:"warning",children:"This order number is already in use on a draft."}),e.jsx(a,{tone:"danger",children:"Enter an order number."}),e.jsx(a,{tone:"neutral",children:"Neutral uses the info icon on a neutral surface."})]})},s={name:"Ex: field validation message",render:()=>e.jsxs(d,{alignItems:"stretch",gap:"16",maxW:"xs",children:[e.jsxs(p,{label:"Order number",labelFor:"order-number",children:[e.jsx(g,{id:"order-number",name:"orderNumber","aria-describedby":"order-number-note"}),e.jsx(a,{id:"order-number-note",tone:"info",children:"Use the format ORD-000000."})]}),e.jsxs(p,{label:"Quantity",labelFor:"quantity",children:[e.jsx(g,{id:"quantity",name:"quantity","aria-describedby":"quantity-note"}),e.jsx(a,{id:"quantity-note",tone:"danger",children:"Enter a quantity of at least one."})]})]})},i={name:"Test: role by tone",render:()=>e.jsxs(d,{alignItems:"start",gap:"8",children:[e.jsx(a,{tone:"danger",children:"Danger notes interrupt."}),e.jsx(a,{tone:"info",children:"Every other tone announces politely."})]}),play:async({canvasElement:n})=>{const t=q(n);await m(t.getByRole("alert")).toBeInTheDocument(),await m(t.getByRole("status")).toBeInTheDocument()}};var f,b,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,N,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Every tone',
  render: () => <VStack alignItems="start" gap="8">
      <InlineNote tone="info">Use the format ORD-000000.</InlineNote>
      <InlineNote tone="success">Order number is available.</InlineNote>
      <InlineNote tone="warning">
        This order number is already in use on a draft.
      </InlineNote>
      <InlineNote tone="danger">Enter an order number.</InlineNote>
      <InlineNote tone="neutral">
        Neutral uses the info icon on a neutral surface.
      </InlineNote>
    </VStack>
}`,...(I=(N=r.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var w,v,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Ex: field validation message',
  render: () => <VStack alignItems="stretch" gap="16" maxW="xs">
      <FormField label="Order number" labelFor="order-number">
        <TextInput id="order-number" name="orderNumber" aria-describedby="order-number-note" />
        <InlineNote id="order-number-note" tone="info">
          Use the format ORD-000000.
        </InlineNote>
      </FormField>
      <FormField label="Quantity" labelFor="quantity">
        <TextInput id="quantity" name="quantity" aria-describedby="quantity-note" />
        <InlineNote id="quantity-note" tone="danger">
          Enter a quantity of at least one.
        </InlineNote>
      </FormField>
    </VStack>
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var j,F,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Test: role by tone',
  render: () => <VStack alignItems="start" gap="8">
      <InlineNote tone="danger">Danger notes interrupt.</InlineNote>
      <InlineNote tone="info">Every other tone announces politely.</InlineNote>
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  }
}`,...(E=(F=i.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const xe=["Default","Tones","ExFieldValidation","RoleByTone"];export{o as Default,s as ExFieldValidation,i as RoleByTone,r as Tones,xe as __namedExportsOrder,ye as default};
