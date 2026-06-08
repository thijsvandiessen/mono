import { describe, expect, it } from "vitest";
import { ZodError } from "zod";
import { locationFormatter } from "../location/location.js";

describe("locationFormatter", () => {
  it("should return a location object", () => {
    expect(locationFormatter({ id: "some-id", title: "Location Title" })).toEqual({
      address: null,
      id: "some-id",
      lat: null,
      lng: null,
      title: "Location Title",
      startTime: null,
      ticketLink: null,
    });
  });

  it("should return an error", () => {
    expect(() => locationFormatter(undefined)).toThrowError(ZodError);
  });
});
