import type { Meta, StoryObj } from '@storybook/react';
import { useState, type FormEvent } from 'react';
import { userEvent, within, expect } from '@storybook/test';
import { CheckboxInput } from './CheckboxInput';
import { CheckboxChangeHandler } from '../Checkbox';
import { Box } from '../Box';
import { FormField } from '../FormField';
import { Button } from '../Button';
import { Card } from '../Card';

const meta: Meta<typeof CheckboxInput> = {
  title: 'Components/CheckboxInput',
  component: CheckboxInput,
  parameters: {
    layout: 'centered',
  },
  // Only include props explicitly defined in CheckboxInputProps
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the checkbox input',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'ID attribute for the checkbox input',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'Label text for the checkbox',
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
    indeterminate: {
      control: 'boolean',
      description: 'Display indeterminate state (partially checked)',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Checked state of the checkbox',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    name: 'checkbox',
    children: 'Checkbox label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default - Most common usage
export const Default: Story = {
  render: function DefaultRender() {
    const [checked, setChecked] = useState(false);
    const handleChange: CheckboxChangeHandler = (e) =>
      setChecked(e.target.checked);

    return (
      <CheckboxInput
        name="terms"
        id="terms"
        checked={checked}
        onChange={handleChange}
      >
        I accept the terms and conditions
      </CheckboxInput>
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
      <CheckboxInput
        name="unchecked"
        id="unchecked"
        checked={false}
        onChange={() => {}}
      >
        Unchecked
      </CheckboxInput>
      <CheckboxInput
        name="checked"
        id="checked"
        checked={true}
        onChange={() => {}}
      >
        Checked
      </CheckboxInput>
      <CheckboxInput
        name="indeterminate"
        id="indeterminate"
        indeterminate
        checked={false}
        onChange={() => {}}
      >
        Indeterminate
      </CheckboxInput>
      <CheckboxInput
        name="error"
        id="error"
        error={true}
        checked={false}
        onChange={() => {}}
      >
        Error state
      </CheckboxInput>
      <CheckboxInput
        name="disabled"
        id="disabled"
        disabled
        checked={false}
        onChange={() => {}}
      >
        Disabled
      </CheckboxInput>
      <CheckboxInput
        name="disabled-checked"
        id="disabled-checked"
        disabled
        checked={true}
        onChange={() => {}}
      >
        Disabled + Checked
      </CheckboxInput>
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
        <CheckboxInput
          name="interactive"
          id="interactive"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        >
          Click to toggle (currently: {checked ? 'checked' : 'unchecked'})
        </CheckboxInput>
      </Box>
    );
  },
};

export const ExCheckboxGroup: Story = {
  name: 'Ex: Checkbox Group with Select All',
  render: function ExCheckboxGroupRender() {
    const [selections, setSelections] = useState({
      option1: false,
      option2: true,
      option3: false,
      option4: false,
    });

    const handleChange =
      (key: keyof typeof selections) =>
      (e: Parameters<CheckboxChangeHandler>[0]) => {
        setSelections({ ...selections, [key]: e.target.checked });
      };

    // Calculate if parent should be indeterminate
    const checkedCount = Object.values(selections).filter(Boolean).length;
    const allChecked = checkedCount === Object.keys(selections).length;
    const someChecked =
      checkedCount > 0 && checkedCount < Object.keys(selections).length;

    const handleSelectAll: CheckboxChangeHandler = (e) => {
      const newValue = e.target.checked;
      setSelections({
        option1: newValue,
        option2: newValue,
        option3: newValue,
        option4: newValue,
      });
    };

    return (
      <Box display="flex" flexDirection="column" gap="12">
        <CheckboxInput
          name="select-all"
          id="select-all"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={handleSelectAll}
        >
          <Box as="strong">Select All</Box>
        </CheckboxInput>

        <Box ml="24" display="flex" flexDirection="column" gap="12">
          <CheckboxInput
            name="option1"
            id="option1"
            checked={selections.option1}
            onChange={handleChange('option1')}
          >
            Option 1
          </CheckboxInput>
          <CheckboxInput
            name="option2"
            id="option2"
            checked={selections.option2}
            onChange={handleChange('option2')}
          >
            Option 2
          </CheckboxInput>
          <CheckboxInput
            name="option3"
            id="option3"
            checked={selections.option3}
            onChange={handleChange('option3')}
          >
            Option 3
          </CheckboxInput>
          <CheckboxInput
            name="option4"
            id="option4"
            checked={selections.option4}
            onChange={handleChange('option4')}
          >
            Option 4
          </CheckboxInput>
        </Box>
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
      >
        <CheckboxInput
          name="newsletter"
          id="newsletter"
          checked={formData.newsletter}
          onChange={(e) =>
            setFormData({ ...formData, newsletter: e.target.checked })
          }
        >
          Subscribe to newsletter (optional)
        </CheckboxInput>

        <CheckboxInput
          name="terms"
          id="terms"
          checked={formData.terms}
          onChange={(e) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
          error={!formData.terms}
        >
          I accept the terms and conditions *
        </CheckboxInput>

        <CheckboxInput
          name="privacy"
          id="privacy"
          checked={formData.privacy}
          onChange={(e) =>
            setFormData({ ...formData, privacy: e.target.checked })
          }
          error={!formData.privacy}
        >
          I accept the privacy policy *
        </CheckboxInput>

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
    const handleChange: CheckboxChangeHandler = (e) =>
      setChecked(e.target.checked);

    return (
      <CheckboxInput
        name="accessible"
        id="accessible"
        checked={checked}
        onChange={handleChange}
      >
        Accessible checkbox
      </CheckboxInput>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find checkbox by role
    const checkbox = canvas.getByRole('checkbox');

    // Verify checkbox has accessible name from label
    expect(checkbox).toHaveAccessibleName('Accessible checkbox');

    // Test keyboard interaction
    checkbox.focus();
    expect(checkbox).toHaveFocus();

    // Test spacebar to check
    await userEvent.keyboard(' ');
    expect(checkbox).toBeChecked();

    // Test spacebar to uncheck
    await userEvent.keyboard(' ');
    expect(checkbox).not.toBeChecked();
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
  render: () => (
    <Box display="flex" flexDirection="column" gap="12">
      <CheckboxInput
        name="first"
        id="first"
        checked={false}
        onChange={() => {}}
      >
        First checkbox
      </CheckboxInput>
      <CheckboxInput
        name="second"
        id="second"
        checked={false}
        onChange={() => {}}
      >
        Second checkbox
      </CheckboxInput>
      <CheckboxInput
        name="third"
        id="third"
        checked={false}
        onChange={() => {}}
      >
        Third checkbox
      </CheckboxInput>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find first checkbox
    const firstCheckbox = canvas.getByRole('checkbox', { name: /first/i });

    // Focus first checkbox
    firstCheckbox.focus();
    expect(firstCheckbox).toHaveFocus();

    // Tab to next checkbox
    await userEvent.tab();
    const secondCheckbox = canvas.getByRole('checkbox', { name: /second/i });
    expect(secondCheckbox).toHaveFocus();

    // Tab to third checkbox
    await userEvent.tab();
    const thirdCheckbox = canvas.getByRole('checkbox', { name: /third/i });
    expect(thirdCheckbox).toHaveFocus();
  },
};
