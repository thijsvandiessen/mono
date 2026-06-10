import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation } from "@mono/components";

type NavigationData = ComponentProps<typeof Navigation>["data"];

const navigationData: NavigationData = {
  id: "main-menu",
  title: "Hoofdmenu",
  menu: [
    { id: "1", slug: "homepage", label: "Home" },
    { id: "2", slug: "concerten", label: "Concerten" },
    {
      id: "3",
      label: "Over ons",
      items: [
        { id: "3-1", slug: "ensemble", label: "Het ensemble" },
        { id: "3-2", slug: "geschiedenis", label: "Geschiedenis" },
      ],
    },
    { id: "4", slug: "contact", label: "Contact" },
  ],
};

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "24rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: navigationData,
  },
};

export const WithoutSubMenu: Story = {
  args: {
    data: {
      ...navigationData,
      menu: navigationData.menu.filter((item) => "slug" in item),
    },
  },
};
