import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{B as c}from"./Button-9qTdRXCj.js";import{C as r}from"./ConfirmationModal--y99UwUX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dsComponent-COP_u32W.js";import"./Icon-DykL05lh.js";import"./IconConfig-qRFEvzON.js";import"./Spinner-CUl5P6MP.js";import"./FieldContext-D6URyQos.js";import"./Text-Bb_CaJVi.js";import"./Tooltip-BI37R98K.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./ModalHeader-DGV9o1FU.js";import"./FloatingLayerContext-BryH8O9I.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Heading-Bw-hLwn_.js";import"./IconButton-DtO38NMA.js";const K={title:"Components/Modals/ConfirmationModal",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'Non-form confirmation dialog with cancel and confirm actions. Use `type="delete"` for destructive confirmations.'}}}},s={name:"Default",render:function(){const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>t(!0),children:"Publish changes"}),e.jsx(r,{open:n,onOpenChange:t,title:"Publish changes",description:"This will make the current draft visible to all users.",confirmLabel:"Publish",onConfirm:()=>t(!1)})]})}},a={name:"Delete",render:function(){const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>t(!0),children:"Delete item"}),e.jsx(r,{open:n,onOpenChange:t,title:"Delete Item",description:"Are you sure you want to delete this item? This action cannot be undone.",confirmLabel:"Delete",type:"delete",onConfirm:()=>t(!1)})]})}},i={name:"Async Confirm",render:function(){const[n,t]=o.useState(!1),[j,p]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>t(!0),children:"Delete account"}),e.jsx(r,{open:n,onOpenChange:t,title:"Delete Account",description:"Your account and all associated data will be permanently removed.",confirmLabel:"Delete account",type:"delete",confirmLoading:j,onConfirm:async()=>{p(!0);try{await new Promise(S=>setTimeout(S,1500)),t(!1)}finally{p(!1)}}})]})}},l={name:"Ex: Delete Item",render:function(){const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>t(!0),children:"Delete Item"}),e.jsx(r,{open:n,onOpenChange:t,title:"Delete Item",description:"Are you sure you want to delete this item? This action cannot be undone.",confirmLabel:"Delete",type:"delete",onConfirm:()=>t(!1)})]})}};var u,d,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Default',
  render: function DefaultRender() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Publish changes</Button>
        <ConfirmationModal open={open} onOpenChange={setOpen} title="Publish changes" description="This will make the current draft visible to all users." confirmLabel="Publish" onConfirm={() => setOpen(false)} />
      </>;
  }
}`,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var C,h,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Delete',
  render: function DeleteRender() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Delete item</Button>
        <ConfirmationModal open={open} onOpenChange={setOpen} title="Delete Item" description="Are you sure you want to delete this item? This action cannot be undone." confirmLabel="Delete" type="delete" onConfirm={() => setOpen(false)} />
      </>;
  }
}`,...(D=(h=a.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var g,y,O;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Async Confirm',
  render: function AsyncConfirmRender() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Delete account</Button>
        <ConfirmationModal open={open} onOpenChange={setOpen} title="Delete Account" description="Your account and all associated data will be permanently removed." confirmLabel="Delete account" type="delete" confirmLoading={confirmLoading} onConfirm={async () => {
        setConfirmLoading(true);
        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          setOpen(false);
        } finally {
          setConfirmLoading(false);
        }
      }} />
      </>;
  }
}`,...(O=(y=i.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var x,b,L;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Ex: Delete Item',
  render: function ExDeleteItemRender() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Delete Item</Button>
        <ConfirmationModal open={open} onOpenChange={setOpen} title="Delete Item" description="Are you sure you want to delete this item? This action cannot be undone." confirmLabel="Delete" type="delete" onConfirm={() => setOpen(false)} />
      </>;
  }
}`,...(L=(b=l.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const Q=["Default","Delete","AsyncConfirm","ExDeleteItem"];export{i as AsyncConfirm,s as Default,a as Delete,l as ExDeleteItem,Q as __namedExportsOrder,K as default};
