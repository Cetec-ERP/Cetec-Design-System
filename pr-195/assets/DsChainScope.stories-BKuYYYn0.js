import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as he}from"./index-BKyFwriW.js";import{e as s,w as i,u as m}from"./index-DPYJpPba.js";import{D as u,B as o,u as ve}from"./dsComponent-BYUIyF_R.js";import{B as A}from"./Button-Bf2hC955.js";import{M as Be,a as D}from"./SubMenu-BnJZcuLM.js";import{M as ue,a as be,b as xe}from"./ModalHeader-BPdfisZi.js";import"./Modal-DrzXvm5p.js";import"./ConfirmationModal-DpalkVf_.js";import{S as b,a as l}from"./Select-CDf_BRxz.js";import{T as ge}from"./Text-DTL6959x.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Dq9uSEeo.js";import"./IconConfig-CikP2Rer.js";import"./Spinner-B6GigztE.js";import"./FieldContext-D6URyQos.js";import"./Tooltip--hlfaos6.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-BP-sbDRA.js";import"./menu-DQAy75Rb.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-DBAwq6gW.js";import"./Divider-DhAaijX4.js";import"./Checkbox-XnGrI6IT.js";import"./Toggle-C_NcmSvJ.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Heading-CUAyQAEq.js";import"./IconButton-BcWUHMy5.js";import"./dsPart-nnoJM9m6.js";import"./Chip-DiKGzQyA.js";import"./ListItem-3yxFPDEf.js";const d=({name:t})=>{const a=ve();return e.jsx(o,{"data-probe":t,"data-chain":a.join(">"),p:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",children:e.jsxs(ge,{children:[t,": ",a.join(">")||"(empty)"]})})},c=(t,a)=>{var r;return(r=t.querySelector(`[data-probe="${a}"]`))==null?void 0:r.getAttribute("data-chain")},at={title:"Components/DsChainScope",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Adds a test id to the interaction chain shared with a subtree. `Box` opens a scope automatically whenever it receives a `data-testid`, so this component is only needed around raw DOM that does not render through `Box`."}}},args:{testId:"scope"}},x={render:()=>e.jsx(u,{testId:"order-table",children:e.jsx(u,{testId:"order-row",children:e.jsx(d,{name:"default"})})}),parameters:{controls:{disable:!0}}},g={name:"Chain: Tagged Ancestors Accumulate",render:()=>e.jsxs(o,{display:"grid",gap:"12",children:[e.jsx(d,{name:"untracked"}),e.jsxs(o,{"data-testid":"page",display:"grid",gap:"12",children:[e.jsx(d,{name:"page"}),e.jsxs(o,{display:"grid",gap:"12",children:[e.jsx(d,{name:"untagged"}),e.jsx(o,{"data-testid":"panel",display:"grid",gap:"12",children:e.jsx(d,{name:"panel"})})]})]})]}),play:async({canvasElement:t})=>{s(c(t,"untracked")).toBe(""),s(c(t,"page")).toBe("page"),s(c(t,"untagged")).toBe("page"),s(c(t,"panel")).toBe("page>panel")},parameters:{controls:{disable:!0}}},v={name:"Chain: Depth Is Bounded At Five",render:()=>e.jsx(o,{"data-testid":"one",children:e.jsx(o,{"data-testid":"two",children:e.jsx(o,{"data-testid":"three",children:e.jsx(o,{"data-testid":"four",children:e.jsx(o,{"data-testid":"five",children:e.jsx(o,{"data-testid":"six",children:e.jsx(o,{"data-testid":"seven",children:e.jsx(d,{name:"deep"})})})})})})})}),play:async({canvasElement:t})=>{s(c(t,"deep")).toBe("three>four>five>six>seven")},parameters:{controls:{disable:!0}}},B={name:"Chain: A Repeated Node Is Collapsed",render:()=>e.jsxs(o,{"data-testid":"page",children:[e.jsx(u,{testId:"status",children:e.jsx(o,{"data-testid":"status",children:e.jsx(d,{name:"collapsed"})})}),e.jsx(o,{"data-testid":"grid",children:e.jsx(o,{"data-testid":"row",children:e.jsx(o,{"data-testid":"grid",children:e.jsx(d,{name:"nested"})})})})]}),play:async({canvasElement:t})=>{s(c(t,"collapsed")).toBe("page>status"),s(c(t,"nested")).toBe("page>grid>row>grid")},parameters:{controls:{disable:!0}}},y={name:"Ex: Scope Around Raw DOM",render:()=>e.jsx(o,{"data-testid":"order-table",children:e.jsx(u,{testId:"order-row",children:e.jsx("div",{"data-testid":"order-row",children:e.jsx(d,{name:"raw"})})})}),play:async({canvasElement:t})=>{s(c(t,"raw")).toBe("order-table>order-row")},parameters:{controls:{disable:!0}}},j={name:"Ex: Portaled Listbox Carries The Chain",render:()=>e.jsx(o,{"data-testid":"page",children:e.jsx(o,{"data-testid":"filters",children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(l,{value:"draft",label:"Draft"}),e.jsx(l,{value:"published",label:"Published"})]})})}),play:async({canvasElement:t})=>{const a=i(t),r=i(t.ownerDocument.body),n=a.getByRole("combobox",{name:/status/i});n.focus(),await m.keyboard("{ArrowDown}");const p=await r.findByRole("listbox");s(n.contains(p)).toBe(!1);const h=p.closest("[data-ds-chain]");s(h).not.toBeNull(),s(h).toHaveAttribute("data-ds-chain","page>filters")},parameters:{controls:{disable:!0}}},w={name:"Ex: Portal Boundary Is Findable With No Chain",render:()=>e.jsx(o,{children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(l,{value:"draft",label:"Draft"}),e.jsx(l,{value:"published",label:"Published"})]})}),play:async({canvasElement:t})=>{const a=i(t),r=i(t.ownerDocument.body);a.getByRole("combobox",{name:/status/i}).focus(),await m.keyboard("{ArrowDown}");const h=(await r.findByRole("listbox")).closest("[data-ds-portal-root]");s(h).not.toBeNull(),s(h).not.toHaveAttribute("data-ds-chain")},parameters:{controls:{disable:!0}}},ye=()=>{const[t,a]=he.useState(!1);return e.jsxs(o,{"data-testid":"page",children:[e.jsx(A,{onClick:()=>a(!0),children:"Open modal"}),e.jsxs(ue,{open:t,onOpenChange:a,children:[e.jsx(be,{children:"Assign owner"}),e.jsx(xe,{children:e.jsx(o,{"data-testid":"owner-field",children:e.jsxs(Be,{trigger:e.jsx(A,{iconAfter:"caret-down",children:"Choose owner"}),children:[e.jsx(D,{label:"Ada Lovelace"}),e.jsx(D,{label:"Grace Hopper"})]})})})]})]})},f={name:"Ex: Portal Inside A Portal",render:()=>e.jsx(ye,{}),play:async({canvasElement:t})=>{const a=i(t),r=i(t.ownerDocument.body);await m.click(a.getByRole("button",{name:/open modal/i}));const n=(await r.findByText("Assign owner")).closest("[data-ds-chain]");s(n).toHaveAttribute("data-ds-chain","page"),await m.click(r.getByText("Choose owner"));const p=(await r.findByText("Ada Lovelace")).closest("[data-ds-chain]");s(p).toHaveAttribute("data-ds-chain","page>owner-field"),s(p).not.toBe(n),s(n==null?void 0:n.contains(p??null)).toBe(!1)},parameters:{controls:{disable:!0}}},P=async t=>(i(t).getByRole("combobox",{name:/status/i}).focus(),await m.keyboard("{ArrowDown}"),(await i(t.ownerDocument.body).findByRole("listbox")).closest("[data-ds-portal-root]")),E={name:"Ex: Portaled Listbox Carries The Object",render:()=>e.jsx(o,{"data-track-object":"orderline",children:e.jsx(o,{"data-testid":"page",children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(l,{value:"draft",label:"Draft"}),e.jsx(l,{value:"published",label:"Published"})]})})}),play:async({canvasElement:t})=>{const a=await P(t);s(a==null?void 0:a.closest("[data-track-object]")).toBe(a),s(a).toHaveAttribute("data-track-object","orderline")},parameters:{controls:{disable:!0}}},C={name:"Ex: Nearest Object Wins",render:()=>e.jsx(o,{"data-track-object":"order",children:e.jsx(o,{"data-track-object":"orderline",children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(l,{value:"draft",label:"Draft"}),e.jsx(l,{value:"published",label:"Published"})]})})}),play:async({canvasElement:t})=>{const a=await P(t);s(a).toHaveAttribute("data-track-object","orderline")},parameters:{controls:{disable:!0}}},S={name:"Ex: Untagged Page Yields No Object",render:()=>e.jsx(o,{children:e.jsxs(b,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(l,{value:"draft",label:"Draft"}),e.jsx(l,{value:"published",label:"Published"})]})}),play:async({canvasElement:t})=>{const a=await P(t);s(a).not.toBeNull(),s(a).not.toHaveAttribute("data-track-object")},parameters:{controls:{disable:!0}}},je=()=>{const[t,a]=he.useState(!1);return e.jsxs(o,{"data-track-object":"orderline",children:[e.jsx(A,{onClick:()=>a(!0),children:"Open modal"}),e.jsxs(ue,{open:t,onOpenChange:a,children:[e.jsx(be,{children:"Assign owner"}),e.jsx(xe,{children:e.jsx(ge,{children:"Nothing here resolves to an object."})})]})]})},R={name:"Ex: Modal Resolves No Object",render:()=>e.jsx(je,{}),play:async({canvasElement:t})=>{const a=i(t),r=i(t.ownerDocument.body);await m.click(a.getByRole("button",{name:/open modal/i}));const n=(await r.findByText("Assign owner")).closest("[data-ds-portal-root]");s(n).not.toBeNull(),s(n).not.toHaveAttribute("data-track-object")},parameters:{controls:{disable:!0}}};var T,k,O;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(k=x.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var N,M,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(M=g.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var I,L,W;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(L=v.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var F,U,Y;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Y=(U=B.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var K,_,q;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=(_=y.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,$,z;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ne;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,le,de;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,me;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const ot=["Default","ChainBuildsAcrossTaggedElements","ChainKeepsTheNearestFive","RepeatedNodeIsCollapsed","ScopeCoversRawDom","PortalStampsResolvedChain","PortalRootIsMarkedWithoutAChain","NestedPortalsCompose","PortalCarriesTheObject","NearestObjectWins","UntaggedPageYieldsNoObject","ModalHasNoOpeningElement"];export{g as ChainBuildsAcrossTaggedElements,v as ChainKeepsTheNearestFive,x as Default,R as ModalHasNoOpeningElement,C as NearestObjectWins,f as NestedPortalsCompose,E as PortalCarriesTheObject,w as PortalRootIsMarkedWithoutAChain,j as PortalStampsResolvedChain,B as RepeatedNodeIsCollapsed,y as ScopeCoversRawDom,S as UntaggedPageYieldsNoObject,ot as __namedExportsOrder,at as default};
