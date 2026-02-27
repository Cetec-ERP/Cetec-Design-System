import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { useId, useState, type ChangeEvent, type FormEvent } from 'react';
import { RadioInput } from './RadioInput';
import { Box } from '../Box';
import { FormField } from '../FormField';
import { Button } from '../Button';
import { Card } from '../Card';

/**
 * RadioInput combines a radio control and label for grouped selection.
 */
const meta = {
  title: 'Components/RadioInput',
  component: RadioInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // Only include props explicitly defined in RadioInputProps
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the radio input',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'ID attribute for the radio input',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'Label text for the radio',
      table: {
        defaultValue: { summary: undefined },
        type: { summary: 'string | ReactNode' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Display error state',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the radio',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Checked state of the radio',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    name: 'radio',
    children: 'Radio label',
    checked: true,
    onChange: fn(),
  },
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default - Most common usage
export const Default: Story = {
  render: function DefaultRender() {
    const groupId = useId();
    const optionOneId = `${groupId}-option-1`;
    const optionTwoId = `${groupId}-option-2`;
    const [selected, setSelected] = useState('option-1');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.id === optionOneId) {
        setSelected('option-1');
        return;
      }
      setSelected('option-2');
    };

    return (
      <Box display="flex" flexDirection="column" gap="12">
        <RadioInput
          name={`${groupId}-default-group`}
          id={optionOneId}
          checked={selected === 'option-1'}
          onChange={handleChange}
        >
          Option 1
        </RadioInput>
        <RadioInput
          name={`${groupId}-default-group`}
          id={optionTwoId}
          checked={selected === 'option-2'}
          onChange={handleChange}
        >
          Option 2
        </RadioInput>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

// 2. All States - Show all variants/states together (PREFERRED)
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <Card
      bg="bg.accent.tan.subtlest"
      p="24"
      display="flex"
      flexDirection="column"
      gap="16"
    >
      <RadioInput
        name="unchecked"
        id="unchecked"
        checked={false}
        onChange={() => {}}
      >
        Unchecked
      </RadioInput>
      <RadioInput
        name="checked"
        id="checked"
        checked={true}
        onChange={() => {}}
      >
        Checked
      </RadioInput>
      <RadioInput
        name="error"
        id="error"
        error={true}
        checked={false}
        onChange={() => {}}
      >
        Error state
      </RadioInput>
      <RadioInput
        name="disabled"
        id="disabled"
        disabled
        checked={false}
        onChange={() => {}}
      >
        Disabled
      </RadioInput>
      <RadioInput
        name="disabled-checked"
        id="disabled-checked"
        disabled
        checked={true}
        onChange={() => {}}
      >
        Disabled + Checked
      </RadioInput>
    </Card>
  ),
  parameters: { controls: { disable: true } },
};

// 3. Example Stories - Use "Ex:" prefix
export const ExInteractive: Story = {
  name: 'Ex: Interactive Group',
  render: function ExInteractiveRender() {
    const groupId = useId();
    const standardId = `${groupId}-standard`;
    const expressId = `${groupId}-express`;
    const overnightId = `${groupId}-overnight`;
    const [selected, setSelected] = useState('standard');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.id === standardId) {
        setSelected('standard');
        return;
      }
      if (e.target.id === expressId) {
        setSelected('express');
        return;
      }
      setSelected('overnight');
    };

    return (
      <Box display="flex" flexDirection="column" gap="12">
        <RadioInput
          name={`${groupId}-shipping-speed`}
          id={standardId}
          checked={selected === 'standard'}
          onChange={handleChange}
        >
          Standard (3-5 days)
        </RadioInput>
        <RadioInput
          name={`${groupId}-shipping-speed`}
          id={expressId}
          checked={selected === 'express'}
          onChange={handleChange}
        >
          Express (1-2 days)
        </RadioInput>
        <RadioInput
          name={`${groupId}-shipping-speed`}
          id={overnightId}
          checked={selected === 'overnight'}
          onChange={handleChange}
        >
          Overnight
        </RadioInput>
        <Box as="p">Selected: {selected}</Box>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const ExFormIntegration: Story = {
  name: 'Ex: As FormField',
  render: function ExFormIntegrationRender() {
    const groupId = useId();
    const emailId = `${groupId}-contact-email`;
    const phoneId = `${groupId}-contact-phone`;
    const textId = `${groupId}-contact-text`;
    const [contactPreference, setContactPreference] = useState('contact-email');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form submitted:', { contactPreference });
      alert(`Form submitted:\nContact preference: ${contactPreference}`);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.id === emailId) {
        setContactPreference('contact-email');
        return;
      }
      if (e.target.id === phoneId) {
        setContactPreference('contact-phone');
        return;
      }
      setContactPreference('contact-text');
    };

    return (
      <FormField
        onSubmit={handleSubmit}
        label="Preferred Contact Method"
        labelFor={emailId}
        required
        maxW="lg"
      >
        <RadioInput
          name={`${groupId}-contact-preference`}
          id={emailId}
          checked={contactPreference === 'contact-email'}
          onChange={handleChange}
        >
          Email
        </RadioInput>
        <RadioInput
          name={`${groupId}-contact-preference`}
          id={phoneId}
          checked={contactPreference === 'contact-phone'}
          onChange={handleChange}
        >
          Phone
        </RadioInput>
        <RadioInput
          name={`${groupId}-contact-preference`}
          id={textId}
          checked={contactPreference === 'contact-text'}
          onChange={handleChange}
        >
          Text Message
        </RadioInput>

        <Box mt="8">
          <Button type="submit">Submit</Button>
        </Box>
      </FormField>
    );
  },
  parameters: { controls: { disable: true } },
};

// 4. Accessibility Stories - Use "A11y:" prefix
export const A11yAccessibilityCheck: Story = {
  name: 'A11y: Accessibility Check',
  render: function A11yAccessibilityCheckRender() {
    const radioId = useId();
    const [checked, setChecked] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      setChecked(e.target.checked);

    return (
      <RadioInput
        name={`${radioId}-accessible`}
        id={radioId}
        checked={checked}
        onChange={handleChange}
      >
        Accessible radio
      </RadioInput>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find radio by role
    const radio = canvas.getByRole('radio');

    // Verify radio has accessible name from label
    expect(radio).toHaveAccessibleName('Accessible radio');

    // Test keyboard interaction
    radio.focus();
    expect(radio).toHaveFocus();

    // Test spacebar to check
    await userEvent.keyboard(' ');
    expect(radio).toBeChecked();
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
        ],
      },
    },
    controls: { disable: true },
  },
};

export const A11yKeyboardNavigation: Story = {
  name: 'A11y: Keyboard Navigation',
  render: function A11yKeyboardNavigationRender() {
    const groupId = useId();
    const firstId = `${groupId}-first`;
    const secondId = `${groupId}-second`;
    const thirdId = `${groupId}-third`;
    const [selected, setSelected] = useState('first');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.id === firstId) {
        setSelected('first');
        return;
      }
      if (e.target.id === secondId) {
        setSelected('second');
        return;
      }
      setSelected('third');
    };

    return (
      <Box display="flex" flexDirection="column" gap="12">
        <RadioInput
          name={`${groupId}-keyboard-group`}
          id={firstId}
          checked={selected === 'first'}
          onChange={handleChange}
        >
          First radio
        </RadioInput>
        <RadioInput
          name={`${groupId}-keyboard-group`}
          id={secondId}
          checked={selected === 'second'}
          onChange={handleChange}
        >
          Second radio
        </RadioInput>
        <RadioInput
          name={`${groupId}-keyboard-group`}
          id={thirdId}
          checked={selected === 'third'}
          onChange={handleChange}
        >
          Third radio
        </RadioInput>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find selected radio (first option)
    const firstRadio = canvas.getByRole('radio', { name: /first/i });

    // Focus selected radio
    firstRadio.focus();
    expect(firstRadio).toHaveFocus();

    // Arrow down should move selection to next radio in group
    await userEvent.keyboard('{ArrowDown}');
    const secondRadio = canvas.getByRole('radio', { name: /second/i });
    expect(secondRadio).toHaveFocus();
    expect(secondRadio).toBeChecked();

    // Arrow down should move selection again
    await userEvent.keyboard('{ArrowDown}');
    const thirdRadio = canvas.getByRole('radio', { name: /third/i });
    expect(thirdRadio).toHaveFocus();
    expect(thirdRadio).toBeChecked();
  },
  parameters: { controls: { disable: true } },
};

export const Interactive: Story = {
  args: {
    name: 'interactive-radio',
    id: 'interactive-radio',
    children: 'Interactive radio label',
    checked: false,
    onChange: fn(),
    error: false,
    disabled: false,
  },
};
