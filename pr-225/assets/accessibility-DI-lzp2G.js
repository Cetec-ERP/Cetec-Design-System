import{u as t,j as e,M as d,U as l,F as i}from"./iframe-BWZZmoTh.js";import{D as r}from"./Divider-BnThC4_E.js";import{T as o}from"./Tag-uFS-RkS_.js";import"./preload-helper-B5DXRnm6.js";function a(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Docs / Accessibility Decisions"}),`
`,e.jsx(l,{children:e.jsxs(i,{direction:"column",gap:"16",children:[e.jsx(n.h1,{id:"accessibility-decisions",children:"Accessibility Decisions"}),e.jsx(n.p,{children:`This page captures explicit accessibility decisions for the design system.
Add entries as decisions are made so behavior stays consistent across
components.`}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsxs(i,{direction:"column",gap:"0",children:[e.jsx(n.h2,{id:"disabled-state",children:"Disabled State"}),e.jsx(o,{hue:"blue",children:"2026-03-06"})]}),e.jsx(n.h3,{id:"decision",children:"Decision"}),e.jsxs(n.ul,{children:[`
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
`})})]})})]})}function b(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{b as default};
