import{j as e,W as a,G as u,T as o}from"./iframe-Qq7AagiI.js";import{T as n}from"./Tag-YCE48k9Z.js";import"./preload-helper-fQNTXnnu.js";const q={title:"Components/Tag",component:n,parameters:{layout:"centered",docs:{description:{component:`Tag component for labeling, categorizing, and organizing items.

Features:
- Two sizes (md, sm)
- Two visual variants (default, bold)
- 16 color hues
- Optional leading/trailing icons`}}},tags:["autodocs"],args:{children:"Tag"},argTypes:{variant:{control:"select",options:["default","bold"],description:"Visual style variant",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["md","sm"],description:"Height and text size",table:{defaultValue:{summary:"md"}}},hue:{control:"select",options:["slate","tan","red","tomato","orange","yellow","green","grass","mint","cyan","blue","indigo","purple","violet","pink","rose","magenta"],description:"Color hue",table:{defaultValue:{summary:"slate"}}},iconBefore:{control:"select",options:[void 0,"check","info","warning"],description:"Icon name to display before text"},iconAfter:{control:"select",options:[void 0,"star","tag"],description:"Icon name to display after text"},children:{control:"text",description:"Tag text content"}}},m=["slate","tan","red","tomato","orange","yellow","green","grass","mint","cyan","blue","indigo","purple","violet","pink","rose","magenta"],s={render:()=>e.jsx(a,{gap:"8",maxW:"xs",justify:"center",children:m.map(r=>e.jsx(n,{hue:r,children:r},r))}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsx(a,{gap:"8",maxW:"xs",justify:"center",children:m.map(r=>e.jsx(n,{hue:r,variant:"bold",children:r},r))}),parameters:{controls:{disable:!0}}},l={render:()=>e.jsxs(u,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(a,{gap:"8",maxW:"xs",children:m.map(r=>e.jsx(n,{hue:r,children:r},r))}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"bold"}),e.jsx(a,{gap:"8",maxW:"xs",children:m.map(r=>e.jsx(n,{hue:r,variant:"bold",children:r},r))})]}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsxs(u,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"24",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"md"}),e.jsxs(a,{gap:"8",alignItems:"center",children:[e.jsx(n,{hue:"green",children:"Approved"}),e.jsx(n,{hue:"blue",variant:"bold",children:"Released"}),e.jsx(n,{hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{hue:"yellow",iconAfter:"star",children:"Featured"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"sm"}),e.jsxs(a,{gap:"8",alignItems:"center",children:[e.jsx(n,{size:"sm",hue:"green",children:"Approved"}),e.jsx(n,{size:"sm",hue:"blue",variant:"bold",children:"Released"}),e.jsx(n,{size:"sm",hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{size:"sm",hue:"yellow",iconAfter:"star",children:"Featured"})]})]}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsxs(u,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(a,{gap:"8",children:[e.jsx(n,{hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{hue:"red",iconBefore:"warning",children:"Error"}),e.jsx(n,{hue:"blue",iconBefore:"info",children:"Info"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(a,{gap:"8",children:[e.jsx(n,{hue:"yellow",iconAfter:"star",children:"Featured"}),e.jsx(n,{hue:"pink",iconAfter:"tag",children:"Sale"}),e.jsx(n,{hue:"indigo",iconAfter:"flag",children:"Flagged"})]})]}),parameters:{controls:{disable:!0}}},g={name:"Ex: Status Tags",render:()=>e.jsxs(a,{gap:"8",children:[e.jsx(n,{hue:"green",variant:"bold",iconBefore:"check",children:"Complete"}),e.jsx(n,{hue:"yellow",variant:"bold",iconBefore:"warning",children:"Pending"}),e.jsx(n,{hue:"red",variant:"bold",iconBefore:"error",children:"Failed"}),e.jsx(n,{hue:"blue",variant:"bold",iconBefore:"info",children:"In Progress"})]}),parameters:{controls:{disable:!0}}},p={name:"Ex: Category Tags",render:()=>e.jsxs(a,{gap:"8",children:[e.jsx(n,{hue:"violet",children:"Design"}),e.jsx(n,{hue:"cyan",children:"Engineering"}),e.jsx(n,{hue:"orange",children:"Marketing"}),e.jsx(n,{hue:"green",children:"Sales"}),e.jsx(n,{hue:"pink",children:"Support"})]}),parameters:{controls:{disable:!0}}},t={args:{variant:"default",hue:"slate",children:"Tag Label"}},J=["Default","Bold","VariantComparison","Sizes","WithIcons","StatusTags","CategoryTags","Interactive"];var h,x,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var f,j,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,v,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var W,w,A;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="24" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        md
      </Text>
      <Wrap gap="8" alignItems="center">
        <Tag hue="green">Approved</Tag>
        <Tag hue="blue" variant="bold">
          Released
        </Tag>
        <Tag hue="green" iconBefore="check">
          Approved
        </Tag>
        <Tag hue="yellow" iconAfter="star">
          Featured
        </Tag>
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        sm
      </Text>
      <Wrap gap="8" alignItems="center">
        <Tag size="sm" hue="green">
          Approved
        </Tag>
        <Tag size="sm" hue="blue" variant="bold">
          Released
        </Tag>
        <Tag size="sm" hue="green" iconBefore="check">
          Approved
        </Tag>
        <Tag size="sm" hue="yellow" iconAfter="star">
          Featured
        </Tag>
      </Wrap>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var B,k,G;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(k=d.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var I,C,z;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(C=g.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var F,E,V;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var R,D,P,L,M;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    hue: 'slate',
    children: 'Tag Label'
  }
}`,...(P=(D=t.parameters)==null?void 0:D.docs)==null?void 0:P.source},description:{story:"Interactive playground to test all props",...(M=(L=t.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};export{i as Bold,p as CategoryTags,s as Default,t as Interactive,c as Sizes,g as StatusTags,l as VariantComparison,d as WithIcons,J as __namedExportsOrder,q as default};
