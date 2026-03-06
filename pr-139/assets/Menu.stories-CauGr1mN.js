import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{H as y,V as ge,F as he,B as k}from"./Box-B-dS-qo0.js";import{B as u}from"./Button-BCsxkfC4.js";import{F as p}from"./FormField-CuT4YOA_.js";import{T as b}from"./TextInput-koRHcdcv.js";import{M as n,a as r,b as m,S as a}from"./SubMenu-DbZ3bp1K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Dq3Qi2uA.js";import"./Spinner-B5Ee-ZZJ.js";import"./Label-C4IxB5qt.js";import"./Text-BlqN2xhk.js";import"./Tooltip-DAdXVz-o.js";import"./floating-ui.react-BYVwYRsa.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Checkbox-C1lhN8Vf.js";import"./Divider-kYvIQ_cX.js";import"./Toggle-by_dp2xY.js";const Re={title:"Components/Menu",component:n,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},Se=()=>{const[t,s]=c.useState("item-2");return e.jsxs(n,{inline:!0,closeOnSelect:!1,children:[e.jsx(r,{label:"Option One",selected:t==="item-1",onClick:()=>s("item-1")}),e.jsx(r,{label:"Option Two",selected:t==="item-2",onClick:()=>s("item-2")}),e.jsx(r,{label:"Option Three",selected:t==="item-3",onClick:()=>s("item-3")})]})},fe=()=>{const[t,s]=c.useState(["beta"]),o=i=>{s(l=>l.includes(i)?l.filter(C=>C!==i):[...l,i])};return e.jsx(n,{inline:!0,closeOnSelect:!1,children:e.jsxs(m,{label:"Wave type",children:[e.jsx(r,{variant:"checkbox",label:"Alpha",selected:t.includes("alpha"),onClick:()=>o("alpha")}),e.jsx(r,{variant:"checkbox",label:"Beta",selected:t.includes("beta"),onClick:()=>o("beta")}),e.jsx(r,{variant:"checkbox",label:"Gamma",selected:t.includes("gamma"),onClick:()=>o("gamma")})]})})},Ie=()=>{const[t,s]=c.useState(!1),[o,i]=c.useState(!0);return e.jsxs(y,{alignItems:"flex-start",gap:"16",children:[e.jsxs(n,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(m,{label:"Options",divider:!0,children:[e.jsx(r,{variant:"toggle",label:"Compact mode",selected:t,onClick:()=>s(l=>!l)}),e.jsx(r,{variant:"toggle",label:"Email alerts",selected:o,onClick:()=>i(l=>!l)})]}),e.jsx(r,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]}),e.jsxs(n,{inline:!0,closeOnSelect:!1,w:"264",density:"comfortable",children:[e.jsxs(m,{label:"Options",divider:!0,children:[e.jsx(r,{variant:"toggle",label:"Compact mode",selected:t,onClick:()=>s(l=>!l)}),e.jsx(r,{variant:"toggle",label:"Email alerts",selected:o,onClick:()=>i(l=>!l)})]}),e.jsx(r,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]}),e.jsxs(n,{inline:!0,closeOnSelect:!1,w:"264",density:"spacious",children:[e.jsxs(m,{label:"Options",divider:!0,children:[e.jsx(r,{variant:"toggle",label:"Compact mode",selected:t,onClick:()=>s(l=>!l)}),e.jsx(r,{variant:"toggle",label:"Email alerts",selected:o,onClick:()=>i(l=>!l)})]}),e.jsx(r,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})]})},ve=()=>{const[t,s]=c.useState(""),[o,i]=c.useState(""),[l,C]=c.useState(""),[Me,je]=c.useState("");return e.jsxs(n,{trigger:e.jsx(u,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(r,{label:"Dashboard"}),e.jsx(a,{label:"Edit profile",children:e.jsxs(k,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(p,{label:"Profile name",labelFor:"profile-name",children:e.jsx(b,{id:"profile-name",name:"profileName",value:t,onChange:d=>s(d.target.value)})}),e.jsx(p,{label:"Owner",labelFor:"profile-owner",children:e.jsx(b,{id:"profile-owner",name:"profileOwner",value:o,onChange:d=>i(d.target.value)})}),e.jsx(u,{variant:"primary",children:"Submit"})]})}),e.jsx(a,{label:"Create alert",children:e.jsxs(k,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(p,{label:"Topic",labelFor:"alert-topic",children:e.jsx(b,{id:"alert-topic",name:"alertTopic",value:l,onChange:d=>C(d.target.value)})}),e.jsx(p,{label:"Channel",labelFor:"alert-channel",children:e.jsx(b,{id:"alert-channel",name:"alertChannel",value:Me,onChange:d=>je(d.target.value)})}),e.jsx(u,{variant:"primary",children:"Submit"})]})})]})},we=()=>{const[t,s]=c.useState("");return e.jsxs(ge,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(b,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:t,onChange:o=>s(o.target.value)}),e.jsxs(n,{inline:!0,query:t,filterMode:"contains",highlightMatches:!0,children:[e.jsx(r,{label:"Account settings",description:"Manage profile and security"}),e.jsx(r,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(r,{label:"Integrations",description:"Connect external tools"}),e.jsx(r,{label:"Audit history",description:"Track critical events"})]})]})},x={render:()=>e.jsxs(n,{inline:!0,children:[e.jsx(r,{label:"Edit",iconBefore:"pencil"}),e.jsx(r,{label:"Duplicate",iconBefore:"copy"}),e.jsx(r,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs(n,{inline:!0,children:[e.jsxs(m,{label:"Actions",divider:!0,children:[e.jsx(r,{label:"Rename"}),e.jsx(r,{label:"Move"})]}),e.jsx(m,{label:"Danger Zone",children:e.jsx(r,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsx(Se,{}),parameters:{controls:{disable:!0}}},M={render:()=>e.jsx(fe,{}),parameters:{controls:{disable:!0}}},j={render:()=>e.jsxs(y,{gap:"12",alignItems:"flex-start",children:[e.jsxs(n,{inline:!0,density:"compact",children:[e.jsx(r,{label:"Compact",description:"Small row spacing"}),e.jsx(r,{label:"Second row",iconBefore:"apps"}),e.jsx(r,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(n,{inline:!0,density:"comfortable",children:[e.jsx(r,{label:"Comfortable",description:"Default row spacing"}),e.jsx(r,{label:"Second row",iconBefore:"apps"}),e.jsx(r,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(n,{inline:!0,density:"spacious",children:[e.jsx(r,{label:"Spacious",description:"Large row spacing"}),e.jsx(r,{label:"Second row",iconBefore:"apps"}),e.jsx(r,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},S={render:()=>e.jsx(Ie,{}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs(n,{trigger:e.jsx(u,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(r,{label:"View profile"}),e.jsxs(a,{label:"More actions",children:[e.jsx(r,{label:"Export"}),e.jsx(r,{label:"Share"}),e.jsxs(a,{label:"Advanced",children:[e.jsx(r,{label:"Audit log"}),e.jsx(r,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},I={name:"Top nav hover trigger",render:()=>e.jsx(ge,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(y,{alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(n,{triggerInteraction:"hover",trigger:e.jsx(u,{variant:"selectedBold",children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,children:[e.jsxs(a,{label:"Quotes",children:[e.jsx(r,{label:"Open quotes"}),e.jsx(r,{label:"Draft quotes"})]}),e.jsxs(a,{label:"Orders",selected:!0,children:[e.jsx(r,{label:"Order list"}),e.jsxs(a,{label:"Used orders",selected:!0,children:[e.jsx(r,{label:"Order as used",selected:!0}),e.jsx(r,{label:"Bookings"}),e.jsx(r,{label:"Order commissions"})]})]}),e.jsxs(a,{label:"Invoices",children:[e.jsx(r,{label:"All invoices"}),e.jsx(r,{label:"Credit notes"})]})]}),e.jsx(u,{children:"Production"}),e.jsx(u,{children:"Admin"})]})}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(n,{trigger:e.jsx(u,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(r,{label:"Dashboard"}),e.jsxs(a,{label:"Settings",children:[e.jsx(r,{label:"Profile"}),e.jsx(r,{label:"Billing"}),e.jsxs(a,{label:"Team",children:[e.jsx(r,{label:"Members"}),e.jsx(r,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsx(ve,{}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsx(we,{}),parameters:{controls:{disable:!0}}},B={name:"Panel as sidebar",render:()=>e.jsx(he,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(n,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(r,{label:"View profile"}),e.jsxs(a,{label:"More actions",minW:"180",children:[e.jsx(r,{label:"Export"}),e.jsx(r,{label:"Share"}),e.jsxs(a,{label:"Advanced",minW:"180",children:[e.jsx(r,{label:"Audit log"}),e.jsx(r,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},O={name:"Panel as mobile nav",render:()=>e.jsx(he,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(n,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(r,{label:"View profile"}),e.jsxs(a,{label:"More actions",minW:"180",children:[e.jsx(r,{label:"Export"}),e.jsx(r,{label:"Share"}),e.jsxs(a,{label:"Advanced",minW:"180",children:[e.jsx(r,{label:"Audit log"}),e.jsx(r,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var T,E,W;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(E=x.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var F,D,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(D=g.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var H,V,q;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var N,G,_;M.parameters={...M.parameters,docs:{...(N=M.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(G=M.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var Q,R,L;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(L=(R=j.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var U,Z,z;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(z=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var J,K,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,$,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Top nav hover trigger',
  render: () => <VStack alignItems="stretch" minW="3xl" h="2xl" bg="bg.neutral" p="24" gap="16">
      <HStack alignItems="center" gap="12" borderWidth="1" borderColor="border" bg="surface" px="24" py="16">
        <Menu triggerInteraction="hover" trigger={<Button variant="selectedBold">Sales</Button>} subMenuInteraction="hover" closeOnSelect={false}>
          <SubMenu label="Quotes">
            <MenuItem label="Open quotes" />
            <MenuItem label="Draft quotes" />
          </SubMenu>

          <SubMenu label="Orders" selected>
            <MenuItem label="Order list" />
            <SubMenu label="Used orders" selected>
              <MenuItem label="Order as used" selected />
              <MenuItem label="Bookings" />
              <MenuItem label="Order commissions" />
            </SubMenu>
          </SubMenu>

          <SubMenu label="Invoices">
            <MenuItem label="All invoices" />
            <MenuItem label="Credit notes" />
          </SubMenu>
        </Menu>

        <Button>Production</Button>
        <Button>Admin</Button>
      </HStack>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=($=I.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,le;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var te,ae,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,ce;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,me;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=B.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var be,pe,xe;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};const Le=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ToggleOptions","SubMenuHover","TopNavHoverTrigger","SubMenuDigin","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{x as Actions,g as ActionsWithSections,A as AutocompleteFiltering,j as Density,M as MultiSelect,O as PanelAsMobileNav,B as PanelAsSidebar,h as SingleSelect,v as SubMenuDigin,w as SubMenuDiginForms,f as SubMenuHover,S as ToggleOptions,I as TopNavHoverTrigger,Le as __namedExportsOrder,Re as default};
