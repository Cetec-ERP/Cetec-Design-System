import{j as o,V as h,H as S,B as T,T as E,r as C,W as ce}from"./iframe-DeIVZF-T.js";import{L as pe}from"./LocaleProvider-Du6FlLOg.js";import"./useLocale-B6GOZQ3Z.js";import{B as F}from"./Button-BrPdHFVR.js";import{F as p}from"./FilterToken-D0RFbLtt.js";import"./preload-helper-Bx88jSaX.js";import"./Spinner-ChjQ5GVV.js";import"./FieldContext-BwsEk9z5.js";const{expect:a,fn:w,userEvent:l,waitFor:d,within:i}=__STORYBOOK_MODULE_TEST__,fe={title:"Components/FilterToken",component:p,tags:["autodocs"],argTypes:{state:{control:"select",options:["applied","editing","pending","removing","armed"]},tone:{control:"select",options:["default","exclude"]},editor:{control:!1}},args:{field:"Stage",operator:"is any of",value:"Open, In progress",state:"applied",tone:"default",operatorLocked:!1,disabled:!1,onValueClick:w(),onOperatorClick:w(),onRemove:w()},parameters:{layout:"centered"}},m={play:async({args:t,canvasElement:n})=>{const e=i(n);a(e.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),await l.click(e.getByRole("button",{name:"Stage"})),await l.click(e.getByRole("button",{name:"Open, In progress"})),a(t.onValueClick).toHaveBeenCalledTimes(2),await l.click(e.getByRole("button",{name:"is any of"})),a(t.onOperatorClick).toHaveBeenCalledOnce(),await l.click(e.getByRole("button",{name:"Remove filter: Stage is any of Open, In progress"})),a(t.onRemove).toHaveBeenCalledOnce()}},O=[{state:"applied",note:"The results include this filter."},{state:"editing",note:"A menu for this token is open."},{state:"pending",note:"Added or changed. Waits for Apply."},{state:"removing",note:"Removed. Waits for Apply. Click to restore."},{state:"armed",note:"The next Backspace removes it."}],g={render:t=>o.jsx(h,{alignItems:"start",gap:"12",children:O.map(({state:n,note:e})=>o.jsxs(S,{gap:"16",children:[o.jsx(T,{w:"96",children:o.jsx(E,{textStyle:"body.sm",fontWeight:"medium",children:n})}),o.jsx(p,{...t,state:n,"data-testid":n}),o.jsx(E,{textStyle:"body.sm",color:"text.subtlest",children:e})]},n))}),play:async({canvasElement:t})=>{const n=i(t),e=/^Remove filter/;for(const{state:s}of O){const c=i(n.getByTestId(s));s==="removing"?(a(c.queryByRole("button",{name:e})).not.toBeInTheDocument(),a(c.getByRole("button",{name:"Stage"})).toBeEnabled()):a(c.getByRole("button",{name:e})).toBeVisible()}}},v={args:{operator:"is none of",tone:"exclude"}},y={args:{field:"Case Type",operator:"is",value:"Warranty",operatorLocked:!0},play:async({args:t,canvasElement:n})=>{const e=i(n);a(e.queryByRole("button",{name:"is"})).not.toBeInTheDocument(),await l.click(e.getByText("is")),a(t.onOperatorClick).not.toHaveBeenCalled(),a(e.getByRole("button",{name:"Warranty"})).toBeVisible()}},b={render:t=>o.jsxs(h,{alignItems:"start",gap:"12",children:[o.jsx(p,{...t,field:"Customer",operator:"is",value:""}),o.jsx(p,{...t,field:"Stage",operator:"is any of",value:["Open","In progress"]}),o.jsx(p,{...t,field:"Entered On",operator:"is between",value:"Sep 1, 2026 – Sep 30, 2026"}),o.jsx(p,{...t,field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins","Mike Congdon","Taylor Wagen"]})]}),play:async({canvasElement:t})=>{const n=i(t),e="Brent Barton, David Atkins, Mike Congdon, Taylor Wagen";a(n.getByRole("button",{name:"…"})).toBeVisible(),a(n.getByRole("button",{name:"Open, In progress"})).toBeVisible();const s=n.getByRole("group",{name:`Assigned To is any of ${e}`});a(i(s).getByText("+2")).toBeVisible();const c=i(s).getByRole("button",{name:e});await l.hover(c);const r=await i(document.body).findByRole("tooltip");a(r).toHaveTextContent(e),await l.unhover(c)}},B={render:t=>o.jsx(p,{...t,field:"Case #",operator:"is",value:"",state:"editing",operatorLocked:!0,editor:o.jsx(T,{as:"input","aria-label":"Case number",placeholder:"type a number",size:14,h:"22",p:"0",bg:"transparent",borderWidth:"0",outline:"none",fontFamily:"body",fontSize:"body.sm",color:"text"})})},x={args:{disabled:!0},play:async({canvasElement:t})=>{const n=i(t);for(const e of n.getAllByRole("button"))a(e).toBeDisabled()}},f={args:{retainFocus:!0},render:t=>o.jsxs(h,{alignItems:"start",gap:"12",children:[o.jsx(T,{as:"input","aria-label":"Filter or search",placeholder:"Filter or search…",w:"xs",h:"28",px:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",bg:"surface",fontFamily:"body",fontSize:"body.sm",color:"text"}),o.jsx(p,{...t})]}),play:async({args:t,canvasElement:n})=>{const e=i(n),s=e.getByRole("textbox",{name:"Filter or search"});s.focus(),await d(()=>a(s).toHaveFocus()),await l.click(e.getByRole("button",{name:"Open, In progress"})),a(t.onValueClick).toHaveBeenCalledOnce(),a(s).toHaveFocus(),await l.click(e.getByRole("button",{name:/^Remove filter/})),a(t.onRemove).toHaveBeenCalledOnce(),a(s).toHaveFocus()}},A=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:"Open, In progress",locked:!0},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],ue=()=>{const[t,n]=C.useState(A),[e,s]=C.useState([]),c=r=>s(u=>u.includes(r)?u.filter(le=>le!==r):[...u,r]);return o.jsxs(h,{alignItems:"start",gap:"12",w:"xl",children:[o.jsx(ce,{gap:"4",children:t.map(r=>{const u=e.includes(r.id);return o.jsx(p,{field:r.field,operator:r.operator,value:r.value,operatorLocked:r.locked,state:u?"removing":"applied",onValueClick:()=>u&&c(r.id),onOperatorClick:()=>u&&c(r.id),onRemove:()=>c(r.id)},r.id)})}),o.jsxs(S,{gap:"8",children:[o.jsx(F,{size:"sm",variant:"primary",disabled:e.length===0,onClick:()=>{n(r=>r.filter(u=>!e.includes(u.id))),s([])},children:`Apply (${e.length})`}),o.jsx(F,{size:"sm",variant:"ghost",onClick:()=>{n(A),s([])},children:"Reset"})]})]})},k={args:{field:"Etapa",operator:"es",value:"Abierta"},render:t=>o.jsx(pe,{labels:{removeFilter:n=>`Quitar filtro: ${n}`},children:o.jsxs(S,{gap:"8",children:[o.jsx(p,{...t}),o.jsx(p,{...t,removeLabel:"Quitar etapa"})]})}),play:async({canvasElement:t})=>{const n=i(t);a(n.getByRole("button",{name:"Quitar filtro: Etapa es Abierta"})).toBeVisible(),a(n.getByRole("button",{name:"Quitar etapa"})).toBeVisible()}},R={name:"Ex: Staged removal",render:()=>o.jsx(ue,{}),play:async({canvasElement:t})=>{const n=i(t),e=()=>n.getByRole("group",{name:"Stage is any of Open, In progress"}),s=c=>n.getByRole("button",{name:`Apply (${c})`});await l.click(i(e()).getByRole("button",{name:/^Remove filter/})),await d(()=>a(e()).toHaveAttribute("data-state","removing")),a(s(1)).toBeEnabled(),await l.click(i(e()).getByRole("button",{name:"Stage"})),await d(()=>a(e()).toHaveAttribute("data-state","applied")),a(s(0)).toBeDisabled(),await l.click(i(e()).getByRole("button",{name:/^Remove filter/})),await l.click(s(1)),await d(()=>a(n.queryByRole("group",{name:/^Stage/})).not.toBeInTheDocument()),await l.click(n.getByRole("button",{name:"Reset"})),await d(()=>a(e()).toBeVisible())}},ke=["Default","States","ExcludeTone","LockedOperator","ValueStates","EditingInPlace","Disabled","RetainFocus","TranslatedLabels","ExFilterRow"];var I,V,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(V=m.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var j,L,D;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(L=g.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var W,z,Q;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    operator: 'is none of',
    tone: 'exclude'
  }
}`,...(Q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var _,P,$;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(P=y.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var q,M,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(M=b.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var U,Y,G;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <FilterToken {...args} field="Case #" operator="is" value="" state="editing" operatorLocked editor={<Box as="input" aria-label="Case number" placeholder="type a number" size={14} h="22" p="0" bg="transparent" borderWidth="0" outline="none" fontFamily="body" fontSize="body.sm" color="text" />} />
}`,...(G=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,N,X;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(N=x.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var Z,ee,te;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ie;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};export{m as Default,x as Disabled,B as EditingInPlace,R as ExFilterRow,v as ExcludeTone,y as LockedOperator,f as RetainFocus,g as States,k as TranslatedLabels,b as ValueStates,ke as __namedExportsOrder,fe as default};
