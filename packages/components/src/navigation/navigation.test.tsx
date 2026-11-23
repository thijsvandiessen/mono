import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navigation } from "./navigation.js";
import type { ReactNode } from "react";
import { mockMenuData } from "./mocks/mockMenuData.js";

vi.mock("@mono/next-js", () => ({
  __esModule: true,
  Link: ({
    href,
    className,
    children,
  }: {
    href: string;
    className?: string;
    children: ReactNode;
  }) => (
    <a className={className} href={href}>
      {children}
    </a>
  ),
  Image: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

vi.mock("../mobileMenu/index.js", () => ({
  __esModule: true,
  MobileMenu: () => <nav>[MobileMenu]</nav>,
}));

vi.mock("../navigationItem/index.js", () => ({
  __esModule: true,
  NavigationItem: () => <li>[NavigationItem]</li>,
}));

vi.mock("../navigationSubMenu/index.js", () => ({
  __esModule: true,
  NavigationSubMenu: () => <li>[NavigationSubMenu]</li>,
}));

vi.mock("@mono/data", async () => {
  const originalModule = await vi.importActual<typeof import("@mono/data")>("@mono/data");
  return {
    __esModule: true,
    ...originalModule,
    client: vi.fn(),
    getGeneralInfo: vi.fn(),
    getSiteMetadata: vi.fn(() => ({
      metadata: {
        title: "",
        description: "Default description",
        base_url: "https://example.com",
      },
      error: undefined,
    })),
  };
});

describe("Concert component", () => {
  it("shows all the data", () => {
    const { container } = render(<Navigation data={mockMenuData} />);

    expect(container).toMatchSnapshot();
  });

  it("links the configured logo to the homepage", () => {
    render(
      <Navigation
        data={mockMenuData}
        logo={{ src: "/img/logo.svg", alt: "Acme", width: 175, height: 40 }}
      />,
    );

    expect(screen.getByRole("link", { name: "Acme" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("img", { name: "Acme" })).toHaveAttribute("src", "/img/logo.svg");
  });

  it("shows no logo when none is configured", () => {
    const { container } = render(<Navigation data={mockMenuData} />);

    expect(container.querySelector("img")).toBeNull();
  });
});
