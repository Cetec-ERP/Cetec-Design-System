import{j as e,V as v,r as S,H as Se,B as Be,W as Ae}from"./iframe-glPJRB0W.js";import{D as B}from"./Divider-Dxliqae5.js";import{I as Te}from"./IconButton-ZM-fNeMD.js";import{K as a}from"./KeyFact-hh5ZGkor.js";import"./preload-helper-uKahAciQ.js";import"./Spinner-CKVmbXjS.js";import"./FieldContext-VEKTIqc4.js";import"./Link-CGT4OhZy.js";import"./TextInput-mJOf1nUE.js";import"./Button-Dicl4JZM.js";import"./useLocale-Cq1ujL7R.js";const{expect:t,fireEvent:k,fn:c,spyOn:Re,userEvent:s,waitFor:A,within:l}=__STORYBOOK_MODULE_TEST__,We={title:"Components/KeyFact",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'One short fact about a record, as a label and a value.\n\n- `horizontal` ("Label: Value") for up to three facts in a page header aside\n- `vertical` for a strip of facts under the title\n- `href` makes the value a link\n- A long value truncates and shows the full value in a tooltip\n- `editing` replaces the value with a text input'}}},args:{label:"Customer",value:"Acme Corp"},argTypes:{layout:{control:"inline-radio",options:["horizontal","vertical"]}}},b={},g={render:()=>e.jsxs(v,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",layout:"horizontal"}),e.jsx(a,{label:"Customer",value:"Acme Corp",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},y={name:"As Link",render:()=>e.jsxs(v,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs(v,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}}),e.jsx(a,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,inputProps:{name:"poNumberVertical"}})]}),parameters:{controls:{disable:!0}}},u={name:"Editing With Save and Cancel",render:()=>e.jsxs(v,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumberConfirm"}}),e.jsx(a,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumberConfirmVertical"}})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: Edit in Place",render:function(){const[o,n]=S.useState("PO-88213"),[i,P]=S.useState(!1);return e.jsxs(Se,{gap:"8",children:[e.jsx(a,{label:"PO number",value:o,editing:i,editMode:"confirm",onSave:ke=>{n(ke),P(!1)},onCancel:()=>P(!1),inputProps:{name:"poNumberInPlace"}}),!i&&e.jsx(Te,{variant:"ghost",size:"sm",iconName:"edit",altText:"Edit PO number",onClick:()=>P(!0)})]})},parameters:{controls:{disable:!0}}},w={render:()=>e.jsx(Be,{w:"224",children:e.jsx(a,{label:"Ship to",value:"Acme Corp, Receiving Dock 4, 1200 Industrial Parkway"})}),parameters:{controls:{disable:!0}}},p={name:"Ex: Page Header Aside",render:()=>e.jsxs(Se,{gap:"12",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(B,{direction:"vertical",h:"16"}),e.jsx(a,{label:"Owner",value:"Dana Ortiz"}),e.jsx(B,{direction:"vertical",h:"16"}),e.jsx(a,{label:"Due",value:"Nov 14, 2026"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Facts Strip",render:()=>e.jsxs(Ae,{gap:"32",children:[e.jsx(a,{layout:"vertical",label:"Order total",value:"$18,240.00"}),e.jsx(a,{layout:"vertical",label:"Lines",value:"12"}),e.jsx(a,{layout:"vertical",label:"Ship date",value:"Nov 14, 2026"}),e.jsx(a,{layout:"vertical",label:"Customer",value:"Acme Corp",href:"#customer"})]}),parameters:{controls:{disable:!0}}},h={name:"Test: editing labels the input",args:{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}},play:async({canvasElement:r})=>{const n=l(r).getByRole("textbox",{name:"PO number:"});await t(n).toHaveValue("PO-88213"),await t(n).toHaveAttribute("name","poNumber")}},f={name:"Test: confirm mode saves and cancels",args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c(),onCancel:c(),inputProps:{name:"poNumber"}},play:async({args:r,canvasElement:o})=>{const n=l(o),i=n.getByRole("textbox",{name:"PO number:"});await s.clear(i),await s.type(i,"PO-90001"),await s.click(n.getByRole("button",{name:"Save"})),await t(r.onSave).toHaveBeenLastCalledWith("PO-90001"),await s.type(i,"{Enter}"),await t(r.onSave).toHaveBeenCalledTimes(2),await s.type(i,"-X{Escape}"),await t(r.onCancel).toHaveBeenCalledOnce(),await t(i).toHaveValue("PO-88213"),await s.click(n.getByRole("button",{name:"Cancel"})),await t(r.onCancel).toHaveBeenCalledTimes(2)}},C={name:"Test: truncated value shows a tooltip",render:()=>e.jsxs(v,{gap:"12",alignItems:"flex-start",children:[e.jsx(Be,{w:"160",children:e.jsx(a,{label:"Ship to",value:"Acme Corp, Receiving Dock 4"})}),e.jsx(a,{label:"Owner",value:"Dana Ortiz"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:r})=>{const o=l(r),n=l(document.body);await s.hover(o.getByText("Acme Corp, Receiving Dock 4")),await t(await n.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await s.unhover(o.getByText("Acme Corp, Receiving Dock 4")),await A(()=>t(n.queryByRole("tooltip")).toBeNull()),await s.tab(),await t(o.getByText("Acme Corp, Receiving Dock 4")).toHaveFocus(),await t(await n.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await t(o.getByText("Dana Ortiz")).not.toHaveAttribute("tabindex"),document.activeElement.blur(),await A(()=>t(n.queryByRole("tooltip")).toBeNull()),await s.hover(o.getByText("Dana Ortiz")),await new Promise(i=>setTimeout(i,200)),await t(n.queryByRole("tooltip")).toBeNull(),await s.unhover(o.getByText("Dana Ortiz"))}},E={name:"Test: Enter during IME composition does not save",tags:["!snapshot"],args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:c()},play:async({args:r,canvasElement:o})=>{const n=l(o).getByRole("textbox",{name:"PO number:"});k.keyDown(n,{key:"Enter",isComposing:!0}),await t(r.onSave).not.toHaveBeenCalled(),k.keyDown(n,{key:"Enter"}),await t(r.onSave).toHaveBeenCalledOnce()}},O={name:"Test: input mode has no default name and warns about onSave",tags:["!snapshot"],args:{label:"PO number",value:"PO-88213",editing:!0,onSave:c()},beforeEach:()=>{const r=Re(console,"warn").mockImplementation(()=>{});return()=>r.mockRestore()},play:async({canvasElement:r})=>{const o=l(r).getByRole("textbox",{name:"PO number:"});await t(o.getAttribute("name")??"").toBe(""),await t(console.warn).toHaveBeenCalledWith(t.stringContaining('without editMode="confirm"'))}},_e=["Default","Layouts","AsLink","Editing","EditingWithSaveAndCancel","ExEditInPlace","Truncated","ExPageHeaderAside","ExFactsStrip","EditingLabelsInput","ConfirmSavesAndCancels","TruncatedShowsTooltip","ImeEnterDoesNotSave","InputModeDefaults"];var T,R,D;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(D=(R=b.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var H,j,I;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <VStack gap="24" alignItems="flex-start">
      <KeyFact label="Customer" value="Acme Corp" layout="horizontal" />
      <KeyFact label="Customer" value="Acme Corp" layout="vertical" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(j=g.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var F,N,K;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(N=y.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var V,M,z;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(M=x.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var L,W,_,q,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:'`editMode="confirm"` adds save and cancel buttons, for a fact saved on its\nown. Enter saves and Escape cancels.',...(U=(q=u.parameters)==null?void 0:q.docs)==null?void 0:U.description}}};var X,$,Y,G,J;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=($=m.parameters)==null?void 0:$.docs)==null?void 0:Y.source},description:{story:"Use case: a fact that switches to edit in place and saves on its own.",...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Q,Z,ee;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Box w="224">
      <KeyFact label="Ship to" value="Acme Corp, Receiving Dock 4, 1200 Industrial Parkway" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne,re,oe;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"Use case: three facts in a record page header aside, with thin dividers.",...(oe=(re=p.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};var se,ie,ce,le,ue;d.parameters={...d.parameters,docs:{...(se=d.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:`Use case: a strip of facts under a record title, for records with more
than three facts.`,...(ue=(le=d.parameters)==null?void 0:le.docs)==null?void 0:ue.description}}};var me,pe,de;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(de=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ve,be,ge;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ge=(be=f.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ye,xe,we;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var he,fe,Ce;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ce=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var Ee,Oe,Pe;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Pe=(Oe=O.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};export{y as AsLink,f as ConfirmSavesAndCancels,b as Default,x as Editing,h as EditingLabelsInput,u as EditingWithSaveAndCancel,m as ExEditInPlace,d as ExFactsStrip,p as ExPageHeaderAside,E as ImeEnterDoesNotSave,O as InputModeDefaults,g as Layouts,w as Truncated,C as TruncatedShowsTooltip,_e as __namedExportsOrder,We as default};
