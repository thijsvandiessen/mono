import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageBlock } from "@mono/components";

type ImageRecord = ComponentProps<typeof ImageBlock>["record"];

const imageUrl = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#00264d"/>
  <circle cx="840" cy="240" r="170" fill="#d9822b"/>
  <path d="M100 560C220 440 340 450 450 570C560 690 700 700 820 580C940 460 1060 455 1160 570" fill="none" stroke="#73d6ed" stroke-width="40" stroke-linecap="round"/>
</svg>
`)}`;

const cloudinaryAsset = {
  id: "lundi-bleu-afbeelding",
  public_id: "lundi-bleu-afbeelding",
  resource_type: "image",
  type: "upload",
  format: "svg",
  bytes: 1024,
  width: 1200,
  height: 800,
  duration: null,
  version: 1,
  tags: [],
  created_by: { type: "user", id: "user" },
  uploaded_by: { type: "user", id: "user" },
  secure_url: imageUrl,
  alt: { en: "Abstract concert artwork" },
};

const record: ImageRecord = {
  __typename: "ImageRecord",
  id: "image-block",
  image: cloudinaryAsset,
  _createdAt: "2026-01-01T12:00:00+01:00",
  _firstPublishedAt: "2026-01-01T12:00:00+01:00",
  _publishedAt: "2026-01-01T12:00:00+01:00",
  _updatedAt: "2026-01-01T12:00:00+01:00",
};

const meta: Meta<typeof ImageBlock> = {
  title: "Components/ImageBlock",
  component: ImageBlock,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    record: {
      control: "object",
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
