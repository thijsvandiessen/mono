import type { Meta, StoryObj } from "@storybook/react-vite";
import { StyleGuide } from "@mono/components";

const meta: Meta<typeof StyleGuide> = {
  title: "Components/StyleGuide",
  component: StyleGuide,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
