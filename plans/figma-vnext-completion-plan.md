# Figma vNext — Completion Plan

Written 2026-09-09. **Supersedes `plans/figma-vnext-migration-plan.md`**
(branch `figma-mcp`, last touched 2026-04-07). Delete that file when this
one merges.

Scope: **the vNext libraries themselves.** Consumer instance updates are out
of scope.

## The four files

| Library                | File key                 | Modified   |
| ---------------------- | ------------------------ | ---------- |
| Cetec Components       | `ZIKwQGwbWwxUQ0MEodl5vi` | 2026-06-30 |
| Cetec Components vNext | `NA0dSkyUJ4MNPEP8OBSZw6` | 2026-09-08 |
| Cetec Tokens           | `kc0YZMvEeayxJ3CiZJQm46` | 2026-07-07 |
| Cetec Tokens vNext     | `juNQJElDeyrQXx3XXEPQZS` | 2026-09-01 |

vNext components: 678 components, 23 component sets, 26 pages.
Old components: 630 components, 19 sets, 35 pages.
Icons: 311 → 317, **zero removals**.

## Measured page state — six pages are empty

Verified 2026-09-09 by child count over the REST API.

| Page            | Children | State                                                                                                                                                       |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Autocomplete`  | 0        | **Empty**                                                                                                                                                   |
| `Avatar`        | 0        | **Empty**                                                                                                                                                   |
| `Breadcrumbs`   | 0        | **Empty**                                                                                                                                                   |
| `Kbd`           | 0        | **Empty**                                                                                                                                                   |
| `Skeleton`      | 0        | **Empty**                                                                                                                                                   |
| `Tooltip`       | 0        | **Empty**                                                                                                                                                   |
| `FormField`     | 11       | **Partial.** Has `Label`, `Help text`, a `FormField` set and 2 loose components, plus pasted code and two screenshots — working notes, not a finished page. |
| `Select`        | 2        | Set exists plus one stray `Frame 816`. Needs a finishing pass.                                                                                              |
| `Textarea`      | 1        | Thin, but a real set.                                                                                                                                       |
| Everything else | 2–118    | Built. `Icon` 118, `Date+Time` 69, `Menu/List` 36, `Card` 15, `TextInput` 12, `Chip` 9.                                                                     |

So the library is **18 real pages, not 26**. That is the honest baseline.

## Typography is styles, not components

Confirmed in `Cetec Tokens vNext`: **16 text styles**, all four families ×
four sizes — `Body/`, `Heading/`, `Display/`, `Mono/` × `xs sm md lg`.
`Body/*` carry `Code: body.<size>` descriptions.

`Text` and `Heading` are therefore **not** to be built as components. The
code's semantic `fontSizes` layer is fully covered.

The old tokens file also had `Utility/Button text/14` and `/16`. Dropped in
vNext. Intentional.

## Component work remaining

| #   | Item              | Kind             | Source of truth                                                                                                                                             |
| --- | ----------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `Avatar`          | Empty page       | `src/components/Avatar`                                                                                                                                     |
| 2   | `Kbd`             | Empty page       | `src/components/Kbd`, `src/recipes/kbd.ts`                                                                                                                  |
| 3   | `Skeleton`        | Empty page       | `src/recipes/skeleton.ts`                                                                                                                                   |
| 4   | `Tooltip`         | Empty page       | `src/recipes/tooltip.ts`                                                                                                                                    |
| 5   | `Breadcrumbs`     | Empty page       | `src/recipes/breadcrumbs.ts`                                                                                                                                |
| 6   | `FormField`       | Partial          | `src/recipes/formField.ts`; clear the pasted code and screenshots when done                                                                                 |
| 7   | `Select`          | Finish           | `src/recipes/select.ts`; remove `Frame 816`                                                                                                                 |
| 8   | `Autocomplete`    | Empty page       | `src/recipes/autocomplete.ts`. Do last of the input group — it composes `Select`, `Menu/List` and `Chip`.                                                   |
| 9   | `Link`            | No page          | `src/components/Link`                                                                                                                                       |
| 10  | `SegmentedInputs` | No page          | `src/recipes/segmentedInputs.ts`, `segmentedFields.ts`. ⚠️ **Not public in code right now** — model it as an internal composition helper, not a public API. |
| 11  | `Tabs`            | No page, no code | **Design first**, then a separate code issue.                                                                                                               |
| 12  | `Alerts`          | No page, no code | **Design first**, then a separate code issue.                                                                                                               |

Deliberately not built: `Text`, `Heading` (text styles), `IconButton`
(rolled into the `Button` set), `Box`, `Code`.
Out of scope, dev-only: `BreakpointIndicator`, `DsChainScope`,
`ThemeSwitcher`.

## Component-level variables — the pattern to maintain

**This is deliberate architecture, not an implementation detail. Every new
component follows it.**

vNext pushes size, interaction state, theme and density into **variable
modes** instead of Figma variants. A property only becomes a variant if it is
real public API surface. Everything a mode can express, a mode expresses.

### The four collections in `Cetec Components vNext`

| Collection           | Modes                                | Variables | Components covered                                         |
| -------------------- | ------------------------------------ | --------- | ---------------------------------------------------------- |
| `Component / Colors` | `Light`, `Dark`                      | 100       | Tag 68, Badge 16, List 9, TextInput 7                      |
| `Component / Layout` | `sm`, `md`, `lg`, `xl`               | 39        | Button 11, Chip 11, TextInput 10, Badge 5, Slots 1, List 1 |
| `Component / State`  | `Default`, `Hovered`, `Pressed`      | 40        | Button 32, Chip 8                                          |
| `List / Density`     | `Comfortable`, `Compact`, `Spacious` | 21        | List 21                                                    |

### Naming conventions, observed

- **State**: `<Component>/<variant>/<property>` where property is one of
  `bg`, `border`, `color`, `icon`.
  Example: `Button/primary/bg`, `Button/selected-bold/border`,
  `Chip/default/icon`.
- **Layout**: `<Component>/<Property>` in sentence case.
  Example: `Button/Main PX`, `Button/Main-slot-side-P`, `Button/Min size`,
  `Button/Radius`, `Button/Gap`, `Button/Font size`, `Button/Line height`.
- **Shared**: `Slots/Slot size`, `List/slot-wrapper-size` — cross-component
  values live under their own key, not duplicated per component.

### What it bought

|                     | Old `_Z-DEPRECATED-Button` | New `Button`     |
| ------------------- | -------------------------- | ---------------- |
| Variants in the set | **816**                    | **96**           |
| Sizes               | separate variants          | 4 variable modes |
| Hover / pressed     | separate variants          | 3 variable modes |
| Light / dark        | separate variants          | 2 variable modes |

96 variants × 4 sizes × 3 states × 2 themes = 2,304 rendered permutations
from 96 maintained objects. That is an 8.5× reduction in objects while
covering more cases.

The same consolidation shows elsewhere: `MenuItem` went from a 48-variant
set to being folded into `Menu/List`; `Spinner` went 8 → 2.

### The rule for every remaining component

1. Decide what is genuinely public API. That becomes a Figma variant.
2. Size, interaction state, theme and density become **variable modes**, never
   variants.
3. Add the component's entries to the matching collection using the naming
   above. Reuse `Slots/Slot size` rather than inventing a per-component twin.
4. Component-level variables alias **semantic** tokens from
   `Cetec Tokens vNext`. Never raw values, never primitives directly.

### Coverage gap

Only `Button`, `Chip`, `TextInput`, `Badge`, `Tag` and `List` have
component-level variables today. Every item in the build list below needs its
own entries created as part of building it — that is not optional follow-up
work.

## Token gap — measured

Source: variables export of 2026-09-09 (`Primitives`, `Semantics` with
Light/Dark, `Line Heights` with 4 modes) diffed against the 1,263
`--cetec-*` custom properties in `dist/styles.css`.

After removing Panda internals (`colors.colorPalette`, the `numeric.*`
mirror of `sizes`, `base-font-size`, `inherit`, `current`): **875 real code
tokens, 718 Figma variables.**

### Add these — 69 genuine gaps

**Status 2026-09-10: 62 added, 1 corrected, 6 dropped.** See "Token pass" below.

| Group                    | Count | Tokens                                                                            |
| ------------------------ | ----- | --------------------------------------------------------------------------------- |
| `colors.bg.slate.*`      | 16    | `0 1 2 3 4 5 10 20 30 40 50 60 70 80 90 100`                                      |
| `colors.slate_inverse.*` | 16    | same ramp                                                                         |
| `sizes`                  | 20    | `2xs xs sm md lg xl 2xl 3xl 4xl 5xl 6xl 7xl 8xl auto fit full half max min prose` |
| `spacing`                | 8     | `18 auto fit full half max min prose`                                             |
| `zIndex`                 | 8     | `base raised elevated overlay modal modal-floating tooltip 1102`                  |
| `radii`                  | 1     | `100`                                                                             |

### Do NOT add — retiring in code

`colors.{error,info,success,warning}.{default,light,lighter,dark,darker}`
(20) and `colors.utility.*` (4).

**These ramps are being retired from the codebase.** vNext already expresses
them as `bg-danger` / `bg-success` / `bg-warning` / `bg-info` with
`-subtle` / `-bold` / `-hovered` / `-pressed`. Do not backfill them into
Figma. When they leave the code, this line becomes a no-op.

### Already covered — do not treat as gaps

- **Text scale.** `fontSizes.{body,heading,display,mono}.*` (16),
  `fontVariant.*` (8), `letterSpacings.*` (6), named `lineHeights` (4) are
  all baked into the 16 text styles.
- **Shadows.** `shadows.{elevated,overflow,overlay,raised,zero}` exist as
  effect styles `Shadow/Elevated`, `Shadow/Overflow`, `Shadow/Overlay`,
  `Shadow/Raised`, `Shadow/Zero` in **both** tokens files. The `-base` twins
  in code are Panda internals.
- **Line height modes.** The four extra Figma line-height values are the
  mode system, not surplus tokens.

### No Figma variable type exists

`borders.*` (11 composite shorthands), `blurs` (7), `aspectRatios` (6),
`animations` (5), `easings` (5). Record the decision so it is not re-raised.

## Effect styles in the components file

`Cetec Components vNext` carries four of its own: `Button focus`,
`Input focus`, `Input error focus`, `Toggle focus`.
The old components file had five, all named `Utility/*`, including two
`– Dark` variants. The `– Dark` pair is correctly gone if dark is a variable
mode. Confirm all four resolve in both modes.

## Plan

### Phase 1 — record decisions

1. Write the **component-level variable pattern** into
   `standards/figma/figma-component-token-policy.md` as a required rule, with
   the `Button` 816 → 96 comparison as the worked example.
2. Also write into that file:
   `IconButton` is part of `Button`; `Text` and `Heading` are text styles,
   not components; `Box` and `Code` are out; the status-color ramps are
   retiring in code and must not be added to Figma; `borders`, `blurs`,
   `aspectRatios`, `animations`, `easings` have no Figma variable type.

### Phase 2 — tokens

3. Add the 69 tokens in the table above.
4. Confirm the four effect styles in the components file resolve in light
   and dark.

### Phase 3 — build, in this order

Simple leaves first, composites last.

5. ✅ **DONE 2026-09-09** — `Avatar`, `Kbd`, `Skeleton`. Zero unbound paints
   across all five new sets. See "Built 2026-09-09" below.
6. ✅ **DONE 2026-09-09** — `Tooltip`, `Breadcrumbs`.
7. ✅ **DONE 2026-09-09** — `FormField`.
8. ✅ **DONE 2026-09-09** — `Select`.
9. ✅ **DONE 2026-09-09** — `Autocomplete`.
10. ✅ **DONE 2026-09-09** — `Link`.
11. ✅ **DONE 2026-09-09** — `SegmentedInputs`.
12. ✅ **DESIGNED 2026-09-09** — `Tabs`. Code issue still to open.
13. ✅ **DONE 2026-09-09** — `Alerts`. Proposal approved and componentised.

All follow `standards/figma/figma-layout-standards.md` and
`figma-component-token-policy.md`: variables not raw values, auto layout,
slot anatomy preserved, properties named from the code contract where one
exists.

**And all follow the component-level variable pattern above.** Each item
above is not done until its entries exist in `Component / Colors`,
`Component / Layout` and `Component / State` as applicable. A component built
with size or state as Figma variants is not finished — it is a regression to
the 816-variant model.

### Phase 4 — conventions check

14. Confirm every vNext set follows the three conventions the library
    already adopted: `Icon` → `Slot`, `Disabled` boolean → `State` enum,
    variant values lowercase.

### Phase 5 — governance

15. Merge branch `figma-mcp` so the two standards docs land on the default
    branch. Delete `plans/figma-vnext-migration-plan.md` in that merge.
16. Mark old-library assets deprecated in their descriptions.
17. Set a dated retirement for `Cetec Components` and `Cetec Tokens`.

## Built 2026-09-09

### Kbd — page `260:3057`

- `Kbd/Key` component set, `Type=Default | Symbol` (10px / 12px per the recipe).
  TEXT property `Label`. Bound to `sizes/16`, `spacing/4`, `spacing/1`,
  `colors/bg/neutral`, `colors/text/subtle`, `fontSizes/10`, `fontSizes/12`,
  `fonts/mono`. Font resolves to Recursive Mono Linear Bold, uppercase.
- `Kbd` component — the `kbdGroup` slot. Gap bound to `spacing/2`, hugs
  contents. ⌘ glyph confirmed to render in Recursive.

### Skeleton — page `260:3059`

- `Skeleton` component set, `Variant=text | circular | rounded | rectangular`.
  Bound to `colors/bg/neutral/hovered`, `radii/4`, `radii/999`, `sizes/24`.
- Not modelled, and stated in the component description: `animation`
  (pulse | wave | none) has no static Figma form; `hasChildren` / `fitContent` /
  `heightAuto` are layout behaviours. `variant=text` is built as the 24px
  layout box it occupies — code paints it through `transform: scale(1, 0.6)`,
  so `text` and `rounded` look identical here by design.

### Avatar — page `260:3054`

Three component sets and four new component variables.

- `Avatar` set — `Shape=circle | square | hexagon`. Three variants, not 360.
  Properties: `Initials` (TEXT), `Show presence` (BOOLEAN),
  `Show status` (BOOLEAN), `Presence` (INSTANCE_SWAP), `Status` (INSTANCE_SWAP).
- `Avatar/Presence` set — `Type=online | busy | offline | focus`.
- `Avatar/Status` set — `Type=approved | declined | locked`, each carrying the
  code's icon (`check`, `x`, `lock`) filled with `colors/icon/inverse`.
- New in `Component / Layout` (aliasing primitives across sm/md/lg/xl, matching
  the TextInput/Button convention): `Avatar/Size`,
  `Avatar/Fallback font size`, `Avatar/Presence size`, `Avatar/Status size`.
- Hexagon is a 6-point `POLYGON`; Figma cannot express the recipe's `clip-path`.
  Apply image fills to the `Body` polygon.
- Indicators sit in full-bleed auto-layout **anchor frames**, not on
  constraints. Constraints resolve before a mode-bound size applies and left
  the dot overhanging by 2px at `xl`. ⚠️ **Use anchor frames for any
  variable-sized child that must stay flush to an edge.**
- Indicator strokes are `INSIDE` — Panda is border-box.

### Tooltip — page `260:3063`

- `Tooltip` component set, **8 variants**: `Placement=top | right | bottom |
left` × `Has title=false | true`. Properties: `Title` (TEXT), `Text` (TEXT),
  `Caret` (BOOLEAN, default true).
- ⚠️ **The caret is in `src/components/Tooltip/Tooltip.tsx`, not in the
  recipe.** `caret?: boolean` defaults to **true**, and `placement` comes from
  floating-ui. Reading only `src/recipes/tooltip.ts` misses it. **Read the
  component file as well as the recipe for every remaining item.**
- Caret geometry matches floating-ui's `FloatingArrow` defaults: 14×7, sharp
  tip (`tipRadius: 0`), filled with the same `colors/bg/neutral/inverse` as the
  body. Verified 14×7 on vertical placements and 7×14 on horizontal.
- `Placement` names where the tooltip sits relative to its trigger, matching
  the code prop — so `Placement=bottom` puts the caret on the **top** edge.
- The 12 floating-ui placements collapse to 4 variants. The `-start` / `-end`
  suffixes only slide the caret along the same edge; nudge it by hand rather
  than tripling the variant count.
- **Caret and content are stacked by auto-layout, not absolute positioning.**
  The root is a transparent auto-layout whose direction and child order follow
  the placement. `Caret=false` collapses it out of the layout — measured
  47px → 40px, exactly the 7px caret.
- Size is a variable mode. New in `Component / Layout`: `Tooltip/PY`,
  `Tooltip/PX`, `Tooltip/Font size`, `Tooltip/Line height`. The recipe has no
  `xl`, so the `xl` mode mirrors `lg`.
- Bound to `colors/bg/neutral/inverse`, `colors/text/inverse`,
  `colors/text/inverse/subtlest`, `radii/4`, `sizes/240` (max width),
  `fonts/body`, plus the `Shadow/Elevated` effect style from the tokens library.
- ⚠️ **The component sets an explicit `Line Heights` mode of `Tight`**, because
  the recipe asks for `lineHeight: 'tight'`. `Tooltip/Line height` aliases the
  Line Heights variables `12` and `14`; the `sm` mode holds a raw `14`, because
  that collection has no entry for 10px text.
- Not modelled: `zIndex: 'tooltip'`, `pointerEvents: 'none'`, and the runtime
  `offset` / flip behaviour owned by floating-ui.

### Breadcrumbs — page `260:3055`

- `Breadcrumbs/Segment` component set, `Type=link | current`. TEXT property
  `Label`, BOOLEAN `Show slash` for the leading separator — turn it off on the
  first segment. Folding the slash into the segment avoids loose text nodes in
  every composition.
- `Breadcrumbs` wrapper component — mono, 14px, gap bound to `spacing/6`,
  hugs contents. Built from three segment instances.
- New in `Component / State`: `Breadcrumbs/link/color`
  (Default → `colors/text/subtlest`, Hovered and Pressed → `colors/link`).
  The recipe has a `_hover` on `linkSegment`; this is the first component to
  put a link state into the State collection. **Verified across all three
  modes** — link segments turn blue, the current segment and slashes do not.
- `_focusVisible: { color: 'blue.50' }` is not modelled; focus rings are
  effect styles in this library, not text colours.

### FormField — page `260:3056`

The page was partial, not empty. What was already there was sound and was kept:
the `Label` component (Optional / Required / Show Info icon), the `Help text`
component, the `Validation text` set (`Status=Error | Success`), and a
single `FormField` component carrying a real SLOT property.

- `FormField` is now a component set, `Layout=default | inline`, matching the
  code `layout` prop.
- ⚠️ **Help text moves between layouts, and that is correct.** `FormField.tsx`
  renders it directly after `labelWrapper` in `default`, but in grid column 2
  in `inline` — so it sits **above** the control in default and **below** it in
  inline. Built that way.
- Structure now mirrors the recipe's slots: `labelWrapper`, `inputs` (carrying
  the SLOT), plus the help and validation text nodes.
- ⭐ **Shaun's canvas note "Deal with label alignment across sizes, like in
  code" is resolved.** New `FormField/Label PT` in `Component / Layout` gives
  `labelWrapper` its top padding per size — **measured 0 / 6 / 10 / 12 across
  sm / md / lg / xl**, exactly the recipe. The note frame was left on the
  canvas for Shaun to remove.
- Other new `Component / Layout` variables: `FormField/Container gap`,
  `FormField/Inputs gap`, `FormField/Inputs MT`,
  `FormField/Inline column gap`. The previous gaps were raw numbers.
- New properties: `Label` (TEXT, on the `Label` component), `Text` (TEXT, on
  `Help text`), `Show help text` and `Show validation` (BOOLEAN, on the set).
- ⚠️ **Scaffolding was MOVED, not deleted.** The pasted recipe source, two
  screenshots, a stray line and the old layout sketch now live in a frame named
  `_Scratch (was loose on this page — safe to delete)`. Deleting is Shaun's
  call.

### Select — page `260:3058`

Shaun's canvas note on this page read **"Add multi-select"**. Done.

- `Select` went from 4 variants to **8**: `Open=False|True` ×
  `Content=Placeholder|Value` × `Multiple=False|True`.
- ⭐ **Shared pieces, not a shared shell** (Shaun's call). `Multiple=True`
  reuses the existing **`ChipGroup`** and **`Chip`** components — the same ones
  Autocomplete will use — and every variant reuses the existing **`Menu`**
  instance with its `Content Slot`, so list contents come from `ListItem` and
  `ListItemGroup` rather than being rebuilt.
- ⚠️ **Single-value variants reuse the `TextInput` component as the trigger;
  multi-value ones build the trigger natively.** `TextInput` has no slot, and a
  Figma slot must be a direct child of its own component — so a `ChipGroup`
  cannot be nested inside a `TextInput` instance. Adding a slot to `TextInput`
  would have made it the shared shell, which is option B. In code the Select
  trigger is its own recipe slot, not a TextInput, so the native trigger is
  also the more faithful build.
- The chip row does not wrap and clips, matching `autoSize: false`
  (`flexWrap: nowrap`, `overflowX: auto`).
- ⚠️ **`ChipGroup` carries four demo Chip instances as slot defaults.**
  Instances inherit them and they cannot be removed, only hidden. The Select
  trigger hides them and shows two named chips.
- ⚠️ **The `_open` focus outline is an EFFECT, not just a stroke.** The stroke
  binding alone looked wrong; copying the donor `TextInput` effect array
  carried its per-effect variable binding across. `setBoundVariable('effects',
…)` is not valid — effects bind per effect object.
- New in `Component / Layout`, straight from `selectVariants.size`:
  `Select/Icon size`, `Select/Icon margin`, `Select/Icon padding`,
  `Select/Content PY`, `Select/Content PS`, `Select/Font size`,
  `Select/Chips gap`, `Select/Chips PY`. **`Select/Icon padding` holds raw
  pixels** because the recipe uses a `[26px]` escape hatch with no token.
- The note frame was left on the canvas for Shaun to remove.

### Autocomplete — page `414:6258`

Built by cloning Shaun's **refactored** Select multi variant, so the sizing and
spacing structure carries over exactly, then rebinding to Autocomplete's own
tokens.

- `Autocomplete` component set, **8 variants**: `Open=False|True` ×
  `Content=Placeholder|Value` × `Multiple=False|True`. Properties: `Loading`
  and `Overflow` (BOOLEAN, both default false) and `Input` (TEXT).
- Reuses the same shared pieces as Select — `Chip`, `ChipGroup`, `Menu`,
  `ListItem` — and adds `Spinner` for the loading indicator.
- ⚠️ **The valueContainer WRAPS, unlike Select's chip row.** The recipe sets
  `flexWrap: wrap` on `valueContainer` against `flexWrap: nowrap` on Select's
  `chips`, so tokens flow onto new lines instead of clipping.
- ⚠️ **Different surface tokens.** Autocomplete's control is `surface` +
  `border.input`; Select borrows the `TextInput/*` component colours. Not
  interchangeable.
- ⚠️ **Listbox item type follows `AutocompleteListbox.tsx`**, which passes a
  checkbox before-slot **only when multiple**. So `Multiple=True` uses
  `ListItem Variant=Checkbox` and `Multiple=False` uses `Variant=Default`.
  Selected state is set to match the tokens shown.
- ⚠️ **`minWidth` is not bindable on a TEXT node.** The input sits in a frame
  that carries the `Autocomplete/Input min width` binding.
- Seven new `Component / Layout` variables — `Autocomplete/Control PY`, `PX`,
  `font size`, `min height`, `Value gap`, `Input min width`, `Loading size`.
  **All alias the `sizes` scale**, because `autocompleteVariants.size` uses
  `token(sizes.N)` throughout, not spacing or fontSizes.
- ⚠️ **A set-level TEXT property forces one default across every variant.** So
  `Content=Placeholder` and `Content=Value` both read "Search…" for
  `Multiple=False`; they differ by text colour (placeholder vs text), which is
  the real distinction in code.

### Follow-up from Shaun's Select refactor

Shaun refactored the Select multi variant: trigger padding moved to `sizes/4`,
right padding to zero, the caret to `Button/Slot PX` with `Icon/caret-up` when
open, and the menu items to `ListItem Variant=Checkbox`. That orphaned five
`Select/*` variables. **Three were reassigned to the property the recipe
actually names:**

| Variable           | Now bound to                       | Effect at md       |
| ------------------ | ---------------------------------- | ------------------ |
| `Select/Chips PY`  | multi `trigger` padding top/bottom | 4 → 5              |
| `Select/Icon size` | `caret` frame width and height     | 32×20 → 24×24      |
| `Select/Font size` | multi `placeholder` text           | 16 → 16, no change |

⚠️ **The multi trigger is now 34px tall against 32px for single, and that is
correct.** The recipe gives `chips` a `py` of 5 and `content` a `py` of 3, so a
multi-value Select really is taller than a single-value one.

**Two were deleted** (Shaun's call, 2026-09-09) because the Figma construction
cannot express them:

- **`Select/Icon padding`** — the recipe used it as `pe` on the trigger to
  reserve room for an **absolutely positioned** icon. The Figma caret is
  in-flow, so nothing needs reserving.
- **`Select/Content PY`** — the recipe puts it on the `content` slot, which in
  Figma exists only inside the `TextInput` instance used by the single-value
  variants, where `TextInput/Main PY` already governs it. Bindings cannot be
  changed inside an instance.

Six `Select/*` variables remain and **all six are referenced.**

**`Select/Chips PY` was then retuned so the multi trigger matches the single
one visually**, rather than following the recipe's chip padding literally:

| Mode | Value      | Single height | Multi height |
| ---- | ---------- | ------------- | ------------ |
| sm   | `sizes/0`  | 24            | 24           |
| md   | `sizes/4`  | 32            | 32           |
| lg   | `sizes/8`  | 40            | 40           |
| xl   | `sizes/10` | 48            | 48           |

⚠️ **`xl` is 10, not 12, because the caret drives the height there, not the
chip row.** `Select/Icon size` at xl is `sizes/28`, taller than the 24px chip
row, so the padding has to absorb 4px less. Worth remembering before changing
either variable.

### Link — page `Link` (new)

- `Link` component set, `External=False|True` × `Disabled=False|True`. TEXT
  property `Label`.
- Colour comes from a new **`Link/color`** in `Component / State` — `link` by
  default, `link.pressed` on Hovered and Pressed. Second component to use that
  collection for a link state, after `Breadcrumbs/link/color`.
- `External=True` shows the `arrow-square-out` icon at `sizes/20`, its vector
  fill bound to the same `Link/color`.
- `Disabled=True` uses the recipe's literal `opacity: 0.4`, not a token.
- ⚠️ **`size`, `family`, `bold`, `italic` and `weight` are NOT variants.** They
  are free-form typography props in code — `size` accepts any fontSize token —
  so they belong to the text node or a swapped text style, not a variant axis.
- ⚠️ Figma cannot express the recipe's fractional underline
  (`textDecorationThickness: 0.0625em`, `textUnderlineOffset: 0.15625em`,
  `skip-ink`), so the underline is Figma's default.

### SegmentedInputs — page `SegmentedInputs` (new)

Three components, matching the recipe's three slots.

- `SegmentedInputs/Segment` — `State=Default|Focus`, TEXT property `Value`.
  Radius `radii/2`; Focus fills `bg.accent.gold.subtlest` at 75%, exactly the
  recipe's `/75` alpha.
- `SegmentedInputs/Separator` — `Gap=none|tight|normal|loose`, TEXT property
  `Char`. ⚠️ **The recipe sizes these in em** (0, 0.5em, 0.75em, 1.25em);
  Figma has no em, so they are the pixel equivalents at the md size of 16 —
  0, 8, 12, 20 — with `spacing/1` and `spacing/2` padding. **Re-check if the
  type scale changes.**
- `SegmentedInputs` — the composed row, MM / DD / YYYY. Deliberately **no
  border, background or padding**: the recipe leaves those to the wrapper
  (TextInput, DatePicker, TimePicker).
- New `SegmentedInputs/Font size` in `Component / Layout`
  (sm 14, md 16, lg 16, xl 20).
- ⚠️ `minWidth` cannot be set to `0` — use `null` to unset it.

### Tabs — page `Tabs` (new)

Design-first: there is no code component. Rebuilt from the `Tabs - Emmaline`
page in the old library (`ZIKwQGwbWwxUQ0MEodl5vi`, node `4501:224`), which
holds a written Tab spec plus responsive explorations for the marketing site.

⭐ **Finding: priority-plus is not a marketing-only pattern.** The old file's
app spec says _"When the width of the tabs is larger than its container, the
tabs begin filling up an overflow menu"_, its marketing frames show the same
mechanic at three widths, and its `base` frame collapses all the way to just
the selected tab plus the toggle. **One behaviour, one component** — no
app-versus-marketing variant axis. Shaun confirmed.

- `Tabs/Tab` — `Selected=False|True`, TEXT property `Label`. Selected is
  full-strength text with a 2px `border.bold` underline.
- `Tabs/Overflow` — `Open=False|True`. Caret flips; `bg.neutral` when open.
- `Tabs` — `Overflow=None | Closed | Open`. Composed from `Tabs/Tab`
  instances, `Tabs/Overflow` and a `Menu` holding `ListItem` entries for the
  hidden tabs. The track is a 1px `border` rule on the `tablist`; each tab's
  own 2px underline sits on it.
- New in `Component / State`: `Tabs/tab/color` (text.subtlest → text) and
  `Tabs/tab/underline` (transparent → border → border.bold). Third component
  to use that collection for a hover state.
- **Typography is body at 14px.** The marketing site renders its tabs in mono;
  that is a text-style swap on the instance, not a variant.
- ⚠️ **The overflow Menu is right-aligned under the bar.** In the old file it
  sits directly beneath the toggle, whose position moves with the tab count.
  Nudge it per layout.
- ⚠️ **`Menu` ships demo slot content** — a group label and five list items —
  exactly like `ChipGroup`. Instances inherit it and it can only be hidden,
  never removed.

### Alerts — page `Alerts` (new)

Design-first. Shaun asked for a proposal board first; it was approved and then
componentised the same day. The board stays on the page as the documentation.
**Every colour is a bound semantic token; zero raw paints throughout.**

**Four component sets — 25 variants total:**

| Set                     | Variants                                  | Properties                                                   |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `Alert` (inline banner) | `Tone` × 5                                | Title, Message, Action, Show title, Show action, Dismissible |
| `PageBanner`            | `Tone` × 5 × `Emphasis` Subtle\|Bold = 10 | Message, Action, Show action                                 |
| `Toast`                 | `Tone` × 5                                | Message, Action, Show action, Dismissible                    |
| `InlineNote`            | `Tone` × 5                                | Message                                                      |

⭐ **`Tone=neutral` carries NO icon** (Shaun's call). It borrowed `Icon/circle`,
which reads as a bullet rather than a state; a neutral state icon signals
nothing. Applied across all four sets and the mockups.

**Section 7 mocks toast placement**: a viewport frame with three toasts in the
bottom-right, 24px inset, 12px gap, newest nearest the corner, capped at three.

**`Loading` is deliberately out of scope** — Shaun's call. The old research
lists _Feedback: Loading_ as a category, but it is a Spinner, not a tone.

Sources: the old library's `Alerts` page (`ZIKwQGwbWwxUQ0MEodl5vi`, node
`454:161`) — roughly 98 nodes of screenshot research already labelled
_Notice: Info/Guidance_, _Feedback: Success/Error/Warning/Loading_,
_Status: Info_, _Zero-state_ — plus Primer's notification-messaging model.

**The proposed model — three axes:**

1. **Category (why):** System · Feedback · Awareness. Maps Primer's
   system-updates / feedback / awareness onto the old page's own labels.
2. **Tone (what kind):** info · success · warning · danger · neutral —
   exactly the semantic tokens that already exist.
3. **Placement (where):** page banner · inline banner · toast · inline note.

**Decision table in the board:**

| Category               | Placement     | Tone                     | Dismiss             |
| ---------------------- | ------------- | ------------------------ | ------------------- |
| System                 | Page banner   | danger / warning / info  | No — until resolved |
| Feedback, blocking     | Inline banner | danger                   | Yes                 |
| Feedback, non-blocking | Toast         | success / danger         | Auto                |
| Awareness, section     | Inline banner | info / warning / neutral | Optional            |
| Awareness, field       | Inline note   | info / warning / danger  | No                  |

**Section 6 shows every tone × placement combination** — 25 examples (five
tones across four placements, with page banner drawn at both emphases), all
carrying the same sentence so only the chrome differs.

**Five rules, each answering a specific failure in the research** — the
"TOO MANY THINGS", "Duplicates", "Conflicting Info" and "colour-based info on
page load that fades" screenshots.

⚠️ **Token naming inconsistency found while building.**
`colors/icon/info` and `colors/icon/success` have no `/DEFAULT` suffix, but
`colors/icon/warning/DEFAULT` and `colors/icon/danger/DEFAULT` do. Worth
normalising in the tokens file.

⚠️ **The `neutral` tone has no status icon.** It borrows `Icon/circle`, which
reads as a bullet rather than a state. Either it needs its own glyph or the
tone should carry no icon at all.

⚠️ **Primer's `Unavailable` and `Upsell` tones have no Cetec tokens.**
Unavailable is covered by `neutral`; Upsell is dropped. Add tokens first if
either is wanted.

### Decisions taken during the build

- **Avatar `2xl` and `3xl` are not modelled.** `Component / Layout` keeps its
  four modes; no new collection.
- **`radii/100` is treated as equivalent to `radii/999`.** The Avatar
  indicators bind to `radii/999`. `radii/100` stays on the Phase 2 add list
  but is no longer blocking.

### Code cleanup found while binding — not blocking

Three recipe values are raw px with no token behind them, in code or Figma:

| Recipe      | Value                | Note                                      |
| ----------- | -------------------- | ----------------------------------------- |
| `kbd.ts`    | `rounded: '6'`       | no `radii/6` anywhere; built as raw 6px   |
| `avatar.ts` | `w: '36'` (2xl)      | no `sizes/36` anywhere                    |
| `avatar.ts` | `fontSize: '8'` (sm) | no `fontSizes/8`; the sm mode holds raw 8 |

## Token pass — 2026-09-10

Added to `Cetec Tokens vNext` (`juNQJElDeyrQXx3XXEPQZS`). Primitives 440 → 470,
Semantics 264 → 280.

| Added                           | Count | How                                                                                                                                                   |
| ------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colors/slate_inverse/*`        | 16    | Primitives, raw hex                                                                                                                                   |
| `colors/bg/slate/*`             | 16    | Semantics. ⭐ **An alias pair, not a raw ramp** — Light → `colors/slate/N`, Dark → `colors/slate_inverse/N`, exactly as `dist/styles.css` resolves it |
| `sizes/*` t-shirt (`2xs`–`8xl`) | 13    | Primitives. ⭐ **Aliases the existing `sizes/container-*`** — the values are identical, so nothing is duplicated                                      |
| `spacing/18`                    | 1     | Primitives, raw 18                                                                                                                                    |

**Dropped (Shaun's call):** the 7 utility `sizes` and 7 utility `spacing`
values — `auto fit full half max min prose` — have no Figma equivalent. All 8
`zIndex` tokens: stacking is not a Figma concept.

⚠️ **`radii/100` is NOT a typo for `radii/999`.** It resolves to **`100%`**, a
percentage, and is used by `avatar.ts` for the presence and status dots.
`radii/999` is `999px`. On a square element they are identical, which is why
the Avatar build looked right bound to `999`. **Figma has no percentage corner
radius, so `radii/100` cannot be added** — `radii/999` is the correct stand-in.
Recorded in `standards/figma/figma-component-token-policy.md`.

## Not in this plan

- Updating instances in consumer design files.
- Code Connect. It needs an Organization or Enterprise plan; Cetec-ERP is Pro.
- Any change to the old libraries beyond deprecation labelling.

## Tooling notes

- Figma's variables REST API (`/v1/files/:key/variables/local`) is
  **Enterprise only** and returns 403 on this plan. Use a Variables
  Import/Export plugin, then diff the JSON against `dist/styles.css`.
- `list_file_components_for_code_connect` is gated the same way.
- **Figma renames a TEXT layer to its own characters.** Set `node.name` AFTER
  writing `characters`, or the layer comes back named after its content and
  later lookups by name return null.
- `addComponentProperty(name, 'INSTANCE_SWAP', value)` takes the default
  component's **node id**, not its published key. Passing a key fails with
  `Property value is incompatible with component property type`, and the whole
  script rolls back.
- The Figma MCP's `get_metadata` page listing returned only `_Thumb` for
  every one of these files. `GET /v1/files/:key?depth=1` over REST returned
  all pages correctly. **Prefer REST for structural questions**, and
  `GET /v1/files/:key/nodes?ids=…&depth=1` to check whether a page has any
  content at all.
