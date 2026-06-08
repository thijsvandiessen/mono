import { describe, expect, it } from "vitest";
import { locationsFormatter } from "./locations.js";

describe("locationsFormatter", () => {
  it("should return an empty array", () => {
    expect(locationsFormatter([])).toEqual([]);
  });

  it("should return a locations array", () => {
    expect(locationsFormatter([{ id: "location-id", title: "Location Title" }])).toEqual([
      {
        id: "location-id",
        address: null,
        lat: null,
        lng: null,
        title: "Location Title",
        startTime: null,
        ticketLink: null,
      },
    ]);
  });
});
