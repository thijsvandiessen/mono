import { describe, expect, it } from "vitest";
import { concertsFormatter } from "./concerts.js";

describe("concertsFormatter", () => {
  it("should return undefined if there is no concert", () => {
    expect(concertsFormatter([])).toEqual([]);
  });

  it("should return an object", () => {
    expect(
      concertsFormatter([
        {
          __typename: "ConcertRecord",
          id: "some-id",
          title: "required title",
          slug: "required-slug",
          _updatedAt: "2023-08-14T09:37:24+01:00",
          _createdAt: "2023-09-01T13:32:36+01:00",
          _firstPublishedAt: "some date time string",
          _publishedAt: "some date time string",
          locations: [
            {
              id: "locations-id",
              location: {
                id: "location-id",
                title: "Location Title",
              },
            },
          ],
          content: [],
        },
      ]),
    ).toEqual([
      {
        id: "some-id",
        title: "required title",
        image: undefined,
        locations: [
          {
            id: "location-id",
            address: null,
            lat: null,
            lng: null,
            startTime: null,
            title: "Location Title",
            ticketLink: null,
          },
        ],
        url: "/concerten/required-slug",
        content: [],
      },
    ]);
  });

  it("should skip a concert that cannot be formatted", () => {
    expect(
      concertsFormatter([
        {
          __typename: "ConcertRecord",
          id: "broken-id",
          title: "required title",
          slug: "required-slug",
          _updatedAt: "2023-08-14T09:37:24+01:00",
          _createdAt: "2023-09-01T13:32:36+01:00",
          _firstPublishedAt: "some date time string",
          _publishedAt: "some date time string",
          // @ts-expect-error the api can return a location item without an id
          locations: [{ location: null }],
          content: [],
        },
        {
          __typename: "ConcertRecord",
          id: "some-id",
          title: "required title",
          slug: "required-slug",
          _updatedAt: "2023-08-14T09:37:24+01:00",
          _createdAt: "2023-09-01T13:32:36+01:00",
          _firstPublishedAt: "some date time string",
          _publishedAt: "some date time string",
          locations: [],
          content: [],
        },
      ]).map((concert) => concert.id),
    ).toEqual(["some-id"]);
  });

  it("should keep a concert without a linked location", () => {
    expect(
      concertsFormatter([
        {
          __typename: "ConcertRecord",
          id: "some-id",
          title: "required title",
          slug: "required-slug",
          _updatedAt: "2023-08-14T09:37:24+01:00",
          _createdAt: "2023-09-01T13:32:36+01:00",
          _firstPublishedAt: "some date time string",
          _publishedAt: "some date time string",
          locations: [
            {
              id: "location-item-id",
              dateTime: "2027-01-25T20:00:00+01:00",
              location: null,
            },
          ],
          content: [],
        },
      ]),
    ).toEqual([
      {
        id: "some-id",
        title: "required title",
        image: undefined,
        locations: [
          {
            id: "location-item-id",
            address: null,
            lat: null,
            lng: null,
            startTime: "2027-01-25T20:00:00+01:00",
            title: null,
            ticketLink: null,
          },
        ],
        url: "/concerten/required-slug",
        content: [],
      },
    ]);
  });
});
