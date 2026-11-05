import{m as ve,e as ye,f as fe,g as Be,h as be,r as k,s as ke,j as t,B as h,c as Ce,d as Oe,a as Te,V as de,T as Pe}from"./iframe-CWph_MJ2.js";import{B as pe}from"./Button-CfA6dpvJ.js";import{d as Ee,D as He,b as Ne}from"./DrawerHeader-B1caSJ2g.js";import{H as Se}from"./Heading-Bhen2tw7.js";import{T as De}from"./TextInput-BMPs3Xoq.js";import{I as E}from"./IconButton-DjpE2A0B.js";import{u as je}from"./useLocale-C_zeSZPl.js";import"./preload-helper-DJUwLRF1.js";import"./Spinner-B1YGWPIm.js";import"./FieldContext-C54CA36G.js";import"./FloatingLayerContext-QPZlt-J6.js";import"./mq.hook-Cib7Mm9t.js";import"./breakpoints-DU_5_Zhy.js";const ue={},Re=[],_e=[["root","peekBar__root"],["position","peekBar__position"],["controls","peekBar__controls"]],Ie=_e.map(([e,a])=>[e,Be(a,ue,be(Re,e))]),qe=ve((e={})=>Object.fromEntries(Ie.map(([a,n])=>[a,n.recipeFn(e)]))),R=[],Ve=e=>({...ue,...ye(e)}),Ke=Object.assign(qe,{__recipe__:!1,__name__:"peekBar",raw:e=>e,classNameMap:{},variantKeys:R,variantMap:{},splitVariantProps(e){return fe(e,R)},getVariantProps:Ve}),_=",",I=".",Ae=e=>e instanceof HTMLElement&&!!e.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]'),p=e=>{const{noun:a,index:n,total:c,onPrevious:r,onNext:s,openHref:l,onOpen:S,onClose:me,shortcuts:x=!0,...he}=e,{labels:u}=je(),C=k.useContext(Ee),D=me??(C==null?void 0:C.onClose),O=Ke(),[xe,we]=ke(he),ge=!!(l||S),T=!!r&&n>1,P=!!s&&n<c;return k.useEffect(()=>{if(!x)return;const j=i=>{i.metaKey||i.ctrlKey||i.altKey||i.defaultPrevented||Ae(i.target)||(i.key===_&&T?(i.preventDefault(),r==null||r()):i.key===I&&P&&(i.preventDefault(),s==null||s()))};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[x,T,P,r,s]),t.jsxs(h,{...Oe("PeekBar"),className:Ce(O.root,xe),...we,children:[t.jsx(h,{as:"span",className:O.position,"aria-live":"polite",children:u.peekPosition({noun:a,index:n,total:c})}),t.jsxs(h,{className:O.controls,children:[t.jsx(E,{variant:"ghost",size:"sm",iconName:"arrow-left",altText:u.previousItem(a),disabled:!T,onClick:r,"aria-keyshortcuts":x?_:void 0}),t.jsx(E,{variant:"ghost",size:"sm",iconName:"arrow-right",altText:u.nextItem(a),disabled:!P,onClick:s,"aria-keyshortcuts":x?I:void 0}),ge&&t.jsx(pe,{size:"sm",after:t.jsx(Te,{name:"arrow-square-out","aria-hidden":!0}),...l?{href:l}:{onClick:S},children:u.openFullPage}),D&&t.jsx(E,{variant:"ghost",size:"sm",iconName:"x",altText:u.closeDrawer,onClick:D})]})]})};p.__docgenInfo={description:'Drawer chrome for a record opened from a list: position, previous and next,\nopen full page, and close.\n\nPlace it at the top of a `Drawer`, above the record\'s page header. The\nposition text ("Case 3 of 40") is announced when it changes. "," and "."\nopen the previous and next records from anywhere on the page. All text comes\nfrom `LocaleProvider` (`peekPosition`, `previousItem`, `nextItem`,\n`openFullPage`, and `closeDrawer`).\n\n@example\n```tsx\n<PeekBar noun="Case" index={3} total={40} onPrevious={prev} onNext={next} openHref="/case/3" />\n```',methods:[],displayName:"PeekBar",props:{noun:{required:!0,tsType:{name:"string"},description:'What the list holds, singular, such as "Case" or "Order". Used in the position text and button names.'},index:{required:!0,tsType:{name:"number"},description:"Position of the open record in the list, starting at 1."},total:{required:!0,tsType:{name:"number"},description:"Number of records in the list."},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the previous record. The button is disabled on the first record or when this is not set."},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the next record. The button is disabled on the last record or when this is not set."},openHref:{required:!1,tsType:{name:"string"},description:`Link to the record's full page. Shows the "Open" button.`},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Opens the record\'s full page. Shows the "Open" button. Ignored when `openHref` is set.'},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Closes the peek. Inside a `Drawer`, it defaults to the drawer's close.\nThe close button is hidden when there is no close action."},shortcuts:{required:!1,tsType:{name:"boolean"},description:`Turns on the keyboard shortcuts: "," opens the previous record and "."
opens the next. They work anywhere on the page while the bar is shown,
except while a text field has focus or a modifier key is held.

@default true`}}};const{expect:o,fn:H,userEvent:d,within:N}=__STORYBOOK_MODULE_TEST__,et={title:"Components/PeekBar",component:p,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`Drawer chrome for a record opened from a list.

- Position text, such as "Case 3 of 40", announced when it changes
- Previous and next, disabled at the ends of the list
- "Open" to go to the full page, shown when \`openHref\` or \`onOpen\` is set
- Close, which defaults to the parent \`Drawer\`'s close
- Keyboard: "," opens the previous record and "." the next`}}},args:{noun:"Case",index:3,total:40,onPrevious:H(),onNext:H(),openHref:"#case-3",onClose:H()},decorators:[e=>t.jsx(h,{w:"md",borderWidth:"1",borderColor:"border",borderRadius:"8",children:t.jsx(e,{})})]},w={},g={name:"First and Last Record",render:e=>t.jsxs(de,{gap:"0",alignItems:"stretch",children:[t.jsx(p,{...e,index:1,total:40}),t.jsx(p,{...e,index:40,total:40})]}),parameters:{controls:{disable:!0}}},v={name:"Without Open",args:{openHref:void 0}},q=[{id:"C-1041",title:"Label printer drops the last line"},{id:"C-1042",title:"Freight quote missing on the packing slip"},{id:"C-1043",title:"Lot numbers out of order on the receiving screen"}],m={name:"Ex: Case Drawer",decorators:[e=>t.jsx(e,{})],render:function(){const[a,n]=k.useState(!1),[c,r]=k.useState(1),s=q[c-1]??{id:"",title:""};return t.jsxs(t.Fragment,{children:[t.jsx(pe,{onClick:()=>n(!0),children:"Open case drawer"}),t.jsxs(He,{open:a,onOpenChange:n,modal:!1,"aria-label":s.id,children:[t.jsx(p,{noun:"Case",index:c,total:q.length,onPrevious:()=>r(l=>l-1),onNext:()=>r(l=>l+1),openHref:`#${s.id}`}),t.jsxs(Ne,{children:[t.jsx(Se,{level:"h2",textStyle:"heading.md",children:s.id}),t.jsx(Pe,{children:s.title})]})]})]})},parameters:{controls:{disable:!0}}},y={name:"Test: buttons and names",args:{index:1,total:2},play:async({args:e,canvasElement:a})=>{const n=N(a);await o(n.getByText("Case 1 of 2")).toBeInTheDocument(),await o(n.getByRole("button",{name:"Previous case"})).toBeDisabled();const c=n.getByRole("button",{name:"Next case"});await o(c).toBeEnabled(),await d.click(c),await o(e.onNext).toHaveBeenCalledOnce(),await o(n.getByRole("link",{name:"Open"})).toHaveAttribute("href","#case-3"),await d.click(n.getByRole("button",{name:"Close drawer"})),await o(e.onClose).toHaveBeenCalledOnce()}},f={name:"Test: comma and period shortcuts",args:{index:2,total:3},render:e=>t.jsxs(de,{gap:"8",alignItems:"stretch",children:[t.jsx(p,{...e}),t.jsx(h,{px:"16",pb:"8",children:t.jsx(De,{name:"notes","aria-label":"Notes"})})]}),play:async({args:e,canvasElement:a})=>{const n=N(a);await o(n.getByRole("button",{name:"Previous case"})).toHaveAttribute("aria-keyshortcuts",","),await o(n.getByRole("button",{name:"Next case"})).toHaveAttribute("aria-keyshortcuts","."),await d.keyboard(","),await o(e.onPrevious).toHaveBeenCalledOnce(),await d.keyboard("."),await o(e.onNext).toHaveBeenCalledOnce(),await d.click(n.getByRole("textbox",{name:"Notes"})),await d.keyboard(",."),await o(e.onPrevious).toHaveBeenCalledOnce(),await o(e.onNext).toHaveBeenCalledOnce()}},B={name:"Test: shortcuts stop at the ends",args:{index:1,total:1},play:async({args:e})=>{await d.keyboard(",."),await o(e.onPrevious).not.toHaveBeenCalled(),await o(e.onNext).not.toHaveBeenCalled()}},b={name:"Test: no close button without a close action",args:{onClose:void 0,openHref:void 0},play:async({canvasElement:e})=>{const a=N(e);await o(a.queryByRole("button",{name:"Close drawer"})).toBeNull(),await o(a.queryByRole("link",{name:"Open"})).toBeNull()}},tt=["Default","Ends","WithoutOpen","ExCaseDrawer","ButtonStates","KeyboardShortcuts","ShortcutsStopAtEnds","NoCloseWithoutAction"];var V,K,A;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(A=(K=w.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var L,F,W;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var z,M,U;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Without Open',
  args: {
    openHref: undefined
  }
}`,...(U=(M=v.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var Y,$,X,G,J;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=($=m.parameters)==null?void 0:$.docs)==null?void 0:X.source},description:{story:`Use case: a case opened from a list in a non-modal drawer. The bar sits
above the record header. Close uses the drawer's own close.`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Q,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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

    // From the page: "," is previous and "." is next.
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
}`,...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,re;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Test: shortcuts stop at the ends',
  args: {
    index: 1,
    total: 1
  },
  play: async ({
    args
  }) => {
    await userEvent.keyboard(',.');
    await expect(args.onPrevious).not.toHaveBeenCalled();
    await expect(args.onNext).not.toHaveBeenCalled();
  }
}`,...(re=(se=B.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,ce,le;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};export{y as ButtonStates,w as Default,g as Ends,m as ExCaseDrawer,f as KeyboardShortcuts,b as NoCloseWithoutAction,B as ShortcutsStopAtEnds,v as WithoutOpen,tt as __namedExportsOrder,et as default};
