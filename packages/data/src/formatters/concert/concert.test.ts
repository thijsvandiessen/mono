import { describe, expect, it } from "vitest";
import { concertFormatter } from "./concert.js";

describe("concertFormatter", () => {
  it("should return a location object", () => {
    expect(
      concertFormatter({
        __typename: "ConcertRecord",
        _createdAt: "some date time string",
        _updatedAt: "some date time string",
        _firstPublishedAt: "some date time string",
        _publishedAt: "some date time string",
        id: "some-id",
        title: "required title",
        locations: [
          {
            id: "ignore-this-id",
            location: {
              id: "location-id",
              title: "Location Title",
            },
          },
        ],
        content: [],
        slug: "some-slug",
      }),
    ).toEqual({
      id: "some-id",
      image: undefined,
      locations: [
        {
          address: null,
          id: "location-id",
          lat: null,
          lng: null,
          startTime: null,
          ticketLink: null,
          title: "Location Title",
        },
      ],
      title: "required title",
      url: "/concerten/some-slug",
      content: [],
    });
  });

  it("should dedupe locations", () => {
    expect(
      concertFormatter({
        __typename: "ConcertRecord",
        _createdAt: "some date time string",
        _updatedAt: "some date time string",
        _firstPublishedAt: "some date time string",
        _publishedAt: "some date time string",
        id: "some-id",
        title: "required title",
        locations: [
          {
            id: "ignore-this-id",
            location: {
              title: "Location Title",
              id: "location-id",
            },
          },
          {
            id: "ignore-this-id",
            location: {
              title: "Location Title",
              id: "location-id",
            },
          },
        ],
        content: [],
        slug: "some-slug",
      }),
    ).toEqual({
      id: "some-id",
      image: undefined,
      locations: [
        {
          address: null,
          id: "location-id",
          lat: null,
          lng: null,
          startTime: null,
          ticketLink: null,
          title: "Location Title",
        },
      ],
      title: "required title",
      url: "/concerten/some-slug",
      content: [],
    });
  });

  it("should keep several dates at the same venue", () => {
    expect(
      concertFormatter({
        __typename: "ConcertRecord",
        _createdAt: "some date time string",
        _updatedAt: "some date time string",
        _firstPublishedAt: "some date time string",
        _publishedAt: "some date time string",
        id: "some-id",
        title: "required title",
        locations: [
          {
            id: "first-location-item-id",
            dateTime: "2024-04-07T15:00:00+02:00",
            location: {
              id: "location-id",
              title: "Location Title",
            },
          },
          {
            id: "second-location-item-id",
            dateTime: "2024-04-14T15:00:00+02:00",
            location: {
              id: "location-id",
              title: "Location Title",
            },
          },
        ],
        content: [],
        slug: "some-slug",
      })?.locations,
    ).toEqual([
      {
        address: null,
        id: "location-id",
        lat: null,
        lng: null,
        startTime: "2024-04-07T15:00:00+02:00",
        ticketLink: null,
        title: "Location Title",
      },
      {
        address: null,
        id: "location-id",
        lat: null,
        lng: null,
        startTime: "2024-04-14T15:00:00+02:00",
        ticketLink: null,
        title: "Location Title",
      },
    ]);
  });
});
