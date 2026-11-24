import { describe, expect, it } from "vitest";
import { formatDate } from "./formatDate.js";

// 19:30 in Amsterdam (CET) on a Monday.
const date = "2025-01-06T18:30:00.000Z";

describe("formatDate", () => {
  it("formats in Dutch, Amsterdam time by default", () => {
    expect(formatDate(date)).toBe("Maandag 6 januari — 19:30");
  });

  it("formats in the given locale", () => {
    expect(formatDate(date, { locale: "en-GB" })).toBe("Monday 6 January — 19:30");
  });

  it("formats in the given time zone", () => {
    expect(formatDate(date, { locale: "en-GB", timeZone: "Europe/London" })).toBe(
      "Monday 6 January — 18:30",
    );
  });
});
