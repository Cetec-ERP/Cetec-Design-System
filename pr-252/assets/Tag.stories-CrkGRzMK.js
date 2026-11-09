import{j as e,W as a,G as v,T as o}from"./iframe-kIvJ2lPO.js";import{T as n}from"./Tag-CrZb5mu9.js";import"./preload-helper-fQNTXnnu.js";const{expect:y,within:se}=__STORYBOOK_MODULE_TEST__,de={title:"Components/Tag",component:n,parameters:{layout:"centered",docs:{description:{component:`Tag component for labeling, categorizing, and organizing items.

Features:
- Two sizes (md, sm)
- Two visual variants (default, bold)
- 16 color hues
- Optional leading/trailing icons`}}},tags:["autodocs"],args:{children:"Tag"},argTypes:{variant:{control:"select",options:["default","bold"],description:"Visual style variant",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["md","sm"],description:"Height and text size",table:{defaultValue:{summary:"md"}}},hue:{control:"select",options:["slate","tan","red","tomato","orange","yellow","green","grass","mint","cyan","blue","indigo","purple","violet","pink","rose","magenta"],description:"Color hue",table:{defaultValue:{summary:"slate"}}},iconBefore:{control:"select",options:[void 0,"check","info","warning"],description:"Icon name to display before text"},iconAfter:{control:"select",options:[void 0,"star","tag"],description:"Icon name to display after text"},children:{control:"text",description:"Tag text content"}}},b=["slate","tan","red","tomato","orange","yellow","green","grass","mint","cyan","blue","indigo","purple","violet","pink","rose","magenta"],p={render:()=>e.jsx(a,{gap:"8",maxW:"xs",justify:"center",children:b.map(r=>e.jsx(n,{hue:r,children:r},r))}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsx(a,{gap:"8",maxW:"xs",justify:"center",children:b.map(r=>e.jsx(n,{hue:r,variant:"bold",children:r},r))}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs(v,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(a,{gap:"8",maxW:"xs",children:b.map(r=>e.jsx(n,{hue:r,children:r},r))}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"bold"}),e.jsx(a,{gap:"8",maxW:"xs",children:b.map(r=>e.jsx(n,{hue:r,variant:"bold",children:r},r))})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(v,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"24",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"md"}),e.jsxs(a,{gap:"8",alignItems:"center",children:[e.jsx(n,{hue:"green",children:"Approved"}),e.jsx(n,{hue:"blue",variant:"bold",children:"Released"}),e.jsx(n,{hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{hue:"yellow",iconAfter:"star",children:"Featured"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"sm"}),e.jsxs(a,{gap:"8",alignItems:"center",children:[e.jsx(n,{size:"sm",hue:"green",children:"Approved"}),e.jsx(n,{size:"sm",hue:"blue",variant:"bold",children:"Released"}),e.jsx(n,{size:"sm",hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{size:"sm",hue:"yellow",iconAfter:"star",children:"Featured"})]})]}),parameters:{controls:{disable:!0}}},oe="(min-width: 48rem)",j=(r,t)=>{const s=t==="sm"?16:20,m=r.querySelector("svg");y(m).not.toBeNull(),y(r.getBoundingClientRect().height).toBe(s),y(m==null?void 0:m.getBoundingClientRect().width).toBe(s)},d={render:()=>e.jsxs(a,{gap:"8",alignItems:"center",children:[e.jsx(n,{hue:"green",iconBefore:"check",size:{base:"sm",md:"md"},"data-testid":"small-then-medium",children:"sm, md from md up"}),e.jsx(n,{hue:"blue",iconAfter:"star",size:{md:"sm"},"data-testid":"medium-then-small",children:"md, sm from md up"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:r})=>{const t=se(r),s=window.matchMedia(oe).matches;j(t.getByTestId("small-then-medium"),s?"md":"sm"),j(t.getByTestId("medium-then-small"),s?"sm":"md")}},i=d,l={...d,globals:{viewport:{value:"mobile1",isRotated:!1}},play:async r=>{var t;y(window.matchMedia(oe).matches).toBe(!1),await((t=d.play)==null?void 0:t.call(d,r))}},x={render:()=>e.jsxs(v,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(a,{gap:"8",children:[e.jsx(n,{hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{hue:"red",iconBefore:"warning",children:"Error"}),e.jsx(n,{hue:"blue",iconBefore:"info",children:"Info"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(a,{gap:"8",children:[e.jsx(n,{hue:"yellow",iconAfter:"star",children:"Featured"}),e.jsx(n,{hue:"pink",iconAfter:"tag",children:"Sale"}),e.jsx(n,{hue:"indigo",iconAfter:"flag",children:"Flagged"})]})]}),parameters:{controls:{disable:!0}}},T={name:"Ex: Status Tags",render:()=>e.jsxs(a,{gap:"8",children:[e.jsx(n,{hue:"green",variant:"bold",iconBefore:"check",children:"Complete"}),e.jsx(n,{hue:"yellow",variant:"bold",iconBefore:"warning",children:"Pending"}),e.jsx(n,{hue:"red",variant:"bold",iconBefore:"error",children:"Failed"}),e.jsx(n,{hue:"blue",variant:"bold",iconBefore:"info",children:"In Progress"})]}),parameters:{controls:{disable:!0}}},f={name:"Ex: Category Tags",render:()=>e.jsxs(a,{gap:"8",children:[e.jsx(n,{hue:"violet",children:"Design"}),e.jsx(n,{hue:"cyan",children:"Engineering"}),e.jsx(n,{hue:"orange",children:"Marketing"}),e.jsx(n,{hue:"green",children:"Sales"}),e.jsx(n,{hue:"pink",children:"Support"})]}),parameters:{controls:{disable:!0}}},c={args:{variant:"default",hue:"slate",children:"Tag Label"}},me=["Default","Bold","VariantComparison","Sizes","ResponsiveSize","ResponsiveSizeNarrow","WithIcons","StatusTags","CategoryTags","Interactive"];var S,w,B;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var W,k,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(k=g.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var A,I,G;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(I=u.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var C,R,E;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var F,_,M,O,V;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:"responsiveSizeStory",...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source},description:{story:"`size` accepts conditional values. Resize the viewport across the `md`\nbreakpoint (768px) to see each tag and its icon switch size together.",...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.description}}};var D,P,L,N,q;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...responsiveSizeStory,
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  play: async context => {
    // Fail loudly if the viewport global stops applying, rather than
    // repeating the wide-viewport checks.
    expect(window.matchMedia(mdBreakpoint).matches).toBe(false);
    await responsiveSizeStory.play?.(context);
  }
}`,...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.source},description:{story:"The same tags below the `md` breakpoint.",...(q=(N=l.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var H,K,U;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,J,Q;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,re,ae,te;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    hue: 'slate',
    children: 'Tag Label'
  }
}`,...(re=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"Interactive playground to test all props",...(te=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};export{g as Bold,f as CategoryTags,p as Default,c as Interactive,i as ResponsiveSize,l as ResponsiveSizeNarrow,h as Sizes,T as StatusTags,u as VariantComparison,x as WithIcons,me as __namedExportsOrder,de as default};
