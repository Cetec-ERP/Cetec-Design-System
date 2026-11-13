import{j as e,W as t,G as v,T as i}from"./iframe-B6tPLa_9.js";import{T as n}from"./Tag-BqlpQhoU.js";import"./preload-helper-D8YtVqxL.js";const{expect:s,within:ce}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/Tag",component:n,parameters:{layout:"centered",docs:{description:{component:`Tag component for labeling, categorizing, and organizing items.

Features:
- Two sizes (md, sm)
- Two visual variants (default, bold)
- 16 color hues
- Optional leading/trailing icons`}}},tags:["autodocs"],args:{children:"Tag"},argTypes:{variant:{control:"select",options:["default","bold"],description:"Visual style variant",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["md","sm"],description:"Height and text size",table:{defaultValue:{summary:"md"}}},hue:{control:"select",options:["slate","tan","red","tomato","orange","yellow","green","grass","mint","cyan","blue","indigo","purple","violet","pink","rose","magenta"],description:"Color hue",table:{defaultValue:{summary:"slate"}}},iconBefore:{control:"select",options:[void 0,"check","info","warning"],description:"Icon name to display before text"},iconAfter:{control:"select",options:[void 0,"star","tag"],description:"Icon name to display after text"},children:{control:"text",description:"Tag text content"}}},b=["slate","tan","red","tomato","orange","yellow","green","grass","mint","cyan","blue","indigo","purple","violet","pink","rose","magenta"],u={render:()=>e.jsx(t,{gap:"8",maxW:"xs",justify:"center",children:b.map(r=>e.jsx(n,{hue:r,children:r},r))}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsx(t,{gap:"8",maxW:"xs",justify:"center",children:b.map(r=>e.jsx(n,{hue:r,variant:"bold",children:r},r))}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(v,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",children:[e.jsx(i,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(t,{gap:"8",maxW:"xs",children:b.map(r=>e.jsx(n,{hue:r,children:r},r))}),e.jsx(i,{textStyle:"mono.md",mr:"16",children:"bold"}),e.jsx(t,{gap:"8",maxW:"xs",children:b.map(r=>e.jsx(n,{hue:r,variant:"bold",children:r},r))})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs(v,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"24",alignItems:"center",children:[e.jsx(i,{textStyle:"mono.md",mr:"16",children:"md"}),e.jsxs(t,{gap:"8",alignItems:"center",children:[e.jsx(n,{hue:"green",children:"Approved"}),e.jsx(n,{hue:"blue",variant:"bold",children:"Released"}),e.jsx(n,{hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{hue:"yellow",iconAfter:"star",children:"Featured"})]}),e.jsx(i,{textStyle:"mono.md",mr:"16",children:"sm"}),e.jsxs(t,{gap:"8",alignItems:"center",children:[e.jsx(n,{size:"sm",hue:"green",children:"Approved"}),e.jsx(n,{size:"sm",hue:"blue",variant:"bold",children:"Released"}),e.jsx(n,{size:"sm",hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{size:"sm",hue:"yellow",iconAfter:"star",children:"Featured"})]})]}),parameters:{controls:{disable:!0}}},oe="(min-width: 30rem)",se="(min-width: 48rem)",w=(r,a)=>{const c=a==="sm"?16:20,ie=a==="sm"?12:14,p=r.querySelector("svg");s(p).not.toBeNull(),s(r.getBoundingClientRect().height).toBe(c),s(getComputedStyle(r).fontSize).toBe(`${ie}px`),s(p==null?void 0:p.getBoundingClientRect().width).toBe(c)},o={render:()=>e.jsxs(t,{gap:"8",alignItems:"center",children:[e.jsx(n,{hue:"green",iconBefore:"check",size:{base:"sm",md:"md"},"data-testid":"small-then-medium",children:"sm, md from md up"}),e.jsx(n,{hue:"blue",iconAfter:"star",size:{md:"sm"},"data-testid":"medium-then-small",children:"md, sm from md up"}),e.jsx(n,{hue:"purple",iconBefore:"star",size:[null,"sm"],"data-testid":"array-without-base",children:"md, sm from xs up"})]}),parameters:{controls:{disable:!0}},play:async({canvasElement:r})=>{const a=ce(r),c=window.matchMedia(se).matches;w(a.getByTestId("small-then-medium"),c?"md":"sm"),w(a.getByTestId("medium-then-small"),c?"sm":"md"),w(a.getByTestId("array-without-base"),window.matchMedia(oe).matches?"sm":"md")}},l={...o,play:async r=>{var a;s(window.matchMedia(se).matches).toBe(!0),await((a=o.play)==null?void 0:a.call(o,r))}},d={...o,globals:{viewport:{value:"mobile1",isRotated:!1}},play:async r=>{var a;s(window.matchMedia(oe).matches).toBe(!1),await((a=o.play)==null?void 0:a.call(o,r))}},T={render:()=>e.jsxs(v,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(i,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(t,{gap:"8",children:[e.jsx(n,{hue:"green",iconBefore:"check",children:"Approved"}),e.jsx(n,{hue:"red",iconBefore:"warning",children:"Error"}),e.jsx(n,{hue:"blue",iconBefore:"info",children:"Info"})]}),e.jsx(i,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(t,{gap:"8",children:[e.jsx(n,{hue:"yellow",iconAfter:"star",children:"Featured"}),e.jsx(n,{hue:"pink",iconAfter:"tag",children:"Sale"}),e.jsx(n,{hue:"indigo",iconAfter:"flag",children:"Flagged"})]})]}),parameters:{controls:{disable:!0}}},f={name:"Ex: Status Tags",render:()=>e.jsxs(t,{gap:"8",children:[e.jsx(n,{hue:"green",variant:"bold",iconBefore:"check",children:"Complete"}),e.jsx(n,{hue:"yellow",variant:"bold",iconBefore:"warning",children:"Pending"}),e.jsx(n,{hue:"red",variant:"bold",iconBefore:"error",children:"Failed"}),e.jsx(n,{hue:"blue",variant:"bold",iconBefore:"info",children:"In Progress"})]}),parameters:{controls:{disable:!0}}},y={name:"Ex: Category Tags",render:()=>e.jsxs(t,{gap:"8",children:[e.jsx(n,{hue:"violet",children:"Design"}),e.jsx(n,{hue:"cyan",children:"Engineering"}),e.jsx(n,{hue:"orange",children:"Marketing"}),e.jsx(n,{hue:"green",children:"Sales"}),e.jsx(n,{hue:"pink",children:"Support"})]}),parameters:{controls:{disable:!0}}},m={args:{variant:"default",hue:"slate",children:"Tag Label"}},ue=["Default","Bold","VariantComparison","Sizes","ResponsiveSize","ResponsiveSizeNarrow","WithIcons","StatusTags","CategoryTags","Interactive"];var j,S,B;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(S=u.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var k,W,z;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var A,I,G;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(I=h.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var C,R,F;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(R=x.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var E,M,_,O,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...responsiveSizeStory,
  play: async context => {
    // Fail loudly if the test viewport drops below \`md\`, rather than
    // repeating the narrow-viewport checks.
    expect(window.matchMedia(mdBreakpoint).matches).toBe(true);
    await responsiveSizeStory.play?.(context);
  }
}`,...(_=(M=l.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"`size` accepts conditional values. Resize the viewport across the `md`\nbreakpoint (768px) to see each tag and its icon switch size together.",...(V=(O=l.parameters)==null?void 0:O.docs)==null?void 0:V.description}}};var D,P,L,N,q;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...responsiveSizeStory,
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  play: async context => {
    // Fail loudly if the viewport global stops applying, rather than
    // repeating the wide-viewport checks. Below \`xs\`, the array tag also
    // checks its \`md\` fallback.
    expect(window.matchMedia(xsBreakpoint).matches).toBe(false);
    await responsiveSizeStory.play?.(context);
  }
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source},description:{story:"The same tags below the `md` breakpoint.",...(q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var H,K,U;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(K=T.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,$,J;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=($=f.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,re,ae,te;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    hue: 'slate',
    children: 'Tag Label'
  }
}`,...(re=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"Interactive playground to test all props",...(te=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};export{g as Bold,y as CategoryTags,u as Default,m as Interactive,l as ResponsiveSize,d as ResponsiveSizeNarrow,x as Sizes,f as StatusTags,h as VariantComparison,T as WithIcons,ue as __namedExportsOrder,pe as default};
