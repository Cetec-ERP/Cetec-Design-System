import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as d}from"./index-DEyiuDVE.js";import{M as g,U as y}from"./index-B68XZP2c.js";import"./index-BKyFwriW.js";import{B as n,V as a,G as b,H as f}from"./dsComponent-BG2jnRr7.js";import{C as h}from"./Calendar-DebmsQF4.js";import{C as x}from"./Card-By6i5iqs.js";import{D as r}from"./Divider-Dbp7vcYx.js";import{H as t}from"./Heading-CdoR-3Mh.js";import{L as v}from"./Link-BeoDHhHt.js";import{T as s}from"./Text-BPLBRPQ6.js";import{L as w}from"./LocaleProvider-Tomkxl_W.js";import{d as T}from"./useLocale-BTKG7dEv.js";import"./iframe-BVfxnfEQ.js";import"./index-CxmYaGqE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Button-Cr4bC5CG.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-Cv0iFqCV.js";import"./Tooltip-BEwLM_hx.js";const S={removeItem:["item","Widget"],switchToTheme:["nextTheme","dark"],addOption:["value","Widget"],optionSelected:["label","Widget"],optionCreated:["value","Widget"],optionRemoved:["label","Widget"],moreSelected:["count",3],chooseMonthIn:["year",2026],fieldHour:["field","Start time"],fieldMinute:["field","Start time"],fieldMeridiem:["field","Start time"]},L=()=>{const i={code:"code",...d()};return e.jsxs(n,{as:"table",w:"full",borderCollapse:"collapse",children:[e.jsx(n,{as:"thead",children:e.jsxs(n,{as:"tr",borderBottomWidth:"1",borderColor:"border",children:[e.jsx(n,{as:"th",textAlign:"start",py:"6",pe:"16",children:e.jsx(s,{weight:"bold",children:"Key"})}),e.jsx(n,{as:"th",textAlign:"start",py:"6",pe:"16",children:e.jsx(s,{weight:"bold",children:"English default"})}),e.jsx(n,{as:"th",textAlign:"start",py:"6",children:e.jsx(s,{weight:"bold",children:"Type"})})]})}),e.jsx(n,{as:"tbody",children:Object.entries(T).map(([l,o])=>{const c=typeof o=="function",[m,j]=S[l]??[],u=c?o(j):o;return e.jsxs(n,{as:"tr",borderBottomWidth:"1",borderColor:"border",children:[e.jsx(n,{as:"td",py:"6",pe:"16",children:e.jsx(i.code,{children:l})}),e.jsx(n,{as:"td",py:"6",pe:"16",children:e.jsx(s,{size:"14",children:u})}),e.jsx(n,{as:"td",py:"6",children:e.jsx(s,{size:"14",children:c?`(${m}) => string`:"string"})})]},l)})})]})};function p(i){const l={code:"code",h1:"h1",p:"p",pre:"pre",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Docs / Localization"}),`
`,`
`,`
`,e.jsx(y,{children:e.jsxs(a,{alignItems:"stretch",gap:"16",children:[e.jsx(l.h1,{id:"localization",children:"Localization"}),e.jsx(s,{maxW:"prose",children:e.jsx(l.p,{children:`This guide explains how an app translates the design system's built-in
text and gives its date components a locale. The design system does not
translate anything itself and does not depend on a translation library.`})}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Who owns what"}),e.jsxs(b,{columns:{base:1,md:2},gap:"12",children:[e.jsxs(x,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"The design system owns"}),e.jsxs(n,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{size:"14",children:"Its built-in text, with English defaults."})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{size:"14",children:e.jsxs(l.p,{children:["One provider, ",e.jsx("code",{children:"LocaleProvider"}),`, that takes a locale and
translated labels.`]})})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{size:"14",children:"Styling that uses logical properties."})})]})]}),e.jsxs(x,{variant:"sunken",p:"12",children:[e.jsx(s,{weight:"bold",children:"The app owns"}),e.jsxs(n,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{size:"14",children:"All product text and the translation files."})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{size:"14",children:"Choosing and saving each user's language."})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{size:"14",children:e.jsxs(l.p,{children:["Setting ",e.jsx("code",{children:"lang"})," and ",e.jsx("code",{children:"dir"}),` on the
`,e.jsx("code",{children:"<html>"})," element."]})})})]})]})]}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Set up the provider"}),e.jsx(s,{maxW:"prose",children:e.jsxs(l.p,{children:["Add one ",e.jsx("code",{children:"LocaleProvider"}),` near the app root. Pass the user's
locale and the translations you have. A label you leave out keeps its
English default, so you can translate in steps.`]})}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import { LocaleProvider } from 'cetec-design-system';
import { useTranslation } from 'react-i18next';

export function AppShell({ children }) {
  const { t, i18n } = useTranslation();

  return (
    <LocaleProvider
      locale={i18n.language} // for example "fr-FR"
      labels={{
        closeDialog: t('ds.closeDialog'),
        noResults: t('ds.noResults'),
        moreSelected: (count) => t('ds.moreSelected', { count }),
      }}
    >
      {children}
    </LocaleProvider>
  );
}
`})}),e.jsx(s,{maxW:"prose",children:e.jsxs(l.p,{children:["Without a provider, every component uses ",e.jsx("code",{children:"en-US"}),` and the
English defaults. Nothing breaks.`]})}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"How a label is chosen"}),e.jsx(s,{maxW:"prose",children:"Each component uses the first value it finds:"}),e.jsxs(n,{as:"ol",pl:"24",display:"grid",gap:"6",children:[e.jsx(n,{as:"li",listStyleType:"decimal",children:e.jsx(s,{children:e.jsxs(l.p,{children:[`A label prop on the component, such as
`,e.jsx("code",{children:'<Calendar label="Invoice date" />'}),"."]})})}),e.jsx(n,{as:"li",listStyleType:"decimal",children:e.jsxs(s,{children:["The nearest ",e.jsx("code",{children:"LocaleProvider"})," that sets the label."]})}),e.jsx(n,{as:"li",listStyleType:"decimal",children:e.jsx(s,{children:"The English default."})})]}),e.jsx(s,{maxW:"prose",children:e.jsx(l.p,{children:`Providers can nest. An inner provider changes only what it sets and keeps
everything else from the outer one.`})}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Labels that hold a value"}),e.jsx(s,{maxW:"prose",children:e.jsx(l.p,{children:`Some labels include a number or a name, such as "3 more selected". These
labels are functions. Pass a function that calls your translation tool,
so it can apply its own plural and word-order rules.`})}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`labels={{
  moreSelected: (count) => t('ds.moreSelected', { count }),
  removeItem: (item) => t('ds.removeItem', { item }),
}}
`})}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Example"}),e.jsx(s,{maxW:"prose",children:e.jsx(l.p,{children:`The same calendar with no provider, and inside a provider with Spanish
labels. Use a screen reader or inspect the buttons to see the translated
accessible names, such as "Mes anterior".`})}),e.jsxs(f,{gap:"24",alignItems:"start",flexWrap:"wrap",children:[e.jsxs(a,{alignItems:"start",gap:"8",children:[e.jsx(s,{weight:"bold",children:"No provider"}),e.jsx(h,{})]}),e.jsxs(a,{alignItems:"start",gap:"8",children:[e.jsx(s,{weight:"bold",children:"Spanish labels"}),e.jsx(w,{locale:"es-ES",labels:{chooseDate:"Elegir fecha",previousMonth:"Mes anterior",nextMonth:"Mes siguiente",today:"hoy"},children:e.jsx(h,{})})]})]}),e.jsxs(s,{maxW:"prose",children:["More examples: ",e.jsx(v,{href:"/?path=/docs/components-localeprovider--documentation",children:"LocaleProvider stories"}),"."]}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"What the locale does not change yet"}),e.jsxs(n,{as:"ul",pl:"24",display:"grid",gap:"6",children:[e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsxs(l.p,{children:[e.jsxs("strong",{children:["Month and weekday names in ",e.jsx("code",{children:"Calendar"})]}),` are
still English. They will come from the browser's `,e.jsx("code",{children:"Intl"}),`
formatters in a later release.`]})})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsxs(l.p,{children:[e.jsx("strong",{children:"Date order and 12- or 24-hour time"}),` are props:
`,e.jsx("code",{children:"format"})," and ",e.jsx("code",{children:"timeFormat"}),`. They do not follow the
locale.`]})})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsxs(l.p,{children:[e.jsx("strong",{children:"The calendar week starts on Sunday"})," in every locale."]})})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsxs(l.p,{children:[e.jsx("strong",{children:"AM and PM"})," in 12-hour time controls stay as they are."]})})}),e.jsx(n,{as:"li",listStyleType:"disc",children:e.jsx(s,{children:e.jsxs(l.p,{children:[e.jsx("strong",{children:"Text direction"})," comes from ",e.jsx("code",{children:"<html dir>"}),`,
not from the provider.`]})})})]}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"Adding built-in text to a component"}),e.jsx(s,{maxW:"prose",children:e.jsxs(l.p,{children:["Never write a user-facing string, including an ",e.jsx("code",{children:"aria-label"}),`,
directly in a component. Add a key to `,e.jsx("code",{children:"LocaleLabels"}),` in
`,e.jsx("code",{children:"src/system/context/locale-labels.ts"}),` with an English default,
then read it with `,e.jsx("code",{children:"useLocale()"}),`. If the component already has a
label prop, use the label as that prop's default.`]})}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`const { labels } = useLocale();
const { clearLabel = labels.clearDate, ...rest } = props;
`})}),e.jsx(r,{weight:"thick",color:"border.disabled",my:"24"}),e.jsx(t,{level:"h3",children:"All labels"}),e.jsx(s,{maxW:"prose",children:e.jsxs(l.p,{children:["This table is built from ",e.jsx("code",{children:"defaultLocaleLabels"}),`, so it always
matches the code. Function labels show their output for a sample value, such as 3 for
`,e.jsx("code",{children:"count"}),"."]})}),e.jsx(L,{})]})})]})}function Z(i={}){const{wrapper:l}={...d(),...i.components};return l?e.jsx(l,{...i,children:e.jsx(p,{...i})}):p(i)}export{L as LabelTable,Z as default,S as functionLabels};
