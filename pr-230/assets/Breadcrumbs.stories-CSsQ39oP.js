import{m as j,e as A,f as L,g as M,h as N,s as H,j as a,T as r,c as V,d as I,B as _,r as O}from"./iframe-DZjfHOlA.js";import{L as P}from"./Link-CWLZHBXR.js";import"./preload-helper-BWCT3BfN.js";const B={},R=[],q=[["wrapper","breadcrumbs__wrapper"],["slash","breadcrumbs__slash"],["linkSegment","breadcrumbs__linkSegment"],["currentSegment","breadcrumbs__currentSegment"]],K=q.map(([e,n])=>[e,M(n,B,N(R,e))]),F=j((e={})=>Object.fromEntries(K.map(([n,s])=>[n,s.recipeFn(e)]))),u=[],G=e=>({...B,...A(e)}),z=Object.assign(F,{__recipe__:!1,__name__:"breadcrumbs",raw:e=>e,classNameMap:{},variantKeys:u,variantMap:{},splitVariantProps(e){return L(e,u)},getVariantProps:G}),i=e=>{const{items:n,...s}=e,[p,D]=H(s),o=z();return a.jsx(r,{...I("Breadcrumbs"),as:"ul",className:V(o.wrapper,p),...D,children:n==null?void 0:n.map((t,T)=>a.jsxs(r,{as:"li",children:[t.href?a.jsx(P,{href:t.href,onClick:t.onClick,className:o.linkSegment,children:t.label}):a.jsx(r,{className:o.currentSegment,children:t.label}),T<(n==null?void 0:n.length)-1&&a.jsx(r,{className:o.slash,children:"/"})]},t.id))})};i.__docgenInfo={description:`Displays the current navigation path as a semantic unordered list.

Linked segments use {@link Link}; segments without \`href\` are rendered as
plain text. Give a linked segment \`onClick\` when the app handles the
navigation itself. Use page navigation instead when the hierarchy is not a path to
the current location.

@example
\`\`\`tsx
<Breadcrumbs
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'invoices', label: 'Invoices' },
  ]}
/>
\`\`\``,methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Stable key for the segment. */
  id: string;
  /** Visible segment text. */
  label: string;
  /** Destination of a linked segment. Omit it for the current page. */
  href?: string;
  /**
   * Called when a linked segment is clicked. Call \`event.preventDefault()\` to
   * handle the navigation in the app, such as a client-side route change or
   * closing a panel, instead of following \`href\`. A segment without \`href\`
   * is plain text and ignores this handler.
   */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Stable key for the segment."},{key:"label",value:{name:"string",required:!0},description:"Visible segment text."},{key:"href",value:{name:"string",required:!1},description:"Destination of a linked segment. Omit it for the current page."},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEvent<HTMLAnchorElement>"},name:"event"}],return:{name:"void"}},required:!1},description:"Called when a linked segment is clicked. Call `event.preventDefault()` to\nhandle the navigation in the app, such as a client-side route change or\nclosing a panel, instead of following `href`. A segment without `href`\nis plain text and ignores this handler."}]}}],raw:"BreadcrumbItem[]"},description:"Ordered path segments. A segment with `href` renders as a link; a segment\nwithout it renders as plain text, which is normally the current page.\nKeep the final segment non-linked when it represents the current page."}}};const{expect:U,userEvent:W,within:Y}=__STORYBOOK_MODULE_TEST__,X={title:"Components/Breadcrumbs",component:i,tags:["autodocs"],parameters:{layout:"centered"},args:{items:[{id:"home",label:"Home",href:"#"},{id:"billing",label:"Billing",href:"#"},{id:"invoice-1242",label:"Invoice #1242"}]}},l={args:{}},c={name:"Ex: Deep Navigation Path",render:()=>a.jsx(_,{maxW:"prose",children:a.jsx(i,{items:[{id:"dashboard",label:"Dashboard",href:"#"},{id:"customers",label:"Customers",href:"#"},{id:"acme",label:"Acme Manufacturing",href:"#"},{id:"contacts",label:"Contacts",href:"#"},{id:"primary",label:"Primary Contact"}]})}),parameters:{controls:{disable:!0}}},d={name:"Ex: Single Level",render:()=>a.jsx(i,{items:[{id:"settings",label:"Settings"}]}),parameters:{controls:{disable:!0}}},m={name:"Ex: Navigation handled by the app",render:function(){const[n,s]=O.useState("Case 1042");return a.jsxs(_,{display:"grid",gap:"12",children:[a.jsx(i,{items:[{id:"cases",label:"Customer Satisfaction",href:"/cases",onClick:p=>{p.preventDefault(),s("Case list")}},{id:"case",label:"#1042"}]}),a.jsxs(r,{size:"14",color:"text.subtle",children:["Showing: ",n]})]})},play:async({canvasElement:e})=>{const n=Y(e);await W.click(n.getByRole("link",{name:"Customer Satisfaction"})),U(n.getByText("Showing: Case list")).toBeInTheDocument()},parameters:{controls:{disable:!0},docs:{description:{story:"Give a linked segment `onClick` when the app handles the navigation, such as a client-side route or closing a drawer. Call `event.preventDefault()` to stop the browser from following `href`."}}}},Z=["Default","ExDeepNavigation","ExSingleLevel","ExHandledInApp"];var h,g,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Ex: Deep Navigation Path',
  render: () => <Box maxW="prose">
      <Breadcrumbs items={[{
      id: 'dashboard',
      label: 'Dashboard',
      href: '#'
    }, {
      id: 'customers',
      label: 'Customers',
      href: '#'
    }, {
      id: 'acme',
      label: 'Acme Manufacturing',
      href: '#'
    }, {
      id: 'contacts',
      label: 'Contacts',
      href: '#'
    }, {
      id: 'primary',
      label: 'Primary Contact'
    }]} />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,k,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Ex: Single Level',
  render: () => <Breadcrumbs items={[{
    id: 'settings',
    label: 'Settings'
  }]} />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var C,E,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Ex: Navigation handled by the app',
  render: function ExHandledInAppRender() {
    const [view, setView] = useState('Case 1042');
    return <Box display="grid" gap="12">
        <Breadcrumbs items={[{
        id: 'cases',
        label: 'Customer Satisfaction',
        href: '/cases',
        onClick: event => {
          // Keep the href for open-in-new-tab, but route in the app.
          event.preventDefault();
          setView('Case list');
        }
      }, {
        id: 'case',
        label: '#1042'
      }]} />
        <Text size="14" color="text.subtle">
          Showing: {view}
        </Text>
      </Box>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('link', {
      name: 'Customer Satisfaction'
    }));
    expect(canvas.getByText('Showing: Case list')).toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Give a linked segment \`onClick\` when the app handles the navigation, such as a client-side route or closing a drawer. Call \`event.preventDefault()\` to stop the browser from following \`href\`.'
      }
    }
  }
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};export{l as Default,c as ExDeepNavigation,m as ExHandledInApp,d as ExSingleLevel,Z as __namedExportsOrder,X as default};
