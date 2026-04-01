import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as h}from"./index-CV7WMg7l.js";import{M as x,U as p}from"./index-DacfKXfH.js";import"./index-BKyFwriW.js";import{V as j,B as n,G as o}from"./Box-B-dS-qo0.js";import{C as r}from"./Card-DQHmbzpq.js";import{D as t}from"./Divider-kYvIQ_cX.js";import{H as l}from"./Heading-EacOxlfa.js";import{L as d}from"./Link-CWoYvXdD.js";import{T as s}from"./Text-BlqN2xhk.js";import"./iframe-DoP6wlgM.js";import"./index-CxmYaGqE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Icon-CMDYjoHI.js";function a(c){const i={code:"code",h1:"h1",p:"p",pre:"pre",...h(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Docs / Floating UI Architecture"}),`
`,e.jsx(p,{children:e.jsxs(j,{alignItems:"stretch",gap:"16",children:[e.jsx(i.h1,{id:"floating-ui-architecture",children:"Floating UI Architecture"}),e.jsx(s,{maxW:"prose",children:e.jsx(i.p,{children:`This guide explains how floating behavior is shared across the design
system while preserving pattern-correct semantics for Menu, pickers,
Tooltip, and Modal.`})}),e.jsx(t,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(l,{level:"h3",children:"Why this exists"}),e.jsxs(n,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Reduce repeated floating logic across components."})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Keep interaction semantics accessible and pattern-correct."})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Provide predictable primitives for future floating components."})})]}),e.jsx(t,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(l,{level:"h3",children:"Architecture diagram"}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-text",children:`+-----------------------------------------------------------+
| system/floating-ui                                        |
| useOverlayFloating + createOverlayMiddleware              |
+-----------------------------+-----------------------------+
                              |
                +-------------+-------------+
                |             |             |
                v             v             v
  +-----------------+ +-----------------+ +-----------------+
  |   Menu Engine   | |   Picker UIs    | |  Tooltip/Modal  |
  | Menu/SubMenu    | | Date/Time       | | overlays        |
  | MenuItem        | | pickers         | |                 |
  +--------+--------+ +--------+--------+ +--------+--------+
           ^                   ^
           |                   |
  +--------+-------------------+--------------------+
  | List Engine                                     |
  | List + ListItem + ListItemGroup + HighlightText |
  +-------------------------------------------------+

  +---------------------------+  +---------------------------+
  | system/context            |  | system/hooks              |
  | ThemeProvider + useTheme  |  | useMediaQuery +           |
  |                           |  | useContainerQuery         |
  +-------------+-------------+  +-------------+-------------+
                |                              |
                v                              v
         Menu + Picker UIs              Modal responsiveness
`})}),e.jsx(t,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(l,{level:"h3",children:"Core layers and responsibilities"}),e.jsxs(o,{columns:{base:1,md:2},gap:"12",children:[e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Floating primitives"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(i.p,{children:[e.jsx("code",{children:"src/system/floating-ui/floating.ts"}),` centralizes
`,e.jsx("code",{children:"useFloating"})," wiring and middleware defaults."]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Global context"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(i.p,{children:[e.jsx("code",{children:"src/system/context/"}),` owns theme provider state and DOM
sync via `,e.jsx("code",{children:"ThemeProvider"})," and ",e.jsx("code",{children:"useTheme"}),"."]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Global responsive hooks"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(i.p,{children:[e.jsx("code",{children:"src/system/hooks/"}),` exposes token-aware media/container
query hooks.`]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Menu engine context"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(i.p,{children:[e.jsx("code",{children:"src/components/Menu/context/menuContext.ts"}),` controls menu
filtering, item matching, and list interaction state.`]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Shared row primitives"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(i.p,{children:[e.jsx("code",{children:"src/components/List/"}),` provides
`,e.jsx("code",{children:"List"}),", ",e.jsx("code",{children:"ListItem"}),`,
`,e.jsx("code",{children:"ListItemGroup"}),", and ",e.jsx("code",{children:"HighlightText"}),"."]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Optional Menu provider"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(i.p,{children:[e.jsx("code",{children:"src/components/Menu/MenuProvider.tsx"}),` supports advanced
composition when menu context is needed without mounting full
`,e.jsx("code",{children:"<Menu />"}),"."]})})]})]}),e.jsx(t,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(l,{level:"h3",children:"Semantics boundaries"}),e.jsx(s,{maxW:"prose",children:"Share mechanics, not semantics:"}),e.jsxs(n,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsx(i.p,{children:`Menu semantics stay in Menu components (menu roles, close-on-select,
submenu behavior, tree events).`})})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsx(i.p,{children:`List semantics stay in List components (option-like rows, selected
visuals, grouped rows).`})})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsx(i.p,{children:"Date and time pickers preserve picker-specific interaction semantics."})})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsx(i.p,{children:"Tooltip and Modal preserve their own focus and ARIA behavior."})})})]}),e.jsx(t,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(l,{level:"h3",children:"Composition mapping"}),e.jsxs(o,{columns:{base:1,md:2},gap:"12",children:[e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Actions"}),e.jsxs(s,{size:"14",children:["Use ",e.jsx("code",{children:"Menu"})," + ",e.jsx("code",{children:"MenuItem"}),"."]})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Single-select lists"}),e.jsxs(s,{size:"14",children:["Use ",e.jsx("code",{children:"List"})," + ",e.jsx("code",{children:"ListItem"}),"."]})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Nested actions"}),e.jsx(s,{size:"14",children:e.jsxs(i.p,{children:["Use ",e.jsx("code",{children:"Menu"})," + ",e.jsx("code",{children:"SubMenu"}),` with hover or dig-in
interaction.`]})})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Autocomplete / filtering"}),e.jsx(s,{size:"14",children:e.jsxs(i.p,{children:["Use query state + ",e.jsx("code",{children:"HighlightText"}),` integration in row
content.`]})})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Multi-select rows"}),e.jsx(s,{size:"14",children:e.jsxs(i.p,{children:["Use ",e.jsx("code",{children:"ListItem"}),` variant controls
(`,e.jsx("code",{children:"checkbox"})," or ",e.jsx("code",{children:"toggle"}),")."]})})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Date and time pickers"}),e.jsx(s,{size:"14",children:e.jsx(i.p,{children:"Use picker components backed by shared floating primitives."})})]})]}),e.jsx(t,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(l,{level:"h3",children:"Construction examples"}),e.jsx(s,{weight:"bold",children:"List item with description and toggle"}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<ListItem
  label="Clock in/out"
  description="Track work session"
  variant="toggle"
  selected={isEnabled}
  onClick={toggleItem}
  onControlChange={handleToggleChange}
/>
`})}),e.jsx(s,{weight:"bold",children:"Menu item with shared row styling"}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MenuItem
  label="Export"
  description="Download as CSV"
  iconBefore="download"
/>
`})}),e.jsx(t,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(l,{level:"h3",children:"File map"}),e.jsxs(n,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["Floating UI core: ",e.jsx("code",{children:"src/system/floating-ui/floating.ts"})]})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["Global context layer: ",e.jsx("code",{children:"src/system/context/"})]})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["Global hook layer: ",e.jsx("code",{children:"src/system/hooks/"})]})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["Menu context layer: ",e.jsx("code",{children:"src/components/Menu/context/menuContext.ts"})]})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["List primitives: ",e.jsx("code",{children:"src/components/List/"})]})})]}),e.jsx(t,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(l,{level:"h3",children:"Contributor notes"}),e.jsxs(n,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Start new floating components from shared overlay primitives."})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Prefer List primitives for option-like rows and grouped item layouts."})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Keep semantics separate even when visuals are shared."})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsxs(i.p,{children:[`If behavior is shared across multiple families, place it in
`,e.jsx("code",{children:"src/system/"}),"."]})})})]}),e.jsxs(n,{display:"grid",gap:"4",children:[e.jsx(d,{href:"/?path=/docs/docs-panda-patterns--docs",children:"Panda Patterns"}),e.jsx(d,{href:"/?path=/docs/docs-component-standards--docs",children:"Component Standards"}),e.jsx(d,{href:"/?path=/docs/docs-build-reasoning--docs",children:"Build Reasoning"})]})]})})]})}function D(c={}){const{wrapper:i}={...h(),...c.components};return i?e.jsx(i,{...c,children:e.jsx(a,{...c})}):a(c)}export{D as default};
