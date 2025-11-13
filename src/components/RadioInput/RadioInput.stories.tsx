import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { userEvent, within, expect, fn } from '@storybook/test';
import { RadioInput } from './RadioInput';
import { RadioChangeHandler } from '../Radio';
import { Box } from '../Box';
import { Text } from '../Text';

const meta: Meta<typeof RadioInput> = {
  title: 'Components/RadioInput',
  component: RadioInput,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the radio input',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Value for this radio option',
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
    checked: {
      control: 'boolean',
      description: 'Checked state of the radio',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
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
  },
  args: {
    name: 'radio',
    value: 'option',
    checked: false,
    onChange: fn(),
    children: 'Radio label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default - Most common usage
export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [selected, setSelected] = useState('option1');
const handleChange = (e) => setSelected(e.target.value);

<RadioInput
  name="options"
  value="option1"
  checked={selected === 'option1'}
  onChange={handleChange}
>
  <Text>First option</Text>
</RadioInput>
<RadioInput
  name="options"
  value="option2"
  checked={selected === 'option2'}
  onChange={handleChange}
>
  <Text>Second option</Text>
</RadioInput>`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState('option1');
    const handleChange: RadioChangeHandler = (e) => setSelected(e.target.value);

    return (
      <Box display="flex" flexDirection="column" gap="8">
        <RadioInput
          name="options"
          value="option1"
          checked={selected === 'option1'}
          onChange={handleChange}
        >
          First option
        </RadioInput>
        <RadioInput
          name="options"
          value="option2"
          checked={selected === 'option2'}
          onChange={handleChange}
        >
          <Text>Second option</Text>
        </RadioInput>
      </Box>
    );
  },
};

// 2. All States - Show all variants/states together (PREFERRED)
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <Box display="flex" flexDirection="column" gap="16">
      <RadioInput
        name="unchecked"
        value="unchecked"
        checked={false}
        onChange={() => {}}
      >
        <Text>Unchecked</Text>
      </RadioInput>
      <RadioInput
        name="checked"
        value="checked"
        checked={true}
        onChange={() => {}}
      >
        <Text>Checked</Text>
      </RadioInput>
      <RadioInput
        name="error"
        value="error"
        checked={false}
        onChange={() => {}}
        error
      >
        <Text>Error state</Text>
      </RadioInput>
      <RadioInput
        name="disabled"
        value="disabled"
        checked={false}
        onChange={() => {}}
        disabled
      >
        <Text>Disabled</Text>
      </RadioInput>
      <RadioInput
        name="disabled-checked"
        value="disabled-checked"
        checked={true}
        onChange={() => {}}
        disabled
      >
        <Text>Disabled + Checked</Text>
      </RadioInput>
    </Box>
  ),
};

// 3. Example Stories - Use "Ex:" prefix
export const ExInteractive: Story = {
  name: 'Ex: Interactive Selection',
  render: () => {
    const [selected, setSelected] = useState('');

    return (
      <Box display="flex" flexDirection="column" gap="12">
        <Text fontWeight="bold" mb="8">
          Choose your preferred delivery method:
        </Text>
        <RadioInput
          name="delivery"
          value="standard"
          checked={selected === 'standard'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <Box>
            <Text fontWeight="bold">Standard Delivery</Text>
            <Text size="14" color={{ base: 'slate.60', _dark: 'slate.40' }}>
              5-7 business days • Free
            </Text>
          </Box>
        </RadioInput>
        <RadioInput
          name="delivery"
          value="express"
          checked={selected === 'express'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <Box>
            <Text fontWeight="bold">Express Delivery</Text>
            <Text size="14" color={{ base: 'slate.60', _dark: 'slate.40' }}>
              2-3 business days • $9.99
            </Text>
          </Box>
        </RadioInput>
        <RadioInput
          name="delivery"
          value="overnight"
          checked={selected === 'overnight'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <Box>
            <Text fontWeight="bold">Overnight Delivery</Text>
            <Text size="14" color={{ base: 'slate.60', _dark: 'slate.40' }}>
              Next business day • $24.99
            </Text>
          </Box>
        </RadioInput>
        {selected && (
          <Text mt="8" color={{ base: 'slate.60', _dark: 'slate.40' }}>
            Selected: {selected}
          </Text>
        )}
      </Box>
    );
  },
};

export const ExRadioGroupWithValidation: Story = {
  name: 'Ex: Radio Group with Validation',
  render: () => {
    const [preference, setPreference] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      if (preference) {
        alert(`Your preference: ${preference}`);
      }
    };

    const showError = submitted && !preference;

    return (
      <Box as="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap="16">
        <Text fontWeight="bold">
          How did you hear about us? *
        </Text>

        <RadioInput
          name="source"
          value="search"
          checked={preference === 'search'}
          onChange={(e) => setPreference(e.target.value)}
          error={showError}
        >
          Search engine
        </RadioInput>

        <RadioInput
          name="source"
          value="social"
          checked={preference === 'social'}
          onChange={(e) => setPreference(e.target.value)}
          error={showError}
        >
          Social media
        </RadioInput>

        <RadioInput
          name="source"
          value="referral"
          checked={preference === 'referral'}
          onChange={(e) => setPreference(e.target.value)}
          error={showError}
        >
          Friend referral
        </RadioInput>

        <RadioInput
          name="source"
          value="other"
          checked={preference === 'other'}
          onChange={(e) => setPreference(e.target.value)}
          error={showError}
        >
          Other
        </RadioInput>

        {showError && (
          <Text color="error.default" size="14">
            Please select an option
          </Text>
        )}

        <Box mt="8">
          <button type="submit" style={{ padding: '8px 16px' }}>
            Submit
          </button>
        </Box>
      </Box>
    );
  },
};

export const ExFormIntegration: Story = {
  name: 'Ex: Form Integration',
  render: () => {
    const [formData, setFormData] = useState({
      paymentMethod: '',
      shippingSpeed: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      alert(
        `Payment: ${formData.paymentMethod}\nShipping: ${formData.shippingSpeed}`
      );
    };

    const canSubmit = formData.paymentMethod && formData.shippingSpeed;

    return (
      <Box
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap="24"
        style={{ maxWidth: '400px' }}
      >
        <Box>
          <Text fontWeight="bold" mb="12">
            Payment Method
          </Text>
          <Box display="flex" flexDirection="column" gap="12">
            <RadioInput
              name="payment"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            >
              <Box>
                <Text>Credit or Debit Card</Text>
                <Text size="14" color={{ base: 'slate.60', _dark: 'slate.40' }}>
                  Visa, Mastercard, Amex
                </Text>
              </Box>
            </RadioInput>

            <RadioInput
              name="payment"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            >
              <Box>
                <Text>PayPal</Text>
                <Text size="14" color={{ base: 'slate.60', _dark: 'slate.40' }}>
                  Connect your PayPal account
                </Text>
              </Box>
            </RadioInput>

            <RadioInput
              name="payment"
              value="bank"
              checked={formData.paymentMethod === 'bank'}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            >
              <Box>
                <Text>Bank Transfer</Text>
                <Text size="14" color={{ base: 'slate.60', _dark: 'slate.40' }}>
                  Direct bank transfer
                </Text>
              </Box>
            </RadioInput>
          </Box>
        </Box>

        <Box>
          <Text fontWeight="bold" mb="12">
            Shipping Speed
          </Text>
          <Box display="flex" flexDirection="column" gap="12">
            <RadioInput
              name="shipping"
              value="standard"
              checked={formData.shippingSpeed === 'standard'}
              onChange={(e) =>
                setFormData({ ...formData, shippingSpeed: e.target.value })
              }
            >
              <Box>
                <Text>Standard (5-7 days)</Text>
                <Text size="14" color={{ base: 'slate.60', _dark: 'slate.40' }}>
                  Free
                </Text>
              </Box>
            </RadioInput>

            <RadioInput
              name="shipping"
              value="express"
              checked={formData.shippingSpeed === 'express'}
              onChange={(e) =>
                setFormData({ ...formData, shippingSpeed: e.target.value })
              }
            >
              <Box>
                <Text>Express (2-3 days)</Text>
                <Text size="14" color={{ base: 'slate.60', _dark: 'slate.40' }}>
                  $9.99
                </Text>
              </Box>
            </RadioInput>
          </Box>
        </Box>

        <Box mt="8">
          <button
            type="submit"
            disabled={!canSubmit}
            style={{ padding: '8px 16px' }}
          >
            Continue to Checkout
          </button>
        </Box>
      </Box>
    );
  },
};

// 4. Accessibility Stories - Use "A11y:" prefix
export const A11yAccessibilityCheck: Story = {
  name: 'A11y: Accessibility Check',
  render: () => {
    const [selected, setSelected] = useState('option1');
    const handleChange: RadioChangeHandler = (e) => setSelected(e.target.value);

    return (
      <Box display="flex" flexDirection="column" gap="12" role="radiogroup" aria-label="Options">
        <RadioInput
          name="accessible"
          value="option1"
          id="option1"
          checked={selected === 'option1'}
          onChange={handleChange}
        >
          First accessible option
        </RadioInput>
        <RadioInput
          name="accessible"
          value="option2"
          id="option2"
          checked={selected === 'option2'}
          onChange={handleChange}
        >
          Second accessible option
        </RadioInput>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find radios by role
    const radios = canvas.getAllByRole('radio');
    expect(radios).toHaveLength(2);

    // Verify first radio has accessible name
    if (radios[0]) {
      expect(radios[0]).toHaveAccessibleName(/first accessible option/i);

      // Test keyboard interaction
      radios[0].focus();
      expect(radios[0]).toHaveFocus();
    }

    // Click second radio
    if (radios[1]) {
      await userEvent.click(radios[1]);
      expect(radios[1]).toBeChecked();
      expect(radios[0]).not.toBeChecked();
    }
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
  },
};

export const A11yKeyboardNavigation: Story = {
  name: 'A11y: Keyboard Navigation',
  render: () => {
    const [selected, setSelected] = useState('');

    return (
      <Box display="flex" flexDirection="column" gap="12" role="radiogroup" aria-label="Sizes">
        <RadioInput
          name="size"
          value="small"
          checked={selected === 'small'}
          onChange={(e) => setSelected(e.target.value)}
        >
          Small
        </RadioInput>
        <RadioInput
          name="size"
          value="medium"
          checked={selected === 'medium'}
          onChange={(e) => setSelected(e.target.value)}
        >
          Medium
        </RadioInput>
        <RadioInput
          name="size"
          value="large"
          checked={selected === 'large'}
          onChange={(e) => setSelected(e.target.value)}
        >
          Large
        </RadioInput>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find radios
    const radios = canvas.getAllByRole('radio');

    // Test first radio
    if (radios[0]) {
      await userEvent.click(radios[0]);
      expect(radios[0]).toBeChecked();
    }

    // Test second radio
    if (radios[1]) {
      await userEvent.click(radios[1]);
      expect(radios[1]).toBeChecked();
      expect(radios[0]).not.toBeChecked();
    }

    // Test third radio
    if (radios[2]) {
      await userEvent.click(radios[2]);
      expect(radios[2]).toBeChecked();
      expect(radios[1]).not.toBeChecked();
    }
  },
};
