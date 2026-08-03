import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BKyFwriW.js";import{d as s,a as i}from"./Icon-D9m5LQ6b.js";const a=({children:t,spritePath:e})=>{const o=r.useMemo(()=>({spritePath:e??s.spritePath}),[e]);return n.jsx(i.Provider,{value:o,children:t})};a.__docgenInfo={description:`Configures the SVG sprite used by descendant {@link Icon} components.

Use it at an application or embedded-library boundary when the default
\`/sprite.svg\` location is not available. Nested providers override the
sprite path for their own descendants.

@example
\`\`\`tsx
<IconProvider spritePath="/assets/icons.svg">
  <App />
</IconProvider>
\`\`\``,methods:[],displayName:"IconProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Components that should resolve sprite symbols from this provider."},spritePath:{required:!1,tsType:{name:"string"},description:`URL or path to the SVG sprite file. This provider value applies to all
descendant \`Icon\` components.

@default '/sprite.svg'`}}};export{a as I};
