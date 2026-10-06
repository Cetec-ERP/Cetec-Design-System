import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BKyFwriW.js";import{w as h,u as l,e as o,a as c,c as at}from"./index-B_RCCgW0.js";import{H as et,V as $,F as tt,B as K}from"./dsComponent-BG2jnRr7.js";import{B as ot}from"./BreakpointIndicator-CC_bqv_X.js";import{B as g}from"./Button-Cr4bC5CG.js";import{F as S}from"./FormField-BxgtcHGz.js";import{T as rt}from"./Text-tIn1sg48.js";import{T as E}from"./TextInput-CIfm8jz1.js";import{M as m,a as t,b as M,S as u}from"./SubMenu-IC_VXaZB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-DM3dqKkX.js";import"./Tooltip-GoULuPEB.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-BRyYBgwZ.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-C2313l3t.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";at({asyncUtilTimeout:4e3});const Ut={title:"Components/Menu",component:m,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},lt=()=>{const[n,r]=y.useState("item-2");return e.jsxs(m,{inline:!0,closeOnSelect:!1,children:[e.jsx(t,{label:"Option One",selected:n==="item-1",onClick:()=>r("item-1")}),e.jsx(t,{label:"Option Two",selected:n==="item-2",onClick:()=>r("item-2")}),e.jsx(t,{label:"Option Three",selected:n==="item-3",onClick:()=>r("item-3")})]})},it=()=>{const[n,r]=y.useState(["beta"]),a=i=>{r(s=>s.includes(i)?s.filter(d=>d!==i):[...s,i])};return e.jsx(m,{inline:!0,closeOnSelect:!1,children:e.jsxs(M,{label:"Wave type",children:[e.jsx(t,{variant:"checkbox",label:"Alpha",selected:n.includes("alpha"),onClick:()=>a("alpha")}),e.jsx(t,{variant:"checkbox",label:"Beta",selected:n.includes("beta"),onClick:()=>a("beta")}),e.jsx(t,{variant:"checkbox",label:"Gamma",selected:n.includes("gamma"),onClick:()=>a("gamma")})]})})},st=()=>{const[n,r]=y.useState(!1),[a,i]=y.useState(!0);return e.jsxs(m,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(M,{label:"Options",divider:!0,children:[e.jsx(t,{variant:"toggle",label:"Compact mode",selected:n,onClick:()=>r(s=>!s)}),e.jsx(t,{variant:"toggle",label:"Email alerts",selected:a,onClick:()=>i(s=>!s)})]}),e.jsx(t,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},ct=()=>{const[n,r]=y.useState(""),[a,i]=y.useState(""),[s,d]=y.useState(""),[w,b]=y.useState("");return e.jsxs(m,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(t,{label:"Dashboard"}),e.jsx(u,{label:"Edit profile",children:e.jsxs(K,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Profile name",labelFor:"profile-name",children:e.jsx(E,{id:"profile-name",name:"profileName",value:n,onChange:p=>r(p.target.value)})}),e.jsx(S,{label:"Owner",labelFor:"profile-owner",children:e.jsx(E,{id:"profile-owner",name:"profileOwner",value:a,onChange:p=>i(p.target.value)})}),e.jsx(g,{variant:"primary",children:"Submit"})]})}),e.jsx(u,{label:"Create alert",children:e.jsxs(K,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Topic",labelFor:"alert-topic",children:e.jsx(E,{id:"alert-topic",name:"alertTopic",value:s,onChange:p=>d(p.target.value)})}),e.jsx(S,{label:"Channel",labelFor:"alert-channel",children:e.jsx(E,{id:"alert-channel",name:"alertChannel",value:w,onChange:p=>b(p.target.value)})}),e.jsx(g,{variant:"primary",children:"Submit"})]})})]})},ut=()=>{const[n,r]=y.useState("");return e.jsxs($,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(E,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:n,onChange:a=>r(a.target.value)}),e.jsxs(m,{inline:!0,query:n,filterMode:"contains",highlightMatches:!0,children:[e.jsx(t,{label:"Account settings",description:"Manage profile and security"}),e.jsx(t,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(t,{label:"Integrations",description:"Connect external tools"}),e.jsx(t,{label:"Audit history",description:"Track critical events"})]})]})},x=n=>h(n.ownerDocument.body),mt=async n=>{const r=x(n);await c(()=>{const a=n.ownerDocument.activeElement;o(a).not.toBe(n.ownerDocument.body),o(r.getAllByRole("menu").some(i=>i.contains(a))).toBe(!0)},{timeout:4e3})},nt=n=>{const r=Array.from(n.ownerDocument.querySelectorAll('[data-ds-component="Menu"] [aria-hidden="true"] :is(button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]))')).filter(a=>!a.closest("[inert]")&&!a.hasAttribute("data-floating-ui-focus-guard")&&!a.closest("[data-floating-ui-focus-guard]"));o(r).toHaveLength(0)},k={render:()=>e.jsxs(m,{inline:!0,children:[e.jsx(t,{label:"Edit",iconBefore:"pencil"}),e.jsx(t,{label:"Duplicate",iconBefore:"copy"}),e.jsx(t,{label:"Archive",iconBefore:"trash"})]}),play:async({canvasElement:n})=>{const r=h(n);await l.tab(),o(r.getByRole("menuitem",{name:/edit/i})).toHaveFocus(),await l.keyboard("{ArrowDown}"),o(r.getByRole("menuitem",{name:/duplicate/i})).toHaveFocus(),await l.keyboard("{End}"),o(r.getByRole("menuitem",{name:/archive/i})).toHaveFocus(),await l.keyboard("{Home}"),o(r.getByRole("menuitem",{name:/edit/i})).toHaveFocus()},parameters:{controls:{disable:!0}}},F={render:()=>e.jsxs(m,{inline:!0,children:[e.jsxs(M,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Rename"}),e.jsx(t,{label:"Move"})]}),e.jsx(M,{label:"Danger Zone",children:e.jsx(t,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsx(lt,{}),parameters:{controls:{disable:!0}}},H={render:()=>e.jsx(it,{}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsxs(et,{gap:"12",alignItems:"flex-start",children:[e.jsxs(m,{inline:!0,density:"compact",children:[e.jsx(t,{label:"Compact",description:"Small row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(m,{inline:!0,density:"comfortable",children:[e.jsx(t,{label:"Comfortable",description:"Default row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(m,{inline:!0,density:"spacious",children:[e.jsx(t,{label:"Spacious",description:"Large row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs($,{children:[e.jsxs(m,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(M,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(t,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(u,{label:"More actions",iconBefore:"apps",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),e.jsxs(rt,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(ot,{})]}),parameters:{controls:{disable:!0}}},D={render:()=>e.jsx(st,{}),parameters:{controls:{disable:!0}}},L={render:()=>e.jsxs(m,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),play:async({canvasElement:n})=>{const r=h(n),a=x(n),i=r.getByRole("button",{name:/open menu/i});await l.tab(),o(i).toHaveFocus(),await l.keyboard("{Enter}"),await c(()=>o(a.getByRole("menuitem",{name:/view profile/i})).toHaveFocus()),await l.keyboard("{ArrowDown}"),o(a.getByRole("menuitem",{name:/more actions/i})).toHaveFocus(),await l.keyboard("{ArrowRight}"),await c(()=>o(a.getByRole("menuitem",{name:/export/i})).toHaveFocus()),await l.keyboard("{ArrowLeft}"),await c(()=>o(a.getByRole("menuitem",{name:/more actions/i})).toHaveFocus()),await l.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(i).toHaveFocus()},parameters:{controls:{disable:!0}}},dt=()=>{const n=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],r=["sales","production","admin"],[a,i]=y.useState(null),s=b=>({open:a===b,onOpenChange:p=>{if(p){i(b);return}i(B=>B===b?null:B)}}),d=(b,p)=>{const B=r.indexOf(p),Q=r.length,z=(B+b+Q*10)%Q,Y=r[z],j=n[z];if(Y===void 0)return;if(!(a!==null)){window.requestAnimationFrame(()=>{var f;j&&((f=document.getElementById(j))==null||f.focus())});return}window.requestAnimationFrame(()=>{var f;i(Y),j&&((f=document.getElementById(j))==null||f.focus())})},w=b=>p=>{p.key!=="ArrowLeft"&&p.key!=="ArrowRight"||(p.preventDefault(),p.stopPropagation(),d(p.key==="ArrowRight"?1:-1,b))};return e.jsx($,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(K,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(m,{triggerInteraction:"click-and-hover",trigger:e.jsx(g,{id:n[0],variant:"selectedBold",onKeyDown:w("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:b=>d(b,"sales"),...s("sales"),children:[e.jsxs(u,{label:"Quotes",children:[e.jsx(t,{label:"Open quotes"}),e.jsx(t,{label:"Draft quotes"})]}),e.jsxs(u,{label:"Orders",selected:!0,children:[e.jsx(t,{label:"Order list"}),e.jsxs(u,{label:"Used orders",selected:!0,children:[e.jsx(t,{label:"Order as used",selected:!0}),e.jsx(t,{label:"Bookings"}),e.jsx(t,{label:"Order commissions"})]})]}),e.jsxs(u,{label:"Invoices",children:[e.jsx(t,{label:"All invoices"}),e.jsx(t,{label:"Credit notes"})]})]}),e.jsxs(m,{triggerInteraction:"click-and-hover",trigger:e.jsx(g,{id:n[1],onKeyDown:w("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:b=>d(b,"production"),...s("production"),children:[e.jsxs(u,{label:"Work Orders",children:[e.jsx(t,{label:"Open work orders"}),e.jsx(t,{label:"Completed"})]}),e.jsxs(u,{label:"Scheduling",children:[e.jsx(t,{label:"Production schedule"}),e.jsx(t,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(t,{label:"Inventory"})]}),e.jsxs(m,{triggerInteraction:"click-and-hover",trigger:e.jsx(g,{id:n[2],onKeyDown:w("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:b=>d(b,"admin"),...s("admin"),children:[e.jsxs(u,{label:"Users",children:[e.jsx(t,{label:"All users"}),e.jsx(t,{label:"Roles & permissions"})]}),e.jsxs(u,{label:"Settings",children:[e.jsx(t,{label:"General"}),e.jsx(t,{label:"Integrations"}),e.jsx(t,{label:"Billing"})]}),e.jsx(t,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},T={name:"Top nav example",render:()=>e.jsx(dt,{}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsxs(m,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(t,{label:"Dashboard"}),e.jsxs(u,{label:"Settings",children:[e.jsx(t,{label:"Profile"}),e.jsx(t,{label:"Billing"}),e.jsxs(u,{label:"Team",children:[e.jsx(t,{label:"Members"}),e.jsx(t,{label:"Permissions"})]})]})]}),play:async({canvasElement:n})=>{const r=h(n),a=x(n),i=r.getByRole("button",{name:/open menu/i}),s=d=>a.getByRole("menuitem",{name:d});await l.tab(),o(i).toHaveFocus(),await l.keyboard("{ArrowDown}"),await mt(n),await c(()=>o(s(/dashboard/i)).toHaveFocus()),await l.keyboard("{ArrowDown}"),o(s(/settings/i)).toHaveFocus(),await l.keyboard("{Enter}"),await c(()=>o(s(/profile/i)).toHaveFocus()),nt(n),await l.keyboard("{ArrowDown}"),o(s(/billing/i)).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await c(()=>o(s(/settings/i)).toHaveFocus()),await l.keyboard(" "),await c(()=>o(s(/profile/i)).toHaveFocus()),await l.keyboard("{ArrowDown}{ArrowDown}{ArrowRight}"),await c(()=>o(s(/members/i)).toHaveFocus()),await l.keyboard("{Escape}"),await c(()=>o(s(/team/i)).toHaveFocus()),await l.keyboard("{Escape}"),await c(()=>o(s(/settings/i)).toHaveFocus()),await l.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(i).toHaveFocus()},parameters:{controls:{disable:!0}}},v=Array.from({length:40},(n,r)=>`${r+1} - Item ${r+1}`),C={name:"Ex: Long Menu",render:()=>e.jsxs(m,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open long menu"}),children:[e.jsx(u,{label:"More items",children:v.map(n=>e.jsx(t,{label:`Nested ${n}`},n))}),v.map(n=>e.jsx(t,{label:n},n))]}),play:async({canvasElement:n})=>{const r=h(n),a=h(n.ownerDocument.body);await l.click(r.getByRole("button",{name:/open long menu/i}));const i=await a.findByRole("menu"),s=n.ownerDocument.documentElement.clientHeight,d=i.getBoundingClientRect();o(d.top).toBeGreaterThanOrEqual(0),o(d.bottom).toBeLessThanOrEqual(s),o(getComputedStyle(i).overflowY).toBe("auto"),o(i.scrollHeight).toBeGreaterThan(i.clientHeight)},parameters:{controls:{disable:!0}}},N={name:"Ex: Long Drill-In Menu",render:()=>e.jsxs(m,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:[e.jsx(u,{label:"Long list",children:v.map(n=>e.jsx(t,{label:`Nested ${n}`},n))}),e.jsxs(u,{label:"Short list",children:[e.jsx(t,{label:"First"}),e.jsx(t,{label:"Second"})]}),v.map(n=>e.jsx(t,{label:n},n))]}),play:async({canvasElement:n})=>{const r=h(n),a=h(n.ownerDocument.body);await l.click(r.getByRole("button",{name:/open drill-in menu/i}));const i=await a.findByRole("menu"),s=i.querySelector('[class*="menu__levelsViewport"]');o(getComputedStyle(s).overflowY).toBe("clip"),s.scrollTop=48,o(s.scrollTop).toBe(0),await l.click(a.getByRole("menuitem",{name:/long list/i}));const d=await a.findByRole("button",{name:/long list/i}),w=d.parentElement;await c(()=>o(w.scrollHeight).toBeGreaterThan(w.clientHeight)),w.scrollTop=w.scrollHeight,await c(()=>o(Math.abs(d.getBoundingClientRect().top-w.getBoundingClientRect().top)).toBeLessThanOrEqual(1)),await l.click(d),await l.click(await a.findByRole("menuitem",{name:/short list/i}));const p=(await a.findByRole("button",{name:/short list/i})).parentElement;await c(()=>{o(i.scrollHeight).toBeLessThanOrEqual(i.clientHeight+1),o(p.scrollHeight).toBeLessThanOrEqual(p.clientHeight+1)})},parameters:{controls:{disable:!0}}},q={name:"Ex: Long Drill-In Menu (keyboard repro)",parameters:{controls:{disable:!0},docs:{description:{story:'Repro for the sticky back header covering keyboard-focused items. The play function opens the menu, drills into "Long list" and scrolls it to the bottom, then leaves it open. Press Home, or ArrowUp repeatedly, and check whether the focused item scrolls underneath the pinned back header.'}}},render:()=>e.jsx(m,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",children:e.jsx(u,{label:"Long list",children:v.map(n=>e.jsx(t,{label:`Nested ${n}`},n))})}),play:async({canvasElement:n})=>{const r=h(n),a=h(n.ownerDocument.body);await l.click(r.getByRole("button",{name:/open drill-in menu/i})),await l.click(await a.findByRole("menuitem",{name:/long list/i}));const s=(await a.findByRole("button",{name:/long list/i})).parentElement;await c(()=>o(s.scrollHeight).toBeGreaterThan(s.clientHeight)),s.scrollTop=s.scrollHeight}},pt=({query:n})=>{const[r,a]=y.useState(n??"");return y.useEffect(()=>{a(n??"")},[n]),e.jsxs($,{gap:"12",children:[e.jsxs(et,{gap:"8",children:[e.jsx(g,{onClick:()=>a("zzz"),children:"Filter: no match"}),e.jsx(g,{onClick:()=>a(""),children:"Clear filter"})]}),e.jsx(m,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",query:r,filterMode:"contains",children:e.jsx(u,{label:"Long list",children:v.map(i=>e.jsx(t,{label:`Nested ${i}`},i))})})]})},P={name:"Ex: Long Drill-In Menu (filtered)",args:{query:""},argTypes:{query:{control:"text"}},parameters:{docs:{description:{story:"A filter with no matches unmounts the drill-in level and its back header. After the filter is cleared, keyboard scrolling must still reserve the header height. Use the Controls panel (`query`) to filter: clicking buttons on the canvas closes the floating menu."}}},render:n=>e.jsx(pt,{query:n.query}),play:async({canvasElement:n})=>{const r=h(n),a=h(n.ownerDocument.body),i=()=>{const d=n.ownerDocument.querySelectorAll('[class*="menu__level"]:not([aria-hidden])'),w=d[d.length-1];return{variable:w.style.getPropertyValue("--menu-back-header-height"),padding:getComputedStyle(w).scrollPaddingTop}};await l.click(r.getByRole("button",{name:/open drill-in menu/i})),await l.click(await a.findByRole("menuitem",{name:/long list/i})),await a.findByRole("button",{name:/long list/i}),await c(()=>o(i().variable).not.toBe(""));const s=i().variable;r.getByRole("button",{name:/filter: no match/i}).click(),await a.findByText(/no results found/i),r.getByRole("button",{name:/clear filter/i}).click(),await a.findByRole("button",{name:/long list/i}),await c(()=>{o(i().variable).toBe(s),o(i().padding).toBe(s)})}},_={name:"Sub menu digin (duplicate labels, nested flyout)",render:()=>e.jsxs(m,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(u,{label:"Settings",children:e.jsx(t,{label:"First child"})}),e.jsxs(u,{label:"Settings",children:[e.jsx(t,{label:"Second child"}),e.jsx(u,{label:"Flyout",interaction:"hover",children:e.jsx(t,{label:"Flyout item"})})]})]}),play:async({canvasElement:n})=>{const r=h(n),a=x(n),i=s=>a.getByRole("menuitem",{name:s});await l.tab(),await l.keyboard("{ArrowDown}"),await c(()=>o(a.getAllByRole("menuitem",{name:/settings/i})[0]).toHaveFocus()),await l.keyboard("{ArrowDown}{Enter}"),await c(()=>o(i(/second child/i)).toHaveFocus()),o(a.queryByText("First child")).toBeNull(),await l.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>o(i(/flyout item/i)).toHaveFocus()),await l.keyboard("{ArrowLeft}"),await c(()=>o(i(/^flyout$/i)).toHaveFocus()),o(a.getByRole("menuitem",{name:/second child/i})).toBeVisible(),o(r.getByRole("button",{name:/open menu/i})).toBeTruthy()},parameters:{controls:{disable:!0}}},W={render:()=>e.jsx(ct,{}),play:async({canvasElement:n})=>{const r=h(n),a=x(n),i=r.getByRole("button",{name:/open menu/i});await l.tab(),await l.keyboard("{ArrowDown}"),await c(()=>o(a.getByRole("menuitem",{name:/dashboard/i})).toHaveFocus()),await l.keyboard("{ArrowDown}{Enter}");const s=await a.findByLabelText("Profile name");await c(()=>o(s).toHaveFocus()),await l.keyboard("abc{ArrowLeft}"),o(s).toHaveFocus(),o(s).toHaveValue("abc"),await l.keyboard("{Escape}"),await c(()=>o(a.getByRole("menuitem",{name:/edit profile/i})).toHaveFocus()),await l.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(i).toHaveFocus()},parameters:{controls:{disable:!0}}},V={render:()=>e.jsx(ut,{}),parameters:{controls:{disable:!0}}},G={name:"Panel as sidebar",render:()=>e.jsx(tt,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(m,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),play:async({canvasElement:n})=>{const r=x(n),a=i=>r.getByRole("menuitem",{name:i});await l.tab(),o(a(/view profile/i)).toHaveFocus(),await l.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>o(a(/export/i)).toHaveFocus()),await l.keyboard("{ArrowLeft}"),await c(()=>o(a(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}},U={name:"Panel as mobile nav",render:()=>e.jsx(tt,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(m,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),play:async({canvasElement:n})=>{var i;const r=x(n),a=s=>r.getByRole("menuitem",{name:s});await l.tab(),o(a(/view profile/i)).toHaveFocus(),await l.keyboard("{ArrowDown}{Enter}"),await c(()=>o(a(/export/i)).toHaveFocus()),nt(n),(i=document.activeElement)==null||i.blur(),await l.keyboard("{Escape}"),o(a(/export/i)).toBeVisible(),a(/export/i).focus(),await l.keyboard("{ArrowDown}{ArrowDown}{Enter}"),await c(()=>o(a(/audit log/i)).toHaveFocus()),await l.keyboard("{ArrowLeft}"),await c(()=>o(a(/advanced/i)).toHaveFocus()),await l.keyboard("{ArrowLeft}"),await c(()=>o(a(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}};var Z,J,X;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(X=(J=k.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var ee,te,ne;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=F.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,re;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,ie,se;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,ue,me;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,pe,be;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,we,he;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(he=(we=D.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var ye,xe,ve;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,Ee,Me;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Me=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var Be,je,Se;O.parameters={...O.parameters,docs:{...(Be=O.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Se=(je=O.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var ke,Fe,Ae;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ae=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var He,Re,Ie;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var De,Le,Te;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Te=(Le=q.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var Oe,Ce,Ne;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ne=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var qe,Pe,_e;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(_e=(Pe=_.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var We,Ve,Ge;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ge=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Ue,$e,Ke;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ke=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Qe,ze,Ye;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ye=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var Ze,Je,Xe;U.parameters={...U.parameters,docs:{...(Ze=U.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=U.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};const $t=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","ExLongMenu","ExLongDiginMenu","ExLongDiginMenuKeyboard","ExLongDiginMenuFiltered","SubMenuDiginEdgeCases","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{k as Actions,F as ActionsWithSections,V as AutocompleteFiltering,I as ConditionalBreakpoints,R as Density,N as ExLongDiginMenu,P as ExLongDiginMenuFiltered,q as ExLongDiginMenuKeyboard,C as ExLongMenu,H as MultiSelect,U as PanelAsMobileNav,G as PanelAsSidebar,A as SingleSelect,O as SubMenuDigin,_ as SubMenuDiginEdgeCases,W as SubMenuDiginForms,L as SubMenuHover,D as ToggleOptions,T as TopNavExample,$t as __namedExportsOrder,Ut as default};
