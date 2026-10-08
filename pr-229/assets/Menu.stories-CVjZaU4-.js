import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BKyFwriW.js";import{w as h,u as i,e as o,a as c,c as gt}from"./index-B_RCCgW0.js";import{H as dt,V as z,F as bt,B as Y}from"./dsComponent-BG2jnRr7.js";import{B as wt}from"./BreakpointIndicator-CC_bqv_X.js";import{B as w}from"./Button-Cr4bC5CG.js";import{F as S}from"./FormField-BtA_7OJ2.js";import{T as ht}from"./Text-BPLBRPQ6.js";import{T as E}from"./TextInput-D9mOIsYv.js";import{M as d,a as n,b as M,S as m}from"./SubMenu-l5V4X4E0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-DM3dqKkX.js";import"./Tooltip-BEwLM_hx.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-Cv0iFqCV.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-DiHTkBHd.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";gt({asyncUtilTimeout:4e3});const an={title:"Components/Menu",component:d,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},yt=()=>{const[t,s]=y.useState("item-2");return e.jsxs(d,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{label:"Option One",selected:t==="item-1",onClick:()=>s("item-1")}),e.jsx(n,{label:"Option Two",selected:t==="item-2",onClick:()=>s("item-2")}),e.jsx(n,{label:"Option Three",selected:t==="item-3",onClick:()=>s("item-3")})]})},xt=()=>{const[t,s]=y.useState(["beta"]),a=r=>{s(l=>l.includes(r)?l.filter(u=>u!==r):[...l,r])};return e.jsx(d,{inline:!0,closeOnSelect:!1,children:e.jsxs(M,{label:"Wave type",children:[e.jsx(n,{variant:"checkbox",label:"Alpha",selected:t.includes("alpha"),onClick:()=>a("alpha")}),e.jsx(n,{variant:"checkbox",label:"Beta",selected:t.includes("beta"),onClick:()=>a("beta")}),e.jsx(n,{variant:"checkbox",label:"Gamma",selected:t.includes("gamma"),onClick:()=>a("gamma")})]})})},vt=()=>{const[t,s]=y.useState(!1),[a,r]=y.useState(!0);return e.jsxs(d,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(M,{label:"Options",divider:!0,children:[e.jsx(n,{variant:"toggle",label:"Compact mode",selected:t,onClick:()=>s(l=>!l)}),e.jsx(n,{variant:"toggle",label:"Email alerts",selected:a,onClick:()=>r(l=>!l)})]}),e.jsx(n,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},ft=()=>{const[t,s]=y.useState(""),[a,r]=y.useState(""),[l,u]=y.useState(""),[g,p]=y.useState("");return e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(n,{label:"Dashboard"}),e.jsx(m,{label:"Edit profile",children:e.jsxs(Y,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Profile name",labelFor:"profile-name",children:e.jsx(E,{id:"profile-name",name:"profileName",value:t,onChange:b=>s(b.target.value)})}),e.jsx(S,{label:"Owner",labelFor:"profile-owner",children:e.jsx(E,{id:"profile-owner",name:"profileOwner",value:a,onChange:b=>r(b.target.value)})}),e.jsx(w,{variant:"primary",children:"Submit"})]})}),e.jsx(m,{label:"Create alert",children:e.jsxs(Y,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Topic",labelFor:"alert-topic",children:e.jsx(E,{id:"alert-topic",name:"alertTopic",value:l,onChange:b=>u(b.target.value)})}),e.jsx(S,{label:"Channel",labelFor:"alert-channel",children:e.jsx(E,{id:"alert-channel",name:"alertChannel",value:g,onChange:b=>p(b.target.value)})}),e.jsx(w,{variant:"primary",children:"Submit"})]})})]})},Et=()=>{const[t,s]=y.useState("");return e.jsxs(z,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(E,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:t,onChange:a=>s(a.target.value)}),e.jsxs(d,{inline:!0,query:t,filterMode:"contains",highlightMatches:!0,children:[e.jsx(n,{label:"Account settings",description:"Manage profile and security"}),e.jsx(n,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(n,{label:"Integrations",description:"Connect external tools"}),e.jsx(n,{label:"Audit history",description:"Track critical events"})]})]})},x=t=>h(t.ownerDocument.body),Mt=async t=>{const s=x(t);await c(()=>{const a=t.ownerDocument.activeElement;o(a).not.toBe(t.ownerDocument.body),o(s.getAllByRole("menu").some(r=>r.contains(a))).toBe(!0)},{timeout:4e3})},pt=t=>{const s=Array.from(t.ownerDocument.querySelectorAll('[data-ds-component="Menu"] [aria-hidden="true"] :is(button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]))')).filter(a=>!a.closest("[inert]")&&!a.hasAttribute("data-floating-ui-focus-guard")&&!a.closest("[data-floating-ui-focus-guard]"));o(s).toHaveLength(0)},j={render:()=>e.jsxs(d,{inline:!0,children:[e.jsx(n,{label:"Edit",iconBefore:"pencil"}),e.jsx(n,{label:"Duplicate",iconBefore:"copy"}),e.jsx(n,{label:"Archive",iconBefore:"trash"})]}),play:async({canvasElement:t})=>{const s=h(t);await i.tab(),o(s.getByRole("menuitem",{name:/edit/i})).toHaveFocus(),await i.keyboard("{ArrowDown}"),o(s.getByRole("menuitem",{name:/duplicate/i})).toHaveFocus(),await i.keyboard("{End}"),o(s.getByRole("menuitem",{name:/archive/i})).toHaveFocus(),await i.keyboard("{Home}"),o(s.getByRole("menuitem",{name:/edit/i})).toHaveFocus()},parameters:{controls:{disable:!0}}},F={render:()=>e.jsxs(d,{inline:!0,children:[e.jsxs(M,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Rename"}),e.jsx(n,{label:"Move"})]}),e.jsx(M,{label:"Danger Zone",children:e.jsx(n,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsx(yt,{}),parameters:{controls:{disable:!0}}},H={render:()=>e.jsx(xt,{}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsxs(dt,{gap:"12",alignItems:"flex-start",children:[e.jsxs(d,{inline:!0,density:"compact",children:[e.jsx(n,{label:"Compact",description:"Small row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(d,{inline:!0,density:"comfortable",children:[e.jsx(n,{label:"Comfortable",description:"Default row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(d,{inline:!0,density:"spacious",children:[e.jsx(n,{label:"Spacious",description:"Large row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(z,{children:[e.jsxs(d,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(M,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(n,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(m,{label:"More actions",iconBefore:"apps",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(m,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),e.jsxs(ht,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(wt,{})]}),parameters:{controls:{disable:!0}}},L={render:()=>e.jsx(vt,{}),parameters:{controls:{disable:!0}}},D={render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(n,{label:"View profile"}),e.jsxs(m,{label:"More actions",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(m,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),play:async({canvasElement:t})=>{const s=h(t),a=x(t),r=s.getByRole("button",{name:/open menu/i});await i.tab(),o(r).toHaveFocus(),await i.keyboard("{Enter}"),await c(()=>o(a.getByRole("menuitem",{name:/view profile/i})).toHaveFocus()),await i.keyboard("{ArrowDown}"),o(a.getByRole("menuitem",{name:/more actions/i})).toHaveFocus(),await i.keyboard("{ArrowRight}"),await c(()=>o(a.getByRole("menuitem",{name:/export/i})).toHaveFocus()),await i.keyboard("{ArrowLeft}"),await c(()=>o(a.getByRole("menuitem",{name:/more actions/i})).toHaveFocus()),await i.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(r).toHaveFocus()},parameters:{controls:{disable:!0}}},Bt=()=>{const t=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],s=["sales","production","admin"],[a,r]=y.useState(null),l=p=>({open:a===p,onOpenChange:b=>{if(b){r(p);return}r(B=>B===p?null:B)}}),u=(p,b)=>{const B=s.indexOf(b),Z=s.length,J=(B+p+Z*10)%Z,X=s[J],k=t[J];if(X===void 0)return;if(!(a!==null)){window.requestAnimationFrame(()=>{var f;k&&((f=document.getElementById(k))==null||f.focus())});return}window.requestAnimationFrame(()=>{var f;r(X),k&&((f=document.getElementById(k))==null||f.focus())})},g=p=>b=>{b.key!=="ArrowLeft"&&b.key!=="ArrowRight"||(b.preventDefault(),b.stopPropagation(),u(b.key==="ArrowRight"?1:-1,p))};return e.jsx(z,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(Y,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(w,{id:t[0],variant:"selectedBold",onKeyDown:g("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>u(p,"sales"),...l("sales"),children:[e.jsxs(m,{label:"Quotes",children:[e.jsx(n,{label:"Open quotes"}),e.jsx(n,{label:"Draft quotes"})]}),e.jsxs(m,{label:"Orders",selected:!0,children:[e.jsx(n,{label:"Order list"}),e.jsxs(m,{label:"Used orders",selected:!0,children:[e.jsx(n,{label:"Order as used",selected:!0}),e.jsx(n,{label:"Bookings"}),e.jsx(n,{label:"Order commissions"})]})]}),e.jsxs(m,{label:"Invoices",children:[e.jsx(n,{label:"All invoices"}),e.jsx(n,{label:"Credit notes"})]})]}),e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(w,{id:t[1],onKeyDown:g("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>u(p,"production"),...l("production"),children:[e.jsxs(m,{label:"Work Orders",children:[e.jsx(n,{label:"Open work orders"}),e.jsx(n,{label:"Completed"})]}),e.jsxs(m,{label:"Scheduling",children:[e.jsx(n,{label:"Production schedule"}),e.jsx(n,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(n,{label:"Inventory"})]}),e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(w,{id:t[2],onKeyDown:g("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>u(p,"admin"),...l("admin"),children:[e.jsxs(m,{label:"Users",children:[e.jsx(n,{label:"All users"}),e.jsx(n,{label:"Roles & permissions"})]}),e.jsxs(m,{label:"Settings",children:[e.jsx(n,{label:"General"}),e.jsx(n,{label:"Integrations"}),e.jsx(n,{label:"Billing"})]}),e.jsx(n,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},T={name:"Top nav example",render:()=>e.jsx(Bt,{}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(n,{label:"Dashboard"}),e.jsxs(m,{label:"Settings",children:[e.jsx(n,{label:"Profile"}),e.jsx(n,{label:"Billing"}),e.jsxs(m,{label:"Team",children:[e.jsx(n,{label:"Members"}),e.jsx(n,{label:"Permissions"})]})]})]}),play:async({canvasElement:t})=>{const s=h(t),a=x(t),r=s.getByRole("button",{name:/open menu/i}),l=u=>a.getByRole("menuitem",{name:u});await i.tab(),o(r).toHaveFocus(),await i.keyboard("{ArrowDown}"),await Mt(t),await c(()=>o(l(/dashboard/i)).toHaveFocus()),await i.keyboard("{ArrowDown}"),o(l(/settings/i)).toHaveFocus(),await i.keyboard("{Enter}"),await c(()=>o(l(/profile/i)).toHaveFocus()),pt(t),await i.keyboard("{ArrowDown}"),o(l(/billing/i)).toHaveFocus(),await i.keyboard("{ArrowLeft}"),await c(()=>o(l(/settings/i)).toHaveFocus()),await i.keyboard(" "),await c(()=>o(l(/profile/i)).toHaveFocus()),await i.keyboard("{ArrowDown}{ArrowDown}{ArrowRight}"),await c(()=>o(l(/members/i)).toHaveFocus()),await i.keyboard("{Escape}"),await c(()=>o(l(/team/i)).toHaveFocus()),await i.keyboard("{Escape}"),await c(()=>o(l(/settings/i)).toHaveFocus()),await i.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(r).toHaveFocus()},parameters:{controls:{disable:!0}}},v=Array.from({length:40},(t,s)=>`${s+1} - Item ${s+1}`),N={name:"Ex: Long Menu",render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open long menu"}),children:[e.jsx(m,{label:"More items",children:v.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),v.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const s=h(t),a=h(t.ownerDocument.body);await i.click(s.getByRole("button",{name:/open long menu/i}));const r=await a.findByRole("menu"),l=t.ownerDocument.documentElement.clientHeight,u=r.getBoundingClientRect();o(u.top).toBeGreaterThanOrEqual(0),o(u.bottom).toBeLessThanOrEqual(l),o(getComputedStyle(r).overflowY).toBe("auto"),o(r.scrollHeight).toBeGreaterThan(r.clientHeight)},parameters:{controls:{disable:!0}}},C={name:"Ex: Long Drill-In Menu",render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:[e.jsx(m,{label:"Long list",children:v.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),e.jsxs(m,{label:"Short list",children:[e.jsx(n,{label:"First"}),e.jsx(n,{label:"Second"})]}),v.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const s=h(t),a=h(t.ownerDocument.body);await i.click(s.getByRole("button",{name:/open drill-in menu/i}));const r=await a.findByRole("menu"),l=r.querySelector('[class*="menu__levelsViewport"]');o(getComputedStyle(l).overflowY).toBe("clip"),l.scrollTop=48,o(l.scrollTop).toBe(0),await i.click(a.getByRole("menuitem",{name:/long list/i}));const u=await a.findByRole("button",{name:/long list/i}),g=u.parentElement;await c(()=>o(g.scrollHeight).toBeGreaterThan(g.clientHeight)),g.scrollTop=g.scrollHeight,await c(()=>o(Math.abs(u.getBoundingClientRect().top-g.getBoundingClientRect().top)).toBeLessThanOrEqual(1)),await i.click(u),await i.click(await a.findByRole("menuitem",{name:/short list/i}));const b=(await a.findByRole("button",{name:/short list/i})).parentElement;await c(()=>{o(r.scrollHeight).toBeLessThanOrEqual(r.clientHeight+1),o(b.scrollHeight).toBeLessThanOrEqual(b.clientHeight+1)})},parameters:{controls:{disable:!0}}},q={name:"Ex: Long Drill-In Menu (focus return on back)",render:()=>e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:e.jsxs(m,{label:"Long list",children:[v.map(t=>e.jsx(n,{label:`Nested ${t}`},t)),e.jsxs(m,{label:"Deep submenu",children:[e.jsx(n,{label:"Deep first"}),e.jsx(n,{label:"Deep second"})]})]})}),play:async({canvasElement:t})=>{const s=x(t),a=r=>s.getByRole("menuitem",{name:r});await i.tab(),await i.keyboard("{ArrowDown}"),await c(()=>o(a(/long list/i)).toHaveFocus()),await i.keyboard("{Enter}"),await c(()=>o(a(/nested 1 - item 1$/i)).toHaveFocus()),await i.keyboard("{End}"),await c(()=>o(a(/deep submenu/i)).toHaveFocus()),await i.keyboard("{Enter}"),await c(()=>o(a(/deep first/i)).toHaveFocus()),await i.keyboard("{ArrowLeft}"),await c(()=>o(a(/deep submenu/i)).toHaveFocus()),await c(()=>{const r=s.getByRole("menu"),l=r.querySelector("[data-menu-back]"),u=a(/deep submenu/i).getBoundingClientRect();o(l).not.toBeNull(),o(u.top).toBeGreaterThanOrEqual(l.getBoundingClientRect().bottom-1),o(u.bottom).toBeLessThanOrEqual(r.getBoundingClientRect().bottom+1)})},parameters:{controls:{disable:!0}}},V={name:"Ex: Long Drill-In Menu (focus return on mouse back)",render:()=>e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:e.jsxs(m,{label:"Long list",children:[v.map(t=>e.jsx(n,{label:`Nested ${t}`},t)),e.jsx(m,{label:"Deep submenu",children:e.jsx(n,{label:"Deep first"})})]})}),play:async({canvasElement:t})=>{const s=h(t),a=x(t),r=u=>a.getByRole("menuitem",{name:u});await i.click(s.getByRole("button",{name:/open drill-in menu/i})),await i.click(await a.findByRole("menuitem",{name:/long list/i})),await c(()=>o(r(/nested 1 - item 1$/i)).toBeVisible()),r(/deep submenu/i).scrollIntoView({block:"nearest"}),await i.click(r(/deep submenu/i)),await c(()=>o(r(/deep first/i)).toBeVisible());const l=a.getByRole("menu").querySelector("[data-menu-back]");o(l).not.toBeNull(),await i.click(l),await c(()=>o(r(/deep submenu/i)).toHaveFocus()),await c(()=>{const u=a.getByRole("menu"),g=u.querySelector("[data-menu-back]"),p=r(/deep submenu/i).getBoundingClientRect();o(g).not.toBeNull(),o(p.top).toBeGreaterThanOrEqual(g.getBoundingClientRect().bottom-1),o(p.bottom).toBeLessThanOrEqual(u.getBoundingClientRect().bottom+1)})},parameters:{controls:{disable:!0}}},_={name:"Ex: Long Drill-In Menu (width after back)",render:()=>e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:e.jsxs(m,{label:"Long list",children:[v.map(t=>e.jsx(n,{label:`Nested ${t}`},t)),e.jsx(m,{label:"Deep submenu",children:e.jsx(n,{label:"Deep first"})})]})}),play:async({canvasElement:t})=>{const s=h(t),a=x(t),r=b=>a.getByRole("menuitem",{name:b}),l=()=>t.ownerDocument.querySelector('[data-ds-component="Menu"]'),u=()=>c(()=>o(l().getAnimations({subtree:!0})).toHaveLength(0));await i.click(s.getByRole("button",{name:/open drill-in menu/i})),await i.click(await a.findByRole("menuitem",{name:/long list/i})),await c(()=>o(r(/nested 1 - item 1$/i)).toBeVisible()),await u(),r(/deep submenu/i).scrollIntoView({block:"nearest"}),await i.click(r(/deep submenu/i)),await c(()=>o(r(/deep first/i)).toBeVisible()),await u(),await i.keyboard("{ArrowLeft}"),await c(()=>o(r(/deep submenu/i)).toHaveFocus()),await u();const g=a.getAllByRole("menuitem").filter(b=>!b.closest('[aria-hidden="true"]')),p=new Set(g.map(b=>b.offsetHeight));o(p.size).toBe(1)},parameters:{controls:{disable:!0}}},P={name:"Ex: Long Drill-In Menu (keyboard repro)",parameters:{controls:{disable:!0},docs:{description:{story:'Repro for the sticky back header covering keyboard-focused items. The play function opens the menu, drills into "Long list" and scrolls it to the bottom, then leaves it open. Press Home, or ArrowUp repeatedly, and check whether the focused item scrolls underneath the pinned back header.'}}},render:()=>e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",children:e.jsx(m,{label:"Long list",children:v.map(t=>e.jsx(n,{label:`Nested ${t}`},t))})}),play:async({canvasElement:t})=>{const s=h(t),a=h(t.ownerDocument.body);await i.click(s.getByRole("button",{name:/open drill-in menu/i})),await i.click(await a.findByRole("menuitem",{name:/long list/i}));const l=(await a.findByRole("button",{name:/long list/i})).parentElement;await c(()=>o(l.scrollHeight).toBeGreaterThan(l.clientHeight)),l.scrollTop=l.scrollHeight}},kt=({query:t})=>{const[s,a]=y.useState(t??"");return y.useEffect(()=>{a(t??"")},[t]),e.jsxs(z,{gap:"12",children:[e.jsxs(dt,{gap:"8",children:[e.jsx(w,{onClick:()=>a("zzz"),children:"Filter: no match"}),e.jsx(w,{onClick:()=>a(""),children:"Clear filter"})]}),e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",query:s,filterMode:"contains",children:e.jsx(m,{label:"Long list",children:v.map(r=>e.jsx(n,{label:`Nested ${r}`},r))})})]})},G={name:"Ex: Long Drill-In Menu (filtered)",args:{query:""},argTypes:{query:{control:"text"}},parameters:{docs:{description:{story:"A filter with no matches unmounts the drill-in level and its back header. After the filter is cleared, keyboard scrolling must still reserve the header height. Use the Controls panel (`query`) to filter: clicking buttons on the canvas closes the floating menu."}}},render:t=>e.jsx(kt,{query:t.query}),play:async({canvasElement:t})=>{const s=h(t),a=h(t.ownerDocument.body),r=()=>{const u=t.ownerDocument.querySelectorAll('[class*="menu__level"]:not([aria-hidden])'),g=u[u.length-1];return{variable:g.style.getPropertyValue("--menu-back-header-height"),padding:getComputedStyle(g).scrollPaddingTop}};await i.click(s.getByRole("button",{name:/open drill-in menu/i})),await i.click(await a.findByRole("menuitem",{name:/long list/i})),await a.findByRole("button",{name:/long list/i}),await c(()=>o(r().variable).not.toBe(""));const l=r().variable;s.getByRole("button",{name:/filter: no match/i}).click(),await a.findByText(/no results found/i),s.getByRole("button",{name:/clear filter/i}).click(),await a.findByRole("button",{name:/long list/i}),await c(()=>{o(r().variable).toBe(l),o(r().padding).toBe(l)})}},W={name:"Sub menu digin (duplicate labels, nested flyout)",render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(m,{label:"Settings",children:e.jsx(n,{label:"First child"})}),e.jsxs(m,{label:"Settings",children:[e.jsx(n,{label:"Second child"}),e.jsx(m,{label:"Flyout",interaction:"hover",children:e.jsx(n,{label:"Flyout item"})})]})]}),play:async({canvasElement:t})=>{const s=h(t),a=x(t),r=l=>a.getByRole("menuitem",{name:l});await i.tab(),await i.keyboard("{ArrowDown}"),await c(()=>o(a.getAllByRole("menuitem",{name:/settings/i})[0]).toHaveFocus()),await i.keyboard("{ArrowDown}{Enter}"),await c(()=>o(r(/second child/i)).toHaveFocus()),o(a.queryByText("First child")).toBeNull(),await i.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>o(r(/flyout item/i)).toHaveFocus()),await i.keyboard("{ArrowLeft}"),await c(()=>o(r(/^flyout$/i)).toHaveFocus()),o(a.getByRole("menuitem",{name:/second child/i})).toBeVisible(),o(s.getByRole("button",{name:/open menu/i})).toBeTruthy()},parameters:{controls:{disable:!0}}},$={render:()=>e.jsx(ft,{}),play:async({canvasElement:t})=>{const s=h(t),a=x(t),r=s.getByRole("button",{name:/open menu/i});await i.tab(),await i.keyboard("{ArrowDown}"),await c(()=>o(a.getByRole("menuitem",{name:/dashboard/i})).toHaveFocus()),await i.keyboard("{ArrowDown}{Enter}");const l=await a.findByLabelText("Profile name");await c(()=>o(l).toHaveFocus()),await i.keyboard("abc{ArrowLeft}"),o(l).toHaveFocus(),o(l).toHaveValue("abc"),l.dispatchEvent(new CompositionEvent("compositionstart",{bubbles:!0})),await i.keyboard("{Escape}"),o(l).toBeInTheDocument(),o(l).toHaveFocus(),l.dispatchEvent(new CompositionEvent("compositionend",{bubbles:!0})),await new Promise(u=>setTimeout(u,50)),await i.keyboard("{Escape}"),await c(()=>o(a.getByRole("menuitem",{name:/edit profile/i})).toHaveFocus()),await i.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(r).toHaveFocus()},parameters:{controls:{disable:!0}}},U={render:()=>e.jsx(Et,{}),parameters:{controls:{disable:!0}}},Q={name:"Panel as sidebar",render:()=>e.jsx(bt,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(d,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(m,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(m,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),play:async({canvasElement:t})=>{const s=x(t),a=r=>s.getByRole("menuitem",{name:r});await i.tab(),o(a(/view profile/i)).toHaveFocus(),await i.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>o(a(/export/i)).toHaveFocus()),await i.keyboard("{ArrowLeft}"),await c(()=>o(a(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}},K={name:"Panel as mobile nav",render:()=>e.jsx(bt,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(d,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(m,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(m,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),play:async({canvasElement:t})=>{var r;const s=x(t),a=l=>s.getByRole("menuitem",{name:l});await i.tab(),o(a(/view profile/i)).toHaveFocus(),await i.keyboard("{ArrowDown}{Enter}"),await c(()=>o(a(/export/i)).toHaveFocus()),pt(t),(r=document.activeElement)==null||r.blur(),await i.keyboard("{Escape}"),o(a(/export/i)).toBeVisible(),a(/export/i).focus(),await i.keyboard("{ArrowDown}{ArrowDown}{Enter}"),await c(()=>o(a(/audit log/i)).toHaveFocus()),await i.keyboard("{ArrowLeft}"),await c(()=>o(a(/advanced/i)).toHaveFocus()),await i.keyboard("{ArrowLeft}"),await c(()=>o(a(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}};var ee,te,ne;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,re;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,se,le;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(se=A.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ue,me;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,be,pe;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(be=R.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ge,we,he;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(we=I.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var ye,xe,ve;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,Ee,Me;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Me=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var Be,ke,Se;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Se=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var je,Fe,Ae;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ae=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var He,Re,Ie;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Le,De,Te;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Te=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Oe,Ne,Ce;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Ex: Long Drill-In Menu (focus return on back)',
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open drill-in menu</Button>} subMenuInteraction="digin">
      <SubMenu label="Long list">
        {LONG_MENU_LABELS.map(label => <MenuItem key={label} label={\`Nested \${label}\`} />)}
        <SubMenu label="Deep submenu">
          <MenuItem label="Deep first" />
          <MenuItem label="Deep second" />
        </SubMenu>
      </SubMenu>
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const body = getDocumentQueries(canvasElement);
    const item = (name: RegExp) => body.getByRole('menuitem', {
      name
    });
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(item(/long list/i)).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(item(/nested 1 - item 1$/i)).toHaveFocus());

    // Jump to the last row (a submenu below the fold) and drill into it.
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(item(/deep submenu/i)).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(item(/deep first/i)).toHaveFocus());

    // Going back remounts the long level at scrollTop 0. Focus must return to
    // the opening row and that row must end up in view, not left below the
    // fold or underneath the sticky back header.
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(item(/deep submenu/i)).toHaveFocus());
    await waitFor(() => {
      const menu = body.getByRole('menu');
      const header = menu.querySelector<HTMLElement>('[data-menu-back]');
      const rowRect = item(/deep submenu/i).getBoundingClientRect();
      expect(header).not.toBeNull();
      expect(rowRect.top).toBeGreaterThanOrEqual((header as HTMLElement).getBoundingClientRect().bottom - 1);
      expect(rowRect.bottom).toBeLessThanOrEqual(menu.getBoundingClientRect().bottom + 1);
    });
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ce=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};var qe,Ve,_e;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Ex: Long Drill-In Menu (focus return on mouse back)',
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open drill-in menu</Button>} subMenuInteraction="digin">
      <SubMenu label="Long list">
        {LONG_MENU_LABELS.map(label => <MenuItem key={label} label={\`Nested \${label}\`} />)}
        <SubMenu label="Deep submenu">
          <MenuItem label="Deep first" />
        </SubMenu>
      </SubMenu>
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = getDocumentQueries(canvasElement);
    const item = (name: RegExp) => body.getByRole('menuitem', {
      name
    });
    await userEvent.click(canvas.getByRole('button', {
      name: /open drill-in menu/i
    }));
    await userEvent.click(await body.findByRole('menuitem', {
      name: /long list/i
    }));
    await waitFor(() => expect(item(/nested 1 - item 1$/i)).toBeVisible());

    // Open the submenu from a row below the fold, then use the Back header
    // with the mouse. The remounted level starts at scrollTop 0.
    item(/deep submenu/i).scrollIntoView({
      block: 'nearest'
    });
    await userEvent.click(item(/deep submenu/i));
    await waitFor(() => expect(item(/deep first/i)).toBeVisible());
    const back = body.getByRole('menu').querySelector<HTMLElement>('[data-menu-back]');
    expect(back).not.toBeNull();
    await userEvent.click(back as HTMLElement);
    await waitFor(() => expect(item(/deep submenu/i)).toHaveFocus());
    await waitFor(() => {
      const menu = body.getByRole('menu');
      const header = menu.querySelector<HTMLElement>('[data-menu-back]');
      const rowRect = item(/deep submenu/i).getBoundingClientRect();
      expect(header).not.toBeNull();
      expect(rowRect.top).toBeGreaterThanOrEqual((header as HTMLElement).getBoundingClientRect().bottom - 1);
      expect(rowRect.bottom).toBeLessThanOrEqual(menu.getBoundingClientRect().bottom + 1);
    });
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_e=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var Pe,Ge,We;_.parameters={..._.parameters,docs:{...(Pe=_.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Ex: Long Drill-In Menu (width after back)',
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open drill-in menu</Button>} subMenuInteraction="digin">
      <SubMenu label="Long list">
        {LONG_MENU_LABELS.map(label => <MenuItem key={label} label={\`Nested \${label}\`} />)}
        <SubMenu label="Deep submenu">
          <MenuItem label="Deep first" />
        </SubMenu>
      </SubMenu>
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = getDocumentQueries(canvasElement);
    const item = (name: RegExp) => body.getByRole('menuitem', {
      name
    });
    const menu = () => canvasElement.ownerDocument.querySelector<HTMLElement>('[data-ds-component="Menu"]') as HTMLElement;
    // Let the width transition finish, as it does at human speed.
    const settled = () => waitFor(() => expect(menu().getAnimations({
      subtree: true
    })).toHaveLength(0));
    await userEvent.click(canvas.getByRole('button', {
      name: /open drill-in menu/i
    }));
    await userEvent.click(await body.findByRole('menuitem', {
      name: /long list/i
    }));
    await waitFor(() => expect(item(/nested 1 - item 1$/i)).toBeVisible());
    await settled();

    // Drill into the narrow level and let the menu shrink to it.
    item(/deep submenu/i).scrollIntoView({
      block: 'nearest'
    });
    await userEvent.click(item(/deep submenu/i));
    await waitFor(() => expect(item(/deep first/i)).toBeVisible());
    await settled();

    // Back to the long level: the menu must grow back, so no row wraps.
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(item(/deep submenu/i)).toHaveFocus());
    await settled();
    const rows = body.getAllByRole('menuitem').filter(row => !row.closest('[aria-hidden="true"]'));
    const heights = new Set(rows.map(row => row.offsetHeight));
    expect(heights.size).toBe(1);
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(We=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var $e,Ue,Qe;P.parameters={...P.parameters,docs:{...($e=P.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Qe=(Ue=P.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var Ke,ze,Ye;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ye=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var Ze,Je,Xe;W.parameters={...W.parameters,docs:{...(Ze=W.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'Sub menu digin (duplicate labels, nested flyout)',
  render: () => <Menu trigger={<Button iconAfter="caret-down">Open menu</Button>} subMenuInteraction="digin">
      <SubMenu label="Settings">
        <MenuItem label="First child" />
      </SubMenu>
      <SubMenu label="Settings">
        <MenuItem label="Second child" />
        <SubMenu label="Flyout" interaction="hover">
          <MenuItem label="Flyout item" />
        </SubMenu>
      </SubMenu>
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = getDocumentQueries(canvasElement);
    const item = (name: RegExp) => body.getByRole('menuitem', {
      name
    });
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(body.getAllByRole('menuitem', {
      name: /settings/i
    })[0]).toHaveFocus());

    // The second of two same-labelled submenus shows its own children.
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(item(/second child/i)).toHaveFocus());
    expect(body.queryByText('First child')).toBeNull();

    // ArrowLeft in a nested flyout closes the flyout, not the drilled level.
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await waitFor(() => expect(item(/flyout item/i)).toHaveFocus());
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(item(/^flyout$/i)).toHaveFocus());
    expect(body.getByRole('menuitem', {
      name: /second child/i
    })).toBeVisible();
    expect(canvas.getByRole('button', {
      name: /open menu/i
    })).toBeTruthy();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Xe=(Je=W.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var et,tt,nt;$.parameters={...$.parameters,docs:{...(et=$.parameters)==null?void 0:et.docs,source:{originalSource:`{
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

    // Escape that cancels an IME candidate must not pop the level.
    nameInput.dispatchEvent(new CompositionEvent('compositionstart', {
      bubbles: true
    }));
    await userEvent.keyboard('{Escape}');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveFocus();
    nameInput.dispatchEvent(new CompositionEvent('compositionend', {
      bubbles: true
    }));
    await new Promise(resolve => setTimeout(resolve, 50));
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
}`,...(nt=(tt=$.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,rt;U.parameters={...U.parameters,docs:{...(at=U.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(rt=(ot=U.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var it,st,lt;Q.parameters={...Q.parameters,docs:{...(it=Q.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(st=Q.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var ct,ut,mt;K.parameters={...K.parameters,docs:{...(ct=K.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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

    // Inline menus stay mounted: Escape with focus elsewhere must not pop.
    (document.activeElement as HTMLElement | null)?.blur();
    await userEvent.keyboard('{Escape}');
    expect(item(/export/i)).toBeVisible();
    item(/export/i).focus();
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
}`,...(mt=(ut=K.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};const on=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","ExLongMenu","ExLongDiginMenu","ExLongDiginMenuFocusReturn","ExLongDiginMenuMouseBack","ExLongDiginMenuWidthAfterBack","ExLongDiginMenuKeyboard","ExLongDiginMenuFiltered","SubMenuDiginEdgeCases","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{j as Actions,F as ActionsWithSections,U as AutocompleteFiltering,I as ConditionalBreakpoints,R as Density,C as ExLongDiginMenu,G as ExLongDiginMenuFiltered,q as ExLongDiginMenuFocusReturn,P as ExLongDiginMenuKeyboard,V as ExLongDiginMenuMouseBack,_ as ExLongDiginMenuWidthAfterBack,N as ExLongMenu,H as MultiSelect,K as PanelAsMobileNav,Q as PanelAsSidebar,A as SingleSelect,O as SubMenuDigin,W as SubMenuDiginEdgeCases,$ as SubMenuDiginForms,D as SubMenuHover,L as ToggleOptions,T as TopNavExample,on as __namedExportsOrder,an as default};
