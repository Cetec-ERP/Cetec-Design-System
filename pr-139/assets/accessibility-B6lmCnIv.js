import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t}from"./index-BdPWOVIK.js";import{M as r,U as o}from"./index-B8HCfeHj.js";import"./index-BKyFwriW.js";import{F as s}from"./Box-B-dS-qo0.js";import{D as d}from"./Divider-kYvIQ_cX.js";import{T as l}from"./Tag-C7L9i__0.js";import"./iframe-CpJAaDcU.js";import"./index-CxmYaGqE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Icon-CMDYjoHI.js";import"./IconConfig-DO2Dck3c.js";function a(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs / Accessibility Decisions"}),`
`,e.jsx(o,{children:e.jsxs(s,{direction:"column",gap:"16",children:[e.jsx(n.h1,{id:"accessibility-decisions",children:"Accessibility Decisions"}),e.jsx(n.p,{children:`This page captures explicit accessibility decisions for the design system.
Add entries as decisions are made so behavior stays consistent across
components.`}),e.jsx(d,{weight:"thick",color:"border.disabled",my:"24"}),e.jsxs(s,{direction:"column",gap:"0",children:[e.jsx(n.h2,{id:"disabled-state",children:"Disabled State"}),e.jsx(l,{hue:"blue",children:"2026-03-06"})]}),e.jsx(n.h3,{id:"decision",children:"Decision"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use native ",e.jsx(n.code,{children:"disabled"})," for native form controls (for example, ",e.jsx(n.code,{children:"button"}),", ",e.jsx(n.code,{children:"input"}),") so browsers provide real disabled semantics automatically."]}),`
`,e.jsxs(n.li,{children:["For anchors rendered as button-like controls, do not use a native ",e.jsx(n.code,{children:"disabled"})," attribute (invalid on anchors). Use ",e.jsx(n.code,{children:"aria-disabled"})," and block activation in event handlers."]}),`
`,e.jsxs(n.li,{children:["Do not set ",e.jsx(n.code,{children:"tabIndex={-1}"})," by default on disabled anchors."]}),`
`,e.jsx(n.li,{children:"Reasoning: keeping them in tab order preserves discoverability for keyboard and screen-reader users, who can still learn that a control exists and is currently unavailable."}),`
`,e.jsx(n.li,{children:"If a product flow needs fully inert behavior, that should be an explicit, documented exception at the component or usage level."}),`
`]}),e.jsx(n.h3,{id:"implementation-guidance",children:"Implementation Guidance"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Native button path: apply ",e.jsx(n.code,{children:"disabled"})," (and optionally ",e.jsx(n.code,{children:"aria-disabled"})," for consistent state signaling)."]}),`
`,e.jsxs(n.li,{children:["Anchor path: apply ",e.jsx(n.code,{children:"aria-disabled"})," and guard against activation in click/keyboard behavior."]}),`
`,e.jsx(n.li,{children:"Keep rendered structure simple; branch element-specific props with typed object spreads to preserve readability and TypeScript safety."}),`
`]}),e.jsx(n.h3,{id:"examples",children:"Examples"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// 1) Native control: real disabled semantics
<Box as="button" type="button" disabled={disabled} aria-disabled={disabled}>
  Save
</Box>
`})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// 2) Anchor rendered as a button-like control
// Keep it focusable; expose disabled state via ARIA; block activation.
<Box
  as="a"
  href={href}
  aria-disabled={disabled}
  onClick={(event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }}
>
  View details
</Box>
`})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// 3) One JSX structure with typed branch props
const elementProps = href
  ? ({
      as: 'a',
      href,
      aria-disabled: disabled,
      ...(disabled && {
        onClick: (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
      }),
    } satisfies BoxProps<'a'>)
  : ({
      as: 'button',
      type: 'button',
      disabled,
      aria-disabled: disabled,
    } satisfies BoxProps<'button'>);

return (
  <Box {...elementProps} className={className}>
    Action
  </Box>
);
`})})]})})]})}function w(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{w as default};
