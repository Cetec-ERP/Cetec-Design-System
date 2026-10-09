import{u as a,j as e,M as c,U as h,V as x,T as o}from"./iframe-CRR58YI_.js";import{C as t}from"./Card-BsIMX0Ht.js";import{C as s}from"./Code-CrRjEXJ6.js";import{C as r}from"./CodeBlock-CByan0GT.js";import{D as l}from"./Divider-DqaCwkJg.js";import"./preload-helper-De6kpJMI.js";import"./IconButton-zahHbzSg.js";import"./Spinner-BwYG2ZPB.js";import"./FieldContext-QFlrTQOk.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-OVa5QkyD.js";function d(i){const n={h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs / Code and Code Blocks"}),`
`,e.jsx(h,{children:e.jsxs(x,{alignItems:"stretch",gap:"16",maxW:"3xl",children:[e.jsx(n.h1,{id:"code-and-code-blocks",children:"Code and Code Blocks"}),e.jsx(n.p,{children:`The design system has two components for code and machine values, and one
hook for copying text.`}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"Code"})," marks a short value inside a sentence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"CodeBlock"})," shows multi-line code or output, with a copy button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"useClipboard"}),` copies text and reports a short-lived
`,e.jsx(s,{children:"copied"})," state."]}),`
`]}),e.jsx(n.p,{children:"Neither component highlights syntax yet."}),e.jsx(l,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(n.h3,{id:"which-one-to-use",children:"Which one to use"}),e.jsxs(t,{p:"12",variant:"sunken",children:[e.jsx(o,{weight:"bold",children:"Code"}),e.jsx(o,{size:"14",children:e.jsxs(n.p,{children:[`Use it for a field name, a config key, a command, or an ID inside a
sentence: `,e.jsx(s,{children:"preshared_token"}),`. It renders a native
`,e.jsx(s,{children:"code"}),` element, follows the size of the surrounding text, and
wraps long values. Use `,e.jsx(s,{variant:"plain",children:'variant="plain"'}),` for
part numbers in a dense table.`]})})]}),e.jsxs(t,{p:"12",variant:"sunken",children:[e.jsx(o,{weight:"bold",children:"CodeBlock"}),e.jsx(o,{size:"14",children:e.jsxs(n.p,{children:[`Use it for anything with line breaks: a JSON payload, a SQL query, a
log, a setup snippet. It renders native `,e.jsx(s,{children:"pre"}),` and
`,e.jsx(s,{children:"code"})," elements and copies the plain text."]})})]}),e.jsx(r,{title:"Submit request",language:"json",code:`{
  "invoice": 104233,
  "status": "submitted"
}`}),e.jsxs(t,{p:"12",variant:"sunken",children:[e.jsx(o,{weight:"bold",children:"Kbd"}),e.jsx(o,{size:"14",children:e.jsxs(n.p,{children:["Use ",e.jsx(s,{children:"Kbd"}),", not ",e.jsx(s,{children:"Code"}),", for keyboard shortcuts."]})})]}),e.jsx(l,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(n.h3,{id:"codeblock-options",children:"CodeBlock options"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Long lines"})," scroll horizontally by default. Set ",e.jsx(s,{children:"wrap"}),` for
logs and email bodies.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Long output"})," collapses with ",e.jsx(s,{children:"maxLines"}),`. A "Show all N lines"
button expands it. Control it with `,e.jsx(s,{children:"expanded"}),` and
`,e.jsx(s,{children:"onExpandedChange"}),", or set ",e.jsx(s,{children:"defaultExpanded"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A title"})," (",e.jsx(s,{children:"title"}),") adds a header bar for a file name or label."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Line numbers"})," (",e.jsx(s,{children:"lineNumbers"}),`, or
`,e.jsx(s,{children:"lineNumbers={{ start: 98 }}"}),`) are never copied and are
hidden from screen readers.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tone"}),": ",e.jsx(s,{children:"default"}),` is a sunken panel.
`,e.jsx(s,{children:"inverse"}),` uses the inverse surface; it is dark in the light
theme and light in the dark theme.`]}),`
`]}),e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`When the content overflows, the scroll area becomes a focusable region
named "`,"{title or language}",` code block", so keyboard users can scroll
it. A block that fits gets no extra tab stop.`]}),`
`,e.jsx(n.li,{children:`The copy button announces "Copied" (or "Copy failed") through a polite
live region.`}),`
`,e.jsxs(n.li,{children:['The "Show all" button sets ',e.jsx(s,{children:"aria-expanded"}),` and
`,e.jsx(s,{children:"aria-controls"}),"."]}),`
`]}),e.jsx(n.h3,{id:"copying-outside-a-codeblock",children:"Copying outside a CodeBlock"}),e.jsxs(n.p,{children:["Use ",e.jsx(s,{children:"useClipboard"}),` to add a copy action to a single value, such
as a one-time secret. It needs a secure context (HTTPS or localhost). It
does not announce the result; pair `,e.jsx(s,{children:"copied"}),` with visible feedback
and a live region.`]}),e.jsx(r,{language:"tsx",code:`const { copy, copied } = useClipboard({ timeout: 2000 });

<Button onClick={() => copy(secret)}>
{copied ? 'Copied' : 'Copy secret'}
</Button>`})]})})]})}function w(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{w as default};
