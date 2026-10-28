import{j as e,B as l,T as R,r as E}from"./iframe-DLrLYIhK.js";import{B as k}from"./Button-5VOroQAR.js";import{L as he}from"./Link-Bfn2yjtq.js";import{M as ue,a as ge,b as ye}from"./ModalWrapper-CgoLuDwz.js";import{P as p,a as h,b as u,c as B,d as j,f as g,e as xe,g as ve,h as we,i as be}from"./PopoverFooter-cFc3i9_m.js";import"./preload-helper-C7uIy2vd.js";import"./Spinner-CMuDJqZk.js";import"./FieldContext-CixBAFSt.js";import"./useLocale-DmFnKSwc.js";import"./mq.hook-aVnSnAJP.js";import"./breakpoints-DU_5_Zhy.js";import"./Heading-CeUPxIfU.js";import"./IconButton-B_5IpihP.js";import"./FloatingLayerContext-D6RLZ3MJ.js";const{expect:r,userEvent:s,waitFor:c,within:d}=__STORYBOOK_MODULE_TEST__,Oe={title:"Components/Popover",component:p,parameters:{layout:"centered"},args:{children:null,interaction:"rich",size:"md",showArrow:!0,placement:"bottom"},argTypes:{interaction:{control:"select",options:["definition","rich"]},size:{control:"select",options:["sm","md","lg"]},tone:{control:"select",options:["note","tip","warning","important","caution"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},showArrow:{control:"boolean"}}},y={name:"Ex: Definition note",args:{interaction:"definition",tone:"warning",size:"md",showArrow:!0,placement:"bottom"},render:({children:t,...o})=>e.jsx(l,{maxW:"prose",p:"32",children:e.jsxs(R,{children:["Operators should track"," ",e.jsxs(p,{...o,children:[e.jsx(h,{children:"cycle time"}),e.jsxs(u,{children:[e.jsx(B,{children:e.jsx(j,{children:"Warning"})}),e.jsx(g,{children:"Cycle time includes queue and wait, not only active work. Do not treat machine run time as the full cycle when estimating delivery commitments."})]})]})," ","before promising a ship date."]})})},pe=t=>e.jsx(l,{maxW:"prose",p:"32",children:e.jsxs(R,{children:["See the"," ",e.jsxs(p,{...t,children:[e.jsx(h,{children:"setup checklist"}),e.jsxs(u,{children:[e.jsxs(B,{children:[e.jsx(j,{children:"Tip"}),e.jsx(xe,{})]}),e.jsx(ve,{children:e.jsx(l,{as:"img",src:"https://placehold.co/320x120/png?text=Setup+diagram",alt:"Setup diagram placeholder",w:"full",display:"block"})}),e.jsx(g,{children:"Confirm tooling, material, and traveler notes before the first piece. Open the full checklist when onboarding a new operator."}),e.jsxs(we,{children:[e.jsx(he,{href:"https://example.com/handbook/setup",external:!0,children:"Open handbook"}),e.jsx(k,{size:"sm",children:"Got it"})]})]})]})," ","before starting the job."]})}),x={name:"Ex: Rich note",args:{interaction:"rich",tone:"tip",size:"md",showArrow:!0,placement:"bottom"},render:({children:t,...o})=>e.jsx(pe,{...o})},T={render:()=>e.jsx(l,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"80",p:"32",pe:"[22rem]",children:["note","tip","warning","important","caution"].map(t=>e.jsxs(p,{interaction:"definition",tone:t,placement:"right",defaultOpen:!0,children:[e.jsx(h,{children:e.jsx(k,{size:"sm",children:t})}),e.jsxs(u,{children:[e.jsx(B,{children:e.jsx(j,{children:t.charAt(0).toUpperCase()+t.slice(1)})}),e.jsx(g,{children:'Visual tone only — this never maps to role="alert".'})]})]},t))})},P={render:()=>e.jsx(l,{display:"flex",gap:"48",alignItems:"flex-start",p:"32",children:["sm","md","lg"].map(t=>e.jsxs(p,{interaction:"definition",tone:"note",size:t,defaultOpen:!0,children:[e.jsx(h,{children:e.jsx(k,{size:"sm",children:t})}),e.jsxs(u,{children:[e.jsx(B,{children:e.jsxs(j,{children:["Size ",t]})}),e.jsx(g,{children:"Popover panels are wider than Tooltip (max 240) so handbook notes can carry multi-line guidance."})]})]},t))})},v={tags:["!dev","!autodocs"],render:()=>e.jsx(pe,{tone:"tip"}),play:async({canvasElement:t})=>{const o=d(t),i=d(t.ownerDocument.body),n=o.getByRole("button",{name:"setup checklist"});r(n).toHaveAttribute("aria-haspopup","dialog"),r(n).toHaveAttribute("aria-expanded","false"),await s.click(n);const a=await i.findByRole("dialog",{name:"Tip"});r(n).toHaveAttribute("aria-expanded","true"),r(n).toHaveAttribute("aria-controls",a.id),await c(()=>r(a).toContainElement(document.activeElement));for(let m=0;m<5;m+=1)await s.tab(),await c(()=>r(a).toContainElement(document.activeElement));d(a).getByRole("button",{name:"Got it"}).focus(),await s.keyboard("{Escape}"),await c(()=>r(i.queryByRole("dialog",{name:"Tip"})).toBeNull()),await c(()=>r(n).toHaveFocus()),await s.click(n),await i.findByRole("dialog",{name:"Tip"}),await s.click(t.ownerDocument.body),await c(()=>r(i.queryByRole("dialog",{name:"Tip"})).toBeNull())}},w={tags:["!dev","!autodocs"],render:()=>e.jsxs(R,{children:["Track"," ",e.jsxs(p,{interaction:"definition",children:[e.jsx(h,{children:"cycle time"}),e.jsx(u,{children:e.jsx(g,{children:"Queue and wait time, not only active work."})})]})," ","daily."]}),play:async({canvasElement:t})=>{const o=d(t),i=d(t.ownerDocument.body),n=o.getByText("cycle time");await s.tab(),r(n).toHaveFocus();const a=await i.findByRole("tooltip");r(n).toHaveAttribute("aria-describedby",a.id),r(n).toHaveFocus(),await s.keyboard("{Escape}"),await c(()=>r(i.queryByRole("tooltip")).toBeNull())}},fe=()=>{const[t,o]=E.useState(!0);return e.jsxs(ue,{open:t,onOpenChange:o,"aria-label":"Job notes",children:[e.jsx(ge,{title:"Job notes"}),e.jsx(ye,{children:e.jsxs(R,{children:["Review the"," ",e.jsxs(p,{children:[e.jsx(h,{children:"setup checklist"}),e.jsxs(u,{children:[e.jsx(B,{children:e.jsx(j,{children:"Tip"})}),e.jsx(g,{children:"Confirm tooling before the first piece."})]})]})," ","first."]})})]})},b={tags:["!dev","!autodocs"],render:()=>e.jsx(fe,{}),play:async({canvasElement:t})=>{const o=d(t.ownerDocument.body),i=await o.findByRole("dialog",{name:"Job notes"});await s.click(d(i).getByRole("button",{name:"setup checklist"}));const n=await o.findByRole("dialog",{name:"Tip"});await c(()=>{const a=n.getBoundingClientRect(),m=t.ownerDocument.elementFromPoint(a.left+a.width/2,a.top+a.height/2);r(n).toContainElement(m)})}},Be=()=>{const[t,o]=E.useState(!0),i=E.useRef(null),[n,a]=E.useState(null);return e.jsxs(l,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"48",children:[e.jsx(k,{size:"sm",onClick:()=>o(!1),children:"Remove anchor"}),e.jsxs(p,{interaction:"definition",open:!0,onOpenChange:()=>{},children:[e.jsx(h,{children:"trigger"}),t&&e.jsx(be,{ref:a,children:e.jsx(l,{p:"8",mt:"96",borderWidth:"1",borderColor:"border",children:"anchor"})}),e.jsx(u,{ref:i,"data-testid":"anchor-content",children:e.jsx(g,{children:"Positioned content"})})]}),e.jsx(l,{"data-testid":"anchor-ref-attached",children:String(n!==null)})]})},f={tags:["!dev","!autodocs"],render:()=>e.jsx(Be,{}),play:async({canvasElement:t})=>{const o=d(t),n=await d(t.ownerDocument.body).findByTestId("anchor-content"),a=8,m=me=>Math.abs(n.getBoundingClientRect().top-(me.getBoundingClientRect().bottom+a))<2;r(o.getByTestId("anchor-ref-attached")).toHaveTextContent("true"),await c(()=>r(m(o.getByText("anchor"))).toBe(!0)),await s.click(o.getByRole("button",{name:"Remove anchor"})),r(o.queryByText("anchor")).toBeNull(),await c(()=>r(m(o.getByText("trigger"))).toBe(!0))}},Me=["DefinitionNote","RichNote","Tones","Sizes","A11yRichKeyboard","A11yDefinitionFocus","A11yInsideModal","A11yAnchorUnmount"];var C,A,H,D,F;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(A=y.parameters)==null?void 0:A.docs)==null?void 0:H.source},description:{story:"Handbook definition note — hover or focus the dashed phrase.",...(F=(D=y.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var S,z,N,O,M;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(z=x.parameters)==null?void 0:z.docs)==null?void 0:N.source},description:{story:"Handbook rich note — click the dashed phrase; focus is trapped.",...(M=(O=x.parameters)==null?void 0:O.docs)==null?void 0:M.description}}};var I,q,_;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" alignItems="flex-start" gap="80" p="32" pe="[22rem]">
      {(['note', 'tip', 'warning', 'important', 'caution'] as const).map(tone => <Popover key={tone} interaction="definition" tone={tone} placement="right" defaultOpen>
            <PopoverTrigger>
              <Button size="sm">{tone}</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>
                  {tone.charAt(0).toUpperCase() + tone.slice(1)}
                </PopoverTitle>
              </PopoverHeader>
              <PopoverBody>
                Visual tone only — this never maps to role=&quot;alert&quot;.
              </PopoverBody>
            </PopoverContent>
          </Popover>)}
    </Box>
}`,...(_=(q=T.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var L,U,W;P.parameters={...P.parameters,docs:{...(L=P.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="48" alignItems="flex-start" p="32">
      {(['sm', 'md', 'lg'] as const).map(size => <Popover key={size} interaction="definition" tone="note" size={size} defaultOpen>
          <PopoverTrigger>
            <Button size="sm">{size}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Size {size}</PopoverTitle>
            </PopoverHeader>
            <PopoverBody>
              Popover panels are wider than Tooltip (max 240) so handbook notes
              can carry multi-line guidance.
            </PopoverBody>
          </PopoverContent>
        </Popover>)}
    </Box>
}`,...(W=(U=P.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var J,G,K,Q,V;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source},description:{story:`Rich mode: opens on click, traps Tab, closes on Escape with focus restored
to the trigger, and closes on outside press.`,...(V=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};var Y,X,Z,$,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Definition mode: opens on keyboard focus, describes the trigger, closes on Escape.",...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,oe,ne,re,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ne.source},description:{story:"Content opened inside a modal paints above the modal and its scrim.",...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var ie,se,ce,de,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
    const isBelow = (reference: Element) => Math.abs(content.getBoundingClientRect().top - (reference.getBoundingClientRect().bottom + offset)) < 2;

    // Consumer ref on PopoverAnchor still resolves to the anchor DOM node.
    expect(canvas.getByTestId('anchor-ref-attached')).toHaveTextContent('true');
    await waitFor(() => expect(isBelow(canvas.getByText('anchor'))).toBe(true));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove anchor'
    }));
    expect(canvas.queryByText('anchor')).toBeNull();
    await waitFor(() => expect(isBelow(canvas.getByText('trigger'))).toBe(true));
  }
}`,...(ce=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ce.source},description:{story:`Content follows the anchor while it is mounted and returns to the trigger
when it unmounts. Consumer refs on both Anchor and Content do not break
positioning.`,...(le=(de=f.parameters)==null?void 0:de.docs)==null?void 0:le.description}}};export{f as A11yAnchorUnmount,w as A11yDefinitionFocus,b as A11yInsideModal,v as A11yRichKeyboard,y as DefinitionNote,x as RichNote,P as Sizes,T as Tones,Me as __namedExportsOrder,Oe as default};
