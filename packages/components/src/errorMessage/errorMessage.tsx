"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export const ErrorMessage = ({ error, reset }: { error: Error; reset: () => void }) => {
  const t = useTranslations("ErrorMessage");
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>{t("title")}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {t("retry")}
      </button>
    </div>
  );
};
