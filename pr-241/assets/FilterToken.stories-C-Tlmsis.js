import{j as o,V as w,H as S,B as E,T as C,r as I,W as me}from"./iframe-B0PVt6Ra.js";import{L as ge}from"./LocaleProvider-_dzeMVg-.js";import"./useLocale-mzaJ8HDa.js";import{B as F}from"./Button-Ch15CBIu.js";import{F as p}from"./FilterToken-DTuKfs4Y.js";import"./preload-helper-BtVfDqlS.js";import"./Spinner-Cf1F2QW0.js";import"./FieldContext-BSVCIOh4.js";const{expect:a,fn:T,userEvent:i,waitFor:d,within:l}=__STORYBOOK_MODULE_TEST__,we={title:"Components/FilterToken",component:p,tags:["autodocs"],argTypes:{state:{control:"select",options:["applied","editing","pending","removing","armed"]},tone:{control:"select",options:["default","exclude"]},editor:{control:!1}},args:{field:"Stage",operator:"is any of",value:"Open, In progress",state:"applied",tone:"default",operatorLocked:!1,disabled:!1,onValueClick:T(),onOperatorClick:T(),onRemove:T()},parameters:{layout:"centered"}},m={play:async({args:t,canvasElement:n})=>{const e=l(n);a(e.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),await i.click(e.getByRole("button",{name:"Stage"})),await i.click(e.getByRole("button",{name:"Open, In progress"})),a(t.onValueClick).toHaveBeenCalledTimes(2),await i.click(e.getByRole("button",{name:"is any of"})),a(t.onOperatorClick).toHaveBeenCalledOnce(),await i.click(e.getByRole("button",{name:"Remove filter: Stage is any of Open, In progress"})),a(t.onRemove).toHaveBeenCalledOnce()}},O=[{state:"applied",note:"The results include this filter."},{state:"editing",note:"A menu for this token is open."},{state:"pending",note:"Added or changed. Waits for Apply."},{state:"removing",note:"Removed. Waits for Apply. Click to restore."},{state:"armed",note:"The next Backspace removes it."}],g={render:t=>o.jsx(w,{alignItems:"start",gap:"12",children:O.map(({state:n,note:e})=>o.jsxs(S,{gap:"16",children:[o.jsx(E,{w:"96",children:o.jsx(C,{textStyle:"body.sm",fontWeight:"medium",children:n})}),o.jsx(p,{...t,state:n,"data-testid":n}),o.jsx(C,{textStyle:"body.sm",color:"text.subtlest",children:e})]},n))}),play:async({canvasElement:t})=>{const n=l(t),e=/^Remove filter/;for(const{state:s}of O){const c=l(n.getByTestId(s));s==="removing"?(a(c.queryByRole("button",{name:e})).not.toBeInTheDocument(),a(c.getByRole("button",{name:"Stage"})).toBeEnabled()):a(c.getByRole("button",{name:e})).toBeVisible()}}},v={args:{operator:"is none of",tone:"exclude"}},y={args:{field:"Case Type",operator:"is",value:"Warranty",operatorLocked:!0},play:async({args:t,canvasElement:n})=>{const e=l(n);a(e.queryByRole("button",{name:"is"})).not.toBeInTheDocument(),await i.click(e.getByText("is")),a(t.onOperatorClick).not.toHaveBeenCalled(),a(e.getByRole("button",{name:"Warranty"})).toBeVisible()}},b={args:{field:"Part",operator:"is any of",value:["KIT-6001","KIT-6002"],joined:{operator:"or contains",value:"“water damage”"}},play:async({args:t,canvasElement:n})=>{const e=l(n);a(e.getByRole("group")).toHaveAccessibleName("Part is any of KIT-6001, KIT-6002 or contains “water damage”"),await i.click(e.getByRole("button",{name:"or contains"})),a(t.onOperatorClick).toHaveBeenCalledTimes(1),await i.click(e.getByRole("button",{name:"“water damage”"})),a(t.onValueClick).toHaveBeenCalledTimes(1)}},B={render:t=>o.jsxs(w,{alignItems:"start",gap:"12",children:[o.jsx(p,{...t,field:"Customer",operator:"is",value:""}),o.jsx(p,{...t,field:"Stage",operator:"is any of",value:["Open","In progress"]}),o.jsx(p,{...t,field:"Entered On",operator:"is between",value:"Sep 1, 2026 – Sep 30, 2026"}),o.jsx(p,{...t,field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins","Mike Congdon","Taylor Wagen"]})]}),play:async({canvasElement:t})=>{const n=l(t),e="Brent Barton, David Atkins, Mike Congdon, Taylor Wagen";a(n.getByRole("button",{name:"…"})).toBeVisible(),a(n.getByRole("button",{name:"Open, In progress"})).toBeVisible();const s=n.getByRole("group",{name:`Assigned To is any of ${e}`});a(l(s).getByText("+2")).toBeVisible();const c=l(s).getByRole("button",{name:e});await i.hover(c);const r=await l(document.body).findByRole("tooltip");a(r).toHaveTextContent(e),await i.unhover(c)}},f={render:t=>o.jsx(p,{...t,field:"Case #",operator:"is",value:"",state:"editing",operatorLocked:!0,editor:o.jsx(E,{as:"input","aria-label":"Case number",placeholder:"type a number",size:14,h:"22",p:"0",bg:"transparent",borderWidth:"0",outline:"none",fontFamily:"body",fontSize:"body.sm",color:"text"})})},x={args:{disabled:!0},play:async({canvasElement:t})=>{const n=l(t);for(const e of n.getAllByRole("button"))a(e).toBeDisabled()}},k={args:{retainFocus:!0},render:t=>o.jsxs(w,{alignItems:"start",gap:"12",children:[o.jsx(E,{as:"input","aria-label":"Filter or search",placeholder:"Filter or search…",w:"xs",h:"28",px:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",bg:"surface",fontFamily:"body",fontSize:"body.sm",color:"text"}),o.jsx(p,{...t})]}),play:async({args:t,canvasElement:n})=>{const e=l(n),s=e.getByRole("textbox",{name:"Filter or search"});s.focus(),await d(()=>a(s).toHaveFocus()),await i.click(e.getByRole("button",{name:"Open, In progress"})),a(t.onValueClick).toHaveBeenCalledOnce(),a(s).toHaveFocus(),await i.click(e.getByRole("button",{name:/^Remove filter/})),a(t.onRemove).toHaveBeenCalledOnce(),a(s).toHaveFocus()}},A=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:"Open, In progress",locked:!0},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],ve=()=>{const[t,n]=I.useState(A),[e,s]=I.useState([]),c=r=>s(u=>u.includes(r)?u.filter(de=>de!==r):[...u,r]);return o.jsxs(w,{alignItems:"start",gap:"12",w:"xl",children:[o.jsx(me,{gap:"4",children:t.map(r=>{const u=e.includes(r.id);return o.jsx(p,{field:r.field,operator:r.operator,value:r.value,operatorLocked:r.locked,state:u?"removing":"applied",onValueClick:()=>u&&c(r.id),onOperatorClick:()=>u&&c(r.id),onRemove:()=>c(r.id)},r.id)})}),o.jsxs(S,{gap:"8",children:[o.jsx(F,{size:"sm",variant:"primary",disabled:e.length===0,onClick:()=>{n(r=>r.filter(u=>!e.includes(u.id))),s([])},children:`Apply (${e.length})`}),o.jsx(F,{size:"sm",variant:"ghost",onClick:()=>{n(A),s([])},children:"Reset"})]})]})},R={args:{field:"Etapa",operator:"es",value:"Abierta"},render:t=>o.jsx(ge,{labels:{removeFilter:n=>`Quitar filtro: ${n}`},children:o.jsxs(S,{gap:"8",children:[o.jsx(p,{...t}),o.jsx(p,{...t,removeLabel:"Quitar etapa"})]})}),play:async({canvasElement:t})=>{const n=l(t);a(n.getByRole("button",{name:"Quitar filtro: Etapa es Abierta"})).toBeVisible(),a(n.getByRole("button",{name:"Quitar etapa"})).toBeVisible()}},h={name:"Ex: Staged removal",render:()=>o.jsx(ve,{}),play:async({canvasElement:t})=>{const n=l(t),e=()=>n.getByRole("group",{name:"Stage is any of Open, In progress"}),s=c=>n.getByRole("button",{name:`Apply (${c})`});await i.click(l(e()).getByRole("button",{name:/^Remove filter/})),await d(()=>a(e()).toHaveAttribute("data-state","removing")),a(s(1)).toBeEnabled(),await i.click(l(e()).getByRole("button",{name:"Stage"})),await d(()=>a(e()).toHaveAttribute("data-state","applied")),a(s(0)).toBeDisabled(),await i.click(l(e()).getByRole("button",{name:/^Remove filter/})),await i.click(s(1)),await d(()=>a(n.queryByRole("group",{name:/^Stage/})).not.toBeInTheDocument()),await i.click(n.getByRole("button",{name:"Reset"})),await d(()=>a(e()).toBeVisible())}},Te=["Default","States","ExcludeTone","LockedOperator","Joined","ValueStates","EditingInPlace","Disabled","RetainFocus","TranslatedLabels","ExFilterRow"];var H,V,j;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(V=m.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var D,L,W;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(L=g.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var P,K,z;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    operator: 'is none of',
    tone: 'exclude'
  }
}`,...(z=(K=v.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var Q,_,$;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(_=y.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var q,M,J;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    field: 'Part',
    operator: 'is any of',
    value: ['KIT-6001', 'KIT-6002'],
    joined: {
      operator: 'or contains',
      value: '“water damage”'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The sentence reads both operators and both values.
    expect(canvas.getByRole('group')).toHaveAccessibleName('Part is any of KIT-6001, KIT-6002 or contains “water damage”');

    // The joined parts open the same menus as the first ones.
    await userEvent.click(canvas.getByRole('button', {
      name: 'or contains'
    }));
    expect(args.onOperatorClick).toHaveBeenCalledTimes(1);
    await userEvent.click(canvas.getByRole('button', {
      name: '“water damage”'
    }));
    expect(args.onValueClick).toHaveBeenCalledTimes(1);
  }
}`,...(J=(M=b.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var N,U,Y;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Y=(U=B.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,X,Z;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <FilterToken {...args} field="Case #" operator="is" value="" state="editing" operatorLocked editor={<Box as="input" aria-label="Case number" placeholder="type a number" size={14} h="22" p="0" bg="transparent" borderWidth="0" outline="none" fontFamily="body" fontSize="body.sm" color="text" />} />
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ie,le;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,pe,ue;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};export{m as Default,x as Disabled,f as EditingInPlace,h as ExFilterRow,v as ExcludeTone,b as Joined,y as LockedOperator,k as RetainFocus,g as States,R as TranslatedLabels,B as ValueStates,Te as __namedExportsOrder,we as default};
