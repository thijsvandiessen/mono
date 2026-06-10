import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoPlaceholder } from "@mono/components";

const placeholderContent = (
  <div
    style={{
      display: "grid",
      placeItems: "center",
      width: "100%",
      height: "100%",
      background: "#00264d",
      color: "#ffffff",
    }}
  >
    Video inhoud
  </div>
);

const meta: Meta<typeof VideoPlaceholder> = {
  title: "Components/VideoPlaceholder",
  component: VideoPlaceholder,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
    aspectRatio: {
      control: "text",
    },
    renderPlayButton: {
      control: "boolean",
    },
    showPlayIcon: {
      control: "boolean",
    },
    onPlayButtonClick: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: placeholderContent,
  },
};

export const WithPlayButton: Story = {
  args: {
    children: placeholderContent,
    renderPlayButton: true,
    showPlayIcon: true,
    onPlayButtonClick: () => {
      console.log("play button clicked");
    },
  },
};

export const SquareAspectRatio: Story = {
  args: {
    children: placeholderContent,
    aspectRatio: "1 / 1",
  },
};
