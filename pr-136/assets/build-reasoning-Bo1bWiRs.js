import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o}from"./index-CKJ0nPni.js";import{M as d,U as c}from"./index-Dhdx8K7X.js";import"./index-BCtMShv3.js";import{F as l,G as a}from"./Box-Do4kfhe3.js";import{D as i}from"./Divider-0-CNNm0O.js";import{T as t}from"./Text-DeSZ72bP.js";import"./iframe-B31RPp_G.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(n){const s={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Guides / Build Reasoning"}),`
`,e.jsx(c,{children:e.jsxs(l,{direction:"column",gap:"16",children:[e.jsx(s.h1,{id:"build-reasoning",children:"Build Reasoning"}),e.jsx(t,{textStyle:"body.lg",color:"text",maxW:"prose",children:"This document captures the final packaging and export decisions for the design system. It exists to keep future adjustments aligned with the current consumer compatibility goals and build outcomes."}),e.jsx(i,{weight:"thick",color:"border",mb:"32"}),e.jsx(s.h3,{id:"decisions",children:"Decisions"}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Keep the public export surface minimal to avoid confusion for consumers"}),`
`,e.jsxs(s.li,{children:["Ensure ",e.jsx(s.code,{children:"dist"})," bundles include the preset and the index entry points at the root."]}),`
`,e.jsxs(s.li,{children:["Separate the ",e.jsx(s.code,{children:"staticCss"})," output from the component build so consumers can import only what they need. These declarations are currently only used for Storybook, are not needed for production, and were adding ~2.4mb of weight to our generated styles when built as a single CSS file."]}),`
`,e.jsx(s.li,{children:"Generate consumable CSS files that can be used for non-React environments, and generate helpers that can be used by consuming apps as needed."}),`
`]}),e.jsx(s.h3,{id:"recent-changes-jan-2026",children:"Recent changes Jan 2026"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Added ",e.jsx(s.code,{children:"PANDA_STATIC"})," flag to control static CSS generation."]}),`
`,e.jsx(s.li,{children:"Updated scripts in package.json"}),`
`,e.jsxs(s.li,{children:["Moved ",e.jsx(s.code,{children:"cetec-preset.ts"})," --> ",e.jsx(s.code,{children:"src/cetec-preset.ts"})," to keep the preset alongside other source exports and align Vite entry resolution."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/index.ts"})," updated to re-export the relocated preset and keep the public export surface stable for consumers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/types/panda-augment.ts"})," added to extend Panda type generation without leaking ",e.jsx(s.code,{children:"@pandacss/types"})," into consumer projects."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/types/panda-shim.ts"})," added as a minimal shim to stabilize type identity across build and consumer environments."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src/types/index.d.ts"})," template file is copied to ",e.jsx(s.code,{children:"dist/index.d.ts"})," to provide type declarations entry point for consumers."]}),`
`,e.jsxs(s.li,{children:["We export ",e.jsx(s.code,{children:"cetecPreset"})," as ",e.jsx(s.code,{children:"any"})," to avoid Panda type identity conflicts in Astro"]}),`
`]}),e.jsx(s.h3,{id:"distribution-output",children:"Distribution Output"}),e.jsxs(s.p,{children:["The expected ",e.jsx(s.code,{children:"dist"})," shape includes the compiled bundle, generated type declarations, and a packaged preset entry so consumers can import from a single surface."]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`dist/
├── index.js            // primary entry point
├── index.d.ts          // types entry point
├── preset.js           // our packaged preset exported as 'cetecPreset'
│
├── styles.css          // barrel index for CSS files
├── styles/             // consumable CSS files for non-React environments
│   ├── recipes/        // CSS file for each component recipe
│   ├── recipes.css     // barrel index for component recipes
│   ├── global.css      // global styles for the design system
│   ├── reset.css       // generated, but unused
│   ├── tokens.css      // CSS variables for all tokens
│   └── utilities.css   // utility classes for common styles
│
├── cetec-logo.svg      // logo file
├── sprite.svg          // SVG sprite containing all icons
├── sprite.symbol.html  // HTML page to easily view available icons (consumes sprite.svg)
├── svgs/               // directory containing individual SVG files
│
├── types/
│   ├── index.d.ts      // packaged types for the design system
│   └── preset.d.ts     // preset-specific types
│
├── specs/              // generated json spec files for our theme
├── .mcp.json           // entrypoint to expose our design system to AI tools
├── index.js.map        // source map for index.js
└── preset.js.map       // source map for preset.js
`})}),e.jsx(s.h3,{id:"explanation-of-updated-npm-scripts",children:"Explanation of updated NPM scripts"}),e.jsxs(a,{gridTemplateColumns:"auto 1fr",gap:"2",mb:"32",rounded:"16",overflow:"hidden",className:"definitions-grid",children:[e.jsx(t,{as:"p",gridColumn:"1 / -1",textStyle:"mono.lg",color:"text",children:"npm run build"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(s.code,{children:"rm -rf dist"})})}),e.jsx(s.p,{children:"Clear the dist folder before building"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(s.code,{children:"&& PANDA_STATIC=true"})})}),e.jsxs(s.p,{children:["Custom flag consumed in ",e.jsx(s.code,{children:"panda.config.ts"})," lets us selectively include the ",e.jsx(s.code,{children:"staticCss"})," in build scripts"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(s.code,{children:"&& npx panda codegen"})})}),e.jsx(s.p,{children:"Generates typescript component styles"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(s.code,{children:"&& npx panda cssgen --splitting"})})}),e.jsx(s.p,{children:"Generates folder of separate CSS files"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(s.code,{children:"&& npx panda spec"})})}),e.jsx(s.p,{children:"Generates a json spec that describes the structure of the design system"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(s.code,{children:"&& npx panda init-mcp --client claude"})})}),e.jsx(s.p,{children:"Generates an file that tells AI agents how to use the panda mcp"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(s.code,{children:"&& vite build"})})}),e.jsxs(s.p,{children:["General build, now also copies the new files above into ",e.jsx(s.code,{children:"./dist"})]}),e.jsx(i,{weight:"medium",color:"transparent",gridColumn:"1 / -1"}),e.jsx(t,{as:"p",gridColumn:"1 / -1",textStyle:"mono.lg",color:"text",children:"npm run panda-mcp"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:e.jsx(s.code,{children:"npx panda mcp"})})}),e.jsx(s.p,{children:"Starts the MCP (Model Context Protocol) server for AI assistants, exposing the design system to AI tools."})]})]})})]})}function v(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{v as default};
