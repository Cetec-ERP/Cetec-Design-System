import{m as Ve,e as We,f as Me,g as ze,h as Ue,r as h,Z as Ye,s as $e,j as n,B as w,c as Xe,d as Ze,a as Ge,V as Se,T as Ne}from"./iframe-CmlIct-q.js";import{B as g}from"./Button-AJ3tutG8.js";import{d as Je,D as S,b as N}from"./DrawerHeader-BJtwTAEy.js";import{H as Qe}from"./Heading-CrwEYlgk.js";import{T as en}from"./TextInput-BG4OAO41.js";import{I as q}from"./IconButton-CV978Sn2.js";import{u as nn}from"./useLocale-Bwc7ViXL.js";import"./preload-helper-DJUwLRF1.js";import"./Spinner-D-rsIaIC.js";import"./FieldContext-Cljv5QpW.js";import"./FloatingLayerContext-DUBF6c0c.js";import"./mq.hook-CKEduIN4.js";import"./breakpoints-DU_5_Zhy.js";const je={},tn=[],an=[["root","peekBar__root"],["position","peekBar__position"],["controls","peekBar__controls"]],on=an.map(([e,o])=>[e,ze(o,je,Ue(tn,e))]),rn=Ve((e={})=>Object.fromEntries(on.map(([o,t])=>[o,t.recipeFn(e)]))),U=[],sn=e=>({...je,...We(e)}),cn=Object.assign(rn,{__recipe__:!1,__name__:"peekBar",raw:e=>e,classNameMap:{},variantKeys:U,variantMap:{},splitVariantProps(e){return Me(e,U)},getVariantProps:sn}),Y=",",$=".",ln=e=>e instanceof HTMLElement&&(e.isContentEditable||!!e.closest("input, textarea, select")),d=e=>{const{noun:o,index:t,total:r,onPrevious:s,onNext:i,openHref:p,onOpen:L,onClose:_e,shortcuts:b=!0,ref:Ie,...Fe}=e,V=h.useRef(null),qe=Ye([V,Ie]),{labels:x}=nn(),m=h.useContext(Je),W=_e??(m==null?void 0:m.onClose),j=cn(),[Ae,Ke]=$e(Fe),Le=!!(p||L),_=!!s&&t>1,I=!!i&&t<r,M=!!m,v=m==null?void 0:m.registerHeaderCloseButton;return h.useLayoutEffect(()=>v==null?void 0:v(),[v]),h.useEffect(()=>{if(!b)return;const z=c=>{const B=V.current,F=M&&(B==null?void 0:B.closest('[role="dialog"]'))||B;!(c.target instanceof Node)||!(F!=null&&F.contains(c.target))||c.metaKey||c.ctrlKey||c.altKey||c.defaultPrevented||ln(c.target)||(c.key===Y&&_?(c.preventDefault(),s==null||s()):c.key===$&&I&&(c.preventDefault(),i==null||i()))};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[b,M,_,I,s,i]),n.jsxs(w,{...Ze("PeekBar"),ref:qe,className:Xe(j.root,Ae),...Ke,children:[n.jsx(w,{as:"span",className:j.position,"aria-live":"polite",children:x.peekPosition({noun:o,index:t,total:r})}),n.jsxs(w,{className:j.controls,children:[n.jsx(q,{variant:"ghost",size:"sm",iconName:"arrow-left",altText:x.previousItem(o),disabled:!_,onClick:s,"aria-keyshortcuts":b?Y:void 0}),n.jsx(q,{variant:"ghost",size:"sm",iconName:"arrow-right",altText:x.nextItem(o),disabled:!I,onClick:i,"aria-keyshortcuts":b?$:void 0}),Le&&n.jsx(g,{size:"sm",after:n.jsx(Ge,{name:"arrow-square-out","aria-hidden":!0}),...p?{href:p}:{onClick:L},children:x.openFullPage}),W&&n.jsx(q,{variant:"ghost",size:"sm",iconName:"x",altText:x.closeDrawer,onClick:W})]})]})};d.__docgenInfo={description:'Drawer chrome for a record opened from a list: position, previous and next,\nopen full page, and close.\n\nPlace it at the top of a `Drawer`, above the record\'s page header. The\nposition text ("Case 3 of 40") is announced when it changes. "," and "."\nopen the previous and next records while focus is in the bar or its drawer.\nAll text comes\nfrom `LocaleProvider` (`peekPosition`, `previousItem`, `nextItem`,\n`openFullPage`, and `closeDrawer`).\n\n@example\n```tsx\n<PeekBar noun="Case" index={3} total={40} onPrevious={prev} onNext={next} openHref="/case/3" />\n```',methods:[],displayName:"PeekBar",props:{noun:{required:!0,tsType:{name:"string"},description:'What the list holds, singular, such as "Case" or "Order". Used in the position text and button names.'},index:{required:!0,tsType:{name:"number"},description:"Position of the open record in the list, starting at 1."},total:{required:!0,tsType:{name:"number"},description:"Number of records in the list."},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the previous record. The button is disabled on the first record or when this is not set."},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the next record. The button is disabled on the last record or when this is not set."},openHref:{required:!1,tsType:{name:"string"},description:`Link to the record's full page. Shows the "Open" button.`},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Opens the record\'s full page. Shows the "Open" button. Ignored when `openHref` is set.'},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Closes the peek. Inside a `Drawer`, it defaults to the drawer's close.\nThe close button is hidden when there is no close action."},shortcuts:{required:!1,tsType:{name:"boolean"},description:`Turns on the keyboard shortcuts: "," opens the previous record and "."
opens the next. They work while focus is in the bar, or anywhere in its
\`Drawer\`, except while a text field has focus or a modifier key is held.

@default true`}}};const{expect:a,fireEvent:X,fn:A,userEvent:l,waitFor:K,within:u}=__STORYBOOK_MODULE_TEST__,Cn={title:"Components/PeekBar",component:d,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`Drawer chrome for a record opened from a list.

- Position text, such as "Case 3 of 40", announced when it changes
- Previous and next, disabled at the ends of the list
- "Open" to go to the full page, shown when \`openHref\` or \`onOpen\` is set
- Close, which defaults to the parent \`Drawer\`'s close
- Keyboard: "," opens the previous record and "." the next, while focus is
  in the bar or its drawer`}}},args:{noun:"Case",index:3,total:40,onPrevious:A(),onNext:A(),openHref:"#case-3",onClose:A()},decorators:[e=>n.jsx(w,{w:"md",borderWidth:"1",borderColor:"border",borderRadius:"8",children:n.jsx(e,{})})]},f={},C={name:"First and Last Record",render:e=>n.jsxs(Se,{gap:"0",alignItems:"stretch",children:[n.jsx(d,{...e,index:1,total:40}),n.jsx(d,{...e,index:40,total:40})]}),parameters:{controls:{disable:!0}}},k={name:"Without Open",args:{openHref:void 0}},Z=[{id:"C-1041",title:"Label printer drops the last line"},{id:"C-1042",title:"Freight quote missing on the packing slip"},{id:"C-1043",title:"Lot numbers out of order on the receiving screen"}],y={name:"Ex: Case Drawer",decorators:[e=>n.jsx(e,{})],render:function(){const[o,t]=h.useState(!1),[r,s]=h.useState(1),i=Z[r-1]??{id:"",title:""};return n.jsxs(n.Fragment,{children:[n.jsx(g,{onClick:()=>t(!0),children:"Open case drawer"}),n.jsxs(S,{open:o,onOpenChange:t,modal:!1,"aria-label":i.id,children:[n.jsx(d,{noun:"Case",index:r,total:Z.length,onPrevious:()=>s(p=>p-1),onNext:()=>s(p=>p+1),openHref:`#${i.id}`}),n.jsxs(N,{children:[n.jsx(Qe,{level:"h2",textStyle:"heading.md",children:i.id}),n.jsx(Ne,{children:i.title})]})]})]})},parameters:{controls:{disable:!0}}},O={name:"Test: buttons and names",args:{index:1,total:2},play:async({args:e,canvasElement:o})=>{const t=u(o);await a(t.getByText("Case 1 of 2")).toBeInTheDocument(),await a(t.getByRole("button",{name:"Previous case"})).toBeDisabled();const r=t.getByRole("button",{name:"Next case"});await a(r).toBeEnabled(),await l.click(r),await a(e.onNext).toHaveBeenCalledOnce(),await a(t.getByRole("link",{name:"Open"})).toHaveAttribute("href","#case-3"),await l.click(t.getByRole("button",{name:"Close drawer"})),await a(e.onClose).toHaveBeenCalledOnce()}},E={name:"Test: comma and period shortcuts",args:{index:2,total:3},render:e=>n.jsxs(Se,{gap:"8",alignItems:"stretch",children:[n.jsx(d,{...e}),n.jsx(w,{px:"16",pb:"8",children:n.jsx(en,{name:"notes","aria-label":"Notes"})}),n.jsx(w,{px:"16",pb:"8",children:n.jsx(g,{variant:"standard",children:"Outside"})})]}),play:async({args:e,canvasElement:o})=>{const t=u(o);await a(t.getByRole("button",{name:"Previous case"})).toHaveAttribute("aria-keyshortcuts",","),await a(t.getByRole("button",{name:"Next case"})).toHaveAttribute("aria-keyshortcuts","."),t.getByRole("button",{name:"Outside"}).focus(),await l.keyboard(",."),await a(e.onPrevious).not.toHaveBeenCalled(),await a(e.onNext).not.toHaveBeenCalled(),t.getByRole("button",{name:"Close drawer"}).focus(),await l.keyboard(","),await a(e.onPrevious).toHaveBeenCalledOnce(),await l.keyboard("."),await a(e.onNext).toHaveBeenCalledOnce(),await l.click(t.getByRole("textbox",{name:"Notes"})),await l.keyboard(",."),await a(e.onPrevious).toHaveBeenCalledOnce(),await a(e.onNext).toHaveBeenCalledOnce()}},T={name:"Test: shortcuts stop at the ends",args:{index:1,total:1},play:async({args:e,canvasElement:o})=>{u(o).getByRole("button",{name:"Close drawer"}).focus(),await l.keyboard(",."),await a(e.onPrevious).not.toHaveBeenCalled(),await a(e.onNext).not.toHaveBeenCalled()}},D={name:"Test: shortcuts work anywhere in the drawer",tags:["!snapshot"],args:{onClose:void 0},render:e=>n.jsxs(S,{open:!0,onOpenChange:()=>{},modal:!1,"aria-label":"Case 3",children:[n.jsx(d,{...e}),n.jsx(N,{children:n.jsx(g,{variant:"standard",children:"Assign"})})]}),play:async({args:e})=>{(await u(document.body).findByRole("button",{name:"Assign"})).focus(),await l.keyboard("."),await a(e.onNext).toHaveBeenCalledOnce()}},H={name:"Test: punctuation in a plain-text editor",tags:["!snapshot"],args:{onClose:void 0},render:e=>n.jsxs(S,{open:!0,onOpenChange:()=>{},modal:!1,"aria-label":"Case 3",children:[n.jsx(d,{...e}),n.jsx(N,{children:n.jsx(w,{contentEditable:"plaintext-only",suppressContentEditableWarning:!0,role:"textbox","aria-label":"Reply","aria-multiline":!0,minH:"16",borderWidth:"1",borderColor:"border"})})]}),play:async({args:e})=>{const t=await u(document.body).findByRole("textbox",{name:"Reply"});t.focus(),await a(X.keyDown(t,{key:","})).toBe(!0),await a(X.keyDown(t,{key:"."})).toBe(!0),await a(e.onPrevious).not.toHaveBeenCalled(),await a(e.onNext).not.toHaveBeenCalled()}},R={name:"A11y Modal Drawer Keyboard",tags:["!snapshot"],decorators:[e=>n.jsx(e,{})],render:function(o){const[t,r]=h.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(g,{onClick:()=>r(!0),children:"Open case drawer"}),n.jsxs(S,{open:t,onOpenChange:r,"aria-label":"Case 3",children:[n.jsx(d,{...o,onClose:void 0}),n.jsx(N,{children:n.jsx(Ne,{children:"Label printer drops the last line"})})]})]})},play:async({canvasElement:e})=>{const o=u(e),t=u(e.ownerDocument.body),r=o.getByRole("button",{name:"Open case drawer"});r.focus(),await l.keyboard("{Enter}");const s=await t.findByRole("dialog",{name:"Case 3"});await K(()=>a(s).toHaveFocus()),await a(t.queryByRole("tooltip")).toBeNull(),await l.keyboard("{Escape}"),await K(()=>a(t.queryByRole("dialog",{name:"Case 3"})).toBeNull()),await K(()=>a(r).toHaveFocus())}},P={name:"Test: no close button without a close action",args:{onClose:void 0,openHref:void 0},play:async({canvasElement:e})=>{const o=u(e);await a(o.queryByRole("button",{name:"Close drawer"})).toBeNull(),await a(o.queryByRole("link",{name:"Open"})).toBeNull()}},kn=["Default","Ends","WithoutOpen","ExCaseDrawer","ButtonStates","KeyboardShortcuts","ShortcutsStopAtEnds","ShortcutsInDrawer","ShortcutsSkipPlainTextEditor","A11yModalDrawerKeyboard","NoCloseWithoutAction"];var G,J,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ne,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,oe,re;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Without Open',
  args: {
    openHref: undefined
  }
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,ce,le,de;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:`Use case: a case opened from a list in a non-modal drawer. The bar sits
above the record header. Close uses the drawer's own close.`,...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var ue,pe,me;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,we,xe;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(we=E.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ye,ge,be;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,Be,fe;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:fe.source}}};var Ce,ke,Oe;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Oe=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var Ee,Te,De;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(De=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var He,Re,Pe;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Pe=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Pe.source}}};export{R as A11yModalDrawerKeyboard,O as ButtonStates,f as Default,C as Ends,y as ExCaseDrawer,E as KeyboardShortcuts,P as NoCloseWithoutAction,D as ShortcutsInDrawer,H as ShortcutsSkipPlainTextEditor,T as ShortcutsStopAtEnds,k as WithoutOpen,kn as __namedExportsOrder,Cn as default};
