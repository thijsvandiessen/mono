import { describe, expect, it, vi } from "vitest";
import { NavigationItem } from "./index.js";
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

describe("NavigationItem", () => {
  it("should render a link", () => {
    const { container } = renderWithIntl(<NavigationItem slug={"url"} label={"homepage"} />);

    expect(screen.getByRole("link", { name: "homepage" })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render a link warning", () => {
    renderWithIntl(<NavigationItem />);

    expect(screen.getByText("Geen link opgegeven")).toBeInTheDocument();
  });

  it("should render a label warning", () => {
    renderWithIntl(<NavigationItem slug="test" />);

    expect(screen.getByText("Geen label opgegeven")).toBeInTheDocument();
  });

  it("should render the warnings in the configured locale", () => {
    renderWithIntl(<NavigationItem />, { locale: "en" });

    expect(screen.getByText("No link specified")).toBeInTheDocument();
  });
});
