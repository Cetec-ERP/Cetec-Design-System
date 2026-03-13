import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as a}from"./index-Cq13tIdS.js";import{M as d,U as h}from"./index-BxZJlAvb.js";import{F as s,W as p,G as i,B as t}from"./Box-B-dS-qo0.js";import{T as r}from"./Text-BlqN2xhk.js";import"./Heading-EacOxlfa.js";import{D as l}from"./Divider-kYvIQ_cX.js";import"./index-BKyFwriW.js";/* empty css                     */import"./iframe-BjOg0MsO.js";import"./index-CxmYaGqE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...a(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Docs / Controlled Components Philosophy"}),`
`,e.jsx(h,{children:e.jsxs(s,{flexDirection:"column",gap:"16",children:[e.jsx(n.h1,{id:"controlled-components-philosophy",children:"Controlled Components Philosophy"}),e.jsxs(n.p,{children:["This document explains why the Cetec Design System uses ",e.jsx(n.code,{children:"controlled components"})," as the standard pattern for form inputs, including checkboxes, radios, text inputs, and other interactive elements."]}),e.jsx(r,{as:"blockquote",textStyle:"body-lg",p:"12",borderLeftWidth:"4",borderLeftColor:"slate.20",borderLeftStyle:"solid",my:"8",maxW:"prose",children:e.jsx("i",{children:'Controlled components in React are highly beneficial because they treat the React state as the "single source of truth" for form data, which provides developers with explicit control over component behavior and data flow.'})}),e.jsx(l,{my:"16"}),e.jsx(n.h2,{id:"whats-the-difference",children:"What's the Difference"}),e.jsxs(p,{gap:"24",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"controlled-component",children:"Controlled Component"}),e.jsx(n.p,{children:"Components where the parent explicitly controls the state:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Parent controls the state explicitly
const [isChecked, setIsChecked] = useState(false);

<Checkbox
  name="terms"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
`})})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"uncontrolled-component",children:"Uncontrolled Component"}),e.jsx(n.p,{children:"Components that manage their own internal state:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Component manages its own state internally
<Checkbox name="terms" onChange={handleChange} />
// User doesn't control checked state - component does
`})})]})]}),e.jsx(l,{my:"16"}),e.jsx(n.h2,{id:"why-controlled-components-for-design-systems",children:"Why Controlled Components for Design Systems"}),e.jsx(n.h3,{id:"1-predictability--debugging",children:"1. Predictability & Debugging"}),e.jsxs(i,{columns:2,gap:"24",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"controlled",children:"Controlled"}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"State is explicit and visible in parent component"}),e.jsx(t,{as:"li",listStyleType:"disc",children:`Easy to debug: "What's the checkbox state?" → Look at the state variable`}),e.jsx(t,{as:"li",listStyleType:"disc",children:"No hidden internal state"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Single source of truth"})]})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"uncontrolled",children:"Uncontrolled"}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"State hidden inside component"}),e.jsx(t,{as:"li",listStyleType:"disc",children:'Harder to debug: "Why is this checked?" → Need to inspect DOM or component internals'}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Multiple sources of truth"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Requires refs and imperative APIs"})]})]})]}),e.jsxs(t,{py:"8",px:"16",bg:"warning.lighter",color:"warning.dark",borderRadius:"4",width:"fit-content",children:[e.jsx("b",{children:"Design System Goal:"})," Components should be predictable and transparent."]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:"Example:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Controlled - clear state visibility
const [accepted, setAccepted] = useState(false);
console.log('Terms accepted:', accepted); // Always accurate

<Checkbox checked={accepted} onChange={e => setAccepted(e.target.checked)} />
`})})]}),e.jsx(l,{my:"16"}),e.jsx(n.h3,{id:"2-composability--integration",children:"2. Composability & Integration"}),e.jsx(n.p,{children:"Design systems are building blocks that integrate with:"}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"Form libraries (React Hook Form, Formik, Final Form)"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"State management (Redux, Zustand, Context API)"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"URL state synchronization"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Local storage persistence"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Real-time collaboration"})]}),e.jsxs(i,{columns:2,gap:"24",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"controlled-1",children:"Controlled"}),e.jsx(n.p,{children:"Controlled components integrate seamlessly:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// React Hook Form
const { register, watch } = useForm();
const terms = watch('terms');

<Checkbox
  {...register('terms')}
  checked={terms}
/>

// Redux
<Checkbox
  checked={termsAccepted}
  onChange={() => dispatch(toggleTerms())}
/>

// URL state sync
const [searchParams, setSearchParams] = useSearchParams();
<Checkbox
  checked={searchParams.get('filter') === 'active'}
  onChange={e => setSearchParams({ filter: e.target.checked ? 'active' : 'all' })}
/>
`})})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"uncontrolled-1",children:"Uncontrolled"}),e.jsx(n.p,{children:"Uncontrolled components fight these patterns:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Need refs and imperative APIs - messy and error-prone
const checkboxRef = useRef();
// Then manually sync state... defeats the purpose
`})})]})]}),e.jsxs(t,{py:"8",px:"16",bg:"warning.lighter",color:"warning.dark",borderRadius:"4",width:"fit-content",children:[e.jsx("b",{children:"Design System Goal:"})," Work seamlessly with the ecosystem."]}),e.jsx(l,{my:"16"}),e.jsx(n.h3,{id:"3-derived-state--validation",children:"3. Derived State & Validation"}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:"Real applications need checkbox state to derive other UI:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const [terms, setTerms] = useState(false);
const [privacy, setPrivacy] = useState(false);
const [marketing, setMarketing] = useState(false);

// Derived state is trivial with controlled components
const canSubmit = terms && privacy;
const allSelected = terms && privacy && marketing;
const someSelected = terms || privacy || marketing;

return (
  <>
    <Checkbox
      checked={terms}
      onChange={e => setTerms(e.target.checked)}
      error={!terms}
    >
      Accept terms (required)
    </Checkbox>

    <Checkbox
      checked={privacy}
      onChange={e => setPrivacy(e.target.checked)}
      error={!privacy}
    >
      Accept privacy policy (required)
    </Checkbox>

    <Checkbox
      checked={marketing}
      onChange={e => setMarketing(e.target.checked)}
    >
      Marketing emails (optional)
    </Checkbox>

    <Button disabled={!canSubmit}>Submit</Button>

    {allSelected && <Text>Thanks for accepting everything!</Text>}
  </>
);
`})})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:"With uncontrolled components:"}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"Query DOM on every state check (expensive)"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Or maintain parallel state anyway (defeats purpose)"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Can't derive state reliably"})]})]}),e.jsxs(t,{py:"8",px:"16",bg:"warning.lighter",color:"warning.dark",borderRadius:"4",width:"fit-content",children:[e.jsx("b",{children:"Design System Goal:"})," Support real-world application patterns."]}),e.jsx(l,{my:"16"}),e.jsx(n.h3,{id:"4-testing--documentation",children:"4. Testing & Documentation"}),e.jsxs(i,{columns:2,gap:"24",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"controlled-2",children:"Controlled"}),e.jsx(n.p,{children:"Controlled components are easier to test:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Set up exact state - no user interaction needed
render(
  <Checkbox
    checked={true}
    onChange={mockFn}
  />
);

// Assert on state
expect(screen.getByRole('checkbox')).toBeChecked();

// Test state changes
fireEvent.click(screen.getByRole('checkbox'));
expect(mockFn).toHaveBeenCalledWith(expect.objectContaining({
  target: expect.objectContaining({ checked: false })
}));
`})})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"uncontrolled-2",children:"Uncontrolled"}),e.jsx(n.p,{children:"Uncontrolled components require:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Must simulate user interaction
userEvent.click(screen.getByRole('checkbox'));
// Hope internal state updated correctly
// Can't set up specific states without clicking
`})})]})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:"Storybook benefits:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Controlled - can show every state combination
export const AllStates: Story = {
  render: () => (
    <>
      <Checkbox checked={false} onChange={noop} />
      <Checkbox checked={true} onChange={noop} />
      <Checkbox checked={false} indeterminate onChange={noop} />
      <Checkbox checked={true} error onChange={noop} />
      <Checkbox checked={true} disabled onChange={noop} />
    </>
  )
};
`})})]}),e.jsxs(t,{py:"8",px:"16",bg:"warning.lighter",color:"warning.dark",borderRadius:"4",width:"fit-content",children:[e.jsx("b",{children:"Design System Goal:"})," Easy to document, test, and demonstrate."]}),e.jsx(l,{my:"16"}),e.jsx(n.h3,{id:"5-react-philosophy--future",children:"5. React Philosophy & Future"}),e.jsxs(s,{flexDirection:"column",gap:"8",children:[e.jsx(n.p,{children:"React's mental model strongly favors controlled components:"}),e.jsxs(i,{columns:3,gap:"16",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"One-way data flow:"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"Props flow down"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Events flow up"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Clear, unidirectional data path"})]})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"Declarative UI:"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"UI is a function of state"}),e.jsx(t,{as:"li",listStyleType:"disc",children:e.jsx(n.code,{children:"UI = f(state)"})}),e.jsx(t,{as:"li",listStyleType:"disc",children:"State changes trigger re-renders"})]})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"React Server Components:"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"Uncontrolled components don't work in RSC patterns"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Server components can't manage client state"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Controlled pattern is future-proof"})]})]})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"From React documentation:"})}),e.jsx(r,{as:"blockquote",textStyle:"body-lg",p:"12",borderLeftWidth:"4",borderLeftColor:"slate.20",borderLeftStyle:"solid",my:"8",maxW:"prose",children:e.jsx("i",{children:'"We recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component."'})})]}),e.jsxs(t,{py:"8",px:"16",bg:"warning.lighter",color:"warning.dark",borderRadius:"4",width:"fit-content",children:[e.jsx("b",{children:"Design System Goal:"})," Align with framework best practices and future direction."]})]}),e.jsx(l,{my:"16"}),e.jsx(n.h2,{id:"when-uncontrolled-makes-sense",children:"When Uncontrolled Makes Sense"}),e.jsxs(i,{columns:2,gap:"24",alignItems:"center",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"traditional-form-submission",children:"Traditional Form Submission"}),e.jsx(n.p,{children:"If using native HTML form posts (not SPA patterns) that post directly to a server without JavaScript interaction."})]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form action="/submit" method="POST">
  <input type="checkbox" name="terms" />
  <button type="submit">Submit</button>
</form>
`})}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"quick-prototypes",children:"Quick Prototypes"}),e.jsx(n.p,{children:"When prototyping and you genuinely don't need to access the state:"})]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Throwaway code for testing
  <Checkbox name="temp" />
`})}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"legacy-codebases",children:"Legacy Codebases"}),e.jsx(n.p,{children:"When integrating with legacy systems that expect uncontrolled inputs."})]})]}),e.jsx(l,{my:"16"}),e.jsx(n.h2,{id:"the-trade-off",children:"The Trade-off"}),e.jsx(n.h3,{id:"verbosity",children:"Verbosity"}),e.jsxs(i,{columns:2,gap:"24",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"controlled-3",children:"Controlled"}),e.jsx(n.p,{children:"Controlled requires boilerplate:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />
`})})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.h4,{id:"uncontrolled-3",children:"Uncontrolled"}),e.jsx(n.p,{children:"Uncontrolled is shorter:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`<Checkbox name="terms" />
`})})]})]}),e.jsx(n.h3,{id:"but-consider",children:"But Consider"}),e.jsx(n.p,{children:"In real applications, you almost always need that state anyway for:"}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"Form validation"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Submit button enable/disable"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Conditional rendering"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Success/error messages"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Analytics tracking"})]}),e.jsx(n.p,{children:`So the "extra" boilerplate is just making explicit what you'd need regardless.`}),e.jsx(l,{my:"16"}),e.jsx(n.h2,{id:"implementation-options-considered",children:"Implementation Options Considered"}),e.jsx(n.h3,{id:"option-a-controlled-only-chosen",children:"Option A: Controlled Only (Chosen)"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type CheckboxProps = {
  checked: boolean;      // Required!
  onChange: ChangeEventHandler<HTMLInputElement>; // Required!
  name: string;
  // ...
};
`})}),e.jsxs(i,{gridTemplateColumns:"auto auto",gap:"24",w:"fit",children:[e.jsxs(s,{flexDirection:"column",w:"fit",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pros"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"Explicit contract"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"No hidden state"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Forces best practices"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Simpler component code"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Clear documentation"})]})]}),e.jsxs(s,{flexDirection:"column",w:"fit",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"Cons"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"More verbose for consumers"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Can't use without state management"})]})]})]}),e.jsx(l,{my:"16"}),e.jsx(n.h3,{id:"option-b-controlled-with-smart-defaults",children:"Option B: Controlled with Smart Defaults"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;  // Initial uncontrolled state
  onChange?: ChangeEventHandler<HTMLInputElement>;
  // ...
};

// Component manages both modes
const isControlled = checked !== undefined;
const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
const actualChecked = isControlled ? checked : internalChecked;
`})}),e.jsxs(i,{gridTemplateColumns:"auto auto",gap:"24",w:"fit",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pros"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"Supports both patterns"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Flexible for edge cases"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Better DX for simple use cases"})]})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"Cons"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"More complex component code"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Can encourage anti-patterns"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Needs careful documentation about which mode you're in"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Dual-mode bugs harder to debug"})]})]})]}),e.jsx(n.p,{children:"Verdict: ❌ Too complex, enables anti-patterns"}),e.jsx(l,{my:"16"}),e.jsx(n.h3,{id:"option-c-controlled-only--helper-hook",children:"Option C: Controlled Only + Helper Hook"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Design system exports helper
export function useCheckbox(defaultChecked = false) {
  const [checked, setChecked] = useState(defaultChecked);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return { checked, onChange };
}

// Consumer usage - still controlled but less boilerplate
const termsCheckbox = useCheckbox();
<Checkbox {...termsCheckbox} name="terms" />
`})}),e.jsxs(i,{gridTemplateColumns:"auto auto",gap:"24",w:"fit",children:[e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pros"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"Maintains controlled pattern"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Reduces boilerplate"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Encourages best practices"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Easy to extend with validation"})]})]}),e.jsxs(s,{flexDirection:"column",children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"Cons"})}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"One more concept to learn"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Still need the hook import"})]})]})]}),e.jsx(n.p,{children:"Verdict: ✅ Good future enhancement"}),e.jsx(l,{my:"16"}),e.jsx(n.h3,{id:"why-controlled-components-are-right-for-cetec",children:"Why Controlled Components Are Right for Cetec:"}),e.jsxs(t,{as:"ol",gap:"8",pl:"24",children:[e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Target audience:"})," Developers building complex enterprise ERP applications"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Integration needs:"})," Must work with forms, validation, complex state management"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Documentation:"})," Storybook already demonstrates controlled patterns"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Simplicity:"})," Simpler component internals (no dual-mode complexity)"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Standards alignment:"})," Follows React team recommendations"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Testing:"})," Easier to test and debug"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Future-proof:"})," Compatible with React Server Components"]})]}),e.jsx(n.h3,{id:"documentation-approach",children:"Documentation Approach"}),e.jsx(n.p,{children:"All controlled components should clearly document:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`/**
 * Checkbox is a controlled component.
* You must pass \`checked\` and \`onChange\` props.
*
* @example
* \`\`\`tsx
* const [checked, setChecked] = useState(false);
*
* <Checkbox
*   name="terms"
*   checked={checked}
*   onChange={(e) => setChecked(e.target.checked)}
* >
*   I accept the terms
* </Checkbox>
* \`\`\`
*/
`})}),e.jsx(l,{my:"16"}),e.jsx(n.h2,{id:"real-world-examples",children:"Real-World Examples"}),e.jsx(n.h4,{id:"simple-form",children:"Simple Form"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (consent) {
      subscribe(email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Checkbox
        checked={consent}
        onChange={e => setConsent(e.target.checked)}
      >
        I consent to receive emails
      </Checkbox>
      <Button type="submit" disabled={!consent}>
        Sign Up
      </Button>
    </form>
  );
}
`})}),e.jsx(n.h4,{id:"select-all-pattern",children:"Select All Pattern"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false },
  ]);

  const allCompleted = tasks.every(t => t.completed);
  const someCompleted = tasks.some(t => t.completed) && !allCompleted;

  const handleSelectAll = (checked) => {
    setTasks(tasks.map(t => ({ ...t, completed: checked })));
  };

  const handleToggle = (id, checked) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: checked } : t
    ));
  };

  return (
    <>
      <Checkbox
        checked={allCompleted}
        indeterminate={someCompleted}
        onChange={e => handleSelectAll(e.target.checked)}
      >
        Select All
      </Checkbox>

      {tasks.map(task => (
        <Checkbox
          key={task.id}
          checked={task.completed}
          onChange={e => handleToggle(task.id, e.target.checked)}
        >
          {task.name}
        </Checkbox>
      ))}
    </>
  );
}
`})}),e.jsx(n.h4,{id:"form-library-integration",children:"Form Library Integration"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, watch, handleSubmit } = useForm();
  const terms = watch('terms');
  const privacy = watch('privacy');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Checkbox
        {...register('terms', { required: true })}
        checked={terms}
      >
        I accept the terms
      </Checkbox>

      <Checkbox
        {...register('privacy', { required: true })}
        checked={privacy}
      >
        I accept the privacy policy
      </Checkbox>

      <Button type="submit" disabled={!terms || !privacy}>
        Register
      </Button>
    </form>
  );
}
`})}),e.jsx(l,{my:"16"}),e.jsx(n.h2,{id:"summary",children:"Summary"}),e.jsx(n.p,{children:"The controlled component pattern is the right choice for the Cetec Design System because:"}),e.jsxs(t,{as:"ol",gap:"8",pl:"24",children:[e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Predictable"}),": State is always visible and debuggable"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Composable"}),": Works seamlessly with forms, validation, state management"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Testable"}),": Easy to test all states without user simulation"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Standard"}),": Aligns with React best practices and future direction"]}),e.jsxs(t,{as:"li",listStyleType:"decimal",children:[e.jsx(n.strong,{children:"Practical"}),": Matches real-world enterprise application needs"]})]}),e.jsx(n.p,{children:"While it requires slightly more boilerplate, this explicitness leads to:"}),e.jsxs(t,{as:"ul",gap:"8",pl:"24",children:[e.jsx(t,{as:"li",listStyleType:"disc",children:"More maintainable code"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Fewer bugs"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Better developer experience over time"}),e.jsx(t,{as:"li",listStyleType:"disc",children:"Future-proof architecture"})]})]})})]})}function R(c={}){const{wrapper:n}={...a(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(o,{...c})}):o(c)}export{R as default};
