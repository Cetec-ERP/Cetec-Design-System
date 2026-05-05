import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as N,e as O,s as U,c as V,g as D,b as F,B as t,d as G}from"./Box-DON8OdPK.js";import{C as $}from"./Card-Djc-wNfS.js";import{T as r}from"./Text-BxMUKbtC.js";import{T as z}from"./Tooltip-CbjHgvJ3.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./floating-KWRh7SVq.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const C={variant:"default"},M=[],W=[["kbdGroup","kbd__kbdGroup"],["key","kbd__key"]],q=W.map(([s,o])=>[s,V(o,C,D(M,s))]),L=N((s={})=>Object.fromEntries(q.map(([o,l])=>[o,l.recipeFn(s)]))),m=["variant"],H=s=>({...C,...O(s)}),I=Object.assign(L,{__recipe__:!1,__name__:"kbd",raw:s=>s,classNameMap:{},variantKeys:m,variantMap:{variant:["default","symbol"]},splitVariantProps(s){return U(s,m)},getVariantProps:H}),B={"⌘":"command","⌥":"option","⌃":"control","⇪":"shift","⎋":"escape","⌫":"delete","↩":"return","⇥":"tab","←":"left","→":"right","↑":"up","↓":"down"},v=s=>s in B,J=s=>v(s)?B[s]:s,u=I({}),Q=I({variant:"symbol"}),a=s=>{const{keys:o,...l}=s,[w,E]=F(l),P=o.map(J).join(" + "),R=e.jsx(t,{as:"span",className:G(u.kbdGroup,w),...E,children:o.map((p,A)=>e.jsx(t,{as:"kbd",className:v(p)?Q.key:u.key,children:p},`${p}-${A}`))});return e.jsx(z,{text:P,children:R})};a.__docgenInfo={description:`Used to display keyboard shortcuts.
Supported special symbols: ⌘ command, ⌥ option, ⌃ control, ⇪ shift,
⎋ escape, ⌫ delete, ↩ return, ⇥ tab, ← left, → right, ↑ up, ↓ down.
Example: <Kbd keys={['⌘', 'K']} />`,methods:[],displayName:"Kbd",props:{keys:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"KbdValue[]"},description:""}}};const ce={title:"Components/Kbd",component:a,tags:["autodocs"],parameters:{layout:"centered"},args:{keys:["⌘","K"]}},n={},c={render:()=>e.jsxs(r,{children:["Press ",e.jsx(a,{keys:["⌘","K"]})," to open global search."]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Shortcut Reference",render:()=>e.jsxs($,{p:"16",display:"grid",gap:"12",minW:"sm",children:[e.jsx(r,{as:"strong",children:"Keyboard shortcuts"}),e.jsxs(t,{display:"grid",gap:"8",children:[e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{children:"Search"}),e.jsx(a,{keys:["⌘","K"]})]}),e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{children:"Save draft"}),e.jsx(a,{keys:["⌘","S"]})]}),e.jsxs(t,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{children:"Open command menu"}),e.jsx(a,{keys:["⇪","?"]})]})]})]}),parameters:{controls:{disable:!0}}},i={name:"A11y: Semantic Keyboard Input",render:()=>e.jsxs(t,{display:"grid",gap:"10",children:[e.jsxs(r,{children:["Use ",e.jsx(a,{keys:["Esc"]})," to close the dialog and return focus to the trigger."]}),e.jsx(r,{size:"14",color:"text.subtle",children:"`Kbd` should be reserved for actual keyboard input, not for badge-like status labels or decorative pills."})]}),parameters:{controls:{disable:!0}}};var b,x,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,f,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Text>
      Press <Kbd keys={['⌘', 'K']} /> to open global search.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,j,K;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(K=(j=d.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var S,T,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const de=["Default","InlineUsage","ExShortcutReference","A11ySemanticKeyboardInput"];export{i as A11ySemanticKeyboardInput,n as Default,d as ExShortcutReference,c as InlineUsage,de as __namedExportsOrder,ce as default};
