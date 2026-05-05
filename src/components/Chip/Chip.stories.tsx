import { useState } from 'react';

import { Flex, Grid, Wrap, VStack } from '@styled-system/jsx';

import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Box } from '../Box';
import { BreakpointIndicator } from '../BreakpointIndicator';
import { Icon } from '../Icon';
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
    before: {
      control: false,
      description: 'Slot to render item before the label',
    },
    after: {
      control: false,
      description: 'Slot to render item after the label',
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
    dismissable: {
      control: 'boolean',
      description:
        'Renders a trailing remove button instead of whole-chip dismiss',
    },
    dismissLabel: {
      control: 'text',
      description: 'Accessible label for the trailing remove button',
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
      <Chip size="sm" before={<Icon name="hash" />}>
        sm Chip
      </Chip>
      <Chip size="sm" after={<Icon name="read-doc" />}>
        sm Chip
      </Chip>
      <Chip
        size="sm"
        before={<Avatar src={sampleImages.user1} name="John Doe" />}
      >
        sm Chip
      </Chip>
      <Chip size="sm" after={<Badge count={3} />}>
        sm Chip
      </Chip>
      <Chip size="md">md Chip</Chip>
      <Chip size="md" before={<Icon name="hash" />}>
        md Chip
      </Chip>
      <Chip size="md" after={<Icon name="read-doc" />}>
        md Chip
      </Chip>
      <Chip
        size="md"
        before={<Avatar src={sampleImages.user1} name="John Doe" />}
      >
        md Chip
      </Chip>
      <Chip size="md" after={<Badge count={3} />}>
        md Chip
      </Chip>
      <Chip size="lg">lg Chip</Chip>
      <Chip size="lg" before={<Icon name="hash" />}>
        lg Chip
      </Chip>
      <Chip size="lg" after={<Icon name="read-doc" />}>
        lg Chip
      </Chip>
      <Chip
        size="lg"
        before={<Avatar src={sampleImages.user1} name="John Doe" />}
      >
        lg Chip
      </Chip>
      <Chip size="lg" after={<Badge count={3} />}>
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
      justifyItems="center"
      gap="16"
    >
      <Wrap justifyContent="center">
        <Chip
          size={{ base: 'xl', xs: 'lg', sm: 'md', md: 'sm' }}
          before={<Icon name="hash" />}
        >
          Chip
        </Chip>
        <Chip
          size={{ base: 'xl', xs: 'lg', sm: 'md', md: 'sm' }}
          before={<Avatar src={sampleImages.user1} name="John Doe" />}
        >
          Chip
        </Chip>
        <Chip
          size={{ base: 'xl', xs: 'lg', sm: 'md', md: 'sm' }}
          after={<Badge count={3} />}
        >
          Chip
        </Chip>
      </Wrap>
      <Text
        textAlign="center"
        textStyle="mono.sm"
        _after={{
          display: 'inline',
          content: { base: '"xl"', xs: '"lg"', sm: '"md"', md: '"sm"' },
          color: 'text.bold',
          fontWeight: 'bold',
        }}
      >
        Size:{' '}
      </Text>
      <BreakpointIndicator />
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
        <Chip size="sm" before={<Badge count={2} variant="success" />}>
          Small
        </Chip>
        <Chip before={<Badge count={30} variant="neutral" />}>Medium</Chip>
        <Chip size="lg" before={<Badge count={100} />}>
          Large
        </Chip>
        <Chip size="xl" before={<Badge count={100} />}>
          XLarge
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip
          size="sm"
          before={<Avatar src={sampleImages.user1} name="John Doe" />}
        >
          Small
        </Chip>
        <Chip before={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Medium
        </Chip>
        <Chip
          size="lg"
          before={<Avatar src={sampleImages.user1} name="John Doe" />}
        >
          Large
        </Chip>
        <Chip
          size="xl"
          before={<Avatar src={sampleImages.user1} name="John Doe" />}
        >
          XLarge
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" before={<Icon name="file" />}>
          Small
        </Chip>
        <Chip before={<Icon name="file" />}>Medium</Chip>
        <Chip size="lg" before={<Icon name="file" />}>
          Large
        </Chip>
        <Chip size="xl" before={<Icon name="file" />}>
          XLarge
        </Chip>
      </Flex>
    </Flex>
  ),
};

export const WithAfter: Story = {
  render: () => (
    <Flex gap="4" flexDir="column" alignItems="center">
      <Flex gap="4" alignItems="center">
        <Chip size="sm" after={<Badge count={2} variant="success" />}>
          Small
        </Chip>
        <Chip after={<Badge count={30} variant="neutral" />}>Medium</Chip>
        <Chip size="lg" after={<Badge count={100} />}>
          Large
        </Chip>
        <Chip size="xl" after={<Badge count={100} />}>
          XLarge
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip
          size="sm"
          after={<Avatar src={sampleImages.user1} name="John Doe" />}
        >
          Small
        </Chip>
        <Chip after={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Medium
        </Chip>
        <Chip
          size="lg"
          after={<Avatar src={sampleImages.user1} name="John Doe" />}
        >
          Large
        </Chip>
        <Chip
          size="xl"
          after={<Avatar src={sampleImages.user1} name="John Doe" />}
        >
          XLarge
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" after={<Icon name="file" />}>
          Small
        </Chip>
        <Chip after={<Icon name="file" />}>Medium</Chip>
        <Chip size="lg" after={<Icon name="file" />}>
          Large
        </Chip>
        <Chip size="xl" after={<Icon name="file" />}>
          XLarge
        </Chip>
      </Flex>
    </Flex>
  ),
};

export const WithBeforeAndAfter: Story = {
  render: () => (
    <Flex gap="4" alignItems="center">
      <Chip size="sm" before={<Icon name="user" />} after={<Badge count={2} />}>
        Small
      </Chip>
      <Chip before={<Icon name="user" />} after={<Badge count={2} />}>
        Medium
      </Chip>
      <Chip size="lg" before={<Icon name="user" />} after={<Badge count={2} />}>
        Large
      </Chip>
      <Chip size="xl" before={<Icon name="user" />} after={<Badge count={2} />}>
        XLarge
      </Chip>
    </Flex>
  ),
};

export const WithSlots: Story = {
  render: () => (
    <Flex gap="4" flexDir="column" alignItems="center">
      <Flex gap="4" alignItems="center">
        <Chip before={<Icon name="hash" />}>Icon Slot</Chip>
        <Chip after={<Badge count={3} variant="success" />}>Badge Slot</Chip>
        <Chip
          before={<Avatar src={sampleImages.user2} name="Jane Doe" />}
          after={<Icon name="x" />}
        >
          Avatar Slot
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip before={<Icon name="hash" />}>Alias Before</Chip>
        <Chip after={<Badge count={4} variant="warning" />}>Alias After</Chip>
      </Flex>
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
      <Chip before={<Icon name="file" />}>Interactive</Chip>
      <Text textStyle="mono.xs">Disabled:</Text>
      <Chip disabled before={<Icon name="file" />}>
        Disabled
      </Chip>
      <Text textStyle="mono.xs">Loading:</Text>
      <Chip loading before={<Icon name="file" />}>
        Loading...
      </Chip>
      <Text textStyle="mono.xs">Deleted:</Text>
      <Chip deleted before={<Icon name="file" />}>
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
          before={<Icon name="plus" />}
          onClick={() => alert('Add clicked!')}
        >
          Add Item
        </Chip>
        <Chip
          after={<Icon name="x" />}
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
          <Chip size="xl">Extra Large</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" before={<Icon name="file" />}>
            Small
          </Chip>
          <Chip before={<Icon name="file" />}>Medium</Chip>
          <Chip size="lg" before={<Icon name="file" />}>
            Large
          </Chip>
          <Chip size="xl" before={<Icon name="file" />}>
            Extra Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" after={<Icon name="x" />}>
            Small
          </Chip>
          <Chip after={<Icon name="x" />}>Medium</Chip>
          <Chip size="lg" after={<Icon name="x" />}>
            Large
          </Chip>
          <Chip size="xl" after={<Icon name="x" />}>
            Extra Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before and After</Text>
        <Flex gap="4" alignItems="center">
          <Chip
            size="sm"
            before={<Icon name="user" />}
            after={<Icon name="x" />}
          >
            Small
          </Chip>
          <Chip before={<Icon name="user" />} after={<Icon name="x" />}>
            Medium
          </Chip>
          <Chip
            size="lg"
            before={<Icon name="user" />}
            after={<Icon name="x" />}
          >
            Large
          </Chip>
          <Chip
            size="xl"
            before={<Icon name="user" />}
            after={<Icon name="x" />}
          >
            Extra Large
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
        <Chip before={<Icon name="user" />}>John Doe</Chip> in a conversation.
        referencing <Chip before={<Icon name="file" />}>Project Plan</Chip> in
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
          <Chip after={<Icon name="x" />}>React</Chip>
          <Chip after={<Icon name="x" />}>TypeScript</Chip>
          <Chip after={<Icon name="x" />}>Panda CSS</Chip>
          <Chip before={<Icon name="plus" />}>Add Filter</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Categories</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip before={<Icon name="file" />}>Documentation</Chip>
          <Chip before={<Icon name="calendar" />}>Events</Chip>
          <Chip before={<Icon name="user" />}>People</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Actions</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip before={<Icon name="plus" />}>New Item</Chip>
          <Chip before={<Icon name="check" />}>Approve</Chip>
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
      {tags.length === 0 && (
        <Text color="text.subtlest">All tags dismissed!</Text>
      )}
    </Flex>
  );
};

export const Dismissable: Story = {
  render: () => <DismissableExample />,
};

export const DismissableWithBefore: Story = {
  render: () => (
    <Flex gap="4">
      <Chip dismissable before={<Icon name="file" />} onDismiss={() => {}}>
        Document
      </Chip>
      <Chip dismissable before={<Icon name="user" />} onDismiss={() => {}}>
        Person
      </Chip>
      <Chip dismissable before={<Icon name="calendar" />} onDismiss={() => {}}>
        Event
      </Chip>
    </Flex>
  ),
};

export const DismissableWithPrimaryAction: Story = {
  render: () => (
    <Flex flexDir="column" gap="12">
      <Text textStyle="mono.xs">
        Body clicks stay on the chip action. The trailing X is the only dismiss
        target.
      </Text>
      <Flex gap="4" flexWrap="wrap">
        <Chip
          dismissable
          before={<Icon name="file" />}
          onClick={() => alert('Opened document')}
          onDismiss={() => alert('Removed document')}
        >
          Document
        </Chip>
        <Chip
          dismissable
          before={<Icon name="user" />}
          onClick={() => alert('Opened person')}
          onDismiss={() => alert('Removed person')}
        >
          Person
        </Chip>
      </Flex>
    </Flex>
  ),
};

export const DismissableStates: Story = {
  render: () => (
    <Grid gridTemplateColumns="auto auto" gap="24">
      <Text textStyle="mono.xs">Default:</Text>
      <Chip dismissable onDismiss={() => {}}>
        Default
      </Chip>
      <Text textStyle="mono.xs">Disabled:</Text>
      <Chip dismissable disabled onDismiss={() => {}}>
        Disabled
      </Chip>
      <Text textStyle="mono.xs">Loading:</Text>
      <Chip dismissable loading onDismiss={() => {}}>
        Loading...
      </Chip>
      <Text textStyle="mono.xs">Deleted:</Text>
      <Chip dismissable deleted onDismiss={() => {}}>
        Deleted Item
      </Chip>
    </Grid>
  ),
};

export const DismissableWithCustomLabel: Story = {
  render: () => (
    <VStack gap="12">
      <Chip
        dismissable
        dismissLabel="Remove assignee John Doe"
        before={<Avatar src={sampleImages.user1} name="John Doe" />}
        onDismiss={() => {}}
      >
        John Doe
      </Chip>
      <Text textStyle="mono.xs">
        Dismiss button: aria-label="Remove assignee John Doe"
      </Text>
    </VStack>
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
        <Chip value="list" before={<Icon name="menu" />}>
          List
        </Chip>
        <Chip value="grid" before={<Icon name="view-grid" />}>
          Grid
        </Chip>
        <Chip value="calendar" before={<Icon name="calendar" />}>
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
        <Chip value="docs" before={<Icon name="file" />}>
          Documents
        </Chip>
        <Chip value="images" before={<Icon name="image" />}>
          Images
        </Chip>
        <Chip value="videos" before={<Icon name="video" />}>
          Videos
        </Chip>
        <Chip value="audio" before={<Icon name="broadcast" />}>
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
  const [xlValue, setXlValue] = useState('option-a');

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
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Extra Large</Text>
        <ChipGroup
          type="single"
          size="xl"
          value={xlValue}
          onChange={(v) => setXlValue(v as string)}
          label="Extra Large chip group"
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
      justifyItems="center"
      gap="16"
    >
      <ChipGroup
        type="single"
        size={{ base: 'xl', xs: 'lg', sm: 'md', md: 'sm' }}
        value={selected}
        onChange={(v) => setSelected(v as string)}
        label="Responsive chip group"
      >
        <Chip value="assignee" before={<Avatar name="John Doe" />}>
          Assignee
        </Chip>
        <Chip value="mentions" before={<Icon name="hash" />}>
          Mentions
        </Chip>
        <Chip value="alerts" after={<Badge count={3} />}>
          Alerts
        </Chip>
      </ChipGroup>
      <Text
        textAlign="center"
        textStyle="mono.sm"
        _after={{
          display: 'inline',
          content: { base: '"xl"', xs: '"lg"', sm: '"md"', md: '"sm"' },
          color: 'text.bold',
          fontWeight: 'bold',
        }}
      >
        Group size:{' '}
      </Text>
      <BreakpointIndicator />
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
