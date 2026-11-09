import{m as Ne,e as Se,f as Re,g as De,h as je,r as x,Z as _e,s as Ie,j as n,B as p,c as qe,d as Ae,a as Ve,V as ve,T as Ke}from"./iframe-BLx7vd1M.js";import{B as P}from"./Button-CJFFTaqP.js";import{d as Fe,D as fe,b as Be}from"./DrawerHeader-BkZzcfFe.js";import{H as Le}from"./Heading-08C7Runt.js";import{T as We}from"./TextInput-B439doXy.js";import{I as D}from"./IconButton-DwdVZ9xX.js";import{u as Me}from"./useLocale-BxEf1hFL.js";import"./preload-helper-DJUwLRF1.js";import"./Spinner-CAcDaKK4.js";import"./FieldContext-DuWu1XAt.js";import"./FloatingLayerContext-V_MTAsHS.js";import"./mq.hook-ClxdJSGL.js";import"./breakpoints-DU_5_Zhy.js";const be={},ze=[],Ue=[["root","peekBar__root"],["position","peekBar__position"],["controls","peekBar__controls"]],Ye=Ue.map(([e,a])=>[e,De(a,be,je(ze,e))]),$e=Ne((e={})=>Object.fromEntries(Ye.map(([a,t])=>[a,t.recipeFn(e)]))),K=[],Xe=e=>({...be,...Se(e)}),Ze=Object.assign($e,{__recipe__:!1,__name__:"peekBar",raw:e=>e,classNameMap:{},variantKeys:K,variantMap:{},splitVariantProps(e){return Re(e,K)},getVariantProps:Xe}),F=",",L=".",Ge=e=>e instanceof HTMLElement&&!!e.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]'),u=e=>{const{noun:a,index:t,total:d,onPrevious:i,onNext:s,openHref:l,onOpen:_,onClose:Ce,shortcuts:g=!0,ref:ke,...Oe}=e,I=x.useRef(null),Te=_e([I,ke]),{labels:m}=Me(),y=x.useContext(Fe),q=Ce??(y==null?void 0:y.onClose),E=Ze(),[He,Pe]=Ie(Oe),Ee=!!(l||_),N=!!i&&t>1,S=!!s&&t<d,A=!!y;return x.useEffect(()=>{if(!g)return;const V=r=>{const v=I.current,R=A&&(v==null?void 0:v.closest('[role="dialog"]'))||v;!(r.target instanceof Node)||!(R!=null&&R.contains(r.target))||r.metaKey||r.ctrlKey||r.altKey||r.defaultPrevented||Ge(r.target)||(r.key===F&&N?(r.preventDefault(),i==null||i()):r.key===L&&S&&(r.preventDefault(),s==null||s()))};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[g,A,N,S,i,s]),n.jsxs(p,{...Ae("PeekBar"),ref:Te,className:qe(E.root,He),...Pe,children:[n.jsx(p,{as:"span",className:E.position,"aria-live":"polite",children:m.peekPosition({noun:a,index:t,total:d})}),n.jsxs(p,{className:E.controls,children:[n.jsx(D,{variant:"ghost",size:"sm",iconName:"arrow-left",altText:m.previousItem(a),disabled:!N,onClick:i,"aria-keyshortcuts":g?F:void 0}),n.jsx(D,{variant:"ghost",size:"sm",iconName:"arrow-right",altText:m.nextItem(a),disabled:!S,onClick:s,"aria-keyshortcuts":g?L:void 0}),Ee&&n.jsx(P,{size:"sm",after:n.jsx(Ve,{name:"arrow-square-out","aria-hidden":!0}),...l?{href:l}:{onClick:_},children:m.openFullPage}),q&&n.jsx(D,{variant:"ghost",size:"sm",iconName:"x",altText:m.closeDrawer,onClick:q})]})]})};u.__docgenInfo={description:'Drawer chrome for a record opened from a list: position, previous and next,\nopen full page, and close.\n\nPlace it at the top of a `Drawer`, above the record\'s page header. The\nposition text ("Case 3 of 40") is announced when it changes. "," and "."\nopen the previous and next records while focus is in the bar or its drawer.\nAll text comes\nfrom `LocaleProvider` (`peekPosition`, `previousItem`, `nextItem`,\n`openFullPage`, and `closeDrawer`).\n\n@example\n```tsx\n<PeekBar noun="Case" index={3} total={40} onPrevious={prev} onNext={next} openHref="/case/3" />\n```',methods:[],displayName:"PeekBar",props:{noun:{required:!0,tsType:{name:"string"},description:'What the list holds, singular, such as "Case" or "Order". Used in the position text and button names.'},index:{required:!0,tsType:{name:"number"},description:"Position of the open record in the list, starting at 1."},total:{required:!0,tsType:{name:"number"},description:"Number of records in the list."},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the previous record. The button is disabled on the first record or when this is not set."},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the next record. The button is disabled on the last record or when this is not set."},openHref:{required:!1,tsType:{name:"string"},description:`Link to the record's full page. Shows the "Open" button.`},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Opens the record\'s full page. Shows the "Open" button. Ignored when `openHref` is set.'},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Closes the peek. Inside a `Drawer`, it defaults to the drawer's close.\nThe close button is hidden when there is no close action."},shortcuts:{required:!1,tsType:{name:"boolean"},description:`Turns on the keyboard shortcuts: "," opens the previous record and "."
opens the next. They work while focus is in the bar, or anywhere in its
\`Drawer\`, except while a text field has focus or a modifier key is held.

@default true`}}};const{expect:o,fn:j,userEvent:c,within:w}=__STORYBOOK_MODULE_TEST__,pn={title:"Components/PeekBar",component:u,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`Drawer chrome for a record opened from a list.

- Position text, such as "Case 3 of 40", announced when it changes
- Previous and next, disabled at the ends of the list
- "Open" to go to the full page, shown when \`openHref\` or \`onOpen\` is set
- Close, which defaults to the parent \`Drawer\`'s close
- Keyboard: "," opens the previous record and "." the next, while focus is
  in the bar or its drawer`}}},args:{noun:"Case",index:3,total:40,onPrevious:j(),onNext:j(),openHref:"#case-3",onClose:j()},decorators:[e=>n.jsx(p,{w:"md",borderWidth:"1",borderColor:"border",borderRadius:"8",children:n.jsx(e,{})})]},f={},B={name:"First and Last Record",render:e=>n.jsxs(ve,{gap:"0",alignItems:"stretch",children:[n.jsx(u,{...e,index:1,total:40}),n.jsx(u,{...e,index:40,total:40})]}),parameters:{controls:{disable:!0}}},b={name:"Without Open",args:{openHref:void 0}},W=[{id:"C-1041",title:"Label printer drops the last line"},{id:"C-1042",title:"Freight quote missing on the packing slip"},{id:"C-1043",title:"Lot numbers out of order on the receiving screen"}],h={name:"Ex: Case Drawer",decorators:[e=>n.jsx(e,{})],render:function(){const[a,t]=x.useState(!1),[d,i]=x.useState(1),s=W[d-1]??{id:"",title:""};return n.jsxs(n.Fragment,{children:[n.jsx(P,{onClick:()=>t(!0),children:"Open case drawer"}),n.jsxs(fe,{open:a,onOpenChange:t,modal:!1,"aria-label":s.id,children:[n.jsx(u,{noun:"Case",index:d,total:W.length,onPrevious:()=>i(l=>l-1),onNext:()=>i(l=>l+1),openHref:`#${s.id}`}),n.jsxs(Be,{children:[n.jsx(Le,{level:"h2",textStyle:"heading.md",children:s.id}),n.jsx(Ke,{children:s.title})]})]})]})},parameters:{controls:{disable:!0}}},C={name:"Test: buttons and names",args:{index:1,total:2},play:async({args:e,canvasElement:a})=>{const t=w(a);await o(t.getByText("Case 1 of 2")).toBeInTheDocument(),await o(t.getByRole("button",{name:"Previous case"})).toBeDisabled();const d=t.getByRole("button",{name:"Next case"});await o(d).toBeEnabled(),await c.click(d),await o(e.onNext).toHaveBeenCalledOnce(),await o(t.getByRole("link",{name:"Open"})).toHaveAttribute("href","#case-3"),await c.click(t.getByRole("button",{name:"Close drawer"})),await o(e.onClose).toHaveBeenCalledOnce()}},k={name:"Test: comma and period shortcuts",args:{index:2,total:3},render:e=>n.jsxs(ve,{gap:"8",alignItems:"stretch",children:[n.jsx(u,{...e}),n.jsx(p,{px:"16",pb:"8",children:n.jsx(We,{name:"notes","aria-label":"Notes"})}),n.jsx(p,{px:"16",pb:"8",children:n.jsx(P,{variant:"standard",children:"Outside"})})]}),play:async({args:e,canvasElement:a})=>{const t=w(a);await o(t.getByRole("button",{name:"Previous case"})).toHaveAttribute("aria-keyshortcuts",","),await o(t.getByRole("button",{name:"Next case"})).toHaveAttribute("aria-keyshortcuts","."),t.getByRole("button",{name:"Outside"}).focus(),await c.keyboard(",."),await o(e.onPrevious).not.toHaveBeenCalled(),await o(e.onNext).not.toHaveBeenCalled(),t.getByRole("button",{name:"Close drawer"}).focus(),await c.keyboard(","),await o(e.onPrevious).toHaveBeenCalledOnce(),await c.keyboard("."),await o(e.onNext).toHaveBeenCalledOnce(),await c.click(t.getByRole("textbox",{name:"Notes"})),await c.keyboard(",."),await o(e.onPrevious).toHaveBeenCalledOnce(),await o(e.onNext).toHaveBeenCalledOnce()}},O={name:"Test: shortcuts stop at the ends",args:{index:1,total:1},play:async({args:e,canvasElement:a})=>{w(a).getByRole("button",{name:"Close drawer"}).focus(),await c.keyboard(",."),await o(e.onPrevious).not.toHaveBeenCalled(),await o(e.onNext).not.toHaveBeenCalled()}},T={name:"Test: shortcuts work anywhere in the drawer",tags:["!snapshot"],args:{onClose:void 0},render:e=>n.jsxs(fe,{open:!0,onOpenChange:()=>{},modal:!1,"aria-label":"Case 3",children:[n.jsx(u,{...e}),n.jsx(Be,{children:n.jsx(P,{variant:"standard",children:"Assign"})})]}),play:async({args:e})=>{(await w(document.body).findByRole("button",{name:"Assign"})).focus(),await c.keyboard("."),await o(e.onNext).toHaveBeenCalledOnce()}},H={name:"Test: no close button without a close action",args:{onClose:void 0,openHref:void 0},play:async({canvasElement:e})=>{const a=w(e);await o(a.queryByRole("button",{name:"Close drawer"})).toBeNull(),await o(a.queryByRole("link",{name:"Open"})).toBeNull()}},mn=["Default","Ends","WithoutOpen","ExCaseDrawer","ButtonStates","KeyboardShortcuts","ShortcutsStopAtEnds","ShortcutsInDrawer","NoCloseWithoutAction"];var M,z,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(U=(z=f.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var Y,$,X;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=($=B.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var Z,G,J;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Without Open',
  args: {
    openHref: undefined
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,ee,ne,te,ae;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source},description:{story:`Use case: a case opened from a list in a non-modal drawer. The bar sits
above the record header. Close uses the drawer's own close.`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var oe,se,re;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=C.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,ce,de;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var le,ue,pe;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,xe;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(xe=(he=T.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var we,ge,ye;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ye=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};export{C as ButtonStates,f as Default,B as Ends,h as ExCaseDrawer,k as KeyboardShortcuts,H as NoCloseWithoutAction,T as ShortcutsInDrawer,O as ShortcutsStopAtEnds,b as WithoutOpen,mn as __namedExportsOrder,pn as default};
