import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorMessage } from "@mono/components";

const meta: Meta<typeof ErrorMessage> = {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    error: {
      control: false,
    },
    reset: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: new Error("Er ging iets mis bij het laden van de pagina."),
    reset: () => {
      console.log("reset() called");
    },
  },
};
