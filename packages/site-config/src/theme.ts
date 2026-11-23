/** The colors components read through `--color-*` custom properties. */
export interface ThemeColors {
  background: string;
  light: string;
  grey: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
}

export interface FontFace {
  /** URL of the font file, usually under `/fonts/` in the app's `public/`. */
  src: string;
  weight?: number;
  style?: "normal" | "italic";
}

export interface ThemeFont {
  /** Font family name, also used for the `@font-face` rules. */
  family: string;
  /** Font stack used while the font loads, or when it has no `faces`. */
  fallback: string;
  /** Self-hosted font files. Leave empty for a system font. */
  faces: FontFace[];
}

export interface SiteTheme {
  colors: ThemeColors;
  fonts: {
    /** Body text, read through `--typography-sans`. */
    sans: ThemeFont;
    /** Headings, read through `--typography-serif`. */
    serif: ThemeFont;
  };
}

/** What a site may set: any color or font it leaves out keeps the default. */
export interface SiteThemeInput {
  colors?: Partial<ThemeColors>;
  fonts?: {
    sans?: Partial<ThemeFont>;
    serif?: Partial<ThemeFont>;
  };
}

const systemSans =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const systemSerif = 'Georgia, Cambria, "Times New Roman", Times, serif';

/** A neutral, brand-free theme with system fonts. */
export const defaultTheme: SiteTheme = {
  colors: {
    background: "#ffffff",
    light: "#eef1f4",
    grey: "#8a94a0",
    primary: "hsl(220deg 25% 18%)",
    primaryDark: "hsl(220deg 30% 10%)",
    primaryLight: "hsl(220deg 60% 55%)",
    secondary: "hsl(170deg 60% 32%)",
    secondaryDark: "hsl(170deg 60% 18%)",
    secondaryLight: "hsl(170deg 50% 80%)",
  },
  fonts: {
    sans: { family: "system-sans", fallback: systemSans, faces: [] },
    serif: { family: "system-serif", fallback: systemSerif, faces: [] },
  },
};

export const resolveTheme = (input: SiteThemeInput = {}): SiteTheme => {
  const theme: SiteTheme = {
    colors: { ...defaultTheme.colors, ...input.colors },
    fonts: {
      sans: { ...defaultTheme.fonts.sans, ...input.fonts?.sans },
      serif: { ...defaultTheme.fonts.serif, ...input.fonts?.serif },
    },
  };
  assertSafeTheme(theme);
  return theme;
};

/*
 * The theme ends up inside a <style> element. Values come from the site's
 * own config, but rejecting characters that could end a declaration, a rule
 * or the element keeps a typo from breaking the whole stylesheet.
 */
const unsafe = /[<>{};\\]/;
const assertSafeTheme = (theme: SiteTheme) => {
  const values: [string, string][] = [
    ...Object.entries(theme.colors),
    ...Object.entries(theme.fonts).flatMap(([name, font]): [string, string][] => [
      [`fonts.${name}.family`, font.family],
      [`fonts.${name}.fallback`, font.fallback],
      ...font.faces.map((face, index): [string, string] => [
        `fonts.${name}.faces[${index}].src`,
        face.src,
      ]),
    ]),
  ];
  for (const [key, value] of values) {
    if (unsafe.test(value) || (key.endsWith("family") && value.includes('"'))) {
      throw new Error(`Theme value ${key} contains characters that are not allowed: ${value}`);
    }
  }
};

const kebab = (key: string) => key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const fontStack = ({ family, fallback, faces }: ThemeFont) =>
  faces.length > 0 ? `"${family}", ${fallback}` : fallback;

const fontFaces = ({ family, faces }: ThemeFont) =>
  faces.map(
    ({ src, weight = 400, style = "normal" }) =>
      `@font-face{font-family:"${family}";src:url("${encodeURI(src)}") format("${src.endsWith(".woff") ? "woff" : "woff2"}");font-weight:${weight};font-style:${style};font-display:swap}`,
  );

/** The CSS for a theme: `--color-*` and `--typography-*` on `:root`, plus `@font-face` rules. */
export const themeToCss = (theme: SiteTheme): string => {
  const declarations = [
    ...Object.entries(theme.colors).map(([key, value]) => `--color-${kebab(key)}:${value}`),
    `--typography-sans:${fontStack(theme.fonts.sans)}`,
    `--typography-serif:${fontStack(theme.fonts.serif)}`,
  ];
  return [
    `:root{${declarations.join(";")}}`,
    ...fontFaces(theme.fonts.sans),
    ...fontFaces(theme.fonts.serif),
  ].join("\n");
};
