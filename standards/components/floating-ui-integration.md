# Floating UI Integration Standard

Defines baseline integration for floating components (menus, pickers, tooltips, dialogs).

## Hard Standards

1. Interactive floating content uses `FloatingPortal` + `FloatingFocusManager`.
2. Use `useFloating` with `autoUpdate` and collision middleware (`offset`, `flip`, `shift`) as baseline.
3. Wire both refs and interactions through Floating UI (`refs.setReference`, `refs.setFloating`, `getReferenceProps`, `getFloatingProps`).

## Hard With Exceptions

Tooltip-like non-interactive floaters can skip `FloatingFocusManager`.

## Guidance

Cast getter spreads to `Record<string, unknown>` only when TypeScript inference breaks at component boundaries.

```ts
{...(getFloatingProps() as Record<string, unknown>)}
```

If inference works, prefer typed props without extra casting.
