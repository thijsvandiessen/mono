import { type Locale, locales, messages } from "@mono/components";
import { type SiteTheme, defaultTheme, themeToCss } from "@mono/site-config";
import { NextIntlClientProvider } from "next-intl";
import type { Preview } from "@storybook/react-vite";
import { siteConfig as lundiBleu } from "../../lundi-bleu/site.config";

const themes: Record<string, SiteTheme> = {
  neutral: defaultTheme,
  "lundi-bleu": lundiBleu.theme,
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    locale: {
      description: "Language of the component texts",
      toolbar: {
        title: "Locale",
        icon: "globe",
        items: [...locales],
        dynamicTitle: true,
      },
    },
    theme: {
      description: "Site theme (colors and fonts)",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: Object.keys(themes),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: "nl",
    theme: "lundi-bleu",
  },
  decorators: [
    (Story, { globals }) => {
      const locale = (globals.locale ?? "nl") as Locale;
      const theme = themes[globals.theme as string] ?? defaultTheme;
      return (
        <NextIntlClientProvider
          locale={locale}
          timeZone="Europe/Amsterdam"
          messages={messages[locale]}
        >
          <style>{themeToCss(theme)}</style>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
