import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowDown, ArrowRight, Cross, Hamburger, Logo, Pdf, Play } from "@mono/components";

const icons = {
  ArrowDown,
  ArrowRight,
  Cross,
  Hamburger,
  Pdf,
  Play,
} as const;

const meta: Meta = {
  title: "Components/Icons",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {Object.entries(icons).map(([name, Icon]) => (
        <figure key={name} style={{ margin: 0, textAlign: "center" }}>
          <Icon />
          <figcaption style={{ fontSize: "0.75rem" }}>{name}</figcaption>
        </figure>
      ))}
    </div>
  ),
};

export const LogoIcon: Story = {
  render: () => <Logo />,
};
