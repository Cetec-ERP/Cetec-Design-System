import{m as I,e as g,f as v,g as f,h as x,s as G,j as t,B as o,c as L,d as _,T as b}from"./iframe-ClDBFN2j.js";import{D as P}from"./Divider-DF3vqq8F.js";import{u as j,L as w}from"./HighlightText-CxfsFQFn.js";const l={density:"compact"},V=[],T=[["wrapper","listItemGroup__wrapper"],["groupLabel","listItemGroup__groupLabel"],["divider","listItemGroup__divider"]],C=T.map(([e,s])=>[e,f(s,l,x(V,e))]),D=I((e={})=>Object.fromEntries(C.map(([s,r])=>[s,r.recipeFn(e)]))),p=["density"],N=e=>({...l,...g(e)}),q=Object.assign(D,{__recipe__:!1,__name__:"listItemGroup",raw:e=>e,classNameMap:{},variantKeys:p,variantMap:{density:["compact","comfortable","spacious"]},splitVariantProps(e){return v(e,p)},getVariantProps:N}),B=e=>{const{label:s,children:r,divider:d,density:c,...m}=e,[u,h]=G(m),n=j(),a=c??n.density,i=q({density:a}),y={...n,density:a};return t.jsx(w,{value:y,children:t.jsxs(o,{..._("ListItemGroup"),className:L(i.wrapper,u),...h,children:[s&&t.jsx(b,{as:"div",className:i.groupLabel,children:s}),t.jsx(o,{w:"full",children:r}),d&&t.jsx(P,{role:"separator",className:i.divider})]})})};B.__docgenInfo={description:`Groups related list items under an optional label and can add a trailing
separator.

The group inherits search settings from its parent list and provides its
resolved density to descendants. Use {@link List} as the parent when items
should share list semantics and configuration.

@example
\`\`\`tsx
<ListItemGroup label="Account">
  <ListItem label="Profile" />
</ListItemGroup>
\`\`\``,methods:[],displayName:"ListItemGroup",props:{label:{required:!1,tsType:{name:"string"},description:"Optional heading displayed above the group's children."},children:{required:!0,tsType:{name:"intersection['children']",raw:"BoxProps['children']"},description:"Items or other content belonging to this group."},divider:{required:!1,tsType:{name:"boolean"},description:"Displays a separator after the group."},density:{required:!1,tsType:{name:"ListItemVariantProps['density']",raw:"ListItemVariantProps['density']"},description:`Density inherited by descendant list items unless they provide their own
value. Responsive recipe values are supported.`}}};export{B as L};
