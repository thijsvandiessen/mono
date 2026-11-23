import { defineSiteConfig } from "@mono/site-config";

const dmSans = (file: string) => `/fonts/dm-sans-${file}.woff2`;

/*
 * Everything that makes this site this brand. See SiteConfigInput in
 * @mono/site-config for all options and their defaults.
 */
export const siteConfig = defineSiteConfig({
  name: "Lundi Bleu",
  url: "https://www.lundibleu.nl",
  locale: "nl",
  theme: {
    colors: {
      background: "#ffffff",
      light: "#e2edef",
      grey: "#899ca0",
      primary: "hsl(215deg 100% 15% / 1)",
      primaryDark: "hsl(215deg 100% 10% / 1)",
      primaryLight: "hsl(215deg 100% 60% / 1)",
      secondary: "hsl(30deg, 80%, 40%)",
      secondaryDark: "hsl(30deg, 80%, 20%)",
      secondaryLight: "hsl(30deg, 90%, 80%)",
    },
    fonts: {
      sans: {
        family: "dm-sans",
        fallback: "sans-serif",
        faces: [
          { src: dmSans("regular") },
          { src: dmSans("regular-italic"), style: "italic" },
          { src: dmSans("bold"), weight: 700 },
          { src: dmSans("bold-italic"), weight: 700, style: "italic" },
        ],
      },
      serif: {
        family: "dm-serif",
        fallback: "serif",
        faces: [
          { src: "/fonts/dm-serif.woff2" },
          { src: "/fonts/dm-serif-italic.woff2", style: "italic" },
        ],
      },
    },
  },
});
