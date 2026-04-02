import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as o}from"./index-Df8yy7Vr.js";import{M as c,U as d}from"./index-8ZoiGWJH.js";import"./index-BKyFwriW.js";import{V as a}from"./Box-B-dS-qo0.js";import{C as p}from"./Card-DQHmbzpq.js";import{D as i}from"./Divider-kYvIQ_cX.js";import"./Heading-EacOxlfa.js";import{T as t}from"./Text-BlqN2xhk.js";import"./iframe-BYvDCdYq.js";import"./index-CxmYaGqE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function n(s){const r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs / Icon Sprite Integration"}),`
`,e.jsx(d,{children:e.jsxs(a,{alignItems:"stretch",gap:"16",children:[e.jsx(r.h1,{id:"icon-sprite-integration",children:"Icon Sprite Integration"}),e.jsxs(r.p,{children:["The design system ships a ",e.jsx("code",{children:"sprite.svg"}),` file. Consumers must
provide a path to that file, or inline it into the page, so
`,e.jsx("code",{children:"<Icon />"})," can resolve symbol references correctly."]}),e.jsxs(r.p,{children:[e.jsx("mark",{children:"Note:"})," Publishing ",e.jsx("code",{children:"dist/sprite.svg"}),` to npm makes the file available,
but your app still needs to expose it at a hosted browser URL.`]}),e.jsx(i,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(r.h3,{id:"recommended-integration-patterns",children:"Recommended integration patterns"}),e.jsxs(p,{p:"12",variant:"sunken",children:[e.jsx(t,{weight:"bold",children:"External sprite"}),e.jsx(t,{size:"14",children:e.jsxs(r.p,{children:["Expose ",e.jsx("code",{children:"sprite.svg"}),` at a stable same-origin URL and wrap
your app with `,e.jsx("code",{children:"IconProvider spritePath"}),"."]})})]}),e.jsx(i,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(r.h3,{id:"astro-site",children:"Astro site"}),e.jsx(r.p,{children:`Best practice: import the sprite from the package and let Astro include it
with your site assets. This avoids separate CDN calls and keeps base-path
handling in your static build pipeline.`}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { IconProvider, ThemeProvider } from 'cetec-design-system';
import spriteUrl from 'cetec-design-system/sprite.svg';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <IconProvider spritePath={spriteUrl}>{children}</IconProvider>
    </ThemeProvider>
  );
}
`})}),e.jsxs(r.p,{children:[e.jsx("mark",{children:"Note:"}),` If your Astro config requires explicit asset URL imports, use
`,e.jsx("code",{children:"cetec-design-system/sprite.svg?url"})," instead."]}),e.jsx(i,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(r.h3,{id:"cetec-app-go--react--esbuild",children:"Cetec app (Go + React + esbuild)"}),e.jsxs(r.p,{children:["Best practice: copy ",e.jsx("code",{children:"sprite.svg"}),` into a known static location
during build/deploy and use that fixed path.`]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { IconProvider, ThemeProvider } from 'cetec-design-system';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <IconProvider spritePath="/assets/vendor/cetec/sprite.svg">
        {children}
      </IconProvider>
    </ThemeProvider>
  );
}
`})}),e.jsxs(r.p,{children:["Example ",e.jsx("code",{children:"esbuild"}),` script to copy the sprite from
`,e.jsx("code",{children:"node_modules"})," into your app static assets:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { build } from 'esbuild';
import { cpSync, mkdirSync } from 'node:fs';

mkdirSync('public/assets/vendor/cetec', { recursive: true });
cpSync(
  'node_modules/cetec-design-system/dist/sprite.svg',
  'public/assets/vendor/cetec/sprite.svg',
);

await build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outdir: 'public/assets/app',
});
`})}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx("code",{children:"spritePath"})," should be a URL your browser can request at runtime."]}),`
`,e.jsx(r.li,{children:`Keep sprite assets same-origin when possible for simpler deployment and
fewer CORS surprises.`}),`
`,e.jsx(r.li,{children:`For static-site pipelines, prefer bundling/copying sprite with the
rest of your deployed assets.`}),`
`]})]})})]})}function R(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{R as default};
