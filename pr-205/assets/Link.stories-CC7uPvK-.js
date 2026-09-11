import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as i}from"./dsComponent-D6ec2IT1.js";import{L as r}from"./Link-B_W8b6O5.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-12cJPaFt.js";const v={title:"Components/Link",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{href:"#",children:"Read more"}},a={},n={render:()=>e.jsxs(i,{display:"grid",gap:"12",children:[e.jsx(r,{href:"#",family:"body",size:"16",children:"Standard internal link"}),e.jsx(r,{href:"#",family:"mono",size:"14",children:"Monospace link"}),e.jsx(r,{href:"https://cetecerp.com",external:!0,children:"External link with icon"})]}),parameters:{controls:{disable:!0}}},s={render:()=>e.jsxs(i,{display:"grid",gap:"12",maxW:"prose",children:[e.jsx(r,{href:"#",children:"Hover to see the underline strengthen"}),e.jsx(r,{href:"#",family:"mono",size:"14",children:"Focus with the keyboard to see the focus treatment"})]}),parameters:{controls:{disable:!0}}},t={name:"Ex: In Paragraph Copy",render:()=>e.jsxs(i,{maxW:"prose",children:["To learn about API credentials, visit the"," ",e.jsx(r,{href:"#",children:"account settings guide"})," before connecting your ERP integration."]}),parameters:{controls:{disable:!0}}},o={name:"Ex: Disabled State",render:()=>e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(r,{href:"#",disabled:!0,children:"Disabled action while saving"}),e.jsx(r,{href:"#",children:"Enabled action"})]}),parameters:{controls:{disable:!0}}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12">
      <Link href="#" family="body" size="16">
        Standard internal link
      </Link>
      <Link href="#" family="mono" size="14">
        Monospace link
      </Link>
      <Link href="https://cetecerp.com" external>
        External link with icon
      </Link>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" maxW="prose">
      <Link href="#">Hover to see the underline strengthen</Link>
      <Link href="#" family="mono" size="14">
        Focus with the keyboard to see the focus treatment
      </Link>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,b,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Ex: In Paragraph Copy',
  render: () => <Box maxW="prose">
      To learn about API credentials, visit the{' '}
      <Link href="#">account settings guide</Link> before connecting your ERP
      integration.
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,L,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Ex: Disabled State',
  render: () => <Box display="grid" gap="8">
      <Link href="#" disabled>
        Disabled action while saving
      </Link>
      <Link href="#">Enabled action</Link>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(L=o.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const w=["Default","Variants","UnderlineInteraction","ExInParagraph","ExDisabled"];export{a as Default,o as ExDisabled,t as ExInParagraph,s as UnderlineInteraction,n as Variants,w as __namedExportsOrder,v as default};
