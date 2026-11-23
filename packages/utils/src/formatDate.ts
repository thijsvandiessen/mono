export const dateIsInThePast = (date: string): boolean => {
  const dateObj = new Date(date);
  const now = new Date();
  return dateObj < now;
};

export interface FormatDateOptions {
  /** BCP 47 language tag, for example `nl-NL` or `en`. */
  locale?: string;
  /** IANA time zone the date is shown in. */
  timeZone?: string;
}

export const defaultLocale = "nl-NL";
export const defaultTimeZone = "Europe/Amsterdam";

export const formatDate = (
  date: string,
  { locale = defaultLocale, timeZone = defaultTimeZone }: FormatDateOptions = {},
) => {
  const dateObj = new Date(date);
  const defaultOptions = { timeZone };
  const dateString = new Intl.DateTimeFormat(locale, {
    ...defaultOptions,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(dateObj);
  const timeString = new Intl.DateTimeFormat(locale, {
    ...defaultOptions,
    hour: "numeric",
    minute: "numeric",
  }).format(dateObj);
  return `${capitalizeFirstLetter(dateString)} — ${timeString}`;
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
