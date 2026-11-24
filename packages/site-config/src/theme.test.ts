import { defaultTheme, resolveTheme, themeToCss } from "./theme.js";
import { describe, expect, it } from "vitest";

describe("resolveTheme", () => {
  it("uses the default theme when a site sets nothing", () => {
    expect(resolveTheme()).toEqual(defaultTheme);
  });

  it("only overrides what a site sets", () => {
    const theme = resolveTheme({
      colors: { primary: "#123456" },
      fonts: { serif: { family: "brand", faces: [{ src: "/fonts/brand.woff2" }] } },
    });
    expect(theme.colors).toEqual({ ...defaultTheme.colors, primary: "#123456" });
    expect(theme.fonts.sans).toEqual(defaultTheme.fonts.sans);
    expect(theme.fonts.serif).toEqual({
      ...defaultTheme.fonts.serif,
      family: "brand",
      faces: [{ src: "/fonts/brand.woff2" }],
    });
  });

  it.each([
    ["a color that closes the rule", { colors: { primary: "red} body{display:none" } }],
    ["a color that ends the style element", { colors: { primary: "</style>" } }],
    ["a font family with a quote", { fonts: { sans: { family: 'a"b' } } }],
  ])("rejects %s", (_name, input) => {
    expect(() => resolveTheme(input)).toThrow(/not allowed/);
  });
});

describe("themeToCss", () => {
  it("renders the default theme", () => {
    expect(themeToCss(defaultTheme)).toMatchSnapshot();
  });

  it("renders custom colors and self-hosted fonts", () => {
    const css = themeToCss(
      resolveTheme({
        colors: { secondaryLight: "#ffeedd" },
        fonts: {
          sans: {
            family: "brand-sans",
            fallback: "sans-serif",
            faces: [
              { src: "/fonts/brand.woff2" },
              { src: "/fonts/brand-bold.woff", weight: 700, style: "italic" },
            ],
          },
        },
      }),
    );
    expect(css).toContain("--color-secondary-light:#ffeedd");
    expect(css).toContain('--typography-sans:"brand-sans", sans-serif');
    expect(css).toMatchSnapshot();
  });
});
