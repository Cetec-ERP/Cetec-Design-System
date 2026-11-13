import{i as o,j as t,B as i}from"./iframe-B6tPLa_9.js";import{B as n}from"./Button-tb94KQ29.js";import"./preload-helper-D8YtVqxL.js";import"./Spinner-CbuZdhOF.js";import"./FieldContext-Ab3N6kDM.js";const{expect:r,userEvent:q,within:y}=__STORYBOOK_MODULE_TEST__,tt={title:"Components/Tooltip",component:o,parameters:{layout:"centered"},args:{text:"This is a tooltip",placement:"bottom",caret:!0,size:"md"},argTypes:{placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},size:{control:"select",options:["sm","md","lg"]},caret:{control:"boolean"},disabled:{control:"boolean"},delay:{control:"number"}}},c={render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"Hover or focus me"})})},p={args:{title:"Tooltip title",text:"Supporting description text."},render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"Hover me"})})},d={args:{caret:!1},render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"No caret"})})},m={render:e=>t.jsxs(i,{display:"flex",gap:"32",alignItems:"center",children:[t.jsx(o,{...e,size:"sm",text:"Small tooltip",children:t.jsx(n,{size:"sm",children:"Small"})}),t.jsx(o,{...e,size:"md",text:"Medium tooltip",children:t.jsx(n,{children:"Medium"})}),t.jsx(o,{...e,size:"lg",text:"Large tooltip",children:t.jsx(n,{size:"lg",children:"Large"})})]})},u={render:e=>t.jsx(i,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16",children:["top-start","top","top-end","left","","right","bottom-start","bottom","bottom-end"].map(s=>s?t.jsx(o,{...e,placement:s,text:s,children:t.jsx(n,{w:"full",children:s})},s):t.jsx(i,{},"empty"))})},h={args:{delay:{open:500,close:200},text:"Opens after 500ms delay"},render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"Delayed tooltip"})})},l={render:e=>t.jsxs(i,{display:"flex",gap:"16",children:[t.jsx(n,{children:"Tab past this"}),t.jsx(o,{...e,text:"Triggered by keyboard focus",children:t.jsx(n,{children:"Focus me with Tab"})})]})},g={name:"Test: asChild adds no wrapper",tags:["!snapshot"],args:{asChild:!0,text:"Copies the link"},render:e=>t.jsx(i,{display:"flex",gap:"16","data-testid":"row",children:t.jsx(o,{...e,children:t.jsx(n,{children:"Copy link"})})}),play:async({canvasElement:e})=>{const s=y(e),a=s.getByRole("button",{name:"Copy link"});await r(a.parentElement).toBe(s.getByTestId("row")),await q.tab(),await r(a).toHaveFocus();const G=await y(document.body).findByRole("tooltip");await r(G).toHaveTextContent("Copies the link"),await r(a).toHaveAccessibleDescription("Copies the link")}},x={name:"Test: asChild joins descriptions",tags:["!snapshot"],args:{asChild:!0,text:"Copies the link"},render:e=>t.jsxs(i,{display:"flex",gap:"16",alignItems:"center",children:[t.jsx(o,{...e,children:t.jsx(n,{"aria-describedby":"copy-link-hint",children:"Copy link"})}),t.jsx(i,{as:"span",id:"copy-link-hint",children:"Anyone with the link can view."})]}),play:async({canvasElement:e})=>{const a=y(e).getByRole("button",{name:"Copy link"});await r(a).toHaveAccessibleDescription("Anyone with the link can view."),await q.tab(),await r(a).toHaveFocus(),await y(document.body).findByRole("tooltip"),await r(a).toHaveAccessibleDescription("Anyone with the link can view. Copies the link")}},et=["Default","WithTitle","NoCaret","Sizes","AllPlacements","WithDelay","KeyboardFocus","AsChild","AsChildJoinsDescriptions"];var b,B,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>Hover or focus me</Button>
    </Tooltip>
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var w,v,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip title',
    text: 'Supporting description text.'
  },
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...(C=(v=p.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,f,j;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    caret: false
  },
  render: args => <Tooltip {...args}>
      <Button>No caret</Button>
    </Tooltip>
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,A,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Box display="flex" gap="32" alignItems="center">
      <Tooltip {...args} size="sm" text="Small tooltip">
        <Button size="sm">Small</Button>
      </Tooltip>
      <Tooltip {...args} size="md" text="Medium tooltip">
        <Button>Medium</Button>
      </Tooltip>
      <Tooltip {...args} size="lg" text="Large tooltip">
        <Button size="lg">Large</Button>
      </Tooltip>
    </Box>
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,z,E;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="16">
      {(['top-start', 'top', 'top-end', 'left', '', 'right', 'bottom-start', 'bottom', 'bottom-end'] as const).map(p => p ? <Tooltip key={p} {...args} placement={p} text={p}>
            <Button w="full">{p}</Button>
          </Tooltip> : <Box key="empty" />)}
    </Box>
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var F,R,I;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    delay: {
      open: 500,
      close: 200
    },
    text: 'Opens after 500ms delay'
  },
  render: args => <Tooltip {...args}>
      <Button>Delayed tooltip</Button>
    </Tooltip>
}`,...(I=(R=h.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var _,O,K,L,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Box display="flex" gap="16">
      <Button>Tab past this</Button>
      <Tooltip {...args} text="Triggered by keyboard focus">
        <Button>Focus me with Tab</Button>
      </Tooltip>
    </Box>
}`,...(K=(O=l.parameters)==null?void 0:O.docs)==null?void 0:K.source},description:{story:"Demonstrates keyboard accessibility — Tab to the button to trigger the tooltip",...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var N,W,J;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Test: asChild adds no wrapper',
  // Behavior test only. It looks the same as "Keyboard Focus".
  tags: ['!snapshot'],
  args: {
    asChild: true,
    text: 'Copies the link'
  },
  render: args => <Box display="flex" gap="16" data-testid="row">
      <Tooltip {...args}>
        <Button>Copy link</Button>
      </Tooltip>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await expect(button.parentElement).toBe(canvas.getByTestId('row'));
    await userEvent.tab();
    await expect(button).toHaveFocus();
    const tooltip = await within(document.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('Copies the link');
    await expect(button).toHaveAccessibleDescription('Copies the link');
  }
}`,...(J=(W=g.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var P,U,Y;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Test: asChild joins descriptions',
  // Behavior test only. It looks the same as "Keyboard Focus".
  tags: ['!snapshot'],
  args: {
    asChild: true,
    text: 'Copies the link'
  },
  render: args => <Box display="flex" gap="16" alignItems="center">
      <Tooltip {...args}>
        <Button aria-describedby="copy-link-hint">Copy link</Button>
      </Tooltip>
      <Box as="span" id="copy-link-hint">
        Anyone with the link can view.
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await expect(button).toHaveAccessibleDescription('Anyone with the link can view.');
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await within(document.body).findByRole('tooltip');
    await expect(button).toHaveAccessibleDescription('Anyone with the link can view. Copies the link');
  }
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};export{u as AllPlacements,g as AsChild,x as AsChildJoinsDescriptions,c as Default,l as KeyboardFocus,d as NoCaret,m as Sizes,h as WithDelay,p as WithTitle,et as __namedExportsOrder,tt as default};
