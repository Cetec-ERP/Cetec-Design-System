import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconNames } from ".";
import { Box } from "../Box";
import { HStack, Wrap } from "@styled-system/jsx";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "aa-placeholder", // or any default icon name
  },
  render: () => (
    <Box>
      <Wrap>
        {Object.entries(IconNames).map(([key, name]) => (
          <Icon key={key} name={name} />
        ))}
      </Wrap>
    </Box>
  ),
};
