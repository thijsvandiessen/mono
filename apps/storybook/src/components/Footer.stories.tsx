import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "@mono/components";
import type { NavigationData, SiteMetadata } from "@mono/data";

const mockNavigationData: NavigationData = {
  menu: [
    { id: "1", slug: "home", label: "Home" },
    { id: "2", slug: "concerts", label: "Concerten" },
    { id: "3", slug: "about", label: "Over ons" },
    { id: "4", slug: "contact", label: "Contact" },
  ],
};

const mockSiteMetadata: SiteMetadata = {
  title: "Lundi Bleu",
  socials: [
    { name: "Facebook", url: "https://facebook.com/lundibleu" },
    { name: "Instagram", url: "https://instagram.com/lundibleu" },
    { name: "YouTube", url: "https://youtube.com/lundibleu" },
  ],
};

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
    },
    metadata: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockNavigationData,
    metadata: mockSiteMetadata,
  },
};

export const WithoutSocials: Story = {
  args: {
    data: mockNavigationData,
    metadata: {
      ...mockSiteMetadata,
      socials: [],
    } as SiteMetadata,
  },
};
