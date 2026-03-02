# Storybook Conventions

Storybook files are first-class documentation and implementation examples.

## Hard Standards

1. Use typed meta pattern:

```ts
const meta = { ... } satisfies Meta<typeof Component>;
export default meta;
type Story = StoryObj<typeof meta>;
```

2. Use Panda components/props for layout (`Box`, `VStack`, `HStack`, etc.), not inline style objects.
3. Include practical usage coverage: default/variants/states plus at least one realistic `Ex: ...` story.
4. Story files follow repo code conventions (import ordering, quote style, valid paths, type imports).

## Why Strictness Is High

Storybook is a teaching surface for engineers of mixed frontend experience.
Examples must reflect preferred design-system usage, not shortcuts.
