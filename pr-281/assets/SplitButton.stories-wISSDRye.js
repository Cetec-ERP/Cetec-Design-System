import{j as n,V as y,H as Ye,B as Ge,r as O,T as Ke}from"./iframe-CjXzxEP4.js";import{B as Qe}from"./Button-Dq6iR1xG.js";import{a as u,b as Xe,S as Ze}from"./SubMenu-COALkseg.js";import{S as d,a as w}from"./SplitButton-XTIXF9v2.js";import"./preload-helper-DhUE6qkK.js";import"./Spinner-CsxUhPZl.js";import"./FieldContext-Df6te-PI.js";import"./HighlightText-TtUjmJPA.js";import"./menu-t38b-biT.js";import"./useLocale-BGrEy-l0.js";import"./FloatingLayerContext-Dnpy9ddJ.js";import"./ListItemGroup-BG5nB3mM.js";import"./Divider-B2AAFEY6.js";import"./Checkbox-NhuAxbqA.js";import"./Toggle-C1vLCnQG.js";import"./IconButton-UgQqvNss.js";const{expect:e,fn:V,userEvent:r,waitFor:c,within:p}=__STORYBOOK_MODULE_TEST__,yt={title:"Components/SplitButton",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A main action joined to a menu of related actions.

- When to use: one action is the usual choice, and a few related actions
  are the other ways to do it, such as "Move to next" with "Choose
  location…" and "Partial move…" in the menu.
- When not to use: for one action, use \`Button\`. When no action is the
  main one, use \`Menu\` with \`trigger={<Button>…</Button>}\`.
- Each half can be disabled on its own, with a reason in a tooltip:
  \`disabledReason\` for the main action and \`menuDisabledReason\` for the
  menu toggle.
- Keyboard: two tab stops. Enter, Space, or the arrow keys on the toggle
  open the menu. Escape closes it and returns focus to the toggle.
- The toggle's accessible name comes from \`menuLabel\`, or from the
  \`moreActions\` label of \`LocaleProvider\`.

\`\`\`tsx
<SplitButton onClick={moveToNext} menuLabel="More move options">
  Move to next: Packing
  <SplitButtonMenu>
    <MenuItem label="Choose location…" onClick={chooseLocation} />
    <MenuItem label="Partial move…" onClick={partialMove} />
  </SplitButtonMenu>
</SplitButton>
\`\`\``}}},argTypes:{variant:{control:"select",options:["standard","primary","cta","hollow","danger"],table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},loading:{control:"boolean"},disabledReason:{control:"text"},menuDisabledReason:{control:"text"},menuLabel:{control:"text"}},args:{onClick:V(),children:n.jsxs(n.Fragment,{children:["Move to next: Packing",n.jsxs(w,{children:[n.jsx(u,{label:"Choose location…"}),n.jsx(u,{label:"Partial move…"})]})]})}},F=["standard","primary","cta","hollow","danger"],N=["sm","md","lg"],h=n.jsxs(w,{children:[n.jsx(u,{label:"Choose location…"}),n.jsx(u,{label:"Partial move…"})]}),S={},M={render:()=>n.jsx(y,{gap:"12",alignItems:"start",children:F.map(t=>n.jsxs(d,{variant:t,children:[`Move to next (${t})`,h]},t))}),parameters:{controls:{disable:!0}}},f={render:()=>n.jsx(y,{gap:"12",alignItems:"start",children:N.map(t=>n.jsxs(Ye,{gap:"8",children:[n.jsxs(d,{size:t,children:[`Move to next (${t})`,h]}),n.jsxs(d,{size:t,variant:"primary",children:[`Move to next (${t})`,h]}),n.jsxs(d,{size:t,variant:"hollow",children:[`Move to next (${t})`,h]})]},t))}),parameters:{controls:{disable:!0}}},b={name:"Action Disabled With Reason",render:()=>n.jsx(y,{gap:"12",alignItems:"start",children:F.map(t=>n.jsxs(d,{variant:t,disabledReason:"This is the last location on the route.",children:["Move to next",h]},t))}),parameters:{controls:{disable:!0}}},B={name:"Menu Disabled With Reason",render:()=>n.jsx(y,{gap:"12",alignItems:"start",children:F.map(t=>n.jsxs(d,{variant:t,menuDisabledReason:"You need the Inventory role to choose a location.",children:["Move to next: Packing",h]},t))}),parameters:{controls:{disable:!0}}},x={render:()=>n.jsx(Ye,{gap:"8",children:F.map(t=>n.jsxs(d,{variant:t,loading:!0,children:["Move to next",h]},t))}),parameters:{controls:{disable:!0}}},k={name:"Menu Open",tags:["!autodocs"],render:()=>n.jsx(Ge,{pb:"224",children:n.jsxs(d,{variant:"primary",menuLabel:"More move options",children:["Move to next: Packing",n.jsxs(w,{defaultOpen:!0,children:[n.jsx(u,{label:"Choose location…"}),n.jsx(u,{label:"Partial move…"}),n.jsx(Xe,{label:"Undo",divider:!0,children:n.jsx(u,{label:"Move back to Picking"})}),n.jsxs(Ze,{label:"Send to",children:[n.jsx(u,{label:"Quality hold"}),n.jsx(u,{label:"Rework"})]})]})]})}),parameters:{controls:{disable:!0}},play:async({canvasElement:t})=>{const o=p(t.ownerDocument.body);await e(await o.findByRole("menu")).toBeVisible(),await e(o.getByRole("button",{name:"More move options"})).toHaveAttribute("aria-expanded","true")}},$=["Receiving","Inspection","Picking","Packing","Shipping"],R={name:"Ex: Move to Next",render:function(){const[o,l]=O.useState(2),i=$[o]??"",s=$[o+1];return n.jsxs(y,{gap:"12",alignItems:"start",children:[n.jsx(Ke,{children:`Job 1042 is at ${i}.`}),n.jsxs(d,{variant:"primary",menuLabel:"More move options",onClick:()=>l(a=>a+1),disabledReason:s?void 0:"This is the last location on the route.",children:[s?`Move to next: ${s}`:"Move to next",n.jsxs(w,{children:[n.jsx(u,{label:"Choose location…"}),n.jsx(u,{label:"Partial move…"}),n.jsx(u,{label:"Start over at Receiving",disabled:o===0,onClick:()=>l(0)})]})]})]})},parameters:{controls:{disable:!0}}},q=V(),P=t=>{const o=t.querySelector('[class*="splitButton__divider"]');if(!(o instanceof HTMLElement))throw new Error("Missing divider.");return o},C={name:"Test: keyboard",tags:["!dev","!autodocs","!snapshot"],render:t=>n.jsxs(d,{...t,children:["Move to next: Packing",n.jsxs(w,{children:[n.jsx(u,{label:"Choose location…",onClick:q}),n.jsx(u,{label:"Partial move…"})]})]}),play:async({args:t,canvasElement:o})=>{const l=p(o),i=p(o.ownerDocument.body);q.mockClear();const s=l.getByRole("button",{name:"Move to next: Packing"}),a=l.getByRole("button",{name:"More actions"});await r.tab(),await e(s).toHaveFocus(),await r.keyboard("{Enter}"),await e(t.onClick).toHaveBeenCalledTimes(1),await r.tab(),await e(a).toHaveFocus(),await e(a).toHaveAttribute("aria-haspopup","menu"),await e(a).toHaveAttribute("aria-expanded","false"),await r.keyboard("{Enter}"),await c(()=>e(i.getByRole("menuitem",{name:"Choose location…"})).toHaveFocus()),await e(a).toHaveAttribute("aria-expanded","true"),await r.keyboard("{ArrowDown}"),await e(i.getByRole("menuitem",{name:"Partial move…"})).toHaveFocus(),await r.keyboard("{Escape}"),await c(()=>e(i.queryByRole("menu")).toBeNull()),await e(a).toHaveFocus(),await e(a).toHaveAttribute("aria-expanded","false"),await r.keyboard("{ArrowDown}"),await c(()=>e(i.getByRole("menuitem",{name:"Choose location…"})).toHaveFocus()),await r.keyboard("{Enter}"),await e(q).toHaveBeenCalledTimes(1),await c(()=>e(i.queryByRole("menu")).toBeNull()),await c(()=>e(a).toHaveFocus()),await e(t.onClick).toHaveBeenCalledTimes(1)}},T={name:"Test: menu opens and closes",tags:["!dev","!autodocs"],render:t=>n.jsxs(y,{gap:"16",alignItems:"start",children:[n.jsx(d,{...t}),n.jsx(Ke,{children:"Outside the split button"})]}),play:async({args:t,canvasElement:o})=>{const l=p(o),i=p(o.ownerDocument.body),s=l.getByRole("button",{name:"More actions"}),a=s.querySelector("svg");if(!a)throw new Error("Missing the caret.");await e(getComputedStyle(a).transform).toBe("none"),await r.click(s);const m=await i.findByRole("menu");await e(s).toHaveAttribute("aria-expanded","true"),await e(t.onClick).not.toHaveBeenCalled(),await r.unhover(s),await r.hover(s),await new Promise(Je=>setTimeout(Je,500)),await e(i.queryByRole("tooltip")).toBeNull(),await c(()=>e(getComputedStyle(a).transform).toBe("matrix(-1, 0, 0, -1, 0, 0)"));const g=s.getBoundingClientRect(),v=m.getBoundingClientRect();await e(v.top).toBeGreaterThanOrEqual(g.bottom),await e(Math.round(v.right)).toBe(Math.round(g.right)),await r.click(s),await c(()=>e(i.queryByRole("menu")).toBeNull()),await c(()=>e(getComputedStyle(a).transform).toBe("none")),await r.click(s),await i.findByRole("menu"),await r.click(l.getByText("Outside the split button")),await c(()=>e(i.queryByRole("menu")).toBeNull()),await r.click(s),await r.click(await i.findByRole("menuitem",{name:"Partial move…"})),await c(()=>e(i.queryByRole("menu")).toBeNull()),await e(t.onClick).not.toHaveBeenCalled(),await r.unhover(s),s.blur(),await c(()=>e(i.queryByRole("tooltip")).toBeNull())}},E={name:"Test: action disabled, menu works",tags:["!dev","!autodocs"],args:{disabledReason:"This is the last location on the route."},play:async({args:t,canvasElement:o})=>{const l=p(o),i=p(o.ownerDocument.body),s=l.getByRole("button",{name:"Move to next: Packing"}),a=l.getByRole("button",{name:"More actions"});await e(s).toHaveAttribute("aria-disabled","true"),await e(s).toHaveAccessibleDescription("This is the last location on the route."),await e(a).not.toHaveAttribute("aria-disabled","true"),await e(getComputedStyle(P(o)).opacity).toBe(getComputedStyle(s).opacity),await e(getComputedStyle(s).opacity).not.toBe("1"),await r.tab(),await e(s).toHaveFocus(),await r.keyboard("{Enter}"),await r.click(s),await e(t.onClick).not.toHaveBeenCalled(),await r.tab(),await e(a).toHaveFocus(),await r.keyboard("{Enter}"),await i.findByRole("menu"),await r.keyboard("{Escape}"),await c(()=>e(i.queryByRole("menu")).toBeNull()),await r.click(a),await i.findByRole("menu"),await r.keyboard("{Escape}"),await c(()=>e(i.queryByRole("menu")).toBeNull()),await r.unhover(a),a.blur(),await c(()=>e(i.queryByRole("tooltip")).toBeNull())}},H={name:"Test: menu disabled, action works",tags:["!dev","!autodocs"],args:{menuDisabledReason:"You need the Inventory role to choose a location."},render:t=>n.jsx(Ge,{pt:"64",children:n.jsx(d,{...t})}),play:async({args:t,canvasElement:o})=>{const l=p(o),i=p(o.ownerDocument.body),s=l.getByRole("button",{name:"Move to next: Packing"}),a=l.getByRole("button",{name:"More actions"});await e(a).toHaveAttribute("aria-disabled","true"),await e(a).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAccessibleDescription("You need the Inventory role to choose a location."),await e(s).not.toHaveAttribute("aria-disabled","true"),await e(getComputedStyle(P(o)).opacity).toBe(getComputedStyle(a).opacity),await e(getComputedStyle(a).opacity).not.toBe("1"),await r.click(s),await e(t.onClick).toHaveBeenCalledTimes(1),s.focus(),await r.tab(),await e(a).toHaveFocus();for(const g of["{Enter}"," ","{ArrowDown}","{ArrowUp}"])await r.keyboard(g);await r.click(a),await e(i.queryByRole("menu")).toBeNull(),await e(a).toHaveAttribute("aria-expanded","false");const m=await i.findByRole("tooltip");await e(m).toHaveTextContent("You need the Inventory role to choose a location."),await c(()=>e(m.getBoundingClientRect().bottom).toBeLessThanOrEqual(a.getBoundingClientRect().top)),await r.unhover(a),a.blur(),await c(()=>e(i.queryByRole("tooltip")).toBeNull())}},A=V(),j={name:"Test: a disabled reason closes a controlled menu",tags:["!dev","!autodocs","!snapshot"],render:function(o){const[l,i]=O.useState(!1),[s,a]=O.useState(!1);return n.jsxs(y,{gap:"16",alignItems:"start",children:[n.jsxs(d,{...o,menuDisabledReason:s?"Another user is moving this job.":void 0,children:["Move to next: Packing",n.jsx(w,{open:l,onOpenChange:m=>{A(m),i(m)},children:n.jsx(u,{label:"Choose location…"})})]}),n.jsx(Qe,{onClick:()=>a(m=>!m),children:"Toggle lock"})]})},play:async({canvasElement:t})=>{const o=p(t),l=p(t.ownerDocument.body),i=o.getByRole("button",{name:"More actions"}),s=o.getByRole("button",{name:"Toggle lock"});A.mockClear(),await r.click(i),await l.findByRole("menu"),await e(A).toHaveBeenLastCalledWith(!0),s.click(),await c(()=>e(l.queryByRole("menu")).toBeNull()),await e(A).toHaveBeenLastCalledWith(!1),s.click(),await c(()=>e(i).not.toHaveAttribute("aria-disabled","true")),await e(l.queryByRole("menu")).toBeNull(),await e(i).toHaveAttribute("aria-expanded","false")}},I={name:"Test: loading is on the action only",tags:["!dev","!autodocs"],args:{loading:!0},play:async({canvasElement:t})=>{const o=p(t),l=o.getByRole("button",{name:"Move to next: Packing"}),i=o.getByRole("button",{name:"More actions"});await e(l).toHaveAttribute("aria-busy","true"),await e(i).not.toHaveAttribute("aria-busy"),await e(getComputedStyle(P(t)).opacity).toBe(getComputedStyle(l).opacity),await e(getComputedStyle(l).opacity).not.toBe("1")}},D={name:"Test: menuLabel names the toggle",tags:["!dev","!autodocs","!snapshot"],args:{menuLabel:"More move options"},play:async({canvasElement:t})=>{const o=p(t);await e(o.getByRole("button",{name:"More move options"})).toBeInTheDocument(),await e(o.queryByRole("button",{name:"More actions"})).toBeNull()}},L={name:"Test: halves share one shape",tags:["!dev","!autodocs"],render:()=>n.jsx(y,{gap:"12",alignItems:"start",children:N.flatMap(t=>["standard","hollow"].map(o=>n.jsxs(d,{size:t,variant:o,"data-testid":`${t}-${o}`,children:["Move to next",h]},`${t}-${o}`)))}),parameters:{controls:{disable:!0}},play:async({canvasElement:t})=>{const o=p(t);for(const l of N)for(const i of["standard","hollow"]){const s=o.getByTestId(`${l}-${i}`),[a,m]=p(s).getAllByRole("button");if(!a||!m)throw new Error("Missing a half.");const g=getComputedStyle(a),v=getComputedStyle(m);await e(g.borderTopRightRadius).toBe("0px"),await e(g.borderBottomRightRadius).toBe("0px"),await e(g.borderRightWidth).toBe("0px"),await e(g.borderTopLeftRadius).not.toBe("0px"),await e(v.borderTopLeftRadius).toBe("0px"),await e(v.borderBottomLeftRadius).toBe("0px"),await e(v.borderLeftWidth).toBe("0px"),await e(v.borderTopRightRadius).not.toBe("0px"),await e(getComputedStyle(P(s)).opacity).toBe("1"),await e(m.getBoundingClientRect().height).toBe(a.getBoundingClientRect().height)}}},vt=["Default","Variants","Sizes","ActionDisabled","MenuDisabled","Loading","MenuOpen","ExMoveToNext","KeyboardBehavior","OpenAndClose","ActionDisabledBehavior","MenuDisabledBehavior","ControlledMenuDisabledBehavior","LoadingBehavior","MenuLabelBehavior","JoinedShape"];var z,W,U;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(U=(W=S.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var _,Y,G;M.parameters={...M.parameters,docs:{...(_=M.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="start">
      {variants.map(variant => <SplitButton key={variant} variant={variant}>
          {\`Move to next (\${variant})\`}
          {moveMenu}
        </SplitButton>)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(Y=M.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var K,J,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="start">
      {sizes.map(size => <HStack key={size} gap="8">
          <SplitButton size={size}>
            {\`Move to next (\${size})\`}
            {moveMenu}
          </SplitButton>
          <SplitButton size={size} variant="primary">
            {\`Move to next (\${size})\`}
            {moveMenu}
          </SplitButton>
          <SplitButton size={size} variant="hollow">
            {\`Move to next (\${size})\`}
            {moveMenu}
          </SplitButton>
        </HStack>)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee,te,ne;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Action Disabled With Reason',
  render: () => <VStack gap="12" alignItems="start">
      {variants.map(variant => <SplitButton key={variant} variant={variant} disabledReason="This is the last location on the route.">
          Move to next
          {moveMenu}
        </SplitButton>)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`The main action is disabled with a reason. The menu still opens, so the
other actions stay available.`,...(ne=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var oe,ae,ie,se,re;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Menu Disabled With Reason',
  render: () => <VStack gap="12" alignItems="start">
      {variants.map(variant => <SplitButton key={variant} variant={variant} menuDisabledReason="You need the Inventory role to choose a location.">
          Move to next: Packing
          {moveMenu}
        </SplitButton>)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:"The menu toggle is disabled with a reason. The main action still works.",...(re=(se=B.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var le,ce,ue,de,pe;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <HStack gap="8">
      {variants.map(variant => <SplitButton key={variant} variant={variant} loading>
          Move to next
          {moveMenu}
        </SplitButton>)}
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:"`loading` shows a spinner on the main action only.",...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var me,ge,he,ye,ve;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Menu Open',
  // Kept off the docs page: the open menu takes focus when the page loads,
  // so a keyboard user would start inside it. It stays in the sidebar as the
  // one story that shows the real menu.
  tags: ['!autodocs'],
  render: () => <Box pb="224">
      <SplitButton variant="primary" menuLabel="More move options">
        Move to next: Packing
        <SplitButtonMenu defaultOpen>
          <MenuItem label="Choose location…" />
          <MenuItem label="Partial move…" />
          <MenuGroup label="Undo" divider>
            <MenuItem label="Move back to Picking" />
          </MenuGroup>
          <SubMenu label="Send to">
            <MenuItem label="Quality hold" />
            <MenuItem label="Rework" />
          </SubMenu>
        </SplitButtonMenu>
      </SplitButton>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole('menu')).toBeVisible();
    await expect(body.getByRole('button', {
      name: 'More move options'
    })).toHaveAttribute('aria-expanded', 'true');
  }
}`,...(he=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:he.source},description:{story:"The menu holds `MenuItem`, `MenuGroup`, and `SubMenu` children. It opens\nbelow the button, aligned to its end. This story opens it with\n`defaultOpen`.",...(ve=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:ve.description}}};var we,be,Be,xe,ke;R.parameters={...R.parameters,docs:{...(we=R.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Ex: Move to Next',
  render: function Render() {
    const [index, setIndex] = useState(2);
    const current = route[index] ?? '';
    const next = route[index + 1];
    return <VStack gap="12" alignItems="start">
        <Text>{\`Job 1042 is at \${current}.\`}</Text>
        <SplitButton variant="primary" menuLabel="More move options" onClick={() => setIndex(i => i + 1)} disabledReason={next ? undefined : 'This is the last location on the route.'}>
          {next ? \`Move to next: \${next}\` : 'Move to next'}
          <SplitButtonMenu>
            <MenuItem label="Choose location…" />
            <MenuItem label="Partial move…" />
            <MenuItem label="Start over at Receiving" disabled={index === 0} onClick={() => setIndex(0)} />
          </SplitButtonMenu>
        </SplitButton>
      </VStack>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(be=R.parameters)==null?void 0:be.docs)==null?void 0:Be.source},description:{story:`Use case: the work view's "Move to next". One click moves the job to the
next location on its route. The menu holds the other ways to move. At the
last location, the main action is disabled with a reason, and the menu
still works.`,...(ke=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ke.description}}};var Re,Se,Me;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Test: keyboard',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  // Behavior test only. It looks the same as Default.
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: args => <SplitButton {...args}>
      Move to next: Packing
      <SplitButtonMenu>
        <MenuItem label="Choose location…" onClick={chooseLocation} />
        <MenuItem label="Partial move…" />
      </SplitButtonMenu>
    </SplitButton>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    chooseLocation.mockClear();
    const action = canvas.getByRole('button', {
      name: 'Move to next: Packing'
    });
    const toggle = canvas.getByRole('button', {
      name: 'More actions'
    });

    // Two tab stops: the action, then the toggle.
    await userEvent.tab();
    await expect(action).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.tab();
    await expect(toggle).toHaveFocus();
    await expect(toggle).toHaveAttribute('aria-haspopup', 'menu');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // Enter opens the menu and focuses the first item.
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(body.getByRole('menuitem', {
      name: 'Choose location…'
    })).toHaveFocus());
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{ArrowDown}');
    await expect(body.getByRole('menuitem', {
      name: 'Partial move…'
    })).toHaveFocus();

    // Escape closes the menu and returns focus to the toggle.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await expect(toggle).toHaveFocus();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // ArrowDown also opens it. Enter on an item runs it and closes the menu.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(body.getByRole('menuitem', {
      name: 'Choose location…'
    })).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await expect(chooseLocation).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await waitFor(() => expect(toggle).toHaveFocus());
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(Me=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};var fe,Ce,Te;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Test: menu opens and closes',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: args => <VStack gap="16" alignItems="start">
      <SplitButton {...args} />
      <Text>Outside the split button</Text>
    </VStack>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const toggle = canvas.getByRole('button', {
      name: 'More actions'
    });
    const caret = toggle.querySelector('svg');
    if (!caret) throw new Error('Missing the caret.');
    await expect(getComputedStyle(caret).transform).toBe('none');

    // A click on the toggle opens the menu without running the action. The
    // caret turns over while the menu is open.
    await userEvent.click(toggle);
    const menu = await body.findByRole('menu');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(args.onClick).not.toHaveBeenCalled();

    // The toggle's tooltip stays closed while the menu is open, even when
    // the pointer comes back onto the toggle, so it does not cover the menu.
    await userEvent.unhover(toggle);
    await userEvent.hover(toggle);
    // Give a tooltip time to open, so its absence means something.
    await new Promise(resolve => setTimeout(resolve, 500));
    await expect(body.queryByRole('tooltip')).toBeNull();
    await waitFor(() => expect(getComputedStyle(caret).transform).toBe('matrix(-1, 0, 0, -1, 0, 0)'));

    // The menu opens below the button, aligned to its end.
    const toggleBox = toggle.getBoundingClientRect();
    const menuBox = menu.getBoundingClientRect();
    await expect(menuBox.top).toBeGreaterThanOrEqual(toggleBox.bottom);
    await expect(Math.round(menuBox.right)).toBe(Math.round(toggleBox.right));

    // A second click closes it, and the caret turns back.
    await userEvent.click(toggle);
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await waitFor(() => expect(getComputedStyle(caret).transform).toBe('none'));

    // A click outside closes it.
    await userEvent.click(toggle);
    await body.findByRole('menu');
    await userEvent.click(canvas.getByText('Outside the split button'));
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());

    // Choosing an item closes it.
    await userEvent.click(toggle);
    await userEvent.click(await body.findByRole('menuitem', {
      name: 'Partial move…'
    }));
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await expect(args.onClick).not.toHaveBeenCalled();

    // End at rest, with no tooltip, for the visual snapshot.
    await userEvent.unhover(toggle);
    toggle.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  }
}`,...(Te=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ee,He,Ae;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Test: action disabled, menu works',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  args: {
    disabledReason: 'This is the last location on the route.'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const action = canvas.getByRole('button', {
      name: 'Move to next: Packing'
    });
    const toggle = canvas.getByRole('button', {
      name: 'More actions'
    });
    await expect(action).toHaveAttribute('aria-disabled', 'true');
    await expect(action).toHaveAccessibleDescription('This is the last location on the route.');
    await expect(toggle).not.toHaveAttribute('aria-disabled', 'true');

    // The divider fades with the disabled action.
    await expect(getComputedStyle(dividerIn(canvasElement)).opacity).toBe(getComputedStyle(action).opacity);
    await expect(getComputedStyle(action).opacity).not.toBe('1');

    // The action stays in the tab order but does nothing.
    await userEvent.tab();
    await expect(action).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.click(action);
    await expect(args.onClick).not.toHaveBeenCalled();

    // The menu still opens from the keyboard and the pointer.
    await userEvent.tab();
    await expect(toggle).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await body.findByRole('menu');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await userEvent.click(toggle);
    await body.findByRole('menu');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());

    // End at rest, with no tooltip, for the visual snapshot.
    await userEvent.unhover(toggle);
    toggle.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  }
}`,...(Ae=(He=E.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var je,Ie,De;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Test: menu disabled, action works',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  args: {
    menuDisabledReason: 'You need the Inventory role to choose a location.'
  },
  // Room above for the tooltip, so it does not flip below.
  render: args => <Box pt="64">
      <SplitButton {...args} />
    </Box>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const action = canvas.getByRole('button', {
      name: 'Move to next: Packing'
    });
    const toggle = canvas.getByRole('button', {
      name: 'More actions'
    });
    await expect(toggle).toHaveAttribute('aria-disabled', 'true');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toHaveAccessibleDescription('You need the Inventory role to choose a location.');
    await expect(action).not.toHaveAttribute('aria-disabled', 'true');

    // The divider fades with the disabled toggle.
    await expect(getComputedStyle(dividerIn(canvasElement)).opacity).toBe(getComputedStyle(toggle).opacity);
    await expect(getComputedStyle(toggle).opacity).not.toBe('1');

    // The action works.
    await userEvent.click(action);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // The toggle stays in the tab order, but no key or click opens the menu.
    action.focus();
    await userEvent.tab();
    await expect(toggle).toHaveFocus();
    for (const key of ['{Enter}', ' ', '{ArrowDown}', '{ArrowUp}']) {
      await userEvent.keyboard(key);
    }
    await userEvent.click(toggle);
    await expect(body.queryByRole('menu')).toBeNull();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // The reason shows in the toggle's tooltip, above the toggle, on the
    // same side as the action's reason.
    const tooltip = await body.findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('You need the Inventory role to choose a location.');
    await waitFor(() => expect(tooltip.getBoundingClientRect().bottom).toBeLessThanOrEqual(toggle.getBoundingClientRect().top));

    // End at rest, with no tooltip, for the visual snapshot.
    await userEvent.unhover(toggle);
    toggle.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  }
}`,...(De=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Le,Fe,Pe;j.parameters={...j.parameters,docs:{...(Le=j.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Test: a disabled reason closes a controlled menu',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  // Behavior test only. It ends closed and looks like "Test: menu disabled,
  // action works".
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    const [locked, setLocked] = useState(false);
    return <VStack gap="16" alignItems="start">
        <SplitButton {...args} menuDisabledReason={locked ? 'Another user is moving this job.' : undefined}>
          Move to next: Packing
          <SplitButtonMenu open={open} onOpenChange={(nextOpen: boolean) => {
          controlledOpenChange(nextOpen);
          setOpen(nextOpen);
        }}>
            <MenuItem label="Choose location…" />
          </SplitButtonMenu>
        </SplitButton>
        <Button onClick={() => setLocked(value => !value)}>
          Toggle lock
        </Button>
      </VStack>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const toggle = canvas.getByRole('button', {
      name: 'More actions'
    });
    const lock = canvas.getByRole('button', {
      name: 'Toggle lock'
    });
    controlledOpenChange.mockClear();
    await userEvent.click(toggle);
    await body.findByRole('menu');
    await expect(controlledOpenChange).toHaveBeenLastCalledWith(true);

    // A reason arrives while the menu is open. A DOM click does not send the
    // pointerdown that would close the menu as an outside press, so only
    // the reason closes it.
    lock.click();
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await expect(controlledOpenChange).toHaveBeenLastCalledWith(false);

    // The owner closed it, so it stays closed when the reason clears.
    lock.click();
    await waitFor(() => expect(toggle).not.toHaveAttribute('aria-disabled', 'true'));
    await expect(body.queryByRole('menu')).toBeNull();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  }
}`,...(Pe=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var qe,Oe,Ne;I.parameters={...I.parameters,docs:{...(qe=I.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Test: loading is on the action only',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  args: {
    loading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const action = canvas.getByRole('button', {
      name: 'Move to next: Packing'
    });
    const toggle = canvas.getByRole('button', {
      name: 'More actions'
    });
    await expect(action).toHaveAttribute('aria-busy', 'true');
    await expect(toggle).not.toHaveAttribute('aria-busy');

    // The divider fades with the loading action, as Button does.
    await expect(getComputedStyle(dividerIn(canvasElement)).opacity).toBe(getComputedStyle(action).opacity);
    await expect(getComputedStyle(action).opacity).not.toBe('1');
  }
}`,...(Ne=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var Ve,$e,ze;D.parameters={...D.parameters,docs:{...(Ve=D.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Test: menuLabel names the toggle',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  // Behavior test only. It looks the same as Default.
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    menuLabel: 'More move options'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'More move options'
    })).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'More actions'
    })).toBeNull();
  }
}`,...(ze=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var We,Ue,_e;L.parameters={...L.parameters,docs:{...(We=L.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Test: halves share one shape',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <VStack gap="12" alignItems="start">
      {sizes.flatMap(size => (['standard', 'hollow'] as const).map(variant => <SplitButton key={\`\${size}-\${variant}\`} size={size} variant={variant} data-testid={\`\${size}-\${variant}\`}>
            Move to next
            {moveMenu}
          </SplitButton>))}
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
    for (const size of sizes) {
      for (const variant of ['standard', 'hollow']) {
        const root = canvas.getByTestId(\`\${size}-\${variant}\`);
        const [action, toggle] = within(root).getAllByRole('button');
        if (!action || !toggle) throw new Error('Missing a half.');
        const actionStyle = getComputedStyle(action);
        const toggleStyle = getComputedStyle(toggle);

        // Inner corners are square and inner borders are dropped. The outer
        // corners keep the button radius.
        await expect(actionStyle.borderTopRightRadius).toBe('0px');
        await expect(actionStyle.borderBottomRightRadius).toBe('0px');
        await expect(actionStyle.borderRightWidth).toBe('0px');
        await expect(actionStyle.borderTopLeftRadius).not.toBe('0px');
        await expect(toggleStyle.borderTopLeftRadius).toBe('0px');
        await expect(toggleStyle.borderBottomLeftRadius).toBe('0px');
        await expect(toggleStyle.borderLeftWidth).toBe('0px');
        await expect(toggleStyle.borderTopRightRadius).not.toBe('0px');

        // With both halves available, the divider is at full strength.
        await expect(getComputedStyle(dividerIn(root)).opacity).toBe('1');

        // Both halves are the same height.
        await expect(toggle.getBoundingClientRect().height).toBe(action.getBoundingClientRect().height);
      }
    }
  }
}`,...(_e=(Ue=L.parameters)==null?void 0:Ue.docs)==null?void 0:_e.source}}};export{b as ActionDisabled,E as ActionDisabledBehavior,j as ControlledMenuDisabledBehavior,S as Default,R as ExMoveToNext,L as JoinedShape,C as KeyboardBehavior,x as Loading,I as LoadingBehavior,B as MenuDisabled,H as MenuDisabledBehavior,D as MenuLabelBehavior,k as MenuOpen,T as OpenAndClose,f as Sizes,M as Variants,vt as __namedExportsOrder,yt as default};
