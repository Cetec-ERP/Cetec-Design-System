import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-BKyFwriW.js";import{e as r}from"./dsComponent-BYUIyF_R.js";import{B as m}from"./Button-Bf2hC955.js";import{T as j}from"./Text-DTL6959x.js";import{M as D,a as L,b as P,c as k}from"./ModalHeader-BPdfisZi.js";const I={default:{preventOverlayClose:!1,showCloseButton:!0},delete:{preventOverlayClose:!0,showCloseButton:!1}},z=u=>{const{open:t,onOpenChange:a,title:f,description:h,confirmLabel:C,cancelLabel:y="Cancel",type:o="default",onConfirm:b,confirmLoading:s=!1,confirmDisabled:v=!1,preventOverlayClose:g,showCloseButton:w,size:T="sm"}=u,i=n.useId(),l=n.useId(),d=n.useRef(null),c=I[o],q=g??c.preventOverlayClose,M=w??c.showCloseButton,x=o==="delete"?"danger":"primary",O=n.useCallback(()=>a(!1),[a]);n.useEffect(()=>{var p;t&&o==="delete"&&((p=d.current)==null||p.focus())},[t,o]);const B=()=>{b()};return e.jsxs(D,{...r("ConfirmationModal"),open:t,onOpenChange:a,size:T,preventOverlayClose:q,role:"alertdialog","aria-labelledby":i,"aria-describedby":l,children:[e.jsx(L,{title:f,titleId:i,showCloseButton:M}),e.jsx(P,{...r("ModalBody"),children:e.jsx(j,{id:l,children:h})}),e.jsxs(k,{...r("ModalFooter"),children:[e.jsx(m,{ref:d,type:"button",variant:"ghost",onClick:O,disabled:s,children:y}),e.jsx(m,{type:"button",variant:x,onClick:B,disabled:v,loading:s,children:C})]})]})};z.__docgenInfo={description:`Renders a confirmation alert dialog with cancel and confirm actions.

Dismiss paths (Cancel, Escape, overlay, close button) call
\`onOpenChange(false)\` only. They do not invoke \`onConfirm\`. Call
\`onOpenChange(false)\` from \`onConfirm\` when the action completes.

@example
\`\`\`tsx
<ConfirmationModal
  open={open}
  onOpenChange={setOpen}
  title="Delete item"
  description="This action cannot be undone."
  confirmLabel="Delete"
  type="delete"
  onConfirm={async () => {
    await deleteItem();
    setOpen(false);
  }}
/>
\`\`\``,methods:[],displayName:"ConfirmationModal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controlled dialog state."},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when the dialog requests an open-state change."},title:{required:!0,tsType:{name:"string"},description:"Alert dialog title rendered in {@link ModalHeader}."},description:{required:!0,tsType:{name:"string"},description:"Supporting message describing the action or consequence."},confirmLabel:{required:!0,tsType:{name:"string"},description:"Label for the confirm action button."},cancelLabel:{required:!1,tsType:{name:"string"},description:"Label for the cancel button. @default 'Cancel'"},type:{required:!1,tsType:{name:"union",raw:"'default' | 'delete'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'delete'"}]},description:`Visual treatment for the confirm action.
@default 'default'`},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Called when the user activates the confirm button."},confirmLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading state on the confirm button."},confirmDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the confirm button."},preventOverlayClose:{required:!1,tsType:{name:"boolean"},description:"Prevents overlay clicks from closing the dialog.\nDefaults to `false` for `default` and `true` for `delete`."},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Shows the header close button.\nDefaults to `true` for `default` and `false` for `delete`."},size:{required:!1,tsType:{name:"ModalVariantProps['size']",raw:"ModalVariantProps['size']"},description:"Recipe size forwarded to {@link ModalWrapper}. @default 'sm'"}}};export{z as C};
