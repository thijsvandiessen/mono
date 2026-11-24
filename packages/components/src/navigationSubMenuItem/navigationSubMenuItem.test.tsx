import { describe, expect, it, vi } from "vitest";
import { NavigationSubMenuItem } from "../navigationSubMenuItem/index.js";
import { renderWithIntl } from "../test-utils/renderWithIntl.js";
import { screen } from "@testing-library/react";

vi.mock("@mono/next-js", () => {
  return {
    _esModule: true,
    Link: vi.fn(({ href, onClick, className, children }) => (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    )),
  };
});

describe("NavigationSubMenuItem", () => {
  it("should render a link", () => {
    const { container } = renderWithIntl(
      <NavigationSubMenuItem onClick={() => null} slug="url" label="homepage" />,
    );

    expect(screen.getByRole("link", { name: "homepage" })).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("should render a link warning", () => {
    renderWithIntl(<NavigationSubMenuItem onClick={() => null} />);

    expect(screen.getByText("Geen link opgegeven")).toBeVisible();
  });

  it("should render a label warning", () => {
    renderWithIntl(<NavigationSubMenuItem onClick={() => null} slug="test" />);

    expect(screen.getByText("Geen label opgegeven")).toBeVisible();
  });
});
