import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DefaultLayout } from "@mono/components";

type NavigationData = ComponentProps<typeof DefaultLayout>["navigationData"];
type SiteMetadata = ComponentProps<typeof DefaultLayout>["metadata"];

const navigationData: NavigationData = {
  id: "main-menu",
  title: "Hoofdmenu",
  menu: [
    { id: "1", slug: "homepage", label: "Home" },
    { id: "2", slug: "concerten", label: "Concerten" },
    { id: "3", slug: "over-ons", label: "Over ons" },
    { id: "4", slug: "contact", label: "Contact" },
  ],
};

const metadata: SiteMetadata = {
  title: "Lundi Bleu",
  description: "Franse kamermuziek in Amsterdam",
  base_url: "https://example.com",
  socials: [
    { name: "Facebook", url: "https://facebook.com/lundibleu" },
    { name: "Instagram", url: "https://instagram.com/lundibleu" },
  ],
};

const meta: Meta<typeof DefaultLayout> = {
  title: "Components/DefaultLayout",
  component: DefaultLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
    navigationData: {
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
    navigationData,
    metadata,
    children: (
      <div style={{ padding: "4rem 2rem", minHeight: "20rem" }}>
        <h1>Pagina inhoud</h1>
        <p>De hoofdinhoud van de pagina wordt tussen de navigatie en de footer geplaatst.</p>
      </div>
    ),
  },
};
