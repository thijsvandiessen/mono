/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: boolean | null | undefined;
};

export type ConcertModelFilter = {
  AND?: Array<ConcertModelFilter | null | undefined> | null | undefined;
  OR?: Array<ConcertModelFilter | null | undefined> | null | undefined;
  _createdAt?: CreatedAtFilter | null | undefined;
  _firstPublishedAt?: PublishedAtFilter | null | undefined;
  _isValid?: BooleanFilter | null | undefined;
  _publicationScheduledAt?: PublishedAtFilter | null | undefined;
  _publishedAt?: PublishedAtFilter | null | undefined;
  _status?: StatusFilter | null | undefined;
  _unpublishingScheduledAt?: PublishedAtFilter | null | undefined;
  _updatedAt?: UpdatedAtFilter | null | undefined;
  id?: ItemIdFilter | null | undefined;
  locations?: ConcertModelLocationsFieldFilter | null | undefined;
  position?: PositionFilter | null | undefined;
  poster?: JsonFilter | null | undefined;
  seo?: SeoFilter | null | undefined;
  slug?: SlugFilter | null | undefined;
  title?: StringFilter | null | undefined;
};

/** Specify nested blocks fields conditions */
export type ConcertModelLocationsFieldBlocksConditions = {
  locationItem?: LocationItemModelFilter | null | undefined;
};

/** Specify nested blocks types presence */
export type ConcertModelLocationsFieldBlocksPresence = {
  locationItem?: boolean | null | undefined;
};

/** Specify how to filter this specific Modular Content field instance */
export type ConcertModelLocationsFieldFilter = {
  /** Filter records containing at least one block matching the specified conditions */
  any?: ConcertModelLocationsFieldBlocksConditions | null | undefined;
  /** Filter records containing at least one block of specified type or not */
  containsAny?: ConcertModelLocationsFieldBlocksPresence | null | undefined;
  /** Filter records containing at least one block of any kind or not */
  exists?: boolean | null | undefined;
};

export enum ConcertModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: string | null | undefined;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: boolean | null | undefined;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: string | null | undefined;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: string | null | undefined;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: string | null | undefined;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: string | null | undefined;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: string | null | undefined;
};

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: string | null | undefined;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: boolean | null | undefined;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: string | null | undefined;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: string | null | undefined;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: string | null | undefined;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: string | null | undefined;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: string | null | undefined;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: string | null | undefined;
  /** Search records with the specified IDs */
  in?: Array<string | null | undefined> | null | undefined;
  /** Exclude the record with the specified ID */
  neq?: string | null | undefined;
  /** Search records that do not have the specified IDs */
  notIn?: Array<string | null | undefined> | null | undefined;
};

export enum ItemStatus {
  Draft = "draft",
  Published = "published",
  Updated = "updated",
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: boolean | null | undefined;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: string | null | undefined;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: boolean | null | undefined;
  /** Filter records linked to one of the specified records */
  in?: Array<string | null | undefined> | null | undefined;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: string | null | undefined;
  /** Filter records not linked to one of the specified records */
  notIn?: Array<string | null | undefined> | null | undefined;
};

export type LocationItemModelFilter = {
  AND?: Array<LocationItemModelFilter | null | undefined> | null | undefined;
  OR?: Array<LocationItemModelFilter | null | undefined> | null | undefined;
  dateTime?: DateTimeFilter | null | undefined;
  id?: ItemIdFilter | null | undefined;
  location?: LinkFilter | null | undefined;
  ticketLink?: StringFilter | null | undefined;
};

export enum LocationModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  AddressTitleAsc = "addressTitle_ASC",
  AddressTitleDesc = "addressTitle_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum PageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: number | null | undefined;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: number | null | undefined;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: number | null | undefined;
  /** Filter records with a value that's less than the one specified */
  lt?: number | null | undefined;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: number | null | undefined;
  /** Exclude records with an exact match */
  neq?: number | null | undefined;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: string | null | undefined;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: boolean | null | undefined;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: string | null | undefined;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: string | null | undefined;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: string | null | undefined;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: string | null | undefined;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: string | null | undefined;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: boolean | null | undefined;
};

export enum SiteLocale {
  Nl = "nl",
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: string | null | undefined;
  /** Filter records that have one of the specified slugs */
  in?: Array<string | null | undefined> | null | undefined;
  /** Exclude records with an exact match */
  neq?: string | null | undefined;
  /** Filter records that do have one of the specified slugs */
  notIn?: Array<string | null | undefined> | null | undefined;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: ItemStatus | null | undefined;
  /** Search records with the specified statuses */
  in?: Array<ItemStatus | null | undefined> | null | undefined;
  /** Exclude the record with the specified status */
  neq?: ItemStatus | null | undefined;
  /** Search records without the specified statuses */
  notIn?: Array<ItemStatus | null | undefined> | null | undefined;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: string | null | undefined;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: boolean | null | undefined;
  /** Filter records that equal one of the specified values */
  in?: Array<string | null | undefined> | null | undefined;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: boolean | null | undefined;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: boolean | null | undefined;
  /** Filter records based on a regular expression */
  matches?: StringMatchesFilter | null | undefined;
  /** Exclude records with an exact match */
  neq?: string | null | undefined;
  /** Filter records that do not equal one of the specified values */
  notIn?: Array<string | null | undefined> | null | undefined;
  /** Exclude records based on a regular expression */
  notMatches?: StringMatchesFilter | null | undefined;
};

export type StringMatchesFilter = {
  caseSensitive?: boolean | null | undefined;
  pattern: string;
  regexp?: boolean | null | undefined;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: string | null | undefined;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: boolean | null | undefined;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: string | null | undefined;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: string | null | undefined;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: string | null | undefined;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: string | null | undefined;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: string | null | undefined;
};

export type CallToActionFragment = {
  __typename: "CallToActionRecord";
  label: string | null;
  variant: string | null;
  externalUrl: string | null;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  pageLink:
    | {
        __typename: "ConcertRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "PageRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | null;
};

export type ColorsFragment = {
  alpha: number;
  blue: number;
  cssRgb: string;
  green: number;
  hex: string;
  red: number;
};

export type ConcertDetailFragment = {
  __typename: "ConcertRecord";
  title: string;
  slug: string;
  poster: unknown;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  locations: Array<{
    id: string;
    dateTime: string | null;
    ticketLink: string | null;
    location: {
      id: string;
      title: string;
      addressTitle: string | null;
      address: { latitude: number; longitude: number } | null;
    } | null;
  }>;
  content: Array<
    | {
        __typename: "HeaderRecord";
        cover: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        body: {
          value: unknown;
          blocks: Array<{
            __typename: "CallToActionRecord";
            label: string | null;
            variant: string | null;
            externalUrl: string | null;
            _createdAt: string;
            _firstPublishedAt: string;
            _publishedAt: string;
            _updatedAt: string;
            id: string;
            pageLink:
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | null;
          }>;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
        } | null;
      }
    | {
        __typename: "TextBlockRecord";
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        content: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
      }
    | {
        __typename: "TwoColumnRecord";
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        leftContent: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
        rightContent: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
      }
  >;
};

export type ConcertLinkFragment = {
  __typename: "ConcertRecord";
  title: string;
  slug: string;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

export type ConcertPageSeoFragment = {
  __typename: "ConcertRecord";
  title: string;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  _seoMetaTags: Array<{
    attributes: Record<string, string> | null;
    content: string | null;
    tag: string;
  }>;
  seo: { description: string | null; title: string | null; twitterCard: string | null } | null;
};

export type CoordinatesFragment = { latitude: number; longitude: number };

export type FileFragment = {
  id: string;
  alt: string | null;
  width: number | null;
  height: number | null;
  title: string | null;
  url: string;
  video: {
    mp4Url: string | null;
    muxAssetId: string;
    muxPlaybackId: string;
    streamingUrl: string;
    thumbnailUrl: string;
  } | null;
};

export type FocalPointFragment = { x: number; y: number };

export type GeneralInfoFragment = {
  id: string;
  title: string | null;
  menu: Array<
    | {
        id: string;
        label: string | null;
        link:
          | {
              __typename: "ConcertRecord";
              title: string;
              slug: string;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
            }
          | {
              __typename: "PageRecord";
              title: string;
              slug: string;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
            }
          | null;
      }
    | {
        id: string;
        label: string | null;
        menu: Array<{
          id: string;
          label: string | null;
          link:
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | null;
        }>;
      }
  >;
};

export type HeaderFragment = {
  __typename: "HeaderRecord";
  cover: unknown;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  body: {
    value: unknown;
    blocks: Array<{
      __typename: "CallToActionRecord";
      label: string | null;
      variant: string | null;
      externalUrl: string | null;
      _createdAt: string;
      _firstPublishedAt: string;
      _publishedAt: string;
      _updatedAt: string;
      id: string;
      pageLink:
        | {
            __typename: "ConcertRecord";
            title: string;
            slug: string;
            _createdAt: string;
            _firstPublishedAt: string;
            _publishedAt: string;
            _updatedAt: string;
            id: string;
          }
        | {
            __typename: "PageRecord";
            title: string;
            slug: string;
            _createdAt: string;
            _firstPublishedAt: string;
            _publishedAt: string;
            _updatedAt: string;
            id: string;
          }
        | null;
    }>;
    links: Array<
      | {
          __typename: "ConcertRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "PageRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
    >;
  } | null;
};

export type HeaderBodyFragment = {
  value: unknown;
  blocks: Array<{
    __typename: "CallToActionRecord";
    label: string | null;
    variant: string | null;
    externalUrl: string | null;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
    pageLink:
      | {
          __typename: "ConcertRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "PageRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | null;
  }>;
  links: Array<
    | {
        __typename: "ConcertRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "PageRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
  >;
};

type Identifiable_CallToActionRecord_Fragment = {
  __typename: "CallToActionRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_ConcertListRecord_Fragment = {
  __typename: "ConcertListRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_ConcertRecord_Fragment = {
  __typename: "ConcertRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_DocumentRecord_Fragment = {
  __typename: "DocumentRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_GeneralRecord_Fragment = {
  __typename: "GeneralRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_HeaderRecord_Fragment = {
  __typename: "HeaderRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_ImageRecord_Fragment = {
  __typename: "ImageRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_LocationItemRecord_Fragment = {
  __typename: "LocationItemRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_LocationRecord_Fragment = {
  __typename: "LocationRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_MenuItemRecord_Fragment = {
  __typename: "MenuItemRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_PageRecord_Fragment = {
  __typename: "PageRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_SubmenuItemRecord_Fragment = {
  __typename: "SubmenuItemRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_TextBlockRecord_Fragment = {
  __typename: "TextBlockRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_TwoColumnRecord_Fragment = {
  __typename: "TwoColumnRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

type Identifiable_VideoRecord_Fragment = {
  __typename: "VideoRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

export type IdentifiableFragment =
  | Identifiable_CallToActionRecord_Fragment
  | Identifiable_ConcertListRecord_Fragment
  | Identifiable_ConcertRecord_Fragment
  | Identifiable_DocumentRecord_Fragment
  | Identifiable_GeneralRecord_Fragment
  | Identifiable_HeaderRecord_Fragment
  | Identifiable_ImageRecord_Fragment
  | Identifiable_LocationItemRecord_Fragment
  | Identifiable_LocationRecord_Fragment
  | Identifiable_MenuItemRecord_Fragment
  | Identifiable_PageRecord_Fragment
  | Identifiable_SubmenuItemRecord_Fragment
  | Identifiable_TextBlockRecord_Fragment
  | Identifiable_TwoColumnRecord_Fragment
  | Identifiable_VideoRecord_Fragment;

export type ResponsiveImageFragment = {
  title: string | null;
  alt: string | null;
  sizes: string;
  aspectRatio: number;
  bgColor: string | null;
  src: string;
  height: number;
  width: number;
};

export type ImageFragment = {
  __typename: "ImageRecord";
  image: unknown;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

export type DocumentFragment = {
  __typename: "DocumentRecord";
  document: unknown;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

export type LocationFragment = {
  id: string;
  title: string;
  addressTitle: string | null;
  address: { latitude: number; longitude: number } | null;
};

export type LocationItemFragment = {
  id: string;
  dateTime: string | null;
  ticketLink: string | null;
  location: {
    id: string;
    title: string;
    addressTitle: string | null;
    address: { latitude: number; longitude: number } | null;
  } | null;
};

export type MenuItemFragment = {
  id: string;
  label: string | null;
  link:
    | {
        __typename: "ConcertRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "PageRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | null;
};

export type PageFragment = {
  __typename: "PageRecord";
  title: string;
  slug: string;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  content: Array<
    | {
        __typename: "HeaderRecord";
        cover: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        body: {
          value: unknown;
          blocks: Array<{
            __typename: "CallToActionRecord";
            label: string | null;
            variant: string | null;
            externalUrl: string | null;
            _createdAt: string;
            _firstPublishedAt: string;
            _publishedAt: string;
            _updatedAt: string;
            id: string;
            pageLink:
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | null;
          }>;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
        } | null;
      }
    | {
        __typename: "TextBlockRecord";
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        content: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
      }
    | {
        __typename: "TwoColumnRecord";
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        leftContent: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
        rightContent: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
      }
  >;
};

export type PageDetailFragment = {
  __typename: "PageRecord";
  title: string;
  slug: string;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  content: Array<
    | {
        __typename: "HeaderRecord";
        cover: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        body: {
          value: unknown;
          blocks: Array<{
            __typename: "CallToActionRecord";
            label: string | null;
            variant: string | null;
            externalUrl: string | null;
            _createdAt: string;
            _firstPublishedAt: string;
            _publishedAt: string;
            _updatedAt: string;
            id: string;
            pageLink:
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | null;
          }>;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
        } | null;
      }
    | {
        __typename: "TextBlockRecord";
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        content: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
      }
    | {
        __typename: "TwoColumnRecord";
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        leftContent: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
        rightContent: {
          value: unknown;
          links: Array<
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
          >;
          blocks: Array<
            | {
                __typename: "CallToActionRecord";
                label: string | null;
                variant: string | null;
                externalUrl: string | null;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                pageLink:
                  | {
                      __typename: "ConcertRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | {
                      __typename: "PageRecord";
                      title: string;
                      slug: string;
                      _createdAt: string;
                      _firstPublishedAt: string;
                      _publishedAt: string;
                      _updatedAt: string;
                      id: string;
                    }
                  | null;
              }
            | {
                __typename: "DocumentRecord";
                document: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "ImageRecord";
                image: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "VideoRecord";
                title: string | null;
                thumbnail: unknown;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
                media: {
                  height: number;
                  provider: string;
                  providerUid: string;
                  thumbnailUrl: string;
                  title: string;
                  url: string;
                  width: number;
                } | null;
              }
          >;
        } | null;
      }
  >;
};

export type PageDetailSeoFragment = {
  __typename: "PageRecord";
  title: string;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  _seoMetaTags: Array<{
    attributes: Record<string, string> | null;
    content: string | null;
    tag: string;
  }>;
  seo: { description: string | null; title: string | null; twitterCard: string | null } | null;
};

export type PageLinkFragment = {
  __typename: "PageRecord";
  title: string;
  slug: string;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

export type SeoFieldFragment = {
  description: string | null;
  title: string | null;
  twitterCard: string | null;
};

export type SeoSettingsFragment = {
  facebookPageUrl: string | null;
  siteName: string | null;
  titleSuffix: string | null;
  twitterAccount: string | null;
  fallbackSeo: {
    description: string | null;
    title: string | null;
    twitterCard: string | null;
  } | null;
};

export type SiteMetadataFragment = {
  __typename: "GeneralRecord";
  title: string | null;
  siteMetadata: unknown;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
};

export type SubmenuItemFragment = {
  id: string;
  label: string | null;
  menu: Array<{
    id: string;
    label: string | null;
    link:
      | {
          __typename: "ConcertRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "PageRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | null;
  }>;
};

export type TagFragment = {
  attributes: Record<string, string> | null;
  content: string | null;
  tag: string;
};

export type TextBlockContentFragment = {
  value: unknown;
  links: Array<
    | {
        __typename: "ConcertRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "PageRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
  >;
  blocks: Array<
    | {
        __typename: "CallToActionRecord";
        label: string | null;
        variant: string | null;
        externalUrl: string | null;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        pageLink:
          | {
              __typename: "ConcertRecord";
              title: string;
              slug: string;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
            }
          | {
              __typename: "PageRecord";
              title: string;
              slug: string;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
            }
          | null;
      }
    | {
        __typename: "DocumentRecord";
        document: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "ImageRecord";
        image: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "VideoRecord";
        title: string | null;
        thumbnail: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        media: {
          height: number;
          provider: string;
          providerUid: string;
          thumbnailUrl: string;
          title: string;
          url: string;
          width: number;
        } | null;
      }
  >;
};

export type LeftContentFragment = {
  value: unknown;
  links: Array<
    | {
        __typename: "ConcertRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "PageRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
  >;
  blocks: Array<
    | {
        __typename: "CallToActionRecord";
        label: string | null;
        variant: string | null;
        externalUrl: string | null;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        pageLink:
          | {
              __typename: "ConcertRecord";
              title: string;
              slug: string;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
            }
          | {
              __typename: "PageRecord";
              title: string;
              slug: string;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
            }
          | null;
      }
    | {
        __typename: "DocumentRecord";
        document: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "ImageRecord";
        image: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "VideoRecord";
        title: string | null;
        thumbnail: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        media: {
          height: number;
          provider: string;
          providerUid: string;
          thumbnailUrl: string;
          title: string;
          url: string;
          width: number;
        } | null;
      }
  >;
};

export type RightContentFragment = {
  value: unknown;
  links: Array<
    | {
        __typename: "ConcertRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "PageRecord";
        title: string;
        slug: string;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
  >;
  blocks: Array<
    | {
        __typename: "CallToActionRecord";
        label: string | null;
        variant: string | null;
        externalUrl: string | null;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        pageLink:
          | {
              __typename: "ConcertRecord";
              title: string;
              slug: string;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
            }
          | {
              __typename: "PageRecord";
              title: string;
              slug: string;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
            }
          | null;
      }
    | {
        __typename: "DocumentRecord";
        document: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "ImageRecord";
        image: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
      }
    | {
        __typename: "VideoRecord";
        title: string | null;
        thumbnail: unknown;
        _createdAt: string;
        _firstPublishedAt: string;
        _publishedAt: string;
        _updatedAt: string;
        id: string;
        media: {
          height: number;
          provider: string;
          providerUid: string;
          thumbnailUrl: string;
          title: string;
          url: string;
          width: number;
        } | null;
      }
  >;
};

export type TextBlockFragment = {
  __typename: "TextBlockRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  content: {
    value: unknown;
    links: Array<
      | {
          __typename: "ConcertRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "PageRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
    >;
    blocks: Array<
      | {
          __typename: "CallToActionRecord";
          label: string | null;
          variant: string | null;
          externalUrl: string | null;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          pageLink:
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | null;
        }
      | {
          __typename: "DocumentRecord";
          document: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "ImageRecord";
          image: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "VideoRecord";
          title: string | null;
          thumbnail: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          media: {
            height: number;
            provider: string;
            providerUid: string;
            thumbnailUrl: string;
            title: string;
            url: string;
            width: number;
          } | null;
        }
    >;
  } | null;
};

export type TwoColumFragment = {
  __typename: "TwoColumnRecord";
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  leftContent: {
    value: unknown;
    links: Array<
      | {
          __typename: "ConcertRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "PageRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
    >;
    blocks: Array<
      | {
          __typename: "CallToActionRecord";
          label: string | null;
          variant: string | null;
          externalUrl: string | null;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          pageLink:
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | null;
        }
      | {
          __typename: "DocumentRecord";
          document: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "ImageRecord";
          image: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "VideoRecord";
          title: string | null;
          thumbnail: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          media: {
            height: number;
            provider: string;
            providerUid: string;
            thumbnailUrl: string;
            title: string;
            url: string;
            width: number;
          } | null;
        }
    >;
  } | null;
  rightContent: {
    value: unknown;
    links: Array<
      | {
          __typename: "ConcertRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "PageRecord";
          title: string;
          slug: string;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
    >;
    blocks: Array<
      | {
          __typename: "CallToActionRecord";
          label: string | null;
          variant: string | null;
          externalUrl: string | null;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          pageLink:
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | null;
        }
      | {
          __typename: "DocumentRecord";
          document: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "ImageRecord";
          image: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
        }
      | {
          __typename: "VideoRecord";
          title: string | null;
          thumbnail: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          media: {
            height: number;
            provider: string;
            providerUid: string;
            thumbnailUrl: string;
            title: string;
            url: string;
            width: number;
          } | null;
        }
    >;
  } | null;
};

export type VideoUploadFragment = {
  mp4Url: string | null;
  muxAssetId: string;
  muxPlaybackId: string;
  streamingUrl: string;
  thumbnailUrl: string;
};

export type VideoFragment = {
  __typename: "VideoRecord";
  title: string | null;
  thumbnail: unknown;
  _createdAt: string;
  _firstPublishedAt: string;
  _publishedAt: string;
  _updatedAt: string;
  id: string;
  media: {
    height: number;
    provider: string;
    providerUid: string;
    thumbnailUrl: string;
    title: string;
    url: string;
    width: number;
  } | null;
};

export type VideoFieldFragment = {
  height: number;
  provider: string;
  providerUid: string;
  thumbnailUrl: string;
  title: string;
  url: string;
  width: number;
};

export type GetConcertQueryVariables = Exact<{
  id: string;
}>;

export type GetConcertQuery = {
  concert: {
    __typename: "ConcertRecord";
    title: string;
    slug: string;
    poster: unknown;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
    locations: Array<{
      id: string;
      dateTime: string | null;
      ticketLink: string | null;
      location: {
        id: string;
        title: string;
        addressTitle: string | null;
        address: { latitude: number; longitude: number } | null;
      } | null;
    }>;
    content: Array<
      | {
          __typename: "HeaderRecord";
          cover: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          body: {
            value: unknown;
            blocks: Array<{
              __typename: "CallToActionRecord";
              label: string | null;
              variant: string | null;
              externalUrl: string | null;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
              pageLink:
                | {
                    __typename: "ConcertRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | {
                    __typename: "PageRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | null;
            }>;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
          } | null;
        }
      | {
          __typename: "TextBlockRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          content: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
      | {
          __typename: "TwoColumnRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          leftContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
          rightContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
    >;
  } | null;
};

export type GetConcertPageQueryVariables = Exact<{
  slug: string;
}>;

export type GetConcertPageQuery = {
  concert: {
    __typename: "ConcertRecord";
    title: string;
    slug: string;
    poster: unknown;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
    locations: Array<{
      id: string;
      dateTime: string | null;
      ticketLink: string | null;
      location: {
        id: string;
        title: string;
        addressTitle: string | null;
        address: { latitude: number; longitude: number } | null;
      } | null;
    }>;
    content: Array<
      | {
          __typename: "HeaderRecord";
          cover: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          body: {
            value: unknown;
            blocks: Array<{
              __typename: "CallToActionRecord";
              label: string | null;
              variant: string | null;
              externalUrl: string | null;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
              pageLink:
                | {
                    __typename: "ConcertRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | {
                    __typename: "PageRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | null;
            }>;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
          } | null;
        }
      | {
          __typename: "TextBlockRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          content: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
      | {
          __typename: "TwoColumnRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          leftContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
          rightContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
    >;
  } | null;
};

export type GetConcertSeoQueryVariables = Exact<{
  slug: string;
}>;

export type GetConcertSeoQuery = {
  concert: {
    __typename: "ConcertRecord";
    title: string;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
    _seoMetaTags: Array<{
      attributes: Record<string, string> | null;
      content: string | null;
      tag: string;
    }>;
    seo: { description: string | null; title: string | null; twitterCard: string | null } | null;
  } | null;
};

export type GetConcertsUrlsQueryVariables = Exact<{
  skip: number;
  first: number;
  order?: Array<ConcertModelOrderBy | null | undefined> | ConcertModelOrderBy | null | undefined;
}>;

export type GetConcertsUrlsQuery = {
  allConcerts: Array<{
    __typename: "ConcertRecord";
    title: string;
    slug: string;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
  }>;
};

export type GetConcertsQueryVariables = Exact<{
  skip: number;
  first: number;
  order?: Array<ConcertModelOrderBy | null | undefined> | ConcertModelOrderBy | null | undefined;
}>;

export type GetConcertsQuery = {
  allConcerts: Array<{
    __typename: "ConcertRecord";
    title: string;
    slug: string;
    poster: unknown;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
    locations: Array<{
      id: string;
      dateTime: string | null;
      ticketLink: string | null;
      location: {
        id: string;
        title: string;
        addressTitle: string | null;
        address: { latitude: number; longitude: number } | null;
      } | null;
    }>;
    content: Array<
      | {
          __typename: "HeaderRecord";
          cover: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          body: {
            value: unknown;
            blocks: Array<{
              __typename: "CallToActionRecord";
              label: string | null;
              variant: string | null;
              externalUrl: string | null;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
              pageLink:
                | {
                    __typename: "ConcertRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | {
                    __typename: "PageRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | null;
            }>;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
          } | null;
        }
      | {
          __typename: "TextBlockRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          content: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
      | {
          __typename: "TwoColumnRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          leftContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
          rightContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
    >;
  }>;
};

export type GetConcertsMetaQueryVariables = Exact<{ [key: string]: never }>;

export type GetConcertsMetaQuery = { _allConcertsMeta: { count: number } };

export type GetFutureConcertsQueryVariables = Exact<{
  skip: number;
  first: number;
  order?: Array<ConcertModelOrderBy | null | undefined> | ConcertModelOrderBy | null | undefined;
  filter?: ConcertModelFilter | null | undefined;
}>;

export type GetFutureConcertsQuery = {
  allConcerts: Array<{
    __typename: "ConcertRecord";
    title: string;
    slug: string;
    poster: unknown;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
    locations: Array<{
      id: string;
      dateTime: string | null;
      ticketLink: string | null;
      location: {
        id: string;
        title: string;
        addressTitle: string | null;
        address: { latitude: number; longitude: number } | null;
      } | null;
    }>;
    content: Array<
      | {
          __typename: "HeaderRecord";
          cover: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          body: {
            value: unknown;
            blocks: Array<{
              __typename: "CallToActionRecord";
              label: string | null;
              variant: string | null;
              externalUrl: string | null;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
              pageLink:
                | {
                    __typename: "ConcertRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | {
                    __typename: "PageRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | null;
            }>;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
          } | null;
        }
      | {
          __typename: "TextBlockRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          content: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
      | {
          __typename: "TwoColumnRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          leftContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
          rightContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
    >;
  }>;
};

export type GetGeneralInfoQueryVariables = Exact<{ [key: string]: never }>;

export type GetGeneralInfoQuery = {
  general: {
    id: string;
    title: string | null;
    menu: Array<
      | {
          id: string;
          label: string | null;
          link:
            | {
                __typename: "ConcertRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | {
                __typename: "PageRecord";
                title: string;
                slug: string;
                _createdAt: string;
                _firstPublishedAt: string;
                _publishedAt: string;
                _updatedAt: string;
                id: string;
              }
            | null;
        }
      | {
          id: string;
          label: string | null;
          menu: Array<{
            id: string;
            label: string | null;
            link:
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | null;
          }>;
        }
    >;
  } | null;
};

export type GetLocationQueryVariables = Exact<{
  id?: string | null | undefined;
}>;

export type GetLocationQuery = {
  location: {
    id: string;
    title: string;
    addressTitle: string | null;
    address: { latitude: number; longitude: number } | null;
  } | null;
};

export type GetLocationsQueryVariables = Exact<{
  first?: number | null | undefined;
  skip?: number | null | undefined;
  order?: Array<LocationModelOrderBy | null | undefined> | LocationModelOrderBy | null | undefined;
}>;

export type GetLocationsQuery = {
  allLocations: Array<{
    id: string;
    title: string;
    addressTitle: string | null;
    address: { latitude: number; longitude: number } | null;
  }>;
};

export type GetPageQueryVariables = Exact<{
  slug: string;
}>;

export type GetPageQuery = {
  page: {
    __typename: "PageRecord";
    title: string;
    slug: string;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
    content: Array<
      | {
          __typename: "HeaderRecord";
          cover: unknown;
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          body: {
            value: unknown;
            blocks: Array<{
              __typename: "CallToActionRecord";
              label: string | null;
              variant: string | null;
              externalUrl: string | null;
              _createdAt: string;
              _firstPublishedAt: string;
              _publishedAt: string;
              _updatedAt: string;
              id: string;
              pageLink:
                | {
                    __typename: "ConcertRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | {
                    __typename: "PageRecord";
                    title: string;
                    slug: string;
                    _createdAt: string;
                    _firstPublishedAt: string;
                    _publishedAt: string;
                    _updatedAt: string;
                    id: string;
                  }
                | null;
            }>;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
          } | null;
        }
      | {
          __typename: "TextBlockRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          content: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
      | {
          __typename: "TwoColumnRecord";
          _createdAt: string;
          _firstPublishedAt: string;
          _publishedAt: string;
          _updatedAt: string;
          id: string;
          leftContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
          rightContent: {
            value: unknown;
            links: Array<
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
            >;
            blocks: Array<
              | {
                  __typename: "CallToActionRecord";
                  label: string | null;
                  variant: string | null;
                  externalUrl: string | null;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  pageLink:
                    | {
                        __typename: "ConcertRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | {
                        __typename: "PageRecord";
                        title: string;
                        slug: string;
                        _createdAt: string;
                        _firstPublishedAt: string;
                        _publishedAt: string;
                        _updatedAt: string;
                        id: string;
                      }
                    | null;
                }
              | {
                  __typename: "DocumentRecord";
                  document: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "ImageRecord";
                  image: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "VideoRecord";
                  title: string | null;
                  thumbnail: unknown;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                  media: {
                    height: number;
                    provider: string;
                    providerUid: string;
                    thumbnailUrl: string;
                    title: string;
                    url: string;
                    width: number;
                  } | null;
                }
            >;
          } | null;
        }
    >;
  } | null;
};

export type GetPageSeoQueryVariables = Exact<{
  slug: string;
}>;

export type GetPageSeoQuery = {
  page: {
    __typename: "PageRecord";
    title: string;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
    _seoMetaTags: Array<{
      attributes: Record<string, string> | null;
      content: string | null;
      tag: string;
    }>;
    seo: { description: string | null; title: string | null; twitterCard: string | null } | null;
  } | null;
};

export type GetPagesQueryVariables = Exact<{
  skip?: number | null | undefined;
  first?: number | null | undefined;
  order?: Array<PageModelOrderBy | null | undefined> | PageModelOrderBy | null | undefined;
}>;

export type GetPagesQuery = {
  allPages: Array<{
    __typename: "PageRecord";
    title: string;
    slug: string;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
  }>;
};

export type GetPagesMetaQueryVariables = Exact<{ [key: string]: never }>;

export type GetPagesMetaQuery = { _allPagesMeta: { count: number } };

export type GetSiteInfoQueryVariables = Exact<{ [key: string]: never }>;

export type GetSiteInfoQuery = {
  _site: {
    locales: Array<SiteLocale>;
    globalSeo: {
      facebookPageUrl: string | null;
      siteName: string | null;
      titleSuffix: string | null;
      twitterAccount: string | null;
      fallbackSeo: {
        description: string | null;
        title: string | null;
        twitterCard: string | null;
      } | null;
    } | null;
  };
};

export type GetSiteMetadataQueryVariables = Exact<{ [key: string]: never }>;

export type GetSiteMetadataQuery = {
  general: {
    __typename: "GeneralRecord";
    title: string | null;
    siteMetadata: unknown;
    _createdAt: string;
    _firstPublishedAt: string;
    _publishedAt: string;
    _updatedAt: string;
    id: string;
  } | null;
};

export type GetSubmenuQueryVariables = Exact<{ [key: string]: never }>;

export type GetSubmenuQuery = {
  general: {
    menu: Array<
      | {
          id: string;
          label: string | null;
          menu: Array<{
            id: string;
            label: string | null;
            link:
              | {
                  __typename: "ConcertRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | {
                  __typename: "PageRecord";
                  title: string;
                  slug: string;
                  _createdAt: string;
                  _firstPublishedAt: string;
                  _publishedAt: string;
                  _updatedAt: string;
                  id: string;
                }
              | null;
          }>;
        }
      | Record<PropertyKey, never>
    >;
  } | null;
};

export const ColorsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "colors" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ColorField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "alpha" } },
          { kind: "Field", name: { kind: "Name", value: "blue" } },
          { kind: "Field", name: { kind: "Name", value: "cssRgb" } },
          { kind: "Field", name: { kind: "Name", value: "green" } },
          { kind: "Field", name: { kind: "Name", value: "hex" } },
          { kind: "Field", name: { kind: "Name", value: "red" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ColorsFragment, unknown>;
export const IdentifiableFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IdentifiableFragment, unknown>;
export const CoordinatesFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CoordinatesFragment, unknown>;
export const LocationFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationFragment, unknown>;
export const LocationItemFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "locationItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "dateTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "location" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ticketLink" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationItemFragment, unknown>;
export const ConcertLinkFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConcertLinkFragment, unknown>;
export const PageLinkFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageLinkFragment, unknown>;
export const CallToActionFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CallToActionFragment, unknown>;
export const HeaderBodyFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderBodyFragment, unknown>;
export const HeaderFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderFragment, unknown>;
export const VideoFieldFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFieldFragment, unknown>;
export const VideoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFragment, unknown>;
export const DocumentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DocumentFragment, unknown>;
export const ImageFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageFragment, unknown>;
export const TextBlockContentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TextBlockContentFragment, unknown>;
export const TextBlockFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TextBlockFragment, unknown>;
export const LeftContentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LeftContentFragment, unknown>;
export const RightContentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RightContentFragment, unknown>;
export const TwoColumFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TwoColumFragment, unknown>;
export const ConcertDetailFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertDetail" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "poster" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "locationItem" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HeaderRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "header" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TextBlockRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "textBlock" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TwoColumnRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "twoColum" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "locationItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "dateTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "location" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ticketLink" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConcertDetailFragment, unknown>;
export const TagFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "tag" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Tag" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "attributes" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "tag" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TagFragment, unknown>;
export const SeoFieldFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "twitterCard" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoFieldFragment, unknown>;
export const ConcertPageSeoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertPageSeo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_seoMetaTags" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "tag" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "seo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "seoField" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "tag" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Tag" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "attributes" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "tag" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "twitterCard" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConcertPageSeoFragment, unknown>;
export const VideoUploadFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoUpload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadVideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "mp4Url" } },
          { kind: "Field", name: { kind: "Name", value: "muxAssetId" } },
          { kind: "Field", name: { kind: "Name", value: "muxPlaybackId" } },
          { kind: "Field", name: { kind: "Name", value: "streamingUrl" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoUploadFragment, unknown>;
export const FileFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "file" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FileField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "video" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "videoUpload" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoUpload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadVideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "mp4Url" } },
          { kind: "Field", name: { kind: "Name", value: "muxAssetId" } },
          { kind: "Field", name: { kind: "Name", value: "muxPlaybackId" } },
          { kind: "Field", name: { kind: "Name", value: "streamingUrl" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileFragment, unknown>;
export const FocalPointFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "focalPoint" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "focalPoint" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "x" } },
          { kind: "Field", name: { kind: "Name", value: "y" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FocalPointFragment, unknown>;
export const MenuItemFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "menuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "link" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MenuItemFragment, unknown>;
export const SubmenuItemFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "submenuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SubmenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "menu" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "menuItem" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "menuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "link" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubmenuItemFragment, unknown>;
export const GeneralInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "generalInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GeneralRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "menu" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "MenuItemRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "menuItem" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "SubmenuItemRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "submenuItem" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "menuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "link" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "submenuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SubmenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "menu" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "menuItem" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GeneralInfoFragment, unknown>;
export const ResponsiveImageFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "responsiveImage" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ResponsiveImage" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "sizes" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "bgColor" } },
          { kind: "Field", name: { kind: "Name", value: "src" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsiveImageFragment, unknown>;
export const PageFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "page" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HeaderRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "header" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TextBlockRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "textBlock" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TwoColumnRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "twoColum" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragment, unknown>;
export const PageDetailFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageDetail" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HeaderRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "header" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TextBlockRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "textBlock" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TwoColumnRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "twoColum" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDetailFragment, unknown>;
export const PageDetailSeoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageDetailSeo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_seoMetaTags" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "tag" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "seo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "seoField" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "tag" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Tag" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "attributes" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "tag" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "twitterCard" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDetailSeoFragment, unknown>;
export const SeoSettingsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GlobalSeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "facebookPageUrl" } },
          { kind: "Field", name: { kind: "Name", value: "siteName" } },
          { kind: "Field", name: { kind: "Name", value: "titleSuffix" } },
          { kind: "Field", name: { kind: "Name", value: "twitterAccount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "fallbackSeo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "seoField" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "twitterCard" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoSettingsFragment, unknown>;
export const SiteMetadataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "siteMetadata" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GeneralRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "siteMetadata" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SiteMetadataFragment, unknown>;
export const GetConcertDocument = {
  __meta__: { hash: "sha256:7874f23b6b441351b949c354e146b233fda6a0aac3a814b9b2f6418a9b9c3353" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getConcert" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ItemId" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "concert" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: { kind: "Variable", name: { kind: "Name", value: "id" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "concertDetail" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "locationItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "dateTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "location" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ticketLink" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertDetail" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "poster" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "locationItem" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HeaderRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "header" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TextBlockRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "textBlock" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TwoColumnRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "twoColum" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertQuery, GetConcertQueryVariables>;
export const GetConcertPageDocument = {
  __meta__: { hash: "sha256:876670f4a65b58218c5312b22c9c9d2bbdae012964e87aa93c3f3da60c1ff614" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getConcertPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "concert" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "concertDetail" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "locationItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "dateTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "location" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ticketLink" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertDetail" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "poster" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "locationItem" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HeaderRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "header" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TextBlockRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "textBlock" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TwoColumnRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "twoColum" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertPageQuery, GetConcertPageQueryVariables>;
export const GetConcertSeoDocument = {
  __meta__: { hash: "sha256:428d22d726a6846943cccb99538d5b670cb63107e54b36d08a95fec7122cc686" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getConcertSeo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "concert" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "concertPageSeo" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "tag" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Tag" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "attributes" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "tag" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "twitterCard" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertPageSeo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_seoMetaTags" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "tag" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "seo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "seoField" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertSeoQuery, GetConcertSeoQueryVariables>;
export const GetConcertsUrlsDocument = {
  __meta__: { hash: "sha256:728ebe119248500ecb378f795c2b6410a635f5342fbccecdb32cd6b405130a3b" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getConcertsUrls" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "order" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ConcertModelOrderBy" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allConcerts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "Variable", name: { kind: "Name", value: "skip" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "order" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertsUrlsQuery, GetConcertsUrlsQueryVariables>;
export const GetConcertsDocument = {
  __meta__: { hash: "sha256:26fc56d985de4ce18f9e461f5308dbc22ede34312a1cf02392aa4e20fb20b712" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getConcerts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "order" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ConcertModelOrderBy" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allConcerts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "Variable", name: { kind: "Name", value: "skip" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "order" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "concertDetail" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "locationItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "dateTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "location" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ticketLink" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertDetail" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "poster" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "locationItem" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HeaderRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "header" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TextBlockRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "textBlock" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TwoColumnRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "twoColum" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertsQuery, GetConcertsQueryVariables>;
export const GetConcertsMetaDocument = {
  __meta__: { hash: "sha256:595ad51c3812ed80c95a2b5ff544dcc830d3eaea7cc6893c34e9401c1a263f88" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getConcertsMeta" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "_allConcertsMeta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "count" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertsMetaQuery, GetConcertsMetaQueryVariables>;
export const GetFutureConcertsDocument = {
  __meta__: { hash: "sha256:8bed87c768124c2d8397c2cfff6a88b876c87c6142e13de1fb0e212459128d76" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getFutureConcerts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "order" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ConcertModelOrderBy" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ConcertModelFilter" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allConcerts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "Variable", name: { kind: "Name", value: "skip" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "order" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "concertDetail" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "locationItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "dateTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "location" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ticketLink" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertDetail" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "poster" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "locationItem" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HeaderRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "header" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TextBlockRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "textBlock" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TwoColumnRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "twoColum" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFutureConcertsQuery, GetFutureConcertsQueryVariables>;
export const GetGeneralInfoDocument = {
  __meta__: { hash: "sha256:1cf7a0d94af4ee36b92b0ed39ced50b2b3a24d4d84f44536214811255d953508" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getGeneralInfo" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "general" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "generalInfo" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "menuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "link" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "submenuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SubmenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "menu" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "menuItem" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "generalInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GeneralRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "menu" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "MenuItemRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "menuItem" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "SubmenuItemRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "submenuItem" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetGeneralInfoQuery, GetGeneralInfoQueryVariables>;
export const GetLocationDocument = {
  __meta__: { hash: "sha256:98b482ae8e0faa66ed223b787f88f0e493630724f484aaaa261105a02f33e44a" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getLocation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ItemId" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: { kind: "Variable", name: { kind: "Name", value: "id" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "location" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>;
export const GetLocationsDocument = {
  __meta__: { hash: "sha256:d84ed9f2ec90e548147d36838e3962b846e9a0e05514aa6b049fcf19f3de7387" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getLocations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "order" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "LocationModelOrderBy" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allLocations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "Variable", name: { kind: "Name", value: "skip" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "order" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "location" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "coordinates" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LatLonField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "latitude" } },
          { kind: "Field", name: { kind: "Name", value: "longitude" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "location" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "LocationRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "addressTitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "coordinates" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetPageDocument = {
  __meta__: { hash: "sha256:0fb768dd36a0ed04dedc64dbf11d0d8443fe101da90f62d725eba7b492b52b13" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "page" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "pageDetail" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "callToAction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CallToActionRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "externalUrl" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "headerBody" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderModelBodyField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "header" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "body" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "headerBody" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cover" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "videoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          { kind: "Field", name: { kind: "Name", value: "providerUid" } },
          { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "video" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "VideoRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "videoField" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "document" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "document" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "image" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlockContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TextBlockModelContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "textBlock" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TextBlockRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "textBlockContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "leftContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelLeftContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "rightContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TwoColumnModelRightContentField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "value" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "links" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "VideoRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DocumentRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "document" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ImageRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "callToAction" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "twoColum" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TwoColumnRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "leftContent" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "rightContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "rightContent" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageDetail" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HeaderRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "header" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TextBlockRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "textBlock" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "TwoColumnRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "twoColum" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageQuery, GetPageQueryVariables>;
export const GetPageSeoDocument = {
  __meta__: { hash: "sha256:9e146eb56f31f116b4a036dd9f351fdf31aee50f52d150445058dcf2a9a2664e" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getPageSeo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "page" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "pageDetailSeo" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "tag" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Tag" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "attributes" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "tag" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "twitterCard" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageDetailSeo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_seoMetaTags" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "tag" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "seo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "seoField" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageSeoQuery, GetPageSeoQueryVariables>;
export const GetPagesDocument = {
  __meta__: { hash: "sha256:52e4efba5c79db24e9f75b4acb7afdfaa9466cf86f0f04e2e5767bbb5336da9a" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getPages" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "IntType" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "order" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "PageModelOrderBy" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "Variable", name: { kind: "Name", value: "skip" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "order" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPagesQuery, GetPagesQueryVariables>;
export const GetPagesMetaDocument = {
  __meta__: { hash: "sha256:d8fbbeb128f434287f7d5eb44b051397dc0dc13903311001b1fad4e9ced3d94d" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getPagesMeta" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "_allPagesMeta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "count" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPagesMetaQuery, GetPagesMetaQueryVariables>;
export const GetSiteInfoDocument = {
  __meta__: { hash: "sha256:4466985c829701569bbc55593a8d4c46ef7001f5f306964cfa05aaa8781c14be" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSiteInfo" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "_site" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "locales" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "globalSeo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "seoSettings" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoField" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "twitterCard" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "seoSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GlobalSeoField" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "facebookPageUrl" } },
          { kind: "Field", name: { kind: "Name", value: "siteName" } },
          { kind: "Field", name: { kind: "Name", value: "titleSuffix" } },
          { kind: "Field", name: { kind: "Name", value: "twitterAccount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "fallbackSeo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "seoField" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSiteInfoQuery, GetSiteInfoQueryVariables>;
export const GetSiteMetadataDocument = {
  __meta__: { hash: "sha256:9dc72e24ed26fa10ce2068232cfc69930d2e3b34c021bb710fdaffbe3392a33d" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSiteMetadata" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "general" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "siteMetadata" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "siteMetadata" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GeneralRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "siteMetadata" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSiteMetadataQuery, GetSiteMetadataQueryVariables>;
export const GetSubmenuDocument = {
  __meta__: { hash: "sha256:9a6316d41646f9addde6028f9abf5b94900707003d13bed5469907a60419bde3" },
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSubmenu" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "general" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "menu" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "SubmenuItemRecord" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "submenuItem" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "identifiable" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RecordInterface" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "_createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "_firstPublishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_publishedAt" } },
          { kind: "Field", name: { kind: "Name", value: "_updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "concertLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ConcertRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "pageLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "identifiable" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "menuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "link" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ConcertRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "concertLink" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageRecord" } },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "pageLink" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "submenuItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SubmenuItemRecord" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "menu" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "menuItem" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSubmenuQuery, GetSubmenuQueryVariables>;
