import{r as o,j as e}from"./iframe-BphCB5JL.js";import{B as c}from"./Button-B1-jm9qp.js";import{C as r}from"./ConfirmationModal-B499N3fW.js";import"./preload-helper-AHsI9dVr.js";import"./Spinner-BEYNXDzU.js";import"./FieldContext-laHYXYCE.js";import"./ModalWrapper-SWeVij-r.js";import"./mq.hook-EUASZNQ9.js";import"./breakpoints-DU_5_Zhy.js";import"./Heading-CXQdli8W.js";import"./IconButton-BHD5H1-w.js";import"./FloatingLayerContext-DW2TijO3.js";const Y={title:"Components/Modals/ConfirmationModal",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'Non-form confirmation dialog with cancel and confirm actions. Use `type="delete"` for destructive confirmations.'}}}},s={name:"Default",render:function(){const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>n(!0),children:"Publish changes"}),e.jsx(r,{open:t,onOpenChange:n,title:"Publish changes",description:"This will make the current draft visible to all users.",confirmLabel:"Publish",onConfirm:()=>n(!1)})]})}},a={name:"Delete",render:function(){const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>n(!0),children:"Delete item"}),e.jsx(r,{open:t,onOpenChange:n,title:"Delete Item",description:"Are you sure you want to delete this item? This action cannot be undone.",confirmLabel:"Delete",type:"delete",onConfirm:()=>n(!1)})]})}},i={name:"Async Confirm",render:function(){const[t,n]=o.useState(!1),[j,u]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>n(!0),children:"Delete account"}),e.jsx(r,{open:t,onOpenChange:n,title:"Delete Account",description:"Your account and all associated data will be permanently removed.",confirmLabel:"Delete account",type:"delete",confirmLoading:j,onConfirm:async()=>{u(!0);try{await new Promise(S=>setTimeout(S,1500)),n(!1)}finally{u(!1)}}})]})}},l={name:"Ex: Delete Item",render:function(){const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>n(!0),children:"Delete Item"}),e.jsx(r,{open:t,onOpenChange:n,title:"Delete Item",description:"Are you sure you want to delete this item? This action cannot be undone.",confirmLabel:"Delete",type:"delete",onConfirm:()=>n(!1)})]})}},_=["Default","Delete","AsyncConfirm","ExDeleteItem"];var p,d,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(L=(b=l.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};export{i as AsyncConfirm,s as Default,a as Delete,l as ExDeleteItem,_ as __namedExportsOrder,Y as default};
