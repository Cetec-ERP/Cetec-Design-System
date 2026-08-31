import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-BKyFwriW.js";import{e as o,w as c,u as y}from"./index-DPYJpPba.js";import{D as m,B as a,u as X}from"./dsComponent-BOaIIHJG.js";import{B as C}from"./Button-Bmx3caeT.js";import{M as Y,a as j}from"./SubMenu-BvtREQfk.js";import{M as Z,a as ee,b as te}from"./ModalFooter-vwfCGX5V.js";import{S as Q,a as f}from"./Select-B-yeSyOl.js";import{T as ae}from"./Text-Do3oYkTU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-BuCMhDjk.js";import"./IconConfig-BiZAaWNE.js";import"./Spinner-DN0O-sa5.js";import"./FieldContext-D6URyQos.js";import"./Tooltip-4cqSbA9J.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-Dx9_G7Xz.js";import"./FloatingLayerContext-jjIVnla3.js";import"./ListItemGroup-CfHRllgm.js";import"./Divider-D4vg9lhL.js";import"./Checkbox-MF93XGSH.js";import"./Toggle-CK1aJxCL.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Heading-CcFSKi1z.js";import"./IconButton-CplOGN9E.js";import"./dsPart-nnoJM9m6.js";import"./Chip-Daje0wha.js";import"./ListItem-EjVzx26f.js";const d=({name:t})=>{const s=X();return e.jsx(a,{"data-probe":t,"data-chain":s.join(">"),p:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",children:e.jsxs(ae,{children:[t,": ",s.join(">")||"(empty)"]})})},i=(t,s)=>{var r;return(r=t.querySelector(`[data-probe="${s}"]`))==null?void 0:r.getAttribute("data-chain")},Ne={title:"Components/DsChainScope",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Adds a test id to the interaction chain shared with a subtree. `Box` opens a scope automatically whenever it receives a `data-testid`, so this component is only needed around raw DOM that does not render through `Box`."}}},args:{testId:"scope"}},h={render:()=>e.jsx(m,{testId:"order-table",children:e.jsx(m,{testId:"order-row",children:e.jsx(d,{name:"default"})})}),parameters:{controls:{disable:!0}}},u={name:"Chain: Tagged Ancestors Accumulate",render:()=>e.jsxs(a,{display:"grid",gap:"12",children:[e.jsx(d,{name:"untracked"}),e.jsxs(a,{"data-testid":"page",display:"grid",gap:"12",children:[e.jsx(d,{name:"page"}),e.jsxs(a,{display:"grid",gap:"12",children:[e.jsx(d,{name:"untagged"}),e.jsx(a,{"data-testid":"panel",display:"grid",gap:"12",children:e.jsx(d,{name:"panel"})})]})]})]}),play:async({canvasElement:t})=>{o(i(t,"untracked")).toBe(""),o(i(t,"page")).toBe("page"),o(i(t,"untagged")).toBe("page"),o(i(t,"panel")).toBe("page>panel")},parameters:{controls:{disable:!0}}},x={name:"Chain: Depth Is Bounded At Five",render:()=>e.jsx(a,{"data-testid":"one",children:e.jsx(a,{"data-testid":"two",children:e.jsx(a,{"data-testid":"three",children:e.jsx(a,{"data-testid":"four",children:e.jsx(a,{"data-testid":"five",children:e.jsx(a,{"data-testid":"six",children:e.jsx(a,{"data-testid":"seven",children:e.jsx(d,{name:"deep"})})})})})})})}),play:async({canvasElement:t})=>{o(i(t,"deep")).toBe("three>four>five>six>seven")},parameters:{controls:{disable:!0}}},g={name:"Chain: A Repeated Node Is Collapsed",render:()=>e.jsxs(a,{"data-testid":"page",children:[e.jsx(m,{testId:"status",children:e.jsx(a,{"data-testid":"status",children:e.jsx(d,{name:"collapsed"})})}),e.jsx(a,{"data-testid":"grid",children:e.jsx(a,{"data-testid":"row",children:e.jsx(a,{"data-testid":"grid",children:e.jsx(d,{name:"nested"})})})})]}),play:async({canvasElement:t})=>{o(i(t,"collapsed")).toBe("page>status"),o(i(t,"nested")).toBe("page>grid>row>grid")},parameters:{controls:{disable:!0}}},b={name:"Ex: Scope Around Raw DOM",render:()=>e.jsx(a,{"data-testid":"order-table",children:e.jsx(m,{testId:"order-row",children:e.jsx("div",{"data-testid":"order-row",children:e.jsx(d,{name:"raw"})})})}),play:async({canvasElement:t})=>{o(i(t,"raw")).toBe("order-table>order-row")},parameters:{controls:{disable:!0}}},B={name:"Ex: Portaled Listbox Carries The Chain",render:()=>e.jsx(a,{"data-testid":"page",children:e.jsx(a,{"data-testid":"filters",children:e.jsxs(Q,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(f,{value:"draft",label:"Draft"}),e.jsx(f,{value:"published",label:"Published"})]})})}),play:async({canvasElement:t})=>{const s=c(t),r=c(t.ownerDocument.body),n=s.getByRole("combobox",{name:/status/i});n.focus(),await y.keyboard("{ArrowDown}");const l=await r.findByRole("listbox");o(n.contains(l)).toBe(!1);const p=l.closest("[data-ds-chain]");o(p).not.toBeNull(),o(p).toHaveAttribute("data-ds-chain","page>filters")},parameters:{controls:{disable:!0}}},v={name:"Ex: Portal Boundary Is Findable With No Chain",render:()=>e.jsx(a,{children:e.jsxs(Q,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(f,{value:"draft",label:"Draft"}),e.jsx(f,{value:"published",label:"Published"})]})}),play:async({canvasElement:t})=>{const s=c(t),r=c(t.ownerDocument.body);s.getByRole("combobox",{name:/status/i}).focus(),await y.keyboard("{ArrowDown}");const p=(await r.findByRole("listbox")).closest("[data-ds-portal-root]");o(p).not.toBeNull(),o(p).not.toHaveAttribute("data-ds-chain")},parameters:{controls:{disable:!0}}},oe=()=>{const[t,s]=V.useState(!1);return e.jsxs(a,{"data-testid":"page",children:[e.jsx(C,{onClick:()=>s(!0),children:"Open modal"}),e.jsxs(Z,{open:t,onOpenChange:s,children:[e.jsx(ee,{children:"Assign owner"}),e.jsx(te,{children:e.jsx(a,{"data-testid":"owner-field",children:e.jsxs(Y,{trigger:e.jsx(C,{iconAfter:"caret-down",children:"Choose owner"}),children:[e.jsx(j,{label:"Ada Lovelace"}),e.jsx(j,{label:"Grace Hopper"})]})})})]})]})},w={name:"Ex: Portal Inside A Portal",render:()=>e.jsx(oe,{}),play:async({canvasElement:t})=>{const s=c(t),r=c(t.ownerDocument.body);await y.click(s.getByRole("button",{name:/open modal/i}));const n=(await r.findByText("Assign owner")).closest("[data-ds-chain]");o(n).toHaveAttribute("data-ds-chain","page"),await y.click(r.getByText("Choose owner"));const l=(await r.findByText("Ada Lovelace")).closest("[data-ds-chain]");o(l).toHaveAttribute("data-ds-chain","page>owner-field"),o(l).not.toBe(n),o(n==null?void 0:n.contains(l??null)).toBe(!1)},parameters:{controls:{disable:!0}}};var E,A,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(A=h.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var S,D,P;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(D=u.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var T,I,M;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(I=x.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var k,N,H;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(N=g.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var O,L,F;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(L=b.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,K,_;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(K=B.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var q,G,U;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(G=v.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var $,z,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(z=w.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const He=["Default","ChainBuildsAcrossTaggedElements","ChainKeepsTheNearestFive","RepeatedNodeIsCollapsed","ScopeCoversRawDom","PortalStampsResolvedChain","PortalRootIsMarkedWithoutAChain","NestedPortalsCompose"];export{u as ChainBuildsAcrossTaggedElements,x as ChainKeepsTheNearestFive,h as Default,w as NestedPortalsCompose,v as PortalRootIsMarkedWithoutAChain,B as PortalStampsResolvedChain,g as RepeatedNodeIsCollapsed,b as ScopeCoversRawDom,He as __namedExportsOrder,Ne as default};
