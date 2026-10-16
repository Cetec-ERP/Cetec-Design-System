import{m as ce,e as ue,f as pe,g as de,h as me,r as x,s as ye,Y as be,Z as he,$ as ge,j as p,a6 as fe,a7 as we,a8 as ve,B as T,c as ke,d as xe,a as Be,V as Ee,T as Se}from"./iframe-B-lk24Ap.js";import{A as Re}from"./Avatar-CD4F2tfh.js";import{L as Fe,a as Te}from"./ListItem-MZ5LsNrj.js";import{L as Ae}from"./ListItemGroup-loFbYbtK.js";import"./HighlightText-BGyo3Pgb.js";import{u as Me}from"./FloatingLayerContext-T2HncO43.js";import"./preload-helper-DFx2riH-.js";import"./Checkbox-BU5uPFjs.js";import"./FieldContext-GTK9amNt.js";import"./Divider-3kQbOq82.js";import"./Toggle-ZWMDOa2O.js";const ie={layer:"elevated"},Ce=[],De=[["root","filterMenu__root"],["listbox","filterMenu__listbox"],["checkbox","filterMenu__checkbox"],["before","filterMenu__before"],["empty","filterMenu__empty"],["footer","filterMenu__footer"]],He=De.map(([t,o])=>[t,de(o,ie,me(Ce,t))]),qe=ce((t={})=>Object.fromEntries(He.map(([o,a])=>[o,a.recipeFn(t)]))),L=["layer"],Ie=t=>({...ie,...ue(t)}),Pe=Object.assign(qe,{__recipe__:!1,__name__:"filterMenu",raw:t=>t,classNameMap:{},variantKeys:L,variantMap:{layer:["elevated","modalFloating"]},splitVariantProps(t){return pe(t,L)},getVariantProps:Ie}),_=(t,o)=>`${t}-option-${encodeURIComponent(o)}`,Oe=t=>t.type==="item"&&!t.disabled,_e=t=>{var h;const{rows:o,open:a,onSelect:r,onClose:s,spaceSelects:c=!1,id:l}=t,w=x.useId(),y=l??`filter-menu-${w.replace(/:/g,"")}`,[v,B]=x.useState(null),b=o.filter(Oe),d=b.some(u=>u.key===v)?v:((h=b[0])==null?void 0:h.key)??null,S=u=>{if(b.length===0)return;const i=(b.findIndex(R=>R.key===d)+u+b.length)%b.length;B(b[i].key)},F=u=>{if(a&&!(u.nativeEvent.isComposing||u.keyCode===229))switch(u.key){case"ArrowDown":u.preventDefault(),S(1);break;case"ArrowUp":u.preventDefault(),S(-1);break;case"Enter":if(d===null)return;u.preventDefault(),r(d);break;case" ":if(!c||d===null)return;u.preventDefault(),r(d);break;case"Escape":u.preventDefault(),s();break}};return{activeKey:d,setActiveKey:B,inputProps:{role:"combobox","aria-expanded":a,"aria-controls":a?y:void 0,"aria-autocomplete":"list","aria-activedescendant":a&&d!==null?_(y,d):void 0,onKeyDown:F},menuProps:{id:y,open:a,rows:o,activeKey:d,onActiveKeyChange:B,onSelect:r}}},Le=t=>{const o=[{rows:[]}];for(const a of t)a.type==="group"?o.push({label:a.label,rows:[]}):o[o.length-1].rows.push(a);return o.filter(a=>a.label!==void 0||a.rows.length>0)},le=t=>{const{open:o,anchor:a,rows:r,id:s,"aria-label":c,activeKey:l,onActiveKeyChange:w,onSelect:y,query:v,footer:B,...b}=t,[d,S]=ye(b),F=Me(),h=Pe({layer:F}),u=x.useRef(null),k=be({open:o,onOpenChange:()=>{},middleware:he({extras:[ge()]})});if(x.useLayoutEffect(()=>{k.refs.setReference(a)},[a,k.refs]),x.useEffect(()=>{var m,M;if(!o||l==null)return;const e=(m=u.current)==null?void 0:m.querySelector(`#${CSS.escape(_(s,l))}`);(M=e==null?void 0:e.scrollIntoView)==null||M.call(e,{block:"nearest"})},[o,l,s]),!o||!a)return null;const i=e=>{const m=e.checked!==void 0&&p.jsx(Be,{name:e.checked?"checkbox-checked":"checkbox",fill:e.checked?"icon":"icon.subtlest",className:h.checkbox,"aria-hidden":!0});return m?e.before===void 0?m:p.jsxs(T,{as:"span",className:h.before,children:[m,e.before]}):e.before},R=e=>p.jsx(Te,{id:_(s,e.key),label:e.label,description:e.description,before:i(e),after:e.detail,selected:e.checked??e.selected??!1,disabled:e.disabled,tabIndex:-1,bg:e.key===l?"bg.neutral.hovered":void 0,"data-active":e.key===l||void 0,onMouseDown:m=>m.preventDefault(),onMouseMove:()=>{!e.disabled&&e.key!==l&&(w==null||w(e.key))},onClick:()=>{e.disabled||y(e.key)}},e.key),A=e=>e.map((m,M)=>m.type==="item"?R(m):p.jsx(T,{role:"status",className:h.empty,children:m.label},`empty-${M}`));return p.jsx(fe,{children:p.jsx(we,{reference:k.elements.domReference,children:p.jsx(ve,{context:k.context,modal:!1,initialFocus:-1,returnFocus:!1,children:p.jsxs(T,{...xe("FilterMenu"),ref:k.refs.setFloating,style:k.floatingStyles,className:ke(h.root,d),onMouseDown:e=>e.preventDefault(),...S,children:[p.jsx(Fe,{ref:u,id:s,role:"listbox","aria-label":c,"aria-multiselectable":r.some(e=>e.type==="item"&&e.checked!==void 0)||void 0,density:"compact",query:v,highlightMatches:!!v,className:h.listbox,children:Le(r).map((e,m)=>e.label===void 0?A(e.rows):p.jsx(Ae,{label:e.label,role:"group","aria-label":e.label,children:A(e.rows)},`${e.label}-${m}`))}),B&&p.jsx(T,{className:h.footer,children:B})]})})})})};le.__docgenInfo={description:`The popup list of a filter field: grouped rows, checkboxes for multi-pick
lists, end-of-row detail, an empty line and a hint footer.

Focus stays in the owner's input, as in a combobox, so the menu never
takes focus. Pair it with {@link useFilterMenu}, which adds the input's
ARIA attributes and the arrow, Enter, Space and Esc keys. Use \`Menu\` for
an action menu that takes focus, and \`Autocomplete\` for a form field.

Renders a \`listbox\` in a portal, positioned under \`anchor\`.

@example
\`\`\`tsx
const menu = useFilterMenu({ rows, open, onSelect: pick, onClose: close });
<input ref={setInput} {...menu.inputProps} aria-label="Filter" />
<FilterMenu {...menu.menuProps} anchor={input} aria-label="Fields" />
\`\`\``,methods:[],displayName:"FilterMenu",props:{open:{required:!0,tsType:{name:"boolean"},description:"Shows the menu. The owner of the input decides when it opens and closes."},anchor:{required:!0,tsType:{name:"union",raw:"Element | null",elements:[{name:"Element"},{name:"null"}]},description:"Element the menu opens under, such as the filter input or a token.\nThe menu does not render while this is `null`."},rows:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { type: 'group'; label: string }
| FilterMenuItemRow
| { type: 'empty'; label: string }`,elements:[{name:"signature",type:"object",raw:"{ type: 'group'; label: string }",signature:{properties:[{key:"type",value:{name:"literal",value:"'group'",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'item';
  /** Stable key, unique in the menu. Passed to \`onSelect\`. */
  key: string;
  /** Visible row text. Matches of the menu's \`query\` are highlighted. */
  label: string;
  /**
   * Content before the label, such as an avatar or a status dot. It comes
   * after the checkbox when the row has one.
   */
  before?: ReactNode;
  /** Second line of text under the label, such as a customer name. */
  description?: string;
  /**
   * Short text at the end of the row, such as "current", a count or a date
   * range. It does not wrap.
   */
  detail?: string;
  /**
   * Shows a checkbox for a multi-pick list. \`true\` checks it. Leave it
   * undefined for a single-pick row, which shows no checkbox.
   */
  checked?: boolean;
  /** Marks the current value of a single-pick list. Sets \`aria-selected\`. */
  selected?: boolean;
  /** Skips the row in keyboard moves and ignores clicks. */
  disabled?: boolean;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'item'",required:!0}},{key:"key",value:{name:"string",required:!0},description:"Stable key, unique in the menu. Passed to `onSelect`."},{key:"label",value:{name:"string",required:!0},description:"Visible row text. Matches of the menu's `query` are highlighted."},{key:"before",value:{name:"ReactNode",required:!1},description:`Content before the label, such as an avatar or a status dot. It comes
after the checkbox when the row has one.`},{key:"description",value:{name:"string",required:!1},description:"Second line of text under the label, such as a customer name."},{key:"detail",value:{name:"string",required:!1},description:`Short text at the end of the row, such as "current", a count or a date
range. It does not wrap.`},{key:"checked",value:{name:"boolean",required:!1},description:"Shows a checkbox for a multi-pick list. `true` checks it. Leave it\nundefined for a single-pick row, which shows no checkbox."},{key:"selected",value:{name:"boolean",required:!1},description:"Marks the current value of a single-pick list. Sets `aria-selected`."},{key:"disabled",value:{name:"boolean",required:!1},description:"Skips the row in keyboard moves and ignores clicks."}]}},{name:"signature",type:"object",raw:"{ type: 'empty'; label: string }",signature:{properties:[{key:"type",value:{name:"literal",value:"'empty'",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterMenuRow[]"},description:"Rows to show, in order."},id:{required:!0,tsType:{name:"string"},description:"Listbox id. The input points to it with `aria-controls`."},"aria-label":{required:!0,tsType:{name:"string"},description:'Accessible name of the listbox, such as "Fields" or "Stage values".'},activeKey:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Key of the highlighted row. Enter in the input picks this row."},onActiveKeyChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Runs when the pointer moves over a pickable row."},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Runs when a pickable row is clicked. Focus stays where it was."},query:{required:!1,tsType:{name:"string"},description:"Typed text. Matches in row labels and descriptions are highlighted."},footer:{required:!1,tsType:{name:"ReactNode"},description:'Hint line under the list, such as "Enter picks · Esc cancels".'}}};const{expect:n,fn:je,userEvent:g,waitFor:f,within:E}=__STORYBOOK_MODULE_TEST__,Ne=({rows:t,label:o,footer:a,multi:r=!1,onSelect:s})=>{const[c,l]=x.useState(null),[w,y]=x.useState(!0),[v,B]=x.useState(""),[b,d]=x.useState([]),S=v.trim().toLowerCase(),F=i=>i.type!=="item"||`${i.label} ${i.description??""}`.toLowerCase().includes(S),h=t.filter(F).map(i=>i.type!=="item"?i:r?{...i,checked:b.includes(i.key)}:{...i,selected:b.includes(i.key)});S&&!h.some(i=>i.type==="item")&&h.push({type:"empty",label:`No match for “${v}”`});const k=_e({rows:h,open:w,onSelect:i=>{s==null||s(i),r?d(R=>R.includes(i)?R.filter(A=>A!==i):[...R,i]):(d([i]),y(!1))},onClose:()=>y(!1),spaceSelects:r&&v===""});return p.jsxs(Ee,{alignItems:"start",gap:"8",minH:"sm",children:[p.jsx(T,{as:"input",ref:l,...k.inputProps,"aria-label":"Filter or search",placeholder:"Filter or search…",value:v,onChange:i=>{B(i.target.value),k.setActiveKey(null),y(!0)},onFocus:()=>y(!0),onBlur:()=>y(!1),w:"xs",h:"32",px:"8",borderWidth:"1",borderStyle:"solid",borderColor:"border",borderRadius:"4",bg:"surface",color:"text",fontFamily:"body",fontSize:"body.sm"}),p.jsx(Se,{textStyle:"body.sm",color:"text.subtlest","data-testid":"picked",children:`Picked: ${b.join(", ")||"none"}`}),p.jsx(le,{...k.menuProps,anchor:c,"aria-label":o,query:v,footer:a})]})},Ve=[{type:"group",label:"Fields"},{type:"item",key:"caseNo",label:"Case #",detail:"number"},{type:"item",key:"caseType",label:"Case Type",detail:"list"},{type:"item",key:"customer",label:"Customer",detail:"lookup"},{type:"item",key:"stage",label:"Stage",detail:"list"},{type:"item",key:"assignedTo",label:"Assigned To",detail:"person"},{type:"item",key:"enteredOn",label:"Entered On",detail:"date"}],Ke=[{type:"group",label:"Stage is any of"},{type:"item",key:"open",label:"Open"},{type:"item",key:"inProgress",label:"In progress"},{type:"item",key:"waiting",label:"Waiting on customer"},{type:"item",key:"archived",label:"Archived",disabled:!0},{type:"item",key:"closed",label:"Closed"}],Ue=[{type:"group",label:"Resolution is"},{type:"item",key:"@open",label:"All open",detail:"current"},{type:"item",key:"@closed",label:"All closed"},{type:"group",label:"Each resolution"},{type:"item",key:"unresolved",label:"Unresolved"},{type:"item",key:"fixed",label:"Fixed"},{type:"item",key:"wontFix",label:"Will not fix"}],$e=[{type:"group",label:"Customer is"},{type:"item",key:"c-1042",label:"1042",description:"Collings Guitars",detail:"Austin, TX"},{type:"item",key:"c-2210",label:"2210",description:"EastWest Manufacturing",detail:"Dallas, TX"},{type:"item",key:"c-3307",label:"3307",description:"Northwind Fabrication and Assembly Services",detail:"Reno, NV"}],We=[{type:"group",label:"Entered On is between"},{type:"item",key:"last7",label:"Last 7 days",detail:"Jan 8 – Jan 14"},{type:"item",key:"thisMonth",label:"This month",detail:"Jan 1 – Jan 31"},{type:"item",key:"lastMonth",label:"Last month",detail:"Dec 1 – Dec 31"}],st={title:"Components/FilterMenu",component:Ne,tags:["autodocs"],argTypes:{rows:{control:!1}},args:{rows:Ve,label:"Fields",footer:"Enter picks · Esc cancels",onSelect:je()},parameters:{layout:"padded"}},C={play:async({args:t,canvasElement:o})=>{const a=E(o),r=E(document.body),s=a.getByRole("combobox",{name:"Filter or search"}),c=y=>r.getByRole("option",{name:y}),l=()=>document.getElementById(s.getAttribute("aria-activedescendant")??""),w=await r.findByRole("listbox",{name:"Fields"});n(s).toHaveAttribute("aria-expanded","true"),n(s).toHaveAttribute("aria-controls",w.id),n(r.getByRole("group",{name:"Fields"})).toBeVisible(),s.focus(),await f(()=>n(s).toHaveFocus()),n(l()).toBe(c("Case # number")),await g.keyboard("{ArrowDown}"),await f(()=>n(l()).toBe(c("Case Type list"))),await g.keyboard("{ArrowUp}{ArrowUp}"),await f(()=>n(l()).toBe(c("Entered On date"))),await g.hover(c("Stage list")),await f(()=>n(l()).toBe(c("Stage list"))),await g.keyboard("{Enter}"),n(t.onSelect).toHaveBeenCalledWith("stage"),await f(()=>n(s).toHaveAttribute("aria-expanded","false")),n(r.queryByRole("listbox")).not.toBeInTheDocument(),n(s).toHaveFocus(),s.blur(),s.focus(),await r.findByRole("listbox")}},D={args:{rows:Ke,label:"Stage values",multi:!0,footer:"Space or Enter toggles · Esc closes"},play:async({args:t,canvasElement:o})=>{const a=E(o),r=E(document.body),s=a.getByRole("combobox",{name:"Filter or search"}),c=w=>r.getByRole("option",{name:w}),l=await r.findByRole("listbox",{name:"Stage values"});n(l).toHaveAttribute("aria-multiselectable","true"),s.focus(),await f(()=>n(s).toHaveFocus()),await g.keyboard(" "),await f(()=>n(c("Open")).toHaveAttribute("aria-selected","true")),n(s).toHaveValue(""),await g.click(c("In progress")),await f(()=>n(c("In progress")).toHaveAttribute("aria-selected","true")),n(s).toHaveFocus(),await g.keyboard("{ArrowDown}"),await g.keyboard("{ArrowDown}"),await g.keyboard(" "),await f(()=>n(c("Closed")).toHaveAttribute("aria-selected","true")),n(t.onSelect).not.toHaveBeenCalledWith("archived"),n(a.getByTestId("picked")).toHaveTextContent("Picked: open, inProgress, closed"),await g.keyboard("{Escape}"),await f(()=>n(r.queryByRole("listbox")).not.toBeInTheDocument()),s.blur(),s.focus(),await r.findByRole("listbox")}},H={args:{rows:Ue,label:"Resolution values"},play:async()=>{const t=E(document.body);await t.findByRole("listbox",{name:"Resolution values"}),n(t.getByRole("group",{name:"Resolution is"})).toBeVisible(),n(t.getByRole("group",{name:"Each resolution"})).toBeVisible(),n(t.queryByRole("listbox")).not.toHaveAttribute("aria-multiselectable")}},q={args:{rows:$e,label:"Customers",footer:"Type to find · Enter picks · Esc cancels"}},I={args:{rows:We,label:"Date ranges"}},ze=[{type:"group",label:"Assigned To is any of"},...["Brent Barton","David Atkins","Mike Congdon","Taylor Wagen"].map(t=>({type:"item",key:t,label:t,before:p.jsx(Re,{name:t,size:"md"})}))],P={args:{rows:ze,label:"People",multi:!0,footer:"Space or Enter toggles · Esc closes"},play:async()=>{const o=await E(document.body).findByRole("option",{name:/Brent Barton/});n(o.querySelector('[data-ds-component="Avatar"]')).not.toBeNull(),n(o).toHaveAttribute("aria-selected","false")}},O={name:"Ex: Type to narrow",play:async({canvasElement:t})=>{const o=E(t),a=E(document.body),r=o.getByRole("combobox",{name:"Filter or search"});await g.type(r,"ent"),await f(()=>n(a.getAllByRole("option")).toHaveLength(1)),n(a.getByRole("option",{name:"Entered On date"})).toBeVisible(),await g.type(r,"xyz"),n(await a.findByText("No match for “entxyz”")).toBeVisible(),await g.clear(r),await f(()=>n(a.getAllByRole("option")).toHaveLength(6))}},rt=["Default","MultiPick","SinglePickWithGroups","Descriptions","DateRanges","BeforeContent","ExTypeToNarrow"];var j,N,V;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(N=C.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var K,U,$;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(U=D.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var W,z,G;H.parameters={...H.parameters,docs:{...(W=H.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(z=H.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,X,Y;q.parameters={...q.parameters,docs:{...(J=q.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    rows: CUSTOMERS,
    label: 'Customers',
    footer: 'Type to find · Enter picks · Esc cancels'
  }
}`,...(Y=(X=q.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Q,Z,ee;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    rows: DATES,
    label: 'Date ranges'
  }
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,re;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=O.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};export{P as BeforeContent,I as DateRanges,C as Default,q as Descriptions,O as ExTypeToNarrow,D as MultiPick,H as SinglePickWithGroups,rt as __namedExportsOrder,st as default};
