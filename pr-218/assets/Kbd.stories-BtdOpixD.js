import{j as e,T as s,B as t}from"./iframe-DMd1B6rC.js";import{C as j}from"./Card-DYcEXgGT.js";import{K as r}from"./Kbd-cgN7mF7v.js";import"./preload-helper--E47Ns1F.js";const B={title:"Components/Kbd",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{keys:["⌘","K"]}},n={},a={render:()=>e.jsxs(s,{children:["Press ",e.jsx(r,{keys:["⌘","K"]})," to open global search."]}),parameters:{controls:{disable:!0}}},o={name:"Ex: Shortcut Reference",render:()=>e.jsxs(j,{p:"16",display:"grid",gap:"12",minW:"sm",children:[e.jsx(s,{as:"strong",children:"Keyboard shortcuts"}),e.jsxs(t,{display:"grid",gap:"8",children:[e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{children:"Search"}),e.jsx(r,{keys:["⌘","K"]})]}),e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{children:"Save draft"}),e.jsx(r,{keys:["⌘","S"]})]}),e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{children:"Open command menu"}),e.jsx(r,{keys:["⇪","?"]})]})]})]}),parameters:{controls:{disable:!0}}},c={name:"A11y: Semantic Keyboard Input",render:()=>e.jsxs(t,{display:"grid",gap:"10",children:[e.jsxs(s,{children:["Use ",e.jsx(r,{keys:["Esc"]})," to close the dialog and return focus to the trigger."]}),e.jsx(s,{size:"14",color:"text.subtle",children:"`Kbd` should be reserved for actual keyboard input, not for badge-like status labels or decorative pills."})]}),parameters:{controls:{disable:!0}}},I=["Default","InlineUsage","ExShortcutReference","A11ySemanticKeyboardInput"];var d,l,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,u,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Text>
      Press <Kbd keys={['⌘', 'K']} /> to open global search.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var m,y,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,f,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};export{c as A11ySemanticKeyboardInput,n as Default,o as ExShortcutReference,a as InlineUsage,I as __namedExportsOrder,B as default};
