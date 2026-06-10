import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoBlock } from "@mono/components";

type VideoRecord = ComponentProps<typeof VideoBlock>["record"];

const thumbnailUrl = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <rect width="1280" height="720" fill="#00264d"/>
  <circle cx="930" cy="220" r="150" fill="#d9822b"/>
  <path d="M120 500C250 380 380 390 500 510C620 630 770 640 900 520C1030 400 1140 395 1220 500" fill="none" stroke="#73d6ed" stroke-width="36" stroke-linecap="round"/>
</svg>
`)}`;

const record: VideoRecord = {
  __typename: "VideoRecord",
  id: "video-block",
  title: "Lundi Bleu live in de Amstelkerk",
  thumbnail: null,
  media: {
    __typename: "VideoField",
    provider: "youtube",
    providerUid: "M7lc1UVf-VE",
    title: "Lundi Bleu live in de Amstelkerk",
    url: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    thumbnailUrl,
    width: 1280,
    height: 720,
  },
  _createdAt: "2026-01-01T12:00:00+01:00",
  _firstPublishedAt: "2026-01-01T12:00:00+01:00",
  _publishedAt: "2026-01-01T12:00:00+01:00",
  _updatedAt: "2026-01-01T12:00:00+01:00",
};

const meta: Meta<typeof VideoBlock> = {
  title: "Components/VideoBlock",
  component: VideoBlock,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    record: {
      control: "object",
    },
    aspectRatio: {
      control: "text",
    },
    autoplay: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    record,
  },
};

export const SquareAspectRatio: Story = {
  args: {
    record,
    aspectRatio: "1 / 1",
  },
};
