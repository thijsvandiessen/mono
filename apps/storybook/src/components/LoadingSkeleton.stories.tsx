import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingSkeleton } from "@mono/components";

const meta: Meta<typeof LoadingSkeleton> = {
  title: "Components/LoadingSkeleton",
  component: LoadingSkeleton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
