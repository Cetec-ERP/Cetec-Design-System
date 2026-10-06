import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BKyFwriW.js";import{w as h,u as r,e as o,a as c,c as st}from"./index-B_RCCgW0.js";import{H as ot,V as K,F as rt,B as Q}from"./dsComponent-BG2jnRr7.js";import{B as lt}from"./BreakpointIndicator-CC_bqv_X.js";import{B as g}from"./Button-Cr4bC5CG.js";import{F as S}from"./FormField-BxgtcHGz.js";import{T as ct}from"./Text-tIn1sg48.js";import{T as E}from"./TextInput-CIfm8jz1.js";import{M as d,a as n,b as M,S as u}from"./SubMenu-DYeS0Yy5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-DM3dqKkX.js";import"./Tooltip-GoULuPEB.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-BRyYBgwZ.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-C2313l3t.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";st({asyncUtilTimeout:4e3});const zt={title:"Components/Menu",component:d,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},ut=()=>{const[t,i]=y.useState("item-2");return e.jsxs(d,{inline:!0,closeOnSelect:!1,children:[e.jsx(n,{label:"Option One",selected:t==="item-1",onClick:()=>i("item-1")}),e.jsx(n,{label:"Option Two",selected:t==="item-2",onClick:()=>i("item-2")}),e.jsx(n,{label:"Option Three",selected:t==="item-3",onClick:()=>i("item-3")})]})},dt=()=>{const[t,i]=y.useState(["beta"]),a=s=>{i(l=>l.includes(s)?l.filter(m=>m!==s):[...l,s])};return e.jsx(d,{inline:!0,closeOnSelect:!1,children:e.jsxs(M,{label:"Wave type",children:[e.jsx(n,{variant:"checkbox",label:"Alpha",selected:t.includes("alpha"),onClick:()=>a("alpha")}),e.jsx(n,{variant:"checkbox",label:"Beta",selected:t.includes("beta"),onClick:()=>a("beta")}),e.jsx(n,{variant:"checkbox",label:"Gamma",selected:t.includes("gamma"),onClick:()=>a("gamma")})]})})},mt=()=>{const[t,i]=y.useState(!1),[a,s]=y.useState(!0);return e.jsxs(d,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(M,{label:"Options",divider:!0,children:[e.jsx(n,{variant:"toggle",label:"Compact mode",selected:t,onClick:()=>i(l=>!l)}),e.jsx(n,{variant:"toggle",label:"Email alerts",selected:a,onClick:()=>s(l=>!l)})]}),e.jsx(n,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},bt=()=>{const[t,i]=y.useState(""),[a,s]=y.useState(""),[l,m]=y.useState(""),[w,p]=y.useState("");return e.jsxs(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(n,{label:"Dashboard"}),e.jsx(u,{label:"Edit profile",children:e.jsxs(Q,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Profile name",labelFor:"profile-name",children:e.jsx(E,{id:"profile-name",name:"profileName",value:t,onChange:b=>i(b.target.value)})}),e.jsx(S,{label:"Owner",labelFor:"profile-owner",children:e.jsx(E,{id:"profile-owner",name:"profileOwner",value:a,onChange:b=>s(b.target.value)})}),e.jsx(g,{variant:"primary",children:"Submit"})]})}),e.jsx(u,{label:"Create alert",children:e.jsxs(Q,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Topic",labelFor:"alert-topic",children:e.jsx(E,{id:"alert-topic",name:"alertTopic",value:l,onChange:b=>m(b.target.value)})}),e.jsx(S,{label:"Channel",labelFor:"alert-channel",children:e.jsx(E,{id:"alert-channel",name:"alertChannel",value:w,onChange:b=>p(b.target.value)})}),e.jsx(g,{variant:"primary",children:"Submit"})]})})]})},pt=()=>{const[t,i]=y.useState("");return e.jsxs(K,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(E,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:t,onChange:a=>i(a.target.value)}),e.jsxs(d,{inline:!0,query:t,filterMode:"contains",highlightMatches:!0,children:[e.jsx(n,{label:"Account settings",description:"Manage profile and security"}),e.jsx(n,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(n,{label:"Integrations",description:"Connect external tools"}),e.jsx(n,{label:"Audit history",description:"Track critical events"})]})]})},x=t=>h(t.ownerDocument.body),gt=async t=>{const i=x(t);await c(()=>{const a=t.ownerDocument.activeElement;o(a).not.toBe(t.ownerDocument.body),o(i.getAllByRole("menu").some(s=>s.contains(a))).toBe(!0)},{timeout:4e3})},it=t=>{const i=Array.from(t.ownerDocument.querySelectorAll('[data-ds-component="Menu"] [aria-hidden="true"] :is(button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]))')).filter(a=>!a.closest("[inert]")&&!a.hasAttribute("data-floating-ui-focus-guard")&&!a.closest("[data-floating-ui-focus-guard]"));o(i).toHaveLength(0)},k={render:()=>e.jsxs(d,{inline:!0,children:[e.jsx(n,{label:"Edit",iconBefore:"pencil"}),e.jsx(n,{label:"Duplicate",iconBefore:"copy"}),e.jsx(n,{label:"Archive",iconBefore:"trash"})]}),play:async({canvasElement:t})=>{const i=h(t);await r.tab(),o(i.getByRole("menuitem",{name:/edit/i})).toHaveFocus(),await r.keyboard("{ArrowDown}"),o(i.getByRole("menuitem",{name:/duplicate/i})).toHaveFocus(),await r.keyboard("{End}"),o(i.getByRole("menuitem",{name:/archive/i})).toHaveFocus(),await r.keyboard("{Home}"),o(i.getByRole("menuitem",{name:/edit/i})).toHaveFocus()},parameters:{controls:{disable:!0}}},F={render:()=>e.jsxs(d,{inline:!0,children:[e.jsxs(M,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Rename"}),e.jsx(n,{label:"Move"})]}),e.jsx(M,{label:"Danger Zone",children:e.jsx(n,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsx(ut,{}),parameters:{controls:{disable:!0}}},H={render:()=>e.jsx(dt,{}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsxs(ot,{gap:"12",alignItems:"flex-start",children:[e.jsxs(d,{inline:!0,density:"compact",children:[e.jsx(n,{label:"Compact",description:"Small row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(d,{inline:!0,density:"comfortable",children:[e.jsx(n,{label:"Comfortable",description:"Default row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(d,{inline:!0,density:"spacious",children:[e.jsx(n,{label:"Spacious",description:"Large row spacing"}),e.jsx(n,{label:"Second row",iconBefore:"apps"}),e.jsx(n,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(K,{children:[e.jsxs(d,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(M,{label:"Actions",divider:!0,children:[e.jsx(n,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(n,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(u,{label:"More actions",iconBefore:"apps",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(u,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),e.jsxs(ct,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(lt,{})]}),parameters:{controls:{disable:!0}}},D={render:()=>e.jsx(mt,{}),parameters:{controls:{disable:!0}}},L={render:()=>e.jsxs(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(n,{label:"View profile"}),e.jsxs(u,{label:"More actions",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(u,{label:"Advanced",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]}),play:async({canvasElement:t})=>{const i=h(t),a=x(t),s=i.getByRole("button",{name:/open menu/i});await r.tab(),o(s).toHaveFocus(),await r.keyboard("{Enter}"),await c(()=>o(a.getByRole("menuitem",{name:/view profile/i})).toHaveFocus()),await r.keyboard("{ArrowDown}"),o(a.getByRole("menuitem",{name:/more actions/i})).toHaveFocus(),await r.keyboard("{ArrowRight}"),await c(()=>o(a.getByRole("menuitem",{name:/export/i})).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a.getByRole("menuitem",{name:/more actions/i})).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(s).toHaveFocus()},parameters:{controls:{disable:!0}}},wt=()=>{const t=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],i=["sales","production","admin"],[a,s]=y.useState(null),l=p=>({open:a===p,onOpenChange:b=>{if(b){s(p);return}s(B=>B===p?null:B)}}),m=(p,b)=>{const B=i.indexOf(b),z=i.length,Y=(B+p+z*10)%z,Z=i[Y],j=t[Y];if(Z===void 0)return;if(!(a!==null)){window.requestAnimationFrame(()=>{var f;j&&((f=document.getElementById(j))==null||f.focus())});return}window.requestAnimationFrame(()=>{var f;s(Z),j&&((f=document.getElementById(j))==null||f.focus())})},w=p=>b=>{b.key!=="ArrowLeft"&&b.key!=="ArrowRight"||(b.preventDefault(),b.stopPropagation(),m(b.key==="ArrowRight"?1:-1,p))};return e.jsx(K,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(Q,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(g,{id:t[0],variant:"selectedBold",onKeyDown:w("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>m(p,"sales"),...l("sales"),children:[e.jsxs(u,{label:"Quotes",children:[e.jsx(n,{label:"Open quotes"}),e.jsx(n,{label:"Draft quotes"})]}),e.jsxs(u,{label:"Orders",selected:!0,children:[e.jsx(n,{label:"Order list"}),e.jsxs(u,{label:"Used orders",selected:!0,children:[e.jsx(n,{label:"Order as used",selected:!0}),e.jsx(n,{label:"Bookings"}),e.jsx(n,{label:"Order commissions"})]})]}),e.jsxs(u,{label:"Invoices",children:[e.jsx(n,{label:"All invoices"}),e.jsx(n,{label:"Credit notes"})]})]}),e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(g,{id:t[1],onKeyDown:w("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>m(p,"production"),...l("production"),children:[e.jsxs(u,{label:"Work Orders",children:[e.jsx(n,{label:"Open work orders"}),e.jsx(n,{label:"Completed"})]}),e.jsxs(u,{label:"Scheduling",children:[e.jsx(n,{label:"Production schedule"}),e.jsx(n,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(n,{label:"Inventory"})]}),e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(g,{id:t[2],onKeyDown:w("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>m(p,"admin"),...l("admin"),children:[e.jsxs(u,{label:"Users",children:[e.jsx(n,{label:"All users"}),e.jsx(n,{label:"Roles & permissions"})]}),e.jsxs(u,{label:"Settings",children:[e.jsx(n,{label:"General"}),e.jsx(n,{label:"Integrations"}),e.jsx(n,{label:"Billing"})]}),e.jsx(n,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},T={name:"Top nav example",render:()=>e.jsx(wt,{}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsxs(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(n,{label:"Dashboard"}),e.jsxs(u,{label:"Settings",children:[e.jsx(n,{label:"Profile"}),e.jsx(n,{label:"Billing"}),e.jsxs(u,{label:"Team",children:[e.jsx(n,{label:"Members"}),e.jsx(n,{label:"Permissions"})]})]})]}),play:async({canvasElement:t})=>{const i=h(t),a=x(t),s=i.getByRole("button",{name:/open menu/i}),l=m=>a.getByRole("menuitem",{name:m});await r.tab(),o(s).toHaveFocus(),await r.keyboard("{ArrowDown}"),await gt(t),await c(()=>o(l(/dashboard/i)).toHaveFocus()),await r.keyboard("{ArrowDown}"),o(l(/settings/i)).toHaveFocus(),await r.keyboard("{Enter}"),await c(()=>o(l(/profile/i)).toHaveFocus()),it(t),await r.keyboard("{ArrowDown}"),o(l(/billing/i)).toHaveFocus(),await r.keyboard("{ArrowLeft}"),await c(()=>o(l(/settings/i)).toHaveFocus()),await r.keyboard(" "),await c(()=>o(l(/profile/i)).toHaveFocus()),await r.keyboard("{ArrowDown}{ArrowDown}{ArrowRight}"),await c(()=>o(l(/members/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(l(/team/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(l(/settings/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(s).toHaveFocus()},parameters:{controls:{disable:!0}}},v=Array.from({length:40},(t,i)=>`${i+1} - Item ${i+1}`),C={name:"Ex: Long Menu",render:()=>e.jsxs(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open long menu"}),children:[e.jsx(u,{label:"More items",children:v.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),v.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const i=h(t),a=h(t.ownerDocument.body);await r.click(i.getByRole("button",{name:/open long menu/i}));const s=await a.findByRole("menu"),l=t.ownerDocument.documentElement.clientHeight,m=s.getBoundingClientRect();o(m.top).toBeGreaterThanOrEqual(0),o(m.bottom).toBeLessThanOrEqual(l),o(getComputedStyle(s).overflowY).toBe("auto"),o(s.scrollHeight).toBeGreaterThan(s.clientHeight)},parameters:{controls:{disable:!0}}},N={name:"Ex: Long Drill-In Menu",render:()=>e.jsxs(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:[e.jsx(u,{label:"Long list",children:v.map(t=>e.jsx(n,{label:`Nested ${t}`},t))}),e.jsxs(u,{label:"Short list",children:[e.jsx(n,{label:"First"}),e.jsx(n,{label:"Second"})]}),v.map(t=>e.jsx(n,{label:t},t))]}),play:async({canvasElement:t})=>{const i=h(t),a=h(t.ownerDocument.body);await r.click(i.getByRole("button",{name:/open drill-in menu/i}));const s=await a.findByRole("menu"),l=s.querySelector('[class*="menu__levelsViewport"]');o(getComputedStyle(l).overflowY).toBe("clip"),l.scrollTop=48,o(l.scrollTop).toBe(0),await r.click(a.getByRole("menuitem",{name:/long list/i}));const m=await a.findByRole("button",{name:/long list/i}),w=m.parentElement;await c(()=>o(w.scrollHeight).toBeGreaterThan(w.clientHeight)),w.scrollTop=w.scrollHeight,await c(()=>o(Math.abs(m.getBoundingClientRect().top-w.getBoundingClientRect().top)).toBeLessThanOrEqual(1)),await r.click(m),await r.click(await a.findByRole("menuitem",{name:/short list/i}));const b=(await a.findByRole("button",{name:/short list/i})).parentElement;await c(()=>{o(s.scrollHeight).toBeLessThanOrEqual(s.clientHeight+1),o(b.scrollHeight).toBeLessThanOrEqual(b.clientHeight+1)})},parameters:{controls:{disable:!0}}},q={name:"Ex: Long Drill-In Menu (focus return on back)",render:()=>e.jsx(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:e.jsxs(u,{label:"Long list",children:[v.map(t=>e.jsx(n,{label:`Nested ${t}`},t)),e.jsxs(u,{label:"Deep submenu",children:[e.jsx(n,{label:"Deep first"}),e.jsx(n,{label:"Deep second"})]})]})}),play:async({canvasElement:t})=>{const i=x(t),a=s=>i.getByRole("menuitem",{name:s});await r.tab(),await r.keyboard("{ArrowDown}"),await c(()=>o(a(/long list/i)).toHaveFocus()),await r.keyboard("{Enter}"),await c(()=>o(a(/nested 1 - item 1$/i)).toHaveFocus()),await r.keyboard("{End}"),await c(()=>o(a(/deep submenu/i)).toHaveFocus()),await r.keyboard("{Enter}"),await c(()=>o(a(/deep first/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a(/deep submenu/i)).toHaveFocus()),await c(()=>{const s=i.getByRole("menu"),l=s.querySelector("[data-menu-back]"),m=a(/deep submenu/i).getBoundingClientRect();o(l).not.toBeNull(),o(m.top).toBeGreaterThanOrEqual(l.getBoundingClientRect().bottom-1),o(m.bottom).toBeLessThanOrEqual(s.getBoundingClientRect().bottom+1)})},parameters:{controls:{disable:!0}}},P={name:"Ex: Long Drill-In Menu (keyboard repro)",parameters:{controls:{disable:!0},docs:{description:{story:'Repro for the sticky back header covering keyboard-focused items. The play function opens the menu, drills into "Long list" and scrolls it to the bottom, then leaves it open. Press Home, or ArrowUp repeatedly, and check whether the focused item scrolls underneath the pinned back header.'}}},render:()=>e.jsx(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",children:e.jsx(u,{label:"Long list",children:v.map(t=>e.jsx(n,{label:`Nested ${t}`},t))})}),play:async({canvasElement:t})=>{const i=h(t),a=h(t.ownerDocument.body);await r.click(i.getByRole("button",{name:/open drill-in menu/i})),await r.click(await a.findByRole("menuitem",{name:/long list/i}));const l=(await a.findByRole("button",{name:/long list/i})).parentElement;await c(()=>o(l.scrollHeight).toBeGreaterThan(l.clientHeight)),l.scrollTop=l.scrollHeight}},ht=({query:t})=>{const[i,a]=y.useState(t??"");return y.useEffect(()=>{a(t??"")},[t]),e.jsxs(K,{gap:"12",children:[e.jsxs(ot,{gap:"8",children:[e.jsx(g,{onClick:()=>a("zzz"),children:"Filter: no match"}),e.jsx(g,{onClick:()=>a(""),children:"Clear filter"})]}),e.jsx(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",query:i,filterMode:"contains",children:e.jsx(u,{label:"Long list",children:v.map(s=>e.jsx(n,{label:`Nested ${s}`},s))})})]})},_={name:"Ex: Long Drill-In Menu (filtered)",args:{query:""},argTypes:{query:{control:"text"}},parameters:{docs:{description:{story:"A filter with no matches unmounts the drill-in level and its back header. After the filter is cleared, keyboard scrolling must still reserve the header height. Use the Controls panel (`query`) to filter: clicking buttons on the canvas closes the floating menu."}}},render:t=>e.jsx(ht,{query:t.query}),play:async({canvasElement:t})=>{const i=h(t),a=h(t.ownerDocument.body),s=()=>{const m=t.ownerDocument.querySelectorAll('[class*="menu__level"]:not([aria-hidden])'),w=m[m.length-1];return{variable:w.style.getPropertyValue("--menu-back-header-height"),padding:getComputedStyle(w).scrollPaddingTop}};await r.click(i.getByRole("button",{name:/open drill-in menu/i})),await r.click(await a.findByRole("menuitem",{name:/long list/i})),await a.findByRole("button",{name:/long list/i}),await c(()=>o(s().variable).not.toBe(""));const l=s().variable;i.getByRole("button",{name:/filter: no match/i}).click(),await a.findByText(/no results found/i),i.getByRole("button",{name:/clear filter/i}).click(),await a.findByRole("button",{name:/long list/i}),await c(()=>{o(s().variable).toBe(l),o(s().padding).toBe(l)})}},G={name:"Sub menu digin (duplicate labels, nested flyout)",render:()=>e.jsxs(d,{trigger:e.jsx(g,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(u,{label:"Settings",children:e.jsx(n,{label:"First child"})}),e.jsxs(u,{label:"Settings",children:[e.jsx(n,{label:"Second child"}),e.jsx(u,{label:"Flyout",interaction:"hover",children:e.jsx(n,{label:"Flyout item"})})]})]}),play:async({canvasElement:t})=>{const i=h(t),a=x(t),s=l=>a.getByRole("menuitem",{name:l});await r.tab(),await r.keyboard("{ArrowDown}"),await c(()=>o(a.getAllByRole("menuitem",{name:/settings/i})[0]).toHaveFocus()),await r.keyboard("{ArrowDown}{Enter}"),await c(()=>o(s(/second child/i)).toHaveFocus()),o(a.queryByText("First child")).toBeNull(),await r.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>o(s(/flyout item/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(s(/^flyout$/i)).toHaveFocus()),o(a.getByRole("menuitem",{name:/second child/i})).toBeVisible(),o(i.getByRole("button",{name:/open menu/i})).toBeTruthy()},parameters:{controls:{disable:!0}}},W={render:()=>e.jsx(bt,{}),play:async({canvasElement:t})=>{const i=h(t),a=x(t),s=i.getByRole("button",{name:/open menu/i});await r.tab(),await r.keyboard("{ArrowDown}"),await c(()=>o(a.getByRole("menuitem",{name:/dashboard/i})).toHaveFocus()),await r.keyboard("{ArrowDown}{Enter}");const l=await a.findByLabelText("Profile name");await c(()=>o(l).toHaveFocus()),await r.keyboard("abc{ArrowLeft}"),o(l).toHaveFocus(),o(l).toHaveValue("abc"),await r.keyboard("{Escape}"),await c(()=>o(a.getByRole("menuitem",{name:/edit profile/i})).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(s).toHaveFocus()},parameters:{controls:{disable:!0}}},V={render:()=>e.jsx(pt,{}),parameters:{controls:{disable:!0}}},U={name:"Panel as sidebar",render:()=>e.jsx(rt,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(d,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(u,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(u,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),play:async({canvasElement:t})=>{const i=x(t),a=s=>i.getByRole("menuitem",{name:s});await r.tab(),o(a(/view profile/i)).toHaveFocus(),await r.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>o(a(/export/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}},$={name:"Panel as mobile nav",render:()=>e.jsx(rt,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(d,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(n,{label:"View profile"}),e.jsxs(u,{label:"More actions",minW:"180",children:[e.jsx(n,{label:"Export"}),e.jsx(n,{label:"Share"}),e.jsxs(u,{label:"Advanced",minW:"180",children:[e.jsx(n,{label:"Audit log"}),e.jsx(n,{label:"Settings"})]})]})]})}),play:async({canvasElement:t})=>{var s;const i=x(t),a=l=>i.getByRole("menuitem",{name:l});await r.tab(),o(a(/view profile/i)).toHaveFocus(),await r.keyboard("{ArrowDown}{Enter}"),await c(()=>o(a(/export/i)).toHaveFocus()),it(t),(s=document.activeElement)==null||s.blur(),await r.keyboard("{Escape}"),o(a(/export/i)).toBeVisible(),a(/export/i).focus(),await r.keyboard("{ArrowDown}{ArrowDown}{Enter}"),await c(()=>o(a(/audit log/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a(/advanced/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}};var J,X,ee;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ee=(X=k.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ne,ae;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,re,ie;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,le,ce;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(le=H.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,de,me;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=R.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var be,pe,ge;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var we,he,ye;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ye=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var xe,ve,fe;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(fe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Ee,Me,Be;T.parameters={...T.parameters,docs:{...(Ee=T.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(Me=T.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var je,Se,ke;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(ke=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Fe,Ae,He;C.parameters={...C.parameters,docs:{...(Fe=C.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(He=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var Re,Ie,De;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(De=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Le,Te,Oe;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Oe=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:Oe.source}}};var Ce,Ne,qe;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var Pe,_e,Ge;_.parameters={..._.parameters,docs:{...(Pe=_.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ge=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var We,Ve,Ue;G.parameters={...G.parameters,docs:{...(We=G.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var $e,Ke,Qe;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Qe=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var ze,Ye,Ze;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ze=(Ye=V.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Je,Xe,et;U.parameters={...U.parameters,docs:{...(Je=U.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(et=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:et.source}}};var tt,nt,at;$.parameters={...$.parameters,docs:{...(tt=$.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=$.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};const Yt=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","ExLongMenu","ExLongDiginMenu","ExLongDiginMenuFocusReturn","ExLongDiginMenuKeyboard","ExLongDiginMenuFiltered","SubMenuDiginEdgeCases","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];export{k as Actions,F as ActionsWithSections,V as AutocompleteFiltering,I as ConditionalBreakpoints,R as Density,N as ExLongDiginMenu,_ as ExLongDiginMenuFiltered,q as ExLongDiginMenuFocusReturn,P as ExLongDiginMenuKeyboard,C as ExLongMenu,H as MultiSelect,$ as PanelAsMobileNav,U as PanelAsSidebar,A as SingleSelect,O as SubMenuDigin,G as SubMenuDiginEdgeCases,W as SubMenuDiginForms,L as SubMenuHover,D as ToggleOptions,T as TopNavExample,Yt as __namedExportsOrder,zt as default};
