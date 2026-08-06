# Public API Exports

The package root is the canonical supported API for components, component
types, hooks, helpers, providers, and design-system utilities. Internal
component barrels organize repository code but do not define additional package
entrypoints.

## Canonical Entrypoints

`package.json` defines the supported package entrypoints:

- `cetec-design-system` for the component library and related public APIs
- `cetec-design-system/preset` for the Panda preset
- Explicit asset and stylesheet subpaths listed in `package.json`

Do not treat paths under `src/components/` or `dist/` as public package
subpaths. Adding a supported subpath requires an explicit `package.json`
`exports` entry, declaration output, documentation, and compatibility review.

`src/index.ts` is the source of truth for the main package entrypoint. A symbol
is not public merely because it is exported from a component-local file or
barrel.

## Components and Props

Every public component must be exported from `src/index.ts`. Its named `Props`
type must be exported from the same entrypoint unless the component accepts no
props.

```ts
export { Button, type ButtonProps } from './components/Button';
```

Use named exports. Do not add default component exports to the package API.

Supporting value types should be exported when consumers need them to construct
or store values independently of the component, such as `DateValue`,
`TimeValue`, or event-handler aliases. Keep implementation-only context shapes
and helper types private.

## Runtime Values Versus Types

Use `export type` only for declarations that exist exclusively in TypeScript's
type namespace.

```ts
// Correct: type-only declarations
export type { ButtonProps, DateValue } from './components/Button';

// Correct: callable runtime declaration
export { useTheme } from './system/context';
```

Never export a function, hook, provider, class, enum, or runtime constant with a
type-only export:

```ts
// Incorrect: removed from JavaScript output and cannot be called by consumers
export { type useModalContext } from './components/Modal';

// Correct
export { useModalContext } from './components/Modal/ModalContext';
```

When reviewing an export, verify both sides of the contract:

1. TypeScript consumers can resolve the declaration.
2. JavaScript consumers receive the runtime value from the built package.

## Component Barrels

Files such as `src/components/Modal/index.tsx` are internal organization
boundaries. They should normally export:

- The component or compound component parts
- The corresponding props types
- Supporting types used directly by those component exports

They should not be treated as independent package APIs. Avoid exporting hooks
and general helpers from `.tsx` component barrels because mixing non-component
runtime exports into those files triggers React Fast Refresh warnings and makes
the boundary ambiguous.

Export public hooks and helpers directly from their implementation module in
`src/index.ts`:

```ts
export { Modal, type ModalProps } from './components/Modal';
export { useModalContext } from './components/Modal/ModalContext';
```

Internal code should also import a hook or helper from its implementation module
when the component barrel does not expose it:

```ts
import { useModalContext } from '~/components/Modal/ModalContext';
```

A `.ts` barrel that intentionally represents a non-component module may export
runtime functions. The restriction is about keeping component `.tsx` barrels
focused, not banning barrel files generally.

## Hooks, Context, and Providers

Export a hook only when application consumers have a supported use case for
calling it. Document:

- The provider or component context it requires
- Its return value
- Whether it returns a fallback or throws outside the required context

Do not export raw context objects by default. Prefer a documented provider and
hook so the implementation can evolve without exposing context internals.

Provider components are runtime values and follow normal component export
rules. Their props types should be exported from the package root.

## Helpers

Export a helper only when it represents a supported consumer capability rather
than an implementation convenience.

Before adding a helper to `src/index.ts`, confirm that:

- Its inputs and return value are stable enough to support as public API.
- Its behavior is documented with source JSDoc.
- It has no dependency on private component state or undocumented data shapes.
- The same capability cannot be expressed more safely through an existing
  component or hook.

Private helpers may still be exported from an implementation file for local
testing or composition, but they must not be re-exported from `src/index.ts`.

## Documentation and Validation

Every symbol retained in `src/index.ts` must follow
`jsdoc-documentation.md`. Local development runs `npm run check:jsdoc` as a
non-blocking warning before starting the dev server. The audit verifies that
root exports resolve to documented declarations and that public
component-owned props are documented. Use `npm run check:jsdoc:strict` for an
explicit blocking audit; CI validation and builds do not block on JSDoc
coverage.

The JSDoc check does not decide whether a symbol should be public. Reviewers
must still evaluate the API boundary using this standard.

After changing exports, run:

```bash
npm run validate
npm run build
```

Inspect `dist/types/index.d.ts` and the built JavaScript when changing a runtime
export. A declaration-only success is insufficient for hooks, providers,
helpers, or constants.

## Compatibility

Treat changes to `src/index.ts` as package API changes:

- Adding an export is normally backward-compatible but commits the project to
  supporting that symbol.
- Removing or renaming an export is breaking.
- Changing a value export to type-only is breaking because JavaScript consumers
  lose the runtime binding.
- Moving implementation files without changing the root export is not a public
  API change.
- Adding a new package subpath is an API and distribution decision, not merely a
  barrel-file change.

Use the repository's release conventions when an export change is breaking.

## Review Checklist

- Is the symbol intentionally supported for package consumers?
- Is it exported from the correct `package.json` entrypoint?
- Does `src/index.ts` expose runtime values as values and types as types?
- Does every public component expose its props type?
- Are hooks and helpers exported directly from a suitable implementation
  module?
- Are component `.tsx` barrels kept focused on components and associated types?
- Is the public symbol documented according to `jsdoc-documentation.md`?
- Do both declaration and JavaScript builds contain the expected export?
- Has compatibility and release impact been considered?
