import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LocationView } from "@mono/components";

type LocationData = ComponentProps<typeof LocationView>["data"];

const location: LocationData = {
  id: "amstelkerk",
  title: "Amstelkerk",
  address: "Amstelveld 10, Amsterdam",
  lat: 52.3635,
  lng: 4.8975,
  startTime: "2027-03-14T20:15:00+01:00",
  ticketLink: "https://example.com/tickets",
};

const meta: Meta<typeof LocationView> = {
  title: "Components/LocationView",
  component: LocationView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: location,
  },
};

export const WithoutAddress: Story = {
  args: {
    data: {
      ...location,
      address: null,
    },
  },
};

export const WithoutStartTime: Story = {
  args: {
    data: {
      ...location,
      startTime: null,
    },
  },
};

export const TitleOnly: Story = {
  args: {
    data: {
      ...location,
      address: null,
      startTime: null,
    },
  },
};
