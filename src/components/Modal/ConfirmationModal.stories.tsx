import { useState } from 'react';

import { Button } from '../Button';

import { ConfirmationModal } from './ConfirmationModal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ConfirmationModal> = {
  title: 'Components/ConfirmationModal',
  component: ConfirmationModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Non-form confirmation dialog with cancel and confirm actions. Use the `delete` variant for destructive confirmations.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
  name: 'Default',
  render: function DefaultRender() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Publish changes</Button>
        <ConfirmationModal
          open={open}
          onOpenChange={setOpen}
          title="Publish changes"
          description="This will make the current draft visible to all users."
          confirmLabel="Publish"
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const Delete: Story = {
  name: 'Delete',
  render: function DeleteRender() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete item</Button>
        <ConfirmationModal
          open={open}
          onOpenChange={setOpen}
          title="Delete Item"
          description="Are you sure you want to delete this item? This action cannot be undone."
          confirmLabel="Delete"
          variant="delete"
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const AsyncConfirm: Story = {
  name: 'Async Confirm',
  render: function AsyncConfirmRender() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete account</Button>
        <ConfirmationModal
          open={open}
          onOpenChange={setOpen}
          title="Delete Account"
          description="Your account and all associated data will be permanently removed."
          confirmLabel="Delete account"
          variant="delete"
          confirmLoading={confirmLoading}
          onConfirm={async () => {
            setConfirmLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setConfirmLoading(false);
            setOpen(false);
          }}
        />
      </>
    );
  },
};

export const ExDeleteItem: Story = {
  name: 'Ex: Delete Item',
  render: function ExDeleteItemRender() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete Item</Button>
        <ConfirmationModal
          open={open}
          onOpenChange={setOpen}
          title="Delete Item"
          description="Are you sure you want to delete this item? This action cannot be undone."
          confirmLabel="Delete"
          variant="delete"
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};
