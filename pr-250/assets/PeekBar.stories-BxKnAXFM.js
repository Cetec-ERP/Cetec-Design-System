import{m as ze,e as Ue,f as Ye,g as $e,h as Xe,r as h,Z as Ze,s as Ge,j as n,B as w,c as Je,d as Qe,a as en,V as Ie,T as _e}from"./iframe-B2I9n4DR.js";import{B as y}from"./Button-vPcDTUX5.js";import{d as nn,D as b,b as B}from"./DrawerHeader-BEDRPUN9.js";import{H as an}from"./Heading-CRzBG-CH.js";import{T as tn}from"./TextInput-CLPwUwcE.js";import{I as q}from"./IconButton-B_XBMZuC.js";import{u as on}from"./useLocale-CXEWsqc-.js";import"./preload-helper-DJUwLRF1.js";import"./Spinner-CIREaMqW.js";import"./FieldContext-C99g47s0.js";import"./FloatingLayerContext-Bbqzmb5t.js";import"./mq.hook-B_Ccw-4m.js";import"./breakpoints-DU_5_Zhy.js";const Ae={},rn=[],sn=[["root","peekBar__root"],["position","peekBar__position"],["controls","peekBar__controls"]],cn=sn.map(([e,o])=>[e,$e(o,Ae,Xe(rn,e))]),ln=ze((e={})=>Object.fromEntries(cn.map(([o,a])=>[o,a.recipeFn(e)]))),U=[],dn=e=>({...Ae,...Ue(e)}),un=Object.assign(ln,{__recipe__:!1,__name__:"peekBar",raw:e=>e,classNameMap:{},variantKeys:U,variantMap:{},splitVariantProps(e){return Ye(e,U)},getVariantProps:dn}),Y=",",$=".",pn=e=>e instanceof HTMLElement&&(e.isContentEditable||!!e.closest("input, textarea, select")),d=e=>{const{noun:o,index:a,total:r,onPrevious:i,onNext:c,openHref:m,onOpen:W,onClose:Fe,shortcuts:v=!0,ref:qe,...Ke}=e,V=h.useRef(null),Le=Ze([V,qe]),{labels:x}=on(),u=h.useContext(nn),M=Fe??(u==null?void 0:u.onClose),I=un(),[We,Ve]=Ge(Ke),Me=!!(m||W),_=!!i&&a>1,A=!!c&&a<r,f=u==null?void 0:u.panelRef,C=u==null?void 0:u.registerHeaderCloseButton;return h.useLayoutEffect(()=>C==null?void 0:C(),[C]),h.useEffect(()=>{if(!v)return;const z=l=>{const F=(f==null?void 0:f.current)??V.current;!(l.target instanceof Node)||!(F!=null&&F.contains(l.target))||l.metaKey||l.ctrlKey||l.altKey||l.defaultPrevented||pn(l.target)||(l.key===Y&&_?(l.preventDefault(),i==null||i()):l.key===$&&A&&(l.preventDefault(),c==null||c()))};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[v,f,_,A,i,c]),n.jsxs(w,{...Qe("PeekBar"),ref:Le,className:Je(I.root,We),...Ve,children:[n.jsx(w,{as:"span",className:I.position,"aria-live":"polite",children:x.peekPosition({noun:o,index:a,total:r})}),n.jsxs(w,{className:I.controls,children:[n.jsx(q,{variant:"ghost",size:"sm",iconName:"arrow-left",altText:x.previousItem(o),disabled:!_,onClick:i,"aria-keyshortcuts":v?Y:void 0}),n.jsx(q,{variant:"ghost",size:"sm",iconName:"arrow-right",altText:x.nextItem(o),disabled:!A,onClick:c,"aria-keyshortcuts":v?$:void 0}),Me&&n.jsx(y,{size:"sm",after:n.jsx(en,{name:"arrow-square-out","aria-hidden":!0}),...m?{href:m}:{onClick:W},children:x.openFullPage}),M&&n.jsx(q,{variant:"ghost",size:"sm",iconName:"x",altText:x.closeDrawer,onClick:M})]})]})};d.__docgenInfo={description:'Drawer chrome for a record opened from a list: position, previous and next,\nopen full page, and close.\n\nPlace it at the top of a `Drawer`, above the record\'s page header. The\nposition text ("Case 3 of 40") is announced when it changes. "," and "."\nopen the previous and next records while focus is in the bar or its drawer.\nAll text comes\nfrom `LocaleProvider` (`peekPosition`, `previousItem`, `nextItem`,\n`openFullPage`, and `closeDrawer`).\n\n@example\n```tsx\n<PeekBar noun="Case" index={3} total={40} onPrevious={prev} onNext={next} openHref="/case/3" />\n```',methods:[],displayName:"PeekBar",props:{noun:{required:!0,tsType:{name:"string"},description:'What the list holds, singular, such as "Case" or "Order". Used in the position text and button names.'},index:{required:!0,tsType:{name:"number"},description:"Position of the open record in the list, starting at 1."},total:{required:!0,tsType:{name:"number"},description:"Number of records in the list."},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the previous record. The button is disabled on the first record or when this is not set."},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the next record. The button is disabled on the last record or when this is not set."},openHref:{required:!1,tsType:{name:"string"},description:`Link to the record's full page. Shows the "Open" button.`},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Opens the record\'s full page. Shows the "Open" button. Ignored when `openHref` is set.'},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Closes the peek. Inside a `Drawer`, it defaults to the drawer's close.\nThe close button is hidden when there is no close action."},shortcuts:{required:!1,tsType:{name:"boolean"},description:`Turns on the keyboard shortcuts: "," opens the previous record and "."
opens the next. They work while focus is in the bar, or anywhere in its
\`Drawer\`, except while a text field has focus or a modifier key is held.

@default true`}}};const{expect:t,fireEvent:X,fn:K,userEvent:s,waitFor:L,within:p}=__STORYBOOK_MODULE_TEST__,En={title:"Components/PeekBar",component:d,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`Drawer chrome for a record opened from a list.

- Position text, such as "Case 3 of 40", announced when it changes
- Previous and next, disabled at the ends of the list
- "Open" to go to the full page, shown when \`openHref\` or \`onOpen\` is set
- Close, which defaults to the parent \`Drawer\`'s close
- Keyboard: "," opens the previous record and "." the next, while focus is
  in the bar or its drawer`}}},args:{noun:"Case",index:3,total:40,onPrevious:K(),onNext:K(),openHref:"#case-3",onClose:K()},decorators:[e=>n.jsx(w,{w:"md",borderWidth:"1",borderColor:"border",borderRadius:"8",children:n.jsx(e,{})})]},k={},O={name:"First and Last Record",render:e=>n.jsxs(Ie,{gap:"0",alignItems:"stretch",children:[n.jsx(d,{...e,index:1,total:40}),n.jsx(d,{...e,index:40,total:40})]}),parameters:{controls:{disable:!0}}},E={name:"Without Open",args:{openHref:void 0}},Z=[{id:"C-1041",title:"Label printer drops the last line"},{id:"C-1042",title:"Freight quote missing on the packing slip"},{id:"C-1043",title:"Lot numbers out of order on the receiving screen"}],g={name:"Ex: Case Drawer",decorators:[e=>n.jsx(e,{})],render:function(){const[o,a]=h.useState(!1),[r,i]=h.useState(1),c=Z[r-1]??{id:"",title:""};return n.jsxs(n.Fragment,{children:[n.jsx(y,{onClick:()=>a(!0),children:"Open case drawer"}),n.jsxs(b,{open:o,onOpenChange:a,modal:!1,"aria-label":c.id,children:[n.jsx(d,{noun:"Case",index:r,total:Z.length,onPrevious:()=>i(m=>m-1),onNext:()=>i(m=>m+1),openHref:`#${c.id}`}),n.jsxs(B,{children:[n.jsx(an,{level:"h2",textStyle:"heading.md",children:c.id}),n.jsx(_e,{children:c.title})]})]})]})},parameters:{controls:{disable:!0}}},D={name:"Test: buttons and names",args:{index:1,total:2},play:async({args:e,canvasElement:o})=>{const a=p(o);await t(a.getByText("Case 1 of 2")).toBeInTheDocument(),await t(a.getByRole("button",{name:"Previous case"})).toBeDisabled();const r=a.getByRole("button",{name:"Next case"});await t(r).toBeEnabled(),await s.click(r),await t(e.onNext).toHaveBeenCalledOnce(),await t(a.getByRole("link",{name:"Open"})).toHaveAttribute("href","#case-3"),await s.click(a.getByRole("button",{name:"Close drawer"})),await t(e.onClose).toHaveBeenCalledOnce()}},T={name:"Test: comma and period shortcuts",args:{index:2,total:3},render:e=>n.jsxs(Ie,{gap:"8",alignItems:"stretch",children:[n.jsx(d,{...e}),n.jsx(w,{px:"16",pb:"8",children:n.jsx(tn,{name:"notes","aria-label":"Notes"})}),n.jsx(w,{px:"16",pb:"8",children:n.jsx(y,{variant:"standard",children:"Outside"})})]}),play:async({args:e,canvasElement:o})=>{const a=p(o);await t(a.getByRole("button",{name:"Previous case"})).toHaveAttribute("aria-keyshortcuts",","),await t(a.getByRole("button",{name:"Next case"})).toHaveAttribute("aria-keyshortcuts","."),a.getByRole("button",{name:"Outside"}).focus(),await s.keyboard(",."),await t(e.onPrevious).not.toHaveBeenCalled(),await t(e.onNext).not.toHaveBeenCalled(),a.getByRole("button",{name:"Close drawer"}).focus(),await s.keyboard(","),await t(e.onPrevious).toHaveBeenCalledOnce(),await s.keyboard("."),await t(e.onNext).toHaveBeenCalledOnce(),await s.click(a.getByRole("textbox",{name:"Notes"})),await s.keyboard(",."),await t(e.onPrevious).toHaveBeenCalledOnce(),await t(e.onNext).toHaveBeenCalledOnce()}},R={name:"Test: shortcuts stop at the ends",args:{index:1,total:1},play:async({args:e,canvasElement:o})=>{p(o).getByRole("button",{name:"Close drawer"}).focus(),await s.keyboard(",."),await t(e.onPrevious).not.toHaveBeenCalled(),await t(e.onNext).not.toHaveBeenCalled()}},H={name:"Test: shortcuts work anywhere in the drawer",tags:["!snapshot"],args:{onClose:void 0},render:e=>n.jsxs(b,{open:!0,onOpenChange:()=>{},modal:!1,"aria-label":"Case 3",children:[n.jsx(d,{...e}),n.jsx(B,{children:n.jsx(y,{variant:"standard",children:"Assign"})})]}),play:async({args:e})=>{(await p(document.body).findByRole("button",{name:"Assign"})).focus(),await s.keyboard("."),await t(e.onNext).toHaveBeenCalledOnce()}},S={name:"Test: shortcuts work in a drawer with its own role",tags:["!snapshot"],args:{onClose:void 0},render:e=>n.jsxs(b,{open:!0,onOpenChange:()=>{},modal:!1,role:"alertdialog","aria-label":"Case 3",children:[n.jsx(d,{...e}),n.jsx(B,{children:n.jsx(y,{variant:"standard",children:"Assign"})})]}),play:async({args:e})=>{const o=p(document.body);await t(await o.findByRole("alertdialog",{name:"Case 3"})).toBeInTheDocument(),(await o.findByRole("button",{name:"Assign"})).focus(),await s.keyboard("."),await t(e.onNext).toHaveBeenCalledOnce()}},N={name:"Test: punctuation in a plain-text editor",tags:["!snapshot"],args:{onClose:void 0},render:e=>n.jsxs(b,{open:!0,onOpenChange:()=>{},modal:!1,"aria-label":"Case 3",children:[n.jsx(d,{...e}),n.jsx(B,{children:n.jsx(w,{contentEditable:"plaintext-only",suppressContentEditableWarning:!0,role:"textbox","aria-label":"Reply","aria-multiline":!0,minH:"16",borderWidth:"1",borderColor:"border"})})]}),play:async({args:e})=>{const a=await p(document.body).findByRole("textbox",{name:"Reply"});a.focus(),await t(X.keyDown(a,{key:","})).toBe(!0),await t(X.keyDown(a,{key:"."})).toBe(!0),await t(e.onPrevious).not.toHaveBeenCalled(),await t(e.onNext).not.toHaveBeenCalled()}},j={name:"A11y Modal Drawer Keyboard",tags:["!snapshot"],decorators:[e=>n.jsx(e,{})],render:function(o){const[a,r]=h.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(y,{onClick:()=>r(!0),children:"Open case drawer"}),n.jsxs(b,{open:a,onOpenChange:r,"aria-label":"Case 3",children:[n.jsx(d,{...o,onClose:void 0}),n.jsx(B,{children:n.jsx(_e,{children:"Label printer drops the last line"})})]})]})},play:async({canvasElement:e})=>{const o=p(e),a=p(e.ownerDocument.body),r=o.getByRole("button",{name:"Open case drawer"});r.focus(),await s.keyboard("{Enter}");const i=await a.findByRole("dialog",{name:"Case 3"});await L(()=>t(i).toHaveFocus()),await t(a.queryByRole("tooltip")).toBeNull(),await s.keyboard("{Escape}"),await L(()=>t(a.queryByRole("dialog",{name:"Case 3"})).toBeNull()),await L(()=>t(r).toHaveFocus())}},P={name:"Test: no close button without a close action",args:{onClose:void 0,openHref:void 0},play:async({canvasElement:e})=>{const o=p(e);await t(o.queryByRole("button",{name:"Close drawer"})).toBeNull(),await t(o.queryByRole("link",{name:"Open"})).toBeNull()}},Dn=["Default","Ends","WithoutOpen","ExCaseDrawer","ButtonStates","KeyboardShortcuts","ShortcutsStopAtEnds","ShortcutsInDrawer","ShortcutsInDrawerWithRole","ShortcutsSkipPlainTextEditor","A11yModalDrawerKeyboard","NoCloseWithoutAction"];var G,J,Q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ne,ae;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'First and Last Record',
  render: args => <VStack gap="0" alignItems="stretch">
      <PeekBar {...args} index={1} total={40} />
      <PeekBar {...args} index={40} total={40} />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,oe,re;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Without Open',
  args: {
    openHref: undefined
  }
}`,...(re=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,ce,le,de;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Ex: Case Drawer',
  decorators: [Story => <Story />],
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(1);
    const current = cases[index - 1] ?? {
      id: '',
      title: ''
    };
    return <>
        <Button onClick={() => setOpen(true)}>Open case drawer</Button>
        <Drawer open={open} onOpenChange={setOpen} modal={false} aria-label={current.id}>
          <PeekBar noun="Case" index={index} total={cases.length} onPrevious={() => setIndex(i => i - 1)} onNext={() => setIndex(i => i + 1)} openHref={\`#\${current.id}\`} />
          <DrawerBody>
            <Heading level="h2" textStyle="heading.md">
              {current.id}
            </Heading>
            <Text>{current.title}</Text>
          </DrawerBody>
        </Drawer>
      </>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:`Use case: a case opened from a list in a non-modal drawer. The bar sits
above the record header. Close uses the drawer's own close.`,...(de=(le=g.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var ue,pe,me;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Test: buttons and names',
  args: {
    index: 1,
    total: 2
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Case 1 of 2')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Previous case'
    })).toBeDisabled();
    const next = canvas.getByRole('button', {
      name: 'Next case'
    });
    await expect(next).toBeEnabled();
    await userEvent.click(next);
    await expect(args.onNext).toHaveBeenCalledOnce();
    await expect(canvas.getByRole('link', {
      name: 'Open'
    })).toHaveAttribute('href', '#case-3');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Close drawer'
    }));
    await expect(args.onClose).toHaveBeenCalledOnce();
  }
}`,...(me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,we,ye;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Test: comma and period shortcuts',
  args: {
    index: 2,
    total: 3
  },
  render: args => <VStack gap="8" alignItems="stretch">
      <PeekBar {...args} />
      <Box px="16" pb="8">
        <TextInput name="notes" aria-label="Notes" />
      </Box>
      <Box px="16" pb="8">
        <Button variant="standard">Outside</Button>
      </Box>
    </VStack>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Previous case'
    })).toHaveAttribute('aria-keyshortcuts', ',');
    await expect(canvas.getByRole('button', {
      name: 'Next case'
    })).toHaveAttribute('aria-keyshortcuts', '.');

    // Focus outside the bar: the keys do nothing.
    canvas.getByRole('button', {
      name: 'Outside'
    }).focus();
    await userEvent.keyboard(',.');
    await expect(args.onPrevious).not.toHaveBeenCalled();
    await expect(args.onNext).not.toHaveBeenCalled();

    // Focus in the bar: "," is previous and "." is next.
    canvas.getByRole('button', {
      name: 'Close drawer'
    }).focus();
    await userEvent.keyboard(',');
    await expect(args.onPrevious).toHaveBeenCalledOnce();
    await userEvent.keyboard('.');
    await expect(args.onNext).toHaveBeenCalledOnce();

    // Typing in a field does not move between records.
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Notes'
    }));
    await userEvent.keyboard(',.');
    await expect(args.onPrevious).toHaveBeenCalledOnce();
    await expect(args.onNext).toHaveBeenCalledOnce();
  }
}`,...(ye=(we=T.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var xe,ge,be;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Test: shortcuts stop at the ends',
  args: {
    index: 1,
    total: 1
  },
  play: async ({
    args,
    canvasElement
  }) => {
    within(canvasElement).getByRole('button', {
      name: 'Close drawer'
    }).focus();
    await userEvent.keyboard(',.');
    await expect(args.onPrevious).not.toHaveBeenCalled();
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...(be=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Be,ve,fe;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Test: shortcuts work anywhere in the drawer',
  // Behavior test only. The open drawer adds nothing to look at.
  tags: ['!snapshot'],
  args: {
    onClose: undefined
  },
  render: args => <Drawer open onOpenChange={() => {}} modal={false} aria-label="Case 3">
      <PeekBar {...args} />
      <DrawerBody>
        <Button variant="standard">Assign</Button>
      </DrawerBody>
    </Drawer>,
  play: async ({
    args
  }) => {
    const page = within(document.body);
    (await page.findByRole('button', {
      name: 'Assign'
    })).focus();
    await userEvent.keyboard('.');
    await expect(args.onNext).toHaveBeenCalledOnce();
  }
}`,...(fe=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Ce,ke,Oe;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Test: shortcuts work in a drawer with its own role',
  // Behavior test only. The open drawer adds nothing to look at.
  tags: ['!snapshot'],
  args: {
    onClose: undefined
  },
  render: args => <Drawer open onOpenChange={() => {}} modal={false} role="alertdialog" aria-label="Case 3">
      <PeekBar {...args} />
      <DrawerBody>
        <Button variant="standard">Assign</Button>
      </DrawerBody>
    </Drawer>,
  play: async ({
    args
  }) => {
    const page = within(document.body);
    await expect(await page.findByRole('alertdialog', {
      name: 'Case 3'
    })).toBeInTheDocument();
    (await page.findByRole('button', {
      name: 'Assign'
    })).focus();
    await userEvent.keyboard('.');
    await expect(args.onNext).toHaveBeenCalledOnce();
  }
}`,...(Oe=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var Ee,De,Te;N.parameters={...N.parameters,docs:{...(Ee=N.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Test: punctuation in a plain-text editor',
  // Behavior test only. The open drawer adds nothing to look at.
  tags: ['!snapshot'],
  args: {
    onClose: undefined
  },
  render: args => <Drawer open onOpenChange={() => {}} modal={false} aria-label="Case 3">
      <PeekBar {...args} />
      <DrawerBody>
        <Box contentEditable="plaintext-only" suppressContentEditableWarning role="textbox" aria-label="Reply" aria-multiline minH="16" borderWidth="1" borderColor="border" />
      </DrawerBody>
    </Drawer>,
  play: async ({
    args
  }) => {
    const page = within(document.body);
    const editor = await page.findByRole('textbox', {
      name: 'Reply'
    });
    editor.focus();

    // fireEvent returns false when a handler cancels the key, which would
    // stop the browser from inserting the character.
    await expect(fireEvent.keyDown(editor, {
      key: ','
    })).toBe(true);
    await expect(fireEvent.keyDown(editor, {
      key: '.'
    })).toBe(true);
    await expect(args.onPrevious).not.toHaveBeenCalled();
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...(Te=(De=N.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Re,He,Se;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'A11y Modal Drawer Keyboard',
  // Behavior test only. The drawer is closed when the snapshot is taken.
  tags: ['!snapshot'],
  decorators: [Story => <Story />],
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open case drawer</Button>
        <Drawer open={open} onOpenChange={setOpen} aria-label="Case 3">
          <PeekBar {...args} onClose={undefined} />
          <DrawerBody>
            <Text>Label printer drops the last line</Text>
          </DrawerBody>
        </Drawer>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Open case drawer'
    });

    // Open by keyboard. The panel takes focus, not a bar button, so no
    // tooltip opens and one Escape closes the drawer.
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    const drawer = await body.findByRole('dialog', {
      name: 'Case 3'
    });
    await waitFor(() => expect(drawer).toHaveFocus());
    await expect(body.queryByRole('tooltip')).toBeNull();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Case 3'
    })).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...(Se=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Se.source}}};var Ne,je,Pe;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Test: no close button without a close action',
  args: {
    onClose: undefined,
    openHref: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button', {
      name: 'Close drawer'
    })).toBeNull();
    await expect(canvas.queryByRole('link', {
      name: 'Open'
    })).toBeNull();
  }
}`,...(Pe=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};export{j as A11yModalDrawerKeyboard,D as ButtonStates,k as Default,O as Ends,g as ExCaseDrawer,T as KeyboardShortcuts,P as NoCloseWithoutAction,H as ShortcutsInDrawer,S as ShortcutsInDrawerWithRole,N as ShortcutsSkipPlainTextEditor,R as ShortcutsStopAtEnds,E as WithoutOpen,Dn as __namedExportsOrder,En as default};
