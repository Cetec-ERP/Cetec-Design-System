import{j as e,B as d,T as S,t as M,r as D}from"./iframe-kIvJ2lPO.js";import{P as m,a as u,b as g,c as f,d as y,f as v,p as h,e as F,g as z,h as De,i as Fe,j as Se}from"./PopoverArrow-BG5RQjnn.js";import{B as Ee}from"./Button-HAJiDCOb.js";import{L as Me}from"./Link-CI73yYyX.js";import{M as ze,a as Ne,b as qe}from"./ModalWrapper-ByR77vMR.js";import"./preload-helper-fQNTXnnu.js";import"./FloatingLayerContext-QpXtouOB.js";import"./useLocale-_pipSsIX.js";import"./IconButton-Bb7Xt1gB.js";import"./Spinner-B8lcZti6.js";import"./FieldContext-CLMijSBT.js";import"./mq.hook-DWgn9wFc.js";import"./breakpoints-DU_5_Zhy.js";import"./Heading-Dua8W1Qq.js";const{expect:n,userEvent:l,waitFor:c,within:s}=__STORYBOOK_MODULE_TEST__,nt={title:"Components/Popover",component:m,parameters:{layout:"centered"},args:{children:null,interaction:"rich",size:"md",showArrow:!0,placement:"bottom"},argTypes:{interaction:{control:"select",options:["definition","rich"]},size:{control:"select",options:["sm","md","lg"]},tone:{control:"select",options:["note","tip","warning","important","caution"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},showArrow:{control:"boolean"}}},Ie={note:h({tone:"note"}).content,tip:h({tone:"tip"}).content,warning:h({tone:"warning"}).content,important:h({tone:"important"}).content,caution:h({tone:"caution"}).content},Oe={sm:h({size:"sm",tone:"note"}).content,md:h({size:"md",tone:"note"}).content,lg:h({size:"lg",tone:"note"}).content},B={name:"Ex: Definition note",args:{interaction:"definition",tone:"warning",size:"md",showArrow:!0,placement:"bottom"},render:({children:t,...r})=>e.jsx(d,{maxW:"prose",p:"32",children:e.jsxs(S,{children:["Operators should track"," ",e.jsxs(m,{...r,children:[e.jsx(u,{children:"cycle time"}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(y,{children:"Warning"})}),e.jsx(v,{children:"Cycle time includes queue and wait, not only active work. Do not treat machine run time as the full cycle when estimating delivery commitments."})]})]})," ","before promising a ship date."]})})},ke=t=>e.jsx(d,{maxW:"prose",p:"32",children:e.jsxs(S,{children:["See the"," ",e.jsxs(m,{...t,children:[e.jsx(u,{children:"setup checklist"}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(y,{children:"Tip"}),e.jsx(F,{})]}),e.jsx(De,{children:e.jsx(d,{as:"img",src:"https://placehold.co/320x120/png?text=Setup+diagram",alt:"Setup diagram placeholder",w:"full",display:"block"})}),e.jsx(v,{children:"Confirm tooling, material, and traveler notes before the first piece. Open the full checklist when onboarding a new operator."}),e.jsxs(Fe,{children:[e.jsx(Me,{href:"https://example.com/handbook/setup",external:!0,children:"Open handbook"}),e.jsx(Ee,{size:"sm",children:"Got it"})]})]})]})," ","before starting the job."]})}),P={name:"Ex: Rich note",args:{interaction:"rich",tone:"tip",size:"md",showArrow:!0,placement:"bottom"},render:({children:t,...r})=>e.jsx(ke,{...r})},C={render:()=>e.jsx(d,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"16",p:"32",children:["note","tip","warning","important","caution"].map(t=>e.jsx(m,{interaction:"definition",tone:t,children:e.jsxs(d,{className:Ie[t],children:[e.jsx(f,{children:e.jsx(y,{children:t.charAt(0).toUpperCase()+t.slice(1)})}),e.jsx(v,{children:'Visual tone only — this never maps to role="alert".'})]})},t))})},A={render:()=>e.jsx(d,{display:"flex",flexWrap:"wrap",gap:"24",alignItems:"flex-start",p:"32",children:["sm","md","lg"].map(t=>e.jsx(m,{interaction:"definition",tone:"note",size:t,children:e.jsxs(d,{className:Oe[t],children:[e.jsx(f,{children:e.jsxs(y,{children:["Size ",t]})}),e.jsx(v,{children:"Popover panels are wider than Tooltip (max 240) so handbook notes can carry multi-line guidance."})]})},t))})},j={parameters:{layout:"fullscreen"},render:()=>e.jsx(d,{h:"4xl",display:"flex",alignItems:"center",p:"16",children:e.jsxs(m,{placement:"bottom",children:[e.jsx(u,{children:"Setup notes"}),e.jsxs(g,{h:"lg",w:"280","data-testid":"edge-panel",children:[e.jsxs(f,{children:[e.jsx(y,{children:"Room beside the trigger"}),e.jsx(F,{})]}),e.jsx(v,{children:"When this panel cannot fit above or below, it opens to the side. Resize the viewport to see the placement adapt."})]})]})}),play:async({canvasElement:t})=>{const r=s(t),i=s(t.ownerDocument.body),a=r.getByRole("button",{name:"Setup notes"});await l.click(a);const o=await i.findByTestId("edge-panel");await c(()=>{const b=o.getBoundingClientRect();n(b.left).toBeGreaterThanOrEqual(a.getBoundingClientRect().right),n(b.top).toBeGreaterThanOrEqual(0),n(b.bottom).toBeLessThanOrEqual(window.innerHeight)});const p=s(o).getByRole("button");await c(()=>n(p).toHaveFocus()),o.focus(),await c(()=>{n(o).toHaveFocus(),n(i.queryByRole("tooltip")).toBeNull()})}},H={tags:["!dev","!autodocs","!snapshot"],render:()=>e.jsxs(d,{display:"flex",gap:"16",children:[["note","tip","warning","important","caution"].map(t=>e.jsxs(m,{tone:t,showArrow:!1,children:[e.jsx(u,{children:t}),e.jsxs(g,{children:[e.jsx(y,{children:t}),e.jsx(F,{}),e.jsx(z,{})]})]},t)),e.jsxs(m,{showArrow:!1,children:[e.jsx(u,{children:"Custom fill"}),e.jsxs(g,{children:[e.jsx(y,{children:"Custom fill"}),e.jsx(F,{}),e.jsx(z,{fill:M.var("colors.bg.info.subtle")})]})]})]}),play:async({canvasElement:t})=>{const r=s(t),i=s(t.ownerDocument.body);for(const a of["note","tip","warning","important","caution","Custom fill"]){await l.click(r.getByRole("button",{name:a}));const o=await i.findByRole("dialog",{name:a}),p=o.querySelector('svg[aria-hidden="true"]');n(p).toHaveAttribute("fill",M.var(a==="Custom fill"?"colors.bg.info.subtle":"colors.surface.overlay")),await l.click(s(o).getByRole("button",{name:"Close"})),await c(()=>n(o).not.toBeInTheDocument())}}},T={tags:["!dev","!autodocs"],render:()=>e.jsx(ke,{tone:"tip"}),play:async({canvasElement:t})=>{const r=s(t),i=s(t.ownerDocument.body),a=r.getByRole("button",{name:"setup checklist"});n(a).toHaveAttribute("aria-haspopup","dialog"),n(a).toHaveAttribute("aria-expanded","false"),await l.click(a);const o=await i.findByRole("dialog",{name:"Tip"});n(a).toHaveAttribute("aria-expanded","true"),n(a).toHaveAttribute("aria-controls",o.id),await c(()=>n(o).toContainElement(document.activeElement));for(let p=0;p<5;p+=1)await l.tab(),await c(()=>n(o).toContainElement(document.activeElement));s(o).getByRole("button",{name:"Got it"}).focus(),await l.keyboard("{Escape}"),await c(()=>n(i.queryByRole("dialog",{name:"Tip"})).toBeNull()),await c(()=>n(a).toHaveFocus()),await l.click(a),await i.findByRole("dialog",{name:"Tip"}),await l.click(t.ownerDocument.body),await c(()=>n(i.queryByRole("dialog",{name:"Tip"})).toBeNull())}},R={tags:["!dev","!autodocs"],render:()=>e.jsxs(S,{children:["Track"," ",e.jsxs(m,{interaction:"definition",children:[e.jsx(u,{children:"cycle time"}),e.jsx(g,{children:e.jsx(v,{children:"Queue and wait time, not only active work."})})]})," ","daily."]}),play:async({canvasElement:t})=>{const r=s(t),i=s(t.ownerDocument.body),a=r.getByText("cycle time");await l.tab(),n(a).toHaveFocus();const o=await i.findByRole("tooltip");n(a).toHaveAttribute("aria-describedby",o.id),n(a).toHaveFocus(),await l.keyboard("{Escape}"),await c(()=>n(i.queryByRole("tooltip")).toBeNull())}},Ge=()=>{const[t,r]=D.useState(!0);return e.jsxs(ze,{open:t,onOpenChange:r,"aria-label":"Job notes",children:[e.jsx(Ne,{title:"Job notes"}),e.jsx(qe,{children:e.jsxs(S,{children:["Review the"," ",e.jsxs(m,{children:[e.jsx(u,{children:"setup checklist"}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsx(y,{children:"Tip"})}),e.jsx(v,{children:"Confirm tooling before the first piece."})]})]})," ","first."]})})]})},E={tags:["!dev","!autodocs"],render:()=>e.jsx(Ge,{}),play:async({canvasElement:t})=>{const r=s(t.ownerDocument.body),i=await r.findByRole("dialog",{name:"Job notes"});await l.click(s(i).getByRole("button",{name:"setup checklist"}));const a=await r.findByRole("dialog",{name:"Tip"});await c(()=>{const o=a.getBoundingClientRect(),p=t.ownerDocument.elementFromPoint(o.left+o.width/2,o.top+o.height/2);n(a).toContainElement(p)})}},We=()=>{const[t,r]=D.useState(!0),i=D.useRef(null),[a,o]=D.useState(null);return e.jsxs(d,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"48",children:[e.jsx(Ee,{size:"sm",onClick:()=>r(!1),children:"Remove anchor"}),e.jsxs(m,{interaction:"definition",open:!0,onOpenChange:()=>{},children:[e.jsx(u,{children:"trigger"}),t&&e.jsx(Se,{ref:o,children:e.jsx(d,{p:"8",mt:"96",borderWidth:"1",borderColor:"border",children:"anchor"})}),e.jsx(g,{ref:i,"data-testid":"anchor-content",children:e.jsx(v,{children:"Positioned content"})})]}),e.jsx(d,{"data-testid":"anchor-ref-attached",children:String(a!==null)})]})},k={tags:["!dev","!autodocs"],render:()=>e.jsx(We,{}),play:async({canvasElement:t})=>{const r=s(t),a=await s(t.ownerDocument.body).findByTestId("anchor-content"),o=8,p=b=>{const w=a.getBoundingClientRect(),x=b.getBoundingClientRect(),Ce=Math.min(Math.abs(w.top-x.bottom-o),Math.abs(x.top-w.bottom-o)),Ae=Math.min(Math.abs(w.left-x.right-o),Math.abs(x.left-w.right-o)),He=Math.abs(w.top+w.height/2-x.top-x.height/2)<2;return Ce<2||Ae<2&&He};n(r.getByTestId("anchor-ref-attached")).toHaveTextContent("true"),await c(()=>n(p(r.getByText("anchor"))).toBe(!0)),await l.click(r.getByRole("button",{name:"Remove anchor"})),n(r.queryByText("anchor")).toBeNull(),await c(()=>n(p(r.getByText("trigger"))).toBe(!0))}},at=["DefinitionNote","RichNote","Tones","Sizes","EdgePlacement","A11yExplicitArrow","A11yRichKeyboard","A11yDefinitionFocus","A11yInsideModal","A11yAnchorUnmount"];var N,q,I,O,G;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(q=B.parameters)==null?void 0:q.docs)==null?void 0:I.source},description:{story:"Handbook definition note — hover or focus the dashed phrase.",...(G=(O=B.parameters)==null?void 0:O.docs)==null?void 0:G.description}}};var W,L,_,U,J;P.parameters={...P.parameters,docs:{...(W=P.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(L=P.parameters)==null?void 0:L.docs)==null?void 0:_.source},description:{story:"Handbook rich note — click the dashed phrase; focus is trapped.",...(J=(U=P.parameters)==null?void 0:U.docs)==null?void 0:J.description}}};var K,Q,V;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Y,X,Z;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Z=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te,oe,ne;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    // Wait for the panel's initial focus to land on the close control first,
    // or it can take focus back after the panel is focused.
    const close = within(panel).getByRole('button');
    await waitFor(() => expect(close).toHaveFocus());
    panel.focus();
    await waitFor(() => {
      expect(panel).toHaveFocus();
      expect(body.queryByRole('tooltip')).toBeNull();
    });
  }
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"A tall panel can use the space beside a trigger near the left edge.",...(ne=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ae,re,ie;H.parameters={...H.parameters,docs:{...(ae=H.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(re=H.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,ce,le,de,pe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:`Rich mode: opens on click, traps Tab, closes on Escape with focus restored
to the trigger, and closes on outside press.`,...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var me,he,ue,ge,ye;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(he=R.parameters)==null?void 0:he.docs)==null?void 0:ue.source},description:{story:"Definition mode: opens on keyboard focus, describes the trigger, closes on Escape.",...(ye=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ye.description}}};var ve,we,xe,fe,be;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(we=E.parameters)==null?void 0:we.docs)==null?void 0:xe.source},description:{story:"Content opened inside a modal paints above the modal and its scrim.",...(be=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:be.description}}};var Be,Pe,je,Te,Re;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(je=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:je.source},description:{story:`Content follows the anchor while it is mounted and returns to the trigger
when it unmounts. Consumer refs on both Anchor and Content do not break
positioning.`,...(Re=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:Re.description}}};export{k as A11yAnchorUnmount,R as A11yDefinitionFocus,H as A11yExplicitArrow,E as A11yInsideModal,T as A11yRichKeyboard,B as DefinitionNote,j as EdgePlacement,P as RichNote,A as Sizes,C as Tones,at as __namedExportsOrder,nt as default};
