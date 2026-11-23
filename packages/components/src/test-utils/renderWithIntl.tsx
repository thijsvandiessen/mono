import { type Locale, messages } from "../messages/index.js";
import { type RenderOptions, type RenderResult, render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import type { ReactElement } from "react";

/** `render` from RTL, wrapped in the next-intl provider the apps supply at runtime. */
export const renderWithIntl = (
  ui: ReactElement,
  { locale = "nl", ...options }: RenderOptions & { locale?: Locale } = {},
): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <NextIntlClientProvider
        locale={locale}
        timeZone="Europe/Amsterdam"
        messages={messages[locale]}
      >
        {children}
      </NextIntlClientProvider>
    ),
    ...options,
  });
