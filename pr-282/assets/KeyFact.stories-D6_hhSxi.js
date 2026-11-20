import{j as e,V as c,B as N,r as H,H as K,W as Ea}from"./iframe-B861AzWe.js";import{B as V}from"./Button-CvfyzFdA.js";import{D as z}from"./Divider-Dcw3GuP0.js";import{I as Pa}from"./IconButton-BltImcZV.js";import{K as a}from"./KeyFact-s75s06oN.js";import"./preload-helper-B6kYaje4.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./Link-wKFfjj_f.js";import"./TextInput-C18Vx4JJ.js";import"./useLocale-BADWnSrj.js";const{expect:o,fireEvent:M,fn:u,spyOn:Ta,userEvent:i,waitFor:L,within:l}=__STORYBOOK_MODULE_TEST__,za={title:"Components/KeyFact",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'One short fact about a record, as a label and a value.\n\n- `horizontal` ("Label: Value") for up to three facts in a page header aside\n- `vertical` for a strip of facts under the title\n- `aligned` for a grid of facts whose values line up\n- `type`, `emphasis`, and `tone` set the look of the value\n- In a printed document, see the Print/KeyFact stories\n- `href` makes the value a link\n- A long value truncates and shows the full value in a tooltip\n- `editing` replaces the value with a text input'}}},args:{label:"Customer",value:"Acme Corp"},argTypes:{layout:{control:"inline-radio",options:["horizontal","vertical","aligned"]},type:{control:"inline-radio",options:["text","number","currency","date","person"]},emphasis:{control:"inline-radio",options:["normal","total"]},tone:{control:"inline-radio",options:["neutral","danger"]}}},B={},E={render:()=>e.jsxs(c,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",layout:"horizontal"}),e.jsx(a,{label:"Customer",value:"Acme Corp",layout:"vertical"}),e.jsx(a,{label:"Customer",value:"Acme Corp",layout:"aligned"})]}),parameters:{controls:{disable:!0}}},W=e.jsxs(e.Fragment,{children:[e.jsx(a,{layout:"aligned",label:"Terms",value:"Net 30"}),e.jsx(a,{layout:"aligned",label:"Ship via",value:"UPS Ground"}),e.jsx(a,{layout:"aligned",type:"date",label:"Due",value:"Dec 17, 2026"}),e.jsx(a,{layout:"aligned",type:"person",label:"Buyer",value:"Priya Raman"}),e.jsx(a,{layout:"aligned",label:"Currency",value:"USD"})]}),p={render:()=>e.jsxs(c,{gap:"32",alignItems:"flex-start",children:[e.jsx(c,{gap:"8",alignItems:"stretch",w:"xs","data-testid":"wide",children:W}),e.jsx(c,{gap:"8",alignItems:"stretch",w:"224",containerType:"inline-size","data-testid":"narrow",children:W})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:r})=>{const t=n=>[...l(r).getByTestId(n).querySelectorAll('[data-ds-component="KeyFact"] > *')].map(s=>getComputedStyle(s).flexDirection);await o(t("wide")).toEqual(Array(5).fill("row")),await o(t("narrow")).toEqual(Array(5).fill("column"))}},m={render:()=>e.jsxs(c,{gap:"8",alignItems:"stretch",w:"xs",children:[e.jsx(a,{layout:"aligned",type:"text",label:"Terms",value:"Net 30"}),e.jsx(a,{layout:"aligned",type:"number",label:"Qty",value:"1,250"}),e.jsx(a,{layout:"aligned",type:"date",label:"Due",value:"Dec 17, 2026"}),e.jsx(a,{layout:"aligned",type:"person",label:"Buyer",value:"Priya Raman"}),e.jsx(a,{layout:"aligned",type:"currency",label:"Deposit",value:"$2,500.00"}),e.jsx(a,{layout:"aligned",type:"currency",label:"Deposit",value:"2.500,00 €"})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(c,{gap:"8",alignItems:"stretch",w:"xs",children:[e.jsx(a,{layout:"aligned",type:"currency",label:"Total",value:"$14,044.30"}),e.jsx(a,{layout:"aligned",type:"currency",emphasis:"total",label:"Balance due",value:"$9,044.30"})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs(c,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{label:"Status",value:"On schedule",tone:"neutral"}),e.jsx(a,{label:"Line warning",value:"Lead time 16 weeks",tone:"danger","data-testid":"danger"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:r})=>{const t=l(r).getByTestId("danger"),n=getComputedStyle(l(t).getByText("Line warning:")),s=getComputedStyle(l(t).getByText("Lead time 16 weeks"));await o(n.color).toBe(s.color)}},g={render:()=>e.jsx(N,{w:"224",children:e.jsx(a,{wrap:!0,label:"Ship to",value:"Acme Corp, Receiving Dock 4, 1200 Industrial Parkway"})}),parameters:{controls:{disable:!0}}},Sa="(min-width: 30rem)",Oa="(min-width: 48rem)",b=(r,t)=>{const n=d=>getComputedStyle(l(r).getByText(d)).display!=="none",s=r.querySelector("a");o(n("Customer:")).toBe(t==="horizontal"),o(n("Customer")).toBe(t==="vertical"),o(s&&getComputedStyle(s).fontSize).toBe(t==="horizontal"?"14px":"20px")},S={render:()=>e.jsxs(c,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{base:"horizontal"},"data-testid":"horizontal-base-only"}),e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{base:"vertical",md:"horizontal"},"data-testid":"vertical-then-horizontal"}),e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{md:"vertical"},"data-testid":"horizontal-then-vertical"}),e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer",layout:{base:void 0,md:"vertical"},"data-testid":"undefined-base-then-vertical"}),e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer",layout:[null,"vertical"],"data-testid":"array-without-base"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:r})=>{const t=l(r),n=window.matchMedia(Oa).matches;b(t.getByTestId("horizontal-base-only"),"horizontal"),b(t.getByTestId("vertical-then-horizontal"),n?"horizontal":"vertical"),b(t.getByTestId("horizontal-then-vertical"),n?"vertical":"horizontal"),b(t.getByTestId("undefined-base-then-vertical"),n?"vertical":"horizontal"),b(t.getByTestId("array-without-base"),window.matchMedia(Sa).matches?"vertical":"horizontal")}},h={...S,name:"Responsive Layout"},w={...S,name:"Responsive Layout Narrow",globals:{viewport:{value:"mobile1",isRotated:!1}},play:async r=>{var t;o(window.matchMedia(Sa).matches).toBe(!1),await((t=S.play)==null?void 0:t.call(S,r))}},P={name:"As Link",render:()=>e.jsxs(c,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer",layout:"vertical"})]}),parameters:{controls:{disable:!0}}},T={render:()=>e.jsxs(c,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}}),e.jsx(a,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,inputProps:{name:"poNumberVertical"}})]}),parameters:{controls:{disable:!0}}},x={name:"Editing With Save and Cancel",render:()=>e.jsxs(c,{gap:"24",alignItems:"flex-start",children:[e.jsx(a,{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:u(),onCancel:u(),inputProps:{name:"poNumberConfirm"}}),e.jsx(a,{label:"PO number",value:"PO-88213",layout:"vertical",editing:!0,editMode:"confirm",onSave:u(),onCancel:u(),inputProps:{name:"poNumberConfirmVertical"}})]}),parameters:{controls:{disable:!0}}},f={name:"Ex: Edit in Place",render:function(){const[t,n]=H.useState("PO-88213"),[s,d]=H.useState(!1);return e.jsxs(K,{gap:"8",children:[e.jsx(a,{label:"PO number",value:t,editing:s,editMode:"confirm",onSave:Ba=>{n(Ba),d(!1)},onCancel:()=>d(!1),inputProps:{name:"poNumberInPlace"}}),!s&&e.jsx(Pa,{variant:"ghost",size:"sm",iconName:"edit",altText:"Edit PO number",onClick:()=>d(!0)})]})},parameters:{controls:{disable:!0}}},O={render:()=>e.jsx(N,{w:"224",children:e.jsx(a,{label:"Ship to",value:"Acme Corp, Receiving Dock 4, 1200 Industrial Parkway"})}),parameters:{controls:{disable:!0}}},k={name:"Ex: Page Header Aside",render:()=>e.jsxs(K,{gap:"12",children:[e.jsx(a,{label:"Customer",value:"Acme Corp",href:"#customer"}),e.jsx(z,{direction:"vertical",h:"16"}),e.jsx(a,{label:"Owner",value:"Dana Ortiz"}),e.jsx(z,{direction:"vertical",h:"16"}),e.jsx(a,{label:"Due",value:"Nov 14, 2026"})]}),parameters:{controls:{disable:!0}}},C={name:"Ex: Facts Strip",render:()=>e.jsxs(Ea,{gap:"32",children:[e.jsx(a,{layout:"vertical",label:"Order total",value:"$18,240.00"}),e.jsx(a,{layout:"vertical",label:"Lines",value:"12"}),e.jsx(a,{layout:"vertical",label:"Ship date",value:"Nov 14, 2026"}),e.jsx(a,{layout:"vertical",label:"Customer",value:"Acme Corp",href:"#customer"})]}),parameters:{controls:{disable:!0}}},A={name:"Test: editing labels the input",args:{label:"PO number",value:"PO-88213",editing:!0,inputProps:{name:"poNumber"}},play:async({canvasElement:r})=>{const n=l(r).getByRole("textbox",{name:"PO number:"});await o(n).toHaveValue("PO-88213"),await o(n).toHaveAttribute("name","poNumber")}},R={name:"Test: confirm mode saves and cancels",args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:u(),onCancel:u(),inputProps:{name:"poNumber"}},play:async({args:r,canvasElement:t})=>{const n=l(t),s=n.getByRole("textbox",{name:"PO number:"});await i.clear(s),await i.type(s,"PO-90001"),await i.click(n.getByRole("button",{name:"Save"})),await o(r.onSave).toHaveBeenLastCalledWith("PO-90001"),await i.type(s,"{Enter}"),await o(r.onSave).toHaveBeenCalledTimes(2),await i.type(s,"-X{Escape}"),await o(r.onCancel).toHaveBeenCalledOnce(),await o(s).toHaveValue("PO-88213"),await i.click(n.getByRole("button",{name:"Cancel"})),await o(r.onCancel).toHaveBeenCalledTimes(2)}},j={name:"Test: truncated value shows a tooltip",render:()=>e.jsxs(c,{gap:"12",alignItems:"flex-start",children:[e.jsx(N,{w:"160",children:e.jsx(a,{label:"Ship to",value:"Acme Corp, Receiving Dock 4"})}),e.jsx(a,{label:"Owner",value:"Dana Ortiz"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:r})=>{const t=l(r),n=l(document.body);await i.hover(t.getByText("Acme Corp, Receiving Dock 4")),await o(await n.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await i.unhover(t.getByText("Acme Corp, Receiving Dock 4")),await L(()=>o(n.queryByRole("tooltip")).toBeNull()),await i.tab(),await o(t.getByText("Acme Corp, Receiving Dock 4")).toHaveFocus(),await o(await n.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await o(t.getByText("Dana Ortiz")).not.toHaveAttribute("tabindex"),document.activeElement.blur(),await L(()=>o(n.queryByRole("tooltip")).toBeNull()),await i.hover(t.getByText("Dana Ortiz")),await new Promise(s=>setTimeout(s,200)),await o(n.queryByRole("tooltip")).toBeNull(),await i.unhover(t.getByText("Dana Ortiz"))}},I={name:"Test: tooltip after the value becomes a link",tags:["!snapshot"],render:function(){const[t,n]=H.useState(!1),[s,d]=H.useState(!1);return e.jsxs(c,{gap:"12",alignItems:"flex-start",children:[e.jsxs(K,{gap:"8",children:[e.jsx(V,{onClick:()=>n(!0),children:"Make link"}),e.jsx(V,{onClick:()=>d(!0),children:"Narrow"})]}),e.jsx(N,{w:s?"160":"auto",children:e.jsx(a,{label:"Ship to",value:"Acme Corp, Receiving Dock 4",href:t?"#ship-to":void 0})})]})},parameters:{controls:{disable:!0}},play:async({canvasElement:r})=>{const t=l(r),n=l(document.body);await i.click(t.getByRole("button",{name:"Make link"})),await i.click(t.getByRole("button",{name:"Narrow"}));const s=t.getByRole("link",{name:"Acme Corp, Receiving Dock 4"});await L(()=>o(s.scrollWidth).toBeGreaterThan(s.clientWidth)),await i.hover(s),await o(await n.findByRole("tooltip")).toHaveTextContent("Acme Corp, Receiving Dock 4"),await i.unhover(s)}},D={name:"Test: Enter during IME composition does not save",tags:["!snapshot"],args:{label:"PO number",value:"PO-88213",editing:!0,editMode:"confirm",onSave:u()},play:async({args:r,canvasElement:t})=>{const n=l(t).getByRole("textbox",{name:"PO number:"});M.keyDown(n,{key:"Enter",isComposing:!0}),await o(r.onSave).not.toHaveBeenCalled(),M.keyDown(n,{key:"Enter"}),await o(r.onSave).toHaveBeenCalledOnce()}},F={name:"Test: input mode has no default name and warns about onSave",tags:["!snapshot"],args:{label:"PO number",value:"PO-88213",editing:!0,onSave:u()},beforeEach:()=>{const r=Ta(console,"warn").mockImplementation(()=>{});return()=>r.mockRestore()},play:async({canvasElement:r})=>{const t=l(r).getByRole("textbox",{name:"PO number:"});await o(t.getAttribute("name")??"").toBe("");const n=o.stringContaining('without editMode="confirm"');await o(console.warn).not.toHaveBeenCalledWith(n)}},Ma=["Default","Layouts","Aligned","Types","Emphasis","Tones","Wrapped","ResponsiveLayout","ResponsiveLayoutNarrow","AsLink","Editing","EditingWithSaveAndCancel","ExEditInPlace","Truncated","ExPageHeaderAside","ExFactsStrip","EditingLabelsInput","ConfirmSavesAndCancels","TruncatedShowsTooltip","TooltipAfterBecomingLink","ImeEnterDoesNotSave","InputModeDefaults"];var q,_,$;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...($=(_=B.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var U,G,Q;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <VStack gap="24" alignItems="flex-start">
      <KeyFact label="Customer" value="Acme Corp" layout="horizontal" />
      <KeyFact label="Customer" value="Acme Corp" layout="vertical" />
      <KeyFact label="Customer" value="Acme Corp" layout="aligned" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(G=E.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Y,J,Z,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <VStack gap="32" alignItems="flex-start">
      <VStack gap="8" alignItems="stretch" w="xs" data-testid="wide">
        {alignedFacts}
      </VStack>
      <VStack gap="8" alignItems="stretch" w="224" containerType="inline-size" data-testid="narrow">
        {alignedFacts}
      </VStack>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const directions = (testId: string) => [...within(canvasElement).getByTestId(testId).querySelectorAll('[data-ds-component="KeyFact"] > *')].map(inner => getComputedStyle(inner).flexDirection);
    await expect(directions('wide')).toEqual(Array(5).fill('row'));
    await expect(directions('narrow')).toEqual(Array(5).fill('column'));
  }
}`,...(J=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:`\`aligned\` gives each label the same width, so values line up in a column.
In a container narrower than 15rem, each fact stacks its label over its
value. The second box is 224px wide and is an inline size container.
With no container around it, an aligned fact does not stack.`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,te,ne,re,oe;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <VStack gap="8" alignItems="stretch" w="xs">
      <KeyFact layout="aligned" type="text" label="Terms" value="Net 30" />
      <KeyFact layout="aligned" type="number" label="Qty" value="1,250" />
      <KeyFact layout="aligned" type="date" label="Due" value="Dec 17, 2026" />
      <KeyFact layout="aligned" type="person" label="Buyer" value="Priya Raman" />
      <KeyFact layout="aligned" type="currency" label="Deposit" value="$2,500.00" />
      <KeyFact layout="aligned" type="currency" label="Deposit" value="2.500,00 €" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"`type` sets the look of the value. `number` and `currency` use tabular\nfigures, so digits line up. A `date` does not wrap. Pass the value already\nformatted.",...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};var se,ie,le,ce,ue;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <VStack gap="8" alignItems="stretch" w="xs">
      <KeyFact layout="aligned" type="currency" label="Total" value="$14,044.30" />
      <KeyFact layout="aligned" type="currency" emphasis="total" label="Balance due" value="$9,044.30" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:'`emphasis="total"` shows a large, bold value, for the last row of totals.',...(ue=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ue.description}}};var de,pe,me,ve,ye;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <VStack gap="8" alignItems="flex-start">
      <KeyFact label="Status" value="On schedule" tone="neutral" />
      <KeyFact label="Line warning" value="Lead time 16 weeks" tone="danger" data-testid="danger" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const fact = within(canvasElement).getByTestId('danger');
    const label = getComputedStyle(within(fact).getByText('Line warning:'));
    const value = getComputedStyle(within(fact).getByText('Lead time 16 weeks'));
    await expect(label.color).toBe(value.color);
  }
}`,...(me=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:'`tone="danger"` shows the label and the value in the alert color.',...(ye=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};var ge,be,he,we,xe;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Box w="224">
      <KeyFact wrap label="Ship to" value="Acme Corp, Receiving Dock 4, 1200 Industrial Parkway" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(he=(be=g.parameters)==null?void 0:be.docs)==null?void 0:he.source},description:{story:"`wrap` wraps a long value onto more lines in place of truncating it.",...(xe=(we=g.parameters)==null?void 0:we.docs)==null?void 0:xe.description}}};var fe,ke,Ce,Se,Be;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...responsiveLayoutStory,
  name: 'Responsive Layout'
}`,...(Ce=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source},description:{story:"`layout` accepts conditional values. Resize the viewport across the `md`\nbreakpoint (768px) to see the label and the value switch together. The\narray example switches at the `xs` breakpoint (480px).",...(Be=(Se=h.parameters)==null?void 0:Se.docs)==null?void 0:Be.description}}};var Ee,Pe,Te,Oe,Ae;w.parameters={...w.parameters,docs:{...(Ee=w.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(Pe=w.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source},description:{story:"The same facts below the `md` breakpoint.",...(Ae=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.description}}};var Re,je,Ie;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var De,Fe,He;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(He=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Ne,Le,Ke,Ve,ze;x.parameters={...x.parameters,docs:{...(Ne=x.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ke=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:Ke.source},description:{story:'`editMode="confirm"` adds save and cancel buttons, for a fact saved on its\nown. Enter saves and Escape cancels.',...(ze=(Ve=x.parameters)==null?void 0:Ve.docs)==null?void 0:ze.description}}};var Me,We,qe,_e,$e;f.parameters={...f.parameters,docs:{...(Me=f.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(qe=(We=f.parameters)==null?void 0:We.docs)==null?void 0:qe.source},description:{story:"Use case: a fact that switches to edit in place and saves on its own.",...($e=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:$e.description}}};var Ue,Ge,Qe;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <Box w="224">
      <KeyFact label="Ship to" value="Acme Corp, Receiving Dock 4, 1200 Industrial Parkway" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Qe=(Ge=O.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Xe,Ye,Je,Ze,ea;k.parameters={...k.parameters,docs:{...(Xe=k.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Je=(Ye=k.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source},description:{story:"Use case: three facts in a record page header aside, with thin dividers.",...(ea=(Ze=k.parameters)==null?void 0:Ze.docs)==null?void 0:ea.description}}};var aa,ta,na,ra,oa;C.parameters={...C.parameters,docs:{...(aa=C.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(na=(ta=C.parameters)==null?void 0:ta.docs)==null?void 0:na.source},description:{story:`Use case: a strip of facts under a record title, for records with more
than three facts.`,...(oa=(ra=C.parameters)==null?void 0:ra.docs)==null?void 0:oa.description}}};var sa,ia,la;A.parameters={...A.parameters,docs:{...(sa=A.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(la=(ia=A.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,ua,da;R.parameters={...R.parameters,docs:{...(ca=R.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(da=(ua=R.parameters)==null?void 0:ua.docs)==null?void 0:da.source}}};var pa,ma,va;j.parameters={...j.parameters,docs:{...(pa=j.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(va=(ma=j.parameters)==null?void 0:ma.docs)==null?void 0:va.source}}};var ya,ga,ba;I.parameters={...I.parameters,docs:{...(ya=I.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ba=(ga=I.parameters)==null?void 0:ga.docs)==null?void 0:ba.source}}};var ha,wa,xa;D.parameters={...D.parameters,docs:{...(ha=D.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(xa=(wa=D.parameters)==null?void 0:wa.docs)==null?void 0:xa.source}}};var fa,ka,Ca;F.parameters={...F.parameters,docs:{...(fa=F.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(Ca=(ka=F.parameters)==null?void 0:ka.docs)==null?void 0:Ca.source}}};export{p as Aligned,P as AsLink,R as ConfirmSavesAndCancels,B as Default,T as Editing,A as EditingLabelsInput,x as EditingWithSaveAndCancel,v as Emphasis,f as ExEditInPlace,C as ExFactsStrip,k as ExPageHeaderAside,D as ImeEnterDoesNotSave,F as InputModeDefaults,E as Layouts,h as ResponsiveLayout,w as ResponsiveLayoutNarrow,y as Tones,I as TooltipAfterBecomingLink,O as Truncated,j as TruncatedShowsTooltip,m as Types,g as Wrapped,Ma as __namedExportsOrder,za as default};
