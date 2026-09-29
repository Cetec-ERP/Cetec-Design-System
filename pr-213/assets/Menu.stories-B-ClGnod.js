import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-BKyFwriW.js";import{w as H,u as Fe,e as S}from"./index-DPYJpPba.js";import{H as Pe,V as L,F as We,B as P}from"./dsComponent-BG2jnRr7.js";import{B as Le}from"./BreakpointIndicator-CC_bqv_X.js";import{B as p}from"./Button-Cr4bC5CG.js";import{F as f}from"./FormField-07ePENsq.js";import{T as _e}from"./Text-CmbBY86A.js";import{T as g}from"./TextInput-_4xaM3O9.js";import{M as a,a as n,b as h,S as t}from"./SubMenu-DSTZ5zy2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-Duobk4D3.js";import"./Tooltip-1TppkGuD.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-CQaSGaN1.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-DSWITaTf.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const In={title:"Components/Menu",component:a,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},Ge=()=>{const[r,l]=m.useState("item-2");return e.jsxs(a,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{label:"Option One",selected:r==="item-1",onClick:()=>l("item-1")}),e.jsx(n,{label:"Option Two",selected:r==="item-2",onClick:()=>l("item-2")}),e.jsx(n,{label:"Option Three",selected:r==="item-3",onClick:()=>l("item-3")})]})},Re=()=>{const[r,l]=m.useState(["beta"]),u=o=>{l(i=>i.includes(o)?i.filter(d=>d!==o):[...i,o])};return e.jsx(a,{inline:!0,closeOnSelect:!1,children:e.jsxs(h,{label:"Wave type",children:[e.jsx(n,{variant:"checkbox",label:"Alpha",selected:r.includes("alpha"),onClick:()=>u("alpha")}),e.jsx(n,{variant:"checkbox",label:"Beta",selected:r.includes("beta"),onClick:()=>u("beta")}),e.jsx(n,{variant:"checkbox",label:"Gamma",selected:r.includes("gamma"),onClick:()=>u("gamma")})]})})},He=()=>{const[r,l]=m.useState(!1),[u,o]=m.useState(!0);return e.jsxs(a,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(h,{label:"Options",divider:!0,children:[e.jsx(n,{variant:"toggle",label:"Compact mode",selected:r,onClick:()=>l(i=>!i)}),e.jsx(n,{variant:"toggle",label:"Email alerts",selected:u,onClick:()=>o(i=>!i)})]}),e.jsx(n,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},Ve=()=>{const[r,l]=m.useState(""),[u,o]=m.useState(""),[i,d]=m.useState(""),[b,c]=m.useState("");return e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(n,{label:"Dashboard"}),e.jsx(t,{label:"Edit profile",children:e.jsxs(P,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(f,{label:"Profile name",labelFor:"profile-name",children:e.jsx(g,{id:"profile-name",name:"profileName",value:r,onChange:s=>l(s.target.value)})}),e.jsx(f,{label:"Owner",labelFor:"profile-owner",children:e.jsx(g,{id:"profile-owner",name:"profileOwner",value:u,onChange:s=>o(s.target.value)})}),e.jsx(p,{variant:"primary",children:"Submit"})]})}),e.jsx(t,{label:"Create alert",children:e.jsxs(P,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(f,{label:"Topic",labelFor:"alert-topic",children:e.jsx(g,{id:"alert-topic",name:"alertTopic",value:i,onChange:s=>d(s.target.value)})}),e.jsx(f,{label:"Channel",labelFor:"alert-channel",children:e.jsx(g,{id:"alert-channel",name:"alertChannel",value:b,onChange:s=>c(s.target.value)})}),e.jsx(p,{variant:"primary",children:"Submit"})]})})]})},qe=()=>{const[r,l]=m.useState("");return e.jsxs(L,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(g,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:r,onChange:u=>l(u.target.value)}),e.jsxs(a,{inline:!0,query:r,filterMode:"contains",highlightMatches:!0,children:[e.jsx(n,{label:"Account settings",description:"Manage profile and security"}),e.jsx(n,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(n,{label:"Integrations",description:"Connect external tools"}),e.jsx(n,{label:"Audit history",description:"Track critical events"})]})]})},v={render:()=>e.jsxs(a,{inline:!0,children:[e.jsx(n,{label:"Edit",iconBefore:"pencil"}),e.jsx(n,{label:"Duplicate",iconBefore:"copy"}),e.jsx(n,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs(a,{inline:!0,children:[e.jsxs(h,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Rename"}),e.jsx(n,{label:"Move"})]}),e.jsx(h,{label:"Danger Zone",children:e.jsx(n,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsx(Ge,{}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsx(Re,{}),parameters:{controls:{disable:!0}}},E={render:()=>e.jsxs(Pe,{gap:"12",alignItems:"flex-start",children:[e.jsxs(a,{inline:!0,density:"compact",children:[e.jsx(n,{label:"Compact",description:"Small row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(a,{inline:!0,density:"comfortable",children:[e.jsx(n,{label:"Comfortable",description:"Default row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(a,{inline:!0,density:"spacious",children:[e.jsx(n,{label:"Spacious",description:"Large row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs(L,{children:[e.jsxs(a,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(h,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(n,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(t,{label:"More actions",iconBefore:"apps",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(t,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),e.jsxs(_e,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Le,{})]}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsx(He,{}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(n,{label:"View profile"}),e.jsxs(t,{label:"More actions",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(t,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},Ue=()=>{const r=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],l=["sales","production","admin"],[u,o]=m.useState(null),i=c=>({open:u===c,onOpenChange:s=>{if(s){o(c);return}o(M=>M===c?null:M)}}),d=(c,s)=>{const M=l.indexOf(s),_=l.length,G=(M+c+_*10)%_,R=l[G],j=r[G];if(R===void 0)return;if(!(u!==null)){window.requestAnimationFrame(()=>{var x;j&&((x=document.getElementById(j))==null||x.focus())});return}window.requestAnimationFrame(()=>{var x;o(R),j&&((x=document.getElementById(j))==null||x.focus())})},b=c=>s=>{s.key!=="ArrowLeft"&&s.key!=="ArrowRight"||(s.preventDefault(),s.stopPropagation(),d(s.key==="ArrowRight"?1:-1,c))};return e.jsx(L,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(P,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:r[0],variant:"selectedBold",onKeyDown:b("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>d(c,"sales"),...i("sales"),children:[e.jsxs(t,{label:"Quotes",children:[e.jsx(n,{label:"Open quotes"}),e.jsx(n,{label:"Draft quotes"})]}),e.jsxs(t,{label:"Orders",selected:!0,children:[e.jsx(n,{label:"Order list"}),e.jsxs(t,{label:"Used orders",selected:!0,children:[e.jsx(n,{label:"Order as used",selected:!0}),e.jsx(n,{label:"Bookings"}),e.jsx(n,{label:"Order commissions"})]})]}),e.jsxs(t,{label:"Invoices",children:[e.jsx(n,{label:"All invoices"}),e.jsx(n,{label:"Credit notes"})]})]}),e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:r[1],onKeyDown:b("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>d(c,"production"),...i("production"),children:[e.jsxs(t,{label:"Work Orders",children:[e.jsx(n,{label:"Open work orders"}),e.jsx(n,{label:"Completed"})]}),e.jsxs(t,{label:"Scheduling",children:[e.jsx(n,{label:"Production schedule"}),e.jsx(n,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(n,{label:"Inventory"})]}),e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:r[2],onKeyDown:b("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>d(c,"admin"),...i("admin"),children:[e.jsxs(t,{label:"Users",children:[e.jsx(n,{label:"All users"}),e.jsx(n,{label:"Roles & permissions"})]}),e.jsxs(t,{label:"Settings",children:[e.jsx(n,{label:"General"}),e.jsx(n,{label:"Integrations"}),e.jsx(n,{label:"Billing"})]}),e.jsx(n,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},T={name:"Top nav example",render:()=>e.jsx(Ue,{}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(n,{label:"Dashboard"}),e.jsxs(t,{label:"Settings",children:[e.jsx(n,{label:"Profile"}),e.jsx(n,{label:"Billing"}),e.jsxs(t,{label:"Team",children:[e.jsx(n,{label:"Members"}),e.jsx(n,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},V=Array.from({length:40},(r,l)=>`${l+1} - Item ${l+1}`),C={name:"Ex: Long Menu",render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open long menu"}),children:[e.jsx(t,{label:"More items",children:V.map(r=>e.jsx(n,{label:`Nested ${r}`},r))}),V.map(r=>e.jsx(n,{label:r},r))]}),play:async({canvasElement:r})=>{const l=H(r),u=H(r.ownerDocument.body);await Fe.click(l.getByRole("button",{name:/open long menu/i}));const o=await u.findByRole("menu"),i=r.ownerDocument.documentElement.clientHeight,d=o.getBoundingClientRect();S(d.top).toBeGreaterThanOrEqual(0),S(d.bottom).toBeLessThanOrEqual(i),S(getComputedStyle(o).overflowY).toBe("auto"),S(o.scrollHeight).toBeGreaterThan(o.clientHeight)},parameters:{controls:{disable:!0}}},D={render:()=>e.jsx(Ve,{}),parameters:{controls:{disable:!0}}},N={render:()=>e.jsx(qe,{}),parameters:{controls:{disable:!0}}},W={name:"Panel as sidebar",render:()=>e.jsx(We,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(a,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(t,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(t,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},F={name:"Panel as mobile nav",render:()=>e.jsx(We,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(a,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(t,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(t,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var q,U,K;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(U=v.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var $,z,Q;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(z=w.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Y,Z,J;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var X,ee,ne;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,le;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(te=E.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ae,se,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(se=y.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,ue;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,pe;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(me=O.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,xe,ge;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ge=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var he,Me,je;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(je=(Me=k.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var Se,fe,ve;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Ex: Long Menu',
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open long menu</Button>}>
      <SubMenu label="More items">
        {LONG_MENU_LABELS.map(label => <MenuItem key={label} label={\`Nested \${label}\`} />)}
      </SubMenu>
      {LONG_MENU_LABELS.map(label => <MenuItem key={label} label={label} />)}
    </Menu>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /open long menu/i
    }));
    const menuElement = await screen.findByRole('menu');

    // The menu is capped to the space beside the trigger and scrolls,
    // rather than running past the viewport edge.
    const viewportHeight = canvasElement.ownerDocument.documentElement.clientHeight;
    const rect = menuElement.getBoundingClientRect();
    expect(rect.top).toBeGreaterThanOrEqual(0);
    expect(rect.bottom).toBeLessThanOrEqual(viewportHeight);
    expect(getComputedStyle(menuElement).overflowY).toBe('auto');
    expect(menuElement.scrollHeight).toBeGreaterThan(menuElement.clientHeight);
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,Ie,Be;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Be.source}}};var Ee,ye,Ae;N.parameters={...N.parameters,docs:{...(Ee=N.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ae=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:Ae.source}}};var Oe,Te,ke;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(ke=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Ce,De,Ne;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ne=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};const Bn=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","ExLongMenu","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{v as Actions,w as ActionsWithSections,N as AutocompleteFiltering,y as ConditionalBreakpoints,E as Density,C as ExLongMenu,B as MultiSelect,F as PanelAsMobileNav,W as PanelAsSidebar,I as SingleSelect,k as SubMenuDigin,D as SubMenuDiginForms,O as SubMenuHover,A as ToggleOptions,T as TopNavExample,Bn as __namedExportsOrder,In as default};
