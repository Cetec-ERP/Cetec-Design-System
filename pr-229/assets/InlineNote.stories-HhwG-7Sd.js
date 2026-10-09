import{m as B,e as D,f as R,g as V,h as k,s as C,j as e,B as m,c as P,d as U,a as H,T as K,V as j}from"./iframe-Dq6zsNJe.js";import{F as u}from"./FormField-CBmMqOFB.js";import{T as p}from"./TextInput-izMbU_-F.js";import"./preload-helper-Bzp4i-S8.js";import"./FieldContext-NB5ushz7.js";import"./Label-BGmhexSa.js";import"./Button-v3YnOzFq.js";import"./Spinner-3ddqMDIX.js";import"./IconButton-BrXmK8P0.js";const q={tone:"info"},M=[],z=[["root","inlineNote__root"],["icon","inlineNote__icon"],["message","inlineNote__message"]],Q=z.map(([n,t])=>[n,V(t,q,k(M,n))]),W=B((n={})=>Object.fromEntries(Q.map(([t,c])=>[t,c.recipeFn(n)]))),g=["tone"],Y=n=>({...q,...D(n)}),G=Object.assign(W,{__recipe__:!1,__name__:"inlineNote",raw:n=>n,classNameMap:{},variantKeys:g,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(n){return R(n,g)},getVariantProps:Y}),L={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},$={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},J={info:"text.subtle",success:"text.success",warning:"text.warning",danger:"text.danger",neutral:"text.subtle"},a=n=>{const{tone:t="info",children:c,...E}=n,[O,S]=C(E),l=G({tone:t}),A=L[t];return e.jsxs(m,{...U("InlineNote"),className:P(l.root,O),...S,children:[e.jsx(m,{className:l.icon,children:e.jsx(H,{name:A,size:"16",fill:$[t],"aria-hidden":"true"})}),e.jsx(K,{textStyle:"body.xs",lineHeight:"tight",color:J[t],className:l.message,children:c})]})};a.__docgenInfo={description:`Attaches short guidance or a validation message to a single form field.

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
\`\`\``,methods:[],displayName:"InlineNote",props:{tone:{required:!1,tsType:{name:"AlertTone"},description:'@default "info"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The note text."}}};const{expect:d,within:X}=__STORYBOOK_MODULE_TEST__,Z='\n`InlineNote` is the smallest placement in the notification set: field-level\nawareness, directly beneath the control it describes. It has no title, no\nactions, and no dismiss control, and it uses the smallest type size.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n**Accessibility.** Give the note an `id` and point the field\'s\n`aria-describedby` at it so the message reaches screen readers on focus.\nStatic notes do not use a live-region role because that can announce the same\nmessage on mount and again on focus. Add `role="alert"` only when inserting a\nvalidation message dynamically. `tone="neutral"` uses the info icon.\n',le={title:"Components/InlineNote",component:a,tags:["autodocs"],parameters:{docs:{description:{component:Z}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]}},args:{tone:"info",children:"Use the format ORD-000000."}},o={},s={name:"Every tone",render:()=>e.jsxs(j,{alignItems:"start",gap:"8",children:[e.jsx(a,{tone:"info",children:"Use the format ORD-000000."}),e.jsx(a,{tone:"success",children:"Order number is available."}),e.jsx(a,{tone:"warning",children:"This order number is already in use on a draft."}),e.jsx(a,{tone:"danger",children:"Enter an order number."}),e.jsx(a,{tone:"neutral",children:"Neutral uses the info icon on a neutral surface."})]})},r={name:"Ex: field validation message",render:()=>e.jsxs(j,{alignItems:"stretch",gap:"16",maxW:"xs",children:[e.jsxs(u,{label:"Order number",labelFor:"order-number",children:[e.jsx(p,{id:"order-number",name:"orderNumber","aria-describedby":"order-number-note"}),e.jsx(a,{id:"order-number-note",tone:"info",children:"Use the format ORD-000000."})]}),e.jsxs(u,{label:"Quantity",labelFor:"quantity",children:[e.jsx(p,{id:"quantity",name:"quantity","aria-describedby":"quantity-note"}),e.jsx(a,{id:"quantity-note",tone:"danger",children:"Enter a quantity of at least one."})]})]})},i={name:"Test: static notes are descriptions, not live regions",render:()=>e.jsx(a,{id:"static-note",tone:"danger",children:"Enter a quantity of at least one."}),play:async({canvasElement:n})=>{const t=X(n);await d(t.getByText(/Enter a quantity/)).not.toHaveAttribute("role"),await d(t.queryByRole("alert")).not.toBeInTheDocument(),await d(t.queryByRole("status")).not.toBeInTheDocument()}},de=["Default","Tones","ExFieldValidation","FieldAssociation"];var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,x,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(x=s.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var I,w,T;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var v,F,_;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(F=i.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};export{o as Default,r as ExFieldValidation,i as FieldAssociation,s as Tones,de as __namedExportsOrder,le as default};
