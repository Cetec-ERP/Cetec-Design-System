import{m as qe,e as We,f as Ne,g as Pe,h as $e,s as ze,r as h,j as t,B as d,c as w,d as Qe,i as Ke,a as Ue,V as I,H as D,T as U,W as Xe}from"./iframe-CKARyTiH.js";import{L as Ye}from"./LocaleProvider-BWLHj2Pu.js";import{u as Ge}from"./useLocale--B6TtE59.js";import{B as X}from"./Button-Hf-dV2TT.js";import"./preload-helper-Bx88jSaX.js";import"./Spinner-BJ1Bsbip.js";import"./FieldContext-Cx00V6no.js";const Ae={},Je=[],Ze=[["root","filterToken__root"],["part","filterToken__part"],["field","filterToken__field"],["operator","filterToken__operator"],["value","filterToken__value"],["valueText","filterToken__valueText"],["count","filterToken__count"],["editor","filterToken__editor"],["remove","filterToken__remove"]],et=Ze.map(([e,a])=>[e,Pe(a,Ae,$e(Je,e))]),tt=qe((e={})=>Object.fromEntries(et.map(([a,n])=>[a,n.recipeFn(e)]))),Y=[],nt=e=>({...Ae,...We(e)}),at=Object.assign(tt,{__recipe__:!1,__name__:"filterToken",raw:e=>e,classNameMap:{},variantKeys:Y,variantMap:{},splitVariantProps(e){return Ne(e,Y)},getVariantProps:nt}),G=2,m=e=>{const{field:a,operator:n,value:s,state:i="applied",tone:r="default",operatorLocked:p,editor:g,disabled:k,retainFocus:Oe,onFieldClick:Ve,onOperatorClick:je,onValueClick:q,onRemove:W,removeLabel:Ie,...Le}=e,[He,_e]=ze(Le),u=at(),{labels:Me}=Ge(),B=Array.isArray(s)?s:void 0,L=Array.isArray(s)?s.join(", "):s,x=B?Math.max(0,B.length-G):0,H=B?B.slice(0,G).join(", "):s,N=[a,n,L].filter(Boolean).join(" "),P=Oe?v=>v.preventDefault():void 0,$=h.useRef(null),[De,z]=h.useState(!1);h.useLayoutEffect(()=>{const v=$.current;if(!v){z(!1);return}const y=()=>z(v.scrollWidth>v.clientWidth);if(y(),typeof ResizeObserver>"u")return;const f=new ResizeObserver(y);return f.observe(v),()=>f.disconnect()},[H,g]);const _=(v,y,f,K)=>f?t.jsx(d,{as:"button",type:"button",className:w(u.part,v),disabled:k,onMouseDown:P,onClick:f,...K,children:y}):t.jsx(d,{as:"span",className:w(u.part,v),...K,children:y}),Q=t.jsxs(t.Fragment,{children:[t.jsx(d,{as:"span",ref:$,className:u.valueText,"aria-hidden":x>0||void 0,children:H||"…"}),x>0&&t.jsxs(t.Fragment,{children:[t.jsx(d,{as:"span",className:u.count,"aria-hidden":!0,children:`+${x}`}),t.jsx(d,{as:"span",srOnly:!0,children:L})]})]});return t.jsxs(d,{...Qe("FilterToken"),as:"span",role:"group","aria-label":N,className:w(u.root,He),"data-state":i,"data-tone":r,"data-disabled":k||void 0,..._e,children:[_(u.field,a,Ve??q),_(u.operator,n,p?void 0:je,p?{"data-locked":!0}:void 0),g!==void 0?t.jsxs(d,{as:"span",className:w(u.part,u.editor),inert:k||void 0,children:[H&&t.jsx(d,{as:"span",className:u.value,children:Q}),g]}):s!==void 0&&t.jsx(Ke,{text:L??"",disabled:x===0&&!De,children:_(u.value,Q,q)}),W&&i!=="removing"&&t.jsx(d,{as:"button",type:"button",className:u.remove,"aria-label":Ie??Me.removeFilter(N),disabled:k,onMouseDown:P,onClick:W,children:t.jsx(Ue,{name:"x",size:"16","aria-hidden":!0})})]})};m.__docgenInfo={description:`One filter in a filter field, read as a sentence: field, operator, value.

Each part is its own click target, and the remove button ends the token.
A part with no click handler renders as text. Use \`Chip\` for a label with
one action. The root renders a \`span\` with \`role="group"\` and an
accessible name made from the sentence.

In \`removing\` state, the parts stay clickable so the consumer can restore
the filter, and the remove button is hidden.

@example
\`\`\`tsx
<FilterToken
  field="Stage"
  operator="is any of"
  value="Open, In progress"
  onValueClick={openValues}
  onRemove={() => remove('stage')}
/>
\`\`\``,methods:[],displayName:"FilterToken",props:{field:{required:!0,tsType:{name:"string"},description:'Name of the filtered field, such as "Stage".'},operator:{required:!0,tsType:{name:"string"},description:'Operator text, such as "is", "is any of" or "is between".'},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:`The filter value. A string shows as is, such as "Sep 1 – Sep 30". A list
shows its first two items, then \`+N\` for the rest, and a tooltip lists
every item. A value cut off by the width limit also shows the tooltip,
so the full text can be read on hover or focus. An empty
string or list shows "…" for a filter that has no value yet. Omit it for
an operator that takes no value, such as "is empty".`},state:{required:!1,tsType:{name:"union",raw:`| 'applied'
| 'editing'
| 'pending'
| 'removing'
| 'armed'`,elements:[{name:"literal",value:"'applied'"},{name:"literal",value:"'editing'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'removing'"},{name:"literal",value:"'armed'"}]},description:'@default "applied"'},tone:{required:!1,tsType:{name:"union",raw:"'default' | 'exclude'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'exclude'"}]},description:'@default "default"'},operatorLocked:{required:!1,tsType:{name:"boolean"},description:`Renders the operator as text, not as a button. Use it when the field
supports only one operator.`},editor:{required:!1,tsType:{name:"ReactNode"},description:`Content that replaces the value button while the token is edited in
place, usually a text input. The value text stays before it.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables every part of the token, the `editor` included."},retainFocus:{required:!1,tsType:{name:"boolean"},description:`Keeps focus where it is when a part is clicked with a pointer. A filter
field sets this so focus stays in its input, as in a combobox.`},onFieldClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Runs when the field part is clicked. Falls back to `onValueClick` when\nabsent, because the field and the value both open the value menu."},onOperatorClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Runs when the operator part is clicked. Not called when `operatorLocked` is true."},onValueClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Runs when the value part is clicked."},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Runs when the remove button is clicked. The button is not shown when this\nis absent or when `state` is `removing`."},removeLabel:{required:!1,tsType:{name:"string"},description:"Accessible name for the remove button.\n@default `labels.removeFilter` (English: `Remove filter: ${field} ${operator} ${values}`), with every value"}}};const{expect:o,fn:M,userEvent:c,waitFor:b,within:l}=__STORYBOOK_MODULE_TEST__,dt={title:"Components/FilterToken",component:m,tags:["autodocs"],argTypes:{state:{control:"select",options:["applied","editing","pending","removing","armed"]},tone:{control:"select",options:["default","exclude"]},editor:{control:!1}},args:{field:"Stage",operator:"is any of",value:"Open, In progress",state:"applied",tone:"default",operatorLocked:!1,disabled:!1,onValueClick:M(),onOperatorClick:M(),onRemove:M()},parameters:{layout:"centered"}},T={play:async({args:e,canvasElement:a})=>{const n=l(a);o(n.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),await c.click(n.getByRole("button",{name:"Stage"})),await c.click(n.getByRole("button",{name:"Open, In progress"})),o(e.onValueClick).toHaveBeenCalledTimes(2),await c.click(n.getByRole("button",{name:"is any of"})),o(e.onOperatorClick).toHaveBeenCalledOnce(),await c.click(n.getByRole("button",{name:"Remove filter: Stage is any of Open, In progress"})),o(e.onRemove).toHaveBeenCalledOnce()}},J=[{state:"applied",note:"The results include this filter."},{state:"editing",note:"A menu for this token is open."},{state:"pending",note:"Added or changed. Waits for Apply."},{state:"removing",note:"Removed. Waits for Apply. Click to restore."},{state:"armed",note:"The next Backspace removes it."}],R={render:e=>t.jsx(I,{alignItems:"start",gap:"12",children:J.map(({state:a,note:n})=>t.jsxs(D,{gap:"16",children:[t.jsx(d,{w:"96",children:t.jsx(U,{textStyle:"body.sm",fontWeight:"medium",children:a})}),t.jsx(m,{...e,state:a,"data-testid":a}),t.jsx(U,{textStyle:"body.sm",color:"text.subtlest",children:n})]},a))}),play:async({canvasElement:e})=>{const a=l(e),n=/^Remove filter/;for(const{state:s}of J){const i=l(a.getByTestId(s));s==="removing"?(o(i.queryByRole("button",{name:n})).not.toBeInTheDocument(),o(i.getByRole("button",{name:"Stage"})).toBeEnabled()):o(i.getByRole("button",{name:n})).toBeVisible()}}},E={args:{operator:"is none of",tone:"exclude"}},S={args:{field:"Case Type",operator:"is",value:"Warranty",operatorLocked:!0},play:async({args:e,canvasElement:a})=>{const n=l(a);o(n.queryByRole("button",{name:"is"})).not.toBeInTheDocument(),await c.click(n.getByText("is")),o(e.onOperatorClick).not.toHaveBeenCalled(),o(n.getByRole("button",{name:"Warranty"})).toBeVisible()}},C={render:e=>t.jsxs(I,{alignItems:"start",gap:"12",children:[t.jsx(m,{...e,field:"Customer",operator:"is",value:""}),t.jsx(m,{...e,field:"Stage",operator:"is any of",value:["Open","In progress"]}),t.jsx(m,{...e,field:"Entered On",operator:"is between",value:"Sep 1, 2026 – Sep 30, 2026"}),t.jsx(m,{...e,field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins","Mike Congdon","Taylor Wagen"]})]}),play:async({canvasElement:e})=>{const a=l(e),n="Brent Barton, David Atkins, Mike Congdon, Taylor Wagen";o(a.getByRole("button",{name:"…"})).toBeVisible(),o(a.getByRole("button",{name:"Open, In progress"})).toBeVisible();const s=a.getByRole("group",{name:`Assigned To is any of ${n}`});o(l(s).getByText("+2")).toBeVisible();const i=l(s).getByRole("button",{name:n});await c.hover(i);const r=await l(document.body).findByRole("tooltip");o(r).toHaveTextContent(n),await c.unhover(i)}},F={render:e=>t.jsx(m,{...e,field:"Case #",operator:"is",value:"",state:"editing",operatorLocked:!0,editor:t.jsx(d,{as:"input","aria-label":"Case number",placeholder:"type a number",size:14,h:"22",p:"0",bg:"transparent",borderWidth:"0",outline:"none",fontFamily:"body",fontSize:"body.sm",color:"text"})})},A={args:{disabled:!0},play:async({canvasElement:e})=>{const a=l(e);for(const n of a.getAllByRole("button"))o(n).toBeDisabled()}},O={args:{retainFocus:!0},render:e=>t.jsxs(I,{alignItems:"start",gap:"12",children:[t.jsx(d,{as:"input","aria-label":"Filter or search",placeholder:"Filter or search…",w:"xs",h:"28",px:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",bg:"surface",fontFamily:"body",fontSize:"body.sm",color:"text"}),t.jsx(m,{...e})]}),play:async({args:e,canvasElement:a})=>{const n=l(a),s=n.getByRole("textbox",{name:"Filter or search"});s.focus(),await b(()=>o(s).toHaveFocus()),await c.click(n.getByRole("button",{name:"Open, In progress"})),o(e.onValueClick).toHaveBeenCalledOnce(),o(s).toHaveFocus(),await c.click(n.getByRole("button",{name:/^Remove filter/})),o(e.onRemove).toHaveBeenCalledOnce(),o(s).toHaveFocus()}},Z=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:"Open, In progress",locked:!0},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],ot=()=>{const[e,a]=h.useState(Z),[n,s]=h.useState([]),i=r=>s(p=>p.includes(r)?p.filter(g=>g!==r):[...p,r]);return t.jsxs(I,{alignItems:"start",gap:"12",w:"xl",children:[t.jsx(Xe,{gap:"4",children:e.map(r=>{const p=n.includes(r.id);return t.jsx(m,{field:r.field,operator:r.operator,value:r.value,operatorLocked:r.locked,state:p?"removing":"applied",onValueClick:()=>p&&i(r.id),onOperatorClick:()=>p&&i(r.id),onRemove:()=>i(r.id)},r.id)})}),t.jsxs(D,{gap:"8",children:[t.jsx(X,{size:"sm",variant:"primary",disabled:n.length===0,onClick:()=>{a(r=>r.filter(p=>!n.includes(p.id))),s([])},children:`Apply (${n.length})`}),t.jsx(X,{size:"sm",variant:"ghost",onClick:()=>{a(Z),s([])},children:"Reset"})]})]})},V={args:{field:"Etapa",operator:"es",value:"Abierta"},render:e=>t.jsx(Ye,{labels:{removeFilter:a=>`Quitar filtro: ${a}`},children:t.jsxs(D,{gap:"8",children:[t.jsx(m,{...e}),t.jsx(m,{...e,removeLabel:"Quitar etapa"})]})}),play:async({canvasElement:e})=>{const a=l(e);o(a.getByRole("button",{name:"Quitar filtro: Etapa es Abierta"})).toBeVisible(),o(a.getByRole("button",{name:"Quitar etapa"})).toBeVisible()}},j={name:"Ex: Staged removal",render:()=>t.jsx(ot,{}),play:async({canvasElement:e})=>{const a=l(e),n=()=>a.getByRole("group",{name:"Stage is any of Open, In progress"}),s=i=>a.getByRole("button",{name:`Apply (${i})`});await c.click(l(n()).getByRole("button",{name:/^Remove filter/})),await b(()=>o(n()).toHaveAttribute("data-state","removing")),o(s(1)).toBeEnabled(),await c.click(l(n()).getByRole("button",{name:"Stage"})),await b(()=>o(n()).toHaveAttribute("data-state","applied")),o(s(0)).toBeDisabled(),await c.click(l(n()).getByRole("button",{name:/^Remove filter/})),await c.click(s(1)),await b(()=>o(a.queryByRole("group",{name:/^Stage/})).not.toBeInTheDocument()),await c.click(a.getByRole("button",{name:"Reset"})),await b(()=>o(n()).toBeVisible())}},mt=["Default","States","ExcludeTone","LockedOperator","ValueStates","EditingInPlace","Disabled","RetainFocus","TranslatedLabels","ExFilterRow"];var ee,te,ne;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('group', {
      name: 'Stage is any of Open, In progress'
    })).toBeVisible();

    // The field has no handler of its own, so it opens the value menu too.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Stage'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open, In progress'
    }));
    expect(args.onValueClick).toHaveBeenCalledTimes(2);
    await userEvent.click(canvas.getByRole('button', {
      name: 'is any of'
    }));
    expect(args.onOperatorClick).toHaveBeenCalledOnce();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove filter: Stage is any of Open, In progress'
    }));
    expect(args.onRemove).toHaveBeenCalledOnce();
  }
}`,...(ne=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      {STATES.map(({
      state,
      note
    }) => <HStack key={state} gap="16">
          <Box w="96">
            <Text textStyle="body.sm" fontWeight="medium">
              {state}
            </Text>
          </Box>
          <FilterToken {...args} state={state} data-testid={state} />
          <Text textStyle="body.sm" color="text.subtlest">
            {note}
          </Text>
        </HStack>)}
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const removeButton = /^Remove filter/;
    for (const {
      state
    } of STATES) {
      const token = within(canvas.getByTestId(state));
      if (state === 'removing') {
        // A removed token cannot be removed again. Its parts restore it.
        expect(token.queryByRole('button', {
          name: removeButton
        })).not.toBeInTheDocument();
        expect(token.getByRole('button', {
          name: 'Stage'
        })).toBeEnabled();
      } else {
        expect(token.getByRole('button', {
          name: removeButton
        })).toBeVisible();
      }
    }
  }
}`,...(se=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ie,le;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    operator: 'is none of',
    tone: 'exclude'
  }
}`,...(le=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,pe,ue;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    field: 'Case Type',
    operator: 'is',
    value: 'Warranty',
    operatorLocked: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The locked operator is text in the sentence, not a control.
    expect(canvas.queryByRole('button', {
      name: 'is'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByText('is'));
    expect(args.onOperatorClick).not.toHaveBeenCalled();
    expect(canvas.getByRole('button', {
      name: 'Warranty'
    })).toBeVisible();
  }
}`,...(ue=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,me,ve;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      <FilterToken {...args} field="Customer" operator="is" value="" />
      <FilterToken {...args} field="Stage" operator="is any of" value={['Open', 'In progress']} />
      <FilterToken {...args} field="Entered On" operator="is between" value="Sep 1, 2026 – Sep 30, 2026" />
      <FilterToken {...args} field="Assigned To" operator="is any of" value={['Brent Barton', 'David Atkins', 'Mike Congdon', 'Taylor Wagen']} />
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const fullList = 'Brent Barton, David Atkins, Mike Congdon, Taylor Wagen';

    // An empty value shows a placeholder.
    expect(canvas.getByRole('button', {
      name: '…'
    })).toBeVisible();

    // Two values fit, so no count shows.
    expect(canvas.getByRole('button', {
      name: 'Open, In progress'
    })).toBeVisible();

    // Four values show two names and +2. Screen readers get all four.
    const assigned = canvas.getByRole('group', {
      name: \`Assigned To is any of \${fullList}\`
    });
    expect(within(assigned).getByText('+2')).toBeVisible();
    const value = within(assigned).getByRole('button', {
      name: fullList
    });

    // The tooltip lists every value.
    await userEvent.hover(value);
    const tooltip = await within(document.body).findByRole('tooltip');
    expect(tooltip).toHaveTextContent(fullList);
    await userEvent.unhover(value);
  }
}`,...(ve=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var ge,ye,fe;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <FilterToken {...args} field="Case #" operator="is" value="" state="editing" operatorLocked editor={<Box as="input" aria-label="Case number" placeholder="type a number" size={14} h="22" p="0" bg="transparent" borderWidth="0" outline="none" fontFamily="body" fontSize="body.sm" color="text" />} />
}`,...(fe=(ye=F.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var be,he,ke;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const button of canvas.getAllByRole('button')) {
      expect(button).toBeDisabled();
    }
  }
}`,...(ke=(he=A.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var Be,xe,we;O.parameters={...O.parameters,docs:{...(Be=O.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    retainFocus: true
  },
  render: args => <VStack alignItems="start" gap="12">
      <Box as="input" aria-label="Filter or search" placeholder="Filter or search…" w="xs" h="28" px="8" borderWidth="1" borderColor="border" borderRadius="4" bg="surface" fontFamily="body" fontSize="body.sm" color="text" />
      <FilterToken {...args} />
    </VStack>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Filter or search'
    });
    input.focus();
    await waitFor(() => expect(input).toHaveFocus());

    // A click on a part runs its handler, and focus stays in the input.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open, In progress'
    }));
    expect(args.onValueClick).toHaveBeenCalledOnce();
    expect(input).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: /^Remove filter/
    }));
    expect(args.onRemove).toHaveBeenCalledOnce();
    expect(input).toHaveFocus();
  }
}`,...(we=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Te,Re,Ee;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    field: 'Etapa',
    operator: 'es',
    value: 'Abierta'
  },
  render: args => <LocaleProvider labels={{
    removeFilter: filter => \`Quitar filtro: \${filter}\`
  }}>
      <HStack gap="8">
        <FilterToken {...args} />
        <FilterToken {...args} removeLabel="Quitar etapa" />
      </HStack>
    </LocaleProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The provider label names the remove button. A removeLabel prop wins.
    expect(canvas.getByRole('button', {
      name: 'Quitar filtro: Etapa es Abierta'
    })).toBeVisible();
    expect(canvas.getByRole('button', {
      name: 'Quitar etapa'
    })).toBeVisible();
  }
}`,...(Ee=(Re=V.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Se,Ce,Fe;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Ex: Staged removal',
  render: () => <StagedRemovalDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const stage = () => canvas.getByRole('group', {
      name: 'Stage is any of Open, In progress'
    });
    const apply = (count: number) => canvas.getByRole('button', {
      name: \`Apply (\${count})\`
    });

    // Remove marks the token. It stays until Apply.
    await userEvent.click(within(stage()).getByRole('button', {
      name: /^Remove filter/
    }));
    await waitFor(() => expect(stage()).toHaveAttribute('data-state', 'removing'));
    expect(apply(1)).toBeEnabled();

    // A click on the removed token restores it.
    await userEvent.click(within(stage()).getByRole('button', {
      name: 'Stage'
    }));
    await waitFor(() => expect(stage()).toHaveAttribute('data-state', 'applied'));
    expect(apply(0)).toBeDisabled();

    // Remove again, then Apply drops it.
    await userEvent.click(within(stage()).getByRole('button', {
      name: /^Remove filter/
    }));
    await userEvent.click(apply(1));
    await waitFor(() => expect(canvas.queryByRole('group', {
      name: /^Stage/
    })).not.toBeInTheDocument());

    // Reset puts the story back for the visual snapshot.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(stage()).toBeVisible());
  }
}`,...(Fe=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};export{T as Default,A as Disabled,F as EditingInPlace,j as ExFilterRow,E as ExcludeTone,S as LockedOperator,O as RetainFocus,R as States,V as TranslatedLabels,C as ValueStates,mt as __namedExportsOrder,dt as default};
