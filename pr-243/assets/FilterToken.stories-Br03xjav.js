import{j as o,V as m,H as E,B as S,T as I,r as j,W as be}from"./iframe-DHbnlgy0.js";import{L as Be}from"./LocaleProvider-CRcb4CGB.js";import"./useLocale-DAUAj4Kn.js";import{B as F}from"./Button-_LtwbxuN.js";import{F as p}from"./FilterToken-pPM2e__K.js";import"./preload-helper-DCXCruOF.js";import"./Spinner-Bl__mCXj.js";import"./FieldContext-BlD0TYsJ.js";const{expect:a,fn:C,userEvent:l,waitFor:d,within:s}=__STORYBOOK_MODULE_TEST__,Ee={title:"Components/FilterToken",component:p,tags:["autodocs"],argTypes:{state:{control:"select",options:["applied","editing","pending","removing","armed"]},tone:{control:"select",options:["default","exclude"]},editor:{control:!1}},args:{field:"Stage",operator:"is any of",value:"Open, In progress",state:"applied",tone:"default",operatorLocked:!1,disabled:!1,onValueClick:C(),onOperatorClick:C(),onRemove:C()},parameters:{layout:"centered"}},g={play:async({args:e,canvasElement:n})=>{const t=s(n);a(t.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),await l.click(t.getByRole("button",{name:"Stage"})),await l.click(t.getByRole("button",{name:"Open, In progress"})),a(e.onValueClick).toHaveBeenCalledTimes(2),await l.click(t.getByRole("button",{name:"is any of"})),a(e.onOperatorClick).toHaveBeenCalledOnce(),await l.click(t.getByRole("button",{name:"Remove filter: Stage is any of Open, In progress"})),a(e.onRemove).toHaveBeenCalledOnce()}},V=[{state:"applied",note:"The results include this filter."},{state:"editing",note:"A menu for this token is open."},{state:"pending",note:"Added or changed. Waits for Apply."},{state:"removing",note:"Removed. Waits for Apply. Click to restore."},{state:"armed",note:"The next Backspace removes it."}],v={render:e=>o.jsx(m,{alignItems:"start",gap:"12",children:V.map(({state:n,note:t})=>o.jsxs(E,{gap:"16",children:[o.jsx(S,{w:"96",children:o.jsx(I,{textStyle:"body.sm",fontWeight:"medium",children:n})}),o.jsx(p,{...e,state:n,"data-testid":n}),o.jsx(I,{textStyle:"body.sm",color:"text.subtlest",children:t})]},n))}),play:async({canvasElement:e})=>{const n=s(e),t=/^Remove filter/;for(const{state:r}of V){const c=s(n.getByTestId(r));r==="removing"?(a(c.queryByRole("button",{name:t})).not.toBeInTheDocument(),a(c.getByRole("button",{name:"Stage"})).toBeEnabled()):a(c.getByRole("button",{name:t})).toBeVisible()}}},y={args:{operator:"is none of",tone:"exclude"}},b={args:{field:"Case Type",operator:"is",value:"Warranty",operatorLocked:!0},play:async({args:e,canvasElement:n})=>{const t=s(n);a(t.queryByRole("button",{name:"is"})).not.toBeInTheDocument(),await l.click(t.getByText("is")),a(e.onOperatorClick).not.toHaveBeenCalled(),a(t.getByRole("button",{name:"Warranty"})).toBeVisible()}},B={args:{field:"Part",operator:"is any of",value:["KIT-6001","KIT-6002"],joined:{operator:"or contains",value:"“water damage”"}},play:async({args:e,canvasElement:n})=>{const t=s(n);a(t.getByRole("group")).toHaveAccessibleName("Part is any of KIT-6001, KIT-6002 or contains “water damage”"),await l.click(t.getByRole("button",{name:"or contains"})),a(e.onOperatorClick).toHaveBeenCalledTimes(1),await l.click(t.getByRole("button",{name:"“water damage”"})),a(e.onValueClick).toHaveBeenCalledTimes(1)}},h={render:e=>o.jsxs(m,{alignItems:"start",gap:"12",children:[o.jsx(p,{...e,field:"Part",operator:"contains",value:void 0,joined:{operator:"or contains",value:"“hinge”"}}),o.jsx(p,{...e,field:"Description",operator:"is",value:"KIT-6001",joined:{operator:"or contains",value:"“install kit for a base cabinet with water damage repair parts”"}}),o.jsx(p,{...e,field:"Customer",operator:"is",value:"Acme",joined:{operator:"or contains",value:"“west”"},state:"editing",editor:o.jsx(S,{as:"input","aria-label":"Customer",size:8,h:"22",p:"0",bg:"transparent",borderWidth:"0",outline:"none",fontFamily:"body",fontSize:"body.sm",color:"text"})})]}),play:async({canvasElement:e})=>{const n=s(e),t=n.getByRole("group",{name:"Part contains or contains “hinge”"});a(s(t).getByRole("button",{name:"“hinge”"})).toBeVisible();const r="“install kit for a base cabinet with water damage repair parts”",c=n.getByRole("button",{name:r});await d(()=>a(c.getBoundingClientRect().width).toBeLessThan(260)),await l.hover(c);const i=await s(document.body).findByRole("tooltip");a(i).toHaveTextContent(r),await l.unhover(c);const u=n.getByRole("group",{name:"Customer is Acme or contains “west”"});a(s(u).queryByRole("button",{name:"or contains"})).not.toBeInTheDocument(),a(s(u).queryByRole("button",{name:"“west”"})).not.toBeInTheDocument(),a(s(u).getByText("“west”")).toBeVisible()}},f={render:e=>o.jsxs(m,{alignItems:"start",gap:"12",children:[o.jsx(p,{...e,field:"Customer",operator:"is",value:""}),o.jsx(p,{...e,field:"Stage",operator:"is any of",value:["Open","In progress"]}),o.jsx(p,{...e,field:"Entered On",operator:"is between",value:"Sep 1, 2026 – Sep 30, 2026"}),o.jsx(p,{...e,field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins","Mike Congdon","Taylor Wagen"]})]}),play:async({canvasElement:e})=>{const n=s(e),t="Brent Barton, David Atkins, Mike Congdon, Taylor Wagen";a(n.getByRole("button",{name:"…"})).toBeVisible(),a(n.getByRole("button",{name:"Open, In progress"})).toBeVisible();const r=n.getByRole("group",{name:`Assigned To is any of ${t}`});a(s(r).getByText("+2")).toBeVisible();const c=s(r).getByRole("button",{name:t});await l.hover(c);const i=await s(document.body).findByRole("tooltip");a(i).toHaveTextContent(t),await l.unhover(c)}},x={render:e=>o.jsx(p,{...e,field:"Case #",operator:"is",value:"",state:"editing",operatorLocked:!0,editor:o.jsx(S,{as:"input","aria-label":"Case number",placeholder:"type a number",size:14,h:"22",p:"0",bg:"transparent",borderWidth:"0",outline:"none",fontFamily:"body",fontSize:"body.sm",color:"text"})})},w={args:{disabled:!0},play:async({canvasElement:e})=>{const n=s(e);for(const t of n.getAllByRole("button"))a(t).toBeDisabled()}},k={args:{retainFocus:!0},render:e=>o.jsxs(m,{alignItems:"start",gap:"12",children:[o.jsx(S,{as:"input","aria-label":"Filter or search",placeholder:"Filter or search…",w:"xs",h:"28",px:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",bg:"surface",fontFamily:"body",fontSize:"body.sm",color:"text"}),o.jsx(p,{...e})]}),play:async({args:e,canvasElement:n})=>{const t=s(n),r=t.getByRole("textbox",{name:"Filter or search"});r.focus(),await d(()=>a(r).toHaveFocus()),await l.click(t.getByRole("button",{name:"Open, In progress"})),a(e.onValueClick).toHaveBeenCalledOnce(),a(r).toHaveFocus(),await l.click(t.getByRole("button",{name:/^Remove filter/})),a(e.onRemove).toHaveBeenCalledOnce(),a(r).toHaveFocus()}},A=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:"Open, In progress",locked:!0},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],he=()=>{const[e,n]=j.useState(A),[t,r]=j.useState([]),c=i=>r(u=>u.includes(i)?u.filter(ye=>ye!==i):[...u,i]);return o.jsxs(m,{alignItems:"start",gap:"12",w:"xl",children:[o.jsx(be,{gap:"4",children:e.map(i=>{const u=t.includes(i.id);return o.jsx(p,{field:i.field,operator:i.operator,value:i.value,operatorLocked:i.locked,state:u?"removing":"applied",onValueClick:()=>u&&c(i.id),onOperatorClick:()=>u&&c(i.id),onRemove:()=>c(i.id)},i.id)})}),o.jsxs(E,{gap:"8",children:[o.jsx(F,{size:"sm",variant:"primary",disabled:t.length===0,onClick:()=>{n(i=>i.filter(u=>!t.includes(u.id))),r([])},children:`Apply (${t.length})`}),o.jsx(F,{size:"sm",variant:"ghost",onClick:()=>{n(A),r([])},children:"Reset"})]})]})},R={args:{field:"Etapa",operator:"es",value:"Abierta"},render:e=>o.jsx(Be,{labels:{removeFilter:n=>`Quitar filtro: ${n}`},children:o.jsxs(E,{gap:"8",children:[o.jsx(p,{...e}),o.jsx(p,{...e,removeLabel:"Quitar etapa"})]})}),play:async({canvasElement:e})=>{const n=s(e);a(n.getByRole("button",{name:"Quitar filtro: Etapa es Abierta"})).toBeVisible(),a(n.getByRole("button",{name:"Quitar etapa"})).toBeVisible()}},T={name:"Ex: Staged removal",render:()=>o.jsx(he,{}),play:async({canvasElement:e})=>{const n=s(e),t=()=>n.getByRole("group",{name:"Stage is any of Open, In progress"}),r=c=>n.getByRole("button",{name:`Apply (${c})`});await l.click(s(t()).getByRole("button",{name:/^Remove filter/})),await d(()=>a(t()).toHaveAttribute("data-state","removing")),a(r(1)).toBeEnabled(),await l.click(s(t()).getByRole("button",{name:"Stage"})),await d(()=>a(t()).toHaveAttribute("data-state","applied")),a(r(0)).toBeDisabled(),await l.click(s(t()).getByRole("button",{name:/^Remove filter/})),await l.click(r(1)),await d(()=>a(n.queryByRole("group",{name:/^Stage/})).not.toBeInTheDocument()),await l.click(n.getByRole("button",{name:"Reset"})),await d(()=>a(t()).toBeVisible())}},Ie=["Default","States","ExcludeTone","LockedOperator","Joined","JoinedStates","ValueStates","EditingInPlace","Disabled","RetainFocus","TranslatedLabels","ExFilterRow"];var O,D,H;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var L,W,P;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(W=v.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var z,K,q;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    operator: 'is none of',
    tone: 'exclude'
  }
}`,...(q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var Q,_,$;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(_=b.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var M,J,N;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(J=B.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var U,Y,G;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      <FilterToken {...args} field="Part" operator="contains" value={undefined} joined={{
      operator: 'or contains',
      value: '“hinge”'
    }} />
      <FilterToken {...args} field="Description" operator="is" value="KIT-6001" joined={{
      operator: 'or contains',
      value: '“install kit for a base cabinet with water damage repair parts”'
    }} />
      <FilterToken {...args} field="Customer" operator="is" value="Acme" joined={{
      operator: 'or contains',
      value: '“west”'
    }} state="editing" editor={<Box as="input" aria-label="Customer" size={8} h="22" p="0" bg="transparent" borderWidth="0" outline="none" fontFamily="body" fontSize="body.sm" color="text" />} />
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The joined part shows even when the first value is not set.
    const part = canvas.getByRole('group', {
      name: 'Part contains or contains “hinge”'
    });
    expect(within(part).getByRole('button', {
      name: '“hinge”'
    })).toBeVisible();

    // A long joined value truncates and gets a tooltip, like the first value.
    const long = '“install kit for a base cabinet with water damage repair parts”';
    const joinedValue = canvas.getByRole('button', {
      name: long
    });
    await waitFor(() => expect(joinedValue.getBoundingClientRect().width).toBeLessThan(260));
    await userEvent.hover(joinedValue);
    const tooltip = await within(document.body).findByRole('tooltip');
    expect(tooltip).toHaveTextContent(long);
    await userEvent.unhover(joinedValue);

    // While the editor is open, the joined operator and value are text, like
    // the first value.
    const editing = canvas.getByRole('group', {
      name: 'Customer is Acme or contains “west”'
    });
    expect(within(editing).queryByRole('button', {
      name: 'or contains'
    })).not.toBeInTheDocument();
    expect(within(editing).queryByRole('button', {
      name: '“west”'
    })).not.toBeInTheDocument();
    expect(within(editing).getByText('“west”')).toBeVisible();
  }
}`,...(G=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <FilterToken {...args} field="Case #" operator="is" value="" state="editing" operatorLocked editor={<Box as="input" aria-label="Case number" placeholder="type a number" size={14} h="22" p="0" bg="transparent" borderWidth="0" outline="none" fontFamily="body" fontSize="body.sm" color="text" />} />
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,re;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,ce;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,ue,de;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ge,ve;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};export{g as Default,w as Disabled,x as EditingInPlace,T as ExFilterRow,y as ExcludeTone,B as Joined,h as JoinedStates,b as LockedOperator,k as RetainFocus,v as States,R as TranslatedLabels,f as ValueStates,Ie as __namedExportsOrder,Ee as default};
