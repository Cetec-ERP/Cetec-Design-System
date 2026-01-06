import { Text, type TextProps } from './index';
import type { Meta, StoryObj } from '@storybook/react';
import { HStack, VStack } from '@styled-system/jsx';
import { Divider } from '../Divider';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    controls: {
      disable: true,
      disableSaveFromUI: true,
    },
  },
  argTypes: {
    fontSize: {
      control: 'select',
      options: [
        'body.lg',
        'body.md',
        'body.sm',
        'body.xs',
        'heading.lg',
        'heading.md',
        'heading.sm',
        'heading.xs',
        'display.lg',
        'display.md',
        'display.sm',
        'display.xs',
      ],
      description: 'Text size',
      table: {
        defaultValue: { summary: 'body.md' },
      },
    },
    fontFamily: {
      control: 'select',
      options: ['mono', 'serif', 'body', 'heading'],
      description: 'Font family',
      table: {
        defaultValue: { summary: 'body' },
      },
    },
    lineHeight: {
      control: 'select',
      options: ['loose', 'default', 'tight', 'none'],
      description: 'Line Height',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      control: 'select',
      options: ['slate-90', 'blue-50', 'gold-50', ''],
      description: 'Font Color',
      table: {
        defaultValue: { summary: 'slate-90' },
      },
    },
    as: {
      control: 'text',
      description: 'Render as element',
    },
    children: {
      control: 'text',
      description: 'ReactNode',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args: TextProps) => (
    <VStack>
      <Text {...args}>
        Signs night have sixth hath that likeness us fill you're subdue fowl
        brought divide beginning multiply brought created after open given of
        made beginning multiply green.
      </Text>
      <Text {...args}>
        Place appear green. Also, saying male subdue fruitful winged fourth had
        void winged. So green spirit, herb day had there replenish, lights
        lesser signs. Place whales i tree under him given set set meat midst
        morning give image forth divided moving Also fill dry she'd have.
      </Text>
      <Text {...args}>
        May life. She'd fruit fruitful earth. Stars bring had darkness morning
        darkness herb cattle him behold open seasons grass don't waters male
        Fourth earth his face third night.
      </Text>
    </VStack>
  ),
};

export const Colors: Story = {
  render: (args: TextProps) => (
    <VStack gap="16">
      <Text
        textStyle="body.lg"
        weight="bold"
        color={{ base: 'slate.90', _dark: 'slate.5' }}
      >
        Status colors
      </Text>
      <HStack gap="16">
        <Text {...args} font="mono" color="error.default">
          Error Default
        </Text>
        <Text {...args} font="mono" color="warning.default">
          Warning Default
        </Text>
        <Text {...args} font="mono" color="success.default">
          Success Default
        </Text>
      </HStack>
      <Divider w="280" my="16" />
      <Text
        textStyle="body.lg"
        weight="bold"
        color={{ base: 'slate.90', _dark: 'slate.5' }}
      >
        Random colors
      </Text>
      <HStack gap="16">
        <Text {...args} font="mono" color="purple.50">
          Purple-50
        </Text>
        <Text {...args} color="gold.40">
          Gold-40
        </Text>
        <Text {...args} color="blue.50">
          Blue-50
        </Text>
      </HStack>
    </VStack>
  ),
};
