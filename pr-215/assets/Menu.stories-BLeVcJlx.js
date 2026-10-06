import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-BKyFwriW.js";import{w as x,u as h,e as p,a as M}from"./index-L8OlCEhE.js";import{H as Ye,V,F as Ze,B as U}from"./dsComponent-BG2jnRr7.js";import{B as Qe}from"./BreakpointIndicator-CC_bqv_X.js";import{B as b}from"./Button-Cr4bC5CG.js";import{F as B}from"./FormField-BxgtcHGz.js";import{T as Je}from"./Text-tIn1sg48.js";import{T as v}from"./TextInput-CIfm8jz1.js";import{M as i,a as n,b as w,S as s}from"./SubMenu-Dc2oeyAd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-DM3dqKkX.js";import"./Tooltip-GoULuPEB.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-BRyYBgwZ.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-C2313l3t.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const Fn={title:"Components/Menu",component:i,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},Xe=()=>{const[t,r]=g.useState("item-2");return e.jsxs(i,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{label:"Option One",selected:t==="item-1",onClick:()=>r("item-1")}),e.jsx(n,{label:"Option Two",selected:t==="item-2",onClick:()=>r("item-2")}),e.jsx(n,{label:"Option Three",selected:t==="item-3",onClick:()=>r("item-3")})]})},en=()=>{const[t,r]=g.useState(["beta"]),l=a=>{r(o=>o.includes(a)?o.filter(u=>u!==a):[...o,a])};return e.jsx(i,{inline:!0,closeOnSelect:!1,children:e.jsxs(w,{label:"Wave type",children:[e.jsx(n,{variant:"checkbox",label:"Alpha",selected:t.includes("alpha"),onClick:()=>l("alpha")}),e.jsx(n,{variant:"checkbox",label:"Beta",selected:t.includes("beta"),onClick:()=>l("beta")}),e.jsx(n,{variant:"checkbox",label:"Gamma",selected:t.includes("gamma"),onClick:()=>l("gamma")})]})})},nn=()=>{const[t,r]=g.useState(!1),[l,a]=g.useState(!0);return e.jsxs(i,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(w,{label:"Options",divider:!0,children:[e.jsx(n,{variant:"toggle",label:"Compact mode",selected:t,onClick:()=>r(o=>!o)}),e.jsx(n,{variant:"toggle",label:"Email alerts",selected:l,onClick:()=>a(o=>!o)})]}),e.jsx(n,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},tn=()=>{const[t,r]=g.useState(""),[l,a]=g.useState(""),[o,u]=g.useState(""),[m,d]=g.useState("");return e.jsxs(i,{trigger:e.jsx(b,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(n,{label:"Dashboard"}),e.jsx(s,{label:"Edit profile",children:e.jsxs(U,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(B,{label:"Profile name",labelFor:"profile-name",children:e.jsx(v,{id:"profile-name",name:"profileName",value:t,onChange:c=>r(c.target.value)})}),e.jsx(B,{label:"Owner",labelFor:"profile-owner",children:e.jsx(v,{id:"profile-owner",name:"profileOwner",value:l,onChange:c=>a(c.target.value)})}),e.jsx(b,{variant:"primary",children:"Submit"})]})}),e.jsx(s,{label:"Create alert",children:e.jsxs(U,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(B,{label:"Topic",labelFor:"alert-topic",children:e.jsx(v,{id:"alert-topic",name:"alertTopic",value:o,onChange:c=>u(c.target.value)})}),e.jsx(B,{label:"Channel",labelFor:"alert-channel",children:e.jsx(v,{id:"alert-channel",name:"alertChannel",value:m,onChange:c=>d(c.target.value)})}),e.jsx(b,{variant:"primary",children:"Submit"})]})})]})},ln=()=>{const[t,r]=g.useState("");return e.jsxs(V,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(v,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:t,onChange:l=>r(l.target.value)}),e.jsxs(i,{inline:!0,query:t,filterMode:"contains",highlightMatches:!0,children:[e.jsx(n,{label:"Account settings",description:"Manage profile and security"}),e.jsx(n,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(n,{label:"Integrations",description:"Connect external tools"}),e.jsx(n,{label:"Audit history",description:"Track critical events"})]})]})},E={render:()=>e.jsxs(i,{inline:!0,children:[e.jsx(n,{label:"Edit",iconBefore:"pencil"}),e.jsx(n,{label:"Duplicate",iconBefore:"copy"}),e.jsx(n,{label:"Archive",iconBefore:"trash"})]}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsxs(i,{inline:!0,children:[e.jsxs(w,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Rename"}),e.jsx(n,{label:"Move"})]}),e.jsx(w,{label:"Danger Zone",children:e.jsx(n,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsx(Xe,{}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsx(en,{}),parameters:{controls:{disable:!0}}},T={render:()=>e.jsxs(Ye,{gap:"12",alignItems:"flex-start",children:[e.jsxs(i,{inline:!0,density:"compact",children:[e.jsx(n,{label:"Compact",description:"Small row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(i,{inline:!0,density:"comfortable",children:[e.jsx(n,{label:"Comfortable",description:"Default row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(i,{inline:!0,density:"spacious",children:[e.jsx(n,{label:"Spacious",description:"Large row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},L={render:()=>e.jsxs(V,{children:[e.jsxs(i,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(w,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(n,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(s,{label:"More actions",iconBefore:"apps",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(s,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),e.jsxs(Je,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Qe,{})]}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsx(nn,{}),parameters:{controls:{disable:!0}}},D={render:()=>e.jsxs(i,{trigger:e.jsx(b,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(n,{label:"View profile"}),e.jsxs(s,{label:"More actions",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(s,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),parameters:{controls:{disable:!0}}},rn=()=>{const t=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],r=["sales","production","admin"],[l,a]=g.useState(null),o=d=>({open:l===d,onOpenChange:c=>{if(c){a(d);return}a(y=>y===d?null:y)}}),u=(d,c)=>{const y=r.indexOf(c),$=r.length,K=(y+d+$*10)%$,z=r[K],S=t[K];if(z===void 0)return;if(!(l!==null)){window.requestAnimationFrame(()=>{var j;S&&((j=document.getElementById(S))==null||j.focus())});return}window.requestAnimationFrame(()=>{var j;a(z),S&&((j=document.getElementById(S))==null||j.focus())})},m=d=>c=>{c.key!=="ArrowLeft"&&c.key!=="ArrowRight"||(c.preventDefault(),c.stopPropagation(),u(c.key==="ArrowRight"?1:-1,d))};return e.jsx(V,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(U,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(i,{triggerInteraction:"click-and-hover",trigger:e.jsx(b,{id:t[0],variant:"selectedBold",onKeyDown:m("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:d=>u(d,"sales"),...o("sales"),children:[e.jsxs(s,{label:"Quotes",children:[e.jsx(n,{label:"Open quotes"}),e.jsx(n,{label:"Draft quotes"})]}),e.jsxs(s,{label:"Orders",selected:!0,children:[e.jsx(n,{label:"Order list"}),e.jsxs(s,{label:"Used orders",selected:!0,children:[e.jsx(n,{label:"Order as used",selected:!0}),e.jsx(n,{label:"Bookings"}),e.jsx(n,{label:"Order commissions"})]})]}),e.jsxs(s,{label:"Invoices",children:[e.jsx(n,{label:"All invoices"}),e.jsx(n,{label:"Credit notes"})]})]}),e.jsxs(i,{triggerInteraction:"click-and-hover",trigger:e.jsx(b,{id:t[1],onKeyDown:m("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:d=>u(d,"production"),...o("production"),children:[e.jsxs(s,{label:"Work Orders",children:[e.jsx(n,{label:"Open work orders"}),e.jsx(n,{label:"Completed"})]}),e.jsxs(s,{label:"Scheduling",children:[e.jsx(n,{label:"Production schedule"}),e.jsx(n,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(n,{label:"Inventory"})]}),e.jsxs(i,{triggerInteraction:"click-and-hover",trigger:e.jsx(b,{id:t[2],onKeyDown:m("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:d=>u(d,"admin"),...o("admin"),children:[e.jsxs(s,{label:"Users",children:[e.jsx(n,{label:"All users"}),e.jsx(n,{label:"Roles & permissions"})]}),e.jsxs(s,{label:"Settings",children:[e.jsx(n,{label:"General"}),e.jsx(n,{label:"Integrations"}),e.jsx(n,{label:"Billing"})]}),e.jsx(n,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},R={name:"Top nav example",render:()=>e.jsx(rn,{}),parameters:{controls:{disable:!0}}},C={render:()=>e.jsxs(i,{trigger:e.jsx(b,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(n,{label:"Dashboard"}),e.jsxs(s,{label:"Settings",children:[e.jsx(n,{label:"Profile"}),e.jsx(n,{label:"Billing"}),e.jsxs(s,{label:"Team",children:[e.jsx(n,{label:"Members"}),e.jsx(n,{label:"Permissions"})]})]})]}),parameters:{controls:{disable:!0}}},f=Array.from({length:40},(t,r)=>`${r+1} - Item ${r+1}`),H={name:"Ex: Long Menu",render:()=>e.jsxs(i,{trigger:e.jsx(b,{iconAfter:"caret-down",children:"Open long menu"}),children:[e.jsx(s,{label:"More items",children:f.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),f.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const r=x(t),l=x(t.ownerDocument.body);await h.click(r.getByRole("button",{name:/open long menu/i}));const a=await l.findByRole("menu"),o=t.ownerDocument.documentElement.clientHeight,u=a.getBoundingClientRect();p(u.top).toBeGreaterThanOrEqual(0),p(u.bottom).toBeLessThanOrEqual(o),p(getComputedStyle(a).overflowY).toBe("auto"),p(a.scrollHeight).toBeGreaterThan(a.clientHeight)},parameters:{controls:{disable:!0}}},N={name:"Ex: Long Drill-In Menu",render:()=>e.jsxs(i,{trigger:e.jsx(b,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:[e.jsx(s,{label:"Long list",children:f.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),e.jsxs(s,{label:"Short list",children:[e.jsx(n,{label:"First"}),e.jsx(n,{label:"Second"})]}),f.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const r=x(t),l=x(t.ownerDocument.body);await h.click(r.getByRole("button",{name:/open drill-in menu/i}));const a=await l.findByRole("menu"),o=a.querySelector('[class*="menu__levelsViewport"]');p(getComputedStyle(o).overflowY).toBe("clip"),o.scrollTop=48,p(o.scrollTop).toBe(0),await h.click(l.getByRole("menuitem",{name:/long list/i}));const u=await l.findByRole("button",{name:/long list/i}),m=u.parentElement;await M(()=>p(m.scrollHeight).toBeGreaterThan(m.clientHeight)),m.scrollTop=m.scrollHeight,await M(()=>p(Math.abs(u.getBoundingClientRect().top-m.getBoundingClientRect().top)).toBeLessThanOrEqual(1)),await h.click(u),await h.click(await l.findByRole("menuitem",{name:/short list/i}));const c=(await l.findByRole("button",{name:/short list/i})).parentElement;await M(()=>{p(a.scrollHeight).toBeLessThanOrEqual(a.clientHeight+1),p(c.scrollHeight).toBeLessThanOrEqual(c.clientHeight+1)})},parameters:{controls:{disable:!0}}},F={name:"Ex: Long Drill-In Menu (keyboard repro)",parameters:{controls:{disable:!0},docs:{description:{story:'Repro for the sticky back header covering keyboard-focused items. The play function opens the menu, drills into "Long list" and scrolls it to the bottom, then leaves it open. Press Home, or ArrowUp repeatedly, and check whether the focused item scrolls underneath the pinned back header.'}}},render:()=>e.jsx(i,{trigger:e.jsx(b,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",children:e.jsx(s,{label:"Long list",children:f.map(t=>e.jsx(n,{label:`Nested ${t}`},t))})}),play:async({canvasElement:t})=>{const r=x(t),l=x(t.ownerDocument.body);await h.click(r.getByRole("button",{name:/open drill-in menu/i})),await h.click(await l.findByRole("menuitem",{name:/long list/i}));const o=(await l.findByRole("button",{name:/long list/i})).parentElement;await M(()=>p(o.scrollHeight).toBeGreaterThan(o.clientHeight)),o.scrollTop=o.scrollHeight}},an=({query:t})=>{const[r,l]=g.useState(t??"");return g.useEffect(()=>{l(t??"")},[t]),e.jsxs(V,{gap:"12",children:[e.jsxs(Ye,{gap:"8",children:[e.jsx(b,{onClick:()=>l("zzz"),children:"Filter: no match"}),e.jsx(b,{onClick:()=>l(""),children:"Clear filter"})]}),e.jsx(i,{trigger:e.jsx(b,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",query:r,filterMode:"contains",children:e.jsx(s,{label:"Long list",children:f.map(a=>e.jsx(n,{label:`Nested ${a}`},a))})})]})},q={name:"Ex: Long Drill-In Menu (filtered)",args:{query:""},argTypes:{query:{control:"text"}},parameters:{docs:{description:{story:"A filter with no matches unmounts the drill-in level and its back header. After the filter is cleared, keyboard scrolling must still reserve the header height. Use the Controls panel (`query`) to filter: clicking buttons on the canvas closes the floating menu."}}},render:t=>e.jsx(an,{query:t.query}),play:async({canvasElement:t})=>{const r=x(t),l=x(t.ownerDocument.body),a=()=>{const u=t.ownerDocument.querySelectorAll('[class*="menu__level"]:not([aria-hidden])'),m=u[u.length-1];return{variable:m.style.getPropertyValue("--menu-back-header-height"),padding:getComputedStyle(m).scrollPaddingTop}};await h.click(r.getByRole("button",{name:/open drill-in menu/i})),await h.click(await l.findByRole("menuitem",{name:/long list/i})),await l.findByRole("button",{name:/long list/i}),await M(()=>p(a().variable).not.toBe(""));const o=a().variable;r.getByRole("button",{name:/filter: no match/i}).click(),await l.findByText(/no results found/i),r.getByRole("button",{name:/clear filter/i}).click(),await l.findByRole("button",{name:/long list/i}),await M(()=>{p(a().variable).toBe(o),p(a().padding).toBe(o)})}},P={render:()=>e.jsx(tn,{}),parameters:{controls:{disable:!0}}},_={render:()=>e.jsx(ln,{}),parameters:{controls:{disable:!0}}},W={name:"Panel as sidebar",render:()=>e.jsx(Ze,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(i,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(s,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(s,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}},G={name:"Panel as mobile nav",render:()=>e.jsx(Ze,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(i,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(s,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(s,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),parameters:{controls:{disable:!0}}};var Y,Z,Q;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var J,X,ee;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ee=(X=k.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ne,te,le;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(te=I.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,ae,oe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,ce;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,me;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=L.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,be,ge;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ge=(be=O.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var he,xe,Me;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Me=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Me.source}}};var fe,je,ve;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(je=R.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var we,ye,Se;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Se=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Be,Ee,ke;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Ie,Ae,Te;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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

    // The viewport clips the size probe; it must not be a scrollable ancestor
    // that keyboard \`scrollIntoView()\` can move out from under the header.
    const levelsViewport = menuElement.querySelector<HTMLElement>('[class*="menu__levelsViewport"]') as HTMLElement;
    expect(getComputedStyle(levelsViewport).overflowY).toBe('clip');
    levelsViewport.scrollTop = 48;
    expect(levelsViewport.scrollTop).toBe(0);

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
}`,...(Te=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var Le,Oe,De;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(De=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Re,Ce,He;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Ex: Long Drill-In Menu (filtered)',
  args: {
    query: ''
  },
  argTypes: {
    query: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A filter with no matches unmounts the drill-in level and its back ' + 'header. After the filter is cleared, keyboard scrolling must still ' + 'reserve the header height. Use the Controls panel (\`query\`) to ' + 'filter: clicking buttons on the canvas closes the floating menu.'
      }
    }
  },
  render: (args: {
    query?: string;
  }) => <DiginFilterExample query={args.query} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    const levelPadding = () => {
      const levels = canvasElement.ownerDocument.querySelectorAll<HTMLElement>('[class*="menu__level"]:not([aria-hidden])');
      const level = levels[levels.length - 1] as HTMLElement;
      return {
        variable: level.style.getPropertyValue('--menu-back-header-height'),
        padding: getComputedStyle(level).scrollPaddingTop
      };
    };
    await userEvent.click(canvas.getByRole('button', {
      name: /open drill-in menu/i
    }));
    await userEvent.click(await screen.findByRole('menuitem', {
      name: /long list/i
    }));
    await screen.findByRole('button', {
      name: /long list/i
    });
    await waitFor(() => expect(levelPadding().variable).not.toBe(''));
    const measured = levelPadding().variable;

    // Programmatic clicks avoid the outside-press that would close the menu.
    canvas.getByRole('button', {
      name: /filter: no match/i
    }).click();
    await screen.findByText(/no results found/i);
    canvas.getByRole('button', {
      name: /clear filter/i
    }).click();
    await screen.findByRole('button', {
      name: /long list/i
    });
    await waitFor(() => {
      expect(levelPadding().variable).toBe(measured);
      expect(levelPadding().padding).toBe(measured);
    });
  }
}`,...(He=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var Ne,Fe,qe;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <SubMenuDiginFormsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(qe=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Pe,_e,We;_.parameters={..._.parameters,docs:{...(Pe=_.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(We=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Ge,Ve,Ue;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ue=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var $e,Ke,ze;G.parameters={...G.parameters,docs:{...($e=G.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(ze=(Ke=G.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};const qn=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","ExLongMenu","ExLongDiginMenu","ExLongDiginMenuKeyboard","ExLongDiginMenuFiltered","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{E as Actions,k as ActionsWithSections,_ as AutocompleteFiltering,L as ConditionalBreakpoints,T as Density,N as ExLongDiginMenu,q as ExLongDiginMenuFiltered,F as ExLongDiginMenuKeyboard,H as ExLongMenu,A as MultiSelect,G as PanelAsMobileNav,W as PanelAsSidebar,I as SingleSelect,C as SubMenuDigin,P as SubMenuDiginForms,D as SubMenuHover,O as ToggleOptions,R as TopNavExample,qn as __namedExportsOrder,Fn as default};
