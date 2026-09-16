import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as B,e as d}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{m as D,a as O,b as R,e as k,g as C,s as P,B as m,c as U,d as H,V as q}from"./dsComponent-BG2jnRr7.js";import{F as u}from"./FormField-DdJop6CC.js";import{T as p}from"./TextInput-B3gJX84x.js";import{I as z}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as K}from"./Text-IAtRPmZy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Label-Duobk4D3.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Button-Cr4bC5CG.js";import"./Spinner-PLunUSsK.js";import"./IconButton-DXX-zVMP.js";const E={tone:"info"},M=[],Q=[["root","inlineNote__root"],["icon","inlineNote__icon"],["message","inlineNote__message"]],W=Q.map(([n,t])=>[n,k(t,E,C(M,n))]),G=D((n={})=>Object.fromEntries(W.map(([t,l])=>[t,l.recipeFn(n)]))),g=["tone"],Y=n=>({...E,...O(n)}),$=Object.assign(G,{__recipe__:!1,__name__:"inlineNote",raw:n=>n,classNameMap:{},variantKeys:g,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(n){return R(n,g)},getVariantProps:Y}),J={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},L={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},X={info:"text.subtle",success:"text.success",warning:"text.warning",danger:"text.danger",neutral:"text.subtle"},a=n=>{const{tone:t="info",children:l,..._}=n,[A,S]=P(_),c=$({tone:t}),V=J[t];return e.jsxs(m,{...H("InlineNote"),className:U(c.root,A),...S,children:[e.jsx(m,{className:c.icon,children:e.jsx(z,{name:V,size:"16",fill:L[t],"aria-hidden":"true"})}),e.jsx(K,{textStyle:"body.xs",lineHeight:"tight",color:X[t],className:c.message,children:l})]})};a.__docgenInfo={description:`Attaches short guidance or a validation message to a single form field.

An inline note has no surface, title, actions, or dismiss control: it is the
smallest notification in the set and belongs directly beneath the control it
describes. Use \`Alert\` when the message concerns a whole section.

Reference it from the field with \`aria-describedby\` so the message reaches
screen readers on focus. It has no live-region role by default because
static field guidance would otherwise be announced both on mount and again
on field focus. Add an appropriate role when inserting a note dynamically.
\`tone="neutral"\` uses the info icon.

@example
\`\`\`tsx
<InlineNote id="email-note" tone="danger">Enter a valid email address.</InlineNote>
\`\`\``,methods:[],displayName:"InlineNote",props:{tone:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:'@default "info"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The note text."}}};const Z='\n`InlineNote` is the smallest placement in the notification set: field-level\nawareness, directly beneath the control it describes. It has no title, no\nactions, and no dismiss control, and it uses the smallest type size.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n**Accessibility.** Give the note an `id` and point the field\'s\n`aria-describedby` at it so the message reaches screen readers on focus.\nStatic notes do not use a live-region role because that can announce the same\nmessage on mount and again on focus. Add `role="alert"` only when inserting a\nvalidation message dynamically. `tone="neutral"` uses the info icon.\n',ye={title:"Components/InlineNote",component:a,tags:["autodocs"],parameters:{docs:{description:{component:Z}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]}},args:{tone:"info",children:"Use the format ORD-000000."}},o={},r={name:"Every tone",render:()=>e.jsxs(q,{alignItems:"start",gap:"8",children:[e.jsx(a,{tone:"info",children:"Use the format ORD-000000."}),e.jsx(a,{tone:"success",children:"Order number is available."}),e.jsx(a,{tone:"warning",children:"This order number is already in use on a draft."}),e.jsx(a,{tone:"danger",children:"Enter an order number."}),e.jsx(a,{tone:"neutral",children:"Neutral uses the info icon on a neutral surface."})]})},s={name:"Ex: field validation message",render:()=>e.jsxs(q,{alignItems:"stretch",gap:"16",maxW:"xs",children:[e.jsxs(u,{label:"Order number",labelFor:"order-number",children:[e.jsx(p,{id:"order-number",name:"orderNumber","aria-describedby":"order-number-note"}),e.jsx(a,{id:"order-number-note",tone:"info",children:"Use the format ORD-000000."})]}),e.jsxs(u,{label:"Quantity",labelFor:"quantity",children:[e.jsx(p,{id:"quantity",name:"quantity","aria-describedby":"quantity-note"}),e.jsx(a,{id:"quantity-note",tone:"danger",children:"Enter a quantity of at least one."})]})]})},i={name:"Test: static notes are descriptions, not live regions",render:()=>e.jsx(a,{id:"static-note",tone:"danger",children:"Enter a quantity of at least one."}),play:async({canvasElement:n})=>{const t=B(n);await d(t.getByText(/Enter a quantity/)).not.toHaveAttribute("role"),await d(t.queryByRole("alert")).not.toBeInTheDocument(),await d(t.queryByRole("status")).not.toBeInTheDocument()}};var f,h,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,x,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var I,w,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var T,F,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Test: static notes are descriptions, not live regions',
  render: () => <InlineNote id="static-note" tone="danger">
      Enter a quantity of at least one.
    </InlineNote>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Enter a quantity/)).not.toHaveAttribute('role');
    await expect(canvas.queryByRole('alert')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('status')).not.toBeInTheDocument();
  }
}`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const xe=["Default","Tones","ExFieldValidation","FieldAssociation"];export{o as Default,s as ExFieldValidation,i as FieldAssociation,r as Tones,xe as __namedExportsOrder,ye as default};
