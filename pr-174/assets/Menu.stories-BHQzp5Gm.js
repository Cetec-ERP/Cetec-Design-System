import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{H as Ee,V as N,F as Oe,B as F}from"./Box-C4uJrM56.js";import{B as Te}from"./BreakpointIndicator-UAj0eeS4.js";import{B as p}from"./Button-CQNMiShy.js";import{F as S}from"./FormField-BAS4vcto.js";import{T as ke}from"./Text-MsVbvEyI.js";import{T as g}from"./TextInput-TktSvZaz.js";import{M as a,a as n,b as h,S as r}from"./SubMenu-B--nSCIn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-C_pdiug7.js";import"./radii-qsSgFAtK.js";import"./index-DOpYXeGo.js";import"./colors-CSSfwm93.js";import"./Tag-BRfUOjSh.js";import"./Icon-DVkTIUY6.js";import"./IconConfig-CwDT3tlP.js";import"./Spinner-DQMshQyu.js";import"./FieldContext-D6URyQos.js";import"./Label-Md2wWTZa.js";import"./Tooltip-BTuY3Pe3.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-BHliuBHk.js";import"./ListItem-CA4sLCTj.js";import"./Divider-BN4yVLcR.js";import"./Checkbox-D03hsQ_a.js";import"./Toggle-gSazCA-r.js";import"./menu-CIKCa2hY.js";const xn={title:"Components/Menu",component:a,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},Ce=()=>{const[l,s]=d.useState("item-2");return e.jsxs(a,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{label:"Option One",selected:l==="item-1",onClick:()=>s("item-1")}),e.jsx(n,{label:"Option Two",selected:l==="item-2",onClick:()=>s("item-2")}),e.jsx(n,{label:"Option Three",selected:l==="item-3",onClick:()=>s("item-3")})]})},We=()=>{const[l,s]=d.useState(["beta"]),c=u=>{s(i=>i.includes(u)?i.filter(m=>m!==u):[...i,u])};return e.jsx(a,{inline:!0,closeOnSelect:!1,children:e.jsxs(h,{label:"Wave type",children:[e.jsx(n,{variant:"checkbox",label:"Alpha",selected:l.includes("alpha"),onClick:()=>c("alpha")}),e.jsx(n,{variant:"checkbox",label:"Beta",selected:l.includes("beta"),onClick:()=>c("beta")}),e.jsx(n,{variant:"checkbox",label:"Gamma",selected:l.includes("gamma"),onClick:()=>c("gamma")})]})})},De=()=>{const[l,s]=d.useState(!1),[c,u]=d.useState(!0);return e.jsxs(a,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(h,{label:"Options",divider:!0,children:[e.jsx(n,{variant:"toggle",label:"Compact mode",selected:l,onClick:()=>s(i=>!i)}),e.jsx(n,{variant:"toggle",label:"Email alerts",selected:c,onClick:()=>u(i=>!i)})]}),e.jsx(n,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},Fe=()=>{const[l,s]=d.useState(""),[c,u]=d.useState(""),[i,m]=d.useState(""),[b,o]=d.useState("");return e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(n,{label:"Dashboard"}),e.jsx(r,{label:"Edit profile",children:e.jsxs(F,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Profile name",labelFor:"profile-name",children:e.jsx(g,{id:"profile-name",name:"profileName",value:l,onChange:t=>s(t.target.value)})}),e.jsx(S,{label:"Owner",labelFor:"profile-owner",children:e.jsx(g,{id:"profile-owner",name:"profileOwner",value:c,onChange:t=>u(t.target.value)})}),e.jsx(p,{variant:"primary",children:"Submit"})]})}),e.jsx(r,{label:"Create alert",children:e.jsxs(F,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Topic",labelFor:"alert-topic",children:e.jsx(g,{id:"alert-topic",name:"alertTopic",value:i,onChange:t=>m(t.target.value)})}),e.jsx(S,{label:"Channel",labelFor:"alert-channel",children:e.jsx(g,{id:"alert-channel",name:"alertChannel",value:b,onChange:t=>o(t.target.value)})}),e.jsx(p,{variant:"primary",children:"Submit"})]})})]})},Ne=()=>{const[l,s]=d.useState("");return e.jsxs(N,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(g,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:l,onChange:c=>s(c.target.value)}),e.jsxs(a,{inline:!0,query:l,filterMode:"contains",highlightMatches:!0,children:[e.jsx(n,{label:"Account settings",description:"Manage profile and security"}),e.jsx(n,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(n,{label:"Integrations",description:"Connect external tools"}),e.jsx(n,{label:"Audit history",description:"Track critical events"})]})]})},f={render:()=>e.jsxs(a,{inline:!0,children:[e.jsx(n,{label:"Edit",iconBefore:"pencil"}),e.jsx(n,{label:"Duplicate",iconBefore:"copy"}),e.jsx(n,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(a,{inline:!0,children:[e.jsxs(h,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Rename"}),e.jsx(n,{label:"Move"})]}),e.jsx(h,{label:"Danger Zone",children:e.jsx(n,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsx(Ce,{}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsx(We,{}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsxs(Ee,{gap:"12",alignItems:"flex-start",children:[e.jsxs(a,{inline:!0,density:"compact",children:[e.jsx(n,{label:"Compact",description:"Small row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(a,{inline:!0,density:"comfortable",children:[e.jsx(n,{label:"Comfortable",description:"Default row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(a,{inline:!0,density:"spacious",children:[e.jsx(n,{label:"Spacious",description:"Large row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs(N,{children:[e.jsxs(a,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(h,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(n,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(r,{label:"More actions",iconBefore:"apps",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(r,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),e.jsxs(ke,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Te,{})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsx(De,{}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(n,{label:"View profile"}),e.jsxs(r,{label:"More actions",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(r,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},Pe=()=>{const l=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],s=["sales","production","admin"],[c,u]=d.useState(null),i=o=>({open:c===o,onOpenChange:t=>{if(t){u(o);return}u(j=>j===o?null:j)}}),m=(o,t)=>{const j=s.indexOf(t),P=s.length,R=(j+o+P*10)%P,V=s[R],M=l[R];if(V===void 0)return;if(!(c!==null)){window.requestAnimationFrame(()=>{var x;M&&((x=document.getElementById(M))==null||x.focus())});return}window.requestAnimationFrame(()=>{var x;u(V),M&&((x=document.getElementById(M))==null||x.focus())})},b=o=>t=>{t.key!=="ArrowLeft"&&t.key!=="ArrowRight"||(t.preventDefault(),t.stopPropagation(),m(t.key==="ArrowRight"?1:-1,o))};return e.jsx(N,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(F,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:l[0],variant:"selectedBold",onKeyDown:b("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:o=>m(o,"sales"),...i("sales"),children:[e.jsxs(r,{label:"Quotes",children:[e.jsx(n,{label:"Open quotes"}),e.jsx(n,{label:"Draft quotes"})]}),e.jsxs(r,{label:"Orders",selected:!0,children:[e.jsx(n,{label:"Order list"}),e.jsxs(r,{label:"Used orders",selected:!0,children:[e.jsx(n,{label:"Order as used",selected:!0}),e.jsx(n,{label:"Bookings"}),e.jsx(n,{label:"Order commissions"})]})]}),e.jsxs(r,{label:"Invoices",children:[e.jsx(n,{label:"All invoices"}),e.jsx(n,{label:"Credit notes"})]})]}),e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:l[1],onKeyDown:b("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:o=>m(o,"production"),...i("production"),children:[e.jsxs(r,{label:"Work Orders",children:[e.jsx(n,{label:"Open work orders"}),e.jsx(n,{label:"Completed"})]}),e.jsxs(r,{label:"Scheduling",children:[e.jsx(n,{label:"Production schedule"}),e.jsx(n,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(n,{label:"Inventory"})]}),e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:l[2],onKeyDown:b("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:o=>m(o,"admin"),...i("admin"),children:[e.jsxs(r,{label:"Users",children:[e.jsx(n,{label:"All users"}),e.jsx(n,{label:"Roles & permissions"})]}),e.jsxs(r,{label:"Settings",children:[e.jsx(n,{label:"General"}),e.jsx(n,{label:"Integrations"}),e.jsx(n,{label:"Billing"})]}),e.jsx(n,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},E={name:"Top nav example",render:()=>e.jsx(Pe,{}),parameters:{controls:{disable:!0}}},T={render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(n,{label:"Dashboard"}),e.jsxs(r,{label:"Settings",children:[e.jsx(n,{label:"Profile"}),e.jsx(n,{label:"Billing"}),e.jsxs(r,{label:"Team",children:[e.jsx(n,{label:"Members"}),e.jsx(n,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsx(Fe,{}),parameters:{controls:{disable:!0}}},C={render:()=>e.jsx(Ne,{}),parameters:{controls:{disable:!0}}},W={name:"Panel as sidebar",render:()=>e.jsx(Oe,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(a,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(r,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(r,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},D={name:"Panel as mobile nav",render:()=>e.jsx(Oe,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(a,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(r,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(r,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var _,G,q;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Menu inline>
      <MenuItem label="Edit" iconBefore="pencil" />
      <MenuItem label="Duplicate" iconBefore="copy" />
      <MenuItem label="Archive" iconBefore="trash" />
    </Menu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(G=f.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var H,K,L;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Menu inline>
      <MenuGroup label="Actions" divider>
        <MenuItem label="Rename" />
        <MenuItem label="Move" />
      </MenuGroup>
      <MenuGroup label="Danger Zone">
        <MenuItem label="Delete" iconBefore="trash" />
      </MenuGroup>
    </Menu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(L=(K=I.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var U,z,Q;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Z,J,X;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(J=w.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,$,ee;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <HStack gap="12" alignItems="flex-start">
      <Menu inline density="compact">
        <MenuItem label="Compact" description="Small row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
      <Menu inline density="comfortable">
        <MenuItem label="Comfortable" description="Default row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
      <Menu inline density="spacious">
        <MenuItem label="Spacious" description="Large row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=($=A.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,re,le;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <VStack>
      <Menu inline closeOnSelect={false} density={{
      base: 'spacious',
      xs: 'comfortable',
      sm: 'compact'
    }}>
        <MenuGroup label="Actions" divider>
          <MenuItem label="Edit profile" iconBefore="pencil" />
          <MenuItem label="Notifications" iconBefore="bell" />
        </MenuGroup>
        <SubMenu label="More actions" iconBefore="apps">
          <MenuItem label="Export" />
          <MenuItem label="Share" />
          <SubMenu label="Advanced">
            <MenuItem label="Audit log" />
            <MenuItem label="Settings" />
          </SubMenu>
        </SubMenu>
      </Menu>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"spacious"',
        xs: '"comfortable"',
        sm: '"compact"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ae,te,se;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(te=B.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ie,ce;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open menu</Button>} subMenuInteraction="hover">
      <MenuItem label="View profile" />
      <SubMenu label="More actions">
        <MenuItem label="Export" />
        <MenuItem label="Share" />
        <SubMenu label="Advanced">
          <MenuItem label="Audit log" />
          <MenuItem label="Settings" />
        </SubMenu>
      </SubMenu>
    </Menu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,me;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(de=E.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,be,xe;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open menu</Button>} subMenuInteraction="digin">
      <MenuItem label="Dashboard" />
      <SubMenu label="Settings">
        <MenuItem label="Profile" />
        <MenuItem label="Billing" />
        <SubMenu label="Team">
          <MenuItem label="Members" />
          <MenuItem label="Permissions" />
        </SubMenu>
      </SubMenu>
    </Menu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(xe=(be=T.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var ge,he,je;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(je=(he=k.parameters)==null?void 0:he.docs)==null?void 0:je.source}}};var Me,Se,fe;C.parameters={...C.parameters,docs:{...(Me=C.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(fe=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var Ie,ve,we;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Panel as sidebar',
  render: () => <Flex minW="3xl" h="lg" bg="bg.neutral" overflow="hidden" boxShadow="overlay">
      <Menu subMenuInteraction="hover" panel={true} maxW="264" density="comfortable">
        <MenuItem label="View profile" />
        <SubMenu label="More actions" minW="180">
          <MenuItem label="Export" />
          <MenuItem label="Share" />
          <SubMenu label="Advanced" minW="180">
            <MenuItem label="Audit log" />
            <MenuItem label="Settings" />
          </SubMenu>
        </SubMenu>
      </Menu>
    </Flex>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(we=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Ae,ye,Be;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Panel as mobile nav',
  render: () => <Flex minW="3xl" h="lg" bg="bg.neutral" overflow="hidden" boxShadow="overlay">
      <Menu subMenuInteraction="digin" panel={true} maxW="264" w="full" density="comfortable">
        <MenuItem label="View profile" />
        <SubMenu label="More actions" minW="180">
          <MenuItem label="Export" />
          <MenuItem label="Share" />
          <SubMenu label="Advanced" minW="180">
            <MenuItem label="Audit log" />
            <MenuItem label="Settings" />
          </SubMenu>
        </SubMenu>
      </Menu>
    </Flex>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};const gn=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{f as Actions,I as ActionsWithSections,C as AutocompleteFiltering,y as ConditionalBreakpoints,A as Density,w as MultiSelect,D as PanelAsMobileNav,W as PanelAsSidebar,v as SingleSelect,T as SubMenuDigin,k as SubMenuDiginForms,O as SubMenuHover,B as ToggleOptions,E as TopNavExample,gn as __namedExportsOrder,xn as default};
