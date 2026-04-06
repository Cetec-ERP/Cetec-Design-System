# Cetec Figma Component Token Policy

## Purpose

This policy defines when Cetec's Figma libraries should use component-level
variables, where those variables should live, and how they should relate to the
foundation token system.

The goal is not purity. The goal is a Figma architecture that:

- preserves light/dark theming
- keeps imported components aligned with raw theme tokens
- reduces component-set explosion for complex components
- stays understandable enough to maintain

This policy assumes the repo remains the source of truth for values and public
component contracts.

## Decision

Cetec vNext will use a four-layer token architecture in Figma:

1. Foundation primitives
2. Global semantic theme tokens
3. Component contract tokens
4. Components and styles

Component contract tokens are a supported architecture layer, not a last-resort
hack. They should be used deliberately for complex components when they reduce
component count, improve file performance, or make the component API clearer.

## Why

The legacy button system showed both sides of this tradeoff:

- The deprecated button relied on a large brute-force component matrix across
  theme, variant, state, size, and icon combinations.
- The newer button pushed more logic into variables and reduced the component
  surface dramatically.

That trade was worth it. The variable layer was more complex, but the component
library became faster, smaller, and easier to use.

For Cetec, the right question is not whether component-level variables are
"clean." It is whether they simplify the actual component model enough to
justify themselves.

## Layer Model

### 1. Foundation Primitives

These are raw reusable values with no product meaning.

Examples:

- colors
- spacing
- sizes
- radii
- border widths
- font sizes
- font weights
- font families
- durations
- z-index
- line heights

These live in the Tokens library.

### 2. Global Semantic Theme Tokens

These express design-system meaning and theme behavior.

Examples:

- `colors/text/default`
- `colors/bg/neutral/DEFAULT`
- `colors/border/subtle`
- `colors/surface/raised`

These live in the Tokens library and are the default source for theming.

### 3. Component Contract Tokens

These express internal component roles, state mappings, and size/layout
contracts when a direct semantic binding would make the component too large or
too hard to maintain.

Examples:

- button fill/label/border/icon mappings
- button state mappings
- button size contracts
- input fill/border/placeholder/icon mappings
- input size contracts

These also live in the Tokens library when they are theme-sensitive or shared
across multiple component families.

### 4. Components And Styles

These are the actual Figma components, text styles, and effect styles that
designers consume.

Components should bind to component contract tokens when needed, or directly to
global semantic tokens when they do not need an intermediate layer.

## Placement Rules

### Tokens Library

The Tokens library should contain:

- foundation primitives
- global semantic theme tokens
- line-height collections
- text styles
- effect styles
- theme-sensitive component contract tokens
- shared component size/layout tokens when they support cross-component
  consistency

### Components Library

The Components library should contain:

- component masters and sets
- documentation frames
- usage examples
- component-local structure and layout

Do not move theme-sensitive component variables into the Components library just
to keep the Tokens library "clean." If those variables depend on the same
light/dark system as the global semantics, keeping them co-located in the
Tokens library is the safer architecture.

## When Component Tokens Are Required

Use component contract tokens when one or more of these are true:

- The component has enough combinations that a brute-force component matrix
  becomes heavy or slow.
- The component has multiple themed slots that repeat across variants and
  states.
- The component has shared size contracts that should stay aligned across
  components, such as Button and Input.
- The variable layer reduces the component surface substantially.
- The component API becomes clearer when visual logic is absorbed into tokens
  instead of exposed as dozens of component variants.

This pattern is expected for:

- `Button`
- `IconButton`
- `TextInput`
- other inputs with variant/state/size combinations
- any component with multiple themed parts and a high-cardinality state model

## When Component Tokens Are Not Worth It

Avoid component contract tokens when:

- the component has a small API
- direct binding to global semantic tokens is already clear
- the component has few slots and few states
- the variable layer would mostly duplicate existing semantics under a new name

For simpler components, binding directly to global semantic tokens is usually
better.

## Theming Rules

The system must work the same whether a designer:

- uses semantic theme tokens directly
- uses imported components from the Components library

To support that:

- All component theming must resolve back to the same semantic theme layer.
- Component contract tokens must alias to global semantic tokens instead of
  carrying raw values.
- Theme switching must not depend on separate parallel value systems.

In practice:

- global semantics own light/dark behavior
- component tokens map component roles and states onto those semantics
- components bind to the component tokens or semantics that sit above them

This keeps raw token usage and imported component usage aligned.

## Collection Strategy

For complex components, split component contract tokens by concern instead of
building one giant collection.

Recommended pattern:

- `Button Color`
- `Button State`
- `Button Size`
- `Input Color`
- `Input Size`

If a component needs separate axes for state, variant, or size, those axes may
be modeled in separate collections when doing so materially compresses the
component model.

The old button architecture was directionally correct here. The problem was not
that the `--btn` variables existed. The problem was that the pattern was never
formalized as policy.

## Alias Rules

Component contract tokens should follow these rules:

- No raw hex values.
- No detached shadow recipes.
- Alias to global semantic tokens whenever a semantic token already expresses
  the right meaning.
- Alias to foundation primitives only when a semantic layer does not apply.
- Keep alias chains shallow enough to debug.

Preferred depth:

1. primitive
2. semantic
3. component contract
4. component binding

Avoid extra indirection beyond that without a strong reason.

## Properties Vs. Variables

Use component properties for designer-facing choices.

Examples:

- variant
- size
- icon position
- disabled
- loading

Use component tokens for internal visual contracts.

Examples:

- fill color by state
- label color by state
- border color by state
- icon container sizing
- spacing and padding mappings shared across sizes

The rule is simple:

- if a choice is something a designer should consciously pick, it probably
  belongs in a component property
- if it is internal visual logic needed to keep the component sane, it probably
  belongs in component tokens

## Typography And Effects

The Tokens library should preserve the useful parts of the original file where
Figma benefits from operational abstraction:

- line-height collections
- text styles
- effect styles

Line height is especially important. The original line-height implementation
worked well in Figma and should be treated as part of the vNext foundation
layer.

## Naming Guidance

Component contract tokens should be clearly separated from global semantics.

Recommended naming approach:

- collection names identify the component and concern
- variable names identify the internal role

Examples:

- collection: `Button Color`
- variables: `fill`, `label`, `border`, `icon`

- collection: `Button Size`
- variables: `radius`, `gap`, `paddingX`, `paddingY`, `iconSize`,
  `iconContainerWidth`, `fontSize`, `fontWeight`, `lineHeight`

Do not flatten component contract tokens into the main semantic namespace. They
should be easy to distinguish from global semantics.

## Governance Rules

A component earns its own contract tokens only when there is a clear payoff.

Use this threshold:

- the component has multiple visual variants and multiple interaction states
- the component includes enough internal slots that direct semantic binding
  becomes repetitive
- the token layer reduces component count or visual complexity in a meaningful
  way
- the contract is stable enough to reuse instead of being one-off scaffolding

If those conditions are not met, do not create a new component token collection
just because it feels tidy.

## Initial vNext Application

Apply this policy immediately to:

- `Button`
- `IconButton`
- `TextInput`

These should be the first proof points for the vNext component-token layer.

For the initial pilot:

- preserve direct alignment to the global semantic theme layer
- use component contract tokens to compress the matrix
- keep the exposed component properties focused on real designer choices
- document the mapping between component properties and component token layers

## Non-Goals

This policy does not justify:

- moving arbitrary component concerns into the Tokens library
- duplicating semantic tokens under component names without a clear reason
- replacing component properties with variables when properties are more usable
- creating component token collections for simple components out of habit

## Working Rule

When deciding whether to add component-level variables, use this test:

"Does this token layer make the component materially smaller, faster, or easier
to use without creating a second theme system?"

If yes, it probably belongs.

If not, bind directly to the global semantic layer and move on.
