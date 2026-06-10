import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CallToAction } from "@mono/components";

type CallToActionRecord = ComponentProps<typeof CallToAction>["record"];

const timestamps = {
  _createdAt: "2026-01-01T12:00:00+01:00",
  _firstPublishedAt: "2026-01-01T12:00:00+01:00",
  _publishedAt: "2026-01-01T12:00:00+01:00",
  _updatedAt: "2026-01-01T12:00:00+01:00",
};

const externalRecord: CallToActionRecord = {
  __typename: "CallToActionRecord",
  id: "cta-external",
  label: "Koop kaarten",
  variant: "primary",
  externalUrl: "https://example.com/tickets",
  pageLink: null,
  ...timestamps,
};

const pageLinkRecord: CallToActionRecord = {
  __typename: "CallToActionRecord",
  id: "cta-page",
  label: "Lees meer over ons",
  variant: "secondary",
  externalUrl: null,
  pageLink: {
    __typename: "PageRecord",
    id: "page-over-ons",
    title: "Over ons",
    slug: "over-ons",
    ...timestamps,
  },
  ...timestamps,
};

const concertLinkRecord: CallToActionRecord = {
  __typename: "CallToActionRecord",
  id: "cta-concert",
  label: "Bekijk het concert",
  variant: "tertiary",
  externalUrl: null,
  pageLink: {
    __typename: "ConcertRecord",
    id: "concert-lundi-bleu",
    title: "Lundi Bleu speelt Franse kamermuziek",
    slug: "lundi-bleu-amstelkerk",
    ...timestamps,
  },
  ...timestamps,
};

const meta: Meta<typeof CallToAction> = {
  title: "Components/CallToAction",
  component: CallToAction,
  parameters: {
    layout: "centered",
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

export const ExternalLink: Story = {
  args: {
    record: externalRecord,
  },
};

export const PageLink: Story = {
  args: {
    record: pageLinkRecord,
  },
};

export const ConcertLink: Story = {
  args: {
    record: concertLinkRecord,
  },
};
