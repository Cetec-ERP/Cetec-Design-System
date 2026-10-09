import{r as n,j as e,d as r,T as B}from"./iframe-DMd1B6rC.js";import{u as j}from"./useLocale-CMRaevmZ.js";import{B as c}from"./Button-DzHX1KMy.js";import{M as k,a as D,b as P,c as I}from"./ModalWrapper-CToBxEhz.js";const z={default:{preventOverlayClose:!1,showCloseButton:!0},delete:{preventOverlayClose:!0,showCloseButton:!1}},R=m=>{const{labels:f}=j(),{open:u,onOpenChange:o,title:p,description:h,confirmLabel:y,cancelLabel:C=f.cancel,type:t="default",onConfirm:g,confirmLoading:a=!1,confirmDisabled:b=!1,preventOverlayClose:v,showCloseButton:w,size:T="sm"}=m,i=n.useId(),s=n.useId(),l=n.useRef(null),d=z[t],L=v??d.preventOverlayClose,q=w??d.showCloseButton,M=t==="delete"?"danger":"primary",x=n.useCallback(()=>o(!1),[o]),O=()=>{g()};return e.jsxs(k,{...r("ConfirmationModal"),open:u,onOpenChange:o,size:T,preventOverlayClose:L,initialFocus:t==="delete"?l:void 0,role:"alertdialog","aria-labelledby":i,"aria-describedby":s,children:[e.jsx(D,{title:p,titleId:i,showCloseButton:q}),e.jsx(P,{...r("ModalBody"),children:e.jsx(B,{id:s,children:h})}),e.jsxs(I,{...r("ModalFooter"),children:[e.jsx(c,{ref:l,type:"button",variant:"ghost",onClick:x,disabled:a,children:C}),e.jsx(c,{type:"button",variant:M,onClick:O,disabled:b||a,loading:a,children:y})]})]})};R.__docgenInfo={description:`Renders a confirmation alert dialog with cancel and confirm actions.

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
@default 'default'`},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Called when the user activates the confirm button. Async work, error\nhandling, and `confirmLoading` are consumer-owned — catch rejections and\nclear loading in `finally` so the button does not stay stuck."},confirmLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading state on the confirm button."},confirmDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the confirm button."},preventOverlayClose:{required:!1,tsType:{name:"boolean"},description:"Prevents overlay clicks from closing the dialog.\nDefaults to `false` for `default` and `true` for `delete`."},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Shows the header close button.\nDefaults to `true` for `default` and `false` for `delete`."},size:{required:!1,tsType:{name:"ModalVariantProps['size']",raw:"ModalVariantProps['size']"},description:"Recipe size forwarded to {@link ModalWrapper}. @default 'sm'"}}};export{R as C};
