import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as t}from"./index-39gFzG3G.js";import{M as p,U as a}from"./index-BCMk12fw.js";import"./index-BCtMShv3.js";import{F as c}from"./Box-Do4kfhe3.js";import{D as n}from"./Divider-0-CNNm0O.js";import"./iframe-D7dA6Y3P.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(s){const o={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Guides/ Component Standards"}),`
`,e.jsx(a,{children:e.jsxs(c,{direction:"column",gap:"12",children:[e.jsx(o.h1,{id:"component-standards",children:"Component standards"}),e.jsx(n,{weight:"thick",color:"border.disabled",mb:"48"}),e.jsx(o.h3,{id:"splitprops--classname",children:"splitProps & className"}),e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"splitProps"})," function separates all style props and classNames from the rest of the props, so they can be passed to Panda. This is used in combination with Panda's ",e.jsx(o.code,{children:"cx"})," function, which does a deep merge of the style props with the component's default styles. So you also don't need to include ",e.jsx(o.code,{children:"className"})," in your component's props."]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// Recipe example

import { Box, type BoxProps } from '~/components/Box';
import { splitProps } from '~/utils/splitProps';
import { tag, type TagVariantProps } from '@styled-system/recipes';

export type TagProps = TagVariantProps & BoxProps;

export const Tag = (props: TagProps) => {
  const [className, otherProps] = splitProps(props);
  return (
    <Box
      className={cx(tag({ any_variants }), className)}
      {...otherProps}
    />
  );
}
`})}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// SlotRecipe example

import { Box, type BoxProps } from '~/components/Box';
import { splitProps } from '~/utils/splitProps';
import { tag, type TagVariantProps } from '@styled-system/recipes';

export type TagProps = TagVariantProps & BoxProps;

export const Tag = (props: TagProps) => {
  const { wrapper, content } = tag();
  const [className, otherProps] = splitProps(props);
  return (
    <Box
      className={cx(wrapper, className)}
      {...otherProps}
    >
      <Box className={content} />
    </Box>
  );
}
`})}),e.jsx(n,{weight:"thick",color:"border.disabled",my:"48"}),e.jsx(o.h3,{id:"as-prop",children:"as prop"}),e.jsxs(o.p,{children:["Components should always extend BoxProps, which already handles the ",e.jsx(o.code,{children:"as"}),` prop for correct typing.
You should only explicitly define the `,e.jsx(o.code,{children:"as"})," prop when you want to restrict the allowed HTML elements for a component, and therefore should ",e.jsx(o.code,{children:"Omit"})," the default ",e.jsx(o.code,{children:"as"})," prop that comes with BoxProps."]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export type TagProps = TagVariantProps & Omit<BoxProps, 'as'>;

export const Tag = (props: TagProps) => {
  const { wrapper, content } = tag();
  const [className, otherProps] = splitProps(props);
  return (
    <Box
      className={cx(wrapper, className)}
      {...otherProps}
    >
      <Box className={content} />
    </Box>
  );
}
`})}),e.jsx(n,{weight:"thick",color:"border.disabled",my:"48"}),e.jsx(o.h3,{id:"ref",children:"ref"}),e.jsx(o.p,{children:"As of React 19, you can access ref directly as a prop in function components - no forwardRef wrapper needed."}),e.jsxs(o.p,{children:["(",e.jsx(o.a,{href:"https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/",rel:"nofollow",children:"source"}),")"]}),e.jsx(n,{weight:"thick",color:"border.disabled",my:"48"}),e.jsx(o.h3,{id:"onclick",children:"onClick"}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"onClick"}),` does not need to be explicitly defined in the component's props.
`,e.jsx(o.code,{children:"BoxProps"})," is based on ",e.jsx(o.code,{children:"ComponentPropsWithRef"}),", which includes all HTML element props, so ",e.jsx(o.code,{children:"onClick"})," is automatically inherited based on the element type."]}),e.jsxs(o.p,{children:["(",e.jsx(o.a,{href:"https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/",rel:"nofollow",children:"source"}),")"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// The inherited type would be:
onClick?: React.MouseEventHandler<HTMLElement>
// i.e., (event: React.MouseEvent<HTMLElement>) => void
`})}),e.jsx(n,{weight:"thick",color:"border.disabled",my:"48"})]})})]})}function P(s={}){const{wrapper:o}={...t(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{P as default};
