import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-BKyFwriW.js";import{e as o,w as g,u as B}from"./index-DPYJpPba.js";import{D as b,B as a,u as q}from"./dsComponent-C9MKQHyf.js";import{B as w}from"./Button-CKyeAGXC.js";import{M as G,a as y}from"./SubMenu-Bv4gd_CA.js";import{M as U,a as W,b as $}from"./ModalFooter-DzVXSRfd.js";import{S as z,a as f}from"./Select-vfg7N9DL.js";import{T as J}from"./Text-D8Iybk0G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DRevkkti.js";import"./IconConfig-DjU6B6kV.js";import"./Spinner-j81TjN3d.js";import"./FieldContext-D6URyQos.js";import"./Tooltip-DHDdNQNG.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-D8H0OTpl.js";import"./menu-DCBTLCj4.js";import"./ListItemGroup-DIOjeX3_.js";import"./Divider-D10oyTgB.js";import"./Checkbox-7JccJzRS.js";import"./Toggle-0AJPoSF3.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Heading-DDYtrK6U.js";import"./IconButton-CTNBAM9X.js";import"./dsPart-nnoJM9m6.js";import"./Chip-CSUTKv0i.js";import"./ListItem-D0FKyYIB.js";const i=({name:t})=>{const s=q();return e.jsx(a,{"data-probe":t,"data-chain":s.join(">"),p:"8",borderWidth:"1",borderColor:"border",borderRadius:"4",children:e.jsxs(J,{children:[t,": ",s.join(">")||"(empty)"]})})},c=(t,s)=>{var r;return(r=t.querySelector(`[data-probe="${s}"]`))==null?void 0:r.getAttribute("data-chain")},Se={title:"Components/DsChainScope",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Adds a test id to the interaction chain shared with a subtree. `Box` opens a scope automatically whenever it receives a `data-testid`, so this component is only needed around raw DOM that does not render through `Box`."}}},args:{testId:"scope"}},l={render:()=>e.jsx(b,{testId:"order-table",children:e.jsx(b,{testId:"order-row",children:e.jsx(i,{name:"default"})})}),parameters:{controls:{disable:!0}}},p={name:"Chain: Tagged Ancestors Accumulate",render:()=>e.jsxs(a,{display:"grid",gap:"12",children:[e.jsx(i,{name:"untracked"}),e.jsxs(a,{"data-testid":"page",display:"grid",gap:"12",children:[e.jsx(i,{name:"page"}),e.jsxs(a,{display:"grid",gap:"12",children:[e.jsx(i,{name:"untagged"}),e.jsx(a,{"data-testid":"panel",display:"grid",gap:"12",children:e.jsx(i,{name:"panel"})})]})]})]}),play:async({canvasElement:t})=>{o(c(t,"untracked")).toBe(""),o(c(t,"page")).toBe("page"),o(c(t,"untagged")).toBe("page"),o(c(t,"panel")).toBe("page>panel")},parameters:{controls:{disable:!0}}},m={name:"Chain: Depth Is Bounded At Five",render:()=>e.jsx(a,{"data-testid":"one",children:e.jsx(a,{"data-testid":"two",children:e.jsx(a,{"data-testid":"three",children:e.jsx(a,{"data-testid":"four",children:e.jsx(a,{"data-testid":"five",children:e.jsx(a,{"data-testid":"six",children:e.jsx(a,{"data-testid":"seven",children:e.jsx(i,{name:"deep"})})})})})})})}),play:async({canvasElement:t})=>{o(c(t,"deep")).toBe("three>four>five>six>seven")},parameters:{controls:{disable:!0}}},h={name:"Ex: Scope Around Raw DOM",render:()=>e.jsx(a,{"data-testid":"order-table",children:e.jsx(b,{testId:"order-row",children:e.jsx("div",{"data-testid":"order-row",children:e.jsx(i,{name:"raw"})})})}),play:async({canvasElement:t})=>{o(c(t,"raw")).toBe("order-table>order-row")},parameters:{controls:{disable:!0}}},u={name:"Ex: Portaled Listbox Carries The Chain",render:()=>e.jsx(a,{"data-testid":"page",children:e.jsx(a,{"data-testid":"filters",children:e.jsxs(z,{"aria-label":"Status",placeholder:"Choose a status...",children:[e.jsx(f,{value:"draft",label:"Draft"}),e.jsx(f,{value:"published",label:"Published"})]})})}),play:async({canvasElement:t})=>{const s=g(t),r=g(t.ownerDocument.body),n=s.getByRole("combobox",{name:/status/i});n.focus(),await B.keyboard("{ArrowDown}");const d=await r.findByRole("listbox");o(n.contains(d)).toBe(!1);const v=d.closest("[data-ds-chain]");o(v).not.toBeNull(),o(v).toHaveAttribute("data-ds-chain","page>filters")},parameters:{controls:{disable:!0}}},Q=()=>{const[t,s]=_.useState(!1);return e.jsxs(a,{"data-testid":"page",children:[e.jsx(w,{onClick:()=>s(!0),children:"Open modal"}),e.jsxs(U,{open:t,onOpenChange:s,children:[e.jsx(W,{children:"Assign owner"}),e.jsx($,{children:e.jsx(a,{"data-testid":"owner-field",children:e.jsxs(G,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Choose owner"}),children:[e.jsx(y,{label:"Ada Lovelace"}),e.jsx(y,{label:"Grace Hopper"})]})})})]})]})},x={name:"Ex: Portal Inside A Portal",render:()=>e.jsx(Q,{}),play:async({canvasElement:t})=>{const s=g(t),r=g(t.ownerDocument.body);await B.click(s.getByRole("button",{name:/open modal/i}));const n=(await r.findByText("Assign owner")).closest("[data-ds-chain]");o(n).toHaveAttribute("data-ds-chain","page"),await B.click(r.getByText("Choose owner"));const d=(await r.findByText("Ada Lovelace")).closest("[data-ds-chain]");o(d).toHaveAttribute("data-ds-chain","page>owner-field"),o(d).not.toBe(n),o(n==null?void 0:n.contains(d??null)).toBe(!1)},parameters:{controls:{disable:!0}}};var j,C,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var A,S,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var P,R,T;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var M,H,O;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var I,k,L;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(k=u.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,F,K;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(F=x.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const De=["Default","ChainBuildsAcrossTaggedElements","ChainKeepsTheNearestFive","ScopeCoversRawDom","PortalStampsResolvedChain","NestedPortalsCompose"];export{p as ChainBuildsAcrossTaggedElements,m as ChainKeepsTheNearestFive,l as Default,x as NestedPortalsCompose,u as PortalStampsResolvedChain,h as ScopeCoversRawDom,De as __namedExportsOrder,Se as default};
