import{j as i,V as y,G as b,X as v,B as w,k as l}from"./iframe-B6RvJOop.js";import{C as m}from"./CodeBlock-Tc60SL0t.js";import{P as k,a as x}from"./PrintPreview-C4BTcO-I.js";import{p as u,u as q}from"./usePrintPage-DkjbnZ68.js";import{d as T,e as p}from"./printFixtures-B6ed1-Cm.js";const j={letter:u.letter,a4:u.a4,legal:u.legal},d=(e,r=!1)=>{const t=T(e);return r&&!t.includes(p.thermal)?[...t,p.thermal]:t},P=(e,r=!1)=>[`<html class="${d(e,r).join(" ")}">`,"  <head>",'    <link rel="stylesheet" href="print.css" />',"  </head>","  <body>",`    ${e.html}`,"  </body>","</html>"].join(`
`),z=e=>Object.fromEntries(Object.entries(e).map(([r,t])=>[r.replace(/-([a-z])/g,(n,a)=>a.toUpperCase()),t])),B=(e,r,t="letter")=>{const{pageFooter:n}=e,a=Object.entries(n.declarations).map(([s,o])=>`    ${s}: ${o};`);return["@page {",`  size: ${t==="a4"?"A4":t};`,"  margin: 0.5in;",`  ${n.marginBox} {`,`    content: ${n.content[r]};`,...a,"  }","}"].join(`
`)},h=({fixture:e,thermal:r=!1,footer:t})=>{const{margins:n}=q(),a={paddingTop:n.top,paddingRight:n.right,paddingBottom:n.bottom,paddingLeft:n.left},s={height:n.bottom,left:n.left,right:n.right};return i.jsxs(l.div,{className:d(e,r).join(" "),"data-fixture":e.name,position:"relative",h:"full",children:[i.jsx(l.div,{"data-fixture-body":"",h:"full",style:a,dangerouslySetInnerHTML:{__html:e.html}}),t!==void 0&&i.jsx(l.div,{"data-page-footer":"",position:"absolute",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",style:s,children:t})]})},c=({fixture:e,thermal:r,footer:t,paper:n="letter",size:a,margins:s=.5,fit:o="page",h:g="3xl",label:f})=>i.jsx(w,{h:g,children:i.jsx(k,{fit:o,"aria-label":f??e.name,children:i.jsx(x,{size:a??j[n],margins:s,children:i.jsx(h,{fixture:e,thermal:r,footer:t})})})}),G=({recipe:e,...r})=>{const{fixture:t,thermal:n}=r;return i.jsxs(y,{alignItems:"stretch",gap:"0",children:[i.jsx(c,{...r}),i.jsxs(b,{columns:{base:1,lg:3},gap:"16",px:"24",py:"16",children:[i.jsx(m,{title:`${e}/${t.name} input`,language:"json",code:JSON.stringify(t.input,null,2)}),i.jsx(v,{colSpan:{base:1,lg:2},children:i.jsx(m,{title:"HTML the Go helper writes",language:"html",wrap:!0,code:P(t,n)})})]})]})};h.__docgenInfo={description:"Renders a fixture's HTML as the Go print helper writes it. The outer `div`\nstands in for `<html>` and carries the fixture's root classes. The inner\n`div` stands in for `<body>`. Go writes no class or style on `<body>`, so\nthe stand-in carries none either. It is the root's first child, as `<body>`\nis, so it takes the same `printDoc` rules: the body text style and the\nspace between top-level blocks. It pads to the page margins, as `@page`\nmargins do in print. Both are plain elements with no design-system recipe,\nso only the fixture's classes style the markup.",methods:[],displayName:"PrintFixtureMarkup",props:{fixture:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** A short name, unique in its file, such as \`thermal-ink\`. */
  name: string;
  /** What the fixture shows. */
  description: string;
  /** The kit element input, as the template gives it to the Go helper. */
  input: Record<string, unknown>;
  /**
   * Classes on the \`<html>\` element. Leave unset for \`cetec-printDoc\` alone.
   */
  root?: string[];
  /** The HTML the Go helper writes inside \`<body>\`. */
  html: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"A short name, unique in its file, such as `thermal-ink`."},{key:"description",value:{name:"string",required:!0},description:"What the fixture shows."},{key:"input",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!0},description:"The kit element input, as the template gives it to the Go helper."},{key:"root",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"Classes on the `<html>` element. Leave unset for `cetec-printDoc` alone."},{key:"html",value:{name:"string",required:!0},description:"The HTML the Go helper writes inside `<body>`."}]}},description:"The fixture to render."},thermal:{required:!1,tsType:{name:"boolean"},description:"Adds `cetec-ink-thermal` to the root when the fixture does not have it.",defaultValue:{value:"false",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"Content for the bottom page margin, such as a page footer. It stands in\nfor an `@page` margin box, so it sits inside the root and reads its\ncustom properties."}}};c.__docgenInfo={description:`A fixture on a page inside a print preview. For stories only. Every print
story renders through it, so the story shows the markup Go writes.`,methods:[],displayName:"PrintFixtureView",props:{fixture:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** A short name, unique in its file, such as \`thermal-ink\`. */
  name: string;
  /** What the fixture shows. */
  description: string;
  /** The kit element input, as the template gives it to the Go helper. */
  input: Record<string, unknown>;
  /**
   * Classes on the \`<html>\` element. Leave unset for \`cetec-printDoc\` alone.
   */
  root?: string[];
  /** The HTML the Go helper writes inside \`<body>\`. */
  html: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"A short name, unique in its file, such as `thermal-ink`."},{key:"description",value:{name:"string",required:!0},description:"What the fixture shows."},{key:"input",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!0},description:"The kit element input, as the template gives it to the Go helper."},{key:"root",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"Classes on the `<html>` element. Leave unset for `cetec-printDoc` alone."},{key:"html",value:{name:"string",required:!0},description:"The HTML the Go helper writes inside `<body>`."}]}},description:"The fixture to render."},thermal:{required:!1,tsType:{name:"boolean"},description:"Adds `cetec-ink-thermal` to the root when the fixture does not have it."},footer:{required:!1,tsType:{name:"ReactNode"},description:"Content for the bottom page margin, such as a page footer. It stands in\nfor an `@page` margin box, so it sits inside the root and reads its\ncustom properties."},paper:{required:!1,tsType:{name:"union",raw:"keyof typeof paperSizes",elements:[{name:"literal",value:"letter"},{name:"literal",value:"a4"},{name:"literal",value:"legal"}]},description:'@default "letter"',defaultValue:{value:"'letter'",computed:!1}},size:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  /** Page width in `unit`. */\n  width: number;\n  /** Page height in `unit`. */\n  height: number;\n  /** Unit for `width`, `height`, and the page margins. */\n  unit: PageUnit;\n}",signature:{properties:[{key:"width",value:{name:"number",required:!0},description:"Page width in `unit`."},{key:"height",value:{name:"number",required:!0},description:"Page height in `unit`."},{key:"unit",value:{name:"union",raw:"'in' | 'mm' | 'pt'",elements:[{name:"literal",value:"'in'"},{name:"literal",value:"'mm'"},{name:"literal",value:"'pt'"}],required:!0},description:"Unit for `width`, `height`, and the page margins."}]}},description:"A page size that overrides `paper`, such as a label stock."},margins:{required:!1,tsType:{name:"union",raw:`| number
| {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }`,elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  top: number;
  right: number;
  bottom: number;
  left: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}}]},description:"@default 0.5",defaultValue:{value:"0.5",computed:!1}},fit:{required:!1,tsType:{name:"union",raw:"'page' | 'width' | number",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'width'"},{name:"number"}]},description:'@default "page"',defaultValue:{value:"'page'",computed:!1}},h:{required:!1,tsType:{name:"BoxProps['h']",raw:"BoxProps['h']"},description:'@default "3xl"',defaultValue:{value:"'3xl'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible name of the preview. Defaults to the fixture name."}}};G.__docgenInfo={description:`A fixture as a spec: its page, then the input and the document the Go
print helper writes for it. For stories only.`,methods:[],displayName:"PrintFixtureSpec",props:{fixture:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** A short name, unique in its file, such as \`thermal-ink\`. */
  name: string;
  /** What the fixture shows. */
  description: string;
  /** The kit element input, as the template gives it to the Go helper. */
  input: Record<string, unknown>;
  /**
   * Classes on the \`<html>\` element. Leave unset for \`cetec-printDoc\` alone.
   */
  root?: string[];
  /** The HTML the Go helper writes inside \`<body>\`. */
  html: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"A short name, unique in its file, such as `thermal-ink`."},{key:"description",value:{name:"string",required:!0},description:"What the fixture shows."},{key:"input",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!0},description:"The kit element input, as the template gives it to the Go helper."},{key:"root",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"Classes on the `<html>` element. Leave unset for `cetec-printDoc` alone."},{key:"html",value:{name:"string",required:!0},description:"The HTML the Go helper writes inside `<body>`."}]}},description:"The fixture to render."},thermal:{required:!1,tsType:{name:"boolean"},description:"Adds `cetec-ink-thermal` to the root when the fixture does not have it."},footer:{required:!1,tsType:{name:"ReactNode"},description:"Content for the bottom page margin, such as a page footer. It stands in\nfor an `@page` margin box, so it sits inside the root and reads its\ncustom properties."},paper:{required:!1,tsType:{name:"union",raw:"keyof typeof paperSizes",elements:[{name:"literal",value:"letter"},{name:"literal",value:"a4"},{name:"literal",value:"legal"}]},description:'@default "letter"'},size:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  /** Page width in `unit`. */\n  width: number;\n  /** Page height in `unit`. */\n  height: number;\n  /** Unit for `width`, `height`, and the page margins. */\n  unit: PageUnit;\n}",signature:{properties:[{key:"width",value:{name:"number",required:!0},description:"Page width in `unit`."},{key:"height",value:{name:"number",required:!0},description:"Page height in `unit`."},{key:"unit",value:{name:"union",raw:"'in' | 'mm' | 'pt'",elements:[{name:"literal",value:"'in'"},{name:"literal",value:"'mm'"},{name:"literal",value:"'pt'"}],required:!0},description:"Unit for `width`, `height`, and the page margins."}]}},description:"A page size that overrides `paper`, such as a label stock."},margins:{required:!1,tsType:{name:"union",raw:`| number
| {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }`,elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  top: number;
  right: number;
  bottom: number;
  left: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}}]},description:"@default 0.5"},fit:{required:!1,tsType:{name:"union",raw:"'page' | 'width' | number",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'width'"},{name:"number"}]},description:'@default "page"'},h:{required:!1,tsType:{name:"BoxProps['h']",raw:"BoxProps['h']"},description:'@default "3xl"'},label:{required:!1,tsType:{name:"string"},description:"Accessible name of the preview. Defaults to the fixture name."},recipe:{required:!0,tsType:{name:"string"},description:"The print recipe the fixture belongs to."}}};export{G as P,c as a,z as d,B as p};
