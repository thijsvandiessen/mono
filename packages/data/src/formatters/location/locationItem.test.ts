import { describe, expect, it } from "vitest";
import { locationItemFormatter } from "./locationItem.js";

describe("locationItemFormatter", () => {
  it("should return a location object", () => {
    expect(
      locationItemFormatter({
        id: "location-item-id",
        dateTime: "2027-01-25T20:00:00+01:00",
        ticketLink: "https://example.com/tickets",
        location: {
          id: "location-id",
          title: "Location Title",
        },
      }),
    ).toEqual({
      id: "location-id",
      title: "Location Title",
      address: null,
      lat: null,
      lng: null,
      startTime: "2027-01-25T20:00:00+01:00",
      ticketLink: "https://example.com/tickets",
    });
  });

  it("should keep the date when the location record is missing", () => {
    expect(
      locationItemFormatter({
        id: "location-item-id",
        dateTime: "2027-01-25T20:00:00+01:00",
        ticketLink: "",
        location: null,
      }),
    ).toEqual({
      id: "location-item-id",
      title: null,
      address: null,
      lat: null,
      lng: null,
      startTime: "2027-01-25T20:00:00+01:00",
      ticketLink: "",
    });
  });
});
