import{D as m,j as e,B as n,b as ve,T as ue,r as me}from"./iframe-BphCB5JL.js";import{B as A}from"./Button-B1-jm9qp.js";import{M as Be,a as D}from"./SubMenu-Bzyi4Q2c.js";import{M as be,a as xe,b as ge}from"./ModalWrapper-SWeVij-r.js";import"./Modal-BDca27jm.js";import"./ConfirmationModal-B499N3fW.js";import{S as b,a as i}from"./Select-C4zfRZlF.js";import"./preload-helper-AHsI9dVr.js";import"./Spinner-BEYNXDzU.js";import"./FieldContext-laHYXYCE.js";import"./HighlightText-CEFrl-aJ.js";import"./menu-BkVM3DBR.js";import"./FloatingLayerContext-DW2TijO3.js";import"./ListItemGroup-BYLI_mR9.js";import"./Divider-DJZieejI.js";import"./Checkbox-TF_aSGw2.js";import"./Toggle-CTjixa5s.js";import"./mq.hook-EUASZNQ9.js";import"./breakpoints-DU_5_Zhy.js";import"./Heading-CXQdli8W.js";import"./IconButton-BHD5H1-w.js";import"./dsPart-nnoJM9m6.js";import"./Chip-xc13uUeL.js";import"./ListItem-DyO8r2JV.js";const{expect:o,userEvent:h,within:l}=__STORYBOOK_MODULE_TEST__,d=({name:t})=>{const a=ve();return e.jsx(n,{"data-probe":t,"data-chain":a.join(">"),p:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",children:e.jsxs(ue,{children:[t,": ",a.join(">")||"(empty)"]})})},c=(t,a)=>{var s;return(s=t.querySelector(`[data-probe="${a}"]`))==null?void 0:s.getAttribute("data-chain")},Ge={title:"Components/DsChainScope",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Adds a test id to the interaction chain shared with a subtree. `Box` opens a scope automatically whenever it receives a `data-testid`, so this component is only needed around raw DOM that does not render through `Box`."}}},args:{testId:"scope"}},x={render:()=>e.jsx(m,{testId:"order-table",children:e.jsx(m,{testId:"order-row",children:e.jsx(d,{name:"default"})})}),parameters:{controls:{disable:!0}}},g={name:"Chain: Tagged Ancestors Accumulate",render:()=>e.jsxs(n,{display:"grid",gap:"12",children:[e.jsx(d,{name:"untracked"}),e.jsxs(n,{"data-testid":"page",display:"grid",gap:"12",children:[e.jsx(d,{name:"page"}),e.jsxs(n,{display:"grid",gap:"12",children:[e.jsx(d,{name:"untagged"}),e.jsx(n,{"data-testid":"panel",display:"grid",gap:"12",children:e.jsx(d,{name:"panel"})})]})]})]}),play:async({canvasElement:t})=>{o(c(t,"untracked")).toBe(""),o(c(t,"page")).toBe("page"),o(c(t,"untagged")).toBe("page"),o(c(t,"panel")).toBe("page>panel")},parameters:{controls:{disable:!0}}},v={name:"Chain: Depth Is Bounded At Five",render:()=>e.jsx(n,{"data-testid":"one",children:e.jsx(n,{"data-testid":"two",children:e.jsx(n,{"data-testid":"three",children:e.jsx(n,{"data-testid":"four",children:e.jsx(n,{"data-testid":"five",children:e.jsx(n,{"data-testid":"six",children:e.jsx(n,{"data-testid":"seven",children:e.jsx(d,{name:"deep"})})})})})})})}),play:async({canvasElement:t})=>{o(c(t,"deep")).toBe("three>four>five>six>seven")},parameters:{controls:{disable:!0}}},B={name:"Chain: A Repeated Node Is Collapsed",render:()=>e.jsxs(n,{"data-testid":"page",children:[e.jsx(m,{testId:"status",children:e.jsx(n,{"data-testid":"status",children:e.jsx(d,{name:"collapsed"})})}),e.jsx(n,{"data-testid":"grid",children:e.jsx(n,{"data-testid":"row",children:e.jsx(n,{"data-testid":"grid",children:e.jsx(d,{name:"nested"})})})})]}),play:async({canvasElement:t})=>{o(c(t,"collapsed")).toBe("page>status"),o(c(t,"nested")).toBe("page>grid>row>grid")},parameters:{controls:{disable:!0}}},y={name:"Ex: Scope Around Raw DOM",render:()=>e.jsx(n,{"data-testid":"order-table",children:e.jsx(m,{testId:"order-row",children:e.jsx("div",{"data-testid":"order-row",children:e.jsx(d,{name:"raw"})})})}),play:async({canvasElement:t})=>{o(c(t,"raw")).toBe("order-table>order-row")},parameters:{controls:{disable:!0}}},j={name:"Ex: Portaled Listbox Carries The Chain",render:()=>e.jsx(n,{"data-testid":"page",children:e.jsx(n,{"data-testid":"filters",children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(i,{value:"draft",label:"Draft"}),e.jsx(i,{value:"published",label:"Published"})]})})}),play:async({canvasElement:t})=>{const a=l(t),s=l(t.ownerDocument.body),r=a.getByRole("combobox",{name:/status/i});r.focus(),await h.keyboard("{ArrowDown}");const p=await s.findByRole("listbox");o(r.contains(p)).toBe(!1);const u=p.closest("[data-ds-chain]");o(u).not.toBeNull(),o(u).toHaveAttribute("data-ds-chain","page>filters")},parameters:{controls:{disable:!0}}},w={name:"Ex: Portal Boundary Is Findable With No Chain",render:()=>e.jsx(n,{children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(i,{value:"draft",label:"Draft"}),e.jsx(i,{value:"published",label:"Published"})]})}),play:async({canvasElement:t})=>{const a=l(t),s=l(t.ownerDocument.body);a.getByRole("combobox",{name:/status/i}).focus(),await h.keyboard("{ArrowDown}");const u=(await s.findByRole("listbox")).closest("[data-ds-portal-root]");o(u).not.toBeNull(),o(u).not.toHaveAttribute("data-ds-chain")},parameters:{controls:{disable:!0}}},ye=()=>{const[t,a]=me.useState(!1);return e.jsxs(n,{"data-testid":"page",children:[e.jsx(A,{onClick:()=>a(!0),children:"Open modal"}),e.jsxs(be,{open:t,onOpenChange:a,children:[e.jsx(xe,{children:"Assign owner"}),e.jsx(ge,{children:e.jsx(n,{"data-testid":"owner-field",children:e.jsxs(Be,{trigger:e.jsx(A,{iconAfter:"caret-down",children:"Choose owner"}),children:[e.jsx(D,{label:"Ada Lovelace"}),e.jsx(D,{label:"Grace Hopper"})]})})})]})]})},f={name:"Ex: Portal Inside A Portal",render:()=>e.jsx(ye,{}),play:async({canvasElement:t})=>{const a=l(t),s=l(t.ownerDocument.body);await h.click(a.getByRole("button",{name:/open modal/i}));const r=(await s.findByText("Assign owner")).closest("[data-ds-chain]");o(r).toHaveAttribute("data-ds-chain","page"),await h.click(s.getByText("Choose owner"));const p=(await s.findByText("Ada Lovelace")).closest("[data-ds-chain]");o(p).toHaveAttribute("data-ds-chain","page>owner-field"),o(p).not.toBe(r),o(r==null?void 0:r.contains(p??null)).toBe(!1)},parameters:{controls:{disable:!0}}},P=async t=>(l(t).getByRole("combobox",{name:/status/i}).focus(),await h.keyboard("{ArrowDown}"),(await l(t.ownerDocument.body).findByRole("listbox")).closest("[data-ds-portal-root]")),E={name:"Ex: Portaled Listbox Carries The Object",render:()=>e.jsx(n,{"data-track-object":"orderline",children:e.jsx(n,{"data-testid":"page",children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(i,{value:"draft",label:"Draft"}),e.jsx(i,{value:"published",label:"Published"})]})})}),play:async({canvasElement:t})=>{const a=await P(t);o(a==null?void 0:a.closest("[data-track-object]")).toBe(a),o(a).toHaveAttribute("data-track-object","orderline")},parameters:{controls:{disable:!0}}},C={name:"Ex: Nearest Object Wins",render:()=>e.jsx(n,{"data-track-object":"order",children:e.jsx(n,{"data-track-object":"orderline",children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(i,{value:"draft",label:"Draft"}),e.jsx(i,{value:"published",label:"Published"})]})})}),play:async({canvasElement:t})=>{const a=await P(t);o(a).toHaveAttribute("data-track-object","orderline")},parameters:{controls:{disable:!0}}},S={name:"Ex: Untagged Page Yields No Object",render:()=>e.jsx(n,{children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(i,{value:"draft",label:"Draft"}),e.jsx(i,{value:"published",label:"Published"})]})}),play:async({canvasElement:t})=>{const a=await P(t);o(a).not.toBeNull(),o(a).not.toHaveAttribute("data-track-object")},parameters:{controls:{disable:!0}}},je=()=>{const[t,a]=me.useState(!1);return e.jsxs(n,{"data-track-object":"orderline",children:[e.jsx(A,{onClick:()=>a(!0),children:"Open modal"}),e.jsxs(be,{open:t,onOpenChange:a,children:[e.jsx(xe,{children:"Assign owner"}),e.jsx(ge,{children:e.jsx(ue,{children:"Nothing here resolves to an object."})})]})]})},R={name:"Ex: Modal Resolves No Object",render:()=>e.jsx(je,{}),play:async({canvasElement:t})=>{const a=l(t),s=l(t.ownerDocument.body);await h.click(a.getByRole("button",{name:/open modal/i}));const r=(await s.findByText("Assign owner")).closest("[data-ds-portal-root]");o(r).not.toBeNull(),o(r).not.toHaveAttribute("data-track-object")},parameters:{controls:{disable:!0}}},$e=["Default","ChainBuildsAcrossTaggedElements","ChainKeepsTheNearestFive","RepeatedNodeIsCollapsed","ScopeCoversRawDom","PortalStampsResolvedChain","PortalRootIsMarkedWithoutAChain","NestedPortalsCompose","PortalCarriesTheObject","NearestObjectWins","UntaggedPageYieldsNoObject","ModalHasNoOpeningElement"];var T,O,k;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <DsChainScope testId="order-table">
      <DsChainScope testId="order-row">
        <ChainProbe name="default" />
      </DsChainScope>
    </DsChainScope>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(O=x.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var N,M,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Chain: Tagged Ancestors Accumulate',
  render: () => <Box display="grid" gap="12">
      <ChainProbe name="untracked" />
      <Box data-testid="page" display="grid" gap="12">
        <ChainProbe name="page" />
        {/* Untagged Box: present in the DOM, absent from the chain. */}
        <Box display="grid" gap="12">
          <ChainProbe name="untagged" />
          <Box data-testid="panel" display="grid" gap="12">
            <ChainProbe name="panel" />
          </Box>
        </Box>
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // A probe outside every scope reads the shared empty chain.
    expect(readProbe(canvasElement, 'untracked')).toBe('');

    // A tagged Box pushes its own \`data-testid\` for its subtree.
    expect(readProbe(canvasElement, 'page')).toBe('page');

    // An untagged Box between two tagged ones contributes nothing.
    expect(readProbe(canvasElement, 'untagged')).toBe('page');

    // Nested tags accumulate nearest-last.
    expect(readProbe(canvasElement, 'panel')).toBe('page>panel');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(M=g.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var L,I,W;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Chain: Depth Is Bounded At Five',
  render: () => <Box data-testid="one">
      <Box data-testid="two">
        <Box data-testid="three">
          <Box data-testid="four">
            <Box data-testid="five">
              <Box data-testid="six">
                <Box data-testid="seven">
                  <ChainProbe name="deep" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // Seven tagged ancestors, nearest five retained.
    expect(readProbe(canvasElement, 'deep')).toBe('three>four>five>six>seven');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(I=v.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var _,F,U;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Chain: A Repeated Node Is Collapsed',
  render: () => <Box data-testid="page">
      {/*
        The scope and the element carry the same id. A component that opens a
        scope above its root and also writes the id on an inner element
        produces this, and so does a consumer wrapping a tagged component.
       */}
      <DsChainScope testId="status">
        <Box data-testid="status">
          <ChainProbe name="collapsed" />
        </Box>
      </DsChainScope>

      {/* Only the innermost node is compared, so real nesting still counts. */}
      <Box data-testid="grid">
        <Box data-testid="row">
          <Box data-testid="grid">
            <ChainProbe name="nested" />
          </Box>
        </Box>
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // Not \`page>status>status\` — the repeat carries nothing and would spend
    // one of five slots.
    expect(readProbe(canvasElement, 'collapsed')).toBe('page>status');

    // A grid inside a grid is real structure, so the repeat is kept.
    expect(readProbe(canvasElement, 'nested')).toBe('page>grid>row>grid');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(F=B.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var Y,K,q;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Ex: Scope Around Raw DOM',
  render: () => <Box data-testid="order-table">
      {/* A raw element never reaches Box, so the scope supplies the node. */}
      <DsChainScope testId="order-row">
        <div data-testid="order-row">
          <ChainProbe name="raw" />
        </div>
      </DsChainScope>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    expect(readProbe(canvasElement, 'raw')).toBe('order-table>order-row');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var G,$,z;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Ex: Portaled Listbox Carries The Chain',
  render: () => <Box data-testid="page">
      <Box data-testid="filters">
        <Select aria-label="Status" placeholder="Choose a status...">
          <SelectOption value="draft" label="Draft" />
          <SelectOption value="published" label="Published" />
        </Select>
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('combobox', {
      name: /status/i
    });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = await screen.findByRole('listbox');

    // The problem this solves: the listbox has no DOM ancestry to its opener.
    expect(trigger.contains(listbox)).toBe(false);

    // The portal root carries the chain from the opener's React-tree position.
    const portalRoot = listbox.closest('[data-ds-chain]');
    expect(portalRoot).not.toBeNull();
    expect(portalRoot).toHaveAttribute('data-ds-chain', 'page>filters');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(z=($=j.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var J,Q,V;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Ex: Portal Boundary Is Findable With No Chain',
  render: () =>
  // Deliberately untagged: no ancestor carries a \`data-testid\`, which is the
  // state of almost every screen before anyone tags it.
  <Box>
      <Select aria-label="Status" placeholder="Choose a status...">
        <SelectOption value="draft" label="Draft" />
        <SelectOption value="published" label="Published" />
      </Select>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('combobox', {
      name: /status/i
    });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = await screen.findByRole('listbox');
    const portalRoot = listbox.closest('[data-ds-portal-root]');

    // The marker is unconditional, so the boundary is findable.
    expect(portalRoot).not.toBeNull();

    // The chain is not: an empty chain emits no attribute, so a reader can
    // tell "resolved to nothing" from "never resolved". Without the marker
    // this element would be an ordinary div and a walk-up would pass straight
    // through it into \`document.body\`.
    expect(portalRoot).not.toHaveAttribute('data-ds-chain');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Ex: Portal Inside A Portal',
  render: () => <NestedPortalsExample />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /open modal/i
    }));
    const modalRoot = (await screen.findByText('Assign owner')).closest('[data-ds-chain]');
    expect(modalRoot).toHaveAttribute('data-ds-chain', 'page');
    await userEvent.click(screen.getByText('Choose owner'));
    const menuRoot = (await screen.findByText('Ada Lovelace')).closest('[data-ds-chain]');

    // The menu opened from inside the modal, and its chain continues past it.
    expect(menuRoot).toHaveAttribute('data-ds-chain', 'page>owner-field');

    // Both portals are siblings in the body, so the composition came from the
    // React tree rather than from DOM containment.
    expect(menuRoot).not.toBe(modalRoot);
    expect(modalRoot?.contains(menuRoot ?? null)).toBe(false);
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Ex: Portaled Listbox Carries The Object',
  render: () =>
  // The shape of a legacy Perl screen: one layout wrapper carries the object
  // for the whole page, and every interaction on it resolves to that object.
  <Box data-track-object="orderline">
      <Box data-testid="page">
        <Select aria-label="Status" placeholder="Choose a status...">
          <SelectOption value="draft" label="Draft" />
          <SelectOption value="published" label="Published" />
        </Select>
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const portalRoot = await openStatusListbox(canvasElement);

    // The wrapper that carries the object is not an ancestor of the portal —
    // that is the whole bug. Walking up from inside the listbox reaches
    // \`document.body\` and stops.
    expect(portalRoot?.closest('[data-track-object]')).toBe(portalRoot);

    // The value is copied from the opening element's nearest tagged ancestor.
    expect(portalRoot).toHaveAttribute('data-track-object', 'orderline');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,se,re;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Ex: Nearest Object Wins',
  render: () =>
  // The shape of a React screen: several tagged regions on one page, so an
  // interaction has to resolve to the region it started in, not to the page.
  <Box data-track-object="order">
      <Box data-track-object="orderline">
        <Select aria-label="Status" placeholder="Choose a status...">
          <SelectOption value="draft" label="Draft" />
          <SelectOption value="published" label="Published" />
        </Select>
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const portalRoot = await openStatusListbox(canvasElement);
    expect(portalRoot).toHaveAttribute('data-track-object', 'orderline');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(se=C.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,de;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Ex: Untagged Page Yields No Object',
  render: () =>
  // No ancestor carries an object, which is the state of every screen the
  // application has not tagged yet.
  <Box>
      <Select aria-label="Status" placeholder="Choose a status...">
        <SelectOption value="draft" label="Draft" />
        <SelectOption value="published" label="Published" />
      </Select>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const portalRoot = await openStatusListbox(canvasElement);

    // The boundary is still findable, so a reader stops here and records the
    // object as unknown rather than walking on and borrowing one.
    expect(portalRoot).not.toBeNull();
    expect(portalRoot).not.toHaveAttribute('data-track-object');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,he;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Ex: Modal Resolves No Object',
  render: () => <ModalWithoutAnOpenerExample />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /open modal/i
    }));
    const portalRoot = (await screen.findByText('Assign owner')).closest('[data-ds-portal-root]');

    // A ModalWrapper is driven by the \`open\` prop and never sets a reference, so
    // there is no opening element to resolve from. The chain still arrives
    // through React context; the object does not, and no object is emitted.
    // This is the known gap, recorded here rather than papered over: a guessed
    // page-level object would be right on a legacy screen and wrong on a React
    // screen that tags individual elements.
    expect(portalRoot).not.toBeNull();
    expect(portalRoot).not.toHaveAttribute('data-track-object');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(he=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};export{g as ChainBuildsAcrossTaggedElements,v as ChainKeepsTheNearestFive,x as Default,R as ModalHasNoOpeningElement,C as NearestObjectWins,f as NestedPortalsCompose,E as PortalCarriesTheObject,w as PortalRootIsMarkedWithoutAChain,j as PortalStampsResolvedChain,B as RepeatedNodeIsCollapsed,y as ScopeCoversRawDom,S as UntaggedPageYieldsNoObject,$e as __namedExportsOrder,Ge as default};
