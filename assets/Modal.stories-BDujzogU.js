import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as d,a as fo,R as Et}from"./index-BCtMShv3.js";import{m as ht,e as gt,d as xt,f as po,b as mo,g as ho,s as Ne,a as Re,B as ue,G as go,V as Ht,F as Go}from"./Box-Do4kfhe3.js";import{r as xo}from"./index-B1k-hWqK.js";import{I as Jo}from"./IconButton-BkBvjvrq.js";import{H as Qo}from"./Heading-BVhrmgc2.js";import{B as j}from"./Button-C0sIXEyB.js";import{T as R}from"./Text--rQhgAhG.js";import{T as Zo}from"./Tooltip-CJtDXb7b.js";import{I as zt}from"./Icon-DZeLJqXX.js";import{D as bo}from"./Divider-0-CNNm0O.js";import"./index-D-fs5e6L.js";import"./Spinner-gDUrdfRc.js";const It=gt("textarea",{size:"md"},[]),vo={size:["sm","md","lg","xl"],autoSize:["true"]},Qt=Object.keys(vo),er=Object.assign(ht(It.recipeFn),{__recipe__:!0,__name__:"textarea",__getCompoundVariantCss__:It.__getCompoundVariantCss__,raw:e=>e,variantKeys:Qt,variantMap:vo,merge(e){return po(this,e)},splitVariantProps(e){return xt(e,Qt)},getVariantProps:It.getVariantProps}),Mt=gt("textinput",{size:"md"},[]),yo={size:["md","sm","lg","xl"],autoSize:["true"]},Zt=Object.keys(yo),tr=Object.assign(ht(Mt.recipeFn),{__recipe__:!0,__name__:"textinput",__getCompoundVariantCss__:Mt.__getCompoundVariantCss__,raw:e=>e,variantKeys:Zt,variantMap:yo,merge(e){return po(this,e)},splitVariantProps(e){return xt(e,Zt)},getVariantProps:Mt.getVariantProps}),Co={layout:"default"},nr=[],or=[["formFieldContainer","formfield__formFieldContainer"],["contentWrapper","formfield__contentWrapper"],["labelWrapper","formfield__labelWrapper"],["headLabel","formfield__headLabel"]],rr=or.map(([e,t])=>[e,gt(t,Co,ho(nr,e))]),sr=ht((e={})=>Object.fromEntries(rr.map(([t,n])=>[t,n.recipeFn(e)]))),en=["layout"],ir=e=>({...Co,...mo(e)}),ar=Object.assign(sr,{__recipe__:!1,__name__:"formField",raw:e=>e,classNameMap:{},variantKeys:en,variantMap:{layout:["default","inline"]},splitVariantProps(e){return xt(e,en)},getVariantProps:ir}),wo={size:"md"},lr=[],cr=[["overlay","modal__overlay"],["container","modal__container"],["header","modal__header"],["title","modal__title"],["closeButton","modal__closeButton"],["body","modal__body"],["footer","modal__footer"]],ur=cr.map(([e,t])=>[e,gt(t,wo,ho(lr,e))]),dr=ht((e={})=>Object.fromEntries(ur.map(([t,n])=>[t,n.recipeFn(e)]))),tn=["size"],fr=e=>({...wo,...mo(e)}),bt=Object.assign(dr,{__recipe__:!1,__name__:"modal",raw:e=>e,classNameMap:{},variantKeys:tn,variantMap:{size:["sm","md","lg","xl","full","mobile"]},splitVariantProps(e){return xt(e,tn)},getVariantProps:fr});function vt(){return typeof window<"u"}function Oe(e){return $t(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function xe(e){var t;return(t=($t(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function $t(e){return vt()?e instanceof Node||e instanceof Q(e).Node:!1}function L(e){return vt()?e instanceof Element||e instanceof Q(e).Element:!1}function $(e){return vt()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function _t(e){return!vt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}const pr=new Set(["inline","contents"]);function qe(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=oe(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!pr.has(r)}const mr=new Set(["table","td","th"]);function hr(e){return mr.has(Oe(e))}const gr=[":popover-open",":modal"];function yt(e){return gr.some(t=>{try{return e.matches(t)}catch{return!1}})}const xr=["transform","translate","scale","rotate","perspective"],br=["transform","translate","scale","rotate","perspective","filter"],vr=["paint","layout","strict","content"];function Kt(e){const t=Ct(),n=L(e)?oe(e):e;return xr.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||br.some(o=>(n.willChange||"").includes(o))||vr.some(o=>(n.contain||"").includes(o))}function yr(e){let t=ge(e);for(;$(t)&&!he(t);){if(Kt(t))return t;if(yt(t))return null;t=ge(t)}return null}function Ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Cr=new Set(["html","body","#document"]);function he(e){return Cr.has(Oe(e))}function oe(e){return Q(e).getComputedStyle(e)}function wt(e){return L(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ge(e){if(Oe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||_t(e)&&e.host||xe(e);return _t(t)?t.host:t}function To(e){const t=ge(e);return he(t)?e.ownerDocument?e.ownerDocument.body:e.body:$(t)&&qe(t)?t:To(t)}function je(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=To(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),a=Q(r);if(i){const l=At(a);return t.concat(a,a.visualViewport||[],qe(r)?r:[],l&&n?je(l):[])}return t.concat(r,je(r,[],n))}function At(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}const nn=Math.min,Pe=Math.max,at=Math.round,de=e=>({x:e,y:e});function wr(e,t){return typeof e=="function"?e(t):e}function Oo(e){return e.split("-")[0]}function Tr(e){return e.split("-")[1]}function Or(e){return e==="x"?"y":"x"}function Sr(e){return e==="y"?"height":"width"}const Rr=new Set(["top","bottom"]);function So(e){return Rr.has(Oo(e))?"y":"x"}function Er(e){return Or(So(e))}function Ir(e){return{top:0,right:0,bottom:0,left:0,...e}}function Mr(e){return typeof e!="number"?Ir(e):{top:e,right:e,bottom:e,left:e}}function lt(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var jr=["input:not([inert]):not([inert] *)","select:not([inert]):not([inert] *)","textarea:not([inert]):not([inert] *)","a[href]:not([inert]):not([inert] *)","button:not([inert]):not([inert] *)","[tabindex]:not(slot):not([inert]):not([inert] *)","audio[controls]:not([inert]):not([inert] *)","video[controls]:not([inert]):not([inert] *)",'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',"details>summary:first-of-type:not([inert]):not([inert] *)","details:not([inert]):not([inert] *)"],ct=jr.join(","),Ro=typeof Element>"u",De=Ro?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ut=!Ro&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},dt=function(t,n){var o;n===void 0&&(n=!0);var r=t==null||(o=t.getAttribute)===null||o===void 0?void 0:o.call(t,"inert"),i=r===""||r==="true",a=i||n&&t&&(typeof t.closest=="function"?t.closest("[inert]"):dt(t.parentNode));return a},Fr=function(t){var n,o=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return o===""||o==="true"},Eo=function(t,n,o){if(dt(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(ct));return n&&De.call(t,ct)&&r.unshift(t),r=r.filter(o),r},ft=function(t,n,o){for(var r=[],i=Array.from(t);i.length;){var a=i.shift();if(!dt(a,!1))if(a.tagName==="SLOT"){var l=a.assignedElements(),u=l.length?l:a.children,c=ft(u,!0,o);o.flatten?r.push.apply(r,c):r.push({scopeParent:a,candidates:c})}else{var f=De.call(a,ct);f&&o.filter(a)&&(n||!t.includes(a))&&r.push(a);var m=a.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(a),y=!dt(m,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(a));if(m&&y){var p=ft(m===!0?a.children:m.children,!0,o);o.flatten?r.push.apply(r,p):r.push({scopeParent:a,candidates:p})}else i.unshift.apply(i,a.children)}}return r},Io=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},Mo=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Fr(t))&&!Io(t)?0:t.tabIndex},kr=function(t,n){var o=Mo(t);return o<0&&n&&!Io(t)?0:o},Br=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},jo=function(t){return t.tagName==="INPUT"},Dr=function(t){return jo(t)&&t.type==="hidden"},Nr=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(o){return o.tagName==="SUMMARY"});return n},Pr=function(t,n){for(var o=0;o<t.length;o++)if(t[o].checked&&t[o].form===n)return t[o]},_r=function(t){if(!t.name)return!0;var n=t.form||ut(t),o=function(l){return n.querySelectorAll('input[type="radio"][name="'+l+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=o(window.CSS.escape(t.name));else try{r=o(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=Pr(r,t.form);return!i||i===t},Ar=function(t){return jo(t)&&t.type==="radio"},Lr=function(t){return Ar(t)&&!_r(t)},qr=function(t){var n,o=t&&ut(t),r=(n=o)===null||n===void 0?void 0:n.host,i=!1;if(o&&o!==t){var a,l,u;for(i=!!((a=r)!==null&&a!==void 0&&(l=a.ownerDocument)!==null&&l!==void 0&&l.contains(r)||t!=null&&(u=t.ownerDocument)!==null&&u!==void 0&&u.contains(t));!i&&r;){var c,f,m;o=ut(r),r=(c=o)===null||c===void 0?void 0:c.host,i=!!((f=r)!==null&&f!==void 0&&(m=f.ownerDocument)!==null&&m!==void 0&&m.contains(r))}}return i},on=function(t){var n=t.getBoundingClientRect(),o=n.width,r=n.height;return o===0&&r===0},Vr=function(t,n){var o=n.displayCheck,r=n.getShadowRoot;if(o==="full-native"&&"checkVisibility"in t){var i=t.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!i}if(getComputedStyle(t).visibility==="hidden")return!0;var a=De.call(t,"details>summary:first-of-type"),l=a?t.parentElement:t;if(De.call(l,"details:not([open]) *"))return!0;if(!o||o==="full"||o==="full-native"||o==="legacy-full"){if(typeof r=="function"){for(var u=t;t;){var c=t.parentElement,f=ut(t);if(c&&!c.shadowRoot&&r(c)===!0)return on(t);t.assignedSlot?t=t.assignedSlot:!c&&f!==t.ownerDocument?t=f.host:t=c}t=u}if(qr(t))return!t.getClientRects().length;if(o!=="legacy-full")return!0}else if(o==="non-zero-area")return on(t);return!1},Wr=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var o=0;o<n.children.length;o++){var r=n.children.item(o);if(r.tagName==="LEGEND")return De.call(n,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}n=n.parentElement}return!1},Lt=function(t,n){return!(n.disabled||Dr(n)||Vr(n,t)||Nr(n)||Wr(n))},qt=function(t,n){return!(Lr(n)||Mo(n)<0||!Lt(t,n))},Hr=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Fo=function(t){var n=[],o=[];return t.forEach(function(r,i){var a=!!r.scopeParent,l=a?r.scopeParent:r,u=kr(l,a),c=a?Fo(r.candidates):l;u===0?a?n.push.apply(n,c):n.push(l):o.push({documentOrder:i,tabIndex:u,item:r,isScope:a,content:c})}),o.sort(Br).reduce(function(r,i){return i.isScope?r.push.apply(r,i.content):r.push(i.content),r},[]).concat(n)},Tt=function(t,n){n=n||{};var o;return n.getShadowRoot?o=ft([t],n.includeContainer,{filter:qt.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:Hr}):o=Eo(t,n.includeContainer,qt.bind(null,n)),Fo(o)},zr=function(t,n){n=n||{};var o;return n.getShadowRoot?o=ft([t],n.includeContainer,{filter:Lt.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):o=Eo(t,n.includeContainer,Lt.bind(null,n)),o},ko=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return De.call(t,ct)===!1?!1:qt(n,t)};function Bo(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Do(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:o}=t;return n+"/"+o}).join(" "):navigator.userAgent}function $r(){return/apple/i.test(navigator.vendor)}function Vt(){const e=/android/i;return e.test(Bo())||e.test(Do())}function Kr(){return Do().includes("jsdom/")}const rn="data-floating-ui-focusable",Xr="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Me(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function G(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&_t(n)){let o=t;for(;o;){if(e===o)return!0;o=o.parentNode||o.host}}return!1}function we(e){return"composedPath"in e?e.composedPath()[0]:e.target}function jt(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function Yr(e){return e.matches("html,body")}function ae(e){return(e==null?void 0:e.ownerDocument)||document}function Ur(e){return $(e)&&e.matches(Xr)}function sn(e){return e?e.getAttribute("role")==="combobox"&&Ur(e):!1}function an(e){return e?e.hasAttribute(rn)?e:e.querySelector("["+rn+"]")||e:null}function Fe(e,t,n){return n===void 0&&(n=!0),e.filter(r=>{var i;return r.parentId===t&&(!n||((i=r.context)==null?void 0:i.open))}).flatMap(r=>[r,...Fe(e,r.id,n)])}function ln(e,t){var n;let o=[],r=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;r;){const i=e.find(a=>a.id===r);r=i==null?void 0:i.parentId,i&&(o=o.concat(i))}return o}function Ft(e){e.preventDefault(),e.stopPropagation()}function Gr(e){return"nativeEvent"in e}function Jr(e){return e.mozInputSource===0&&e.isTrusted?!0:Vt()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Qr(e){return Kr()?!1:!Vt()&&e.width===0&&e.height===0||Vt()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}var Zr=typeof document<"u",es=function(){},J=Zr?d.useLayoutEffect:es;const ts={...fo};function kt(e){const t=d.useRef(e);return J(()=>{t.current=e}),t}const ns=ts.useInsertionEffect,os=ns||(e=>e());function ce(e){const t=d.useRef(()=>{});return os(()=>{t.current=e}),d.useCallback(function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}const Ve=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function No(e,t){const n=Tt(e,Ve()),o=n.length;if(o===0)return;const r=Me(ae(e)),i=n.indexOf(r),a=i===-1?t===1?0:o-1:i+t;return n[a]}function Po(e){return No(ae(e).body,1)||e}function _o(e){return No(ae(e).body,-1)||e}function _e(e,t){const n=t||e.currentTarget,o=e.relatedTarget;return!o||!G(n,o)}function rs(e){Tt(e,Ve()).forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")})}function cn(e){e.querySelectorAll("[data-tabindex]").forEach(n=>{const o=n.dataset.tabindex;delete n.dataset.tabindex,o?n.setAttribute("tabindex",o):n.removeAttribute("tabindex")})}function un(e,t,n){let{reference:o,floating:r}=e;const i=So(t),a=Er(t),l=Sr(a),u=Oo(t),c=i==="y",f=o.x+o.width/2-r.width/2,m=o.y+o.height/2-r.height/2,y=o[l]/2-r[l]/2;let p;switch(u){case"top":p={x:f,y:o.y-r.height};break;case"bottom":p={x:f,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:m};break;case"left":p={x:o.x-r.width,y:m};break;default:p={x:o.x,y:o.y}}switch(Tr(t)){case"start":p[a]-=y*(n&&c?-1:1);break;case"end":p[a]+=y*(n&&c?-1:1);break}return p}async function ss(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:a,elements:l,strategy:u}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:y=!1,padding:p=0}=wr(t,e),x=Mr(p),C=l[y?m==="floating"?"reference":"floating":m],w=lt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(C)))==null||n?C:C.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:f,strategy:u})),b=m==="floating"?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,g=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),S=await(i.isElement==null?void 0:i.isElement(g))?await(i.getScale==null?void 0:i.getScale(g))||{x:1,y:1}:{x:1,y:1},B=lt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:g,strategy:u}):b);return{top:(w.top-B.top+x.top)/S.y,bottom:(B.bottom-w.bottom+x.bottom)/S.y,left:(w.left-B.left+x.left)/S.x,right:(B.right-w.right+x.right)/S.x}}const is=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:m}=un(c,o,u),y=o,p={},x=0;for(let C=0;C<l.length;C++){var h;const{name:w,fn:b}=l[C],{x:g,y:S,data:B,reset:D}=await b({x:f,y:m,initialPlacement:o,placement:y,strategy:r,middlewareData:p,rects:c,platform:{...a,detectOverflow:(h=a.detectOverflow)!=null?h:ss},elements:{reference:e,floating:t}});f=g??f,m=S??m,p={...p,[w]:{...p[w],...B}},D&&x<=50&&(x++,typeof D=="object"&&(D.placement&&(y=D.placement),D.rects&&(c=D.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):D.rects),{x:f,y:m}=un(c,y,u)),C=-1)}return{x:f,y:m,placement:y,strategy:r,middlewareData:p}};function Ao(e){const t=oe(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=$(e),i=r?e.offsetWidth:n,a=r?e.offsetHeight:o,l=at(n)!==i||at(o)!==a;return l&&(n=i,o=a),{width:n,height:o,$:l}}function Lo(e){return L(e)?e:e.contextElement}function ke(e){const t=Lo(e);if(!$(t))return de(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=Ao(t);let a=(i?at(n.width):n.width)/o,l=(i?at(n.height):n.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const as=de(0);function qo(e){const t=Q(e);return!Ct()||!t.visualViewport?as:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ls(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Q(e)?!1:t}function Ae(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=Lo(e);let a=de(1);t&&(o?L(o)&&(a=ke(o)):a=ke(e));const l=ls(i,n,o)?qo(i):de(0);let u=(r.left+l.x)/a.x,c=(r.top+l.y)/a.y,f=r.width/a.x,m=r.height/a.y;if(i){const y=Q(i),p=o&&L(o)?Q(o):o;let x=y,h=At(x);for(;h&&o&&p!==x;){const C=ke(h),w=h.getBoundingClientRect(),b=oe(h),g=w.left+(h.clientLeft+parseFloat(b.paddingLeft))*C.x,S=w.top+(h.clientTop+parseFloat(b.paddingTop))*C.y;u*=C.x,c*=C.y,f*=C.x,m*=C.y,u+=g,c+=S,x=Q(h),h=At(x)}}return lt({width:f,height:m,x:u,y:c})}function Ot(e,t){const n=wt(e).scrollLeft;return t?t.left+n:Ae(xe(e)).left+n}function Vo(e,t){const n=e.getBoundingClientRect(),o=n.left+t.scrollLeft-Ot(e,n),r=n.top+t.scrollTop;return{x:o,y:r}}function cs(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",a=xe(o),l=t?yt(t.floating):!1;if(o===a||l&&i)return n;let u={scrollLeft:0,scrollTop:0},c=de(1);const f=de(0),m=$(o);if((m||!m&&!i)&&((Oe(o)!=="body"||qe(a))&&(u=wt(o)),$(o))){const p=Ae(o);c=ke(o),f.x=p.x+o.clientLeft,f.y=p.y+o.clientTop}const y=a&&!m&&!i?Vo(a,u):de(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+f.x+y.x,y:n.y*c.y-u.scrollTop*c.y+f.y+y.y}}function us(e){return Array.from(e.getClientRects())}function ds(e){const t=xe(e),n=wt(e),o=e.ownerDocument.body,r=Pe(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=Pe(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-n.scrollLeft+Ot(e);const l=-n.scrollTop;return oe(o).direction==="rtl"&&(a+=Pe(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:a,y:l}}const dn=25;function fs(e,t){const n=Q(e),o=xe(e),r=n.visualViewport;let i=o.clientWidth,a=o.clientHeight,l=0,u=0;if(r){i=r.width,a=r.height;const f=Ct();(!f||f&&t==="fixed")&&(l=r.offsetLeft,u=r.offsetTop)}const c=Ot(o);if(c<=0){const f=o.ownerDocument,m=f.body,y=getComputedStyle(m),p=f.compatMode==="CSS1Compat"&&parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0,x=Math.abs(o.clientWidth-m.clientWidth-p);x<=dn&&(i-=x)}else c<=dn&&(i+=c);return{width:i,height:a,x:l,y:u}}const ps=new Set(["absolute","fixed"]);function ms(e,t){const n=Ae(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=$(e)?ke(e):de(1),a=e.clientWidth*i.x,l=e.clientHeight*i.y,u=r*i.x,c=o*i.y;return{width:a,height:l,x:u,y:c}}function fn(e,t,n){let o;if(t==="viewport")o=fs(e,n);else if(t==="document")o=ds(xe(e));else if(L(t))o=ms(t,n);else{const r=qo(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return lt(o)}function Wo(e,t){const n=ge(e);return n===t||!L(n)||he(n)?!1:oe(n).position==="fixed"||Wo(n,t)}function hs(e,t){const n=t.get(e);if(n)return n;let o=je(e,[],!1).filter(l=>L(l)&&Oe(l)!=="body"),r=null;const i=oe(e).position==="fixed";let a=i?ge(e):e;for(;L(a)&&!he(a);){const l=oe(a),u=Kt(a);!u&&l.position==="fixed"&&(r=null),(i?!u&&!r:!u&&l.position==="static"&&!!r&&ps.has(r.position)||qe(a)&&!u&&Wo(e,a))?o=o.filter(f=>f!==a):r=l,a=ge(a)}return t.set(e,o),o}function gs(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const a=[...n==="clippingAncestors"?yt(t)?[]:hs(t,this._c):[].concat(n),o],l=a[0],u=a.reduce((c,f)=>{const m=fn(t,f,r);return c.top=Pe(m.top,c.top),c.right=nn(m.right,c.right),c.bottom=nn(m.bottom,c.bottom),c.left=Pe(m.left,c.left),c},fn(t,l,r));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function xs(e){const{width:t,height:n}=Ao(e);return{width:t,height:n}}function bs(e,t,n){const o=$(t),r=xe(t),i=n==="fixed",a=Ae(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const u=de(0);function c(){u.x=Ot(r)}if(o||!o&&!i)if((Oe(t)!=="body"||qe(r))&&(l=wt(t)),o){const p=Ae(t,!0,i,t);u.x=p.x+t.clientLeft,u.y=p.y+t.clientTop}else r&&c();i&&!o&&r&&c();const f=r&&!o&&!i?Vo(r,l):de(0),m=a.left+l.scrollLeft-u.x-f.x,y=a.top+l.scrollTop-u.y-f.y;return{x:m,y,width:a.width,height:a.height}}function Bt(e){return oe(e).position==="static"}function pn(e,t){if(!$(e)||oe(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return xe(e)===n&&(n=n.ownerDocument.body),n}function Ho(e,t){const n=Q(e);if(yt(e))return n;if(!$(e)){let r=ge(e);for(;r&&!he(r);){if(L(r)&&!Bt(r))return r;r=ge(r)}return n}let o=pn(e,t);for(;o&&hr(o)&&Bt(o);)o=pn(o,t);return o&&he(o)&&Bt(o)&&!Kt(o)?n:o||yr(e)||n}const vs=async function(e){const t=this.getOffsetParent||Ho,n=this.getDimensions,o=await n(e.floating);return{reference:bs(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ys(e){return oe(e).direction==="rtl"}const Cs={convertOffsetParentRelativeRectToViewportRelativeRect:cs,getDocumentElement:xe,getClippingRect:gs,getOffsetParent:Ho,getElementRects:vs,getClientRects:us,getDimensions:xs,getScale:ke,isElement:L,isRTL:ys},ws=(e,t,n)=>{const o=new Map,r={platform:Cs,...n},i={...r.platform,_c:o};return is(e,t,{...r,platform:i})};var Ts=typeof document<"u",Os=function(){},st=Ts?d.useLayoutEffect:Os;function pt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!pt(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!pt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function zo(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function mn(e,t){const n=zo(e);return Math.round(t*n)/n}function Dt(e){const t=d.useRef(e);return st(()=>{t.current=e}),t}function Ss(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:a}={},transform:l=!0,whileElementsMounted:u,open:c}=e,[f,m]=d.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[y,p]=d.useState(o);pt(y,o)||p(o);const[x,h]=d.useState(null),[C,w]=d.useState(null),b=d.useCallback(v=>{v!==D.current&&(D.current=v,h(v))},[]),g=d.useCallback(v=>{v!==q.current&&(q.current=v,w(v))},[]),S=i||x,B=a||C,D=d.useRef(null),q=d.useRef(null),K=d.useRef(f),fe=u!=null,ee=Dt(u),H=Dt(r),be=Dt(c),X=d.useCallback(()=>{if(!D.current||!q.current)return;const v={placement:t,strategy:n,middleware:y};H.current&&(v.platform=H.current),ws(D.current,q.current,v).then(P=>{const _={...P,isPositioned:be.current!==!1};O.current&&!pt(K.current,_)&&(K.current=_,xo.flushSync(()=>{m(_)}))})},[y,t,n,H,be]);st(()=>{c===!1&&K.current.isPositioned&&(K.current.isPositioned=!1,m(v=>({...v,isPositioned:!1})))},[c]);const O=d.useRef(!1);st(()=>(O.current=!0,()=>{O.current=!1}),[]),st(()=>{if(S&&(D.current=S),B&&(q.current=B),S&&B){if(ee.current)return ee.current(S,B,X);X()}},[S,B,X,ee,fe]);const T=d.useMemo(()=>({reference:D,floating:q,setReference:b,setFloating:g}),[b,g]),N=d.useMemo(()=>({reference:S,floating:B}),[S,B]),W=d.useMemo(()=>{const v={position:n,left:0,top:0};if(!N.floating)return v;const P=mn(N.floating,f.x),_=mn(N.floating,f.y);return l?{...v,transform:"translate("+P+"px, "+_+"px)",...zo(N.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:P,top:_}},[n,l,N.floating,f.x,f.y]);return d.useMemo(()=>({...f,update:X,refs:T,elements:N,floatingStyles:W}),[f,X,T,N,W])}const Rs="data-floating-ui-focusable",hn="active",gn="selected",Es={...fo};let xn=!1,Is=0;const bn=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Is++;function Ms(){const[e,t]=d.useState(()=>xn?bn():void 0);return J(()=>{e==null&&t(bn())},[]),d.useEffect(()=>{xn=!0},[]),e}const js=Es.useId,$o=js||Ms;function Fs(){const e=new Map;return{emit(t,n){var o;(o=e.get(t))==null||o.forEach(r=>r(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){var o;(o=e.get(t))==null||o.delete(n)}}}const ks=d.createContext(null),Bs=d.createContext(null),Ds=()=>{var e;return((e=d.useContext(ks))==null?void 0:e.id)||null},Xt=()=>d.useContext(Bs);function Le(e){return"data-floating-ui-"+e}function Ns(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}let vn=0;function Ie(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:o=!0,sync:r=!1}=t;o&&cancelAnimationFrame(vn);const i=()=>e==null?void 0:e.focus({preventScroll:n});r?i():vn=requestAnimationFrame(i)}function Ps(e){return(e==null?void 0:e.ownerDocument)||document}const Be={inert:new WeakMap,"aria-hidden":new WeakMap,none:new WeakMap};function yn(e){return e==="inert"?Be.inert:e==="aria-hidden"?Be["aria-hidden"]:Be.none}let ze=new WeakSet,$e={},Nt=0;const _s=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Ko=e=>e&&(e.host||Ko(e.parentNode)),As=(e,t)=>t.map(n=>{if(e.contains(n))return n;const o=Ko(n);return e.contains(o)?o:null}).filter(n=>n!=null);function Ls(e,t,n,o){const r="data-floating-ui-inert",i=o?"inert":n?"aria-hidden":null,a=As(t,e),l=new Set,u=new Set(a),c=[];$e[r]||($e[r]=new WeakMap);const f=$e[r];a.forEach(m),y(t),l.clear();function m(p){!p||l.has(p)||(l.add(p),p.parentNode&&m(p.parentNode))}function y(p){!p||u.has(p)||[].forEach.call(p.children,x=>{if(Oe(x)!=="script")if(l.has(x))y(x);else{const h=i?x.getAttribute(i):null,C=h!==null&&h!=="false",w=yn(i),b=(w.get(x)||0)+1,g=(f.get(x)||0)+1;w.set(x,b),f.set(x,g),c.push(x),b===1&&C&&ze.add(x),g===1&&x.setAttribute(r,""),!C&&i&&x.setAttribute(i,i==="inert"?"":"true")}})}return Nt++,()=>{c.forEach(p=>{const x=yn(i),C=(x.get(p)||0)-1,w=(f.get(p)||0)-1;x.set(p,C),f.set(p,w),C||(!ze.has(p)&&i&&p.removeAttribute(i),ze.delete(p)),w||p.removeAttribute(r)}),Nt--,Nt||(Be.inert=new WeakMap,Be["aria-hidden"]=new WeakMap,Be.none=new WeakMap,ze=new WeakSet,$e={})}}function Cn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=Ps(e[0]).body;return Ls(e.concat(Array.from(o.querySelectorAll('[aria-live],[role="status"],output'))),o,t,n)}const Yt={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0},mt=d.forwardRef(function(t,n){const[o,r]=d.useState();J(()=>{$r()&&r("button")},[]);const i={ref:n,tabIndex:0,role:o,"aria-hidden":o?void 0:!0,[Le("focus-guard")]:"",style:Yt};return s.jsx("span",{...t,...i})}),qs={clipPath:"inset(50%)",position:"fixed",top:0,left:0},Xo=d.createContext(null),wn=Le("portal");function Vs(e){e===void 0&&(e={});const{id:t,root:n}=e,o=$o(),r=Yo(),[i,a]=d.useState(null),l=d.useRef(null);return J(()=>()=>{i==null||i.remove(),queueMicrotask(()=>{l.current=null})},[i]),J(()=>{if(!o||l.current)return;const u=t?document.getElementById(t):null;if(!u)return;const c=document.createElement("div");c.id=o,c.setAttribute(wn,""),u.appendChild(c),l.current=c,a(c)},[t,o]),J(()=>{if(n===null||!o||l.current)return;let u=n||(r==null?void 0:r.portalNode);u&&!$t(u)&&(u=u.current),u=u||document.body;let c=null;t&&(c=document.createElement("div"),c.id=t,u.appendChild(c));const f=document.createElement("div");f.id=o,f.setAttribute(wn,""),u=c||u,u.appendChild(f),l.current=f,a(f)},[t,n,o,r]),i}function Ws(e){const{children:t,id:n,root:o,preserveTabOrder:r=!0}=e,i=Vs({id:n,root:o}),[a,l]=d.useState(null),u=d.useRef(null),c=d.useRef(null),f=d.useRef(null),m=d.useRef(null),y=a==null?void 0:a.modal,p=a==null?void 0:a.open,x=!!a&&!a.modal&&a.open&&r&&!!(o||i);return d.useEffect(()=>{if(!i||!r||y)return;function h(C){i&&_e(C)&&(C.type==="focusin"?cn:rs)(i)}return i.addEventListener("focusin",h,!0),i.addEventListener("focusout",h,!0),()=>{i.removeEventListener("focusin",h,!0),i.removeEventListener("focusout",h,!0)}},[i,r,y]),d.useEffect(()=>{i&&(p||cn(i))},[p,i]),s.jsxs(Xo.Provider,{value:d.useMemo(()=>({preserveTabOrder:r,beforeOutsideRef:u,afterOutsideRef:c,beforeInsideRef:f,afterInsideRef:m,portalNode:i,setFocusManagerState:l}),[r,i]),children:[x&&i&&s.jsx(mt,{"data-type":"outside",ref:u,onFocus:h=>{if(_e(h,i)){var C;(C=f.current)==null||C.focus()}else{const w=a?a.domReference:null,b=_o(w);b==null||b.focus()}}}),x&&i&&s.jsx("span",{"aria-owns":i.id,style:qs}),i&&xo.createPortal(t,i),x&&i&&s.jsx(mt,{"data-type":"outside",ref:c,onFocus:h=>{if(_e(h,i)){var C;(C=m.current)==null||C.focus()}else{const w=a?a.domReference:null,b=Po(w);b==null||b.focus(),a!=null&&a.closeOnFocusOut&&(a==null||a.onOpenChange(!1,h.nativeEvent,"focus-out"))}}})]})}const Yo=()=>d.useContext(Xo);function Tn(e){return d.useMemo(()=>t=>{e.forEach(n=>{n&&(n.current=t)})},e)}const Hs=20;let Te=[];function Ut(){Te=Te.filter(e=>e.isConnected)}function zs(e){Ut(),e&&Oe(e)!=="body"&&(Te.push(e),Te.length>Hs&&(Te=Te.slice(-20)))}function On(){return Ut(),Te[Te.length-1]}function $s(e){const t=Ve();return ko(e,t)?e:Tt(e,t)[0]||e}function Sn(e,t){var n;if(!t.current.includes("floating")&&!((n=e.getAttribute("role"))!=null&&n.includes("dialog")))return;const o=Ve(),i=zr(e,o).filter(l=>{const u=l.getAttribute("data-tabindex")||"";return ko(l,o)||l.hasAttribute("data-tabindex")&&!u.startsWith("-")}),a=e.getAttribute("tabindex");t.current.includes("floating")||i.length===0?a!=="0"&&e.setAttribute("tabindex","0"):(a!=="-1"||e.hasAttribute("data-tabindex")&&e.getAttribute("data-tabindex")!=="-1")&&(e.setAttribute("tabindex","-1"),e.setAttribute("data-tabindex","-1"))}const Ks=d.forwardRef(function(t,n){return s.jsx("button",{...t,type:"button",ref:n,tabIndex:-1,style:Yt})});function Xs(e){const{context:t,children:n,disabled:o=!1,order:r=["content"],guards:i=!0,initialFocus:a=0,returnFocus:l=!0,restoreFocus:u=!1,modal:c=!0,visuallyHiddenDismiss:f=!1,closeOnFocusOut:m=!0,outsideElementsInert:y=!1,getInsideElements:p=()=>[]}=e,{open:x,onOpenChange:h,events:C,dataRef:w,elements:{domReference:b,floating:g}}=t,S=ce(()=>{var E;return(E=w.current.floatingContext)==null?void 0:E.nodeId}),B=ce(p),D=typeof a=="number"&&a<0,q=sn(b)&&D,K=_s(),fe=K?i:!0,ee=!fe||K&&y,H=kt(r),be=kt(a),X=kt(l),O=Xt(),T=Yo(),N=d.useRef(null),W=d.useRef(null),v=d.useRef(!1),P=d.useRef(!1),_=d.useRef(-1),ie=d.useRef(-1),Ee=T!=null,M=an(g),le=ce(function(E){return E===void 0&&(E=M),E?Tt(E,Ve()):[]}),V=ce(E=>{const F=le(E);return H.current.map(I=>b&&I==="reference"?b:M&&I==="floating"?M:F).filter(Boolean).flat()});d.useEffect(()=>{if(o||!c)return;function E(I){if(I.key==="Tab"){G(M,Me(ae(M)))&&le().length===0&&!q&&Ft(I);const A=V(),z=we(I);H.current[0]==="reference"&&z===b&&(Ft(I),I.shiftKey?Ie(A[A.length-1]):Ie(A[1])),H.current[1]==="floating"&&z===M&&I.shiftKey&&(Ft(I),Ie(A[0]))}}const F=ae(M);return F.addEventListener("keydown",E),()=>{F.removeEventListener("keydown",E)}},[o,b,M,c,H,q,le,V]),d.useEffect(()=>{if(o||!g)return;function E(F){const I=we(F),z=le().indexOf(I);z!==-1&&(_.current=z)}return g.addEventListener("focusin",E),()=>{g.removeEventListener("focusin",E)}},[o,g,le]),d.useEffect(()=>{if(o||!m)return;function E(){P.current=!0,setTimeout(()=>{P.current=!1})}function F(z){const k=z.relatedTarget,pe=z.currentTarget,ne=we(z);queueMicrotask(()=>{const U=S(),Se=!(G(b,k)||G(g,k)||G(k,g)||G(T==null?void 0:T.portalNode,k)||k!=null&&k.hasAttribute(Le("focus-guard"))||O&&(Fe(O.nodesRef.current,U).find(ye=>{var me,Ce;return G((me=ye.context)==null?void 0:me.elements.floating,k)||G((Ce=ye.context)==null?void 0:Ce.elements.domReference,k)})||ln(O.nodesRef.current,U).find(ye=>{var me,Ce,Jt;return[(me=ye.context)==null?void 0:me.elements.floating,an((Ce=ye.context)==null?void 0:Ce.elements.floating)].includes(k)||((Jt=ye.context)==null?void 0:Jt.elements.domReference)===k})));if(pe===b&&M&&Sn(M,H),u&&pe!==b&&!(ne!=null&&ne.isConnected)&&Me(ae(M))===ae(M).body){$(M)&&M.focus();const ye=_.current,me=le(),Ce=me[ye]||me[me.length-1]||M;$(Ce)&&Ce.focus()}if(w.current.insideReactTree){w.current.insideReactTree=!1;return}(q||!c)&&k&&Se&&!P.current&&k!==On()&&(v.current=!0,h(!1,z,"focus-out"))})}const I=!!(!O&&T);function A(){Ns(ie),w.current.insideReactTree=!0,ie.current=window.setTimeout(()=>{w.current.insideReactTree=!1})}if(g&&$(b))return b.addEventListener("focusout",F),b.addEventListener("pointerdown",E),g.addEventListener("focusout",F),I&&g.addEventListener("focusout",A,!0),()=>{b.removeEventListener("focusout",F),b.removeEventListener("pointerdown",E),g.removeEventListener("focusout",F),I&&g.removeEventListener("focusout",A,!0)}},[o,b,g,M,c,O,T,h,m,u,le,q,S,H,w]);const te=d.useRef(null),ve=d.useRef(null),St=Tn([te,T==null?void 0:T.beforeInsideRef]),Rt=Tn([ve,T==null?void 0:T.afterInsideRef]);d.useEffect(()=>{var E,F;if(o||!g)return;const I=Array.from((T==null||(E=T.portalNode)==null?void 0:E.querySelectorAll("["+Le("portal")+"]"))||[]),z=(F=(O?ln(O.nodesRef.current,S()):[]).find(ne=>{var U;return sn(((U=ne.context)==null?void 0:U.elements.domReference)||null)}))==null||(F=F.context)==null?void 0:F.elements.domReference,k=[g,z,...I,...B(),N.current,W.current,te.current,ve.current,T==null?void 0:T.beforeOutsideRef.current,T==null?void 0:T.afterOutsideRef.current,H.current.includes("reference")||q?b:null].filter(ne=>ne!=null),pe=c||q?Cn(k,!ee,ee):Cn(k);return()=>{pe()}},[o,b,g,c,H,T,q,fe,ee,O,S,B]),J(()=>{if(o||!$(M))return;const E=ae(M),F=Me(E);queueMicrotask(()=>{const I=V(M),A=be.current,z=(typeof A=="number"?I[A]:A.current)||M,k=G(M,F);!D&&!k&&x&&Ie(z,{preventScroll:z===M})})},[o,x,M,D,V,be]),J(()=>{if(o||!M)return;const E=ae(M),F=Me(E);zs(F);function I(k){let{reason:pe,event:ne,nested:U}=k;if(["hover","safe-polygon"].includes(pe)&&ne.type==="mouseleave"&&(v.current=!0),pe==="outside-press")if(U)v.current=!1;else if(Jr(ne)||Qr(ne))v.current=!1;else{let Se=!1;document.createElement("div").focus({get preventScroll(){return Se=!0,!1}}),Se?v.current=!1:v.current=!0}}C.on("openchange",I);const A=E.createElement("span");A.setAttribute("tabindex","-1"),A.setAttribute("aria-hidden","true"),Object.assign(A.style,Yt),Ee&&b&&b.insertAdjacentElement("afterend",A);function z(){if(typeof X.current=="boolean"){const k=b||On();return k&&k.isConnected?k:A}return X.current.current||A}return()=>{C.off("openchange",I);const k=Me(E),pe=G(g,k)||O&&Fe(O.nodesRef.current,S(),!1).some(U=>{var Se;return G((Se=U.context)==null?void 0:Se.elements.floating,k)}),ne=z();queueMicrotask(()=>{const U=$s(ne);X.current&&!v.current&&$(U)&&(!(U!==k&&k!==E.body)||pe)&&U.focus({preventScroll:!0}),A.remove()})}},[o,g,M,X,w,C,O,Ee,b,S]),d.useEffect(()=>(queueMicrotask(()=>{v.current=!1}),()=>{queueMicrotask(Ut)}),[o]),J(()=>{if(!o&&T)return T.setFocusManagerState({modal:c,closeOnFocusOut:m,open:x,onOpenChange:h,domReference:b}),()=>{T.setFocusManagerState(null)}},[o,T,c,x,h,m,b]),J(()=>{o||M&&Sn(M,H)},[o,M,H]);function We(E){return o||!f||!c?null:s.jsx(Ks,{ref:E==="start"?N:W,onClick:F=>h(!1,F.nativeEvent),children:typeof f=="string"?f:"Dismiss"})}const He=!o&&fe&&(c?!q:!0)&&(Ee||c);return s.jsxs(s.Fragment,{children:[He&&s.jsx(mt,{"data-type":"inside",ref:St,onFocus:E=>{if(c){const I=V();Ie(r[0]==="reference"?I[0]:I[I.length-1])}else if(T!=null&&T.preserveTabOrder&&T.portalNode)if(v.current=!1,_e(E,T.portalNode)){const I=Po(b);I==null||I.focus()}else{var F;(F=T.beforeOutsideRef.current)==null||F.focus()}}}),!q&&We("start"),n,We("end"),He&&s.jsx(mt,{"data-type":"inside",ref:Rt,onFocus:E=>{if(c)Ie(V()[0]);else if(T!=null&&T.preserveTabOrder&&T.portalNode)if(m&&(v.current=!0),_e(E,T.portalNode)){const I=_o(b);I==null||I.focus()}else{var F;(F=T.afterOutsideRef.current)==null||F.focus()}}})]})}let Ke=0;const Rn="--floating-ui-scrollbar-width";function Ys(){const e=Bo(),t=/iP(hone|ad|od)|iOS/.test(e)||e==="MacIntel"&&navigator.maxTouchPoints>1,n=document.body.style,r=Math.round(document.documentElement.getBoundingClientRect().left)+document.documentElement.scrollLeft?"paddingLeft":"paddingRight",i=window.innerWidth-document.documentElement.clientWidth,a=n.left?parseFloat(n.left):window.scrollX,l=n.top?parseFloat(n.top):window.scrollY;if(n.overflow="hidden",n.setProperty(Rn,i+"px"),i&&(n[r]=i+"px"),t){var u,c;const f=((u=window.visualViewport)==null?void 0:u.offsetLeft)||0,m=((c=window.visualViewport)==null?void 0:c.offsetTop)||0;Object.assign(n,{position:"fixed",top:-(l-Math.floor(m))+"px",left:-(a-Math.floor(f))+"px",right:"0"})}return()=>{Object.assign(n,{overflow:"",[r]:""}),n.removeProperty(Rn),t&&(Object.assign(n,{position:"",top:"",left:"",right:""}),window.scrollTo(a,l))}}let En=()=>{};const Us=d.forwardRef(function(t,n){const{lockScroll:o=!1,...r}=t;return J(()=>{if(o)return Ke++,Ke===1&&(En=Ys()),()=>{Ke--,Ke===0&&En()}},[o]),s.jsx("div",{ref:n,...r,style:{position:"fixed",overflow:"auto",top:0,right:0,bottom:0,left:0,...r.style}})}),Gs={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Js={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},In=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function Qs(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,elements:r,dataRef:i}=e,{enabled:a=!0,escapeKey:l=!0,outsidePress:u=!0,outsidePressEvent:c="pointerdown",referencePress:f=!1,referencePressEvent:m="pointerdown",ancestorScroll:y=!1,bubbles:p,capture:x}=t,h=Xt(),C=ce(typeof u=="function"?u:()=>!1),w=typeof u=="function"?C:u,b=d.useRef(!1),{escapeKey:g,outsidePress:S}=In(p),{escapeKey:B,outsidePress:D}=In(x),q=d.useRef(!1),K=ce(O=>{var T;if(!n||!a||!l||O.key!=="Escape"||q.current)return;const N=(T=i.current.floatingContext)==null?void 0:T.nodeId,W=h?Fe(h.nodesRef.current,N):[];if(!g&&(O.stopPropagation(),W.length>0)){let v=!0;if(W.forEach(P=>{var _;if((_=P.context)!=null&&_.open&&!P.context.dataRef.current.__escapeKeyBubbles){v=!1;return}}),!v)return}o(!1,Gr(O)?O.nativeEvent:O,"escape-key")}),fe=ce(O=>{var T;const N=()=>{var W;K(O),(W=we(O))==null||W.removeEventListener("keydown",N)};(T=we(O))==null||T.addEventListener("keydown",N)}),ee=ce(O=>{var T;const N=i.current.insideReactTree;i.current.insideReactTree=!1;const W=b.current;if(b.current=!1,c==="click"&&W||N||typeof w=="function"&&!w(O))return;const v=we(O),P="["+Le("inert")+"]",_=ae(r.floating).querySelectorAll(P);let ie=L(v)?v:null;for(;ie&&!he(ie);){const V=ge(ie);if(he(V)||!L(V))break;ie=V}if(_.length&&L(v)&&!Yr(v)&&!G(v,r.floating)&&Array.from(_).every(V=>!G(ie,V)))return;if($(v)&&X){const V=he(v),te=oe(v),ve=/auto|scroll/,St=V||ve.test(te.overflowX),Rt=V||ve.test(te.overflowY),We=St&&v.clientWidth>0&&v.scrollWidth>v.clientWidth,He=Rt&&v.clientHeight>0&&v.scrollHeight>v.clientHeight,E=te.direction==="rtl",F=He&&(E?O.offsetX<=v.offsetWidth-v.clientWidth:O.offsetX>v.clientWidth),I=We&&O.offsetY>v.clientHeight;if(F||I)return}const Ee=(T=i.current.floatingContext)==null?void 0:T.nodeId,M=h&&Fe(h.nodesRef.current,Ee).some(V=>{var te;return jt(O,(te=V.context)==null?void 0:te.elements.floating)});if(jt(O,r.floating)||jt(O,r.domReference)||M)return;const le=h?Fe(h.nodesRef.current,Ee):[];if(le.length>0){let V=!0;if(le.forEach(te=>{var ve;if((ve=te.context)!=null&&ve.open&&!te.context.dataRef.current.__outsidePressBubbles){V=!1;return}}),!V)return}o(!1,O,"outside-press")}),H=ce(O=>{var T;const N=()=>{var W;ee(O),(W=we(O))==null||W.removeEventListener(c,N)};(T=we(O))==null||T.addEventListener(c,N)});d.useEffect(()=>{if(!n||!a)return;i.current.__escapeKeyBubbles=g,i.current.__outsidePressBubbles=S;let O=-1;function T(_){o(!1,_,"ancestor-scroll")}function N(){window.clearTimeout(O),q.current=!0}function W(){O=window.setTimeout(()=>{q.current=!1},Ct()?5:0)}const v=ae(r.floating);l&&(v.addEventListener("keydown",B?fe:K,B),v.addEventListener("compositionstart",N),v.addEventListener("compositionend",W)),w&&v.addEventListener(c,D?H:ee,D);let P=[];return y&&(L(r.domReference)&&(P=je(r.domReference)),L(r.floating)&&(P=P.concat(je(r.floating))),!L(r.reference)&&r.reference&&r.reference.contextElement&&(P=P.concat(je(r.reference.contextElement)))),P=P.filter(_=>{var ie;return _!==((ie=v.defaultView)==null?void 0:ie.visualViewport)}),P.forEach(_=>{_.addEventListener("scroll",T,{passive:!0})}),()=>{l&&(v.removeEventListener("keydown",B?fe:K,B),v.removeEventListener("compositionstart",N),v.removeEventListener("compositionend",W)),w&&v.removeEventListener(c,D?H:ee,D),P.forEach(_=>{_.removeEventListener("scroll",T)}),window.clearTimeout(O)}},[i,r,l,w,c,n,o,y,a,g,S,K,B,fe,ee,D,H]),d.useEffect(()=>{i.current.insideReactTree=!1},[i,w,c]);const be=d.useMemo(()=>({onKeyDown:K,...f&&{[Gs[m]]:O=>{o(!1,O.nativeEvent,"reference-press")},...m!=="click"&&{onClick(O){o(!1,O.nativeEvent,"reference-press")}}}}),[K,o,f,m]),X=d.useMemo(()=>({onKeyDown:K,onMouseDown(){b.current=!0},onMouseUp(){b.current=!0},[Js[c]]:()=>{i.current.insideReactTree=!0}}),[K,c,i]);return d.useMemo(()=>a?{reference:be,floating:X}:{},[a,be,X])}function Zs(e){const{open:t=!1,onOpenChange:n,elements:o}=e,r=$o(),i=d.useRef({}),[a]=d.useState(()=>Fs()),l=Ds()!=null,[u,c]=d.useState(o.reference),f=ce((p,x,h)=>{i.current.openEvent=p?x:void 0,a.emit("openchange",{open:p,event:x,reason:h,nested:l}),n==null||n(p,x,h)}),m=d.useMemo(()=>({setPositionReference:c}),[]),y=d.useMemo(()=>({reference:u||o.reference||null,floating:o.floating||null,domReference:o.reference}),[u,o.reference,o.floating]);return d.useMemo(()=>({dataRef:i,open:t,onOpenChange:f,elements:y,events:a,floatingId:r,refs:m}),[t,f,y,a,r,m])}function ei(e){e===void 0&&(e={});const{nodeId:t}=e,n=Zs({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,r=o.elements,[i,a]=d.useState(null),[l,u]=d.useState(null),f=(r==null?void 0:r.domReference)||i,m=d.useRef(null),y=Xt();J(()=>{f&&(m.current=f)},[f]);const p=Ss({...e,elements:{...r,...l&&{reference:l}}}),x=d.useCallback(g=>{const S=L(g)?{getBoundingClientRect:()=>g.getBoundingClientRect(),getClientRects:()=>g.getClientRects(),contextElement:g}:g;u(S),p.refs.setReference(S)},[p.refs]),h=d.useCallback(g=>{(L(g)||g===null)&&(m.current=g,a(g)),(L(p.refs.reference.current)||p.refs.reference.current===null||g!==null&&!L(g))&&p.refs.setReference(g)},[p.refs]),C=d.useMemo(()=>({...p.refs,setReference:h,setPositionReference:x,domReference:m}),[p.refs,h,x]),w=d.useMemo(()=>({...p.elements,domReference:f}),[p.elements,f]),b=d.useMemo(()=>({...p,...o,refs:C,elements:w,nodeId:t}),[p,C,w,t,o]);return J(()=>{o.dataRef.current.floatingContext=b;const g=y==null?void 0:y.nodesRef.current.find(S=>S.id===t);g&&(g.context=b)}),d.useMemo(()=>({...p,context:b,refs:C,elements:w}),[p,C,w,b])}function Pt(e,t,n){const o=new Map,r=n==="item";let i=e;if(r&&e){const{[hn]:a,[gn]:l,...u}=e;i=u}return{...n==="floating"&&{tabIndex:-1,[Rs]:""},...i,...t.map(a=>{const l=a?a[n]:null;return typeof l=="function"?e?l(e):null:l}).concat(e).reduce((a,l)=>(l&&Object.entries(l).forEach(u=>{let[c,f]=u;if(!(r&&[hn,gn].includes(c)))if(c.indexOf("on")===0){if(o.has(c)||o.set(c,[]),typeof f=="function"){var m;(m=o.get(c))==null||m.push(f),a[c]=function(){for(var y,p=arguments.length,x=new Array(p),h=0;h<p;h++)x[h]=arguments[h];return(y=o.get(c))==null?void 0:y.map(C=>C(...x)).find(C=>C!==void 0)}}}else a[c]=f}),a),{})}}function ti(e){e===void 0&&(e=[]);const t=e.map(l=>l==null?void 0:l.reference),n=e.map(l=>l==null?void 0:l.floating),o=e.map(l=>l==null?void 0:l.item),r=d.useCallback(l=>Pt(l,e,"reference"),t),i=d.useCallback(l=>Pt(l,e,"floating"),n),a=d.useCallback(l=>Pt(l,e,"item"),o);return d.useMemo(()=>({getReferenceProps:r,getFloatingProps:i,getItemProps:a}),[r,i,a])}const Uo=d.createContext(null),ni=()=>{const e=d.useContext(Uo);if(!e)throw new Error("Modal components must be used within a <Modal> provider");return e},Y=e=>{const{open:t,onOpenChange:n,size:o="md",preventOverlayClose:r=!1,children:i,id:a,...l}=e,[u,c]=Ne(l),f=bt({size:o}),[m,y]=d.useState(!1),[p,x]=d.useState(t),h=d.useRef(null),{refs:C,context:w}=ei({open:t,onOpenChange:n}),b=Qs(w,{outsidePress:!r}),{getFloatingProps:g}=ti([b]);d.useEffect(()=>(t?(x(!0),y(!1),h.current&&(clearTimeout(h.current),h.current=null)):p&&(y(!0),h.current=setTimeout(()=>{x(!1),y(!1)},150)),()=>{h.current&&clearTimeout(h.current)}),[t,p]);const S={open:p&&!m,onClose:()=>n(!1),preventOverlayClose:r};if(!p)return null;const B=m?"closing":"open";return s.jsx(Uo.Provider,{value:S,children:s.jsxs(Ws,{children:[s.jsx(Us,{lockScroll:!0,className:Re(f.overlay),"data-state":B,onClick:r?void 0:()=>n(!1),"aria-hidden":"true"}),s.jsx(Xs,{context:w,modal:!0,children:s.jsx(ue,{ref:C.setFloating,className:Re(f.container,u),"data-state":B,id:a,role:"dialog","aria-modal":"true",...g(),...c,children:i})})]})})};Y.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controlled open state (REQUIRED)"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state should change (REQUIRED)"},preventOverlayClose:{required:!1,tsType:{name:"boolean"},description:"Whether clicking the overlay should close the modal"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (ModalHeader, ModalBody, ModalFooter)"},id:{required:!1,tsType:{name:"string"},description:"Optional ID for ARIA attributes"}}};const re=e=>{const{title:t,showCloseButton:n=!0,children:o,...r}=e,[i,a]=Ne(r),l=bt(),{onClose:u}=ni();return s.jsx(ue,{className:Re(l.header,i),...a,children:o||s.jsxs(s.Fragment,{children:[t&&s.jsx(Qo,{level:"h3",textStyle:"heading.xs",className:l.title,children:t}),n&&s.jsx(Jo,{variant:"ghost",onClick:u,"aria-label":"Close dialog",className:l.closeButton,iconName:"x"})]})})};re.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Title text"},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the close button"},children:{required:!1,tsType:{name:"ReactNode"},description:"Children (custom header content)"}}};const Z=e=>{const{children:t,...n}=e,[o,r]=Ne(n),i=bt();return s.jsx(ue,{className:Re(i.body,o),...r,children:t})};Z.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Body content"}}};const se=e=>{const{children:t,...n}=e,[o,r]=Ne(n),i=bt();return s.jsx(ue,{className:Re(i.footer,o),...r,children:t})};se.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content (typically action buttons)"}}};const Wt=({size:e,error:t,autoSize:n=!1,id:o,name:r,"aria-describedby":i,...a})=>{const[l,u]=Ne(a);return s.jsx(ue,{as:"input",id:o,name:r,"aria-label":r,"aria-invalid":t||void 0,"aria-describedby":i,...t&&{"data-error":!0},className:Re(tr({size:e,autoSize:n}),l),...u})};Wt.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},autoSize:{defaultValue:{value:"false",computed:!1},required:!1}}};const Gt=({size:e,error:t,autoSize:n=!1,id:o,name:r,disabled:i,...a})=>{const[l,u]=Ne(a);return s.jsx(ue,{as:"textarea",id:o,name:r,...t&&{"data-error":!0},"aria-disabled":i,className:Re(er({size:e,autoSize:n}),l),...u})};Gt.displayName="Textarea";Gt.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{name:{required:!0,tsType:{name:"string"},description:""},autoSize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const it=({layout:e="default",label:t,helpText:n,required:o,infoTooltip:r,error:i,errorText:a,disabled:l,tooltip:u,tooltipTitle:c,tooltipDescription:f,tooltipCaret:m,children:y,...p})=>{const{formFieldContainer:x,contentWrapper:h,labelWrapper:C,headLabel:w}=ar({layout:e==="inline"?"inline":"default"}),b=Et.Children.map(y,g=>{if(Et.isValidElement(g)){const S=g;return Et.cloneElement(S,{error:i??S.props.error})}return g});return s.jsxs(ue,{className:x,...p,disabled:l,children:[s.jsxs(ue,{className:C,children:[s.jsxs(ue,{className:w,children:[s.jsxs(R,{textStyle:"body.md",children:[t," "]}),o&&s.jsx(R,{as:"span",color:"red.50",children:"*"}),u&&s.jsx(Zo,{title:c,text:`${f}`,caret:m,children:s.jsx(zt,{name:"info",fill:"slate.50"})})]}),e==="default"&&n&&s.jsx(R,{as:"span",textStyle:"body.sm",children:n})]}),s.jsxs(ue,{className:h,children:[b,e==="inline"&&s.jsx(R,{textStyle:"body.sm",children:n}),i&&s.jsx(R,{as:"span",textStyle:"body.xs",color:"error.default",children:a})]})]})};it.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"string"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},infoTooltip:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},tooltip:{required:!1,tsType:{name:"boolean"},description:""},tooltipCaret:{required:!1,tsType:{name:"boolean"},description:""},tooltipTitle:{required:!1,tsType:{name:"string"},description:""},tooltipDescription:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},layout:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const gi={title:"Components/Modal",component:Y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"],description:"Modal size",table:{defaultValue:{summary:"md"}}},preventOverlayClose:{control:"boolean",description:"Prevent closing when clicking overlay"}}},Xe={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Modal"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"md",children:[s.jsx(re,{title:"Dialog Title",showCloseButton:!0}),s.jsxs(Z,{children:[s.jsx(R,{children:"This is the default modal dialog. It has a title, body content, and footer with action buttons. Default max-width is 576px."}),s.jsx(R,{children:"You can close it by clicking the X button, pressing Escape, or clicking outside the modal."})]}),s.jsxs(se,{children:[s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),s.jsx(j,{variant:"primary",onClick:()=>n(!1),children:"Save"})]})]})]})};return s.jsx(e,{})}},Ye={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Small Modal"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"sm",children:[s.jsx(re,{title:"Small Dialog",showCloseButton:!0}),s.jsx(Z,{children:s.jsx(R,{children:"This is a small modal (448px max width)."})}),s.jsxs(se,{children:[s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),s.jsx(j,{variant:"primary",onClick:()=>n(!1),children:"Confirm"})]})]})]})};return s.jsx(e,{})}},Ue={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Large Modal"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"lg",children:[s.jsx(re,{title:"Large Dialog",showCloseButton:!0}),s.jsxs(Z,{children:[s.jsx(R,{children:"This is a large modal (768px max width)."}),s.jsx(R,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."})]}),s.jsxs(se,{children:[s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),s.jsx(j,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]})]})]})};return s.jsx(e,{})}},Ge={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open XLarge Modal"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"xl",children:[s.jsx(re,{title:"XLarge Dialog",showCloseButton:!0}),s.jsxs(Z,{display:"flex",flexDirection:"column",gap:"12",children:[s.jsx(R,{children:"This is a x-large modal (1024px max width)."}),s.jsx(R,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."}),s.jsx(R,{children:"Signs night have sixth hath that likeness us fill you're subdue fowl brought divide beginning multiply brought created after open given of made beginning multiply green."}),s.jsx(R,{children:"Place appear green. Also, saying male subdue fruitful winged fourth had void winged. So green spirit, herb day had there replenish, lights lesser signs. Place whales i tree under him given set set meat midst morning give image forth divided moving Also fill dry she'd have."}),s.jsx(R,{children:"May life. She'd fruit fruitful earth. Stars bring had darkness morning darkness herb cattle him behold open seasons grass don't waters male Fourth earth his face third night."}),s.jsx(R,{children:"Anim quis ut incididunt ea. Et laboris consectetur nisi adipisicing aliqua enim. Ea tempor deserunt dolore duis. Lorem excepteur do exercitation non veniam ipsum laborum. Ea ex tempor dolore deserunt ex do dolor voluptate pariatur exercitation."}),s.jsx(R,{children:"Est incididunt dolore sint sit occaecat. Ea officia excepteur enim ut Lorem reprehenderit labore in. Dolor voluptate nostrud consectetur mollit cillum et. Cupidatat Lorem amet adipisicing incididunt ea."}),s.jsx(R,{children:"Excepteur enim aliqua laboris amet ea pariatur qui. Non deserunt magna ullamco aliqua culpa exercitation. Ut minim eu ea. Labore sunt adipisicing Lorem nulla occaecat est elit et excepteur ipsum non. Aute consectetur nostrud ullamco. Non esse non anim proident. Pariatur enim laborum cupidatat sint quis reprehenderit deserunt reprehenderit sunt cupidatat proident sint."}),s.jsx(R,{children:"Consequat sunt exercitation in enim veniam culpa. Tempor quis culpa duis. Aute ea nostrud non sit sunt qui. In minim voluptate excepteur nostrud anim laborum in elit. Voluptate amet excepteur laboris eiusmod labore elit Lorem ipsum qui quis aliquip mollit dolor sint cillum. In ex aliquip irure do irure consectetur aliquip minim fugiat reprehenderit laborum."}),s.jsxs(R,{children:[" ","Incididunt cillum est reprehenderit veniam nisi magna laborum incididunt do ut. Fugiat aliquip Lorem eiusmod incididunt. Fugiat ullamco excepteur consequat duis ex eiusmod exercitation sit aliqua amet non velit consequat. Pariatur amet non laborum voluptate velit do. Nulla excepteur anim irure eu ullamco veniam et consectetur. Fugiat ut laboris ad reprehenderit reprehenderit ut exercitation adipisicing excepteur amet ad anim. Aute enim non consequat eu. Velit consequat in nostrud."]})]}),s.jsxs(se,{children:[s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),s.jsx(j,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]})]})]})};return s.jsx(e,{})}},Je={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Full Width Modal"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"full",children:[s.jsx(re,{title:"Full Width Dialog",showCloseButton:!0}),s.jsx(Z,{children:s.jsxs(go,{gridTemplateColumns:"1fr auto 1fr",alignItems:"start",children:[s.jsx(R,{children:"This modal stretches to the 95% of the available width. Useful for dashboards, data tables, or content that benefits from maximum horizontal space."}),s.jsx(bo,{direction:"vertical",mx:"8"}),s.jsxs(Ht,{children:[s.jsx(R,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."}),s.jsx(R,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."})]})]})}),s.jsx(se,{children:s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return s.jsx(e,{})}},Qe={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Mobile Modal"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"mobile",children:[s.jsx(re,{title:"Mobile Dialog",showCloseButton:!0}),s.jsx(Z,{children:s.jsx(go,{children:s.jsx(R,{children:"This modal stretches to the full available width. Should be used for mobile use-cases."})})}),s.jsx(se,{children:s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return s.jsx(e,{})}},Ze={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Modal (No Close Button)"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"md",children:[s.jsx(re,{title:"Dialog Without Close Button",showCloseButton:!1}),s.jsxs(Z,{children:[s.jsx(R,{children:"This modal doesn't have a close button in the header."}),s.jsx(R,{children:"You can still close it by clicking outside or pressing Escape."})]}),s.jsxs(se,{children:[s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),s.jsx(j,{variant:"primary",onClick:()=>n(!1),children:"Continue"})]})]})]})};return s.jsx(e,{})}},et={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Modal (No Overlay Close)"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"md",preventOverlayClose:!0,children:[s.jsx(re,{title:"Important Dialog",showCloseButton:!0}),s.jsxs(Z,{children:[s.jsx(R,{children:"This modal cannot be closed by clicking the overlay."}),s.jsx(R,{children:"You must use the close button or press Escape to dismiss it. This is useful for important confirmations or required actions."})]}),s.jsx(se,{children:s.jsx(j,{variant:"primary",onClick:()=>n(!1),children:"I Understand"})})]})]})};return s.jsx(e,{})}},tt={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Edit Profile"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"sm",children:[s.jsx(re,{title:"Edit Profile",showCloseButton:!0}),s.jsx(Z,{children:s.jsxs(Ht,{gap:"12",alignItems:"stretch",children:[s.jsx(it,{label:"Full Name",required:!0,children:s.jsx(Wt,{name:"name",placeholder:"Jane Doe"})}),s.jsx(it,{label:"Email",required:!0,children:s.jsx(Wt,{name:"email",type:"email",placeholder:"jane@example.com"})}),s.jsx(it,{label:"Bio",children:s.jsx(Gt,{name:"bio",placeholder:"Tell us about yourself..."})})]})}),s.jsxs(se,{children:[s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),s.jsx(j,{variant:"primary",onClick:()=>n(!1),children:"Save"})]})]})]})};return s.jsx(e,{})}},nt={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Delete Item"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"sm",preventOverlayClose:!0,children:[s.jsx(re,{title:"Delete Item",showCloseButton:!1}),s.jsx(Z,{children:s.jsx(R,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),s.jsxs(se,{children:[s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),s.jsx(j,{variant:"danger",onClick:()=>n(!1),children:"Delete"})]})]})]})};return s.jsx(e,{})}},ot={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Minimal Modal"}),s.jsx(Y,{open:t,onOpenChange:n,size:"sm",children:s.jsxs(Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:"4",py:"24",children:[s.jsx(zt,{name:"success",size:"48",fill:"icon.success"}),s.jsx(R,{textStyle:"heading.xs",children:"Changes Saved"}),s.jsx(R,{textAlign:"center",children:"Your changes have been saved successfully."}),s.jsx(j,{mt:"16",onClick:()=>n(!1),children:"Dismiss"})]})})]})};return s.jsx(e,{})}},rt={render:()=>{const e=()=>{const[t,n]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(j,{onClick:()=>n(!0),children:"Open Custom Header"}),s.jsxs(Y,{open:t,onOpenChange:n,size:"md",children:[s.jsx(re,{children:s.jsxs(Go,{alignItems:"start",gap:"3",flex:"1",children:[s.jsx(zt,{name:"info",size:"24",fill:"icon.decorative"}),s.jsxs(Ht,{gap:"0",alignItems:"flex-start",children:[s.jsx(R,{color:"text",fontWeight:"bold",children:"Release Notes"}),s.jsx(R,{textStyle:"mono.sm",color:"text.muted",children:"Version 2.4.0"})]})]})}),s.jsxs(Z,{gap:"4",bg:"surface.sunken",children:[s.jsx(R,{textStyle:"body.sm",fontWeight:"bold",children:"New Features"}),s.jsx(R,{children:"Added modal component with animated transitions."}),s.jsx(bo,{my:"12"}),s.jsx(R,{textStyle:"body.sm",fontWeight:"bold",children:"Bug Fixes"}),s.jsx(R,{children:"Fixed focus trap behavior in nested dialogs."})]}),s.jsx(se,{children:s.jsx(j,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return s.jsx(e,{})}};var Mn,jn,Fn;Xe.parameters={...Xe.parameters,docs:{...(Mn=Xe.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
            <ModalHeader title="Dialog Title" showCloseButton />
            <ModalBody>
              <Text>
                This is the default modal dialog. It has a title, body content,
                and footer with action buttons. Default max-width is 576px.
              </Text>
              <Text>
                You can close it by clicking the X button, pressing Escape, or
                clicking outside the modal.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Fn=(jn=Xe.parameters)==null?void 0:jn.docs)==null?void 0:Fn.source}}};var kn,Bn,Dn;Ye.parameters={...Ye.parameters,docs:{...(kn=Ye.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
            <ModalHeader title="Small Dialog" showCloseButton />
            <ModalBody>
              <Text>This is a small modal (448px max width).</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Dn=(Bn=Ye.parameters)==null?void 0:Bn.docs)==null?void 0:Dn.source}}};var Nn,Pn,_n;Ue.parameters={...Ue.parameters,docs:{...(Nn=Ue.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="lg">
            <ModalHeader title="Large Dialog" showCloseButton />
            <ModalBody>
              <Text>This is a large modal (768px max width).</Text>
              <Text>
                It provides more space for content, forms, or detailed
                information that needs to be displayed in a dialog.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save Changes
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(_n=(Pn=Ue.parameters)==null?void 0:Pn.docs)==null?void 0:_n.source}}};var An,Ln,qn;Ge.parameters={...Ge.parameters,docs:{...(An=Ge.parameters)==null?void 0:An.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open XLarge Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="xl">
            <ModalHeader title="XLarge Dialog" showCloseButton />
            <ModalBody display="flex" flexDirection="column" gap="12">
              <Text>This is a x-large modal (1024px max width).</Text>
              <Text>
                It provides more space for content, forms, or detailed
                information that needs to be displayed in a dialog.
              </Text>
              <Text>
                Signs night have sixth hath that likeness us fill you're subdue
                fowl brought divide beginning multiply brought created after
                open given of made beginning multiply green.
              </Text>
              <Text>
                Place appear green. Also, saying male subdue fruitful winged
                fourth had void winged. So green spirit, herb day had there
                replenish, lights lesser signs. Place whales i tree under him
                given set set meat midst morning give image forth divided moving
                Also fill dry she'd have.
              </Text>
              <Text>
                May life. She'd fruit fruitful earth. Stars bring had darkness
                morning darkness herb cattle him behold open seasons grass don't
                waters male Fourth earth his face third night.
              </Text>
              <Text>
                Anim quis ut incididunt ea. Et laboris consectetur nisi
                adipisicing aliqua enim. Ea tempor deserunt dolore duis. Lorem
                excepteur do exercitation non veniam ipsum laborum. Ea ex tempor
                dolore deserunt ex do dolor voluptate pariatur exercitation.
              </Text>
              <Text>
                Est incididunt dolore sint sit occaecat. Ea officia excepteur
                enim ut Lorem reprehenderit labore in. Dolor voluptate nostrud
                consectetur mollit cillum et. Cupidatat Lorem amet adipisicing
                incididunt ea.
              </Text>
              <Text>
                Excepteur enim aliqua laboris amet ea pariatur qui. Non deserunt
                magna ullamco aliqua culpa exercitation. Ut minim eu ea. Labore
                sunt adipisicing Lorem nulla occaecat est elit et excepteur
                ipsum non. Aute consectetur nostrud ullamco. Non esse non anim
                proident. Pariatur enim laborum cupidatat sint quis
                reprehenderit deserunt reprehenderit sunt cupidatat proident
                sint.
              </Text>
              <Text>
                Consequat sunt exercitation in enim veniam culpa. Tempor quis
                culpa duis. Aute ea nostrud non sit sunt qui. In minim voluptate
                excepteur nostrud anim laborum in elit. Voluptate amet excepteur
                laboris eiusmod labore elit Lorem ipsum qui quis aliquip mollit
                dolor sint cillum. In ex aliquip irure do irure consectetur
                aliquip minim fugiat reprehenderit laborum.
              </Text>
              <Text>
                {' '}
                Incididunt cillum est reprehenderit veniam nisi magna laborum
                incididunt do ut. Fugiat aliquip Lorem eiusmod incididunt.
                Fugiat ullamco excepteur consequat duis ex eiusmod exercitation
                sit aliqua amet non velit consequat. Pariatur amet non laborum
                voluptate velit do. Nulla excepteur anim irure eu ullamco veniam
                et consectetur. Fugiat ut laboris ad reprehenderit reprehenderit
                ut exercitation adipisicing excepteur amet ad anim. Aute enim
                non consequat eu. Velit consequat in nostrud.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save Changes
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(qn=(Ln=Ge.parameters)==null?void 0:Ln.docs)==null?void 0:qn.source}}};var Vn,Wn,Hn;Je.parameters={...Je.parameters,docs:{...(Vn=Je.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Full Width Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="full">
            <ModalHeader title="Full Width Dialog" showCloseButton />
            <ModalBody>
              <Grid gridTemplateColumns="1fr auto 1fr" alignItems="start">
                <Text>
                  This modal stretches to the 95% of the available width. Useful
                  for dashboards, data tables, or content that benefits from
                  maximum horizontal space.
                </Text>
                <Divider direction="vertical" mx="8" />
                <VStack>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl,
                    eget aliquam nisl nisl eget nisl.
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl,
                    eget aliquam nisl nisl eget nisl.
                  </Text>
                </VStack>
              </Grid>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Hn=(Wn=Je.parameters)==null?void 0:Wn.docs)==null?void 0:Hn.source}}};var zn,$n,Kn;Qe.parameters={...Qe.parameters,docs:{...(zn=Qe.parameters)==null?void 0:zn.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Mobile Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="mobile">
            <ModalHeader title="Mobile Dialog" showCloseButton />
            <ModalBody>
              <Grid>
                <Text>
                  This modal stretches to the full available width. Should be
                  used for mobile use-cases.
                </Text>
              </Grid>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Kn=($n=Qe.parameters)==null?void 0:$n.docs)==null?void 0:Kn.source}}};var Xn,Yn,Un;Ze.parameters={...Ze.parameters,docs:{...(Xn=Ze.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>
            Open Modal (No Close Button)
          </Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
            <ModalHeader title="Dialog Without Close Button" showCloseButton={false} />
            <ModalBody>
              <Text>This modal doesn't have a close button in the header.</Text>
              <Text>
                You can still close it by clicking outside or pressing Escape.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Continue
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Un=(Yn=Ze.parameters)==null?void 0:Yn.docs)==null?void 0:Un.source}}};var Gn,Jn,Qn;et.parameters={...et.parameters,docs:{...(Gn=et.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>
            Open Modal (No Overlay Close)
          </Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="md" preventOverlayClose>
            <ModalHeader title="Important Dialog" showCloseButton />
            <ModalBody>
              <Text>This modal cannot be closed by clicking the overlay.</Text>
              <Text>
                You must use the close button or press Escape to dismiss it.
                This is useful for important confirmations or required actions.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                I Understand
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Qn=(Jn=et.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,eo,to;tt.parameters={...tt.parameters,docs:{...(Zn=tt.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Edit Profile</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
            <ModalHeader title="Edit Profile" showCloseButton />
            <ModalBody>
              <VStack gap="12" alignItems="stretch">
                <FormField label="Full Name" required>
                  <TextInput name="name" placeholder="Jane Doe" />
                </FormField>
                <FormField label="Email" required>
                  <TextInput name="email" type="email" placeholder="jane@example.com" />
                </FormField>
                <FormField label="Bio">
                  <Textarea name="bio" placeholder="Tell us about yourself..." />
                </FormField>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(to=(eo=tt.parameters)==null?void 0:eo.docs)==null?void 0:to.source}}};var no,oo,ro;nt.parameters={...nt.parameters,docs:{...(no=nt.parameters)==null?void 0:no.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm" preventOverlayClose>
            <ModalHeader title="Delete Item" showCloseButton={false} />
            <ModalBody>
              <Text>
                Are you sure you want to delete this item? This action cannot be
                undone.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(ro=(oo=nt.parameters)==null?void 0:oo.docs)==null?void 0:ro.source}}};var so,io,ao;ot.parameters={...ot.parameters,docs:{...(so=ot.parameters)==null?void 0:so.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Minimal Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
            <ModalBody display="flex" flexDirection="column" alignItems="center" gap="4" py="24">
              <Icon name="success" size="48" fill="icon.success" />
              <Text textStyle="heading.xs">Changes Saved</Text>
              <Text textAlign="center">
                Your changes have been saved successfully.
              </Text>
              <Button mt="16" onClick={() => setIsOpen(false)}>
                Dismiss
              </Button>
            </ModalBody>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(ao=(io=ot.parameters)==null?void 0:io.docs)==null?void 0:ao.source}}};var lo,co,uo;rt.parameters={...rt.parameters,docs:{...(lo=rt.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Custom Header</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
            <ModalHeader>
              <Flex alignItems="start" gap="3" flex="1">
                <Icon name="info" size="24" fill="icon.decorative" />
                <VStack gap="0" alignItems="flex-start">
                  <Text color="text" fontWeight="bold">
                    Release Notes
                  </Text>
                  <Text textStyle="mono.sm" color="text.muted">
                    Version 2.4.0
                  </Text>
                </VStack>
              </Flex>
            </ModalHeader>
            <ModalBody gap="4" bg="surface.sunken">
              <Text textStyle="body.sm" fontWeight="bold">
                New Features
              </Text>
              <Text>Added modal component with animated transitions.</Text>
              <Divider my="12" />
              <Text textStyle="body.sm" fontWeight="bold">
                Bug Fixes
              </Text>
              <Text>Fixed focus trap behavior in nested dialogs.</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(uo=(co=rt.parameters)==null?void 0:co.docs)==null?void 0:uo.source}}};const xi=["Default","Small","Large","XLarge","FullWidth","Mobile","NoCloseButton","PreventOverlayClose","FormDialog","ConfirmationDialog","BodyOnly","CustomHeader"];export{ot as BodyOnly,nt as ConfirmationDialog,rt as CustomHeader,Xe as Default,tt as FormDialog,Je as FullWidth,Ue as Large,Qe as Mobile,Ze as NoCloseButton,et as PreventOverlayClose,Ye as Small,Ge as XLarge,xi as __namedExportsOrder,gi as default};
