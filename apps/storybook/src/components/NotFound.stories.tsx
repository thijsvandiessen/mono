import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotFound } from "@mono/components";

const meta: Meta<typeof NotFound> = {
  title: "Components/NotFound",
  component: NotFound,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
