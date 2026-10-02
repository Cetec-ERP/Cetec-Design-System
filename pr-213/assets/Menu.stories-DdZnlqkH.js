import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{w as W,u as h,e as b,a as G}from"./index-L8OlCEhE.js";import{H as Pe,V as q,F as Ge,B as P}from"./dsComponent-BG2jnRr7.js";import{B as qe}from"./BreakpointIndicator-CC_bqv_X.js";import{B as p}from"./Button-Cr4bC5CG.js";import{F as w}from"./FormField-07ePENsq.js";import{T as Ve}from"./Text-CmbBY86A.js";import{T as M}from"./TextInput-_4xaM3O9.js";import{M as a,a as n,b as j,S as r}from"./SubMenu-DSTZ5zy2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-Duobk4D3.js";import"./Tooltip-1TppkGuD.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-CQaSGaN1.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-DSWITaTf.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const On={title:"Components/Menu",component:a,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},Ue=()=>{const[t,l]=d.useState("item-2");return e.jsxs(a,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{label:"Option One",selected:t==="item-1",onClick:()=>l("item-1")}),e.jsx(n,{label:"Option Two",selected:t==="item-2",onClick:()=>l("item-2")}),e.jsx(n,{label:"Option Three",selected:t==="item-3",onClick:()=>l("item-3")})]})},$e=()=>{const[t,l]=d.useState(["beta"]),s=o=>{l(i=>i.includes(o)?i.filter(u=>u!==o):[...i,o])};return e.jsx(a,{inline:!0,closeOnSelect:!1,children:e.jsxs(j,{label:"Wave type",children:[e.jsx(n,{variant:"checkbox",label:"Alpha",selected:t.includes("alpha"),onClick:()=>s("alpha")}),e.jsx(n,{variant:"checkbox",label:"Beta",selected:t.includes("beta"),onClick:()=>s("beta")}),e.jsx(n,{variant:"checkbox",label:"Gamma",selected:t.includes("gamma"),onClick:()=>s("gamma")})]})})},Ke=()=>{const[t,l]=d.useState(!1),[s,o]=d.useState(!0);return e.jsxs(a,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(j,{label:"Options",divider:!0,children:[e.jsx(n,{variant:"toggle",label:"Compact mode",selected:t,onClick:()=>l(i=>!i)}),e.jsx(n,{variant:"toggle",label:"Email alerts",selected:s,onClick:()=>o(i=>!i)})]}),e.jsx(n,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},ze=()=>{const[t,l]=d.useState(""),[s,o]=d.useState(""),[i,u]=d.useState(""),[g,c]=d.useState("");return e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(n,{label:"Dashboard"}),e.jsx(r,{label:"Edit profile",children:e.jsxs(P,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(w,{label:"Profile name",labelFor:"profile-name",children:e.jsx(M,{id:"profile-name",name:"profileName",value:t,onChange:m=>l(m.target.value)})}),e.jsx(w,{label:"Owner",labelFor:"profile-owner",children:e.jsx(M,{id:"profile-owner",name:"profileOwner",value:s,onChange:m=>o(m.target.value)})}),e.jsx(p,{variant:"primary",children:"Submit"})]})}),e.jsx(r,{label:"Create alert",children:e.jsxs(P,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(w,{label:"Topic",labelFor:"alert-topic",children:e.jsx(M,{id:"alert-topic",name:"alertTopic",value:i,onChange:m=>u(m.target.value)})}),e.jsx(w,{label:"Channel",labelFor:"alert-channel",children:e.jsx(M,{id:"alert-channel",name:"alertChannel",value:g,onChange:m=>c(m.target.value)})}),e.jsx(p,{variant:"primary",children:"Submit"})]})})]})},Qe=()=>{const[t,l]=d.useState("");return e.jsxs(q,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(M,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:t,onChange:s=>l(s.target.value)}),e.jsxs(a,{inline:!0,query:t,filterMode:"contains",highlightMatches:!0,children:[e.jsx(n,{label:"Account settings",description:"Manage profile and security"}),e.jsx(n,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(n,{label:"Integrations",description:"Connect external tools"}),e.jsx(n,{label:"Audit history",description:"Track critical events"})]})]})},v={render:()=>e.jsxs(a,{inline:!0,children:[e.jsx(n,{label:"Edit",iconBefore:"pencil"}),e.jsx(n,{label:"Duplicate",iconBefore:"copy"}),e.jsx(n,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsxs(a,{inline:!0,children:[e.jsxs(j,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Rename"}),e.jsx(n,{label:"Move"})]}),e.jsx(j,{label:"Danger Zone",children:e.jsx(n,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},E={render:()=>e.jsx(Ue,{}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsx($e,{}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(Pe,{gap:"12",alignItems:"flex-start",children:[e.jsxs(a,{inline:!0,density:"compact",children:[e.jsx(n,{label:"Compact",description:"Small row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(a,{inline:!0,density:"comfortable",children:[e.jsx(n,{label:"Comfortable",description:"Default row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(a,{inline:!0,density:"spacious",children:[e.jsx(n,{label:"Spacious",description:"Large row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsxs(q,{children:[e.jsxs(a,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(j,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(n,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(r,{label:"More actions",iconBefore:"apps",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(r,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),e.jsxs(Ve,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(qe,{})]}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsx(Ke,{}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(n,{label:"View profile"}),e.jsxs(r,{label:"More actions",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(r,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},Ye=()=>{const t=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],l=["sales","production","admin"],[s,o]=d.useState(null),i=c=>({open:s===c,onOpenChange:m=>{if(m){o(c);return}o(S=>S===c?null:S)}}),u=(c,m)=>{const S=l.indexOf(m),V=l.length,U=(S+c+V*10)%V,$=l[U],f=t[U];if($===void 0)return;if(!(s!==null)){window.requestAnimationFrame(()=>{var x;f&&((x=document.getElementById(f))==null||x.focus())});return}window.requestAnimationFrame(()=>{var x;o($),f&&((x=document.getElementById(f))==null||x.focus())})},g=c=>m=>{m.key!=="ArrowLeft"&&m.key!=="ArrowRight"||(m.preventDefault(),m.stopPropagation(),u(m.key==="ArrowRight"?1:-1,c))};return e.jsx(q,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(P,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:t[0],variant:"selectedBold",onKeyDown:g("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>u(c,"sales"),...i("sales"),children:[e.jsxs(r,{label:"Quotes",children:[e.jsx(n,{label:"Open quotes"}),e.jsx(n,{label:"Draft quotes"})]}),e.jsxs(r,{label:"Orders",selected:!0,children:[e.jsx(n,{label:"Order list"}),e.jsxs(r,{label:"Used orders",selected:!0,children:[e.jsx(n,{label:"Order as used",selected:!0}),e.jsx(n,{label:"Bookings"}),e.jsx(n,{label:"Order commissions"})]})]}),e.jsxs(r,{label:"Invoices",children:[e.jsx(n,{label:"All invoices"}),e.jsx(n,{label:"Credit notes"})]})]}),e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:t[1],onKeyDown:g("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>u(c,"production"),...i("production"),children:[e.jsxs(r,{label:"Work Orders",children:[e.jsx(n,{label:"Open work orders"}),e.jsx(n,{label:"Completed"})]}),e.jsxs(r,{label:"Scheduling",children:[e.jsx(n,{label:"Production schedule"}),e.jsx(n,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(n,{label:"Inventory"})]}),e.jsxs(a,{triggerInteraction:"click-and-hover",trigger:e.jsx(p,{id:t[2],onKeyDown:g("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>u(c,"admin"),...i("admin"),children:[e.jsxs(r,{label:"Users",children:[e.jsx(n,{label:"All users"}),e.jsx(n,{label:"Roles & permissions"})]}),e.jsxs(r,{label:"Settings",children:[e.jsx(n,{label:"General"}),e.jsx(n,{label:"Integrations"}),e.jsx(n,{label:"Billing"})]}),e.jsx(n,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},T={name:"Top nav example",render:()=>e.jsx(Ye,{}),parameters:{controls:{disable:!0}}},L={render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(n,{label:"Dashboard"}),e.jsxs(r,{label:"Settings",children:[e.jsx(n,{label:"Profile"}),e.jsx(n,{label:"Billing"}),e.jsxs(r,{label:"Team",children:[e.jsx(n,{label:"Members"}),e.jsx(n,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},_=Array.from({length:40},(t,l)=>`${l+1} - Item ${l+1}`),C={name:"Ex: Long Menu",render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open long menu"}),children:[e.jsx(r,{label:"More items",children:_.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),_.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const l=W(t),s=W(t.ownerDocument.body);await h.click(l.getByRole("button",{name:/open long menu/i}));const o=await s.findByRole("menu"),i=t.ownerDocument.documentElement.clientHeight,u=o.getBoundingClientRect();b(u.top).toBeGreaterThanOrEqual(0),b(u.bottom).toBeLessThanOrEqual(i),b(getComputedStyle(o).overflowY).toBe("auto"),b(o.scrollHeight).toBeGreaterThan(o.clientHeight)},parameters:{controls:{disable:!0}}},D={name:"Ex: Long Drill-In Menu",render:()=>e.jsxs(a,{trigger:e.jsx(p,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:[e.jsx(r,{label:"Long list",children:_.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),e.jsxs(r,{label:"Short list",children:[e.jsx(n,{label:"First"}),e.jsx(n,{label:"Second"})]}),_.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const l=W(t),s=W(t.ownerDocument.body);await h.click(l.getByRole("button",{name:/open drill-in menu/i}));const o=await s.findByRole("menu");await h.click(s.getByRole("menuitem",{name:/long list/i}));const i=await s.findByRole("button",{name:/long list/i}),u=i.parentElement;await G(()=>b(u.scrollHeight).toBeGreaterThan(u.clientHeight)),u.scrollTop=u.scrollHeight,await G(()=>b(Math.abs(i.getBoundingClientRect().top-u.getBoundingClientRect().top)).toBeLessThanOrEqual(1)),await h.click(i),await h.click(await s.findByRole("menuitem",{name:/short list/i}));const c=(await s.findByRole("button",{name:/short list/i})).parentElement;await G(()=>{b(o.scrollHeight).toBeLessThanOrEqual(o.clientHeight+1),b(c.scrollHeight).toBeLessThanOrEqual(c.clientHeight+1)})},parameters:{controls:{disable:!0}}},N={render:()=>e.jsx(ze,{}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsx(Qe,{}),parameters:{controls:{disable:!0}}},H={name:"Panel as sidebar",render:()=>e.jsx(Ge,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(a,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(r,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(r,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},F={name:"Panel as mobile nav",render:()=>e.jsx(Ge,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(a,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(r,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(r,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var K,z,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Y,Z,J;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var X,ee,ne;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ae,se,oe;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(se=I.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,ue;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,de,pe;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(de=O.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var be,ge,xe;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,Me,je;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(je=(Me=T.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var Se,fe,we;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};var ve,Be,Ee;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ee=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var ye,Ie,Ae;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Ex: Long Drill-In Menu',
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open drill-in menu</Button>} subMenuInteraction="digin">
      <SubMenu label="Long list">
        {LONG_MENU_LABELS.map(label => <MenuItem key={label} label={\`Nested \${label}\`} />)}
      </SubMenu>
      <SubMenu label="Short list">
        <MenuItem label="First" />
        <MenuItem label="Second" />
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
      name: /open drill-in menu/i
    }));
    const menuElement = await screen.findByRole('menu');

    // In a long level, the back header stays pinned while the level scrolls.
    await userEvent.click(screen.getByRole('menuitem', {
      name: /long list/i
    }));
    const longBack = await screen.findByRole('button', {
      name: /long list/i
    });
    const longLevel = longBack.parentElement as HTMLElement;
    await waitFor(() => expect(longLevel.scrollHeight).toBeGreaterThan(longLevel.clientHeight));
    longLevel.scrollTop = longLevel.scrollHeight;
    await waitFor(() => expect(Math.abs(longBack.getBoundingClientRect().top - longLevel.getBoundingClientRect().top)).toBeLessThanOrEqual(1));

    // A short level after a long one has no blank space to scroll into.
    await userEvent.click(longBack);
    await userEvent.click(await screen.findByRole('menuitem', {
      name: /short list/i
    }));
    const shortBack = await screen.findByRole('button', {
      name: /short list/i
    });
    const shortLevel = shortBack.parentElement as HTMLElement;
    await waitFor(() => {
      expect(menuElement.scrollHeight).toBeLessThanOrEqual(menuElement.clientHeight + 1);
      expect(shortLevel.scrollHeight).toBeLessThanOrEqual(shortLevel.clientHeight + 1);
    });
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ae=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var Oe,ke,Te;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Te=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Le,Ce,De;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(De=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var Ne,Re,He;H.parameters={...H.parameters,docs:{...(Ne=H.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(He=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:He.source}}};var Fe,We,_e;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(_e=(We=F.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};const kn=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","ExLongMenu","ExLongDiginMenu","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{v as Actions,B as ActionsWithSections,R as AutocompleteFiltering,A as ConditionalBreakpoints,I as Density,D as ExLongDiginMenu,C as ExLongMenu,y as MultiSelect,F as PanelAsMobileNav,H as PanelAsSidebar,E as SingleSelect,L as SubMenuDigin,N as SubMenuDiginForms,k as SubMenuHover,O as ToggleOptions,T as TopNavExample,kn as __namedExportsOrder,On as default};
