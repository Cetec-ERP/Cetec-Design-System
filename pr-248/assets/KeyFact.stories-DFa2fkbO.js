import{j as e,V as m,r as A,H as j,B as H,W as $e}from"./iframe-uhpZbDj7.js";import{B as I}from"./Button-DsQ57c_1.js";import{D as N}from"./Divider-DxZiIC0U.js";import{I as Ye}from"./IconButton-DcXjVJv6.js";import{K as o}from"./KeyFact-DxLYCu60.js";import"./preload-helper-D8YtVqxL.js";import"./Spinner-HKBc1abl.js";import"./FieldContext-D6tjQdpe.js";import"./Link-ByJgO22v.js";import"./TextInput-CcSNcYus.js";import"./useLocale-9Q3p_5Hc.js";const{expect:r,fireEvent:z,fn:c,spyOn:Je,userEvent:i,waitFor:D,within:l}=__STORYBOOK_MODULE_TEST__,ua={title:"Components/KeyFact",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'One short fact about a record, as a label and a value.\n\n- `horizontal` ("Label: Value") for up to three facts in a page header aside\n- `vertical` for a strip of facts under the title\n- `href` makes the value a link\n- A long value truncates and shows the full value in a tooltip\n- `editing` replaces the value with a text input'}}},args:{label:"Customer",value:"Acme Corp"},argTypes:{layout:{control:"inline-radio",options:["horizontal","vertical"]}}},x={},f={render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(o,{label:"Customer",value:"Acme Corp",layout:"horizontal"}),e.jsx(o,{label:"Customer",value:"Acme Corp",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},Ge="(min-width: 30rem)",Qe="(min-width: 48rem)",p=(n,a)=>{const t=u=>getComputedStyle(l(n).getByText(u)).display!=="none",s=n.querySelector("a");r(t("Customer:")).toBe(a==="horizontal"),r(t("Customer")).toBe(a==="vertical"),r(s&&getComputedStyle(s).fontSize).toBe(a==="horizontal"?"14px":"20px")},w={render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(o,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{base:"horizontal"},"data-testid":"horizontal-base-only"}),e.jsx(o,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{base:"vertical",md:"horizontal"},"data-testid":"vertical-then-horizontal"}),e.jsx(o,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{md:"vertical"},"data-testid":"horizontal-then-vertical"}),e.jsx(o,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{base:void 0,md:"vertical"},"data-testid":"undefined-base-then-vertical"}),e.jsx(o,{label:"Customer",value:"Acme Corp",href:"#customer",layout:[null,"vertical"],"data-testid":"array-without-base"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=l(n),t=window.matchMedia(Qe).matches;p(a.getByTestId("horizontal-base-only"),"horizontal"),p(a.getByTestId("vertical-then-horizontal"),t?"horizontal":"vertical"),p(a.getByTestId("horizontal-then-vertical"),t?"vertical":"horizontal"),p(a.getByTestId("undefined-base-then-vertical"),t?"vertical":"horizontal"),p(a.getByTestId("array-without-base"),window.matchMedia(Ge).matches?"vertical":"horizontal")}},d={...w,name:"Responsive Layout"},v={...w,name:"Responsive Layout Narrow",globals:{viewport:{value:"mobile1",isRotated:!1}},play:async n=>{var a;r(window.matchMedia(Ge).matches).toBe(!1),await((a=w.play)==null?void 0:a.call(w,n))}},C={name:"As Link",render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(o,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(o,{label:"Customer",value:"Acme Corp",href:"#customer",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(o,{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}}),e.jsx(o,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,inputProps:{name:"poNumberVertical"}})]}),parameters:{controls:{disable:!0}}},y={name:"Editing With Save and Cancel",render:()=>e.jsxs(m,{gap:"24",alignItems:"flex-start",children:[e.jsx(o,{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumberConfirm"}}),e.jsx(o,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumberConfirmVertical"}})]}),parameters:{controls:{disable:!0}}},b={name:"Ex: Edit in Place",render:function(){const[a,t]=A.useState("PO-88213"),[s,u]=A.useState(!1);return e.jsxs(j,{gap:"8",children:[e.jsx(o,{label:"PO number",value:a,editing:s,editMode:"confirm",onSave:Xe=>{t(Xe),u(!1)},onCancel:()=>u(!1),inputProps:{name:"poNumberInPlace"}}),!s&&e.jsx(Ye,{variant:"ghost",size:"sm",iconName:"edit",altText:"Edit PO number",onClick:()=>u(!0)})]})},parameters:{controls:{disable:!0}}},B={render:()=>e.jsx(H,{w:"224",children:e.jsx(o,{label:"Ship to",value:"Acme Corp, Receiving Dock 4, 1200 Industrial Parkway"})}),parameters:{controls:{disable:!0}}},g={name:"Ex: Page Header Aside",render:()=>e.jsxs(j,{gap:"12",children:[e.jsx(o,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(N,{direction:"vertical",h:"16"}),e.jsx(o,{label:"Owner",value:"Dana Ortiz"}),e.jsx(N,{direction:"vertical",h:"16"}),e.jsx(o,{label:"Due",value:"Nov 14, 2026"})]}),parameters:{controls:{disable:!0}}},h={name:"Ex: Facts Strip",render:()=>e.jsxs($e,{gap:"32",children:[e.jsx(o,{layout:"vertical",label:"Order total",value:"$18,240.00"}),e.jsx(o,{layout:"vertical",label:"Lines",value:"12"}),e.jsx(o,{layout:"vertical",label:"Ship date",value:"Nov 14, 2026"}),e.jsx(o,{layout:"vertical",label:"Customer",value:"Acme Corp",href:"#customer"})]}),parameters:{controls:{disable:!0}}},S={name:"Test: editing labels the input",args:{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}},play:async({canvasElement:n})=>{const t=l(n).getByRole("textbox",{name:"PO number:"});await r(t).toHaveValue("PO-88213"),await r(t).toHaveAttribute("name","poNumber")}},E={name:"Test: confirm mode saves and cancels",args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumber"}},play:async({args:n,canvasElement:a})=>{const t=l(a),s=t.getByRole("textbox",{name:"PO number:"});await i.clear(s),await i.type(s,"PO-90001"),await i.click(t.getByRole("button",{name:"Save"})),await r(n.onSave).toHaveBeenLastCalledWith("PO-90001"),await i.type(s,"{Enter}"),await r(n.onSave).toHaveBeenCalledTimes(2),await i.type(s,"-X{Escape}"),await r(n.onCancel).toHaveBeenCalledOnce(),await r(s).toHaveValue("PO-88213"),await i.click(t.getByRole("button",{name:"Cancel"})),await r(n.onCancel).toHaveBeenCalledTimes(2)}},O={name:"Test: truncated value shows a tooltip",render:()=>e.jsxs(m,{gap:"12",alignItems:"flex-start",children:[e.jsx(H,{w:"160",children:e.jsx(o,{label:"Ship to",value:"Acme Corp, Receiving Dock 4"})}),e.jsx(o,{label:"Owner",value:"Dana Ortiz"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=l(n),t=l(document.body);await i.hover(a.getByText("Acme Corp, Receiving Dock 4")),await r(await t.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await i.unhover(a.getByText("Acme Corp, Receiving Dock 4")),await D(()=>r(t.queryByRole("tooltip")).toBeNull()),await i.tab(),await r(a.getByText("Acme Corp, Receiving Dock 4")).toHaveFocus(),await r(await t.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await r(a.getByText("Dana Ortiz")).not.toHaveAttribute("tabindex"),document.activeElement.blur(),await D(()=>r(t.queryByRole("tooltip")).toBeNull()),await i.hover(a.getByText("Dana Ortiz")),await new Promise(s=>setTimeout(s,200)),await r(t.queryByRole("tooltip")).toBeNull(),await i.unhover(a.getByText("Dana Ortiz"))}},P={name:"Test: tooltip after the value becomes a link",tags:["!snapshot"],render:function(){const[a,t]=A.useState(!1),[s,u]=A.useState(!1);return e.jsxs(m,{gap:"12",alignItems:"flex-start",children:[e.jsxs(j,{gap:"8",children:[e.jsx(I,{onClick:()=>t(!0),children:"Make link"}),e.jsx(I,{onClick:()=>u(!0),children:"Narrow"})]}),e.jsx(H,{w:s?"160":"auto",children:e.jsx(o,{label:"Ship to",value:"Acme Corp, Receiving Dock 4",href:a?"#ship-to":void 0})})]})},parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=l(n),t=l(document.body);await i.click(a.getByRole("button",{name:"Make link"})),await i.click(a.getByRole("button",{name:"Narrow"}));const s=a.getByRole("link",{name:"Acme Corp, Receiving Dock 4"});await D(()=>r(s.scrollWidth).toBeGreaterThan(s.clientWidth)),await i.hover(s),await r(await t.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await i.unhover(s)}},R={name:"Test: Enter during IME composition does not save",tags:["!snapshot"],args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c()},play:async({args:n,canvasElement:a})=>{const t=l(a).getByRole("textbox",{name:"PO number:"});z.keyDown(t,{key:"Enter",isComposing:!0}),await r(n.onSave).not.toHaveBeenCalled(),z.keyDown(t,{key:"Enter"}),await r(n.onSave).toHaveBeenCalledOnce()}},T={name:"Test: input mode has no default name and warns about onSave",tags:["!snapshot"],args:{label:"PO number",value:"PO-88213",editing:!0,onSave:c()},beforeEach:()=>{const n=Je(console,"warn").mockImplementation(()=>{});return()=>n.mockRestore()},play:async({canvasElement:n})=>{const a=l(n).getByRole("textbox",{name:"PO number:"});await r(a.getAttribute("name")??"").toBe("");const t=r.stringContaining('without editMode="confirm"');await r(console.warn).not.toHaveBeenCalledWith(t)}},ma=["Default","Layouts","ResponsiveLayout","ResponsiveLayoutNarrow","AsLink","Editing","EditingWithSaveAndCancel","ExEditInPlace","Truncated","ExPageHeaderAside","ExFactsStrip","EditingLabelsInput","ConfirmSavesAndCancels","TruncatedShowsTooltip","TooltipAfterBecomingLink","ImeEnterDoesNotSave","InputModeDefaults"];var F,L,M;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,K,W;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <VStack gap="24" alignItems="flex-start">
      <KeyFact label="Customer" value="Acme Corp" layout="horizontal" />
      <KeyFact label="Customer" value="Acme Corp" layout="vertical" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(K=f.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var _,q,U,G,X;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...responsiveLayoutStory,
  name: 'Responsive Layout'
}`,...(U=(q=d.parameters)==null?void 0:q.docs)==null?void 0:U.source},description:{story:"`layout` accepts conditional values. Resize the viewport across the `md`\nbreakpoint (768px) to see the label and the value switch together. The\narray example switches at the `xs` breakpoint (480px).",...(X=(G=d.parameters)==null?void 0:G.docs)==null?void 0:X.description}}};var $,Y,J,Q,Z;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    // repeating the wide-viewport checks. Below \`xs\`, the array fact also
    // checks its \`horizontal\` fallback.
    expect(window.matchMedia(xsBreakpoint).matches).toBe(false);
    await responsiveLayoutStory.play?.(context);
  }
}`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"The same facts below the `md` breakpoint.",...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var ee,ae,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,oe,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,le,ce,ue;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:'`editMode="confirm"` adds save and cancel buttons, for a fact saved on its\nown. Enter saves and Escape cancels.',...(ue=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ue.description}}};var me,pe,de,ve,ye;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(de=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:de.source},description:{story:"Use case: a fact that switches to edit in place and saves on its own.",...(ye=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};var be,ge,he;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <Box w="224">
      <KeyFact label="Ship to" value="Acme Corp, Receiving Dock 4, 1200 Industrial Parkway" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(he=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var we,xe,fe,Ce,ke;g.parameters={...g.parameters,docs:{...(we=g.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(fe=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:fe.source},description:{story:"Use case: three facts in a record page header aside, with thin dividers.",...(ke=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:ke.description}}};var Be,Se,Ee,Oe,Pe;h.parameters={...h.parameters,docs:{...(Be=h.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=h.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source},description:{story:`Use case: a strip of facts under a record title, for records with more
than three facts.`,...(Pe=(Oe=h.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.description}}};var Re,Te,Ae;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ae=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var De,je,He;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(He=(je=E.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var Ie,Ne,ze;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ze=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};var Fe,Le,Me;P.parameters={...P.parameters,docs:{...(Fe=P.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Ve,Ke,We;R.parameters={...R.parameters,docs:{...(Ve=R.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(We=(Ke=R.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var _e,qe,Ue;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
    // KeyFact warns only in development builds.
    const warning = expect.stringContaining('without editMode="confirm"');
    if (import.meta.env.DEV) {
      await expect(console.warn).toHaveBeenCalledWith(warning);
    } else {
      await expect(console.warn).not.toHaveBeenCalledWith(warning);
    }
  }
}`,...(Ue=(qe=T.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};export{C as AsLink,E as ConfirmSavesAndCancels,x as Default,k as Editing,S as EditingLabelsInput,y as EditingWithSaveAndCancel,b as ExEditInPlace,h as ExFactsStrip,g as ExPageHeaderAside,R as ImeEnterDoesNotSave,T as InputModeDefaults,f as Layouts,d as ResponsiveLayout,v as ResponsiveLayoutNarrow,P as TooltipAfterBecomingLink,B as Truncated,O as TruncatedShowsTooltip,ma as __namedExportsOrder,ua as default};
