# Controlled Components in Design Systems

## Overview

This document explains why the Cetec Design System uses **controlled components** as the standard pattern for form inputs, including checkboxes, radios, text inputs, and other interactive elements.

## What's the Difference?

### Uncontrolled Component

Components that manage their own internal state:

```typescript
// Component manages its own state internally
<Checkbox name="terms" onChange={handleChange} />
// User doesn't control checked state - component does
```

### Controlled Component

Components where the parent explicitly controls the state:

```typescript
// Parent controls the state explicitly
const [isChecked, setIsChecked] = useState(false);

<Checkbox
  name="terms"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

---

## Why Controlled Components for Design Systems

### 1. Predictability & Debugging

**Controlled:**
- State is explicit and visible in parent component
- Easy to debug: "What's the checkbox state?" → Look at the state variable
- No hidden internal state
- Single source of truth

**Uncontrolled:**
- State hidden inside component
- Harder to debug: "Why is this checked?" → Need to inspect DOM or component internals
- Multiple sources of truth
- Requires refs and imperative APIs

**Design System Goal:** Components should be predictable and transparent.

**Example:**
```typescript
// Controlled - clear state visibility
const [accepted, setAccepted] = useState(false);
console.log('Terms accepted:', accepted); // Always accurate

<Checkbox checked={accepted} onChange={e => setAccepted(e.target.checked)} />
```

---

### 2. Composability & Integration

Design systems are building blocks that integrate with:
- Form libraries (React Hook Form, Formik, Final Form)
- State management (Redux, Zustand, Context API)
- URL state synchronization
- Local storage persistence
- Real-time collaboration

**Controlled components integrate seamlessly:**

```typescript
// React Hook Form
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
```

**Uncontrolled components fight these patterns:**
```typescript
// Need refs and imperative APIs - messy and error-prone
const checkboxRef = useRef();
// Then manually sync state... defeats the purpose
```

**Design System Goal:** Work seamlessly with the ecosystem.

---

### 3. Derived State & Validation

Real applications need checkbox state to derive other UI:

```typescript
const [terms, setTerms] = useState(false);
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
```

With uncontrolled components:
- Query DOM on every state check (expensive)
- Or maintain parallel state anyway (defeats purpose)
- Can't derive state reliably

**Design System Goal:** Support real-world application patterns.

---

### 4. Testing & Documentation

**Controlled components are easier to test:**

```typescript
// Set up exact state - no user interaction needed
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
```

**Uncontrolled components require:**

```typescript
// Must simulate user interaction
userEvent.click(screen.getByRole('checkbox'));
// Hope internal state updated correctly
// Can't set up specific states without clicking
```

**Storybook benefits:**

```typescript
// Controlled - can show every state combination
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
```

**Design System Goal:** Easy to document, test, and demonstrate.

---

### 5. React Philosophy & Future

React's mental model strongly favors controlled components:

**One-way data flow:**
- Props flow down
- Events flow up
- Clear, unidirectional data path

**Declarative UI:**
- UI is a function of state
- `UI = f(state)`
- State changes trigger re-renders

**React Server Components:**
- Uncontrolled components don't work in RSC patterns
- Server components can't manage client state
- Controlled pattern is future-proof

**From React documentation:**
> "We recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component."

**Design System Goal:** Align with framework best practices and future direction.

---

## When Uncontrolled Makes Sense

### Traditional Form Submission

If using native HTML form posts (not SPA patterns):

```html
<form action="/submit" method="POST">
  <input type="checkbox" name="terms" />
  <button type="submit">Submit</button>
</form>
```

For simple forms that post directly to a server without JavaScript interaction.

### Quick Prototypes

When prototyping and you genuinely don't need to access the state:

```typescript
// Throwaway code for testing
<Checkbox name="temp" />
```

### Legacy Codebases

When integrating with legacy systems that expect uncontrolled inputs.

---

## The Trade-off

### Verbosity

**Uncontrolled is shorter:**
```typescript
<Checkbox name="terms" />
```

**Controlled requires boilerplate:**
```typescript
const [checked, setChecked] = useState(false);
<Checkbox
  checked={checked}
  onChange={e => setChecked(e.target.checked)}
/>
```

### But Consider:

In real applications, you almost always need that state anyway for:
- Form validation
- Submit button enable/disable
- Conditional rendering
- Success/error messages
- Analytics tracking

So the "extra" boilerplate is just making explicit what you'd need regardless.

---

## Implementation Options Considered

### Option A: Controlled Only (Chosen)

```typescript
type CheckboxProps = {
  checked: boolean;      // Required!
  onChange: ChangeEventHandler<HTMLInputElement>; // Required!
  name: string;
  // ...
};
```

**Pros:**
- Explicit contract
- No hidden state
- Forces best practices
- Simpler component code
- Clear documentation

**Cons:**
- More verbose for consumers
- Can't use without state management

**Verdict:** ✅ **Selected for Cetec Design System**

---

### Option B: Controlled with Smart Defaults

```typescript
type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;  // Initial uncontrolled state
  onChange?: ChangeEventHandler<HTMLInputElement>;
  // ...
};

// Component manages both modes
const isControlled = checked !== undefined;
const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
const actualChecked = isControlled ? checked : internalChecked;
```

**Pros:**
- Supports both patterns
- Flexible for edge cases
- Better DX for simple use cases

**Cons:**
- More complex component code
- Can encourage anti-patterns
- Needs careful documentation about which mode you're in
- Dual-mode bugs harder to debug

**Verdict:** ❌ Too complex, enables anti-patterns

---

### Option C: Controlled Only + Helper Hook

```typescript
// Design system exports helper
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
```

**Pros:**
- Maintains controlled pattern
- Reduces boilerplate
- Encourages best practices
- Easy to extend with validation

**Cons:**
- One more concept to learn
- Still need the hook import

**Verdict:** ✅ Good future enhancement

---

## Recommendation for Cetec Design System

**Use Option A: Controlled Only**

### Why This Is Right for Cetec:

1. ✅ **Target audience:** Developers building complex enterprise ERP applications
2. ✅ **Integration needs:** Must work with forms, validation, complex state management
3. ✅ **Documentation:** Storybook already demonstrates controlled patterns
4. ✅ **Simplicity:** Simpler component internals (no dual-mode complexity)
5. ✅ **Standards alignment:** Follows React team recommendations
6. ✅ **Testing:** Easier to test and debug
7. ✅ **Future-proof:** Compatible with React Server Components

### Documentation Approach

All controlled components should clearly document:

```typescript
/**
 * Checkbox is a controlled component.
 * You must pass `checked` and `onChange` props.
 *
 * @example
 * ```tsx
 * const [checked, setChecked] = useState(false);
 *
 * <Checkbox
 *   name="terms"
 *   checked={checked}
 *   onChange={(e) => setChecked(e.target.checked)}
 * >
 *   I accept the terms
 * </Checkbox>
 * ```
 */
```

---

## Real-World Examples

### Simple Form

```typescript
function NewsletterSignup() {
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
```

### Select All Pattern

```typescript
function TaskList() {
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
```

### Form Library Integration

```typescript
import { useForm } from 'react-hook-form';

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
```

---

## Summary

The controlled component pattern is the right choice for the Cetec Design System because:

1. **Predictable**: State is always visible and debuggable
2. **Composable**: Works seamlessly with forms, validation, state management
3. **Testable**: Easy to test all states without user simulation
4. **Standard**: Aligns with React best practices and future direction
5. **Practical**: Matches real-world enterprise application needs

While it requires slightly more boilerplate, this explicitness leads to:
- More maintainable code
- Fewer bugs
- Better developer experience over time
- Future-proof architecture

---

**Last Updated:** 2025-01-12
**Author:** Cetec Design System Team
