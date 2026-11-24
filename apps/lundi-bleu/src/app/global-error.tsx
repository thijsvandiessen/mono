"use client";

import { ErrorMessage, messages } from "@mono/components";
import { NextIntlClientProvider } from "next-intl";
import { siteConfig } from "../../site.config";

/* Renders outside the root layout, so it brings its own translations. */
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  const { languageTag, locale, timeZone } = siteConfig;
  return (
    <html lang={languageTag}>
      <body>
        <NextIntlClientProvider locale={locale} timeZone={timeZone} messages={messages[locale]}>
          <ErrorMessage reset={reset} error={error} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
