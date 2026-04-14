import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./Box-7d6-wXl0.js";import{L as r}from"./Link-DJd0oygc.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CdfbFGjj.js";const D={title:"Components/Link",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{href:"#",children:"Read more"}},a={},n={render:()=>e.jsxs(o,{display:"grid",gap:"12",children:[e.jsx(r,{href:"#",family:"body",size:"16",children:"Standard internal link"}),e.jsx(r,{href:"#",family:"mono",size:"14",children:"Monospace link"}),e.jsx(r,{href:"https://cetecerp.com",external:!0,children:"External link with icon"})]}),parameters:{controls:{disable:!0}}},s={name:"Ex: In Paragraph Copy",render:()=>e.jsxs(o,{maxW:"prose",children:["To learn about API credentials, visit the"," ",e.jsx(r,{href:"#",children:"account settings guide"})," before connecting your ERP integration."]}),parameters:{controls:{disable:!0}}},t={name:"Ex: Disabled State",render:()=>e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(r,{href:"#",disabled:!0,children:"Disabled action while saving"}),e.jsx(r,{href:"#",children:"Enabled action"})]}),parameters:{controls:{disable:!0}}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,u,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,f,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const P=["Default","Variants","ExInParagraph","ExDisabled"];export{a as Default,t as ExDisabled,s as ExInParagraph,n as Variants,P as __namedExportsOrder,D as default};
