# Icon Alias Search + Storybook Catalog Plan

## Goal

Improve icon discovery so users can find icons by intent/synonyms (not only exact sprite ID), and decide whether icon browsing should live in Storybook vs a separate page.

## Recommendation

1. Use a single icon metadata source of truth (aliases/tags/category) and consume it in both:
   - `src/utils/sprite-preview-template.html` (generated preview page)
   - `src/components/Icon/Icon.stories.tsx` (Storybook icon catalog)
2. Make Storybook the primary UX for team-facing icon discovery.
3. Keep `public/sprite.symbol.html` as a lightweight QA artifact for sprite-generation sanity checks.

## Proposed Architecture

### 1) Add shared metadata file

Create `src/components/Icon/iconMetadata` (JSON or JS module) with shape:

- `iconName` -> `{ aliases: string[], tags: string[], category?: string, deprecated?: boolean }`

Why this is best:

- Decouples discovery terms from sprite IDs
- Avoids renaming files/symbol IDs (no API break for `<Icon name="..."/>`)
- Reusable by docs, search, and future lint/validation

### 2) Wire metadata into sprite preview search

Update `src/utils/sprite-preview-template.html` to:

- Build searchable text from: icon name + normalized name tokens + aliases + tags
- Normalize search input (`lowercase`, trim, split on space/hyphen/underscore)
- Match if all typed terms are found in the icon's search index
- Optionally render aliases under each icon label for discoverability

Result: searching `trash`, `delete`, or `remove` can find the same icon.

### 3) Add generation-time validation

In `src/utils/generate-sprite.js`, add checks:

- Every metadata key must map to a real icon filename
- Warn/fail if duplicate aliases map ambiguously (or allow explicit duplicates if desired)
- Optionally report icons missing metadata to encourage coverage

This keeps alias quality high as icons grow.

### 4) Upgrade Storybook Icon docs from minimal to catalog

Replace/extend current `src/components/Icon/Icon.stories.tsx` with:

- Search input using same alias-aware index
- Filter chips (optional): category, status, commonly-used
- Copy affordances (optional): click icon name copies `<Icon name="..."/>`
- Docs content: when to use, naming guidance, and examples

This aligns with repo direction to use Storybook as the canonical documentation surface.

### 5) Optional output for external consumers

If needed later, generate `public/icon-metadata.json` during sprite build so non-Storybook pages/tools can consume aliases without bundling React.

## Storybook vs Separate GitHub Page

- **Primary recommendation: Storybook**
  - Already in workflow/deployment (`npm run storybook:build`)
  - Controls/docs/navigation/accessibility checks in one place
  - Less duplicate UI maintenance
- **Keep `sprite.symbol.html` for low-level sprite debugging**
  - Verifies raw symbol output independent of React/Storybook
  - Fast local smoke test after `npm run generate-sprite`

## Implementation Order

1. Add metadata file + initial alias set for high-traffic icons
2. Implement alias-aware search in sprite template
3. Add validation in sprite generation script
4. Expand Storybook Icon story into searchable catalog using same metadata
5. (Optional) emit metadata JSON artifact

## Acceptance Criteria

- Searching synonyms returns expected icons in both preview and Storybook
- Existing `<Icon name="..."/>` API and type safety remain unchanged
- Sprite generation fails or warns on metadata drift
- Storybook includes icon discovery that is materially better than current gallery

## Risks / Tradeoffs

- Manual metadata upkeep adds work; validation mitigates drift
- Broad aliases can create noisy results; start curated and tune over time
- Two UIs remain, but with distinct purposes (QA vs docs)
