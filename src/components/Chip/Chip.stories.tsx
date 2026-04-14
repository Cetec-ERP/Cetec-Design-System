import { useState } from 'react';

import { Flex, Grid, Wrap } from '@styled-system/jsx';

import { Box } from '../Box';
import { BreakpointIndicator } from '../BreakpointIndicator';
import { Text } from '../Text';

import { Chip } from './Chip';
import { ChipGroup } from './ChipGroup';

import type { Meta, StoryObj } from '@storybook/react';

// Sample avatar images (using placeholder service)
const sampleImages = {
  user1: 'https://i.pravatar.cc/150?img=1',
  user2: 'https://i.pravatar.cc/150?img=2',
  user3: 'https://i.pravatar.cc/150?img=3',
  user4: 'https://i.pravatar.cc/150?img=4',
  user5: 'https://i.pravatar.cc/150?img=5',
};

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'sm', 'lg'],
      description: 'Size variants of chip',
    },
    iconBefore: {
      control: false,
      description: 'Structured icon slot rendered before the label',
    },
    iconAfter: {
      control: false,
      description: 'Structured icon slot rendered after the label',
    },
    avatarBefore: {
      control: false,
      description: 'Structured avatar slot rendered before the label',
    },
    badgeBefore: {
      control: false,
      description: 'Structured badge slot rendered before the label',
    },
    badgeAfter: {
      control: false,
      description: 'Structured badge slot rendered after the label',
    },
    before: {
      control: false,
      description: 'Escape hatch content to render before the label',
    },
    after: {
      control: false,
      description: 'Escape hatch content to render after the label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the chip interaction',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state with pulse animation',
    },
    deleted: {
      control: 'boolean',
      description: 'Shows deleted state with strikethrough',
    },
  },
  args: {
    children: 'Chip Label',
    size: 'md',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// =============================================================================
// DEFAULT
// =============================================================================

export const Default: Story = {
  render: () => <Chip>Default</Chip>,
};

// =============================================================================
// SIZES
// =============================================================================

export const Sizes: Story = {
  render: () => (
    <Grid columns={5} justifyItems="center" gap="20">
      <Chip size="sm">sm Chip</Chip>
      <Chip size="sm" iconBefore={{ name: 'hash' }}>
        sm Chip
      </Chip>
      <Chip size="sm" iconAfter={{ name: 'read-doc' }}>
        sm Chip
      </Chip>
      <Chip
        size="sm"
        avatarBefore={{ src: sampleImages.user1, name: 'John Doe' }}
      >
        sm Chip
      </Chip>
      <Chip size="sm" badgeAfter={{ count: 3 }}>
        sm Chip
      </Chip>
      <Chip size="md">md Chip</Chip>
      <Chip size="md" iconBefore={{ name: 'hash' }}>
        md Chip
      </Chip>
      <Chip size="md" iconAfter={{ name: 'read-doc' }}>
        md Chip
      </Chip>
      <Chip
        size="md"
        avatarBefore={{ src: sampleImages.user1, name: 'John Doe' }}
      >
        md Chip
      </Chip>
      <Chip size="md" badgeAfter={{ count: 3 }}>
        md Chip
      </Chip>
      <Chip size="lg">lg Chip</Chip>
      <Chip size="lg" iconBefore={{ name: 'hash' }}>
        lg Chip
      </Chip>
      <Chip size="lg" iconAfter={{ name: 'read-doc' }}>
        lg Chip
      </Chip>
      <Chip
        size="lg"
        avatarBefore={{ src: sampleImages.user1, name: 'John Doe' }}
      >
        lg Chip
      </Chip>
      <Chip size="lg" badgeAfter={{ count: 3 }}>
        lg Chip
      </Chip>
    </Grid>
  ),
};

// ============================================================================
// Conditional Breakpoints
// ============================================================================

export const ConditionalBreakpoints = () => {
  return (
    <Grid
      w="full"
      h="full"
      position="relative"
      placeContent="center"
      alignItems="center"
      gap="16"
    >
      <Wrap justifyContent="center">
        <Chip
          size={{ base: 'lg', xs: 'md', sm: 'sm' }}
          iconBefore={{ name: 'hash' }}
        >
          Chip
        </Chip>
        <Chip
          size={{ base: 'lg', xs: 'md', sm: 'sm' }}
          avatarBefore={{ src: sampleImages.user1, name: 'John Doe' }}
        >
          Chip
        </Chip>
        <Chip
          size={{ base: 'lg', xs: 'md', sm: 'sm' }}
          badgeAfter={{ count: 3 }}
        >
          Chip
        </Chip>
      </Wrap>
      <Text
        textAlign="center"
        textStyle="mono.sm"
        _after={{
          display: 'inline',
          content: { base: '"lg"', xs: '"md"', sm: '"sm"' },
          color: 'text.bold',
          fontWeight: 'bold',
        }}
      >
        Size:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </Grid>
  );
};

// =============================================================================
// WITH ICONS
// =============================================================================

export const WithBefore: Story = {
  render: () => (
    <Flex gap="4" flexDir="column" alignItems="center">
      <Flex gap="4" alignItems="center">
        <Chip size="sm" badgeBefore={{ count: 2, variant: 'success' }}>
          Small
        </Chip>
        <Chip badgeBefore={{ count: 30, variant: 'neutral' }}>Medium</Chip>
        <Chip size="lg" badgeBefore={{ count: 100 }}>
          Large
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip
          size="sm"
          avatarBefore={{ src: sampleImages.user1, name: 'John Doe' }}
        >
          Small
        </Chip>
        <Chip avatarBefore={{ src: sampleImages.user1, name: 'John Doe' }}>
          Medium
        </Chip>
        <Chip
          size="lg"
          avatarBefore={{ src: sampleImages.user1, name: 'John Doe' }}
        >
          Large
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" iconBefore={{ name: 'file' }}>
          Small
        </Chip>
        <Chip iconBefore={{ name: 'file' }}>Medium</Chip>
        <Chip size="lg" iconBefore={{ name: 'file' }}>
          Large
        </Chip>
      </Flex>
    </Flex>
  ),
};

export const WithAfter: Story = {
  render: () => (
    <Flex gap="4" alignItems="center">
      <Chip size="sm" iconAfter={{ name: 'x' }}>
        Small
      </Chip>
      <Chip iconAfter={{ name: 'x' }}>Medium</Chip>
      <Chip size="lg" iconAfter={{ name: 'x' }}>
        Large
      </Chip>
    </Flex>
  ),
};

export const WithBeforeAndAfter: Story = {
  render: () => (
    <Flex gap="4" alignItems="center">
      <Chip size="sm" iconBefore={{ name: 'user' }} iconAfter={{ name: 'x' }}>
        Small
      </Chip>
      <Chip iconBefore={{ name: 'user' }} iconAfter={{ name: 'x' }}>
        Medium
      </Chip>
      <Chip size="lg" iconBefore={{ name: 'user' }} iconAfter={{ name: 'x' }}>
        Large
      </Chip>
    </Flex>
  ),
};

// =============================================================================
// STATES
// =============================================================================

export const States: Story = {
  render: () => (
    <Grid gridTemplateColumns="auto auto" gap="24">
      <Text textStyle="mono.xs">Default:</Text>
      <Chip iconBefore={{ name: 'file' }}>Interactive</Chip>
      <Text textStyle="mono.xs">Disabled:</Text>
      <Chip disabled iconBefore={{ name: 'file' }}>
        Disabled
      </Chip>
      <Text textStyle="mono.xs">Loading:</Text>
      <Chip loading iconBefore={{ name: 'file' }}>
        Loading...
      </Chip>
      <Text textStyle="mono.xs">Deleted:</Text>
      <Chip deleted iconBefore={{ name: 'file' }}>
        Deleted Item
      </Chip>
    </Grid>
  ),
};

// =============================================================================
// INTERACTIVE
// =============================================================================

export const Interactive: Story = {
  render: () => (
    <Flex flexDir="column" gap="12">
      <Text textStyle="mono.xs">Chips can be interactive buttons:</Text>
      <Flex gap="2">
        <Chip onClick={() => alert('Clicked!')}>Click Me</Chip>
        <Chip
          iconBefore={{ name: 'plus' }}
          onClick={() => alert('Add clicked!')}
        >
          Add Item
        </Chip>
        <Chip
          iconAfter={{ name: 'x' }}
          onClick={() => alert('Remove clicked!')}
        >
          Remove
        </Chip>
      </Flex>
    </Flex>
  ),
};

// =============================================================================
// ALL SIZES WITH ICONS MATRIX
// =============================================================================

export const SizesMatrix: Story = {
  render: () => (
    <Flex flexDir="column" gap="12">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">No Content Before/After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm">Small</Chip>
          <Chip>Medium</Chip>
          <Chip size="lg">Large</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" iconBefore={{ name: 'file' }}>
            Small
          </Chip>
          <Chip iconBefore={{ name: 'file' }}>Medium</Chip>
          <Chip size="lg" iconBefore={{ name: 'file' }}>
            Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" iconAfter={{ name: 'x' }}>
            Small
          </Chip>
          <Chip iconAfter={{ name: 'x' }}>Medium</Chip>
          <Chip size="lg" iconAfter={{ name: 'x' }}>
            Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before and After</Text>
        <Flex gap="4" alignItems="center">
          <Chip
            size="sm"
            iconBefore={{ name: 'user' }}
            iconAfter={{ name: 'x' }}
          >
            Small
          </Chip>
          <Chip iconBefore={{ name: 'user' }} iconAfter={{ name: 'x' }}>
            Medium
          </Chip>
          <Chip
            size="lg"
            iconBefore={{ name: 'user' }}
            iconAfter={{ name: 'x' }}
          >
            Large
          </Chip>
        </Flex>
      </Flex>
    </Flex>
  ),
};

// =============================================================================
// INLINE USAGE
// =============================================================================

export const InlineWithText: Story = {
  render: () => (
    <Box maxW="lg">
      <Text>
        Chips can appear inline within text, like tagging{' '}
        <Chip iconBefore={{ name: 'user' }}>John Doe</Chip> in a conversation or
        referencing <Chip iconBefore={{ name: 'file' }}>Project Plan</Chip> in
        your notes.
      </Text>
    </Box>
  ),
};

// =============================================================================
// USE CASES
// =============================================================================

export const UseCases: Story = {
  render: () => (
    <Flex flexDir="column" gap="20">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Filter Tags</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip iconAfter={{ name: 'x' }}>React</Chip>
          <Chip iconAfter={{ name: 'x' }}>TypeScript</Chip>
          <Chip iconAfter={{ name: 'x' }}>Panda CSS</Chip>
          <Chip iconBefore={{ name: 'plus' }}>Add Filter</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Categories</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip iconBefore={{ name: 'file' }}>Documentation</Chip>
          <Chip iconBefore={{ name: 'calendar' }}>Events</Chip>
          <Chip iconBefore={{ name: 'user' }}>People</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Actions</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip iconBefore={{ name: 'plus' }}>New Item</Chip>
          <Chip iconBefore={{ name: 'check' }}>Approve</Chip>
          <Chip deleted>Archived</Chip>
        </Flex>
      </Flex>
    </Flex>
  ),
};

// =============================================================================
// DISMISSABLE
// =============================================================================

const DismissableExample = () => {
  const [tags, setTags] = useState([
    'React',
    'TypeScript',
    'Panda CSS',
    'Vite',
  ]);

  const handleDismiss = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <Flex flexDir="column" gap="12">
      <Text textStyle="mono.xs">Click the X to dismiss tags:</Text>
      <Flex gap="4" flexWrap="wrap">
        {tags.map((tag) => (
          <Chip key={tag} dismissable onDismiss={() => handleDismiss(tag)}>
            {tag}
          </Chip>
        ))}
      </Flex>
      {tags.length === 0 && <Text color="text.muted">All tags dismissed!</Text>}
    </Flex>
  );
};

export const Dismissable: Story = {
  render: () => <DismissableExample />,
};

export const DismissableWithBefore: Story = {
  render: () => (
    <Flex gap="4">
      <Chip dismissable iconBefore={{ name: 'file' }} onDismiss={() => {}}>
        Document
      </Chip>
      <Chip dismissable iconBefore={{ name: 'user' }} onDismiss={() => {}}>
        Person
      </Chip>
      <Chip dismissable iconBefore={{ name: 'calendar' }} onDismiss={() => {}}>
        Event
      </Chip>
    </Flex>
  ),
};

// =============================================================================
// SINGLE SELECT (ChipGroup)
// =============================================================================

const SingleSelectExample = () => {
  const [selected, setSelected] = useState('');

  return (
    <Flex flexDir="column" gap="12">
      <Text textStyle="mono.md">Select one size:</Text>
      <ChipGroup
        type="single"
        value={selected}
        onChange={(value) => setSelected(value as string)}
        label="Size selection"
      >
        <Chip value="sm">Small</Chip>
        <Chip value="md">Medium</Chip>
        <Chip value="lg">Large</Chip>
        <Chip value="xl">X-Large</Chip>
      </ChipGroup>
      <Text textStyle="mono.xs">Selected: {selected}</Text>
    </Flex>
  );
};

export const SingleSelect: Story = {
  render: () => <SingleSelectExample />,
};

const SingleSelectWithBeforeExample = () => {
  const [selected, setSelected] = useState('grid');

  return (
    <Flex flexDir="column" gap="12">
      <Text textStyle="mono.md">Select a view:</Text>
      <ChipGroup
        type="single"
        value={selected}
        onChange={(value) => setSelected(value as string)}
        label="View selection"
      >
        <Chip value="list" iconBefore={{ name: 'menu' }}>
          List
        </Chip>
        <Chip value="grid" iconBefore={{ name: 'view-grid' }}>
          Grid
        </Chip>
        <Chip value="calendar" iconBefore={{ name: 'calendar' }}>
          Calendar
        </Chip>
      </ChipGroup>
      <Text textStyle="mono.xs">Selected: {selected}</Text>
    </Flex>
  );
};

export const SingleSelectWithBefore: Story = {
  render: () => <SingleSelectWithBeforeExample />,
};

// =============================================================================
// MULTI SELECT (ChipGroup)
// =============================================================================

const MultiSelectExample = () => {
  const [selected, setSelected] = useState<string[]>(['react', 'typescript']);

  return (
    <Flex flexDir="column" gap="12">
      <Text textStyle="mono.md">
        Select your skills (check icon appears when selected):
      </Text>
      <ChipGroup
        type="multi"
        value={selected}
        onChange={(value) => setSelected(value as string[])}
        label="Skills selection"
      >
        <Chip value="react">React</Chip>
        <Chip value="typescript">TypeScript</Chip>
        <Chip value="vue">Vue</Chip>
        <Chip value="angular">Angular</Chip>
        <Chip value="svelte">Svelte</Chip>
      </ChipGroup>
      <Text textStyle="mono.xs">Selected: {selected.join(', ') || 'None'}</Text>
    </Flex>
  );
};

export const MultiSelect: Story = {
  render: () => <MultiSelectExample />,
};

const MultiSelectWithBeforeExample = () => {
  const [selected, setSelected] = useState<string[]>(['docs']);

  return (
    <Flex flexDir="column" gap="12">
      <Text textStyle="mono.md">Filter by category:</Text>
      <ChipGroup
        type="multi"
        value={selected}
        onChange={(value) => setSelected(value as string[])}
        label="Category filter"
      >
        <Chip value="docs" iconBefore={{ name: 'file' }}>
          Documents
        </Chip>
        <Chip value="images" iconBefore={{ name: 'image' }}>
          Images
        </Chip>
        <Chip value="videos" iconBefore={{ name: 'video' }}>
          Videos
        </Chip>
        <Chip value="audio" iconBefore={{ name: 'broadcast' }}>
          Audio
        </Chip>
      </ChipGroup>
      <Text textStyle="mono.xs">Selected: {selected.join(', ') || 'None'}</Text>
    </Flex>
  );
};

export const MultiSelectWithBefore: Story = {
  render: () => <MultiSelectWithBeforeExample />,
};

// =============================================================================
// KEYBOARD NAVIGATION
// =============================================================================

export const KeyboardNavigation: Story = {
  render: () => (
    <Flex flexDir="column" gap="40">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.md" color="text" fontWeight="bold">
          Single Select (arrow keys navigate & select):
        </Text>
        <SingleSelectExample />
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.md" color="text" fontWeight="bold">
          Multi Select (tab between, space/enter toggles):
        </Text>
        <MultiSelectExample />
      </Flex>
    </Flex>
  ),
};

// =============================================================================
// CHIP GROUP — SIZES
// =============================================================================

const ChipGroupSizesExample = () => {
  const [smValue, setSmValue] = useState('option-a');
  const [mdValue, setMdValue] = useState('option-a');
  const [lgValue, setLgValue] = useState('option-a');

  return (
    <Flex flexDir="column" gap="24">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Small</Text>
        <ChipGroup
          type="single"
          size="sm"
          value={smValue}
          onChange={(v) => setSmValue(v as string)}
          label="Small chip group"
        >
          <Chip value="option-a">Option A</Chip>
          <Chip value="option-b">Option B</Chip>
          <Chip value="option-c">Option C</Chip>
        </ChipGroup>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Medium</Text>
        <ChipGroup
          type="single"
          size="md"
          value={mdValue}
          onChange={(v) => setMdValue(v as string)}
          label="Medium chip group"
        >
          <Chip value="option-a">Option A</Chip>
          <Chip value="option-b">Option B</Chip>
          <Chip value="option-c">Option C</Chip>
        </ChipGroup>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Large</Text>
        <ChipGroup
          type="single"
          size="lg"
          value={lgValue}
          onChange={(v) => setLgValue(v as string)}
          label="Large chip group"
        >
          <Chip value="option-a">Option A</Chip>
          <Chip value="option-b">Option B</Chip>
          <Chip value="option-c">Option C</Chip>
        </ChipGroup>
      </Flex>
    </Flex>
  );
};

export const ChipGroupSizes: Story = {
  render: () => <ChipGroupSizesExample />,
};

export const ChipGroupResponsiveSizes = () => {
  const [selected, setSelected] = useState('assignee');

  return (
    <Grid
      w="full"
      h="full"
      position="relative"
      placeContent="center"
      alignItems="center"
      gap="16"
    >
      <ChipGroup
        type="single"
        size={{ base: 'lg', xs: 'md', sm: 'sm' }}
        value={selected}
        onChange={(v) => setSelected(v as string)}
        label="Responsive chip group"
      >
        <Chip value="assignee" avatarBefore={{ name: 'John Doe' }}>
          Assignee
        </Chip>
        <Chip value="mentions" iconBefore={{ name: 'hash' }}>
          Mentions
        </Chip>
        <Chip value="alerts" badgeAfter={{ count: 3 }}>
          Alerts
        </Chip>
      </ChipGroup>
      <Text
        textAlign="center"
        textStyle="mono.sm"
        _after={{
          display: 'inline',
          content: { base: '"lg"', xs: '"md"', sm: '"sm"' },
          color: 'text.bold',
          fontWeight: 'bold',
        }}
      >
        Group size:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </Grid>
  );
};

// =============================================================================
// CHIP GROUP — DISABLED CHIPS
// =============================================================================

const ChipGroupWithDisabledExample = () => {
  const [selected, setSelected] = useState('active');

  return (
    <Flex flexDir="column" gap="12">
      <Text textStyle="mono.md">
        Individual chips can be disabled within a group:
      </Text>
      <ChipGroup
        type="single"
        value={selected}
        onChange={(v) => setSelected(v as string)}
        label="Options with disabled"
      >
        <Chip value="active">Active</Chip>
        <Chip value="pending">Pending</Chip>
        <Chip value="unavailable" disabled>
          Unavailable
        </Chip>
        <Chip value="archived">Archived</Chip>
      </ChipGroup>
      <Text textStyle="mono.xs">Selected: {selected}</Text>
    </Flex>
  );
};

export const ChipGroupWithDisabled: Story = {
  render: () => <ChipGroupWithDisabledExample />,
};

// =============================================================================
// CHIP GROUP — WRAPPING
// =============================================================================

const ChipGroupWrappingExample = () => {
  const [selected, setSelected] = useState<string[]>(['react', 'typescript']);

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Vue',
    'Angular',
    'Svelte',
    'Next.js',
    'Remix',
    'Astro',
    'Node.js',
    'Python',
    'Go',
    'Rust',
    'GraphQL',
    'REST',
    'Docker',
  ];

  return (
    <Flex flexDir="column" gap="12" maxW="md">
      <Text textStyle="mono.md">
        ChipGroup wraps when chips exceed container width:
      </Text>
      <ChipGroup
        type="multi"
        value={selected}
        onChange={(v) => setSelected(v as string[])}
        label="Skills selection"
      >
        {skills.map((skill) => (
          <Chip key={skill.toLowerCase()} value={skill.toLowerCase()}>
            {skill}
          </Chip>
        ))}
      </ChipGroup>
      <Text textStyle="mono.xs">Selected: {selected.join(', ') || 'None'}</Text>
    </Flex>
  );
};

export const ChipGroupWrapping: Story = {
  render: () => <ChipGroupWrappingExample />,
};
