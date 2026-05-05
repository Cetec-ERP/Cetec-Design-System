import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Box-B-dS-qo0.js";import{C as j}from"./Card-BgYlC3B_.js";import{T as r}from"./Text-BlqN2xhk.js";import{K as s}from"./Kbd-vx7P-UWv.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-CVhgND-1.js";import"./floating-KWRh7SVq.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const A={title:"Components/Kbd",component:s,tags:["autodocs"],parameters:{layout:"centered"},args:{keys:["⌘","K"]}},a={},o={render:()=>e.jsxs(r,{children:["Press ",e.jsx(s,{keys:["⌘","K"]})," to open global search."]}),parameters:{controls:{disable:!0}}},n={name:"Ex: Shortcut Reference",render:()=>e.jsxs(j,{p:"16",display:"grid",gap:"12",minW:"sm",children:[e.jsx(r,{as:"strong",children:"Keyboard shortcuts"}),e.jsxs(t,{display:"grid",gap:"8",children:[e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{children:"Search"}),e.jsx(s,{keys:["⌘","K"]})]}),e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{children:"Save draft"}),e.jsx(s,{keys:["⌘","S"]})]}),e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{children:"Open command menu"}),e.jsx(s,{keys:["⇪","?"]})]})]})]}),parameters:{controls:{disable:!0}}},c={name:"A11y: Semantic Keyboard Input",render:()=>e.jsxs(t,{display:"grid",gap:"10",children:[e.jsxs(r,{children:["Use ",e.jsx(s,{keys:["Esc"]})," to close the dialog and return focus to the trigger."]}),e.jsx(r,{size:"14",color:"text.subtle",children:"`Kbd` should be reserved for actual keyboard input, not for badge-like status labels or decorative pills."})]}),parameters:{controls:{disable:!0}}};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Text>
      Press <Kbd keys={['⌘', 'K']} /> to open global search.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,y,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Ex: Shortcut Reference',
  render: () => <Card p="16" display="grid" gap="12" minW="sm">
      <Text as="strong">Keyboard shortcuts</Text>
      <Box display="grid" gap="8">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text>Search</Text>
          <Kbd keys={['⌘', 'K']} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text>Save draft</Text>
          <Kbd keys={['⌘', 'S']} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text>Open command menu</Text>
          <Kbd keys={['⇪', '?']} />
        </Box>
      </Box>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,f,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'A11y: Semantic Keyboard Input',
  render: () => <Box display="grid" gap="10">
      <Text>
        Use <Kbd keys={['Esc']} /> to close the dialog and return focus to the
        trigger.
      </Text>
      <Text size="14" color="text.subtle">
        \`Kbd\` should be reserved for actual keyboard input, not for badge-like
        status labels or decorative pills.
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const U=["Default","InlineUsage","ExShortcutReference","A11ySemanticKeyboardInput"];export{c as A11ySemanticKeyboardInput,a as Default,n as ExShortcutReference,o as InlineUsage,U as __namedExportsOrder,A as default};
