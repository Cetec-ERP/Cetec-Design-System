import{j as e,B as p,T as S,t as M,r as H}from"./iframe-DHbnlgy0.js";import{P as m,a as u,b as g,c as f,d as y,f as v,p as h,e as D,g as z,h as De,i as Se,j as Me}from"./PopoverArrow-DkAOVKuf.js";import{B as Re}from"./Button-_LtwbxuN.js";import{L as ze}from"./Link-U1om_-cy.js";import{M as Fe,a as Ne,b as qe}from"./ModalWrapper-CU1lZtyH.js";import"./preload-helper-DCXCruOF.js";import"./FloatingLayerContext-Byz5ywHT.js";import"./useLocale-DAUAj4Kn.js";import"./IconButton-Ey7Us0Iu.js";import"./Spinner-Bl__mCXj.js";import"./FieldContext-BlD0TYsJ.js";import"./mq.hook-BoPC35iq.js";import"./breakpoints-DU_5_Zhy.js";import"./Heading-C1lin6oy.js";const{expect:r,userEvent:l,waitFor:d,within:s}=__STORYBOOK_MODULE_TEST__,ot={title:"Components/Popover",component:m,parameters:{layout:"centered"},args:{children:null,interaction:"rich",size:"md",showArrow:!0,placement:"bottom"},argTypes:{interaction:{control:"select",options:["definition","rich"]},size:{control:"select",options:["sm","md","lg"]},tone:{control:"select",options:["note","tip","warning","important","caution"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},showArrow:{control:"boolean"}}},Ie={note:h({tone:"note"}).content,tip:h({tone:"tip"}).content,warning:h({tone:"warning"}).content,important:h({tone:"important"}).content,caution:h({tone:"caution"}).content},Oe={sm:h({size:"sm",tone:"note"}).content,md:h({size:"md",tone:"note"}).content,lg:h({size:"lg",tone:"note"}).content},b={name:"Ex: Definition note",args:{interaction:"definition",tone:"warning",size:"md",showArrow:!0,placement:"bottom"},render:({children:t,...a})=>e.jsx(p,{maxW:"prose",p:"32",children:e.jsxs(S,{children:["Operators should track"," ",e.jsxs(m,{...a,children:[e.jsx(u,{children:"cycle time"}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(y,{children:"Warning"})}),e.jsx(v,{children:"Cycle time includes queue and wait, not only active work. Do not treat machine run time as the full cycle when estimating delivery commitments."})]})]})," ","before promising a ship date."]})})},Ee=t=>e.jsx(p,{maxW:"prose",p:"32",children:e.jsxs(S,{children:["See the"," ",e.jsxs(m,{...t,children:[e.jsx(u,{children:"setup checklist"}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(y,{children:"Tip"}),e.jsx(D,{})]}),e.jsx(De,{children:e.jsx(p,{as:"img",src:"https://placehold.co/320x120/png?text=Setup+diagram",alt:"Setup diagram placeholder",w:"full",display:"block"})}),e.jsx(v,{children:"Confirm tooling, material, and traveler notes before the first piece. Open the full checklist when onboarding a new operator."}),e.jsxs(Se,{children:[e.jsx(ze,{href:"https://example.com/handbook/setup",external:!0,children:"Open handbook"}),e.jsx(Re,{size:"sm",children:"Got it"})]})]})]})," ","before starting the job."]})}),B={name:"Ex: Rich note",args:{interaction:"rich",tone:"tip",size:"md",showArrow:!0,placement:"bottom"},render:({children:t,...a})=>e.jsx(Ee,{...a})},C={render:()=>e.jsx(p,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"16",p:"32",children:["note","tip","warning","important","caution"].map(t=>e.jsx(m,{interaction:"definition",tone:t,children:e.jsxs(p,{className:Ie[t],children:[e.jsx(f,{children:e.jsx(y,{children:t.charAt(0).toUpperCase()+t.slice(1)})}),e.jsx(v,{children:'Visual tone only — this never maps to role="alert".'})]})},t))})},k={render:()=>e.jsx(p,{display:"flex",flexWrap:"wrap",gap:"24",alignItems:"flex-start",p:"32",children:["sm","md","lg"].map(t=>e.jsx(m,{interaction:"definition",tone:"note",size:t,children:e.jsxs(p,{className:Oe[t],children:[e.jsx(f,{children:e.jsxs(y,{children:["Size ",t]})}),e.jsx(v,{children:"Popover panels are wider than Tooltip (max 240) so handbook notes can carry multi-line guidance."})]})},t))})},P={parameters:{layout:"fullscreen"},render:()=>e.jsx(p,{h:"4xl",display:"flex",alignItems:"center",p:"16",children:e.jsxs(m,{placement:"bottom",children:[e.jsx(u,{children:"Setup notes"}),e.jsxs(g,{h:"lg",w:"280","data-testid":"edge-panel",children:[e.jsxs(f,{children:[e.jsx(y,{children:"Room beside the trigger"}),e.jsx(D,{})]}),e.jsx(v,{children:"When this panel cannot fit above or below, it opens to the side. Resize the viewport to see the placement adapt."})]})]})}),play:async({canvasElement:t})=>{const a=s(t),i=s(t.ownerDocument.body),n=a.getByRole("button",{name:"Setup notes"});await l.click(n);const o=await i.findByTestId("edge-panel");await d(()=>{const c=o.getBoundingClientRect();r(c.left).toBeGreaterThanOrEqual(n.getBoundingClientRect().right),r(c.top).toBeGreaterThanOrEqual(0),r(c.bottom).toBeLessThanOrEqual(window.innerHeight)}),o.focus(),await d(()=>r(i.queryByRole("tooltip")).toBeNull())}},A={tags:["!dev","!autodocs","!snapshot"],render:()=>e.jsxs(p,{display:"flex",gap:"16",children:[["note","tip","warning","important","caution"].map(t=>e.jsxs(m,{tone:t,showArrow:!1,children:[e.jsx(u,{children:t}),e.jsxs(g,{children:[e.jsx(y,{children:t}),e.jsx(D,{}),e.jsx(z,{})]})]},t)),e.jsxs(m,{showArrow:!1,children:[e.jsx(u,{children:"Custom fill"}),e.jsxs(g,{children:[e.jsx(y,{children:"Custom fill"}),e.jsx(D,{}),e.jsx(z,{fill:M.var("colors.bg.info.subtle")})]})]})]}),play:async({canvasElement:t})=>{const a=s(t),i=s(t.ownerDocument.body);for(const n of["note","tip","warning","important","caution","Custom fill"]){await l.click(a.getByRole("button",{name:n}));const o=await i.findByRole("dialog",{name:n}),c=o.querySelector('svg[aria-hidden="true"]');r(c).toHaveAttribute("fill",M.var(n==="Custom fill"?"colors.bg.info.subtle":"colors.surface.overlay")),await l.click(s(o).getByRole("button",{name:"Close"})),await d(()=>r(o).not.toBeInTheDocument())}}},j={tags:["!dev","!autodocs"],render:()=>e.jsx(Ee,{tone:"tip"}),play:async({canvasElement:t})=>{const a=s(t),i=s(t.ownerDocument.body),n=a.getByRole("button",{name:"setup checklist"});r(n).toHaveAttribute("aria-haspopup","dialog"),r(n).toHaveAttribute("aria-expanded","false"),await l.click(n);const o=await i.findByRole("dialog",{name:"Tip"});r(n).toHaveAttribute("aria-expanded","true"),r(n).toHaveAttribute("aria-controls",o.id),await d(()=>r(o).toContainElement(document.activeElement));for(let c=0;c<5;c+=1)await l.tab(),await d(()=>r(o).toContainElement(document.activeElement));s(o).getByRole("button",{name:"Got it"}).focus(),await l.keyboard("{Escape}"),await d(()=>r(i.queryByRole("dialog",{name:"Tip"})).toBeNull()),await d(()=>r(n).toHaveFocus()),await l.click(n),await i.findByRole("dialog",{name:"Tip"}),await l.click(t.ownerDocument.body),await d(()=>r(i.queryByRole("dialog",{name:"Tip"})).toBeNull())}},T={tags:["!dev","!autodocs"],render:()=>e.jsxs(S,{children:["Track"," ",e.jsxs(m,{interaction:"definition",children:[e.jsx(u,{children:"cycle time"}),e.jsx(g,{children:e.jsx(v,{children:"Queue and wait time, not only active work."})})]})," ","daily."]}),play:async({canvasElement:t})=>{const a=s(t),i=s(t.ownerDocument.body),n=a.getByText("cycle time");await l.tab(),r(n).toHaveFocus();const o=await i.findByRole("tooltip");r(n).toHaveAttribute("aria-describedby",o.id),r(n).toHaveFocus(),await l.keyboard("{Escape}"),await d(()=>r(i.queryByRole("tooltip")).toBeNull())}},Ge=()=>{const[t,a]=H.useState(!0);return e.jsxs(Fe,{open:t,onOpenChange:a,"aria-label":"Job notes",children:[e.jsx(Ne,{title:"Job notes"}),e.jsx(qe,{children:e.jsxs(S,{children:["Review the"," ",e.jsxs(m,{children:[e.jsx(u,{children:"setup checklist"}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(y,{children:"Tip"})}),e.jsx(v,{children:"Confirm tooling before the first piece."})]})]})," ","first."]})})]})},R={tags:["!dev","!autodocs"],render:()=>e.jsx(Ge,{}),play:async({canvasElement:t})=>{const a=s(t.ownerDocument.body),i=await a.findByRole("dialog",{name:"Job notes"});await l.click(s(i).getByRole("button",{name:"setup checklist"}));const n=await a.findByRole("dialog",{name:"Tip"});await d(()=>{const o=n.getBoundingClientRect(),c=t.ownerDocument.elementFromPoint(o.left+o.width/2,o.top+o.height/2);r(n).toContainElement(c)})}},Le=()=>{const[t,a]=H.useState(!0),i=H.useRef(null),[n,o]=H.useState(null);return e.jsxs(p,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"48",children:[e.jsx(Re,{size:"sm",onClick:()=>a(!1),children:"Remove anchor"}),e.jsxs(m,{interaction:"definition",open:!0,onOpenChange:()=>{},children:[e.jsx(u,{children:"trigger"}),t&&e.jsx(Me,{ref:o,children:e.jsx(p,{p:"8",mt:"96",borderWidth:"1",borderColor:"border",children:"anchor"})}),e.jsx(g,{ref:i,"data-testid":"anchor-content",children:e.jsx(v,{children:"Positioned content"})})]}),e.jsx(p,{"data-testid":"anchor-ref-attached",children:String(n!==null)})]})},E={tags:["!dev","!autodocs"],render:()=>e.jsx(Le,{}),play:async({canvasElement:t})=>{const a=s(t),n=await s(t.ownerDocument.body).findByTestId("anchor-content"),o=8,c=Ce=>{const x=n.getBoundingClientRect(),w=Ce.getBoundingClientRect(),ke=Math.min(Math.abs(x.top-w.bottom-o),Math.abs(w.top-x.bottom-o)),Ae=Math.min(Math.abs(x.left-w.right-o),Math.abs(w.left-x.right-o)),He=Math.abs(x.top+x.height/2-w.top-w.height/2)<2;return ke<2||Ae<2&&He};r(a.getByTestId("anchor-ref-attached")).toHaveTextContent("true"),await d(()=>r(c(a.getByText("anchor"))).toBe(!0)),await l.click(a.getByRole("button",{name:"Remove anchor"})),r(a.queryByText("anchor")).toBeNull(),await d(()=>r(c(a.getByText("trigger"))).toBe(!0))}},at=["DefinitionNote","RichNote","Tones","Sizes","EdgePlacement","A11yExplicitArrow","A11yRichKeyboard","A11yDefinitionFocus","A11yInsideModal","A11yAnchorUnmount"];var F,N,q,I,O;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Ex: Definition note',
  args: {
    interaction: 'definition',
    tone: 'warning',
    size: 'md',
    showArrow: true,
    placement: 'bottom'
  },
  render: ({
    children: _children,
    ...args
  }) => <Box maxW="prose" p="32">
      <Text>
        Operators should track{' '}
        <Popover {...args}>
          <PopoverTrigger>cycle time</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Warning</PopoverTitle>
            </PopoverHeader>
            <PopoverBody>
              Cycle time includes queue and wait, not only active work. Do not
              treat machine run time as the full cycle when estimating delivery
              commitments.
            </PopoverBody>
          </PopoverContent>
        </Popover>{' '}
        before promising a ship date.
      </Text>
    </Box>
}`,...(q=(N=b.parameters)==null?void 0:N.docs)==null?void 0:q.source},description:{story:"Handbook definition note — hover or focus the dashed phrase.",...(O=(I=b.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var G,L,W,_,U;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Ex: Rich note',
  args: {
    interaction: 'rich',
    tone: 'tip',
    size: 'md',
    showArrow: true,
    placement: 'bottom'
  },
  render: ({
    children: _children,
    ...args
  }) => <RichNoteExample {...args} />
}`,...(W=(L=B.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"Handbook rich note — click the dashed phrase; focus is trapped.",...(U=(_=B.parameters)==null?void 0:_.docs)==null?void 0:U.description}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" alignItems="flex-start" gap="16" p="32">
      {(['note', 'tip', 'warning', 'important', 'caution'] as const).map(tone => <Popover key={tone} interaction="definition" tone={tone}>
            <Box className={tonePanelClasses[tone]}>
              <PopoverHeader>
                <PopoverTitle>
                  {tone.charAt(0).toUpperCase() + tone.slice(1)}
                </PopoverTitle>
              </PopoverHeader>
              <PopoverBody>
                Visual tone only — this never maps to role=&quot;alert&quot;.
              </PopoverBody>
            </Box>
          </Popover>)}
    </Box>
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,Y,X;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexWrap="wrap" gap="24" alignItems="flex-start" p="32">
      {(['sm', 'md', 'lg'] as const).map(size => <Popover key={size} interaction="definition" tone="note" size={size}>
          <Box className={sizePanelClasses[size]}>
            <PopoverHeader>
              <PopoverTitle>Size {size}</PopoverTitle>
            </PopoverHeader>
            <PopoverBody>
              Popover panels are wider than Tooltip (max 240) so handbook notes
              can carry multi-line guidance.
            </PopoverBody>
          </Box>
        </Popover>)}
    </Box>
}`,...(X=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var Z,$,ee,te,ne;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Box h="4xl" display="flex" alignItems="center" p="16">
      <Popover placement="bottom">
        <PopoverTrigger>Setup notes</PopoverTrigger>
        <PopoverContent h="lg" w="280" data-testid="edge-panel">
          <PopoverHeader>
            <PopoverTitle>Room beside the trigger</PopoverTitle>
            <PopoverClose />
          </PopoverHeader>
          <PopoverBody>
            When this panel cannot fit above or below, it opens to the side.
            Resize the viewport to see the placement adapt.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Setup notes'
    });
    await userEvent.click(trigger);
    const panel = await body.findByTestId('edge-panel');
    await waitFor(() => {
      const panelRect = panel.getBoundingClientRect();
      expect(panelRect.left).toBeGreaterThanOrEqual(trigger.getBoundingClientRect().right);
      expect(panelRect.top).toBeGreaterThanOrEqual(0);
      expect(panelRect.bottom).toBeLessThanOrEqual(window.innerHeight);
    });
    // Keep the close control's focus tooltip out of the placement snapshot.
    panel.focus();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  }
}`,...(ee=($=P.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"A tall panel can use the space beside a trigger near the left edge.",...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var oe,ae,re;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  // Behavior-only coverage cycles through tones and an explicit fill override.
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: () => <Box display="flex" gap="16">
      {(['note', 'tip', 'warning', 'important', 'caution'] as const).map(tone => <Popover key={tone} tone={tone} showArrow={false}>
            <PopoverTrigger>{tone}</PopoverTrigger>
            <PopoverContent>
              <PopoverTitle>{tone}</PopoverTitle>
              <PopoverClose />
              <PopoverArrow />
            </PopoverContent>
          </Popover>)}
      <Popover showArrow={false}>
        <PopoverTrigger>Custom fill</PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>Custom fill</PopoverTitle>
          <PopoverClose />
          <PopoverArrow fill={token.var('colors.bg.info.subtle')} />
        </PopoverContent>
      </Popover>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    for (const name of ['note', 'tip', 'warning', 'important', 'caution', 'Custom fill']) {
      await userEvent.click(canvas.getByRole('button', {
        name
      }));
      const panel = await body.findByRole('dialog', {
        name
      });
      const arrow = panel.querySelector('svg[aria-hidden="true"]');
      expect(arrow).toHaveAttribute('fill', token.var(name === 'Custom fill' ? 'colors.bg.info.subtle' : 'colors.surface.overlay'));
      await userEvent.click(within(panel).getByRole('button', {
        name: 'Close'
      }));
      await waitFor(() => expect(panel).not.toBeInTheDocument());
    }
  }
}`,...(re=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,se,ce,le,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <RichNoteExample tone="tip" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'setup checklist'
    });
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    const dialog = await body.findByRole('dialog', {
      name: 'Tip'
    });
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute('aria-controls', dialog.id);
    await waitFor(() => expect(dialog).toContainElement(document.activeElement as HTMLElement));

    // Tab cycles through close, link, and button without leaving the panel.
    for (let i = 0; i < 5; i += 1) {
      await userEvent.tab();
      // Past the last control, focus lands on a Floating UI focus guard just
      // outside the panel, which sends it back to the first control a moment
      // later. Wait for it to settle.
      await waitFor(() => expect(dialog).toContainElement(document.activeElement as HTMLElement));
    }

    // The close button's tooltip takes the first Escape; start from a button
    // without one so a single Escape reaches the popover.
    within(dialog).getByRole('button', {
      name: 'Got it'
    }).focus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Tip'
    })).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());

    // Outside press closes.
    await userEvent.click(trigger);
    await body.findByRole('dialog', {
      name: 'Tip'
    });
    await userEvent.click(canvasElement.ownerDocument.body);
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Tip'
    })).toBeNull());
  }
}`,...(ce=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ce.source},description:{story:`Rich mode: opens on click, traps Tab, closes on Escape with focus restored
to the trigger, and closes on outside press.`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var pe,me,he,ue,ge;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <Text>
      Track{' '}
      <Popover interaction="definition">
        <PopoverTrigger>cycle time</PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Queue and wait time, not only active work.</PopoverBody>
        </PopoverContent>
      </Popover>{' '}
      daily.
    </Text>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByText('cycle time');
    await userEvent.tab();
    expect(trigger).toHaveFocus();
    const tooltip = await body.findByRole('tooltip');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
    // No focus trap: focus stays on the trigger.
    expect(trigger).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  }
}`,...(he=(me=T.parameters)==null?void 0:me.docs)==null?void 0:he.source},description:{story:"Definition mode: opens on keyboard focus, describes the trigger, closes on Escape.",...(ge=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:ge.description}}};var ye,ve,xe,we,fe;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <PopoverInModal />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const modal = await body.findByRole('dialog', {
      name: 'Job notes'
    });
    await userEvent.click(within(modal).getByRole('button', {
      name: 'setup checklist'
    }));
    const popover = await body.findByRole('dialog', {
      name: 'Tip'
    });
    await waitFor(() => {
      const rect = popover.getBoundingClientRect();
      const topmost = canvasElement.ownerDocument.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
      expect(popover).toContainElement(topmost as HTMLElement);
    });
  }
}`,...(xe=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:xe.source},description:{story:"Content opened inside a modal paints above the modal and its scrim.",...(fe=(we=R.parameters)==null?void 0:we.docs)==null?void 0:fe.description}}};var be,Be,Pe,je,Te;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <AnchorToggle />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const content = await body.findByTestId('anchor-content');
    const offset = 8;
    const tracksReference = (reference: Element) => {
      const panel = content.getBoundingClientRect();
      const target = reference.getBoundingClientRect();
      const verticalGap = Math.min(Math.abs(panel.top - target.bottom - offset), Math.abs(target.top - panel.bottom - offset));
      const horizontalGap = Math.min(Math.abs(panel.left - target.right - offset), Math.abs(target.left - panel.right - offset));
      const centeredBeside = Math.abs(panel.top + panel.height / 2 - target.top - target.height / 2) < 2;
      return verticalGap < 2 || horizontalGap < 2 && centeredBeside;
    };

    // Consumer ref on PopoverAnchor still resolves to the anchor DOM node.
    expect(canvas.getByTestId('anchor-ref-attached')).toHaveTextContent('true');
    await waitFor(() => expect(tracksReference(canvas.getByText('anchor'))).toBe(true));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove anchor'
    }));
    expect(canvas.queryByText('anchor')).toBeNull();
    await waitFor(() => expect(tracksReference(canvas.getByText('trigger'))).toBe(true));
  }
}`,...(Pe=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source},description:{story:`Content follows the anchor while it is mounted and returns to the trigger
when it unmounts. Consumer refs on both Anchor and Content do not break
positioning.`,...(Te=(je=E.parameters)==null?void 0:je.docs)==null?void 0:Te.description}}};export{E as A11yAnchorUnmount,T as A11yDefinitionFocus,A as A11yExplicitArrow,R as A11yInsideModal,j as A11yRichKeyboard,b as DefinitionNote,P as EdgePlacement,B as RichNote,k as Sizes,C as Tones,at as __namedExportsOrder,ot as default};
