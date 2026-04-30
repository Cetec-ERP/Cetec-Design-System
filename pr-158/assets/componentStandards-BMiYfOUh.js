import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t}from"./index-DH-WwwX7.js";import{M as c,U as a}from"./index-BMEw0WMj.js";import"./index-BKyFwriW.js";import{F as d}from"./Box-BV3UiX_0.js";import{D as s}from"./Divider-BpaRy6Xf.js";import{L as o}from"./Link-DFDNTh9t.js";import"./Text-CaLd5y6v.js";import"./iframe-ReLvnS7B.js";import"./index-CxmYaGqE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Icon-B7squOvl.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs / Component Standards"}),`
`,e.jsx(a,{children:e.jsxs(d,{direction:"column",gap:"16",children:[e.jsx(n.h1,{id:"component-standards",children:"Component Standards"}),e.jsxs(n.p,{children:["This page is the short version: one rule, a brief reason, and a real example. The deeper standards live in ",e.jsx("code",{children:"/standards"})," and the related Storybook docs linked below."]}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsxs(n.h2,{id:"1-start-prop-types-from-boxprops-and-recipe-variant-props",children:["1. Start prop types from ",e.jsx(n.code,{children:"BoxProps"})," and recipe variant props"]}),e.jsxs(n.p,{children:["Use ",e.jsx("code",{children:"Omit<BoxProps, keyof VariantProps>"})," first, then add component-specific props. This keeps HTML props, ",e.jsx(n.code,{children:"as"}),", and ref typing consistent."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export type ChipProps =
  Omit<BoxProps, keyof ChipVariantProps> &
  ChipVariantProps & {
  // ...
};
`})}),e.jsxs(n.p,{children:["Related: ",e.jsx(o,{href:"/?path=/docs/docs-controlled-components-philosophy--documentation",children:"Controlled Components Philosophy"})]}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsxs(n.h2,{id:"2-render-through-box-not-raw-html",children:["2. Render through ",e.jsx(n.code,{children:"Box"}),", not raw HTML"]}),e.jsx(n.p,{children:"Components should use the design-system base primitive so polymorphism, style props, and ref handling stay consistent."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`return (
  <Box
    as="button"
    ref={buttonRef}
    className={cx(classes.container, className)}
    type="button"
    {...otherProps}
  >
    {children}
  </Box>
);
`})}),e.jsx(n.p,{children:"If you need element-specific behavior, branch typed props instead of splitting the component into unrelated render paths."}),e.jsxs(n.p,{children:["Related: ",e.jsx(o,{href:"/?path=/docs/docs-accessibility-decisions--documentation",children:"Accessibility Decisions"})]}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsxs(n.h2,{id:"3-always-use-splitpropsrest-and-merge-classes-with-cx",children:["3. Always use ",e.jsx(n.code,{children:"splitProps(rest)"})," and merge classes with ",e.jsx(n.code,{children:"cx(...)"})]}),e.jsxs(n.p,{children:["Generated classes go first, consumer ",e.jsx(n.code,{children:"className"})," goes last. ",e.jsx(n.code,{children:"splitProps"})," keeps Panda style props separate from everything else."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [className, otherProps] = splitProps(rest);

return (
  <Box className={cx(classes.root, className)} {...otherProps}>
    {children}
  </Box>
);
`})}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsx(n.h2,{id:"4-use-react-19-ref-as-prop-typing",children:"4. Use React 19 ref-as-prop typing"}),e.jsxs(n.p,{children:["Do not default to ",e.jsx(n.code,{children:"forwardRef"}),". In this repo, components read ",e.jsx(n.code,{children:"ref"})," directly from props unless an external integration genuinely requires the wrapper."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const Avatar = (props: AvatarProps) => {
  const { ref, ...rest } = props;

  return <Box as="span" ref={ref} {...rest} />;
};
`})}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsxs(n.h2,{id:"5-onclick-does-not-need-to-be-explicitly-defined-in-the-components-props",children:["5. ",e.jsx(n.code,{children:"onClick"})," does not need to be explicitly defined in the component's props."]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BoxProps"})," is based on ",e.jsx(n.code,{children:"ComponentPropsWithRef"}),", which includes all HTML element props, so ",e.jsx(n.code,{children:"onClick"})," is automatically inherited based on the element type."]}),e.jsxs(n.p,{children:["Related: ",e.jsx(o,{href:"https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops",children:"React 19 componentprops"})]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// The inherited type would be:
onClick?: React.MouseEventHandler<HTMLElement>
// i.e., (event: React.MouseEvent<HTMLElement>) => void
`})}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsxs(n.h2,{id:"6-do-not-use-reactfc-or-react-namespace-types",children:["6. Do not use ",e.jsx(n.code,{children:"React.FC"})," or React namespace types"]}),e.jsxs(n.p,{children:["Type the function parameter directly and import named React types like ",e.jsx(n.code,{children:"ReactNode"})," from ",e.jsx(n.code,{children:"react"}),"."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { ReactNode } from 'react';

export type ComponentProps = {
  children?: ReactNode;
};
`})}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsx(n.h2,{id:"7-keep-conditional-variant-props-typed-from-recipe-variant-props",children:"7. Keep conditional variant props typed from recipe variant props"}),e.jsxs(n.p,{children:["For usual suspects like ",e.jsx(n.code,{children:"size"})," and ",e.jsx(n.code,{children:"variant"}),", derive the public prop type from ",e.jsx(n.code,{children:"*VariantProps[...]"})," so responsive and conditional values remain accepted."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export type ButtonProps = Omit<BoxProps, keyof ButtonVariantProps> & ButtonVariantProps & {
  variant?: ButtonVariantProps['variant'];
  size?: ButtonVariantProps['size'];
};
`})}),e.jsxs(n.p,{children:["If you manually redefine ",e.jsx(n.code,{children:"size"})," or ",e.jsx(n.code,{children:"variant"}),", you are usually breaking conditional values."]}),e.jsxs(n.p,{children:["Related: ",e.jsx(o,{href:"/?path=/docs/docs-using-conditions--documentation",children:"Using Conditions"})]}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsxs(n.h2,{id:"8-avoid-using-compoundvariants-in-recipes",children:["8. Avoid using ",e.jsx(n.code,{children:"compoundVariants"})," in recipes"]}),e.jsxs(n.p,{children:["Panda is unable to predictably compose conditional variants with recipe ",e.jsx(n.code,{children:"compoundVariants"}),", so recipes which contain ",e.jsx(n.code,{children:"compoundVariants"})," are automatically disabled from using responsive values in the variants."]}),e.jsx(n.p,{children:"Consider using booleans or component-local CSS variables when combined styling is required."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Ex: we often want to make buttons larger on
// smaller screens so they're easier to touch
<Button size={{ base: 'xl', sm: 'md' }} iconBefore="cursor-click">Click me</Button>

// Example using local CSS variables in recipe
export const buttonRecipe = defineSlotRecipe({
  base: {
    container: {
      '--icon-size': 'token(sizes.24)',
      '--icon-margin': 'token(sizes.6)',
    },
    icon: {
      w: 'var(--icon-size)',
    }
  },
  variants: {
    size: {
      sm: {
        icon: {
          '--icon-size': 'token(sizes.22)',
          '--icon-margin': 'token(sizes.5)',
        },
      },
      md: {
        icon: {
          '--icon-size': 'token(sizes.24)',
          '--icon-margin': 'token(sizes.8)',
        },
      },
      lg: {
        icon: {
          '--icon-size': 'token(sizes.24)',
          '--icon-margin': 'token(sizes.10)',
        },
      },
      xl: {
        icon: {
          '--icon-size': 'token(sizes.28)',
          '--icon-margin': 'token(sizes.10)',
        },
      },
    },
  }
}
`})}),e.jsxs(n.p,{children:["Related: ",e.jsx(o,{href:"https://panda-css.com/docs/concepts/recipes#limitations",external:!0,children:"Recipe Limitations"})]}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsxs(n.h2,{id:"9-keep-recipe-static-css-in-pandaconfigts-not-recipe-files",children:["9. Keep recipe static CSS in ",e.jsx(n.code,{children:"panda.config.ts"}),", not recipe files"]}),e.jsxs(n.p,{children:["Central static CSS registration is what actually affects Panda output in this repo. Recipe-file ",e.jsx(n.code,{children:"staticCss"})," declarations are not the source of truth here."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// in panda.config.ts
const recipeOverrides = {
  avatar: [{ size: ['*'], responsive: true }, { shape: ['*'] }],
  // ...
};
`})}),e.jsxs(n.p,{children:["Related: ",e.jsx(o,{href:"/?path=/docs/docs-build-reasoning--documentation",children:"Build Reasoning"})]}),e.jsx(s,{weight:"thick",color:"border.disabled",my:"48"}),e.jsx(n.h2,{id:"20-share-mechanics-keep-semantics-local",children:"20. Share mechanics, keep semantics local"}),e.jsx(n.p,{children:"Reuse layout, row, or floating primitives where it helps, but do not blur the semantic contract of the component you are building."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ChipGroup owns selection mechanics.
// Chip still owns chip semantics and rendering.
const size = sizeProp ?? groupContext?.size ?? 'md';
`})}),e.jsxs(n.p,{children:["Related: ",e.jsx(o,{href:"/?path=/docs/docs-floating-ui-architecture--documentation",children:"Floating UI Architecture"})]})]})})]})}function P(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{P as default};
