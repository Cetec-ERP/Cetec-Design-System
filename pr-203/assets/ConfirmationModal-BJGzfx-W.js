import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-BKyFwriW.js";import{e as r}from"./dsComponent-BYUIyF_R.js";import{B as c}from"./Button-Bf2hC955.js";import{T as O}from"./Text-5drP39ES.js";import{M as B,a as j,b as k,c as D}from"./ModalHeader-BGIrPPDn.js";const P={default:{preventOverlayClose:!1,showCloseButton:!0},delete:{preventOverlayClose:!0,showCloseButton:!1}},I=m=>{const{open:f,onOpenChange:o,title:p,description:u,confirmLabel:h,cancelLabel:y="Cancel",type:t="default",onConfirm:C,confirmLoading:a=!1,confirmDisabled:g=!1,preventOverlayClose:b,showCloseButton:v,size:w="sm"}=m,i=n.useId(),s=n.useId(),l=n.useRef(null),d=P[t],T=b??d.preventOverlayClose,q=v??d.showCloseButton,L=t==="delete"?"danger":"primary",M=n.useCallback(()=>o(!1),[o]),x=()=>{C()};return e.jsxs(B,{...r("ConfirmationModal"),open:f,onOpenChange:o,size:w,preventOverlayClose:T,initialFocus:t==="delete"?l:void 0,role:"alertdialog","aria-labelledby":i,"aria-describedby":s,children:[e.jsx(j,{title:p,titleId:i,showCloseButton:q}),e.jsx(k,{...r("ModalBody"),children:e.jsx(O,{id:s,children:u})}),e.jsxs(D,{...r("ModalFooter"),children:[e.jsx(c,{ref:l,type:"button",variant:"ghost",onClick:M,disabled:a,children:y}),e.jsx(c,{type:"button",variant:L,onClick:x,disabled:g||a,loading:a,children:h})]})]})};I.__docgenInfo={description:`Renders a confirmation alert dialog with cancel and confirm actions.

Dismiss paths (Cancel, Escape, overlay, close button) call
\`onOpenChange(false)\` only. They do not invoke \`onConfirm\`. Call
\`onOpenChange(false)\` from \`onConfirm\` when the action completes.

For async confirms, catch errors and clear \`confirmLoading\` in \`finally\`.
This component does not swallow rejections from \`onConfirm\`.

@example
\`\`\`tsx
<ConfirmationModal
  open={open}
  onOpenChange={setOpen}
  title="Delete item"
  description="This action cannot be undone."
  confirmLabel="Delete"
  type="delete"
  confirmLoading={confirmLoading}
  onConfirm={async () => {
    setConfirmLoading(true);
    try {
      await deleteItem();
      setOpen(false);
    } finally {
      setConfirmLoading(false);
    }
  }}
/>
\`\`\``,methods:[],displayName:"ConfirmationModal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controlled dialog state."},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when the dialog requests an open-state change."},title:{required:!0,tsType:{name:"string"},description:"Alert dialog title rendered in {@link ModalHeader}."},description:{required:!0,tsType:{name:"string"},description:"Supporting message describing the action or consequence."},confirmLabel:{required:!0,tsType:{name:"string"},description:"Label for the confirm action button."},cancelLabel:{required:!1,tsType:{name:"string"},description:"Label for the cancel button. @default 'Cancel'"},type:{required:!1,tsType:{name:"union",raw:"'default' | 'delete'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'delete'"}]},description:`Visual treatment for the confirm action.
@default 'default'`},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Called when the user activates the confirm button. Async work, error\nhandling, and `confirmLoading` are consumer-owned — catch rejections and\nclear loading in `finally` so the button does not stay stuck."},confirmLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading state on the confirm button."},confirmDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the confirm button."},preventOverlayClose:{required:!1,tsType:{name:"boolean"},description:"Prevents overlay clicks from closing the dialog.\nDefaults to `false` for `default` and `true` for `delete`."},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Shows the header close button.\nDefaults to `true` for `default` and `false` for `delete`."},size:{required:!1,tsType:{name:"ModalVariantProps['size']",raw:"ModalVariantProps['size']"},description:"Recipe size forwarded to {@link ModalWrapper}. @default 'sm'"}}};export{I as C};
