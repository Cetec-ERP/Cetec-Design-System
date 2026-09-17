# Cetec Figma Layout Standards

## Purpose

This document captures the layout rules that made the Tokens vNext
documentation pages behave predictably in Figma.

The immediate goal is simple:

- avoid collapsed frames
- avoid fixed-size wrappers that fight their children
- make docs pages easier to update incrementally
- establish a repeatable layout model before component work gets more complex

These rules are based on what worked well in `Cover Docs` and `Getting Started
Docs`, then applied to `Foundations Docs`, `Primitives Docs`, and
`Semantics Docs`.

## Core Principle

Prefer a small number of stable auto-layout patterns and reuse them.

The main failure mode in the earlier pass was creating frames that looked
structurally right in metadata, but still had rigid sizing:

- wrappers stayed fixed-height
- horizontal groups stayed `HUG` when they should have stretched
- text blocks did not fill their containers

That made pages harder to tune and easier to break.

## Standard Page Pattern

Top-level documentation frames should usually use this structure:

1. fixed page width
2. vertical auto layout
3. height hugs content
4. generous page padding
5. section wrappers beneath it that also hug content

Recommended top-level behavior:

- `layoutMode: VERTICAL`
- `layoutSizingHorizontal: FIXED`
- `layoutSizingVertical: HUG`
- `primaryAxisSizingMode: AUTO`
- `counterAxisSizingMode: FIXED`
- `clipsContent: false`

This matches how the docs pages actually want to behave: fixed canvas width,
variable vertical length.

## Text Rules

For page titles, section headings, and explanatory copy inside auto-layout
frames:

- use `width: fill`
- use `height: hug`
- use stretch alignment when the parent is vertical auto layout

This prevents text from becoming the weird fixed-width object that the rest of
the layout has to route around.

Good defaults:

- titles and paragraphs inside section wrappers should stretch horizontally
- text should usually not be left as fixed-width unless there is a real reason

## Section Wrapper Rules

Major sections inside docs pages should usually be vertical auto-layout frames.

Recommended behavior:

- `layoutMode: VERTICAL`
- `layoutSizingHorizontal: FILL`
- `layoutSizingVertical: HUG`
- `primaryAxisSizingMode: AUTO`
- `counterAxisSizingMode: FIXED`
- `layoutAlign: STRETCH`
- `clipsContent: false`

Examples:

- `Colors`
- `Typography`
- `Sizes`
- `Shadows`
- major palette groups on `Primitives`

The section wrapper should own spacing between its child blocks. Do not fake
section spacing with manual y-positioning if the frame can own it.

## Horizontal Row Rules

Use horizontal auto-layout rows for:

- stat card rows
- side-by-side content cards
- two-column mode comparisons
- equal-width intro cards

Recommended behavior:

- `layoutMode: HORIZONTAL`
- `layoutSizingHorizontal: FILL`
- `layoutSizingVertical: HUG`
- `primaryAxisSizingMode: FIXED`
- `counterAxisSizingMode: AUTO`
- `layoutAlign: STRETCH`
- `clipsContent: false`

If the row is meant to distribute cards evenly, child frames should usually be:

- `layoutSizingHorizontal: FILL`
- `layoutSizingVertical: HUG`
- `layoutGrow: 1`

This was the main pattern borrowed from the user-adjusted `Cover Docs` and
`Getting Started Docs`.

## Card Rules

Documentation cards should usually be vertical auto-layout frames that fill
available width and hug their content.

Recommended behavior:

- `layoutMode: VERTICAL`
- `layoutSizingHorizontal: FILL`
- `layoutSizingVertical: HUG`
- `primaryAxisSizingMode: AUTO`
- `counterAxisSizingMode: FIXED`
- `layoutGrow: 1` when inside an equal-width row
- `clipsContent: false`

Use consistent internal padding and item spacing instead of manually resizing
the card to fit text.

## Stroke Layout Rule

Figma defaults to excluding strokes from auto-layout size calculations. That
default is usually wrong for this repo.

For most auto-layout frames, components, component sets, and instances with
visible strokes, turn on:

- `strokesIncludedInLayout: true`
- `strokeAlign: INSIDE`

This makes the frame behave more like CSS `box-sizing: border-box`, which is
usually what we want for:

- documentation cards
- example shells
- component wrappers
- token-backed surface containers

Use this as the default once a node has auto layout. Do not leave stroke
exclusion on unless there is a specific, intentional reason for the border to
sit outside the layout box.

Practical rule:

- if the node is an auto-layout container and the stroke is part of the visible
  component boundary, include the stroke in layout
- if the node has a visible boundary stroke, default the stroke position to
  inside instead of center or outside
- if excluding the stroke would change spacing, alignment, or measured size in
  a surprising way, include it in layout

## Comparison Columns

For side-by-side `Base` and `Dark` documentation columns:

- the outer row should fill width and hug height
- each column should fill available width
- each column should be a vertical auto-layout frame that hugs content
- the column title and intro copy should use text fill/hug behavior

This pattern is important because it scales well into component pages later.
It also keeps light/dark documentation readable without manual rebalancing.

## What To Keep Fixed

Not everything should be set to fill.

Keep width fixed when the object is the page-level wrapper itself or when the
visual contract depends on a specific specimen width.

Examples:

- the top-level docs frame on a page
- intentionally sized swatches or specimen blocks
- narrow demonstration chips or markers

Keep height fixed when the example needs a stable sample size for comparison,
not because the frame was easier to create that way.

## What To Avoid

Avoid these patterns unless there is a specific reason:

- top-level docs frames with fixed height
- section wrappers with fixed height
- horizontal rows left as `width: hug` when they should span the content area
- text left fixed-width inside stretchable vertical layouts
- clipping enabled on layout wrappers that are expected to grow
- using resize operations as a substitute for proper layout sizing

The earlier collapsed-doc issue came from exactly this class of mistake.

## Practical Heuristic

When deciding between fixed, fill, and hug:

- page wrapper: fixed width, hug height
- section wrapper: fill width, hug height
- horizontal content row: fill width, hug height
- equal card in a row: fill width, hug height
- text in a vertical section: fill width, hug height
- content specimen: fixed only if the example needs it

If a frame is mostly acting like a container, it probably should hug vertically.
If it is meant to span the available content area, it probably should fill
horizontally.

## Validation Rules

Do not trust metadata alone.

A frame can look structurally fine in metadata and still be visually wrong:

- sections can overlap after another frame grows
- text can clip because the wrapper height was never recomputed
- helper assets can drift into the visible page area
- note cards can look fine at the node level but collide on the full page

Required validation pattern for Figma write work:

- run a screenshot on the node you just changed
- run a screenshot on the surrounding page or major section
- do not say the work is done until both checks look clean

For component pages specifically, validate all of these:

- docs block
- component set or variant grid
- examples block
- full page

If any one of those looks wrong, fix it before moving on.

## Page Section Spacing

Page sections should be positioned from actual rendered bounds, not guessed
numbers remembered from a previous pass.

Recommended page flow:

- docs frame first
- component grid below docs
- examples below component grid
- helper or support assets below examples

When a section height changes, recompute the y-position of the sections below
it. Do not assume the old spacing is still valid.

This matters most on component pages, where docs and examples change often and
can easily slide into the variant grid.

## Token-Only Color Rule

All visible color should come from tokens or imported token-backed styles.

Use:

- bound color variables for fills, strokes, and text
- imported effect styles for shadows
- imported text styles plus token-backed text fill

Avoid:

- hardcoded visible solids
- local one-off shadow colors
- transparent placeholder paints when the right answer is simply no fill or no
  stroke

If a surface should not show a fill or stroke, remove that paint instead of
faking transparency with an arbitrary local color.

For documentation copy and page labels specifically:

- bind text fills directly to the intended text token or local alias variable
- do not copy fills from arbitrary text nodes inside component instances

Component-instance text can have state-specific or empty paint data that does
not transfer cleanly to page docs. If the docs copy disappears, inspect the
text node fills directly before assuming it is a font or layout problem.

## Component Example Rule

Examples on component pages should use the real component.

Do not use detached specimens as the default documentation pattern. Detaching is
acceptable only as a deliberate last resort, not as the normal way to show a
component in use.

If a real example is hard to compose, that is usually a signal to improve the
component contract:

- add or expose a slot
- expose a nested instance
- add a text or boolean property
- create a small helper component that can be swapped into the slot

The example should prove that the actual reusable asset is usable, not just
that a screenshot can be manufactured.

## Slot Guidance

For primitive containers like `Card`, prefer a real content slot over fake local
content layers in examples.

Recommended pattern:

- the parent component owns the shell
- nested content is an instance
- the nested instance is exposed
- example compositions swap that slot with a real content component

This preserves the component contract:

- shell concerns stay with the shell
- content layout stays with the slot component
- examples still use the real component instance

If the code does not prescribe internal layout, do not hard-wire that layout
into the parent component just because the Figma page needed an example.

## Current Scope

These standards are proven against:

- `_Thumb` support page pattern
- `Cover Docs`
- `Getting Started Docs`
- `Foundations Docs`
- `Primitives Docs`
- `Semantics Docs`
- `Card` component page first pass and correction pass

They should be treated as the default starting point for new Figma docs pages,
not as a universal law for every component specimen or marketing-style layout.

This is now broad enough to cover the first component-page pass too, especially
for layout validation, page section spacing, and slot-based examples.
