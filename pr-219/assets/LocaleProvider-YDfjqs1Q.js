import{r,j as l}from"./iframe-CXsJ8nBA.js";import{L as s}from"./useLocale-viKyk6pi.js";r.createContext(void 0);function i(n,t){const o=Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0));return{...n,...o}}function d({locale:n,labels:t,children:o}){const e=r.useContext(s),a=r.useMemo(()=>({locale:n??e.locale,labels:t?i(e.labels,t):e.labels}),[n,t,e]);return l.jsx(s.Provider,{value:a,children:o})}d.__docgenInfo={description:`Provides the locale and built-in labels to design-system components.

The design system does not translate text. The app passes its own
translations through \`labels\`. A label prop on a component overrides the
provider. Text direction comes from \`<html dir>\`, not from this provider.
Providers can nest; an inner provider overrides only what it sets.

@example
\`\`\`tsx
<LocaleProvider
  locale="fr-FR"
  labels={{ closeDialog: t('ds.closeDialog'), noResults: t('ds.noResults') }}
>
  <App />
</LocaleProvider>
\`\`\``,methods:[],displayName:"LocaleProvider",props:{locale:{required:!1,tsType:{name:"string"},description:"BCP 47 locale tag, such as `en-US` or `fr-FR`, for `Intl` formatting in\ndate components. Defaults to the parent provider's locale, then `en-US`."},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"LocaleLabels"}],raw:"Partial<LocaleLabels>"},description:"Translated built-in labels. An entry left out, or set to `undefined`,\nkeeps the parent provider's value, then the English default."},children:{required:!0,tsType:{name:"ReactNode"},description:"Content that reads the locale and labels."}}};export{d as L};
