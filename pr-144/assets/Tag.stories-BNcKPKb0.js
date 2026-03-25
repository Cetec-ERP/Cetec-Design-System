import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import{W as n,G as P}from"./Box-B-dS-qo0.js";import{T as p}from"./Text-BlqN2xhk.js";import{T as r}from"./Tag-C7L9i__0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CMDYjoHI.js";import"./IconConfig-DO2Dck3c.js";const J={title:"Components/Tag",component:r,parameters:{layout:"centered",docs:{description:{component:`Tag component for labeling, categorizing, and organizing items.

Features:
- Two visual variants (default, bold)
- 16 color hues
- Optional leading/trailing icons`}}},tags:["autodocs"],args:{children:"Tag"},argTypes:{variant:{control:"select",options:["default","bold"],description:"Visual style variant",table:{defaultValue:{summary:"default"}}},hue:{control:"select",options:["slate","tan","red","tomato","orange","yellow","green","grass","mint","cyan","blue","indigo","purple","violet","pink","rose","magenta"],description:"Color hue",table:{defaultValue:{summary:"slate"}}},iconBefore:{control:"select",options:[void 0,"check","info","warning"],description:"Icon name to display before text"},iconAfter:{control:"select",options:[void 0,"star","tag"],description:"Icon name to display after text"},children:{control:"text",description:"Tag text content"}}},g=["slate","tan","red","tomato","orange","yellow","green","grass","mint","cyan","blue","indigo","purple","violet","pink","rose","magenta"],t={render:()=>e.jsx(n,{gap:"8",maxW:"xs",justify:"center",children:g.map(a=>e.jsx(r,{hue:a,children:a},a))}),parameters:{controls:{disable:!0}}},s={render:()=>e.jsx(n,{gap:"8",maxW:"xs",justify:"center",children:g.map(a=>e.jsx(r,{hue:a,variant:"bold",children:a},a))}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsxs(P,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",children:[e.jsx(p,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(n,{gap:"8",maxW:"xs",children:g.map(a=>e.jsx(r,{hue:a,children:a},a))}),e.jsx(p,{textStyle:"mono.md",mr:"16",children:"bold"}),e.jsx(n,{gap:"8",maxW:"xs",children:g.map(a=>e.jsx(r,{hue:a,variant:"bold",children:a},a))})]}),parameters:{controls:{disable:!0}}},l={render:()=>e.jsxs(P,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(p,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(n,{gap:"8",children:[e.jsx(r,{hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(r,{hue:"red",iconBefore:"warning",children:"Error"}),e.jsx(r,{hue:"blue",iconBefore:"info",children:"Info"})]}),e.jsx(p,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(n,{gap:"8",children:[e.jsx(r,{hue:"yellow",iconAfter:"star",children:"Featured"}),e.jsx(r,{hue:"pink",iconAfter:"tag",children:"Sale"}),e.jsx(r,{hue:"indigo",iconAfter:"flag",children:"Flagged"})]})]}),parameters:{controls:{disable:!0}}},c={name:"Ex: Status Tags",render:()=>e.jsxs(n,{gap:"8",children:[e.jsx(r,{hue:"green",variant:"bold",iconBefore:"check",children:"Complete"}),e.jsx(r,{hue:"yellow",variant:"bold",iconBefore:"warning",children:"Pending"}),e.jsx(r,{hue:"red",variant:"bold",iconBefore:"error",children:"Failed"}),e.jsx(r,{hue:"blue",variant:"bold",iconBefore:"info",children:"In Progress"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Category Tags",render:()=>e.jsxs(n,{gap:"8",children:[e.jsx(r,{hue:"violet",children:"Design"}),e.jsx(r,{hue:"cyan",children:"Engineering"}),e.jsx(r,{hue:"orange",children:"Marketing"}),e.jsx(r,{hue:"green",children:"Sales"}),e.jsx(r,{hue:"pink",children:"Support"})]}),parameters:{controls:{disable:!0}}},o={args:{variant:"default",hue:"slate",children:"Tag Label"}};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Wrap gap="8" maxW="xs" justify="center">
      {hues.map(hue => <Tag key={hue} hue={hue}>
          {hue}
        </Tag>)}
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,T,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Wrap gap="8" maxW="xs" justify="center">
      {hues.map(hue => <Tag key={hue} hue={hue} variant="bold">
          {hue}
        </Tag>)}
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,j,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32"
  // alignItems="center"
  >
      <Text textStyle="mono.md" mr="16">
        default
      </Text>
      <Wrap gap="8" maxW="xs">
        {hues.map(hue => <Tag key={hue} hue={hue}>
            {hue}
          </Tag>)}
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        bold
      </Text>
      <Wrap gap="8" maxW="xs">
        {hues.map(hue => <Tag key={hue} hue={hue} variant="bold">
            {hue}
          </Tag>)}
      </Wrap>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var v,W,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        iconBefore
      </Text>
      <Wrap gap="8">
        <Tag hue="green" iconBefore="check">
          Approved
        </Tag>
        <Tag hue="red" iconBefore="warning">
          Error
        </Tag>
        <Tag hue="blue" iconBefore="info">
          Info
        </Tag>
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        iconAfter
      </Text>
      <Wrap gap="8">
        <Tag hue="yellow" iconAfter="star">
          Featured
        </Tag>
        <Tag hue="pink" iconAfter="tag">
          Sale
        </Tag>
        <Tag hue="indigo" iconAfter="flag">
          Flagged
        </Tag>
      </Wrap>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(W=l.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var B,k,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Ex: Status Tags',
  render: () => <Wrap gap="8">
      <Tag hue="green" variant="bold" iconBefore="check">
        Complete
      </Tag>
      <Tag hue="yellow" variant="bold" iconBefore="warning">
        Pending
      </Tag>
      <Tag hue="red" variant="bold" iconBefore="error">
        Failed
      </Tag>
      <Tag hue="blue" variant="bold" iconBefore="info">
        In Progress
      </Tag>
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,G,I;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Ex: Category Tags',
  render: () => <Wrap gap="8">
      <Tag hue="violet">Design</Tag>
      <Tag hue="cyan">Engineering</Tag>
      <Tag hue="orange">Marketing</Tag>
      <Tag hue="green">Sales</Tag>
      <Tag hue="pink">Support</Tag>
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var A,E,F,V,D;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    hue: 'slate',
    children: 'Tag Label'
  }
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"Interactive playground to test all props",...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.description}}};const K=["Default","Bold","VariantComparison","WithIcons","StatusTags","CategoryTags","Interactive"];export{s as Bold,d as CategoryTags,t as Default,o as Interactive,c as StatusTags,i as VariantComparison,l as WithIcons,K as __namedExportsOrder,J as default};
