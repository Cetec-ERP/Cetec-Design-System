import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';

import { Wrap } from '@styled-system/jsx';

import { Box } from '../Box';
import { Button } from '../Button';
import { Chip } from '../Chip';
import { ChipGroup } from '../Chip';
import { Text } from '../Text';
import { TextInput } from '../TextInput';

import { Icon } from './Icon';
import iconMetadata from './iconMetadata.json';
import { IconNames } from './iconNames';

import type { Meta, StoryObj } from '@storybook/react';

type IconMetadataEntry = {
  aliases?: string[];
  tags?: string[];
  category?: string | null;
  deprecated?: boolean;
};

const iconMetadataByName = iconMetadata as Record<string, IconMetadataEntry>;
const iconNames = Object.values(IconNames);

function tokenize(value: string) {
  return value
    .toLowerCase()
    .trim()
    .split(/[\s\-_]+/)
    .filter(Boolean);
}

function buildSearchIndex(name: string, metadata: IconMetadataEntry) {
  const aliases = metadata.aliases ?? [];
  const tags = metadata.tags ?? [];
  const searchable = new Set<string>([name.toLowerCase()]);
  const allValues = [name, ...aliases, ...tags];

  for (const value of allValues) {
    searchable.add(value.toLowerCase());
    for (const token of tokenize(value)) {
      searchable.add(token);
    }
  }

  return Array.from(searchable).join(' ');
}

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: '',
    docs: {
      description: {
        component: `Use \`Icon\` for visual affordances in buttons, statuses, and navigation.

When not to use:
- As the only label for interactive controls (pair it with text or an \`aria-label\`)
- As decorative noise in dense data views where it adds no meaning

Minimal snippet:
\`\`\`tsx
<Icon name="search" />
\`\`\`

Realistic example:
\`\`\`tsx
<button aria-label="Search customers">
  <Icon name="search" />
</button>
\`\`\``,
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
    size: { control: 'text' },
  },
  args: {
    name: 'search',
    'aria-label': 'Search',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function IconCatalogStory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | string>('all');
  const [showDeprecated, setShowDeprecated] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          iconNames
            .map((name) => iconMetadataByName[name]?.category)
            .filter((value): value is string => Boolean(value)),
        ),
      ).sort((a, b) => a.localeCompare(b)),
    [],
  );

  const filteredIcons = useMemo(() => {
    const terms = tokenize(query);

    return iconNames.filter((name) => {
      const metadata = iconMetadataByName[name] ?? {};
      const isDeprecated = metadata.deprecated ?? false;
      if (!showDeprecated && isDeprecated) {
        return false;
      }

      if (category !== 'all' && metadata.category !== category) {
        return false;
      }

      if (terms.length === 0) {
        return true;
      }

      const searchIndex = buildSearchIndex(name, metadata);
      return terms.every((term) => searchIndex.includes(term));
    });
  }, [category, query, showDeprecated]);

  const onCopy = async (name: string) => {
    const snippet = `<Icon name="${name}" />`;

    try {
      await navigator.clipboard.writeText(snippet);
      setCopyStatus(`Copied: ${snippet}`);
    } catch {
      setCopyStatus(`Copy failed for ${name}. Clipboard said "nope".`);
    }
  };

  return (
    <Box display="grid" gap="16" maxW="6xl" mx="auto" py="16">
      <Box display="grid" gap="10">
        <TextInput
          name="icon-search"
          type="search"
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setQuery(event.currentTarget.value)
          }
          placeholder="Search by icon name, alias, or tag..."
          iconBefore="search"
          minW={{ base: 'full', md: 'md' }}
        />

        <Wrap gap="8">
          <ChipGroup
            type="single"
            value={category}
            onChange={(nextValue) =>
              setCategory(typeof nextValue === 'string' ? nextValue : 'all')
            }
            label="Icon categories"
          >
            <Chip value="all">all</Chip>
            {categories.map((value) => (
              <Chip key={value} value={value}>
                {value}
              </Chip>
            ))}
          </ChipGroup>
          <Chip onClick={() => setShowDeprecated((value) => !value)}>
            {showDeprecated ? 'hide deprecated' : 'show deprecated'}
          </Chip>
        </Wrap>
      </Box>

      <Text fontSize="12" color="text.subtle">
        Showing {filteredIcons.length} of {iconNames.length} icons
      </Text>

      {copyStatus ? (
        <Box
          role="status"
          aria-live="polite"
          p="8"
          borderRadius="8"
          bg="bg.accent.blue.subtlest"
          color="text.subtle"
        >
          {copyStatus}
        </Box>
      ) : null}

      <Box
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(4, minmax(0, 1fr))',
        }}
        gap="12"
      >
        {filteredIcons.map((name) => {
          return (
            <Box
              key={name}
              p="12"
              borderWidth="1"
              borderColor="border"
              borderRadius="8"
              display="grid"
              gap="8"
            >
              <Wrap gap="8" alignItems="center">
                <Icon name={name} aria-hidden />
                <Box fontSize="12">{name}</Box>
              </Wrap>

              <Button
                onClick={() => onCopy(name)}
                size="sm"
                variant="ghost"
                justifySelf="start"
              >
                Copy usage
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export const ExSearchableCatalog: Story = {
  name: 'Ex: Searchable Catalog',
  render: () => <IconCatalogStory />,
  parameters: {
    controls: { disable: true },
  },
};
