import{i as o,j as t,B as a}from"./iframe-CMFrGL-w.js";import{B as r}from"./Button-DfO0RAZB.js";import"./preload-helper-D8YtVqxL.js";import"./Spinner-CODAGd6X.js";import"./FieldContext-DRkn5wtm.js";const{expect:i,userEvent:U,within:h}=__STORYBOOK_MODULE_TEST__,V={title:"Components/Tooltip",component:o,parameters:{layout:"centered"},args:{text:"This is a tooltip",placement:"bottom",caret:!0,size:"md"},argTypes:{placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},size:{control:"select",options:["sm","md","lg"]},caret:{control:"boolean"},disabled:{control:"boolean"},delay:{control:"number"}}},l={render:e=>t.jsx(o,{...e,children:t.jsx(r,{children:"Hover or focus me"})})},p={args:{title:"Tooltip title",text:"Supporting description text."},render:e=>t.jsx(o,{...e,children:t.jsx(r,{children:"Hover me"})})},c={args:{caret:!1},render:e=>t.jsx(o,{...e,children:t.jsx(r,{children:"No caret"})})},d={render:e=>t.jsxs(a,{display:"flex",gap:"32",alignItems:"center",children:[t.jsx(o,{...e,size:"sm",text:"Small tooltip",children:t.jsx(r,{size:"sm",children:"Small"})}),t.jsx(o,{...e,size:"md",text:"Medium tooltip",children:t.jsx(r,{children:"Medium"})}),t.jsx(o,{...e,size:"lg",text:"Large tooltip",children:t.jsx(r,{size:"lg",children:"Large"})})]})},m={render:e=>t.jsx(a,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16",children:["top-start","top","top-end","left","","right","bottom-start","bottom","bottom-end"].map(s=>s?t.jsx(o,{...e,placement:s,text:s,children:t.jsx(r,{w:"full",children:s})},s):t.jsx(a,{},"empty"))})},u={args:{delay:{open:500,close:200},text:"Opens after 500ms delay"},render:e=>t.jsx(o,{...e,children:t.jsx(r,{children:"Delayed tooltip"})})},n={render:e=>t.jsxs(a,{display:"flex",gap:"16",children:[t.jsx(r,{children:"Tab past this"}),t.jsx(o,{...e,text:"Triggered by keyboard focus",children:t.jsx(r,{children:"Focus me with Tab"})})]})},g={name:"Test: asChild adds no wrapper",tags:["!snapshot"],args:{asChild:!0,text:"Copies the link"},render:e=>t.jsx(a,{display:"flex",gap:"16","data-testid":"row",children:t.jsx(o,{...e,children:t.jsx(r,{children:"Copy link"})})}),play:async({canvasElement:e})=>{const s=h(e),x=s.getByRole("button",{name:"Copy link"});await i(x.parentElement).toBe(s.getByTestId("row")),await U.tab(),await i(x).toHaveFocus();const P=await h(document.body).findByRole("tooltip");await i(P).toHaveTextContent("Copies the link"),await i(x).toHaveAccessibleDescription("Copies the link")}},X=["Default","WithTitle","NoCaret","Sizes","AllPlacements","WithDelay","KeyboardFocus","AsChild"];var y,T,B;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>Hover or focus me</Button>
    </Tooltip>
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var b,f,j;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip title',
    text: 'Supporting description text.'
  },
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...(j=(f=p.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,C,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    caret: false
  },
  render: args => <Tooltip {...args}>
      <Button>No caret</Button>
    </Tooltip>
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,k,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var D,E,H;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="16">
      {(['top-start', 'top', 'top-end', 'left', '', 'right', 'bottom-start', 'bottom', 'bottom-end'] as const).map(p => p ? <Tooltip key={p} {...args} placement={p} text={p}>
            <Button w="full">{p}</Button>
          </Tooltip> : <Box key="empty" />)}
    </Box>
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var _,F,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var A,R,I,L,M;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Box display="flex" gap="16">
      <Button>Tab past this</Button>
      <Tooltip {...args} text="Triggered by keyboard focus">
        <Button>Focus me with Tab</Button>
      </Tooltip>
    </Box>
}`,...(I=(R=n.parameters)==null?void 0:R.docs)==null?void 0:I.source},description:{story:"Demonstrates keyboard accessibility — Tab to the button to trigger the tooltip",...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var K,N,W;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(N=g.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};export{m as AllPlacements,g as AsChild,l as Default,n as KeyboardFocus,c as NoCaret,d as Sizes,u as WithDelay,p as WithTitle,X as __namedExportsOrder,V as default};
