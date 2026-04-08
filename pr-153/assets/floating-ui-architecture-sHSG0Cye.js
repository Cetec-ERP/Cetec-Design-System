import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as h}from"./index-F1p8376U.js";import{M as x,U as p}from"./index-vCdnsiYB.js";import"./index-BKyFwriW.js";import{V as j,B as i,G as d}from"./Box-B-dS-qo0.js";import{C as r}from"./Card-DQHmbzpq.js";import{D as o}from"./Divider-kYvIQ_cX.js";import{H as t}from"./Heading-EacOxlfa.js";import{L as c}from"./Link-D0GEXeGO.js";import{T as s}from"./Text-BlqN2xhk.js";import"./iframe-we9i5Gej.js";import"./index-CxmYaGqE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Icon-6Bp-j8YQ.js";function a(l){const n={code:"code",h1:"h1",p:"p",pre:"pre",...h(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Docs / Floating UI Architecture"}),`
`,e.jsx(p,{children:e.jsxs(j,{alignItems:"stretch",gap:"16",children:[e.jsx(n.h1,{id:"floating-ui-architecture",children:"Floating UI Architecture"}),e.jsx(s,{maxW:"prose",children:e.jsx(n.p,{children:`This guide explains how floating behavior is shared across the design
system while preserving pattern-correct semantics for Menu, pickers,
Tooltip, and Modal.`})}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Why this exists"}),e.jsxs(i,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Reduce repeated floating logic across components."})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Keep interaction semantics accessible and pattern-correct."})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Provide predictable primitives for future floating components."})})]}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Architecture diagram"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`+-----------------------------------------------------------+
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
`})}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Core layers and responsibilities"}),e.jsxs(d,{columns:{base:1,md:2},gap:"12",children:[e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Floating primitives"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"src/system/floating-ui/floating.ts"}),` centralizes
`,e.jsx("code",{children:"useFloating"})," wiring and middleware defaults."]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Global context"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"src/system/context/"}),` owns theme provider state and DOM
sync via `,e.jsx("code",{children:"ThemeProvider"})," and ",e.jsx("code",{children:"useTheme"}),"."]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Global responsive hooks"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"src/system/hooks/"}),` exposes token-aware media/container
query hooks.`]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Menu engine context"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"src/components/Menu/context/menuContext.ts"}),` controls menu
filtering, item matching, and list interaction state.`]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Shared row primitives"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"src/components/List/"}),` provides
`,e.jsx("code",{children:"List"}),", ",e.jsx("code",{children:"ListItem"}),`,
`,e.jsx("code",{children:"ListItemGroup"}),", and ",e.jsx("code",{children:"HighlightText"}),"."]})})]}),e.jsxs(r,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"Optional Menu provider"}),e.jsx(s,{size:"14",maxW:"prose",children:e.jsxs(n.p,{children:[e.jsx("code",{children:"src/components/Menu/MenuProvider.tsx"}),` supports advanced
composition when menu context is needed without mounting full
`,e.jsx("code",{children:"<Menu />"}),"."]})})]})]}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Menu hover, safe polygon, and touch"}),e.jsxs(s,{maxW:"prose",children:[e.jsxs(n.p,{children:["Floating UI’s"," "]}),e.jsx(s,{as:"span",weight:"bold",children:e.jsx(n.p,{children:"useHover"})})," ",e.jsxs(n.p,{children:["can use"," "]}),e.jsx(s,{as:"span",weight:"bold",children:e.jsx(n.p,{children:"safePolygon"})})," ",e.jsxs(n.p,{children:["as ",e.jsx("code",{children:"handleClose"}),` so the pointer can move from the anchor to the
floating menu along a “safe” corridor without the menu dismissing. With`," "]}),e.jsx(s,{as:"span",weight:"bold",children:e.jsx(n.p,{children:"blockPointerEvents: true"})}),e.jsxs(n.p,{children:[", the library may set ",e.jsx("code",{children:"document.body"})," to"," ",`
`,e.jsx("code",{children:"pointer-events: none"}),` and restore hits only on the active
reference and floating nodes (see`," "]}),e.jsx(c,{href:"https://github.com/floating-ui/floating-ui/issues/1722",target:"_blank",rel:"noreferrer noopener",children:e.jsx(n.p,{children:"floating-ui#1722"})}),e.jsxs(n.p,{children:["). That path is aimed at mouse travel; on touch and nested"," ",`
`,e.jsx("code",{children:"SubMenu"}),` flyouts it can prevent taps from reaching deep menu
rows or links.`]})]}),e.jsxs(s,{maxW:"prose",children:[e.jsxs(n.p,{children:["This design system passes"," "]}),e.jsx(s,{as:"span",weight:"bold",children:e.jsx(n.p,{children:"blockPointerEvents"})})," ",e.jsxs(n.p,{children:["only when the viewport has"," "]}),e.jsx(s,{as:"span",weight:"bold",children:e.jsx(n.p,{children:"no coarse pointer"})})," ",e.jsxs(n.p,{children:["(",e.jsx("code",{children:"(any-pointer: coarse)"})," is false), via"," ",`
`,e.jsx("code",{children:"useBlockPointerEventsForHoverPolygon"})," in"," ",`
`,e.jsx("code",{children:"src/components/Menu/hooks/useBlockPointerEventsForHoverPolygon.ts"}),`
. `,e.jsx("code",{children:"Menu"})," and ",e.jsx("code",{children:"SubMenu"})," both use it for"," ",`
`,e.jsx("code",{children:"safePolygon({ blockPointerEvents })"}),`. Hybrid devices
(touch + mouse) often report a coarse pointer; in those cases the global
body block stays off, and users rely on the polygon logic without that
extra layer.`]})]}),e.jsx(s,{maxW:"prose",children:e.jsx(n.p,{children:`Keyboard navigation (including nested menubar patterns) does not depend on
this pointer-events behavior; it is unchanged by this policy.`})}),e.jsxs(s,{maxW:"prose",size:"14",color:"text.muted",children:[e.jsxs(n.p,{children:["Manual check: Chrome DevTools → device toolbar (mobile preset) → open"," "]}),e.jsx(c,{href:"/?path=/story/components-menu--sub-menu-hover",children:e.jsx(n.p,{children:"Components / Menu → Sub Menu Hover"})}),e.jsxs(n.p,{children:[", open the menu, open ",e.jsx("strong",{children:"More actions"})," →"," ",`
`,e.jsx("strong",{children:"Advanced"}),", then tap ",e.jsx("strong",{children:"Audit log"})," or"," ",`
`,e.jsx("strong",{children:"Settings"}),". With emulation active,"," ",`
`,e.jsx("code",{children:"matchMedia('(any-pointer: coarse)').matches"})," should be"," ",`
`,e.jsx("code",{children:"true"})," in the console."]})]}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Semantics boundaries"}),e.jsx(s,{maxW:"prose",children:"Share mechanics, not semantics:"}),e.jsxs(i,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsx(n.p,{children:`Menu semantics stay in Menu components (menu roles, close-on-select,
submenu behavior, tree events).`})})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsx(n.p,{children:`List semantics stay in List components (option-like rows, selected
visuals, grouped rows).`})})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsx(n.p,{children:"Date and time pickers preserve picker-specific interaction semantics."})})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsx(n.p,{children:"Tooltip and Modal preserve their own focus and ARIA behavior."})})})]}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Composition mapping"}),e.jsxs(d,{columns:{base:1,md:2},gap:"12",children:[e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Actions"}),e.jsxs(s,{size:"14",children:["Use ",e.jsx("code",{children:"Menu"})," + ",e.jsx("code",{children:"MenuItem"}),"."]})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Single-select lists"}),e.jsxs(s,{size:"14",children:["Use ",e.jsx("code",{children:"List"})," + ",e.jsx("code",{children:"ListItem"}),"."]})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Nested actions"}),e.jsx(s,{size:"14",children:e.jsxs(n.p,{children:["Use ",e.jsx("code",{children:"Menu"})," + ",e.jsx("code",{children:"SubMenu"}),` with hover or dig-in
interaction. For touch-heavy UIs, `,e.jsx("code",{children:'subMenuInteraction="digin"'})," ",`
remains a supported pattern; hover flyouts use the safe-polygon policy
above on coarse pointers.`]})})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Autocomplete / filtering"}),e.jsx(s,{size:"14",children:e.jsxs(n.p,{children:["Use query state + ",e.jsx("code",{children:"HighlightText"}),` integration in row
content.`]})})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Multi-select rows"}),e.jsx(s,{size:"14",children:e.jsxs(n.p,{children:["Use ",e.jsx("code",{children:"ListItem"}),` variant controls
(`,e.jsx("code",{children:"checkbox"})," or ",e.jsx("code",{children:"toggle"}),")."]})})]}),e.jsxs(r,{p:"12",variant:"sunken",children:[e.jsx(s,{weight:"bold",children:"Date and time pickers"}),e.jsx(s,{size:"14",children:e.jsx(n.p,{children:"Use picker components backed by shared floating primitives."})})]})]}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Construction examples"}),e.jsx(s,{weight:"bold",children:"List item with description and toggle"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ListItem
  label="Clock in/out"
  description="Track work session"
  variant="toggle"
  selected={isEnabled}
  onClick={toggleItem}
  onControlChange={handleToggleChange}
/>
`})}),e.jsx(s,{weight:"bold",children:"Menu item with shared row styling"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MenuItem
  label="Export"
  description="Download as CSV"
  iconBefore="download"
/>
`})}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"File map"}),e.jsxs(i,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["Floating UI core: ",e.jsx("code",{children:"src/system/floating-ui/floating.ts"})]})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["Global context layer: ",e.jsx("code",{children:"src/system/context/"})]})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["Global hook layer: ",e.jsx("code",{children:"src/system/hooks/"})]})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["Menu context layer: ",e.jsx("code",{children:"src/components/Menu/context/menuContext.ts"})]})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsxs(n.p,{children:["Menu hover / safe polygon (touch vs mouse):"," ",`
`,e.jsx("code",{children:"src/components/Menu/hooks/useBlockPointerEventsForHoverPolygon.ts"})]})})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsxs(s,{children:["List primitives: ",e.jsx("code",{children:"src/components/List/"})]})})]}),e.jsx(o,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Contributor notes"}),e.jsxs(i,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Start new floating components from shared overlay primitives."})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Prefer List primitives for option-like rows and grouped item layouts."})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:"Keep semantics separate even when visuals are shared."})}),e.jsx(i,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsxs(n.p,{children:[`If behavior is shared across multiple families, place it in
`,e.jsx("code",{children:"src/system/"}),"."]})})})]}),e.jsxs(i,{display:"grid",gap:"4",children:[e.jsx(c,{href:"/?path=/docs/docs-top-nav-keyboard-ui--documentation",children:"Top Nav Keyboard UI"}),e.jsx(c,{href:"/?path=/docs/docs-panda-patterns--documentation",children:"Panda Patterns"}),e.jsx(c,{href:"/?path=/docs/docs-component-standards--documentation",children:"Component Standards"}),e.jsx(c,{href:"/?path=/docs/docs-build-reasoning--documentation",children:"Build Reasoning"})]})]})})]})}function W(l={}){const{wrapper:n}={...h(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(a,{...l})}):a(l)}export{W as default};
