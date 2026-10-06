import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BKyFwriW.js";import{w as x,u as g,e as b,a as P}from"./index-L8OlCEhE.js";import{H as $e,V,F as Ue,B as q}from"./dsComponent-BG2jnRr7.js";import{B as Ke}from"./BreakpointIndicator-CC_bqv_X.js";import{B as m}from"./Button-Cr4bC5CG.js";import{F as y}from"./FormField-HK6QcvUt.js";import{T as ze}from"./Text-J61GKNxm.js";import{T as j}from"./TextInput-CLsuy5Cz.js";import{M as s,a as n,b as f,S as a}from"./SubMenu-B0tRKrcS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-DM3dqKkX.js";import"./Tooltip-BVBfYG2c.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-BUvLYlEQ.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-DaFiMlzc.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const Dn={title:"Components/Menu",component:s,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},Qe=()=>{const[t,r]=p.useState("item-2");return e.jsxs(s,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{label:"Option One",selected:t==="item-1",onClick:()=>r("item-1")}),e.jsx(n,{label:"Option Two",selected:t==="item-2",onClick:()=>r("item-2")}),e.jsx(n,{label:"Option Three",selected:t==="item-3",onClick:()=>r("item-3")})]})},Ye=()=>{const[t,r]=p.useState(["beta"]),o=i=>{r(l=>l.includes(i)?l.filter(u=>u!==i):[...l,i])};return e.jsx(s,{inline:!0,closeOnSelect:!1,children:e.jsxs(f,{label:"Wave type",children:[e.jsx(n,{variant:"checkbox",label:"Alpha",selected:t.includes("alpha"),onClick:()=>o("alpha")}),e.jsx(n,{variant:"checkbox",label:"Beta",selected:t.includes("beta"),onClick:()=>o("beta")}),e.jsx(n,{variant:"checkbox",label:"Gamma",selected:t.includes("gamma"),onClick:()=>o("gamma")})]})})},Ze=()=>{const[t,r]=p.useState(!1),[o,i]=p.useState(!0);return e.jsxs(s,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(f,{label:"Options",divider:!0,children:[e.jsx(n,{variant:"toggle",label:"Compact mode",selected:t,onClick:()=>r(l=>!l)}),e.jsx(n,{variant:"toggle",label:"Email alerts",selected:o,onClick:()=>i(l=>!l)})]}),e.jsx(n,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},Je=()=>{const[t,r]=p.useState(""),[o,i]=p.useState(""),[l,u]=p.useState(""),[h,c]=p.useState("");return e.jsxs(s,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(n,{label:"Dashboard"}),e.jsx(a,{label:"Edit profile",children:e.jsxs(q,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(y,{label:"Profile name",labelFor:"profile-name",children:e.jsx(j,{id:"profile-name",name:"profileName",value:t,onChange:d=>r(d.target.value)})}),e.jsx(y,{label:"Owner",labelFor:"profile-owner",children:e.jsx(j,{id:"profile-owner",name:"profileOwner",value:o,onChange:d=>i(d.target.value)})}),e.jsx(m,{variant:"primary",children:"Submit"})]})}),e.jsx(a,{label:"Create alert",children:e.jsxs(q,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(y,{label:"Topic",labelFor:"alert-topic",children:e.jsx(j,{id:"alert-topic",name:"alertTopic",value:l,onChange:d=>u(d.target.value)})}),e.jsx(y,{label:"Channel",labelFor:"alert-channel",children:e.jsx(j,{id:"alert-channel",name:"alertChannel",value:h,onChange:d=>c(d.target.value)})}),e.jsx(m,{variant:"primary",children:"Submit"})]})})]})},Xe=()=>{const[t,r]=p.useState("");return e.jsxs(V,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(j,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:t,onChange:o=>r(o.target.value)}),e.jsxs(s,{inline:!0,query:t,filterMode:"contains",highlightMatches:!0,children:[e.jsx(n,{label:"Account settings",description:"Manage profile and security"}),e.jsx(n,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(n,{label:"Integrations",description:"Connect external tools"}),e.jsx(n,{label:"Audit history",description:"Track critical events"})]})]})},B={render:()=>e.jsxs(s,{inline:!0,children:[e.jsx(n,{label:"Edit",iconBefore:"pencil"}),e.jsx(n,{label:"Duplicate",iconBefore:"copy"}),e.jsx(n,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},E={render:()=>e.jsxs(s,{inline:!0,children:[e.jsxs(f,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Rename"}),e.jsx(n,{label:"Move"})]}),e.jsx(f,{label:"Danger Zone",children:e.jsx(n,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsx(Qe,{}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsx(Ye,{}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsxs($e,{gap:"12",alignItems:"flex-start",children:[e.jsxs(s,{inline:!0,density:"compact",children:[e.jsx(n,{label:"Compact",description:"Small row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(s,{inline:!0,density:"comfortable",children:[e.jsx(n,{label:"Comfortable",description:"Default row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(s,{inline:!0,density:"spacious",children:[e.jsx(n,{label:"Spacious",description:"Large row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsxs(V,{children:[e.jsxs(s,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(f,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(n,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(a,{label:"More actions",iconBefore:"apps",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(a,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),e.jsxs(ze,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Ke,{})]}),parameters:{controls:{disable:!0}}},T={render:()=>e.jsx(Ze,{}),parameters:{controls:{disable:!0}}},L={render:()=>e.jsxs(s,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(n,{label:"View profile"}),e.jsxs(a,{label:"More actions",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(a,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},en=()=>{const t=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],r=["sales","production","admin"],[o,i]=p.useState(null),l=c=>({open:o===c,onOpenChange:d=>{if(d){i(c);return}i(w=>w===c?null:w)}}),u=(c,d)=>{const w=r.indexOf(d),U=r.length,$=(w+c+U*10)%U,K=r[$],v=t[$];if(K===void 0)return;if(!(o!==null)){window.requestAnimationFrame(()=>{var M;v&&((M=document.getElementById(v))==null||M.focus())});return}window.requestAnimationFrame(()=>{var M;i(K),v&&((M=document.getElementById(v))==null||M.focus())})},h=c=>d=>{d.key!=="ArrowLeft"&&d.key!=="ArrowRight"||(d.preventDefault(),d.stopPropagation(),u(d.key==="ArrowRight"?1:-1,c))};return e.jsx(V,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(q,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(s,{triggerInteraction:"click-and-hover",trigger:e.jsx(m,{id:t[0],variant:"selectedBold",onKeyDown:h("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>u(c,"sales"),...l("sales"),children:[e.jsxs(a,{label:"Quotes",children:[e.jsx(n,{label:"Open quotes"}),e.jsx(n,{label:"Draft quotes"})]}),e.jsxs(a,{label:"Orders",selected:!0,children:[e.jsx(n,{label:"Order list"}),e.jsxs(a,{label:"Used orders",selected:!0,children:[e.jsx(n,{label:"Order as used",selected:!0}),e.jsx(n,{label:"Bookings"}),e.jsx(n,{label:"Order commissions"})]})]}),e.jsxs(a,{label:"Invoices",children:[e.jsx(n,{label:"All invoices"}),e.jsx(n,{label:"Credit notes"})]})]}),e.jsxs(s,{triggerInteraction:"click-and-hover",trigger:e.jsx(m,{id:t[1],onKeyDown:h("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>u(c,"production"),...l("production"),children:[e.jsxs(a,{label:"Work Orders",children:[e.jsx(n,{label:"Open work orders"}),e.jsx(n,{label:"Completed"})]}),e.jsxs(a,{label:"Scheduling",children:[e.jsx(n,{label:"Production schedule"}),e.jsx(n,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(n,{label:"Inventory"})]}),e.jsxs(s,{triggerInteraction:"click-and-hover",trigger:e.jsx(m,{id:t[2],onKeyDown:h("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:c=>u(c,"admin"),...l("admin"),children:[e.jsxs(a,{label:"Users",children:[e.jsx(n,{label:"All users"}),e.jsx(n,{label:"Roles & permissions"})]}),e.jsxs(a,{label:"Settings",children:[e.jsx(n,{label:"General"}),e.jsx(n,{label:"Integrations"}),e.jsx(n,{label:"Billing"})]}),e.jsx(n,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},D={name:"Top nav example",render:()=>e.jsx(en,{}),parameters:{controls:{disable:!0}}},H={render:()=>e.jsxs(s,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(n,{label:"Dashboard"}),e.jsxs(a,{label:"Settings",children:[e.jsx(n,{label:"Profile"}),e.jsx(n,{label:"Billing"}),e.jsxs(a,{label:"Team",children:[e.jsx(n,{label:"Members"}),e.jsx(n,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},S=Array.from({length:40},(t,r)=>`${r+1} - Item ${r+1}`),R={name:"Ex: Long Menu",render:()=>e.jsxs(s,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open long menu"}),children:[e.jsx(a,{label:"More items",children:S.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),S.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const r=x(t),o=x(t.ownerDocument.body);await g.click(r.getByRole("button",{name:/open long menu/i}));const i=await o.findByRole("menu"),l=t.ownerDocument.documentElement.clientHeight,u=i.getBoundingClientRect();b(u.top).toBeGreaterThanOrEqual(0),b(u.bottom).toBeLessThanOrEqual(l),b(getComputedStyle(i).overflowY).toBe("auto"),b(i.scrollHeight).toBeGreaterThan(i.clientHeight)},parameters:{controls:{disable:!0}}},C={name:"Ex: Long Drill-In Menu",render:()=>e.jsxs(s,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:[e.jsx(a,{label:"Long list",children:S.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),e.jsxs(a,{label:"Short list",children:[e.jsx(n,{label:"First"}),e.jsx(n,{label:"Second"})]}),S.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const r=x(t),o=x(t.ownerDocument.body);await g.click(r.getByRole("button",{name:/open drill-in menu/i}));const i=await o.findByRole("menu");await g.click(o.getByRole("menuitem",{name:/long list/i}));const l=await o.findByRole("button",{name:/long list/i}),u=l.parentElement;await P(()=>b(u.scrollHeight).toBeGreaterThan(u.clientHeight)),u.scrollTop=u.scrollHeight,await P(()=>b(Math.abs(l.getBoundingClientRect().top-u.getBoundingClientRect().top)).toBeLessThanOrEqual(1)),await g.click(l),await g.click(await o.findByRole("menuitem",{name:/short list/i}));const c=(await o.findByRole("button",{name:/short list/i})).parentElement;await P(()=>{b(i.scrollHeight).toBeLessThanOrEqual(i.clientHeight+1),b(c.scrollHeight).toBeLessThanOrEqual(c.clientHeight+1)})},parameters:{controls:{disable:!0}}},N={name:"Ex: Long Drill-In Menu (keyboard repro)",parameters:{controls:{disable:!0},docs:{description:{story:'Repro for the sticky back header covering keyboard-focused items. The play function opens the menu, drills into "Long list" and scrolls it to the bottom, then leaves it open. Press Home, or ArrowUp repeatedly, and check whether the focused item scrolls underneath the pinned back header.'}}},render:()=>e.jsx(s,{trigger:e.jsx(m,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",children:e.jsx(a,{label:"Long list",children:S.map(t=>e.jsx(n,{label:`Nested ${t}`},t))})}),play:async({canvasElement:t})=>{const r=x(t),o=x(t.ownerDocument.body);await g.click(r.getByRole("button",{name:/open drill-in menu/i})),await g.click(await o.findByRole("menuitem",{name:/long list/i}));const l=(await o.findByRole("button",{name:/long list/i})).parentElement;await P(()=>b(l.scrollHeight).toBeGreaterThan(l.clientHeight)),l.scrollTop=l.scrollHeight}},F={render:()=>e.jsx(Je,{}),parameters:{controls:{disable:!0}}},W={render:()=>e.jsx(Xe,{}),parameters:{controls:{disable:!0}}},G={name:"Panel as sidebar",render:()=>e.jsx(Ue,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(s,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(a,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(a,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},_={name:"Panel as mobile nav",render:()=>e.jsx(Ue,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(s,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(a,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(a,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var z,Q,Y;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Y=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,J,X;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(X=(J=E.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var ee,ne,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,le,ae;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var oe,se,ie;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,ue,de;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,be;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(be=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,he,xe;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(xe=(he=L.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Me,je,fe;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(fe=(je=D.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var Se,we,ve;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ve=(we=H.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var ye,Be,Ee;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ee=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Ie,ke,Ae;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ae=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Oe,Te,Le;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Ex: Long Drill-In Menu (keyboard repro)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Repro for the sticky back header covering keyboard-focused items. ' + 'The play function opens the menu, drills into "Long list" and ' + 'scrolls it to the bottom, then leaves it open. Press Home, or ' + 'ArrowUp repeatedly, and check whether the focused item scrolls ' + 'underneath the pinned back header.'
      }
    }
  },
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open drill-in menu</Button>} subMenuInteraction="digin" density="spacious">
      <SubMenu label="Long list">
        {LONG_MENU_LABELS.map(label => <MenuItem key={label} label={\`Nested \${label}\`} />)}
      </SubMenu>
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
    await userEvent.click(await screen.findByRole('menuitem', {
      name: /long list/i
    }));
    const back = await screen.findByRole('button', {
      name: /long list/i
    });
    const level = back.parentElement as HTMLElement;
    await waitFor(() => expect(level.scrollHeight).toBeGreaterThan(level.clientHeight));
    level.scrollTop = level.scrollHeight;
  }
}`,...(Le=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};var De,He,Re;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Re=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Ce,Ne,Fe;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Fe=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source}}};var We,Ge,_e;G.parameters={...G.parameters,docs:{...(We=G.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(_e=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var Pe,qe,Ve;_.parameters={..._.parameters,docs:{...(Pe=_.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ve=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};const Hn=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","ExLongMenu","ExLongDiginMenu","ExLongDiginMenuKeyboard","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{B as Actions,E as ActionsWithSections,W as AutocompleteFiltering,O as ConditionalBreakpoints,A as Density,C as ExLongDiginMenu,N as ExLongDiginMenuKeyboard,R as ExLongMenu,k as MultiSelect,_ as PanelAsMobileNav,G as PanelAsSidebar,I as SingleSelect,H as SubMenuDigin,F as SubMenuDiginForms,L as SubMenuHover,T as ToggleOptions,D as TopNavExample,Hn as __namedExportsOrder,Dn as default};
