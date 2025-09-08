const snippets = [
  {
    group: 'Components',
    name: 'Button',
    code: '<Button variant="primary">Button</Button>',
  },
  {
    group: 'Components',
    name: 'Icon',
    code: `<Icon name="search" />`,
  },
  {
    group: 'Components',
    name: 'ThemeSwitcher',
    code: '<ThemeSwitcher />',
  },
  {
    group: 'Layout',
    name: 'Box with ThemeSwitcher',
    code: `<Box p="4" display="flex" justifyContent="space-between" alignItems="center">
  <Text>My Component</Text>
  <ThemeSwitcher />
</Box>`,
  },
];

export default snippets;