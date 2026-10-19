import{r as g,j as b,V as ee,B as te,T as ae}from"./iframe-DrXb23uF.js";import{A as oe}from"./Avatar-DgwM7Ovz.js";import{u as ne,F as se}from"./FilterMenu-ECO6sUt0.js";import"./preload-helper-BjeX57h0.js";import"./ListItem-NgNJrnAB.js";import"./HighlightText-BGmcZOG6.js";import"./Checkbox-Y_BBQdyF.js";import"./FieldContext-BFzlTw8N.js";import"./Divider-B9MN79b8.js";import"./Toggle-C30mze5D.js";import"./ListItemGroup-Dkw29oyC.js";import"./FloatingLayerContext-wVDRstk1.js";const{expect:e,fn:re,userEvent:s,waitFor:i,within:u}=__STORYBOOK_MODULE_TEST__,ie=({rows:n,label:c,footer:l,multi:o=!1,onSelect:t})=>{const[r,p]=g.useState(null),[y,d]=g.useState(!0),[m,Q]=g.useState(""),[k,T]=g.useState([]),F=m.trim().toLowerCase(),Y=a=>a.type!=="item"||`${a.label} ${a.description??""}`.toLowerCase().includes(F),R=n.filter(Y).map(a=>a.type!=="item"?a:o?{...a,checked:k.includes(a.key)}:{...a,selected:k.includes(a.key)});F&&!R.some(a=>a.type==="item")&&R.push({type:"empty",label:`No match for “${m}”`});const S=ne({rows:R,open:y,onSelect:a=>{t==null||t(a),o?T(A=>A.includes(a)?A.filter(Z=>Z!==a):[...A,a]):(T([a]),d(!1))},onClose:()=>d(!1),spaceSelects:o&&m===""});return b.jsxs(ee,{alignItems:"start",gap:"8",minH:"sm",children:[b.jsx(te,{as:"input",ref:p,...S.inputProps,"aria-label":"Filter or search",placeholder:"Filter or search…",value:m,onChange:a=>{Q(a.target.value),S.setActiveKey(null),d(!0)},onFocus:()=>d(!0),onBlur:()=>d(!1),w:"xs",h:"32",px:"8",borderWidth:"1",borderStyle:"solid",borderColor:"border",borderRadius:"4",bg:"surface",color:"text",fontFamily:"body",fontSize:"body.sm"}),b.jsx(ae,{textStyle:"body.sm",color:"text.subtlest","data-testid":"picked",children:`Picked: ${k.join(", ")||"none"}`}),b.jsx(se,{...S.menuProps,anchor:r,"aria-label":c,query:m,footer:l})]})},le=[{type:"group",label:"Fields"},{type:"item",key:"caseNo",label:"Case #",detail:"number"},{type:"item",key:"caseType",label:"Case Type",detail:"list"},{type:"item",key:"customer",label:"Customer",detail:"lookup"},{type:"item",key:"stage",label:"Stage",detail:"list"},{type:"item",key:"assignedTo",label:"Assigned To",detail:"person"},{type:"item",key:"enteredOn",label:"Entered On",detail:"date"}],ce=[{type:"group",label:"Stage is any of"},{type:"item",key:"open",label:"Open"},{type:"item",key:"inProgress",label:"In progress"},{type:"item",key:"waiting",label:"Waiting on customer"},{type:"item",key:"archived",label:"Archived",disabled:!0},{type:"item",key:"closed",label:"Closed"}],pe=[{type:"group",label:"Resolution is"},{type:"item",key:"@open",label:"All open",detail:"current"},{type:"item",key:"@closed",label:"All closed"},{type:"group",label:"Each resolution"},{type:"item",key:"unresolved",label:"Unresolved"},{type:"item",key:"fixed",label:"Fixed"},{type:"item",key:"wontFix",label:"Will not fix"}],ue=[{type:"group",label:"Customer is"},{type:"item",key:"c-1042",label:"1042",description:"Collings Guitars",detail:"Austin, TX"},{type:"item",key:"c-2210",label:"2210",description:"EastWest Manufacturing",detail:"Dallas, TX"},{type:"item",key:"c-3307",label:"3307",description:"Northwind Fabrication and Assembly Services",detail:"Reno, NV"}],de=[{type:"group",label:"Entered On is between"},{type:"item",key:"last7",label:"Last 7 days",detail:"Jan 8 – Jan 14"},{type:"item",key:"thisMonth",label:"This month",detail:"Jan 1 – Jan 31"},{type:"item",key:"lastMonth",label:"Last month",detail:"Dec 1 – Dec 31"}],Ae={title:"Components/FilterMenu",component:ie,tags:["autodocs"],argTypes:{rows:{control:!1}},args:{rows:le,label:"Fields",footer:"Enter picks · Esc cancels",onSelect:re()},parameters:{layout:"padded"}},w={play:async({args:n,canvasElement:c})=>{const l=u(c),o=u(document.body),t=l.getByRole("combobox",{name:"Filter or search"}),r=d=>o.getByRole("option",{name:d}),p=()=>document.getElementById(t.getAttribute("aria-activedescendant")??""),y=await o.findByRole("listbox",{name:"Fields"});e(t).toHaveAttribute("aria-expanded","true"),e(t).toHaveAttribute("aria-controls",y.id),e(o.getByRole("group",{name:"Fields"})).toBeVisible(),t.focus(),await i(()=>e(t).toHaveFocus()),e(p()).toBe(r("Case # number")),await s.keyboard("{ArrowDown}"),await i(()=>e(p()).toBe(r("Case Type list"))),await s.keyboard("{ArrowUp}{ArrowUp}"),await i(()=>e(p()).toBe(r("Entered On date"))),await s.hover(r("Stage list")),await i(()=>e(p()).toBe(r("Stage list"))),await s.keyboard("{Enter}"),e(n.onSelect).toHaveBeenCalledWith("stage"),await i(()=>e(t).toHaveAttribute("aria-expanded","false")),e(o.queryByRole("listbox")).not.toBeInTheDocument(),e(t).toHaveFocus(),t.blur(),t.focus(),await o.findByRole("listbox")}},v={args:{rows:ce,label:"Stage values",multi:!0,footer:"Space or Enter toggles · Esc closes"},play:async({args:n,canvasElement:c})=>{const l=u(c),o=u(document.body),t=l.getByRole("combobox",{name:"Filter or search"}),r=y=>o.getByRole("option",{name:y}),p=await o.findByRole("listbox",{name:"Stage values"});e(p).toHaveAttribute("aria-multiselectable","true"),t.focus(),await i(()=>e(t).toHaveFocus()),await s.keyboard(" "),await i(()=>e(r("Open")).toHaveAttribute("aria-selected","true")),e(t).toHaveValue(""),await s.click(r("In progress")),await i(()=>e(r("In progress")).toHaveAttribute("aria-selected","true")),e(t).toHaveFocus(),await s.keyboard("{ArrowDown}"),await s.keyboard("{ArrowDown}"),await s.keyboard(" "),await i(()=>e(r("Closed")).toHaveAttribute("aria-selected","true")),e(n.onSelect).not.toHaveBeenCalledWith("archived"),e(l.getByTestId("picked")).toHaveTextContent("Picked: open, inProgress, closed"),await s.keyboard("{Escape}"),await i(()=>e(o.queryByRole("listbox")).not.toBeInTheDocument()),t.blur(),t.focus(),await o.findByRole("listbox")}},x={args:{rows:pe,label:"Resolution values"},play:async()=>{const n=u(document.body);await n.findByRole("listbox",{name:"Resolution values"}),e(n.getByRole("group",{name:"Resolution is"})).toBeVisible(),e(n.getByRole("group",{name:"Each resolution"})).toBeVisible(),e(n.queryByRole("listbox")).not.toHaveAttribute("aria-multiselectable")}},h={args:{rows:ue,label:"Customers",footer:"Type to find · Enter picks · Esc cancels"}},B={args:{rows:de,label:"Date ranges"}},ye=[{type:"group",label:"Assigned To is any of"},...["Brent Barton","David Atkins","Mike Congdon","Taylor Wagen"].map(n=>({type:"item",key:n,label:n,before:b.jsx(oe,{name:n,size:"md"})}))],E={args:{rows:ye,label:"People",multi:!0,footer:"Space or Enter toggles · Esc closes"},play:async()=>{const c=await u(document.body).findByRole("option",{name:/Brent Barton/});e(c.querySelector('[data-ds-component="Avatar"]')).not.toBeNull(),e(c).toHaveAttribute("aria-selected","false")}},f={name:"Ex: Type to narrow",play:async({canvasElement:n})=>{const c=u(n),l=u(document.body),o=c.getByRole("combobox",{name:"Filter or search"});await s.type(o,"ent"),await i(()=>e(l.getAllByRole("option")).toHaveLength(1)),e(l.getByRole("option",{name:"Entered On date"})).toBeVisible(),await s.type(o,"xyz"),e(await l.findByText("No match for “entxyz”")).toBeVisible(),await s.clear(o),await i(()=>e(l.getAllByRole("option")).toHaveLength(6))}},Te=["Default","MultiPick","SinglePickWithGroups","Descriptions","DateRanges","BeforeContent","ExTypeToNarrow"];var H,C,D;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Filter or search'
    });
    const option = (name: string) => screen.getByRole('option', {
      name
    });
    const active = () => document.getElementById(input.getAttribute('aria-activedescendant') ?? '');
    const listbox = await screen.findByRole('listbox', {
      name: 'Fields'
    });
    expect(input).toHaveAttribute('aria-expanded', 'true');
    expect(input).toHaveAttribute('aria-controls', listbox.id);
    expect(screen.getByRole('group', {
      name: 'Fields'
    })).toBeVisible();

    // The first row starts active. The arrows move, and wrap at the ends.
    input.focus();
    await waitFor(() => expect(input).toHaveFocus());
    expect(active()).toBe(option('Case # number'));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(active()).toBe(option('Case Type list')));
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    await waitFor(() => expect(active()).toBe(option('Entered On date')));

    // The pointer moves the same highlight.
    await userEvent.hover(option('Stage list'));
    await waitFor(() => expect(active()).toBe(option('Stage list')));

    // Enter picks the active row and closes the single-pick menu.
    await userEvent.keyboard('{Enter}');
    expect(args.onSelect).toHaveBeenCalledWith('stage');
    await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'false'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(input).toHaveFocus();

    // Focus again reopens the menu for the visual snapshot.
    input.blur();
    input.focus();
    await screen.findByRole('listbox');
  }
}`,...(D=(C=w.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var O,P,I;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    rows: STAGES,
    label: 'Stage values',
    multi: true,
    footer: 'Space or Enter toggles · Esc closes'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Filter or search'
    });
    const option = (name: string) => screen.getByRole('option', {
      name
    });
    const listbox = await screen.findByRole('listbox', {
      name: 'Stage values'
    });
    expect(listbox).toHaveAttribute('aria-multiselectable', 'true');

    // Space toggles the active row. The menu stays open.
    input.focus();
    await waitFor(() => expect(input).toHaveFocus());
    await userEvent.keyboard(' ');
    await waitFor(() => expect(option('Open')).toHaveAttribute('aria-selected', 'true'));
    expect(input).toHaveValue('');

    // A click toggles too, and focus stays in the input.
    await userEvent.click(option('In progress'));
    await waitFor(() => expect(option('In progress')).toHaveAttribute('aria-selected', 'true'));
    expect(input).toHaveFocus();

    // The arrows skip a disabled row.
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard(' ');
    await waitFor(() => expect(option('Closed')).toHaveAttribute('aria-selected', 'true'));
    expect(args.onSelect).not.toHaveBeenCalledWith('archived');
    expect(canvas.getByTestId('picked')).toHaveTextContent('Picked: open, inProgress, closed');

    // Esc closes the menu.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());

    // Focus again reopens the menu for the visual snapshot.
    input.blur();
    input.focus();
    await screen.findByRole('listbox');
  }
}`,...(I=(P=v.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var V,L,M;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    rows: RESOLUTIONS,
    label: 'Resolution values'
  },
  play: async () => {
    const screen = within(document.body);
    await screen.findByRole('listbox', {
      name: 'Resolution values'
    });
    expect(screen.getByRole('group', {
      name: 'Resolution is'
    })).toBeVisible();
    expect(screen.getByRole('group', {
      name: 'Each resolution'
    })).toBeVisible();
    // Single-pick rows have no checkboxes.
    expect(screen.queryByRole('listbox')).not.toHaveAttribute('aria-multiselectable');
  }
}`,...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var N,W,q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    rows: CUSTOMERS,
    label: 'Customers',
    footer: 'Type to find · Enter picks · Esc cancels'
  }
}`,...(q=(W=h.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var U,j,_;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    rows: DATES,
    label: 'Date ranges'
  }
}`,...(_=(j=B.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var z,G,J;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    rows: PEOPLE,
    label: 'People',
    multi: true,
    footer: 'Space or Enter toggles · Esc closes'
  },
  play: async () => {
    const screen = within(document.body);
    const option = await screen.findByRole('option', {
      name: /Brent Barton/
    });
    // The checkbox and the avatar both sit before the label.
    expect(option.querySelector('[data-ds-component="Avatar"]')).not.toBeNull();
    expect(option).toHaveAttribute('aria-selected', 'false');
  }
}`,...(J=(G=E.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var $,K,X;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Ex: Type to narrow',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Filter or search'
    });
    await userEvent.type(input, 'ent');
    await waitFor(() => expect(screen.getAllByRole('option')).toHaveLength(1));
    expect(screen.getByRole('option', {
      name: 'Entered On date'
    })).toBeVisible();
    await userEvent.type(input, 'xyz');
    expect(await screen.findByText('No match for “entxyz”')).toBeVisible();

    // Clear the text for the visual snapshot.
    await userEvent.clear(input);
    await waitFor(() => expect(screen.getAllByRole('option')).toHaveLength(6));
  }
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};export{E as BeforeContent,B as DateRanges,w as Default,h as Descriptions,f as ExTypeToNarrow,v as MultiPick,x as SinglePickWithGroups,Te as __namedExportsOrder,Ae as default};
