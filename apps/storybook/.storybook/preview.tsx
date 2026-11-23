import { type Locale, locales, messages } from "@mono/components";
import { NextIntlClientProvider } from "next-intl";
import type { Preview } from "@storybook/react-vite";

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
  },
  initialGlobals: {
    locale: "nl",
  },
  decorators: [
    (Story, { globals }) => {
      const locale = (globals.locale ?? "nl") as Locale;
      return (
        <NextIntlClientProvider
          locale={locale}
          timeZone="Europe/Amsterdam"
          messages={messages[locale]}
        >
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
