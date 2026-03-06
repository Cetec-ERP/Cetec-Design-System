import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{H as ce,F as ue,B as C,V as de}from"./Box-7HecziK7.js";import{B as m}from"./Button-dQDHk8vC.js";import{F as p}from"./FormField-DnrtL1gy.js";import{T as d}from"./TextInput-8L852tVm.js";import{M as t,a as n,b as y,S as i}from"./SubMenu-XvhKAB1k.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Bj4A0bIZ.js";import"./Spinner-8UulBtMs.js";import"./Label-4WIfKQ-f.js";import"./Text-DorGSoIa.js";import"./Tooltip-COlECLKP.js";import"./floating-ui.react-B-Gez0OS.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Checkbox-Dmyv1fSg.js";import"./Toggle-Dxmk7uoC.js";const We={title:"Components/Menu",component:t,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},me=()=>{const[r,l]=o.useState("item-2");return e.jsxs(t,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{label:"Option One",selected:r==="item-1",onClick:()=>l("item-1")}),e.jsx(n,{label:"Option Two",selected:r==="item-2",onClick:()=>l("item-2")}),e.jsx(n,{label:"Option Three",selected:r==="item-3",onClick:()=>l("item-3")})]})},pe=()=>{const[r,l]=o.useState(["beta"]),a=c=>{l(s=>s.includes(c)?s.filter(A=>A!==c):[...s,c])};return e.jsxs(t,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{variant:"checkbox",label:"Alpha",selected:r.includes("alpha"),onClick:()=>a("alpha")}),e.jsx(n,{variant:"checkbox",label:"Beta",selected:r.includes("beta"),onClick:()=>a("beta")}),e.jsx(n,{variant:"checkbox",label:"Gamma",selected:r.includes("gamma"),onClick:()=>a("gamma")})]})},be=()=>{const[r,l]=o.useState(!1),[a,c]=o.useState(!0);return e.jsxs(t,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(y,{label:"Options",divider:!0,children:[e.jsx(n,{variant:"toggle",label:"Compact mode",selected:r,onClick:()=>l(s=>!s)}),e.jsx(n,{variant:"toggle",label:"Email alerts",selected:a,onClick:()=>c(s=>!s)})]}),e.jsx(n,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},xe=()=>{const[r,l]=o.useState(""),[a,c]=o.useState(""),[s,A]=o.useState(""),[oe,ie]=o.useState("");return e.jsxs(t,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"drilldown",closeOnSelect:!1,children:[e.jsx(n,{label:"Dashboard"}),e.jsx(i,{label:"Edit profile",children:e.jsxs(C,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(p,{label:"Profile name",labelFor:"profile-name",children:e.jsx(d,{id:"profile-name",name:"profileName",value:r,onChange:u=>l(u.target.value)})}),e.jsx(p,{label:"Owner",labelFor:"profile-owner",children:e.jsx(d,{id:"profile-owner",name:"profileOwner",value:a,onChange:u=>c(u.target.value)})}),e.jsx(m,{variant:"primary",children:"Submit"})]})}),e.jsx(i,{label:"Create alert",children:e.jsxs(C,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(p,{label:"Topic",labelFor:"alert-topic",children:e.jsx(d,{id:"alert-topic",name:"alertTopic",value:s,onChange:u=>A(u.target.value)})}),e.jsx(p,{label:"Channel",labelFor:"alert-channel",children:e.jsx(d,{id:"alert-channel",name:"alertChannel",value:oe,onChange:u=>ie(u.target.value)})}),e.jsx(m,{variant:"primary",children:"Submit"})]})})]})},ge=()=>{const[r,l]=o.useState("");return e.jsxs(de,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(d,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:r,onChange:a=>l(a.target.value)}),e.jsxs(t,{inline:!0,query:r,filterMode:"contains",highlightMatches:!0,children:[e.jsx(n,{label:"Account settings",description:"Manage profile and security"}),e.jsx(n,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(n,{label:"Integrations",description:"Connect external tools"}),e.jsx(n,{label:"Audit history",description:"Track critical events"})]})]})},b={render:()=>e.jsxs(t,{inline:!0,children:[e.jsx(n,{label:"Edit",iconBefore:"pencil"}),e.jsx(n,{label:"Duplicate",iconBefore:"copy"}),e.jsx(n,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs(t,{inline:!0,children:[e.jsxs(y,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Rename"}),e.jsx(n,{label:"Move"})]}),e.jsx(y,{label:"Danger Zone",children:e.jsx(n,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsx(me,{}),parameters:{controls:{disable:!0}}},M={render:()=>e.jsx(pe,{}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(ce,{gap:"12",alignItems:"flex-start",children:[e.jsxs(t,{inline:!0,density:"compact",children:[e.jsx(n,{label:"Compact",description:"Small row spacing"}),e.jsx(n,{label:"Second row"})]}),e.jsxs(t,{inline:!0,density:"comfortable",children:[e.jsx(n,{label:"Comfortable",description:"Default row spacing"}),e.jsx(n,{label:"Second row"})]}),e.jsxs(t,{inline:!0,density:"spacious",children:[e.jsx(n,{label:"Spacious",description:"Large row spacing"}),e.jsx(n,{label:"Second row"})]})]}),parameters:{controls:{disable:!0}}},S={render:()=>e.jsx(be,{}),parameters:{controls:{disable:!0}}},j={render:()=>e.jsxs(t,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(n,{label:"View profile"}),e.jsxs(i,{label:"More actions",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(i,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs(t,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"drilldown",children:[e.jsx(n,{label:"Dashboard"}),e.jsxs(i,{label:"Settings",children:[e.jsx(n,{label:"Profile"}),e.jsx(n,{label:"Billing"}),e.jsxs(i,{label:"Team",children:[e.jsx(n,{label:"Members"}),e.jsx(n,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsx(xe,{}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsx(ge,{}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsx(ue,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(t,{subMenuInteraction:"hover",sidebar:!0,maxW:"264",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(i,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(i,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var O,E,B;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(E=b.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var F,D,k;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(D=x.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var T,W,P;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(P=(W=g.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var G,H,V;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(H=M.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var N,q,R;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <HStack gap="12" alignItems="flex-start">
      <Menu inline density="compact">
        <MenuItem label="Compact" description="Small row spacing" />
        <MenuItem label="Second row" />
      </Menu>
      <Menu inline density="comfortable">
        <MenuItem label="Comfortable" description="Default row spacing" />
        <MenuItem label="Second row" />
      </Menu>
      <Menu inline density="spacious">
        <MenuItem label="Spacious" description="Large row spacing" />
        <MenuItem label="Second row" />
      </Menu>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(q=h.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var _,L,Z;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(L=S.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var Q,z,J;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(z=j.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,U,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open menu</Button>} subMenuInteraction="drilldown">
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
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,$,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SubMenuDrilldownFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,re,te;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(re=I.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,ae,se;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Flex minW="3xl" h="lg" bg="bg.neutral" overflow="hidden" boxShadow="overlay">
      <Menu subMenuInteraction="hover" sidebar={true} maxW="264" density="comfortable">
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
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const Pe=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ToggleOptions","SubMenuHover","SubMenuDrilldown","SubMenuDrilldownForms","AutocompleteFiltering","Sidebar"];export{b as Actions,x as ActionsWithSections,I as AutocompleteFiltering,h as Density,M as MultiSelect,v as Sidebar,g as SingleSelect,f as SubMenuDrilldown,w as SubMenuDrilldownForms,j as SubMenuHover,S as ToggleOptions,Pe as __namedExportsOrder,We as default};
