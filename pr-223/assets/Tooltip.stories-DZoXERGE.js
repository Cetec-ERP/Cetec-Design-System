import{i as o,j as e,B as m}from"./iframe-CRR58YI_.js";import{B as r}from"./Button-DSBwExzk.js";import"./preload-helper-De6kpJMI.js";import"./Spinner-BwYG2ZPB.js";import"./FieldContext-QFlrTQOk.js";const P={title:"Components/Tooltip",component:o,parameters:{layout:"centered"},args:{text:"This is a tooltip",placement:"bottom",caret:!0,size:"md"},argTypes:{placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},size:{control:"select",options:["sm","md","lg"]},caret:{control:"boolean"},disabled:{control:"boolean"},delay:{control:"number"}}},n={render:t=>e.jsx(o,{...t,children:e.jsx(r,{children:"Hover or focus me"})})},i={args:{title:"Tooltip title",text:"Supporting description text."},render:t=>e.jsx(o,{...t,children:e.jsx(r,{children:"Hover me"})})},l={args:{caret:!1},render:t=>e.jsx(o,{...t,children:e.jsx(r,{children:"No caret"})})},p={render:t=>e.jsxs(m,{display:"flex",gap:"32",alignItems:"center",children:[e.jsx(o,{...t,size:"sm",text:"Small tooltip",children:e.jsx(r,{size:"sm",children:"Small"})}),e.jsx(o,{...t,size:"md",text:"Medium tooltip",children:e.jsx(r,{children:"Medium"})}),e.jsx(o,{...t,size:"lg",text:"Large tooltip",children:e.jsx(r,{size:"lg",children:"Large"})})]})},c={render:t=>e.jsx(m,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16",children:["top-start","top","top-end","left","","right","bottom-start","bottom","bottom-end"].map(s=>s?e.jsx(o,{...t,placement:s,text:s,children:e.jsx(r,{w:"full",children:s})},s):e.jsx(m,{},"empty"))})},d={args:{delay:{open:500,close:200},text:"Opens after 500ms delay"},render:t=>e.jsx(o,{...t,children:e.jsx(r,{children:"Delayed tooltip"})})},a={render:t=>e.jsxs(m,{display:"flex",gap:"16",children:[e.jsx(r,{children:"Tab past this"}),e.jsx(o,{...t,text:"Triggered by keyboard focus",children:e.jsx(r,{children:"Focus me with Tab"})})]})},_=["Default","WithTitle","NoCaret","Sizes","AllPlacements","WithDelay","KeyboardFocus"];var u,g,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>Hover or focus me</Button>
    </Tooltip>
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,T,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip title',
    text: 'Supporting description text.'
  },
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var y,b,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    caret: false
  },
  render: args => <Tooltip {...args}>
      <Button>No caret</Button>
    </Tooltip>
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,S,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var D,k,C;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="16">
      {(['top-start', 'top', 'top-end', 'left', '', 'right', 'bottom-start', 'bottom', 'bottom-end'] as const).map(p => p ? <Tooltip key={p} {...args} placement={p} text={p}>
            <Button w="full">{p}</Button>
          </Tooltip> : <Box key="empty" />)}
    </Box>
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var v,w,F;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var H,L,M,N,W;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Box display="flex" gap="16">
      <Button>Tab past this</Button>
      <Tooltip {...args} text="Triggered by keyboard focus">
        <Button>Focus me with Tab</Button>
      </Tooltip>
    </Box>
}`,...(M=(L=a.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:"Demonstrates keyboard accessibility — Tab to the button to trigger the tooltip",...(W=(N=a.parameters)==null?void 0:N.docs)==null?void 0:W.description}}};export{c as AllPlacements,n as Default,a as KeyboardFocus,l as NoCaret,p as Sizes,d as WithDelay,i as WithTitle,_ as __namedExportsOrder,P as default};
