import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-BKyFwriW.js";import{w as j,u as r,e as n,a as c}from"./index-L8OlCEhE.js";import{H as Te,V as q,F as Re,B as L}from"./dsComponent-BG2jnRr7.js";import{B as Ce}from"./BreakpointIndicator-CC_bqv_X.js";import{B as x}from"./Button-Cr4bC5CG.js";import{F}from"./FormField-1EniGO6o.js";import{T as Ne}from"./Text-BLROLK4_.js";import{T as h}from"./TextInput-Y-VjQWno.js";import{M as d,a as t,b as f,S as u}from"./SubMenu-BvthR5EJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-DM3dqKkX.js";import"./Tooltip-CskXLX0j.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-f30ewR3O.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-B9czDxVb.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const jt={title:"Components/Menu",component:d,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},We=()=>{const[a,s]=w.useState("item-2");return e.jsxs(d,{inline:!0,closeOnSelect:!1,children:[e.jsx(t,{label:"Option One",selected:a==="item-1",onClick:()=>s("item-1")}),e.jsx(t,{label:"Option Two",selected:a==="item-2",onClick:()=>s("item-2")}),e.jsx(t,{label:"Option Three",selected:a==="item-3",onClick:()=>s("item-3")})]})},Pe=()=>{const[a,s]=w.useState(["beta"]),o=l=>{s(i=>i.includes(l)?i.filter(p=>p!==l):[...i,l])};return e.jsx(d,{inline:!0,closeOnSelect:!1,children:e.jsxs(f,{label:"Wave type",children:[e.jsx(t,{variant:"checkbox",label:"Alpha",selected:a.includes("alpha"),onClick:()=>o("alpha")}),e.jsx(t,{variant:"checkbox",label:"Beta",selected:a.includes("beta"),onClick:()=>o("beta")}),e.jsx(t,{variant:"checkbox",label:"Gamma",selected:a.includes("gamma"),onClick:()=>o("gamma")})]})})},Le=()=>{const[a,s]=w.useState(!1),[o,l]=w.useState(!0);return e.jsxs(d,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(f,{label:"Options",divider:!0,children:[e.jsx(t,{variant:"toggle",label:"Compact mode",selected:a,onClick:()=>s(i=>!i)}),e.jsx(t,{variant:"toggle",label:"Email alerts",selected:o,onClick:()=>l(i=>!i)})]}),e.jsx(t,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},qe=()=>{const[a,s]=w.useState(""),[o,l]=w.useState(""),[i,p]=w.useState(""),[v,b]=w.useState("");return e.jsxs(d,{trigger:e.jsx(x,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(t,{label:"Dashboard"}),e.jsx(u,{label:"Edit profile",children:e.jsxs(L,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(F,{label:"Profile name",labelFor:"profile-name",children:e.jsx(h,{id:"profile-name",name:"profileName",value:a,onChange:m=>s(m.target.value)})}),e.jsx(F,{label:"Owner",labelFor:"profile-owner",children:e.jsx(h,{id:"profile-owner",name:"profileOwner",value:o,onChange:m=>l(m.target.value)})}),e.jsx(x,{variant:"primary",children:"Submit"})]})}),e.jsx(u,{label:"Create alert",children:e.jsxs(L,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(F,{label:"Topic",labelFor:"alert-topic",children:e.jsx(h,{id:"alert-topic",name:"alertTopic",value:i,onChange:m=>p(m.target.value)})}),e.jsx(F,{label:"Channel",labelFor:"alert-channel",children:e.jsx(h,{id:"alert-channel",name:"alertChannel",value:v,onChange:m=>b(m.target.value)})}),e.jsx(x,{variant:"primary",children:"Submit"})]})})]})},Ve=()=>{const[a,s]=w.useState("");return e.jsxs(q,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(h,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:a,onChange:o=>s(o.target.value)}),e.jsxs(d,{inline:!0,query:a,filterMode:"contains",highlightMatches:!0,children:[e.jsx(t,{label:"Account settings",description:"Manage profile and security"}),e.jsx(t,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(t,{label:"Integrations",description:"Connect external tools"}),e.jsx(t,{label:"Audit history",description:"Track critical events"})]})]})},g=a=>j(a.ownerDocument.body),_e=async a=>{const s=g(a);await c(()=>{const o=a.ownerDocument.activeElement;n(o).not.toBe(a.ownerDocument.body),n(s.getAllByRole("menu").some(l=>l.contains(o))).toBe(!0)})},Oe=a=>{const s=Array.from(a.ownerDocument.querySelectorAll('[aria-hidden="true"] :is(button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]))')).filter(o=>!o.closest("[inert]")&&!o.hasAttribute("data-floating-ui-focus-guard")&&!o.closest("[data-floating-ui-focus-guard]"));n(s).toHaveLength(0)},E={render:()=>e.jsxs(d,{inline:!0,children:[e.jsx(t,{label:"Edit",iconBefore:"pencil"}),e.jsx(t,{label:"Duplicate",iconBefore:"copy"}),e.jsx(t,{label:"Archive",iconBefore:"trash"})]}),play:async({canvasElement:a})=>{const s=j(a);await r.tab(),n(s.getByRole("menuitem",{name:/edit/i})).toHaveFocus(),await r.keyboard("{ArrowDown}"),n(s.getByRole("menuitem",{name:/duplicate/i})).toHaveFocus(),await r.keyboard("{End}"),n(s.getByRole("menuitem",{name:/archive/i})).toHaveFocus(),await r.keyboard("{Home}"),n(s.getByRole("menuitem",{name:/edit/i})).toHaveFocus()},parameters:{controls:{disable:!0}}},A={render:()=>e.jsxs(d,{inline:!0,children:[e.jsxs(f,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Rename"}),e.jsx(t,{label:"Move"})]}),e.jsx(f,{label:"Danger Zone",children:e.jsx(t,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsx(We,{}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsx(Pe,{}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(Te,{gap:"12",alignItems:"flex-start",children:[e.jsxs(d,{inline:!0,density:"compact",children:[e.jsx(t,{label:"Compact",description:"Small row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(d,{inline:!0,density:"comfortable",children:[e.jsx(t,{label:"Comfortable",description:"Default row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(d,{inline:!0,density:"spacious",children:[e.jsx(t,{label:"Spacious",description:"Large row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},H={render:()=>e.jsxs(q,{children:[e.jsxs(d,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(f,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(t,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(u,{label:"More actions",iconBefore:"apps",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),e.jsxs(Ne,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Ce,{})]}),parameters:{controls:{disable:!0}}},D={render:()=>e.jsx(Le,{}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsxs(d,{trigger:e.jsx(x,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),play:async({canvasElement:a})=>{const s=j(a),o=g(a),l=s.getByRole("button",{name:/open menu/i});await r.tab(),n(l).toHaveFocus(),await r.keyboard("{Enter}"),await c(()=>n(o.getByRole("menuitem",{name:/view profile/i})).toHaveFocus()),await r.keyboard("{ArrowDown}"),n(o.getByRole("menuitem",{name:/more actions/i})).toHaveFocus(),await r.keyboard("{ArrowRight}"),await c(()=>n(o.getByRole("menuitem",{name:/export/i})).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>n(o.getByRole("menuitem",{name:/more actions/i})).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>n(o.queryByRole("menu")).toBeNull()),n(l).toHaveFocus()},parameters:{controls:{disable:!0}}},Ge=()=>{const a=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],s=["sales","production","admin"],[o,l]=w.useState(null),i=b=>({open:o===b,onOpenChange:m=>{if(m){l(b);return}l(M=>M===b?null:M)}}),p=(b,m)=>{const M=s.indexOf(m),V=s.length,_=(M+b+V*10)%V,G=s[_],S=a[_];if(G===void 0)return;if(!(o!==null)){window.requestAnimationFrame(()=>{var y;S&&((y=document.getElementById(S))==null||y.focus())});return}window.requestAnimationFrame(()=>{var y;l(G),S&&((y=document.getElementById(S))==null||y.focus())})},v=b=>m=>{m.key!=="ArrowLeft"&&m.key!=="ArrowRight"||(m.preventDefault(),m.stopPropagation(),p(m.key==="ArrowRight"?1:-1,b))};return e.jsx(q,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(L,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(x,{id:a[0],variant:"selectedBold",onKeyDown:v("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:b=>p(b,"sales"),...i("sales"),children:[e.jsxs(u,{label:"Quotes",children:[e.jsx(t,{label:"Open quotes"}),e.jsx(t,{label:"Draft quotes"})]}),e.jsxs(u,{label:"Orders",selected:!0,children:[e.jsx(t,{label:"Order list"}),e.jsxs(u,{label:"Used orders",selected:!0,children:[e.jsx(t,{label:"Order as used",selected:!0}),e.jsx(t,{label:"Bookings"}),e.jsx(t,{label:"Order commissions"})]})]}),e.jsxs(u,{label:"Invoices",children:[e.jsx(t,{label:"All invoices"}),e.jsx(t,{label:"Credit notes"})]})]}),e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(x,{id:a[1],onKeyDown:v("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:b=>p(b,"production"),...i("production"),children:[e.jsxs(u,{label:"Work Orders",children:[e.jsx(t,{label:"Open work orders"}),e.jsx(t,{label:"Completed"})]}),e.jsxs(u,{label:"Scheduling",children:[e.jsx(t,{label:"Production schedule"}),e.jsx(t,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(t,{label:"Inventory"})]}),e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(x,{id:a[2],onKeyDown:v("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:b=>p(b,"admin"),...i("admin"),children:[e.jsxs(u,{label:"Users",children:[e.jsx(t,{label:"All users"}),e.jsx(t,{label:"Roles & permissions"})]}),e.jsxs(u,{label:"Settings",children:[e.jsx(t,{label:"General"}),e.jsx(t,{label:"Integrations"}),e.jsx(t,{label:"Billing"})]}),e.jsx(t,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},O={name:"Top nav example",render:()=>e.jsx(Ge,{}),parameters:{controls:{disable:!0}}},T={render:()=>e.jsxs(d,{trigger:e.jsx(x,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(t,{label:"Dashboard"}),e.jsxs(u,{label:"Settings",children:[e.jsx(t,{label:"Profile"}),e.jsx(t,{label:"Billing"}),e.jsxs(u,{label:"Team",children:[e.jsx(t,{label:"Members"}),e.jsx(t,{label:"Permissions"})]})]})]}),play:async({canvasElement:a})=>{const s=j(a),o=g(a),l=s.getByRole("button",{name:/open menu/i}),i=p=>o.getByRole("menuitem",{name:p});await r.tab(),n(l).toHaveFocus(),await r.keyboard("{ArrowDown}"),await _e(a),await c(()=>n(i(/dashboard/i)).toHaveFocus()),await r.keyboard("{ArrowDown}"),n(i(/settings/i)).toHaveFocus(),await r.keyboard("{Enter}"),await c(()=>n(i(/profile/i)).toHaveFocus()),Oe(a),await r.keyboard("{ArrowDown}"),n(i(/billing/i)).toHaveFocus(),await r.keyboard("{ArrowLeft}"),await c(()=>n(i(/settings/i)).toHaveFocus()),await r.keyboard(" "),await c(()=>n(i(/profile/i)).toHaveFocus()),await r.keyboard("{ArrowDown}{ArrowDown}{ArrowRight}"),await c(()=>n(i(/members/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>n(i(/team/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>n(i(/settings/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>n(o.queryByRole("menu")).toBeNull()),n(l).toHaveFocus()},parameters:{controls:{disable:!0}}},C={render:()=>e.jsx(qe,{}),play:async({canvasElement:a})=>{const s=j(a),o=g(a),l=s.getByRole("button",{name:/open menu/i});await r.tab(),await r.keyboard("{ArrowDown}"),await c(()=>n(o.getByRole("menuitem",{name:/dashboard/i})).toHaveFocus()),await r.keyboard("{ArrowDown}{Enter}");const i=await o.findByLabelText("Profile name");await c(()=>n(i).toHaveFocus()),await r.keyboard("abc{ArrowLeft}"),n(i).toHaveFocus(),n(i).toHaveValue("abc"),await r.keyboard("{Escape}"),await c(()=>n(o.getByRole("menuitem",{name:/edit profile/i})).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>n(o.queryByRole("menu")).toBeNull()),n(l).toHaveFocus()},parameters:{controls:{disable:!0}}},N={render:()=>e.jsx(Ve,{}),parameters:{controls:{disable:!0}}},W={name:"Panel as sidebar",render:()=>e.jsx(Re,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(d,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),play:async({canvasElement:a})=>{const s=g(a),o=l=>s.getByRole("menuitem",{name:l});await r.tab(),n(o(/view profile/i)).toHaveFocus(),await r.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>n(o(/export/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>n(o(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}},P={name:"Panel as mobile nav",render:()=>e.jsx(Re,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(d,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),play:async({canvasElement:a})=>{const s=g(a),o=l=>s.getByRole("menuitem",{name:l});await r.tab(),n(o(/view profile/i)).toHaveFocus(),await r.keyboard("{ArrowDown}{Enter}"),await c(()=>n(o(/export/i)).toHaveFocus()),Oe(a),await r.keyboard("{ArrowDown}{ArrowDown}{Enter}"),await c(()=>n(o(/audit log/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>n(o(/advanced/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>n(o(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}};var Q,K,U;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Menu inline>
      <MenuItem label="Edit" iconBefore="pencil" />
      <MenuItem label="Duplicate" iconBefore="copy" />
      <MenuItem label="Archive" iconBefore="trash" />
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Keyboard only: Tab enters the menu without any hover, then arrows/Home/End.
    await userEvent.tab();
    expect(canvas.getByRole('menuitem', {
      name: /edit/i
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    expect(canvas.getByRole('menuitem', {
      name: /duplicate/i
    })).toHaveFocus();
    await userEvent.keyboard('{End}');
    expect(canvas.getByRole('menuitem', {
      name: /archive/i
    })).toHaveFocus();
    await userEvent.keyboard('{Home}');
    expect(canvas.getByRole('menuitem', {
      name: /edit/i
    })).toHaveFocus();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(K=E.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var z,Z,J;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var X,Y,$;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,te,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,re;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ie,le;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,de;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,be,pe;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = getDocumentQueries(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /open menu/i
    });
    await userEvent.tab();
    expect(trigger).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(body.getByRole('menuitem', {
      name: /view profile/i
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    expect(body.getByRole('menuitem', {
      name: /more actions/i
    })).toHaveFocus();

    // ArrowRight opens the flyout and focuses its first row; ArrowLeft returns.
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(body.getByRole('menuitem', {
      name: /export/i
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(body.getByRole('menuitem', {
      name: /more actions/i
    })).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    expect(trigger).toHaveFocus();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(be=R.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var we,xe,ge;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ge=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var ve,ye,he;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = getDocumentQueries(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /open menu/i
    });
    const item = (name: RegExp) => body.getByRole('menuitem', {
      name
    });

    // Keyboard only: open from the trigger and land inside the menu.
    await userEvent.tab();
    expect(trigger).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expectFocusInsideMenu(canvasElement);
    await waitFor(() => expect(item(/dashboard/i)).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    expect(item(/settings/i)).toHaveFocus();

    // Drill in: focus moves to the first row of the new level and stays usable.
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(item(/profile/i)).toHaveFocus());
    expectNoFocusableInAriaHidden(canvasElement);
    await userEvent.keyboard('{ArrowDown}');
    expect(item(/billing/i)).toHaveFocus();

    // Left goes back and restores focus to the row that opened the level.
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(item(/settings/i)).toHaveFocus());

    // Space drills in again; a second level pushes the same way.
    await userEvent.keyboard(' ');
    await waitFor(() => expect(item(/profile/i)).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowRight}');
    await waitFor(() => expect(item(/members/i)).toHaveFocus());

    // Escape steps back one level at a time, then closes and returns to the trigger.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(item(/team/i)).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(item(/settings/i)).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    expect(trigger).toHaveFocus();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(he=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var fe,je,Me;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = getDocumentQueries(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /open menu/i
    });
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(body.getByRole('menuitem', {
      name: /dashboard/i
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}{Enter}');

    // A level without menu rows still receives focus (first control).
    const nameInput = await body.findByLabelText('Profile name');
    await waitFor(() => expect(nameInput).toHaveFocus());

    // Left/Right edit text instead of navigating; Escape goes back.
    await userEvent.keyboard('abc{ArrowLeft}');
    expect(nameInput).toHaveFocus();
    expect(nameInput).toHaveValue('abc');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.getByRole('menuitem', {
      name: /edit profile/i
    })).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    expect(trigger).toHaveFocus();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Me=(je=C.parameters)==null?void 0:je.docs)==null?void 0:Me.source}}};var Se,Fe,Ee;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ee=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source}}};var Ae,Be,ke;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }) => {
    const body = getDocumentQueries(canvasElement);
    const item = (name: RegExp) => body.getByRole('menuitem', {
      name
    });
    await userEvent.tab();
    expect(item(/view profile/i)).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await waitFor(() => expect(item(/export/i)).toHaveFocus());
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(item(/more actions/i)).toHaveFocus());
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ke=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var Ie,He,De;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }) => {
    const body = getDocumentQueries(canvasElement);
    const item = (name: RegExp) => body.getByRole('menuitem', {
      name
    });
    await userEvent.tab();
    expect(item(/view profile/i)).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(item(/export/i)).toHaveFocus());
    expectNoFocusableInAriaHidden(canvasElement);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    await waitFor(() => expect(item(/audit log/i)).toHaveFocus());
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(item(/advanced/i)).toHaveFocus());
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(item(/more actions/i)).toHaveFocus());
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(De=(He=P.parameters)==null?void 0:He.docs)==null?void 0:De.source}}};const Mt=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{E as Actions,A as ActionsWithSections,N as AutocompleteFiltering,H as ConditionalBreakpoints,I as Density,k as MultiSelect,P as PanelAsMobileNav,W as PanelAsSidebar,B as SingleSelect,T as SubMenuDigin,C as SubMenuDiginForms,R as SubMenuHover,D as ToggleOptions,O as TopNavExample,Mt as __namedExportsOrder,jt as default};
