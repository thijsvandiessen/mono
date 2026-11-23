import { describe, expect, it } from "vitest";
import { locales, messages } from "./index.js";

const keysOf = (value: object, prefix = ""): string[] =>
  Object.entries(value).flatMap(([key, child]) =>
    typeof child === "string" ? [`${prefix}${key}`] : keysOf(child as object, `${prefix}${key}.`),
  );

describe("messages", () => {
  const reference = keysOf(messages.nl).sort();

  it.each(locales)("%s has the same keys as nl", (locale) => {
    expect(keysOf(messages[locale]).sort()).toEqual(reference);
  });

  it.each(locales)("%s has no empty texts", (locale) => {
    const empty = keysOf(messages[locale]).filter((key) => {
      const text = key
        .split(".")
        .reduce<unknown>((node, part) => (node as Record<string, unknown>)[part], messages[locale]);
      return typeof text !== "string" || text.trim() === "";
    });
    expect(empty).toEqual([]);
  });
});
