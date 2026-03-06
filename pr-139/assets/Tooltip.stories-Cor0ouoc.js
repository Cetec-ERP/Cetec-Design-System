import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as m}from"./Box-7HecziK7.js";import{B as o}from"./Button-dQDHk8vC.js";import{T as r}from"./Tooltip-COlECLKP.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Bj4A0bIZ.js";import"./Spinner-8UulBtMs.js";import"./floating-ui.react-B-Gez0OS.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Text-DorGSoIa.js";const U={title:"Components/Tooltip",component:r,parameters:{layout:"centered"},args:{text:"This is a tooltip",placement:"bottom",caret:!0,size:"md"},argTypes:{placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},size:{control:"select",options:["sm","md","lg"]},caret:{control:"boolean"},delay:{control:"number"}}},n={render:e=>t.jsx(r,{...e,children:t.jsx(o,{children:"Hover or focus me"})})},i={args:{title:"Tooltip title",text:"Supporting description text."},render:e=>t.jsx(r,{...e,children:t.jsx(o,{children:"Hover me"})})},l={args:{caret:!1},render:e=>t.jsx(r,{...e,children:t.jsx(o,{children:"No caret"})})},p={render:e=>t.jsxs(m,{display:"flex",gap:"32",alignItems:"center",children:[t.jsx(r,{...e,size:"sm",text:"Small tooltip",children:t.jsx(o,{size:"sm",children:"Small"})}),t.jsx(r,{...e,size:"md",text:"Medium tooltip",children:t.jsx(o,{children:"Medium"})}),t.jsx(r,{...e,size:"lg",text:"Large tooltip",children:t.jsx(o,{size:"lg",children:"Large"})})]})},c={render:e=>t.jsx(m,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16",children:["top-start","top","top-end","left","","right","bottom-start","bottom","bottom-end"].map(s=>s?t.jsx(r,{...e,placement:s,text:s,children:t.jsx(o,{w:"full",children:s})},s):t.jsx(m,{},"empty"))})},d={args:{delay:{open:500,close:200},text:"Opens after 500ms delay"},render:e=>t.jsx(r,{...e,children:t.jsx(o,{children:"Delayed tooltip"})})},a={render:e=>t.jsxs(m,{display:"flex",gap:"16",children:[t.jsx(o,{children:"Tab past this"}),t.jsx(r,{...e,text:"Triggered by keyboard focus",children:t.jsx(o,{children:"Focus me with Tab"})})]})};var u,g,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var y,f,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    caret: false
  },
  render: args => <Tooltip {...args}>
      <Button>No caret</Button>
    </Tooltip>
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var j,S,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(M=(L=a.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:"Demonstrates keyboard accessibility — Tab to the button to trigger the tooltip",...(W=(N=a.parameters)==null?void 0:N.docs)==null?void 0:W.description}}};const V=["Default","WithTitle","NoCaret","Sizes","AllPlacements","WithDelay","KeyboardFocus"];export{c as AllPlacements,n as Default,a as KeyboardFocus,l as NoCaret,p as Sizes,d as WithDelay,i as WithTitle,V as __namedExportsOrder,U as default};
