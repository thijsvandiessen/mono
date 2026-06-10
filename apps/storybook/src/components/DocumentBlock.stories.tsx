import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DocumentBlock } from "@mono/components";

type DocumentRecord = ComponentProps<typeof DocumentBlock>["record"];

const cloudinaryDocument = {
  id: "programma-2027",
  public_id: "programma-2027",
  resource_type: "raw",
  type: "upload",
  format: "pdf",
  bytes: 2480000,
  width: 0,
  height: 0,
  duration: null,
  version: 1,
  tags: [],
  created_by: { type: "user", id: "user" },
  uploaded_by: { type: "user", id: "user" },
  secure_url: "https://example.com/documents/programma-2027.pdf",
};

const record: DocumentRecord = {
  __typename: "DocumentRecord",
  id: "document-block",
  document: cloudinaryDocument,
  _createdAt: "2026-01-01T12:00:00+01:00",
  _firstPublishedAt: "2026-01-01T12:00:00+01:00",
  _publishedAt: "2026-01-01T12:00:00+01:00",
  _updatedAt: "2026-01-01T12:00:00+01:00",
};

const meta: Meta<typeof DocumentBlock> = {
  title: "Components/DocumentBlock",
  component: DocumentBlock,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    record: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    record,
  },
};
