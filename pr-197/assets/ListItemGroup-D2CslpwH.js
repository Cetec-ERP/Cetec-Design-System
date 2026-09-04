import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{m as I,a as g,b as v,e as f,g as x,s as G,B as o,c as b,d as L}from"./dsComponent-D6ec2IT1.js";import{D as _}from"./Divider-CFbTUo5C.js";import{T as P}from"./Text-B_2f_EK_.js";import{u as j,L as w}from"./HighlightText-C2YgeQru.js";const l={density:"compact"},V=[],T=[["wrapper","listItemGroup__wrapper"],["groupLabel","listItemGroup__groupLabel"],["divider","listItemGroup__divider"]],C=T.map(([e,s])=>[e,f(s,l,x(V,e))]),D=I((e={})=>Object.fromEntries(C.map(([s,r])=>[s,r.recipeFn(e)]))),p=["density"],N=e=>({...l,...g(e)}),q=Object.assign(D,{__recipe__:!1,__name__:"listItemGroup",raw:e=>e,classNameMap:{},variantKeys:p,variantMap:{density:["compact","comfortable","spacious"]},splitVariantProps(e){return v(e,p)},getVariantProps:N}),B=e=>{const{label:s,children:r,divider:d,density:c,...m}=e,[u,h]=G(m),a=j(),n=c??a.density,i=q({density:n}),y={...a,density:n};return t.jsx(w,{value:y,children:t.jsxs(o,{...L("ListItemGroup"),className:b(i.wrapper,u),...h,children:[s&&t.jsx(P,{as:"div",className:i.groupLabel,children:s}),t.jsx(o,{w:"full",children:r}),d&&t.jsx(_,{role:"separator",className:i.divider})]})})};B.__docgenInfo={description:`Groups related list items under an optional label and can add a trailing
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
