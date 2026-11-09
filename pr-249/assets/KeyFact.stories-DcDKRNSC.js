import{j as e,V as m,r as T,H as j,B as H,W as $e}from"./iframe-duoCdPtj.js";import{B as I}from"./Button-CRQAArIC.js";import{D as N}from"./Divider-BBdvcNAi.js";import{I as Ye}from"./IconButton-DVPKynxx.js";import{K as r}from"./KeyFact-BPj9ZD5X.js";import"./preload-helper-uKahAciQ.js";import"./Spinner-BNZKunBB.js";import"./FieldContext-CPDmo6YI.js";import"./Link-DVds7JY2.js";import"./TextInput-eiUgIAEc.js";import"./useLocale-kncI8Spz.js";const{expect:o,fireEvent:L,fn:c,spyOn:Je,userEvent:i,waitFor:D,within:l}=__STORYBOOK_MODULE_TEST__,ca={title:"Components/KeyFact",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'One short fact about a record, as a label and a value.\n\n- `horizontal` ("Label: Value") for up to three facts in a page header aside\n- `vertical` for a strip of facts under the title\n- `href` makes the value a link\n- A long value truncates and shows the full value in a tooltip\n- `editing` replaces the value with a text input'}}},args:{label:"Customer",value:"Acme Corp"},argTypes:{layout:{control:"inline-radio",options:["horizontal","vertical"]}}},w={},x={render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(r,{label:"Customer",value:"Acme Corp",layout:"horizontal"}),e.jsx(r,{label:"Customer",value:"Acme Corp",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},Ge="(min-width: 48rem)",A=(n,a)=>{const t=u=>getComputedStyle(l(n).getByText(u)).display!=="none",s=n.querySelector("a");o(t("Customer:")).toBe(a==="horizontal"),o(t("Customer")).toBe(a==="vertical"),o(s&&getComputedStyle(s).fontSize).toBe(a==="horizontal"?"14px":"20px")},h={render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(r,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{base:"horizontal"},"data-testid":"horizontal-base-only"}),e.jsx(r,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{base:"vertical",md:"horizontal"},"data-testid":"vertical-then-horizontal"}),e.jsx(r,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{md:"vertical"},"data-testid":"horizontal-then-vertical"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=l(n),t=window.matchMedia(Ge).matches;A(a.getByTestId("horizontal-base-only"),"horizontal"),A(a.getByTestId("vertical-then-horizontal"),t?"horizontal":"vertical"),A(a.getByTestId("horizontal-then-vertical"),t?"vertical":"horizontal")}},p={...h,name:"Responsive Layout"},d={...h,name:"Responsive Layout Narrow",globals:{viewport:{value:"mobile1",isRotated:!1}},play:async n=>{var a;o(window.matchMedia(Ge).matches).toBe(!1),await((a=h.play)==null?void 0:a.call(h,n))}},f={name:"As Link",render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(r,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(r,{label:"Customer",value:"Acme Corp",href:"#customer",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},C={render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(r,{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}}),e.jsx(r,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,inputProps:{name:"poNumberVertical"}})]}),parameters:{controls:{disable:!0}}},v={name:"Editing With Save and Cancel",render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(r,{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumberConfirm"}}),e.jsx(r,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumberConfirmVertical"}})]}),parameters:{controls:{disable:!0}}},y={name:"Ex: Edit in Place",render:function(){const[a,t]=T.useState("PO-88213"),[s,u]=T.useState(!1);return e.jsxs(j,{gap:"8",children:[e.jsx(r,{label:"PO number",value:a,editing:s,editMode:"confirm",onSave:Xe=>{t(Xe),u(!1)},onCancel:()=>u(!1),inputProps:{name:"poNumberInPlace"}}),!s&&e.jsx(Ye,{variant:"ghost",size:"sm",iconName:"edit",altText:"Edit PO number",onClick:()=>u(!0)})]})},parameters:{controls:{disable:!0}}},k={render:()=>e.jsx(H,{w:"224",children:e.jsx(r,{label:"Ship to",value:"Acme Corp, Receiving Dock 4, 1200 Industrial Parkway"})}),parameters:{controls:{disable:!0}}},g={name:"Ex: Page Header Aside",render:()=>e.jsxs(j,{gap:"12",children:[e.jsx(r,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(N,{direction:"vertical",h:"16"}),e.jsx(r,{label:"Owner",value:"Dana Ortiz"}),e.jsx(N,{direction:"vertical",h:"16"}),e.jsx(r,{label:"Due",value:"Nov 14, 2026"})]}),parameters:{controls:{disable:!0}}},b={name:"Ex: Facts Strip",render:()=>e.jsxs($e,{gap:"32",children:[e.jsx(r,{layout:"vertical",label:"Order total",value:"$18,240.00"}),e.jsx(r,{layout:"vertical",label:"Lines",value:"12"}),e.jsx(r,{layout:"vertical",label:"Ship date",value:"Nov 14, 2026"}),e.jsx(r,{layout:"vertical",label:"Customer",value:"Acme Corp",href:"#customer"})]}),parameters:{controls:{disable:!0}}},B={name:"Test: editing labels the input",args:{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}},play:async({canvasElement:n})=>{const t=l(n).getByRole("textbox",{name:"PO number:"});await o(t).toHaveValue("PO-88213"),await o(t).toHaveAttribute("name","poNumber")}},S={name:"Test: confirm mode saves and cancels",args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumber"}},play:async({args:n,canvasElement:a})=>{const t=l(a),s=t.getByRole("textbox",{name:"PO number:"});await i.clear(s),await i.type(s,"PO-90001"),await i.click(t.getByRole("button",{name:"Save"})),await o(n.onSave).toHaveBeenLastCalledWith("PO-90001"),await i.type(s,"{Enter}"),await o(n.onSave).toHaveBeenCalledTimes(2),await i.type(s,"-X{Escape}"),await o(n.onCancel).toHaveBeenCalledOnce(),await o(s).toHaveValue("PO-88213"),await i.click(t.getByRole("button",{name:"Cancel"})),await o(n.onCancel).toHaveBeenCalledTimes(2)}},E={name:"Test: truncated value shows a tooltip",render:()=>e.jsxs(m,{gap:"12",alignItems:"flex-start",children:[e.jsx(H,{w:"160",children:e.jsx(r,{label:"Ship to",value:"Acme Corp, Receiving Dock 4"})}),e.jsx(r,{label:"Owner",value:"Dana Ortiz"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=l(n),t=l(document.body);await i.hover(a.getByText("Acme Corp, Receiving Dock 4")),await o(await t.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await i.unhover(a.getByText("Acme Corp, Receiving Dock 4")),await D(()=>o(t.queryByRole("tooltip")).toBeNull()),await i.tab(),await o(a.getByText("Acme Corp, Receiving Dock 4")).toHaveFocus(),await o(await t.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await o(a.getByText("Dana Ortiz")).not.toHaveAttribute("tabindex"),document.activeElement.blur(),await D(()=>o(t.queryByRole("tooltip")).toBeNull()),await i.hover(a.getByText("Dana Ortiz")),await new Promise(s=>setTimeout(s,200)),await o(t.queryByRole("tooltip")).toBeNull(),await i.unhover(a.getByText("Dana Ortiz"))}},O={name:"Test: tooltip after the value becomes a link",tags:["!snapshot"],render:function(){const[a,t]=T.useState(!1),[s,u]=T.useState(!1);return e.jsxs(m,{gap:"12",alignItems:"flex-start",children:[e.jsxs(j,{gap:"8",children:[e.jsx(I,{onClick:()=>t(!0),children:"Make link"}),e.jsx(I,{onClick:()=>u(!0),children:"Narrow"})]}),e.jsx(H,{w:s?"160":"auto",children:e.jsx(r,{label:"Ship to",value:"Acme Corp, Receiving Dock 4",href:a?"#ship-to":void 0})})]})},parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=l(n),t=l(document.body);await i.click(a.getByRole("button",{name:"Make link"})),await i.click(a.getByRole("button",{name:"Narrow"}));const s=a.getByRole("link",{name:"Acme Corp, Receiving Dock 4"});await D(()=>o(s.scrollWidth).toBeGreaterThan(s.clientWidth)),await i.hover(s),await o(await t.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await i.unhover(s)}},P={name:"Test: Enter during IME composition does not save",tags:["!snapshot"],args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c()},play:async({args:n,canvasElement:a})=>{const t=l(a).getByRole("textbox",{name:"PO number:"});L.keyDown(t,{key:"Enter",isComposing:!0}),await o(n.onSave).not.toHaveBeenCalled(),L.keyDown(t,{key:"Enter"}),await o(n.onSave).toHaveBeenCalledOnce()}},R={name:"Test: input mode has no default name and warns about onSave",tags:["!snapshot"],args:{label:"PO number",value:"PO-88213",editing:!0,onSave:c()},beforeEach:()=>{const n=Je(console,"warn").mockImplementation(()=>{});return()=>n.mockRestore()},play:async({canvasElement:n})=>{const a=l(n).getByRole("textbox",{name:"PO number:"});await o(a.getAttribute("name")??"").toBe(""),await o(console.warn).toHaveBeenCalledWith(o.stringContaining('without editMode="confirm"'))}},ua=["Default","Layouts","ResponsiveLayout","ResponsiveLayoutNarrow","AsLink","Editing","EditingWithSaveAndCancel","ExEditInPlace","Truncated","ExPageHeaderAside","ExFactsStrip","EditingLabelsInput","ConfirmSavesAndCancels","TruncatedShowsTooltip","TooltipAfterBecomingLink","ImeEnterDoesNotSave","InputModeDefaults"];var F,z,M;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(M=(z=w.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var V,K,W;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <VStack gap="24" alignItems="flex-start">
      <KeyFact label="Customer" value="Acme Corp" layout="horizontal" />
      <KeyFact label="Customer" value="Acme Corp" layout="vertical" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(K=x.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var _,q,U,G,X;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...responsiveLayoutStory,
  name: 'Responsive Layout'
}`,...(U=(q=p.parameters)==null?void 0:q.docs)==null?void 0:U.source},description:{story:"`layout` accepts conditional values. Resize the viewport across the `md`\nbreakpoint (768px) to see the label and the value switch together.",...(X=(G=p.parameters)==null?void 0:G.docs)==null?void 0:X.description}}};var $,Y,J,Q,Z;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...responsiveLayoutStory,
  name: 'Responsive Layout Narrow',
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  play: async context => {
    // Fail loudly if the viewport global stops applying, rather than
    // repeating the wide-viewport checks.
    expect(window.matchMedia(mdBreakpoint).matches).toBe(false);
    await responsiveLayoutStory.play?.(context);
  }
}`,...(J=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"The same facts below the `md` breakpoint.",...(Z=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var ee,ae,te;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'As Link',
  render: () => <VStack gap="24" alignItems="flex-start">
      <KeyFact label="Customer" value="Acme Corp" href="#customer" />
      <KeyFact label="Customer" value="Acme Corp" href="#customer" layout="vertical" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,oe,re;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <VStack gap="24" alignItems="flex-start">
      <KeyFact label="PO number" value="PO-88213" editing inputProps={{
      name: 'poNumber'
    }} />
      <KeyFact label="PO number" value="PO-88213" layout="vertical" editing inputProps={{
      name: 'poNumberVertical'
    }} />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,le,ce,ue;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Editing With Save and Cancel',
  render: () => <VStack gap="24" alignItems="flex-start">
      <KeyFact label="PO number" value="PO-88213" editing editMode="confirm" onSave={fn()} onCancel={fn()} inputProps={{
      name: 'poNumberConfirm'
    }} />
      <KeyFact label="PO number" value="PO-88213" layout="vertical" editing editMode="confirm" onSave={fn()} onCancel={fn()} inputProps={{
      name: 'poNumberConfirmVertical'
    }} />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:'`editMode="confirm"` adds save and cancel buttons, for a fact saved on its\nown. Enter saves and Escape cancels.',...(ue=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ue.description}}};var me,pe,de,ve,ye;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Ex: Edit in Place',
  render: function Render() {
    const [value, setValue] = useState('PO-88213');
    const [editing, setEditing] = useState(false);
    return <HStack gap="8">
        <KeyFact label="PO number" value={value} editing={editing} editMode="confirm" onSave={next => {
        setValue(next);
        setEditing(false);
      }} onCancel={() => setEditing(false)} inputProps={{
        name: 'poNumberInPlace'
      }} />
        {!editing && <IconButton variant="ghost" size="sm" iconName="edit" altText="Edit PO number" onClick={() => setEditing(true)} />}
      </HStack>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:de.source},description:{story:"Use case: a fact that switches to edit in place and saves on its own.",...(ye=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};var ge,be,he;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Box w="224">
      <KeyFact label="Ship to" value="Acme Corp, Receiving Dock 4, 1200 Industrial Parkway" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(he=(be=k.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var we,xe,fe,Ce,ke;g.parameters={...g.parameters,docs:{...(we=g.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Ex: Page Header Aside',
  render: () => <HStack gap="12">
      <KeyFact label="Customer" value="Acme Corp" href="#customer" />
      <Divider direction="vertical" h="16" />
      <KeyFact label="Owner" value="Dana Ortiz" />
      <Divider direction="vertical" h="16" />
      <KeyFact label="Due" value="Nov 14, 2026" />
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(fe=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:fe.source},description:{story:"Use case: three facts in a record page header aside, with thin dividers.",...(ke=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:ke.description}}};var Be,Se,Ee,Oe,Pe;b.parameters={...b.parameters,docs:{...(Be=b.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Ex: Facts Strip',
  render: () => <Wrap gap="32">
      <KeyFact layout="vertical" label="Order total" value="$18,240.00" />
      <KeyFact layout="vertical" label="Lines" value="12" />
      <KeyFact layout="vertical" label="Ship date" value="Nov 14, 2026" />
      <KeyFact layout="vertical" label="Customer" value="Acme Corp" href="#customer" />
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ee=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source},description:{story:`Use case: a strip of facts under a record title, for records with more
than three facts.`,...(Pe=(Oe=b.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.description}}};var Re,Te,Ae;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Test: editing labels the input',
  args: {
    label: 'PO number',
    value: 'PO-88213',
    editing: true,
    inputProps: {
      name: 'poNumber'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'PO number:'
    });
    await expect(input).toHaveValue('PO-88213');
    await expect(input).toHaveAttribute('name', 'poNumber');
  }
}`,...(Ae=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var De,je,He;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Test: confirm mode saves and cancels',
  args: {
    label: 'PO number',
    value: 'PO-88213',
    editing: true,
    editMode: 'confirm',
    onSave: fn(),
    onCancel: fn(),
    inputProps: {
      name: 'poNumber'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'PO number:'
    });

    // The save button sends the edited value.
    await userEvent.clear(input);
    await userEvent.type(input, 'PO-90001');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(args.onSave).toHaveBeenLastCalledWith('PO-90001');

    // Enter saves too.
    await userEvent.type(input, '{Enter}');
    await expect(args.onSave).toHaveBeenCalledTimes(2);

    // Escape cancels and puts the value back.
    await userEvent.type(input, '-X{Escape}');
    await expect(args.onCancel).toHaveBeenCalledOnce();
    await expect(input).toHaveValue('PO-88213');

    // The cancel button cancels too.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(args.onCancel).toHaveBeenCalledTimes(2);
  }
}`,...(He=(je=S.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var Ie,Ne,Le;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Test: truncated value shows a tooltip',
  render: () => <VStack gap="12" alignItems="flex-start">
      <Box w="160">
        <KeyFact label="Ship to" value="Acme Corp, Receiving Dock 4" />
      </Box>
      <KeyFact label="Owner" value="Dana Ortiz" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    // A truncated value shows the full value on hover.
    await userEvent.hover(canvas.getByText('Acme Corp, Receiving Dock 4'));
    await expect(await body.findByRole('tooltip')).toHaveTextContent('Acme Corp, Receiving Dock 4');
    await userEvent.unhover(canvas.getByText('Acme Corp, Receiving Dock 4'));
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());

    // Keyboard focus reaches a truncated value and shows the full value.
    await userEvent.tab();
    await expect(canvas.getByText('Acme Corp, Receiving Dock 4')).toHaveFocus();
    await expect(await body.findByRole('tooltip')).toHaveTextContent('Acme Corp, Receiving Dock 4');
    await expect(canvas.getByText('Dana Ortiz')).not.toHaveAttribute('tabindex');
    (document.activeElement as HTMLElement).blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());

    // A value that fits shows no tooltip.
    await userEvent.hover(canvas.getByText('Dana Ortiz'));
    await new Promise(resolve => setTimeout(resolve, 200));
    await expect(body.queryByRole('tooltip')).toBeNull();
    await userEvent.unhover(canvas.getByText('Dana Ortiz'));
  }
}`,...(Le=(Ne=E.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var Fe,ze,Me;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Test: tooltip after the value becomes a link',
  // Behavior test only. It looks the same as "Truncated".
  tags: ['!snapshot'],
  render: function Render() {
    const [isLink, setIsLink] = useState(false);
    const [narrow, setNarrow] = useState(false);
    return <VStack gap="12" alignItems="flex-start">
        <HStack gap="8">
          <Button onClick={() => setIsLink(true)}>Make link</Button>
          <Button onClick={() => setNarrow(true)}>Narrow</Button>
        </HStack>
        <Box w={narrow ? '160' : 'auto'}>
          <KeyFact label="Ship to" value="Acme Corp, Receiving Dock 4" href={isLink ? '#ship-to' : undefined} />
        </Box>
      </VStack>;
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Make link'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Narrow'
    }));
    const link = canvas.getByRole('link', {
      name: 'Acme Corp, Receiving Dock 4'
    });
    await waitFor(() => expect(link.scrollWidth).toBeGreaterThan(link.clientWidth));
    await userEvent.hover(link);
    await expect(await body.findByRole('tooltip')).toHaveTextContent('Acme Corp, Receiving Dock 4');
    await userEvent.unhover(link);
  }
}`,...(Me=(ze=O.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};var Ve,Ke,We;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Test: Enter during IME composition does not save',
  // Behavior test only. It looks the same as "Test: confirm mode saves and cancels".
  tags: ['!snapshot'],
  args: {
    label: 'PO number',
    value: 'PO-88213',
    editing: true,
    editMode: 'confirm',
    onSave: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('textbox', {
      name: 'PO number:'
    });
    fireEvent.keyDown(input, {
      key: 'Enter',
      isComposing: true
    });
    await expect(args.onSave).not.toHaveBeenCalled();
    fireEvent.keyDown(input, {
      key: 'Enter'
    });
    await expect(args.onSave).toHaveBeenCalledOnce();
  }
}`,...(We=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var _e,qe,Ue;R.parameters={...R.parameters,docs:{...(_e=R.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Test: input mode has no default name and warns about onSave',
  // Behavior test only. It looks the same as "Editing".
  tags: ['!snapshot'],
  args: {
    label: 'PO number',
    value: 'PO-88213',
    editing: true,
    onSave: fn()
  },
  beforeEach: () => {
    const warn = spyOn(console, 'warn').mockImplementation(() => {});
    return () => warn.mockRestore();
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('textbox', {
      name: 'PO number:'
    });

    // An unnamed input is left out of a form submit.
    await expect(input.getAttribute('name') ?? '').toBe('');
    await expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('without editMode="confirm"'));
  }
}`,...(Ue=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};export{f as AsLink,S as ConfirmSavesAndCancels,w as Default,C as Editing,B as EditingLabelsInput,v as EditingWithSaveAndCancel,y as ExEditInPlace,b as ExFactsStrip,g as ExPageHeaderAside,P as ImeEnterDoesNotSave,R as InputModeDefaults,x as Layouts,p as ResponsiveLayout,d as ResponsiveLayoutNarrow,O as TooltipAfterBecomingLink,k as Truncated,E as TruncatedShowsTooltip,ua as __namedExportsOrder,ca as default};
