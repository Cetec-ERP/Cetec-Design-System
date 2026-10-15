import{m as _e,e as Me,f as De,g as qe,h as We,s as Ne,j as t,B as d,c as h,d as Pe,i as $e,a as ze,V as A,H as L,T as z,r as Q,W as Qe}from"./iframe-DXu0nSdR.js";import{L as Ke}from"./LocaleProvider-BSqNSoyK.js";import{u as Ue}from"./useLocale-CO49e_FJ.js";import{B as K}from"./Button-SNWLL-ci.js";import"./preload-helper-C22nMbeH.js";import"./Spinner-BAl7OL5W.js";import"./FieldContext-Cx4JBWqi.js";const Ce={},Xe=[],Ye=[["root","filterToken__root"],["part","filterToken__part"],["field","filterToken__field"],["operator","filterToken__operator"],["value","filterToken__value"],["valueText","filterToken__valueText"],["count","filterToken__count"],["editor","filterToken__editor"],["remove","filterToken__remove"]],Ge=Ye.map(([e,a])=>[e,qe(a,Ce,We(Xe,e))]),Je=_e((e={})=>Object.fromEntries(Ge.map(([a,n])=>[a,n.recipeFn(e)]))),U=[],Ze=e=>({...Ce,...Me(e)}),et=Object.assign(Je,{__recipe__:!1,__name__:"filterToken",raw:e=>e,classNameMap:{},variantKeys:U,variantMap:{},splitVariantProps(e){return De(e,U)},getVariantProps:Ze}),X=2,m=e=>{const{field:a,operator:n,value:s,state:i="applied",tone:r="default",operatorLocked:p,editor:g,disabled:O,retainFocus:Fe,onFieldClick:Ae,onOperatorClick:Oe,onValueClick:H,onRemove:_,removeLabel:Ve,...je}=e,[Ie,Le]=Ne(je),u=et(),{labels:He}=Ue(),y=Array.isArray(s)?s:void 0,V=Array.isArray(s)?s.join(", "):s,f=y?Math.max(0,y.length-X):0,M=y?y.slice(0,X).join(", "):s,D=[a,n,V].filter(Boolean).join(" "),q=Fe?b=>b.preventDefault():void 0,j=(b,N,P,$)=>P?t.jsx(d,{as:"button",type:"button",className:h(u.part,b),disabled:O,onMouseDown:q,onClick:P,...$,children:N}):t.jsx(d,{as:"span",className:h(u.part,b),...$,children:N}),W=t.jsxs(t.Fragment,{children:[t.jsx(d,{as:"span",className:u.valueText,"aria-hidden":f>0||void 0,children:M||"…"}),f>0&&t.jsxs(t.Fragment,{children:[t.jsx(d,{as:"span",className:u.count,"aria-hidden":!0,children:`+${f}`}),t.jsx(d,{as:"span",srOnly:!0,children:V})]})]});return t.jsxs(d,{...Pe("FilterToken"),as:"span",role:"group","aria-label":D,className:h(u.root,Ie),"data-state":i,"data-tone":r,"data-disabled":O||void 0,...Le,children:[j(u.field,a,Ae??H),j(u.operator,n,p?void 0:Oe,p?{"data-locked":!0}:void 0),g!==void 0?t.jsxs(d,{as:"span",className:h(u.part,u.editor),children:[M&&t.jsx(d,{as:"span",className:u.value,children:W}),g]}):s!==void 0&&t.jsx($e,{text:V??"",disabled:f===0,children:j(u.value,W,H)}),_&&i!=="removing"&&t.jsx(d,{as:"button",type:"button",className:u.remove,"aria-label":Ve??He.removeFilter(D),disabled:O,onMouseDown:q,onClick:_,children:t.jsx(ze,{name:"x",size:"16","aria-hidden":!0})})]})};m.__docgenInfo={description:`One filter in a filter field, read as a sentence: field, operator, value.

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
every item. Overflow is decided by item count, not by width. An empty
string or list shows "…" for a filter that has no value yet. Omit it for
an operator that takes no value, such as "is empty".`},state:{required:!1,tsType:{name:"union",raw:`| 'applied'
| 'editing'
| 'pending'
| 'removing'
| 'armed'`,elements:[{name:"literal",value:"'applied'"},{name:"literal",value:"'editing'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'removing'"},{name:"literal",value:"'armed'"}]},description:'@default "applied"'},tone:{required:!1,tsType:{name:"union",raw:"'default' | 'exclude'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'exclude'"}]},description:'@default "default"'},operatorLocked:{required:!1,tsType:{name:"boolean"},description:`Renders the operator as text, not as a button. Use it when the field
supports only one operator.`},editor:{required:!1,tsType:{name:"ReactNode"},description:`Content that replaces the value button while the token is edited in
place, usually a text input. The value text stays before it.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables every part of the token."},retainFocus:{required:!1,tsType:{name:"boolean"},description:`Keeps focus where it is when a part is clicked with a pointer. A filter
field sets this so focus stays in its input, as in a combobox.`},onFieldClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Runs when the field part is clicked. Falls back to `onValueClick` when\nabsent, because the field and the value both open the value menu."},onOperatorClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Runs when the operator part is clicked. Not called when `operatorLocked` is true."},onValueClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Runs when the value part is clicked."},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Runs when the remove button is clicked. The button is not shown when this\nis absent or when `state` is `removing`."},removeLabel:{required:!1,tsType:{name:"string"},description:"Accessible name for the remove button.\n@default `labels.removeFilter` (English: `Remove filter: ${field} ${operator} ${values}`), with every value"}}};const{expect:o,fn:I,userEvent:c,waitFor:v,within:l}=__STORYBOOK_MODULE_TEST__,ct={title:"Components/FilterToken",component:m,tags:["autodocs"],argTypes:{state:{control:"select",options:["applied","editing","pending","removing","armed"]},tone:{control:"select",options:["default","exclude"]},editor:{control:!1}},args:{field:"Stage",operator:"is any of",value:"Open, In progress",state:"applied",tone:"default",operatorLocked:!1,disabled:!1,onValueClick:I(),onOperatorClick:I(),onRemove:I()},parameters:{layout:"centered"}},k={play:async({args:e,canvasElement:a})=>{const n=l(a);o(n.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),await c.click(n.getByRole("button",{name:"Stage"})),await c.click(n.getByRole("button",{name:"Open, In progress"})),o(e.onValueClick).toHaveBeenCalledTimes(2),await c.click(n.getByRole("button",{name:"is any of"})),o(e.onOperatorClick).toHaveBeenCalledOnce(),await c.click(n.getByRole("button",{name:"Remove filter: Stage is any of Open, In progress"})),o(e.onRemove).toHaveBeenCalledOnce()}},Y=[{state:"applied",note:"The results include this filter."},{state:"editing",note:"A menu for this token is open."},{state:"pending",note:"Added or changed. Waits for Apply."},{state:"removing",note:"Removed. Waits for Apply. Click to restore."},{state:"armed",note:"The next Backspace removes it."}],B={render:e=>t.jsx(A,{alignItems:"start",gap:"12",children:Y.map(({state:a,note:n})=>t.jsxs(L,{gap:"16",children:[t.jsx(d,{w:"96",children:t.jsx(z,{textStyle:"body.sm",fontWeight:"medium",children:a})}),t.jsx(m,{...e,state:a,"data-testid":a}),t.jsx(z,{textStyle:"body.sm",color:"text.subtlest",children:n})]},a))}),play:async({canvasElement:e})=>{const a=l(e),n=/^Remove filter/;for(const{state:s}of Y){const i=l(a.getByTestId(s));s==="removing"?(o(i.queryByRole("button",{name:n})).not.toBeInTheDocument(),o(i.getByRole("button",{name:"Stage"})).toBeEnabled()):o(i.getByRole("button",{name:n})).toBeVisible()}}},x={args:{operator:"is none of",tone:"exclude"}},w={args:{field:"Case Type",operator:"is",value:"Warranty",operatorLocked:!0},play:async({args:e,canvasElement:a})=>{const n=l(a);o(n.queryByRole("button",{name:"is"})).not.toBeInTheDocument(),await c.click(n.getByText("is")),o(e.onOperatorClick).not.toHaveBeenCalled(),o(n.getByRole("button",{name:"Warranty"})).toBeVisible()}},T={render:e=>t.jsxs(A,{alignItems:"start",gap:"12",children:[t.jsx(m,{...e,field:"Customer",operator:"is",value:""}),t.jsx(m,{...e,field:"Stage",operator:"is any of",value:["Open","In progress"]}),t.jsx(m,{...e,field:"Entered On",operator:"is between",value:"Sep 1, 2026 – Sep 30, 2026"}),t.jsx(m,{...e,field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins","Mike Congdon","Taylor Wagen"]})]}),play:async({canvasElement:e})=>{const a=l(e),n="Brent Barton, David Atkins, Mike Congdon, Taylor Wagen";o(a.getByRole("button",{name:"…"})).toBeVisible(),o(a.getByRole("button",{name:"Open, In progress"})).toBeVisible();const s=a.getByRole("group",{name:`Assigned To is any of ${n}`});o(l(s).getByText("+2")).toBeVisible();const i=l(s).getByRole("button",{name:n});await c.hover(i);const r=await l(document.body).findByRole("tooltip");o(r).toHaveTextContent(n),await c.unhover(i)}},R={render:e=>t.jsx(m,{...e,field:"Case #",operator:"is",value:"",state:"editing",operatorLocked:!0,editor:t.jsx(d,{as:"input","aria-label":"Case number",placeholder:"type a number",size:14,h:"22",p:"0",bg:"transparent",borderWidth:"0",outline:"none",fontFamily:"body",fontSize:"body.sm",color:"text"})})},E={args:{disabled:!0},play:async({canvasElement:e})=>{const a=l(e);for(const n of a.getAllByRole("button"))o(n).toBeDisabled()}},S={args:{retainFocus:!0},render:e=>t.jsxs(A,{alignItems:"start",gap:"12",children:[t.jsx(d,{as:"input","aria-label":"Filter or search",placeholder:"Filter or search…",w:"xs",h:"28",px:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",bg:"surface",fontFamily:"body",fontSize:"body.sm",color:"text"}),t.jsx(m,{...e})]}),play:async({args:e,canvasElement:a})=>{const n=l(a),s=n.getByRole("textbox",{name:"Filter or search"});s.focus(),await v(()=>o(s).toHaveFocus()),await c.click(n.getByRole("button",{name:"Open, In progress"})),o(e.onValueClick).toHaveBeenCalledOnce(),o(s).toHaveFocus(),await c.click(n.getByRole("button",{name:/^Remove filter/})),o(e.onRemove).toHaveBeenCalledOnce(),o(s).toHaveFocus()}},G=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:"Open, In progress",locked:!0},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],tt=()=>{const[e,a]=Q.useState(G),[n,s]=Q.useState([]),i=r=>s(p=>p.includes(r)?p.filter(g=>g!==r):[...p,r]);return t.jsxs(A,{alignItems:"start",gap:"12",w:"xl",children:[t.jsx(Qe,{gap:"4",children:e.map(r=>{const p=n.includes(r.id);return t.jsx(m,{field:r.field,operator:r.operator,value:r.value,operatorLocked:r.locked,state:p?"removing":"applied",onValueClick:()=>p&&i(r.id),onOperatorClick:()=>p&&i(r.id),onRemove:()=>i(r.id)},r.id)})}),t.jsxs(L,{gap:"8",children:[t.jsx(K,{size:"sm",variant:"primary",disabled:n.length===0,onClick:()=>{a(r=>r.filter(p=>!n.includes(p.id))),s([])},children:`Apply (${n.length})`}),t.jsx(K,{size:"sm",variant:"ghost",onClick:()=>{a(G),s([])},children:"Reset"})]})]})},C={args:{field:"Etapa",operator:"es",value:"Abierta"},render:e=>t.jsx(Ke,{labels:{removeFilter:a=>`Quitar filtro: ${a}`},children:t.jsxs(L,{gap:"8",children:[t.jsx(m,{...e}),t.jsx(m,{...e,removeLabel:"Quitar etapa"})]})}),play:async({canvasElement:e})=>{const a=l(e);o(a.getByRole("button",{name:"Quitar filtro: Etapa es Abierta"})).toBeVisible(),o(a.getByRole("button",{name:"Quitar etapa"})).toBeVisible()}},F={name:"Ex: Staged removal",render:()=>t.jsx(tt,{}),play:async({canvasElement:e})=>{const a=l(e),n=()=>a.getByRole("group",{name:"Stage is any of Open, In progress"}),s=i=>a.getByRole("button",{name:`Apply (${i})`});await c.click(l(n()).getByRole("button",{name:/^Remove filter/})),await v(()=>o(n()).toHaveAttribute("data-state","removing")),o(s(1)).toBeEnabled(),await c.click(l(n()).getByRole("button",{name:"Stage"})),await v(()=>o(n()).toHaveAttribute("data-state","applied")),o(s(0)).toBeDisabled(),await c.click(l(n()).getByRole("button",{name:/^Remove filter/})),await c.click(s(1)),await v(()=>o(a.queryByRole("group",{name:/^Stage/})).not.toBeInTheDocument()),await c.click(a.getByRole("button",{name:"Reset"})),await v(()=>o(n()).toBeVisible())}},pt=["Default","States","ExcludeTone","LockedOperator","ValueStates","EditingInPlace","Disabled","RetainFocus","TranslatedLabels","ExFilterRow"];var J,Z,ee;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,re;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    operator: 'is none of',
    tone: 'exclude'
  }
}`,...(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,ce;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,ue,de;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ve,ge;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <FilterToken {...args} field="Case #" operator="is" value="" state="editing" operatorLocked editor={<Box as="input" aria-label="Case number" placeholder="type a number" size={14} h="22" p="0" bg="transparent" borderWidth="0" outline="none" fontFamily="body" fontSize="body.sm" color="text" />} />
}`,...(ge=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var ye,fe,be;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var he,ke,Be;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Be=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var xe,we,Te;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Te=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Re,Ee,Se;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Se=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};export{k as Default,E as Disabled,R as EditingInPlace,F as ExFilterRow,x as ExcludeTone,w as LockedOperator,S as RetainFocus,B as States,C as TranslatedLabels,T as ValueStates,pt as __namedExportsOrder,ct as default};
