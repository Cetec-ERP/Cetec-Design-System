import{j as e,V as d,r as S,H as ge,B as ye,W as he}from"./iframe-tRaBVUSM.js";import{D as O}from"./Divider-DXzdJON_.js";import{I as fe}from"./IconButton-qavfdljz.js";import{K as a}from"./KeyFact-DPMyggt6.js";import"./preload-helper-uKahAciQ.js";import"./Spinner-CUPkyzUJ.js";import"./FieldContext-BN87T4VQ.js";import"./Link-JaH5iS0G.js";import"./TextInput-cXV6KEvp.js";import"./Button-DXc_OZNh.js";import"./useLocale-CqET3nCK.js";const{expect:o,fn:l,userEvent:r,waitFor:we,within:C}=__STORYBOOK_MODULE_TEST__,De={title:"Components/KeyFact",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'One short fact about a record, as a label and a value.\n\n- `horizontal` ("Label: Value") for up to three facts in a page header aside\n- `vertical` for a strip of facts under the title\n- `href` makes the value a link\n- A long value truncates and shows the full value in a tooltip\n- `editing` replaces the value with a text input'}}},args:{label:"Customer",value:"Acme Corp"},argTypes:{layout:{control:"inline-radio",options:["horizontal","vertical"]}}},v={},b={render:()=>e.jsxs(d,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",layout:"horizontal"}),e.jsx(a,{label:"Customer",value:"Acme Corp",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},g={name:"As Link",render:()=>e.jsxs(d,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs(d,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}}),e.jsx(a,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,inputProps:{name:"poNumberVertical"}})]}),parameters:{controls:{disable:!0}}},c={name:"Editing With Save and Cancel",render:()=>e.jsxs(d,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:l(),onCancel:l(),inputProps:{name:"poNumberConfirm"}}),e.jsx(a,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,editMode:"confirm",onSave:l(),onCancel:l(),inputProps:{name:"poNumberConfirmVertical"}})]}),parameters:{controls:{disable:!0}}},u={name:"Ex: Edit in Place",render:function(){const[i,t]=S.useState("PO-88213"),[n,P]=S.useState(!1);return e.jsxs(ge,{gap:"8",children:[e.jsx(a,{label:"PO number",value:i,editing:n,editMode:"confirm",onSave:xe=>{t(xe),P(!1)},onCancel:()=>P(!1),inputProps:{name:"poNumberInPlace"}}),!n&&e.jsx(fe,{variant:"ghost",size:"sm",iconName:"edit",altText:"Edit PO number",onClick:()=>P(!0)})]})},parameters:{controls:{disable:!0}}},x={render:()=>e.jsx(ye,{w:"224",children:e.jsx(a,{label:"Ship to",value:"Acme Corp, Receiving Dock 4, 1200 Industrial Parkway"})}),parameters:{controls:{disable:!0}}},m={name:"Ex: Page Header Aside",render:()=>e.jsxs(ge,{gap:"12",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(O,{direction:"vertical",h:"16"}),e.jsx(a,{label:"Owner",value:"Dana Ortiz"}),e.jsx(O,{direction:"vertical",h:"16"}),e.jsx(a,{label:"Due",value:"Nov 14, 2026"})]}),parameters:{controls:{disable:!0}}},p={name:"Ex: Facts Strip",render:()=>e.jsxs(he,{gap:"32",children:[e.jsx(a,{layout:"vertical",label:"Order total",value:"$18,240.00"}),e.jsx(a,{layout:"vertical",label:"Lines",value:"12"}),e.jsx(a,{layout:"vertical",label:"Ship date",value:"Nov 14, 2026"}),e.jsx(a,{layout:"vertical",label:"Customer",value:"Acme Corp",href:"#customer"})]}),parameters:{controls:{disable:!0}}},h={name:"Test: editing labels the input",args:{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}},play:async({canvasElement:s})=>{const t=C(s).getByRole("textbox",{name:"PO number:"});await o(t).toHaveValue("PO-88213"),await o(t).toHaveAttribute("name","poNumber")}},f={name:"Test: confirm mode saves and cancels",args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:l(),onCancel:l(),inputProps:{name:"poNumber"}},play:async({args:s,canvasElement:i})=>{const t=C(i),n=t.getByRole("textbox",{name:"PO number:"});await r.clear(n),await r.type(n,"PO-90001"),await r.click(t.getByRole("button",{name:"Save"})),await o(s.onSave).toHaveBeenLastCalledWith("PO-90001"),await r.type(n,"{Enter}"),await o(s.onSave).toHaveBeenCalledTimes(2),await r.type(n,"-X{Escape}"),await o(s.onCancel).toHaveBeenCalledOnce(),await o(n).toHaveValue("PO-88213"),await r.click(t.getByRole("button",{name:"Cancel"})),await o(s.onCancel).toHaveBeenCalledTimes(2)}},w={name:"Test: truncated value shows a tooltip",render:()=>e.jsxs(d,{gap:"12",alignItems:"flex-start",children:[e.jsx(ye,{w:"160",children:e.jsx(a,{label:"Ship to",value:"Acme Corp, Receiving Dock 4"})}),e.jsx(a,{label:"Owner",value:"Dana Ortiz"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:s})=>{const i=C(s),t=C(document.body);await r.hover(i.getByText("Acme Corp, Receiving Dock 4")),await o(await t.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await r.unhover(i.getByText("Acme Corp, Receiving Dock 4")),await we(()=>o(t.queryByRole("tooltip")).toBeNull()),await r.hover(i.getByText("Dana Ortiz")),await new Promise(n=>setTimeout(n,200)),await o(t.queryByRole("tooltip")).toBeNull(),await r.unhover(i.getByText("Dana Ortiz"))}},Fe=["Default","Layouts","AsLink","Editing","EditingWithSaveAndCancel","ExEditInPlace","Truncated","ExPageHeaderAside","ExFactsStrip","EditingLabelsInput","ConfirmSavesAndCancels","TruncatedShowsTooltip"];var E,B,k;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(k=(B=v.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var A,T,j;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <VStack gap="24" alignItems="flex-start">
      <KeyFact label="Customer" value="Acme Corp" layout="horizontal" />
      <KeyFact label="Customer" value="Acme Corp" layout="vertical" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(T=b.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var R,D,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,N,V;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(N=y.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var K,I,z,L,M;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source},description:{story:'`editMode="confirm"` adds save and cancel buttons, for a fact saved on its\nown. Enter saves and Escape cancels.',...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var W,_,q,U,X;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"Use case: a fact that switches to edit in place and saves on its own.",...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var $,Y,G;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Box w="224">
      <KeyFact label="Ship to" value="Acme Corp, Receiving Dock 4, 1200 Industrial Parkway" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,Z,ee,ae;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"Use case: three facts in a record page header aside, with thin dividers.",...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var te,ne,re,oe,se;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:`Use case: a strip of facts under a record title, for records with more
than three facts.`,...(se=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:se.description}}};var ie,le,ce;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,me,pe;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=f.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var de,ve,be;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
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

    // A value that fits shows no tooltip.
    await userEvent.hover(canvas.getByText('Dana Ortiz'));
    await new Promise(resolve => setTimeout(resolve, 200));
    await expect(body.queryByRole('tooltip')).toBeNull();
    await userEvent.unhover(canvas.getByText('Dana Ortiz'));
  }
}`,...(be=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};export{g as AsLink,f as ConfirmSavesAndCancels,v as Default,y as Editing,h as EditingLabelsInput,c as EditingWithSaveAndCancel,u as ExEditInPlace,p as ExFactsStrip,m as ExPageHeaderAside,b as Layouts,x as Truncated,w as TruncatedShowsTooltip,Fe as __namedExportsOrder,De as default};
