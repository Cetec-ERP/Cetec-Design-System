import{j as e,H as cn,V as Q,T as dn,F as un,r as y,B as z}from"./iframe-tdKZEmKy.js";import{B as bn}from"./BreakpointIndicator-C3RKEknn.js";import{B as w}from"./Button-C2EUBKCW.js";import{F as S}from"./FormField-B0OZcUDR.js";import{T as f}from"./TextInput-CsqmuDnU.js";import{M as d,a as t,b as M,S as u}from"./SubMenu--QTcK7y6.js";import"./preload-helper-Bx88jSaX.js";import"./mq.hook-D2RtN4wc.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-BU6uf1b-.js";import"./Spinner-D_DX6p-4.js";import"./FieldContext-B8DswrXU.js";import"./Label-Bi_2NmMy.js";import"./IconButton-D-g4iGvz.js";import"./HighlightText-w9WFPpXv.js";import"./menu-BM7noSTK.js";import"./FloatingLayerContext-DNzNthDf.js";import"./ListItemGroup-hZhNxNqA.js";import"./Divider-CLaksQ4n.js";import"./Checkbox-DxT9ZE9x.js";import"./Toggle-fgXtQYhQ.js";const{configure:pn,expect:o,userEvent:r,waitFor:c,within:h}=__STORYBOOK_MODULE_TEST__;pn({asyncUtilTimeout:4e3});const $n={title:"Components/Menu",component:d,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},gn=()=>{const[n,s]=y.useState("item-2");return e.jsxs(d,{inline:!0,closeOnSelect:!1,children:[e.jsx(t,{label:"Option One",selected:n==="item-1",onClick:()=>s("item-1")}),e.jsx(t,{label:"Option Two",selected:n==="item-2",onClick:()=>s("item-2")}),e.jsx(t,{label:"Option Three",selected:n==="item-3",onClick:()=>s("item-3")})]})},wn=()=>{const[n,s]=y.useState(["beta"]),a=i=>{s(l=>l.includes(i)?l.filter(m=>m!==i):[...l,i])};return e.jsx(d,{inline:!0,closeOnSelect:!1,children:e.jsxs(M,{label:"Wave type",children:[e.jsx(t,{variant:"checkbox",label:"Alpha",selected:n.includes("alpha"),onClick:()=>a("alpha")}),e.jsx(t,{variant:"checkbox",label:"Beta",selected:n.includes("beta"),onClick:()=>a("beta")}),e.jsx(t,{variant:"checkbox",label:"Gamma",selected:n.includes("gamma"),onClick:()=>a("gamma")})]})})},hn=()=>{const[n,s]=y.useState(!1),[a,i]=y.useState(!0);return e.jsxs(d,{inline:!0,closeOnSelect:!1,w:"264",children:[e.jsxs(M,{label:"Options",divider:!0,children:[e.jsx(t,{variant:"toggle",label:"Compact mode",selected:n,onClick:()=>s(l=>!l)}),e.jsx(t,{variant:"toggle",label:"Email alerts",selected:a,onClick:()=>i(l=>!l)})]}),e.jsx(t,{label:"Open docs",href:"https://cetecerp.com",iconAfter:"arrow-square-out",target:"_blank",rel:"noreferrer"})]})},yn=()=>{const[n,s]=y.useState(""),[a,i]=y.useState(""),[l,m]=y.useState(""),[g,p]=y.useState("");return e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",closeOnSelect:!1,children:[e.jsx(t,{label:"Dashboard"}),e.jsx(u,{label:"Edit profile",children:e.jsxs(z,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Profile name",labelFor:"profile-name",children:e.jsx(f,{id:"profile-name",name:"profileName",value:n,onChange:b=>s(b.target.value)})}),e.jsx(S,{label:"Owner",labelFor:"profile-owner",children:e.jsx(f,{id:"profile-owner",name:"profileOwner",value:a,onChange:b=>i(b.target.value)})}),e.jsx(w,{variant:"primary",children:"Submit"})]})}),e.jsx(u,{label:"Create alert",children:e.jsxs(z,{p:"24",display:"grid",gap:"8",minW:"248",justifyItems:"end",children:[e.jsx(S,{label:"Topic",labelFor:"alert-topic",children:e.jsx(f,{id:"alert-topic",name:"alertTopic",value:l,onChange:b=>m(b.target.value)})}),e.jsx(S,{label:"Channel",labelFor:"alert-channel",children:e.jsx(f,{id:"alert-channel",name:"alertChannel",value:g,onChange:b=>p(b.target.value)})}),e.jsx(w,{variant:"primary",children:"Submit"})]})})]})},xn=()=>{const[n,s]=y.useState("");return e.jsxs(Q,{gap:"12",alignItems:"stretch",width:"full",maxW:"sm",children:[e.jsx(f,{name:"menu-query",iconBefore:"search",placeholder:"Filter menu items",value:n,onChange:a=>s(a.target.value)}),e.jsxs(d,{inline:!0,query:n,filterMode:"contains",highlightMatches:!0,children:[e.jsx(t,{label:"Account settings",description:"Manage profile and security"}),e.jsx(t,{label:"Notifications",description:"Email, SMS and push alerts"}),e.jsx(t,{label:"Integrations",description:"Connect external tools"}),e.jsx(t,{label:"Audit history",description:"Track critical events"})]})]})},x=n=>h(n.ownerDocument.body),vn=async n=>{const s=x(n);await c(()=>{const a=n.ownerDocument.activeElement;o(a).not.toBe(n.ownerDocument.body),o(s.getAllByRole("menu").some(i=>i.contains(a))).toBe(!0)},{timeout:4e3})},mn=n=>{const s=Array.from(n.ownerDocument.querySelectorAll('[data-ds-component="Menu"] [aria-hidden="true"] :is(button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]))')).filter(a=>!a.closest("[inert]")&&!a.hasAttribute("data-floating-ui-focus-guard")&&!a.closest("[data-floating-ui-focus-guard]"));o(s).toHaveLength(0)},j={render:()=>e.jsxs(d,{inline:!0,children:[e.jsx(t,{label:"Edit",iconBefore:"pencil"}),e.jsx(t,{label:"Duplicate",iconBefore:"copy"}),e.jsx(t,{label:"Archive",iconBefore:"trash"})]}),play:async({canvasElement:n})=>{const s=h(n);await r.tab(),o(s.getByRole("menuitem",{name:/edit/i})).toHaveFocus(),await r.keyboard("{ArrowDown}"),o(s.getByRole("menuitem",{name:/duplicate/i})).toHaveFocus(),await r.keyboard("{End}"),o(s.getByRole("menuitem",{name:/archive/i})).toHaveFocus(),await r.keyboard("{Home}"),o(s.getByRole("menuitem",{name:/edit/i})).toHaveFocus()},parameters:{controls:{disable:!0}}},F={render:()=>e.jsxs(d,{inline:!0,children:[e.jsxs(M,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Rename"}),e.jsx(t,{label:"Move"})]}),e.jsx(M,{label:"Danger Zone",children:e.jsx(t,{label:"Delete",iconBefore:"trash"})})]}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsx(gn,{}),parameters:{controls:{disable:!0}}},H={render:()=>e.jsx(wn,{}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsxs(cn,{gap:"12",alignItems:"flex-start",children:[e.jsxs(d,{inline:!0,density:"compact",children:[e.jsx(t,{label:"Compact",description:"Small row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(d,{inline:!0,density:"comfortable",children:[e.jsx(t,{label:"Comfortable",description:"Default row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]}),e.jsxs(d,{inline:!0,density:"spacious",children:[e.jsx(t,{label:"Spacious",description:"Large row spacing"}),e.jsx(t,{label:"Second row",iconBefore:"apps"}),e.jsx(t,{label:"Third row",iconBefore:"settings"})]})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(Q,{children:[e.jsxs(d,{inline:!0,closeOnSelect:!1,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsxs(M,{label:"Actions",divider:!0,children:[e.jsx(t,{label:"Edit profile",iconBefore:"pencil"}),e.jsx(t,{label:"Notifications",iconBefore:"bell"})]}),e.jsxs(u,{label:"More actions",iconBefore:"apps",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),e.jsxs(dn,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(bn,{})]}),parameters:{controls:{disable:!0}}},L={render:()=>e.jsx(hn,{}),parameters:{controls:{disable:!0}}},D={render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"hover",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]}),play:async({canvasElement:n})=>{const s=h(n),a=x(n),i=s.getByRole("button",{name:/open menu/i});await r.tab(),o(i).toHaveFocus(),await r.keyboard("{Enter}"),await c(()=>o(a.getByRole("menuitem",{name:/view profile/i})).toHaveFocus()),await r.keyboard("{ArrowDown}"),o(a.getByRole("menuitem",{name:/more actions/i})).toHaveFocus(),await r.keyboard("{ArrowRight}"),await c(()=>o(a.getByRole("menuitem",{name:/export/i})).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a.getByRole("menuitem",{name:/more actions/i})).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(i).toHaveFocus()},parameters:{controls:{disable:!0}}},En=()=>{const n=["story-topnav-menubar-sales","story-topnav-menubar-production","story-topnav-menubar-admin"],s=["sales","production","admin"],[a,i]=y.useState(null),l=p=>({open:a===p,onOpenChange:b=>{if(b){i(p);return}i(B=>B===p?null:B)}}),m=(p,b)=>{const B=s.indexOf(b),Y=s.length,Z=(B+p+Y*10)%Y,J=s[Z],k=n[Z];if(J===void 0)return;if(!(a!==null)){window.requestAnimationFrame(()=>{var E;k&&((E=document.getElementById(k))==null||E.focus())});return}window.requestAnimationFrame(()=>{var E;i(J),k&&((E=document.getElementById(k))==null||E.focus())})},g=p=>b=>{b.key!=="ArrowLeft"&&b.key!=="ArrowRight"||(b.preventDefault(),b.stopPropagation(),m(b.key==="ArrowRight"?1:-1,p))};return e.jsx(Q,{alignItems:"stretch",minW:"3xl",h:"2xl",bg:"bg.neutral",p:"24",gap:"16",children:e.jsxs(z,{role:"menubar","aria-label":"Example site sections",display:"flex",flexDirection:"row",alignItems:"center",gap:"12",borderWidth:"1",borderColor:"border",bg:"surface",px:"24",py:"16",children:[e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(w,{id:n[0],variant:"selectedBold",onKeyDown:g("sales"),children:"Sales"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>m(p,"sales"),...l("sales"),children:[e.jsxs(u,{label:"Quotes",children:[e.jsx(t,{label:"Open quotes"}),e.jsx(t,{label:"Draft quotes"})]}),e.jsxs(u,{label:"Orders",selected:!0,children:[e.jsx(t,{label:"Order list"}),e.jsxs(u,{label:"Used orders",selected:!0,children:[e.jsx(t,{label:"Order as used",selected:!0}),e.jsx(t,{label:"Bookings"}),e.jsx(t,{label:"Order commissions"})]})]}),e.jsxs(u,{label:"Invoices",children:[e.jsx(t,{label:"All invoices"}),e.jsx(t,{label:"Credit notes"})]})]}),e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(w,{id:n[1],onKeyDown:g("production"),children:"Production"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>m(p,"production"),...l("production"),children:[e.jsxs(u,{label:"Work Orders",children:[e.jsx(t,{label:"Open work orders"}),e.jsx(t,{label:"Completed"})]}),e.jsxs(u,{label:"Scheduling",children:[e.jsx(t,{label:"Production schedule"}),e.jsx(t,{href:"https://www.google.com",label:"Resource calendar",target:"_blank",rel:"noopener noreferrer"})]}),e.jsx(t,{label:"Inventory"})]}),e.jsxs(d,{triggerInteraction:"click-and-hover",trigger:e.jsx(w,{id:n[2],onKeyDown:g("admin"),children:"Admin"}),subMenuInteraction:"hover",closeOnSelect:!1,onMenubarEdgeNavigate:p=>m(p,"admin"),...l("admin"),children:[e.jsxs(u,{label:"Users",children:[e.jsx(t,{label:"All users"}),e.jsx(t,{label:"Roles & permissions"})]}),e.jsxs(u,{label:"Settings",children:[e.jsx(t,{label:"General"}),e.jsx(t,{label:"Integrations"}),e.jsx(t,{label:"Billing"})]}),e.jsx(t,{label:"Audit log",iconBefore:"list-bullets"})]})]})})},T={name:"Top nav example",render:()=>e.jsx(En,{}),parameters:{controls:{disable:!0}}},O={render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(t,{label:"Dashboard"}),e.jsxs(u,{label:"Settings",children:[e.jsx(t,{label:"Profile"}),e.jsx(t,{label:"Billing"}),e.jsxs(u,{label:"Team",children:[e.jsx(t,{label:"Members"}),e.jsx(t,{label:"Permissions"})]})]})]}),play:async({canvasElement:n})=>{const s=h(n),a=x(n),i=s.getByRole("button",{name:/open menu/i}),l=m=>a.getByRole("menuitem",{name:m});await r.tab(),o(i).toHaveFocus(),await r.keyboard("{ArrowDown}"),await vn(n),await c(()=>o(l(/dashboard/i)).toHaveFocus()),await r.keyboard("{ArrowDown}"),o(l(/settings/i)).toHaveFocus(),await r.keyboard("{Enter}"),await c(()=>o(l(/profile/i)).toHaveFocus()),mn(n),await r.keyboard("{ArrowDown}"),o(l(/billing/i)).toHaveFocus(),await r.keyboard("{ArrowLeft}"),await c(()=>o(l(/settings/i)).toHaveFocus()),await r.keyboard(" "),await c(()=>o(l(/profile/i)).toHaveFocus()),await r.keyboard("{ArrowDown}{ArrowDown}{ArrowRight}"),await c(()=>o(l(/members/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(l(/team/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(l(/settings/i)).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(i).toHaveFocus()},parameters:{controls:{disable:!0}}},v=Array.from({length:40},(n,s)=>`${s+1} - Item ${s+1}`),C={name:"Ex: Long Menu",render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open long menu"}),children:[e.jsx(u,{label:"More items",children:v.map(n=>e.jsx(t,{label:`Nested ${n}`},n))}),v.map(n=>e.jsx(t,{label:n},n))]}),play:async({canvasElement:n})=>{const s=h(n),a=h(n.ownerDocument.body);await r.click(s.getByRole("button",{name:/open long menu/i}));const i=await a.findByRole("menu"),l=n.ownerDocument.documentElement.clientHeight,m=i.getBoundingClientRect();o(m.top).toBeGreaterThanOrEqual(0),o(m.bottom).toBeLessThanOrEqual(l),o(getComputedStyle(i).overflowY).toBe("auto"),o(i.scrollHeight).toBeGreaterThan(i.clientHeight)},parameters:{controls:{disable:!0}}},N={name:"Ex: Long Drill-In Menu",render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:[e.jsx(u,{label:"Long list",children:v.map(n=>e.jsx(t,{label:`Nested ${n}`},n))}),e.jsxs(u,{label:"Short list",children:[e.jsx(t,{label:"First"}),e.jsx(t,{label:"Second"})]}),v.map(n=>e.jsx(t,{label:n},n))]}),play:async({canvasElement:n})=>{const s=h(n),a=h(n.ownerDocument.body);await r.click(s.getByRole("button",{name:/open drill-in menu/i}));const i=await a.findByRole("menu"),l=i.querySelector('[class*="menu__levelsViewport"]');o(getComputedStyle(l).overflowY).toBe("clip"),l.scrollTop=48,o(l.scrollTop).toBe(0),await r.click(a.getByRole("menuitem",{name:/long list/i}));const m=await a.findByRole("button",{name:/long list/i}),g=m.parentElement;await c(()=>o(g.scrollHeight).toBeGreaterThan(g.clientHeight)),g.scrollTop=g.scrollHeight,await c(()=>o(Math.abs(m.getBoundingClientRect().top-g.getBoundingClientRect().top)).toBeLessThanOrEqual(1)),await r.click(m),await r.click(await a.findByRole("menuitem",{name:/short list/i}));const b=(await a.findByRole("button",{name:/short list/i})).parentElement;await c(()=>{o(i.scrollHeight).toBeLessThanOrEqual(i.clientHeight+1),o(b.scrollHeight).toBeLessThanOrEqual(b.clientHeight+1)})},parameters:{controls:{disable:!0}}},q={name:"Ex: Long Drill-In Menu (focus return on back)",render:()=>e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:e.jsxs(u,{label:"Long list",children:[v.map(n=>e.jsx(t,{label:`Nested ${n}`},n)),e.jsxs(u,{label:"Deep submenu",children:[e.jsx(t,{label:"Deep first"}),e.jsx(t,{label:"Deep second"})]})]})}),play:async({canvasElement:n})=>{const s=x(n),a=i=>s.getByRole("menuitem",{name:i});await r.tab(),await r.keyboard("{ArrowDown}"),await c(()=>o(a(/long list/i)).toHaveFocus()),await r.keyboard("{Enter}"),await c(()=>o(a(/nested 1 - item 1$/i)).toHaveFocus()),await r.keyboard("{End}"),await c(()=>o(a(/deep submenu/i)).toHaveFocus()),await r.keyboard("{Enter}"),await c(()=>o(a(/deep first/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a(/deep submenu/i)).toHaveFocus()),await c(()=>{const i=s.getByRole("menu"),l=i.querySelector("[data-menu-back]"),m=a(/deep submenu/i).getBoundingClientRect();o(l).not.toBeNull(),o(m.top).toBeGreaterThanOrEqual(l.getBoundingClientRect().bottom-1),o(m.bottom).toBeLessThanOrEqual(i.getBoundingClientRect().bottom+1)})},parameters:{controls:{disable:!0}}},_={name:"Ex: Long Drill-In Menu (focus return on mouse back)",render:()=>e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",children:e.jsxs(u,{label:"Long list",children:[v.map(n=>e.jsx(t,{label:`Nested ${n}`},n)),e.jsx(u,{label:"Deep submenu",children:e.jsx(t,{label:"Deep first"})})]})}),play:async({canvasElement:n})=>{const s=h(n),a=x(n),i=m=>a.getByRole("menuitem",{name:m});await r.click(s.getByRole("button",{name:/open drill-in menu/i})),await r.click(await a.findByRole("menuitem",{name:/long list/i})),await c(()=>o(i(/nested 1 - item 1$/i)).toBeVisible()),i(/deep submenu/i).scrollIntoView({block:"nearest"}),await r.click(i(/deep submenu/i)),await c(()=>o(i(/deep first/i)).toBeVisible());const l=a.getByRole("menu").querySelector("[data-menu-back]");o(l).not.toBeNull(),await r.click(l),await c(()=>o(i(/deep submenu/i)).toHaveFocus()),await c(()=>{const m=a.getByRole("menu"),g=m.querySelector("[data-menu-back]"),p=i(/deep submenu/i).getBoundingClientRect();o(g).not.toBeNull(),o(p.top).toBeGreaterThanOrEqual(g.getBoundingClientRect().bottom-1),o(p.bottom).toBeLessThanOrEqual(m.getBoundingClientRect().bottom+1)})},parameters:{controls:{disable:!0}}},P={name:"Ex: Long Drill-In Menu (keyboard repro)",parameters:{controls:{disable:!0},docs:{description:{story:'Repro for the sticky back header covering keyboard-focused items. The play function opens the menu, drills into "Long list" and scrolls it to the bottom, then leaves it open. Press Home, or ArrowUp repeatedly, and check whether the focused item scrolls underneath the pinned back header.'}}},render:()=>e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",children:e.jsx(u,{label:"Long list",children:v.map(n=>e.jsx(t,{label:`Nested ${n}`},n))})}),play:async({canvasElement:n})=>{const s=h(n),a=h(n.ownerDocument.body);await r.click(s.getByRole("button",{name:/open drill-in menu/i})),await r.click(await a.findByRole("menuitem",{name:/long list/i}));const l=(await a.findByRole("button",{name:/long list/i})).parentElement;await c(()=>o(l.scrollHeight).toBeGreaterThan(l.clientHeight)),l.scrollTop=l.scrollHeight}},fn=({query:n})=>{const[s,a]=y.useState(n??"");return y.useEffect(()=>{a(n??"")},[n]),e.jsxs(Q,{gap:"12",children:[e.jsxs(cn,{gap:"8",children:[e.jsx(w,{onClick:()=>a("zzz"),children:"Filter: no match"}),e.jsx(w,{onClick:()=>a(""),children:"Clear filter"})]}),e.jsx(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open drill-in menu"}),subMenuInteraction:"digin",density:"spacious",query:s,filterMode:"contains",children:e.jsx(u,{label:"Long list",children:v.map(i=>e.jsx(t,{label:`Nested ${i}`},i))})})]})},V={name:"Ex: Long Drill-In Menu (filtered)",args:{query:""},argTypes:{query:{control:"text"}},parameters:{docs:{description:{story:"A filter with no matches unmounts the drill-in level and its back header. After the filter is cleared, keyboard scrolling must still reserve the header height. Use the Controls panel (`query`) to filter: clicking buttons on the canvas closes the floating menu."}}},render:n=>e.jsx(fn,{query:n.query}),play:async({canvasElement:n})=>{const s=h(n),a=h(n.ownerDocument.body),i=()=>{const m=n.ownerDocument.querySelectorAll('[class*="menu__level"]:not([aria-hidden])'),g=m[m.length-1];return{variable:g.style.getPropertyValue("--menu-back-header-height"),padding:getComputedStyle(g).scrollPaddingTop}};await r.click(s.getByRole("button",{name:/open drill-in menu/i})),await r.click(await a.findByRole("menuitem",{name:/long list/i})),await a.findByRole("button",{name:/long list/i}),await c(()=>o(i().variable).not.toBe(""));const l=i().variable;s.getByRole("button",{name:/filter: no match/i}).click(),await a.findByText(/no results found/i),s.getByRole("button",{name:/clear filter/i}).click(),await a.findByRole("button",{name:/long list/i}),await c(()=>{o(i().variable).toBe(l),o(i().padding).toBe(l)})}},G={name:"Sub menu digin (duplicate labels, nested flyout)",render:()=>e.jsxs(d,{trigger:e.jsx(w,{iconAfter:"caret-down",children:"Open menu"}),subMenuInteraction:"digin",children:[e.jsx(u,{label:"Settings",children:e.jsx(t,{label:"First child"})}),e.jsxs(u,{label:"Settings",children:[e.jsx(t,{label:"Second child"}),e.jsx(u,{label:"Flyout",interaction:"hover",children:e.jsx(t,{label:"Flyout item"})})]})]}),play:async({canvasElement:n})=>{const s=h(n),a=x(n),i=l=>a.getByRole("menuitem",{name:l});await r.tab(),await r.keyboard("{ArrowDown}"),await c(()=>o(a.getAllByRole("menuitem",{name:/settings/i})[0]).toHaveFocus()),await r.keyboard("{ArrowDown}{Enter}"),await c(()=>o(i(/second child/i)).toHaveFocus()),o(a.queryByText("First child")).toBeNull(),await r.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>o(i(/flyout item/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(i(/^flyout$/i)).toHaveFocus()),o(a.getByRole("menuitem",{name:/second child/i})).toBeVisible(),o(s.getByRole("button",{name:/open menu/i})).toBeTruthy()},parameters:{controls:{disable:!0}}},W={render:()=>e.jsx(yn,{}),play:async({canvasElement:n})=>{const s=h(n),a=x(n),i=s.getByRole("button",{name:/open menu/i});await r.tab(),await r.keyboard("{ArrowDown}"),await c(()=>o(a.getByRole("menuitem",{name:/dashboard/i})).toHaveFocus()),await r.keyboard("{ArrowDown}{Enter}");const l=await a.findByLabelText("Profile name");await c(()=>o(l).toHaveFocus()),await r.keyboard("abc{ArrowLeft}"),o(l).toHaveFocus(),o(l).toHaveValue("abc"),l.dispatchEvent(new CompositionEvent("compositionstart",{bubbles:!0})),await r.keyboard("{Escape}"),o(l).toBeInTheDocument(),o(l).toHaveFocus(),l.dispatchEvent(new CompositionEvent("compositionend",{bubbles:!0})),await new Promise(m=>setTimeout(m,50)),await r.keyboard("{Escape}"),await c(()=>o(a.getByRole("menuitem",{name:/edit profile/i})).toHaveFocus()),await r.keyboard("{Escape}"),await c(()=>o(a.queryByRole("menu")).toBeNull()),o(i).toHaveFocus()},parameters:{controls:{disable:!0}}},$={render:()=>e.jsx(xn,{}),parameters:{controls:{disable:!0}}},U={name:"Panel as sidebar",render:()=>e.jsx(un,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(d,{subMenuInteraction:"hover",panel:!0,maxW:"264",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),play:async({canvasElement:n})=>{const s=x(n),a=i=>s.getByRole("menuitem",{name:i});await r.tab(),o(a(/view profile/i)).toHaveFocus(),await r.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>o(a(/export/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}},K={name:"Panel as mobile nav",render:()=>e.jsx(un,{minW:"3xl",h:"lg",bg:"bg.neutral",overflow:"hidden",boxShadow:"overlay",children:e.jsxs(d,{subMenuInteraction:"digin",panel:!0,maxW:"264",w:"full",density:"comfortable",children:[e.jsx(t,{label:"View profile"}),e.jsxs(u,{label:"More actions",minW:"180",children:[e.jsx(t,{label:"Export"}),e.jsx(t,{label:"Share"}),e.jsxs(u,{label:"Advanced",minW:"180",children:[e.jsx(t,{label:"Audit log"}),e.jsx(t,{label:"Settings"})]})]})]})}),play:async({canvasElement:n})=>{var i;const s=x(n),a=l=>s.getByRole("menuitem",{name:l});await r.tab(),o(a(/view profile/i)).toHaveFocus(),await r.keyboard("{ArrowDown}{Enter}"),await c(()=>o(a(/export/i)).toHaveFocus()),mn(n),(i=document.activeElement)==null||i.blur(),await r.keyboard("{Escape}"),o(a(/export/i)).toBeVisible(),a(/export/i).focus(),await r.keyboard("{ArrowDown}{ArrowDown}{Enter}"),await c(()=>o(a(/audit log/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a(/advanced/i)).toHaveFocus()),await r.keyboard("{ArrowLeft}"),await c(()=>o(a(/more actions/i)).toHaveFocus())},parameters:{controls:{disable:!0}}},Un=["Actions","ActionsWithSections","SingleSelect","MultiSelect","Density","ConditionalBreakpoints","ToggleOptions","SubMenuHover","TopNavExample","SubMenuDigin","ExLongMenu","ExLongDiginMenu","ExLongDiginMenuFocusReturn","ExLongDiginMenuMouseBack","ExLongDiginMenuKeyboard","ExLongDiginMenuFiltered","SubMenuDiginEdgeCases","SubMenuDiginForms","AutocompleteFiltering","PanelAsSidebar","PanelAsMobileNav"];var X,ee,ne;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,oe;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,ie,se;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,ce,ue;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,de,be;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(de=R.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var pe,ge,we;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(we=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var he,ye,xe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <ToggleOptionsExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(xe=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var ve,Ee,fe;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:fe.source}}};var Me,Be,ke;T.parameters={...T.parameters,docs:{...(Me=T.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ke=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var Se,je,Fe;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Fe=(je=O.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Ae,He,Re;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Re=(He=C.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Ie,Le,De;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(De=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Te,Oe,Ce;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ce=(Oe=q.parameters)==null?void 0:Oe.docs)==null?void 0:Ce.source}}};var Ne,qe,_e;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(_e=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Pe,Ve,Ge;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ge=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var We,$e,Ue;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};var Ke,Qe,ze;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(ze=(Qe=G.parameters)==null?void 0:Qe.docs)==null?void 0:ze.source}}};var Ye,Ze,Je;W.parameters={...W.parameters,docs:{...(Ye=W.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Xe,en,nn;$.parameters={...$.parameters,docs:{...(Xe=$.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <AutocompleteFilteringExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(nn=(en=$.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,an,on;U.parameters={...U.parameters,docs:{...(tn=U.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(on=(an=U.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,sn,ln;K.parameters={...K.parameters,docs:{...(rn=K.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(ln=(sn=K.parameters)==null?void 0:sn.docs)==null?void 0:ln.source}}};export{j as Actions,F as ActionsWithSections,$ as AutocompleteFiltering,I as ConditionalBreakpoints,R as Density,N as ExLongDiginMenu,V as ExLongDiginMenuFiltered,q as ExLongDiginMenuFocusReturn,P as ExLongDiginMenuKeyboard,_ as ExLongDiginMenuMouseBack,C as ExLongMenu,H as MultiSelect,K as PanelAsMobileNav,U as PanelAsSidebar,A as SingleSelect,O as SubMenuDigin,G as SubMenuDiginEdgeCases,W as SubMenuDiginForms,D as SubMenuHover,L as ToggleOptions,T as TopNavExample,Un as __namedExportsOrder,$n as default};
