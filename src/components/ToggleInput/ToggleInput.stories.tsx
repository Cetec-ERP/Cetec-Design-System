import type { Meta, StoryObj } from '@storybook/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { userEvent, within, expect } from '@storybook/test';
import { ToggleInput } from './ToggleInput';
import { ToggleChangeHandler } from '../Toggle';
import { Box } from '../Box';
import { FormField } from '../FormField';
import { Button } from '../Button';
import { Card } from '../Card';

const meta: Meta<typeof ToggleInput> = {
  title: 'Components/ToggleInput',
  component: ToggleInput,
  parameters: {
    layout: 'centered',
  },
  // Only include props explicitly defined in ToggleInputProps
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the toggle input',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'ID attribute for the toggle input',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'Label text for the toggle',
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
      description: 'Disable the toggle',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Checked state of the toggle',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    name: 'toggle',
    children: 'Toggle label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default - Most common usage
export const Default: Story = {
  render: function DefaultRender() {
    const [checked, setChecked] = useState(false);
    const handleChange: ToggleChangeHandler = (e) =>
      setChecked(e.target.checked);

    return (
      <ToggleInput
        name="terms"
        id="terms"
        checked={checked}
        onChange={handleChange}
      >
        I accept the terms and conditions
      </ToggleInput>
    );
  },
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
      <ToggleInput
        name="unchecked"
        id="unchecked"
        checked={false}
        onChange={() => {}}
      >
        Unchecked
      </ToggleInput>
      <ToggleInput
        name="checked"
        id="checked"
        checked={true}
        onChange={() => {}}
      >
        Checked
      </ToggleInput>
      <ToggleInput
        name="error"
        id="error"
        error={true}
        checked={false}
        onChange={() => {}}
      >
        Error state
      </ToggleInput>
      <ToggleInput
        name="disabled"
        id="disabled"
        disabled
        checked={false}
        onChange={() => {}}
      >
        Disabled
      </ToggleInput>
      <ToggleInput
        name="disabled-checked"
        id="disabled-checked"
        disabled
        checked={true}
        onChange={() => {}}
      >
        Disabled + Checked
      </ToggleInput>
    </Card>
  ),
};

// 3. Example Stories - Use "Ex:" prefix
export const ExInteractive: Story = {
  name: 'Ex: Interactive Toggle',
  render: function ExInteractiveRender() {
    const [checked, setChecked] = useState(false);

    return (
      <Box display="flex" flexDirection="column" gap="12">
        <ToggleInput
          name="interactive"
          id="interactive"
          checked={checked}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChecked(e.target.checked)
          }
        >
          Click to toggle (currently: {checked ? 'checked' : 'unchecked'})
        </ToggleInput>
      </Box>
    );
  },
};

export const ExFormIntegration: Story = {
  name: 'Ex: As FormField',
  render: function ExFormIntegrationRender() {
    const [formData, setFormData] = useState({
      newsletter: false,
      terms: false,
      privacy: false,
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      alert(
        `Form submitted:\nNewsletter: ${formData.newsletter}\nTerms: ${formData.terms}\nPrivacy: ${formData.privacy}`,
      );
    };

    const allAccepted = formData.terms && formData.privacy;

    return (
      <FormField
        onSubmit={handleSubmit}
        label="FormField Integration"
        labelFor="newsletter"
        required
        maxW="lg"
      >
        <ToggleInput
          name="newsletter"
          id="newsletter"
          checked={formData.newsletter}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, newsletter: e.target.checked })
          }
        >
          Subscribe to newsletter (optional)
        </ToggleInput>

        <ToggleInput
          name="terms"
          id="terms"
          checked={formData.terms}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
          error={!formData.terms}
        >
          I accept the terms and conditions *
        </ToggleInput>

        <ToggleInput
          name="privacy"
          id="privacy"
          checked={formData.privacy}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, privacy: e.target.checked })
          }
          error={!formData.privacy}
        >
          I accept the privacy policy *
        </ToggleInput>

        <Box mt="8">
          <Button type="submit" disabled={!allAccepted}>
            Submit
          </Button>
        </Box>
      </FormField>
    );
  },
};

// 4. Accessibility Stories - Use "A11y:" prefix
export const A11yAccessibilityCheck: Story = {
  name: 'A11y: Accessibility Check',
  render: function A11yAccessibilityCheckRender() {
    const [checked, setChecked] = useState(false);
    const handleChange: ToggleChangeHandler = (e) =>
      setChecked(e.target.checked);

    return (
      <ToggleInput
        name="accessible"
        id="accessible"
        checked={checked}
        onChange={handleChange}
      >
        Accessible toggle
      </ToggleInput>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find toggle by role
    const toggle = canvas.getByRole('checkbox');

    // Verify toggle has accessible name from label
    expect(toggle).toHaveAccessibleName('Accessible toggle');

    // Test keyboard interaction
    toggle.focus();
    expect(toggle).toHaveFocus();

    // Test spacebar to check
    await userEvent.keyboard(' ');
    expect(toggle).toBeChecked();

    // Test spacebar to uncheck
    await userEvent.keyboard(' ');
    expect(toggle).not.toBeChecked();
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
  render: function A11yKeyboardNavigationRender() {
    const [firstChecked, setFirstChecked] = useState(false);
    const [secondChecked, setSecondChecked] = useState(false);
    const [thirdChecked, setThirdChecked] = useState(false);

    return (
      <Box display="flex" flexDirection="column" gap="4">
        <ToggleInput
          name="first"
          id="first"
          checked={firstChecked}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstChecked(e.target.checked)
          }
        >
          First toggle
        </ToggleInput>
        <ToggleInput
          name="second"
          id="second"
          checked={secondChecked}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSecondChecked(e.target.checked)
          }
        >
          Second toggle
        </ToggleInput>
        <ToggleInput
          name="third"
          id="third"
          checked={thirdChecked}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setThirdChecked(e.target.checked)
          }
        >
          Third toggle
        </ToggleInput>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find first toggle
    const firstToggle = canvas.getByRole('checkbox', { name: /first/i });

    // Focus first toggle
    firstToggle.focus();
    expect(firstToggle).toHaveFocus();

    // Tab to next toggle
    await userEvent.tab();
    const secondToggle = canvas.getByRole('checkbox', { name: /second/i });
    expect(secondToggle).toHaveFocus();

    // Tab to third toggle
    await userEvent.tab();
    const thirdToggle = canvas.getByRole('checkbox', { name: /third/i });
    expect(thirdToggle).toHaveFocus();
  },
};
