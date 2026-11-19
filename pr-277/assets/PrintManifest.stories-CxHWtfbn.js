import{j as e,V as m,T as j,B as p}from"./iframe-BYrU5jxL.js";import{p as f,f as V,c as y,a as b}from"./printFixtures-B6ed1-Cm.js";import{b as M,m as d}from"./printManifest-DjBIdjnb.js";import{C as c}from"./Code-BmdYlEDt.js";import{C as D}from"./CodeBlock-Bk-DwSJj.js";import{H as O}from"./Heading-C62MwqXf.js";import"./preload-helper-Gb_arb4r.js";import"./index-HTq8a4kC.js";import"./textStyles-2ZSPTz2W.js";import"./colors-iEBmLtns.js";import"./radii-DfM2VzUD.js";import"./IconButton-DsoX68AP.js";import"./Spinner-CtCeZkV-.js";import"./FieldContext-yyrqBIBC.js";import"./useLocale-DgTkaHOu.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-DNCob7Dz.js";const{expect:l,within:A}=__STORYBOOK_MODULE_TEST__,r=M(),u=({caption:t,headers:s,children:n})=>e.jsxs(p,{as:"table",w:"full",borderCollapse:"collapse",textStyle:"body.sm",children:[e.jsx(p,{as:"caption",textAlign:"left",pb:"8",children:e.jsx(O,{level:"h3",children:t})}),e.jsx("thead",{children:e.jsx("tr",{children:s.map(i=>e.jsx(p,{as:"th",textAlign:"left",fontWeight:"bold",px:"8",py:"6",borderBottomWidth:"2",borderBottomStyle:"solid",borderColor:"border",children:i},i))})}),e.jsx("tbody",{children:n})]}),a=({children:t})=>e.jsx(p,{as:"td",px:"8",py:"6",verticalAlign:"top",borderBottomWidth:"1",borderBottomStyle:"solid",borderColor:"border",children:t}),$=()=>e.jsx(p,{as:"span",color:"text.subtle",children:"None"}),k=({variants:t})=>{const s=Object.entries(t??{}).flatMap(([n,i])=>Object.entries(i).map(([o,I])=>({key:`${n}=${o}`,className:I})));return s.length===0?e.jsx($,{}):e.jsx(m,{alignItems:"flex-start",gap:"2",children:s.map(n=>e.jsxs(p,{children:[n.key,": ",e.jsx(c,{children:n.className})]},n.key))})},P=()=>e.jsx(u,{caption:"Root classes",headers:["Name","Class","On","Use"],children:Object.entries(r.roots).map(([t,s])=>e.jsxs("tr",{children:[e.jsx(a,{children:t}),e.jsx(a,{children:e.jsx(c,{children:s.className})}),e.jsx(a,{children:e.jsx(c,{children:`<${s.element}>`})}),e.jsx(a,{children:s.description})]},t))}),q=()=>e.jsx(u,{caption:"Recipes",headers:["Recipe","Slot","Class","Variants","Defaults","Fixtures"],children:Object.entries(r.recipes).flatMap(([t,s])=>{const n=Object.entries(s.defaultVariants).map(([i,o])=>`${i}=${o}`).join(", ")||"None";return s.kind==="recipe"?[e.jsxs("tr",{children:[e.jsx(a,{children:t}),e.jsx(a,{children:e.jsx($,{})}),e.jsx(a,{children:e.jsx(c,{children:s.className})}),e.jsx(a,{children:e.jsx(k,{variants:s.variants})}),e.jsx(a,{children:n}),e.jsx(a,{children:e.jsx(c,{children:s.fixtures})})]},t)]:Object.entries(s.slots??{}).map(([i,o])=>e.jsxs("tr",{children:[e.jsx(a,{children:t}),e.jsx(a,{children:i}),e.jsx(a,{children:e.jsx(c,{children:o.className})}),e.jsx(a,{children:e.jsx(k,{variants:o.variants})}),e.jsx(a,{children:n}),e.jsx(a,{children:e.jsx(c,{children:s.fixtures})})]},`${t}.${i}`))})}),W=()=>{const{declarations:t,literal:s,literalThermal:n}=r.pageFooter;return e.jsx(u,{caption:`Page footer (${r.pageFooter.textStyle}, ${r.pageFooter.marginBox})`,headers:["Property","With variables","Literal","Literal, thermal"],children:Object.keys(t).map(i=>e.jsxs("tr",{children:[e.jsx(a,{children:e.jsx(c,{children:i})}),e.jsx(a,{children:e.jsx(c,{children:t[i]})}),e.jsx(a,{children:e.jsx(c,{children:s[i]})}),e.jsx(a,{children:e.jsx(c,{children:n[i]})})]},i))})},re={title:"Print/Class manifest",parameters:{layout:"padded",docs:{description:{component:"The class manifest, `print-classes.json`. The Go print helper reads it to\nwrite the same classes as the print recipes. The build writes it from the\nrecipe configs and tokens, so it cannot drift from `print.css`.\n\nIt lists the two root classes for `<html>`, each print recipe with its\nslots and variant classes, the path of each recipe's fixture file, and the\npage footer declarations for the `@page` margin box."}}},tags:["autodocs"]},h={render:()=>e.jsxs(m,{alignItems:"stretch",gap:"32",maxW:"6xl",children:[e.jsxs(j,{children:["Go links ",e.jsx(c,{children:r.stylesheet})," in every kit document and reads these classes from ",e.jsx(c,{children:"print-classes.json"}),"."]}),e.jsx(P,{}),e.jsx(q,{}),e.jsx(W,{}),e.jsx(D,{title:"print-classes.json",language:"json",code:JSON.stringify(r,null,2),maxLines:24})]}),play:async({canvasElement:t})=>{const s=A(t);await l(await s.findByRole("table",{name:"Root classes"})).toBeVisible(),await l(r.roots.printDoc.className).toBe("cetec-printDoc"),await l(r.roots.thermal.className).toBe("cetec-ink-thermal"),await l(Object.keys(r.recipes)).toEqual([...f])}},_=()=>{const t=[],s=n=>{for(const i of Array.from(n))i instanceof CSSStyleRule&&t.push(i.selectorText),"cssRules"in i&&s(i.cssRules)};for(const n of Array.from(document.styleSheets))try{s(n.cssRules)}catch{}return t.join(`
`)},w=()=>V(y(f,d(r),b)),x={render:()=>{const t=w();return e.jsxs(m,{alignItems:"stretch",gap:"16",maxW:"4xl",children:[e.jsx(O,{level:"h3",children:"Fixture check"}),t.length===0?e.jsx(j,{children:"Every print recipe has a fixture, and every fixture class is in the manifest."}):e.jsx(m,{as:"ul",alignItems:"stretch",gap:"4",children:t.map(s=>e.jsx(j,{as:"li",color:"text.danger",children:s},s))}),e.jsx(u,{caption:"Fixtures",headers:["Recipe","Fixture","Use"],children:b.flatMap(s=>s.fixtures.map(n=>e.jsxs("tr",{children:[e.jsx(a,{children:s.recipe}),e.jsx(a,{children:e.jsx(c,{whiteSpace:"nowrap",children:n.name})}),e.jsx(a,{children:n.description})]},`${s.recipe}/${n.name}`)))})]})},play:async({step:t})=>{await t("Real fixtures pass",async()=>{await l(w()).toEqual([])}),await t("Every manifest class has a CSS rule",async()=>{const s=_();for(const n of d(r))await l(s).toContain(`.${n}`)}),await t("A recipe with no fixture fails",async()=>{const s=y([...f,"noFixture"],d(r),b);await l(s.missingFixtures).toEqual(["noFixture"])}),await t("A class that is not in the manifest fails",async()=>{const s={recipe:"printDoc",fixtures:[{name:"stray-class",description:"Uses a class the manifest does not list.",input:{},html:'<p class="cetec-notInManifest">Text</p>'}]},n=y(f,d(r),[s]);await l(n.unknownClasses).toEqual([{recipe:"printDoc",fixture:"stray-class",className:"cetec-notInManifest"}])})}},ce=["Manifest","FixtureCheck"];var g,C,S,F,T;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <VStack alignItems="stretch" gap="32" maxW="6xl">
      <Text>
        Go links <Code>{manifest.stylesheet}</Code> in every kit document and
        reads these classes from <Code>print-classes.json</Code>.
      </Text>
      <RootTable />
      <RecipeTable />
      <FooterTable />
      <CodeBlock title="print-classes.json" language="json" code={JSON.stringify(manifest, null, 2)} maxLines={24} />
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole('table', {
      name: 'Root classes'
    })).toBeVisible();
    await expect(manifest.roots.printDoc.className).toBe('cetec-printDoc');
    await expect(manifest.roots.thermal.className).toBe('cetec-ink-thermal');
    await expect(Object.keys(manifest.recipes)).toEqual([...printRecipeNames]);
  }
}`,...(S=(C=h.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:"The manifest as tables, then as the JSON the build writes.",...(T=(F=h.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var R,N,v,B,E;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const problems = fixtureCheck();
    return <VStack alignItems="stretch" gap="16" maxW="4xl">
        <Heading level="h3">Fixture check</Heading>
        {problems.length === 0 ? <Text>
            Every print recipe has a fixture, and every fixture class is in the
            manifest.
          </Text> : <VStack as="ul" alignItems="stretch" gap="4">
            {problems.map(problem => <Text as="li" key={problem} color="text.danger">
                {problem}
              </Text>)}
          </VStack>}
        <SpecTable caption="Fixtures" headers={['Recipe', 'Fixture', 'Use']}>
          {printFixtureFiles.flatMap(file => file.fixtures.map(fixture => <tr key={\`\${file.recipe}/\${fixture.name}\`}>
                <Cell>{file.recipe}</Cell>
                <Cell>
                  <Code whiteSpace="nowrap">{fixture.name}</Code>
                </Cell>
                <Cell>{fixture.description}</Cell>
              </tr>))}
        </SpecTable>
      </VStack>;
  },
  play: async ({
    step
  }) => {
    await step('Real fixtures pass', async () => {
      await expect(fixtureCheck()).toEqual([]);
    });
    await step('Every manifest class has a CSS rule', async () => {
      const selectors = loadedSelectors();
      for (const className of manifestClasses(manifest)) {
        await expect(selectors).toContain(\`.\${className}\`);
      }
    });
    await step('A recipe with no fixture fails', async () => {
      const check = checkPrintFixtures([...printRecipeNames, 'noFixture'], manifestClasses(manifest), printFixtureFiles);
      await expect(check.missingFixtures).toEqual(['noFixture']);
    });
    await step('A class that is not in the manifest fails', async () => {
      const stray: PrintFixtureFile = {
        recipe: 'printDoc',
        fixtures: [{
          name: 'stray-class',
          description: 'Uses a class the manifest does not list.',
          input: {},
          html: '<p class="cetec-notInManifest">Text</p>'
        }]
      };
      const check = checkPrintFixtures(printRecipeNames, manifestClasses(manifest), [stray]);
      await expect(check.unknownClasses).toEqual([{
        recipe: 'printDoc',
        fixture: 'stray-class',
        className: 'cetec-notInManifest'
      }]);
    });
  }
}`,...(v=(N=x.parameters)==null?void 0:N.docs)==null?void 0:v.source},description:{story:`The fixture check. It fails when a print recipe has no fixture, when a
fixture uses a class that is not in the manifest, or when two fixtures in
one file share a name. The build runs the same check before it writes
\`print-classes.json\`.`,...(E=(B=x.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};export{x as FixtureCheck,h as Manifest,ce as __namedExportsOrder,re as default};
