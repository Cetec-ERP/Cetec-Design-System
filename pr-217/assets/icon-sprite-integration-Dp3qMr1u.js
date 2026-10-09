import{u as o,j as e,M as c,U as d,V as a,T as n}from"./iframe-CBV8VWL6.js";import{C as l}from"./Card-DFP60goW.js";import{D as i}from"./Divider-C3CTz_Aq.js";import"./Heading-HvBbfBnB.js";import"./preload-helper-C7uIy2vd.js";function t(r){const s={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs / Icon Sprite Integration"}),`
`,e.jsx(d,{children:e.jsxs(a,{alignItems:"stretch",gap:"16",children:[e.jsx(s.h1,{id:"icon-sprite-integration",children:"Icon Sprite Integration"}),e.jsxs(s.p,{children:["The design system ships a ",e.jsx("code",{children:"sprite.svg"}),` file. Consumers must
provide a path to that file, or inline it into the page, so
`,e.jsx("code",{children:"<Icon />"})," can resolve symbol references correctly."]}),e.jsxs(s.p,{children:[e.jsx("mark",{children:"Note:"})," Publishing ",e.jsx("code",{children:"dist/sprite.svg"}),` to npm makes the file available,
but your app still needs to expose it at a hosted browser URL.`]}),e.jsx(i,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(s.h3,{id:"recommended-integration-patterns",children:"Recommended integration patterns"}),e.jsxs(l,{p:"12",variant:"sunken",children:[e.jsx(n,{weight:"bold",children:"External sprite"}),e.jsx(n,{size:"14",children:e.jsxs(s.p,{children:["Expose ",e.jsx("code",{children:"sprite.svg"}),` at a stable same-origin URL and wrap
your app with `,e.jsx("code",{children:"IconProvider spritePath"}),"."]})})]}),e.jsx(i,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(s.h3,{id:"astro-site",children:"Astro site"}),e.jsx(s.p,{children:`Best practice: import the sprite from the package and let Astro include it
with your site assets. This avoids separate CDN calls and keeps base-path
handling in your static build pipeline.`}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { IconProvider, ThemeProvider } from 'cetec-design-system';
import spriteUrl from 'cetec-design-system/sprite.svg';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <IconProvider spritePath={spriteUrl}>{children}</IconProvider>
    </ThemeProvider>
  );
}
`})}),e.jsxs(s.p,{children:[e.jsx("mark",{children:"Note:"}),` If your Astro config requires explicit asset URL imports, use
`,e.jsx("code",{children:"cetec-design-system/sprite.svg?url"})," instead."]}),e.jsx(i,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(s.h3,{id:"cetec-app-go--react--esbuild",children:"Cetec app (Go + React + esbuild)"}),e.jsxs(s.p,{children:["Best practice: copy ",e.jsx("code",{children:"sprite.svg"}),` into a known static location
during build/deploy and use that fixed path.`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { IconProvider, ThemeProvider } from 'cetec-design-system';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <IconProvider spritePath="/assets/vendor/cetec/sprite.svg">
        {children}
      </IconProvider>
    </ThemeProvider>
  );
}
`})}),e.jsxs(s.p,{children:["Example ",e.jsx("code",{children:"esbuild"}),` script to copy the sprite from
`,e.jsx("code",{children:"node_modules"})," into your app static assets:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { build } from 'esbuild';
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
`})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx("code",{children:"spritePath"})," should be a URL your browser can request at runtime."]}),`
`,e.jsx(s.li,{children:`Keep sprite assets same-origin when possible for simpler deployment and
fewer CORS surprises.`}),`
`,e.jsx(s.li,{children:`For static-site pipelines, prefer bundling/copying sprite with the
rest of your deployed assets.`}),`
`]})]})})]})}function j(r={}){const{wrapper:s}={...o(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
