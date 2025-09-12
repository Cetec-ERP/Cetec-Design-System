import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // Defines the controls, and descriptions for the Docs page
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    href: {
      control: false,
      // description: 'Use this to make the button act as a link.',
      table: {
        defaultValue: { summary: undefined },
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      table: {
        defaultValue: { summary: undefined },
        type: { summary: 'button label | react node' },
      },
    },
    size: {
      control: 'select',
      options: ['small','medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'small | medium | large' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'reset', 'submit'],
      table: {
        defaultValue: { summary: 'button' },
        type: { summary: 'button | reset | submit' },
      },
    },
    variant: {
      control: 'select',
      options:  ['primary', 'standard', 'hollow', 'ghost', 'cta', 'danger'],
      table: {
        defaultValue: { summary: 'standard' },
        type: { summary: 'primary | standard | hollow | ghost | cta | danger' },
      },
    },
  },
  // defines defauls for story
  args: { 
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Defines the defaults
  args: {
    children: 'Button',
  },
};
