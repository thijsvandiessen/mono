"use client";

import { ErrorMessage, messages } from "@mono/components";
import { locale, timeZone } from "../i18n/config";
import { NextIntlClientProvider } from "next-intl";

/* Renders outside the root layout, so it brings its own translations. */
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} timeZone={timeZone} messages={messages[locale]}>
          <ErrorMessage reset={reset} error={error} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
