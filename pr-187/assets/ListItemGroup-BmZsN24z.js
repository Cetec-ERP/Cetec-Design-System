import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{m as I,c as g,s as v,a as f,g as x,b,B as o,d as G}from"./Box-hQsv43T0.js";import{D as _}from"./Divider-DrXBfsNR.js";import{T as L}from"./Text-Du5uM3rO.js";import{u as P,L as j}from"./HighlightText-CQH7sxBN.js";const l={density:"compact"},w=[],V=[["wrapper","listItemGroup__wrapper"],["groupLabel","listItemGroup__groupLabel"],["divider","listItemGroup__divider"]],T=V.map(([e,s])=>[e,f(s,l,x(w,e))]),D=I((e={})=>Object.fromEntries(T.map(([s,r])=>[s,r.recipeFn(e)]))),p=["density"],N=e=>({...l,...g(e)}),C=Object.assign(D,{__recipe__:!1,__name__:"listItemGroup",raw:e=>e,classNameMap:{},variantKeys:p,variantMap:{density:["compact","comfortable","spacious"]},splitVariantProps(e){return v(e,p)},getVariantProps:N}),q=e=>{const{label:s,children:r,divider:d,density:c,...m}=e,[u,h]=b(m),a=P(),n=c??a.density,i=C({density:n}),y={...a,density:n};return t.jsx(j,{value:y,children:t.jsxs(o,{className:G(i.wrapper,u),...h,children:[s&&t.jsx(L,{as:"div",className:i.groupLabel,children:s}),t.jsx(o,{w:"full",children:r}),d&&t.jsx(_,{role:"separator",className:i.divider})]})})};q.__docgenInfo={description:`Groups related list items under an optional label and can add a trailing
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
value. Responsive recipe values are supported.`}}};export{q as L};
