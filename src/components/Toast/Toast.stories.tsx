import { expect, userEvent, within } from '@storybook/test';

import { HStack, VStack } from '@styled-system/jsx';

import { Button } from '../Button';
import { Text } from '../Text';

import { Toast } from './Toast';
import { ToastProvider } from './ToastProvider';
import { useToast } from './useToast';

import type { Meta, StoryObj } from '@storybook/react';

const description = `
\`Toast\` is the transient, non-blocking placement: it confirms an outcome and
gets out of the way. Applications almost never render it directly — they mount
\`ToastProvider\` once and queue toasts imperatively with \`useToast\`.

| Category | Placement | Tone | Dismiss |
| --- | --- | --- | --- |
| System | \`PageBanner\` | danger / warning / info | No — until resolved |
| Feedback, blocking | \`Alert\` | danger | Yes |
| Feedback, non-blocking | \`Toast\` | success / danger | Auto |
| Awareness, section | \`Alert\` | info / warning / neutral | Optional |
| Awareness, field | \`InlineNote\` | info / warning / danger | No |

\`\`\`tsx
<ToastProvider>
  <App />
</ToastProvider>

const toast = useToast();
toast.success('Saved');
const id = toast.danger('Could not save', {
  primaryAction: <Button size="sm" onClick={retry}>Retry</Button>,
});
toast.dismiss(id);
\`\`\`

**Stack.** Fixed bottom-right, 24px inset, 12px gap, newest nearest the corner,
capped at three. A fourth arriving pushes the oldest out.

**Timing.** Five seconds by default. The countdown pauses on hover and on
keyboard focus and resumes from the time remaining. \`tone="danger"\` never
auto-dismisses — the provider pins it open, so no call site has to remember.

**Actions.** Same API as \`Alert\` and \`PageBanner\`: \`primaryAction\` and
\`secondaryAction\`, each a \`Button\`, both optional.

**Accessibility.** \`role="alert"\` when \`tone\` is \`danger\`,
\`role="status"\` otherwise. \`tone="neutral"\` renders no icon. The slide-in
animation is suppressed under \`prefers-reduced-motion\`.
`;

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: description } } },
  argTypes: {
    tone: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger', 'neutral'],
    },
    dismissible: { control: 'boolean' },
  },
  args: {
    tone: 'success',
    dismissible: true,
    children: 'Work order 10482 was saved.',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Renders the presentation in place, outside the provider stack. */
export const Default: Story = {
  render: (args) => (
    <VStack alignItems="start" gap="12">
      <Toast {...args} />
    </VStack>
  ),
};

export const Tones: Story = {
  name: 'Every tone',
  render: () => (
    <VStack alignItems="start" gap="12">
      <Toast tone="info">A scheduled export is ready to download.</Toast>
      <Toast tone="success">Work order 10482 was saved.</Toast>
      <Toast tone="warning">Two line items are missing a unit cost.</Toast>
      <Toast tone="danger">Could not save work order 10482.</Toast>
      <Toast tone="neutral">Neutral renders no icon, by design.</Toast>
    </VStack>
  ),
};

export const Actions: Story = {
  name: 'Zero, one, and two actions',
  render: () => (
    <VStack alignItems="start" gap="12">
      <Toast tone="success">No actions.</Toast>
      <Toast tone="success" primaryAction={<Button size="sm">Undo</Button>}>
        One action.
      </Toast>
      <Toast
        tone="danger"
        primaryAction={
          <Button size="sm" variant="danger">
            Retry
          </Button>
        }
        secondaryAction={
          <Button size="sm" variant="ghost">
            View log
          </Button>
        }
      >
        Two actions.
      </Toast>
    </VStack>
  ),
};

export const Dismissible: Story = {
  name: 'Dismissible and non-dismissible',
  render: () => (
    <VStack alignItems="start" gap="12">
      <Toast tone="info" dismissible>
        Dismissible: the close control calls `onDismiss`.
      </Toast>
      <Toast tone="info" dismissible={false}>
        Not dismissible: this toast can only time out.
      </Toast>
    </VStack>
  ),
};

const LiveControls = () => {
  const toast = useToast();

  return (
    <VStack alignItems="start" gap="12">
      <Text textStyle="body.sm">
        Each button queues a real toast into the bottom-right stack.
      </Text>
      <HStack gap="8" flexWrap="wrap">
        <Button size="sm" onClick={() => toast.info('Export is ready.')}>
          info
        </Button>
        <Button
          size="sm"
          onClick={() => toast.success('Work order 10482 was saved.')}
        >
          success
        </Button>
        <Button
          size="sm"
          onClick={() => toast.warning('Two line items are missing a cost.')}
        >
          warning
        </Button>
        <Button
          size="sm"
          variant="danger"
          onClick={() =>
            toast.danger('Could not save work order 10482.', {
              primaryAction: <Button size="sm">Retry</Button>,
            })
          }
        >
          danger
        </Button>
        <Button size="sm" onClick={() => toast.neutral('Nothing to report.')}>
          neutral
        </Button>
        <Button size="sm" variant="ghost" onClick={() => toast.dismissAll()}>
          dismissAll
        </Button>
      </HStack>
    </VStack>
  );
};

export const ExLiveStack: Story = {
  name: 'Ex: live imperative stack',
  render: () => (
    <ToastProvider>
      <LiveControls />
    </ToastProvider>
  ),
};

const StackCapControls = () => {
  const toast = useToast();

  return (
    <VStack alignItems="start" gap="12">
      <Text textStyle="body.sm">
        The stack holds three. A fourth pushes the oldest out.
      </Text>
      <Button
        size="sm"
        onClick={() => {
          toast.info('First', { duration: 60000 });
          toast.info('Second', { duration: 60000 });
          toast.info('Third', { duration: 60000 });
          toast.info('Fourth', { duration: 60000 });
        }}
      >
        Queue four toasts
      </Button>
    </VStack>
  );
};

export const StackCap: Story = {
  name: 'Test: stack caps at three',
  render: () => (
    <ToastProvider>
      <StackCapControls />
    </ToastProvider>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', { name: 'Queue four toasts' }),
    );

    const body = within(canvasElement.ownerDocument.body);
    const toasts = await body.findAllByRole('status');

    await expect(toasts).toHaveLength(3);
    await expect(body.queryByText('First')).not.toBeInTheDocument();
    await expect(body.getByText('Fourth')).toBeInTheDocument();
  },
};

const DangerPersistenceControls = () => {
  const toast = useToast();

  return (
    <VStack alignItems="start" gap="12">
      <Text textStyle="body.sm">
        The provider pins danger toasts open even when the call site asks for a
        short duration.
      </Text>
      <Button
        size="sm"
        variant="danger"
        onClick={() =>
          toast.danger('Could not save. This will not time out.', {
            duration: 100,
          })
        }
      >
        Queue a danger toast with duration 100
      </Button>
    </VStack>
  );
};

export const DangerNeverAutoDismisses: Story = {
  name: 'Test: danger never auto-dismisses',
  render: () => (
    <ToastProvider>
      <DangerPersistenceControls />
    </ToastProvider>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(
      canvas.getByRole('button', {
        name: 'Queue a danger toast with duration 100',
      }),
    );

    await expect(await body.findByRole('alert')).toBeInTheDocument();

    // Well past the requested 100ms lifetime the provider refused to honour.
    await new Promise((resolve) => setTimeout(resolve, 600));

    await expect(body.getByRole('alert')).toBeInTheDocument();
  },
};
