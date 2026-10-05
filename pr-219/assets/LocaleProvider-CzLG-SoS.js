import{r as o}from"./index-BKyFwriW.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{L as r}from"./useLocale-A-vaza79.js";o.createContext(void 0);function i({locale:n,labels:t,children:s}){const e=o.useContext(r),a=o.useMemo(()=>({locale:n??e.locale,labels:t?{...e.labels,...t}:e.labels}),[n,t,e]);return l.jsx(r.Provider,{value:a,children:s})}i.__docgenInfo={description:`Provides the locale and built-in labels to design-system components.

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
\`\`\``,methods:[],displayName:"LocaleProvider",props:{locale:{required:!1,tsType:{name:"string"},description:"BCP 47 locale tag, such as `en-US` or `fr-FR`, for `Intl` formatting in\ndate components. Defaults to the parent provider's locale, then `en-US`."},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"LocaleLabels"}],raw:"Partial<LocaleLabels>"},description:`Translated built-in labels. An entry left out keeps the parent provider's
value, then the English default.`},children:{required:!0,tsType:{name:"ReactNode"},description:"Content that reads the locale and labels."}}};export{i as L};
