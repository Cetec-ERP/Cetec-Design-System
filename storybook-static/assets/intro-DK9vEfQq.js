import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DwOlTBOG.js";import{M as r}from"./index-Cx8nhY4N.js";import"./Box-DSw7gtY6.js";import{T as s}from"./Text-B9OVYQZt.js";/* empty css                     */import"./index-2yJIXLcc.js";import"./iframe-AQ6KMJdq.js";import"./index-Bn05qqr6.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(i){const n={h1:"h1",h2:"h2",li:"li",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Intro"}),`
`,e.jsx(n.h1,{id:"cetec-erp-design-system",children:"Cetec-ERP Design System"}),`
`,e.jsx(n.h2,{id:"general-info",children:"General Info"}),`
`,e.jsx(s,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"currently on 8.5.5"}),`
`,e.jsx(n.li,{children:"story files live alongside components"}),`
`,e.jsx(n.li,{children:"Can use React hooks as “advanced” cases, but recommend args"}),`
`,e.jsx(n.li,{children:"May not be possible to have Docs in “tab” instead of side-nav since SB7"}),`
`]})}),`
`,e.jsx(n.h2,{id:"using-this-storybook",children:"Using This Storybook"}),`
`,e.jsx(n.h2,{id:"formatting-story-files",children:"Formatting Story Files"}),`
`,e.jsx(s,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["export default",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Describes the Component"}),`
`,e.jsx(n.li,{children:"title: the story “folder” title"}),`
`,e.jsx(n.li,{children:"component: from the imported component, what will be in the story"}),`
`,e.jsx(n.li,{children:"export variable NAME where NAME == story inside of folder"}),`
`,e.jsx(n.li,{children:"component proptypes = docs argos"}),`
`,e.jsx(n.li,{children:"agrTypes will allow SB to deal with custom event props (e.g. “handleClick” instead of “onClick”)"}),`
`,e.jsx(n.li,{children:'Use “ tags: ["autodocs"],” to generate documentation'}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Named Export",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Describes the individual story/ies"}),`
`,e.jsx(n.li,{children:"Will show in sidebar as Function name, but could also use “name” arg to rename, useful for special chars or restricted JS words"}),`
`,e.jsx(n.li,{children:"Can build stories using other stories: https://storybook.js.org/docs/writing-stories#how-to-write-stories"}),`
`]}),`
`]}),`
`]})})]})}function g(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};
