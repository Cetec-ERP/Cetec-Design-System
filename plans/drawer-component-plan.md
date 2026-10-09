# Drawer component — spec and plan

Author: Shaun Fox
Status: in progress
Date: 2026-09-28

## Goal

Add a `Drawer` to the design system: a panel that slides in from the edge of the
screen. The first consumer is the Customer Satisfaction list, where a row click
opens the case in a drawer beside the list. The drawer must also work as an
ordinary modal side panel for other screens.

## What the prototype drawer does

Measured from the Customer Satisfaction prototype (September 2026):

| Behavior      | Prototype                                                                          |
| ------------- | ---------------------------------------------------------------------------------- |
| Edge          | Right                                                                              |
| Width         | `min(1040px, 96vw)`, full height                                                   |
| Motion        | Slides in from the right, 220 ms; no motion under `prefers-reduced-motion`         |
| Scrim         | **None.** The list stays readable and clickable behind the drawer                  |
| Outside click | Does not close. A click on another row swaps the case in the open drawer           |
| Escape        | Closes                                                                             |
| Header        | Position text ("Case 3 of 24"), Previous and Next buttons, "Open full page", Close |
| Keyboard      | `.` / `j` next, `,` / `k` previous — ignored while typing in a field               |
| Body          | Case header, tabs, and a thread and a rail that each scroll on their own           |
| Full page     | The same content renders as a full page; only the header nav row differs           |

The important finding: **the prototype drawer is non-modal.** Every existing
overlay in the design system (`ModalWrapper`) is modal: scrim, focus trap,
scroll lock, close on outside click. The case list needs the opposite on all
four.

## API

One shell plus three parts, the same shape as `ModalWrapper`.

```tsx
<Drawer
  open={open}
  onOpenChange={setOpen}
  modal={false}
  size="xl"
  aria-labelledby={titleId}
>
  <DrawerHeader>
    {/* consumer content: position, prev/next, "Open full page" */}
  </DrawerHeader>
  <DrawerBody>…</DrawerBody>
  <DrawerFooter>…</DrawerFooter>
</Drawer>
```

### `Drawer` props

| Prop                             | Type                                     | Default                                     | Notes                                                                                                                                                                      |
| -------------------------------- | ---------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`                           | `boolean`                                | required                                    | Controlled, per the controlled-state standard                                                                                                                              |
| `onOpenChange`                   | `(open: boolean) => void`                | required                                    | Called by Escape, the close button and (modal only) outside press                                                                                                          |
| `modal`                          | `boolean`                                | `true`                                      | See the table below                                                                                                                                                        |
| `side`                           | `'right' \| 'left'`                      | `'right'`                                   | Bottom sheet is out of scope                                                                                                                                               |
| `size`                           | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'`                                      | Same token map as the modal recipe: `sm` = `md` (448px), `md` = `xl` (576px), `lg` = `3xl` (768px), `xl` = `5xl` (1024px, close to the prototype's 1040px), `full` = 100vw |
| `preventOutsideClose`            | `boolean`                                | `false`                                     | Modal only                                                                                                                                                                 |
| `initialFocus`                   | `number \| RefObject`                    | modal: first tabbable; non-modal: the panel | Forwarded to `FloatingFocusManager`                                                                                                                                        |
| `returnFocus`                    | `boolean \| RefObject`                   | `true`                                      | Where focus goes on close                                                                                                                                                  |
| `aria-label` / `aria-labelledby` | `string`                                 | —                                           | One is required                                                                                                                                                            |

### `modal` changes four behaviors

| Behavior      | `modal` (default)                     | `modal={false}` (case list)                      |
| ------------- | ------------------------------------- | ------------------------------------------------ |
| Scrim         | Yes, `blanket` token                  | None                                             |
| Focus         | Trapped in the drawer                 | Moves in on open; Tab can leave the drawer       |
| Page scroll   | Locked                                | Not locked; the page behind stays usable         |
| Outside press | Closes (unless `preventOutsideClose`) | Never closes                                     |
| Escape        | Closes                                | Closes, but only when focus is inside the drawer |
| ARIA          | `role="dialog"`, `aria-modal="true"`  | `role="dialog"`, no `aria-modal`                 |

Escape rule for non-modal: when focus is back on the list, Escape belongs to the
list. Otherwise one key press could close a drawer the user is not looking at.

### Parts

- **`DrawerHeader`** — fixed at the top, bottom border. Takes `title`
  (and `titleId`) for the simple case, or `children` for a custom header. Shows
  a close button unless `showCloseButton={false}`. Same contract as
  `ModalHeader`.
- **`DrawerBody`** — fills the remaining height and scrolls. Adds
  `scrollable={false}` so a consumer can manage its own scroll regions: the case
  page has a thread and a rail that scroll separately.
- **`DrawerFooter`** — optional, fixed at the bottom, top border.

## What stays in the app, not the design system

- **Previous / Next and the "Case 3 of 24" position.** The drawer does not know
  about lists. The header takes children; the app places `IconButton`s there.
- **The `,` / `.` / `j` / `k` shortcuts.** Page-level keys belong to the list
  page. A small `useListNavigationKeys` hook could come later if a second list
  needs it.
- **Swapping content on row click.** The app changes what it renders while
  `open` stays `true`. The drawer must not replay its entry motion when only the
  content changes.
- **The full-page view.** The app renders the same case content inside
  `DrawerBody` or inside a page. The drawer adds nothing for this, but its body
  must not force a layout that stops the content from working outside it.
- **Row selection styling** on the list. That is a table concern, tracked
  separately.

## Implementation

Built on the same Floating UI core as `ModalWrapper`, per the Floating UI
standard.

- `useOverlayFloating` with `strategy: 'fixed'` and no position middleware.
- `FloatingPortal` inside `DsChainPortalRoot`, as `ModalWrapper` does.
- `FloatingFocusManager` with `modal={modal}`. For non-modal: `closeOnFocusOut={false}` and `returnFocus`.
- `useDismiss(context, { outsidePress: modal && !preventOutsideClose, escapeKey: modal })`. A non-modal drawer handles Escape on its own panel, and ignores key events that bubble through React from a portalled menu outside the panel.
- `FloatingOverlay` with `lockScroll` only when `modal`.
- `FloatingLayerContext` provider, so a `Menu`, `Select` or `Tooltip` opened inside the drawer stacks above it.
- Open, closing and closed phases with `data-state`, copied from the `ModalWrapper` reducer: the component stays mounted for the exit motion. `animationend` finishes the close, with a 200 ms timeout as fallback (0 ms under reduced motion).

### Recipe: `src/recipes/drawer.ts`

Slot recipe `drawerRecipe`, class name `drawer`.

- Slots: `overlay`, `container`, `header`, `body`, `footer`.
- Variants: `side` (right, left), `size` (sm, md, lg, xl, full), `scrollable` (body only).
- Tokens only (`strictTokens`). Surface `surface.overlay`, shadow `overlay`, border `default`, scrim `blanket`.
- Below the `xs` breakpoint every size is full width.
- New keyframes in `src/styles/utilities/keyframes.ts`: `drawerSlideInRight`, `drawerSlideOutRight`, `drawerSlideInLeft`, `drawerSlideOutLeft`. Reuse `modalFadeIn` and `modalFadeOut` for the scrim.
- Reduced motion: no slide, and the phase change is immediate.
- Z-index: the panel and its scrim both sit at 1100, the same as the modal's
  position wrapper. The modal's 1101 applies only inside that wrapper, so a
  drawer panel at 1101 would cover a modal opened from it. On a tie, the later
  portal paints on top.

Registration: export from `src/recipes/recipes-slot.ts`. `src/cetec-preset.ts`
registers every export of that file as a slot recipe.

## Files

| File                                               | Change                                               |
| -------------------------------------------------- | ---------------------------------------------------- |
| `src/components/Drawer/Drawer.tsx`                 | New — shell                                          |
| `src/components/Drawer/DrawerHeader.tsx`           | New                                                  |
| `src/components/Drawer/DrawerBody.tsx`             | New                                                  |
| `src/components/Drawer/DrawerFooter.tsx`           | New                                                  |
| `src/components/Drawer/DrawerContext.tsx`          | New — `open`, `onClose`, `modal`; `useDrawerContext` |
| `src/components/Drawer/index.tsx`                  | New — barrel                                         |
| `src/components/Drawer/stories/Drawer.stories.tsx` | New                                                  |
| `src/recipes/drawer.ts`                            | New                                                  |
| `src/recipes/recipes-slot.ts`                      | Export `drawerRecipe`                                |
| `src/styles/utilities/keyframes.ts`                | Four slide keyframes                                 |
| `src/index.ts`                                     | Public exports, prop types and `useDrawerContext`    |

Every public component, prop and type gets JSDoc, per the JSDoc standard.

## Stories and tests

Stories, per the Storybook standard:

1. Modal drawer, default size, with a form in the body and a footer.
2. Non-modal drawer over a list: rows open it, a row click swaps the content, Prev/Next in the header. This mirrors the case list.
3. Each size and each side.
4. Scrolling: a long body, and a body with two regions that scroll separately.
5. A `Menu` and a `Select` inside the drawer, to prove stacking.
6. A modal opened from inside the drawer.

Interaction tests (Storybook play functions; `addon-interactions` is already
installed):

- Modal: Escape closes; outside press closes; Tab stays inside; focus returns to the trigger.
- Non-modal: outside press does not close; Tab can leave; Escape closes only with focus inside; content swap keeps the drawer open with no second entry motion.
- `addon-a11y` passes in light and dark themes.

## Plan

| Step | Work                                                                        | Output                        |
| ---- | --------------------------------------------------------------------------- | ----------------------------- |
| 1    | Agree the open questions below                                              | This spec, approved           |
| 2    | Figma: add a Drawer component to the vNext library from the prototype frame | Figma component               |
| 3    | Recipe, keyframes and preset registration                                   | Styled shell, no behavior     |
| 4    | `Drawer` shell: modal mode first, reusing the `ModalWrapper` wiring         | Modal drawer working          |
| 5    | Non-modal mode                                                              | Case-list behavior working    |
| 6    | Header, Body, Footer parts and context                                      | Full API                      |
| 7    | Stories and interaction tests                                               | Stories 1–6 passing           |
| 8    | PR `feat(minor): add Drawer component` on branch `feat/drawer-component`    | Review                        |
| 9    | Customer Satisfaction list adopts it                                        | App ticket for the build team |

Steps 3–7 are one PR. Step 9 is app work and can start against the story once
step 5 lands.

## Decisions (2026-09-28)

1. `modal` defaults to `true`. The case list opts out with `modal={false}`.
2. Copy the open/closing/closed logic from `ModalWrapper` now. Extract a shared hook in a later PR.
3. Drag to resize is deferred.
4. Code first; Figma follows.
5. Width: `xl` uses the `5xl` token (1024px). No new size token.
6. Added during the build: a non-modal drawer focuses its own panel on open. The first tabbable element is the close button, and its tooltip would otherwise open every time a row opens the drawer, and take the first Escape.
