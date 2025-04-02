/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** Represents `true` or `false` values. */
  BooleanType: { input: boolean; output: boolean }
  CustomData: { input: Record<string, string>; output: Record<string, string> }
  /** A ISO 8601 compliant datetime value */
  DateTime: { input: string; output: string }
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: { input: number; output: number }
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: { input: number; output: number }
  ItemId: { input: string; output: string }
  JsonField: { input: unknown; output: unknown }
  MetaTagAttributes: {
    input: Record<string, string>
    output: Record<string, string>
  }
  UploadId: { input: string; output: string }
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

export type CallToActionModelPageLinkField = ConcertRecord | PageRecord

/** Block of type Call to action (call_to_action) */
export type CallToActionRecord = RecordInterface & {
  __typename?: 'CallToActionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  externalUrl?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  label?: Maybe<Scalars['String']['output']>
  pageLink?: Maybe<CallToActionModelPageLinkField>
  variant?: Maybe<Scalars['String']['output']>
}

/** Block of type Call to action (call_to_action) */
export type CallToActionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata'
  count: Scalars['IntType']['output']
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField'
  alpha: Scalars['IntType']['output']
  blue: Scalars['IntType']['output']
  cssRgb: Scalars['String']['output']
  green: Scalars['IntType']['output']
  hex: Scalars['String']['output']
  red: Scalars['IntType']['output']
}

/** Block of type Concert list (concert_list) */
export type ConcertListRecord = RecordInterface & {
  __typename?: 'ConcertListRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  futureConcerts: Scalars['BooleanType']['output']
  id: Scalars['ItemId']['output']
  pinnedConcerts: Array<ConcertRecord>
}

/** Block of type Concert list (concert_list) */
export type ConcertListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ConcertModelContentField =
  | HeaderRecord
  | TextBlockRecord
  | TwoColumnRecord

export type ConcertModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConcertModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ConcertModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  locations?: InputMaybe<ConcertModelLocationsFieldFilter>
  position?: InputMaybe<PositionFilter>
  poster?: InputMaybe<JsonFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

/** Specify nested blocks fields conditions */
export type ConcertModelLocationsFieldBlocksConditions = {
  locationItem?: InputMaybe<LocationItemModelFilter>
}

/** Specify nested blocks types presence */
export type ConcertModelLocationsFieldBlocksPresence = {
  locationItem?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specify how to filter this specific Modular Content field instance */
export type ConcertModelLocationsFieldFilter = {
  /** Filter records containing at least one block matching the specified conditions */
  any?: InputMaybe<ConcertModelLocationsFieldBlocksConditions>
  /** Filter records containing at least one block of specified type or not */
  containsAny?: InputMaybe<ConcertModelLocationsFieldBlocksPresence>
  /** Filter records containing at least one block of any kind or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

export enum ConcertModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Concert (concert) */
export type ConcertRecord = RecordInterface & {
  __typename?: 'ConcertRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content: Array<ConcertModelContentField>
  id: Scalars['ItemId']['output']
  locations: Array<LocationItemRecord>
  position?: Maybe<Scalars['IntType']['output']>
  poster?: Maybe<Scalars['JsonField']['output']>
  seo?: Maybe<SeoField>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Concert (concert) */
export type ConcertRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Block of type Document (document) */
export type DocumentRecord = RecordInterface & {
  __typename?: 'DocumentRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  document?: Maybe<Scalars['JsonField']['output']>
  id: Scalars['ItemId']['output']
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Document (document) */
export type DocumentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type GeneralModelMenuField = MenuItemRecord | SubmenuItemRecord

/** Record of type general (general) */
export type GeneralRecord = RecordInterface & {
  __typename?: 'GeneralRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  menu: Array<GeneralModelMenuField>
  siteMetadata?: Maybe<Scalars['JsonField']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type general (general) */
export type GeneralRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: Maybe<Scalars['String']['output']>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars['String']['output']>
  titleSuffix?: Maybe<Scalars['String']['output']>
  twitterAccount?: Maybe<Scalars['String']['output']>
}

export type HeaderModelBodyField = {
  __typename?: 'HeaderModelBodyField'
  blocks: Array<CallToActionRecord>
  inlineBlocks: Array<Scalars['String']['output']>
  links: Array<HeaderModelBodyLinksField>
  value: Scalars['JsonField']['output']
}

export type HeaderModelBodyLinksField = ConcertRecord | PageRecord

/** Block of type Header (header) */
export type HeaderRecord = RecordInterface & {
  __typename?: 'HeaderRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  body?: Maybe<HeaderModelBodyField>
  cover?: Maybe<Scalars['JsonField']['output']>
  id: Scalars['ItemId']['output']
}

/** Block of type Header (header) */
export type HeaderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Afbeelding (image) */
export type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  image?: Maybe<Scalars['JsonField']['output']>
}

/** Block of type Afbeelding (image) */
export type ImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']['input']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']['input']>
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']['input']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<
    Array<ImgixParamsFillGradientLinearDirection>
  >
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']['input']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']['input']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']['input']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']['input']>
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBgRemoveFgType {
  Auto = 'auto',
  Car = 'car',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Origin = 'origin',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Gen = 'gen',
  Generative = 'generative',
  Gradient = 'gradient',
  Solid = 'solid',
}

export enum ImgixParamsFillGenPos {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsFillGradientCs {
  Hsl = 'hsl',
  Lch = 'lch',
  Linear = 'linear',
  Oklab = 'oklab',
  Srgb = 'srgb',
}

export enum ImgixParamsFillGradientLinearDirection {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsFillGradientType {
  Linear = 'linear',
  Radial = 'radial',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsRotType {
  Pivot = 'pivot',
  Straighten = 'straighten',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Alpha = 'alpha',
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

export type LatLonField = {
  __typename?: 'LatLonField'
  latitude: Scalars['FloatType']['output']
  longitude: Scalars['FloatType']['output']
}

/** Specifies how to filter Geolocation fields */
export type LatLonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records within the specified radius in meters */
  near?: InputMaybe<LatLonNearFilter>
}

export type LatLonNearFilter = {
  latitude: Scalars['FloatType']['input']
  longitude: Scalars['FloatType']['input']
  radius: Scalars['FloatType']['input']
}

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export type LocationItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LocationItemModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LocationItemModelFilter>>>
  dateTime?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<ItemIdFilter>
  location?: InputMaybe<LinkFilter>
  ticketLink?: InputMaybe<StringFilter>
}

/** Block of type location item (location_item) */
export type LocationItemRecord = RecordInterface & {
  __typename?: 'LocationItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  dateTime?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['ItemId']['output']
  location?: Maybe<LocationRecord>
  ticketLink?: Maybe<Scalars['String']['output']>
}

/** Block of type location item (location_item) */
export type LocationItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type LocationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  address?: InputMaybe<LatLonFilter>
  addressTitle?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  title?: InputMaybe<StringFilter>
}

export enum LocationModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AddressTitleAsc = 'addressTitle_ASC',
  AddressTitleDesc = 'addressTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Location (location) */
export type LocationRecord = RecordInterface & {
  __typename?: 'LocationRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  address?: Maybe<LatLonField>
  addressTitle?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Location (location) */
export type LocationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type MenuItemModelLinkField = ConcertRecord | PageRecord

/** Block of type Menu item (menu_item) */
export type MenuItemRecord = RecordInterface & {
  __typename?: 'MenuItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  label?: Maybe<Scalars['String']['output']>
  link?: Maybe<MenuItemModelLinkField>
}

/** Block of type Menu item (menu_item) */
export type MenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

export type PageModelContentField =
  | HeaderRecord
  | TextBlockRecord
  | TwoColumnRecord

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Pagina (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content: Array<PageModelContentField>
  id: Scalars['ItemId']['output']
  seo?: Maybe<SeoField>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Pagina (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query'
  /** Returns meta information regarding a record collection */
  _allConcertsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLocationsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allConcerts: Array<ConcertRecord>
  /** Returns a collection of records */
  allLocations: Array<LocationRecord>
  /** Returns a collection of records */
  allPages: Array<PageRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a specific record */
  concert?: Maybe<ConcertRecord>
  /** Returns the single instance record */
  general?: Maybe<GeneralRecord>
  /** Returns a specific record */
  location?: Maybe<LocationRecord>
  /** Returns a specific record */
  page?: Maybe<PageRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
}

/** The query root for this schema */
export type Query_AllConcertsMetaArgs = {
  filter?: InputMaybe<ConcertModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllLocationsMetaArgs = {
  filter?: InputMaybe<LocationModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAllConcertsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ConcertModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ConcertModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllLocationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LocationModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryConcertArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ConcertModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ConcertModelOrderBy>>>
}

/** The query root for this schema */
export type QueryGeneralArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryLocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LocationModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
}

export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage'
  alt?: Maybe<Scalars['String']['output']>
  aspectRatio: Scalars['FloatType']['output']
  base64?: Maybe<Scalars['String']['output']>
  bgColor?: Maybe<Scalars['String']['output']>
  height: Scalars['IntType']['output']
  sizes: Scalars['String']['output']
  src: Scalars['String']['output']
  srcSet: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  webpSrcSet: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<FileField>
  noIndex?: Maybe<Scalars['BooleanType']['output']>
  title?: Maybe<Scalars['String']['output']>
  twitterCard?: Maybe<Scalars['String']['output']>
}

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
  noIndex?: Maybe<Scalars['BooleanType']['output']>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum SiteLocale {
  Nl = 'nl',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>
  pattern: Scalars['String']['input']
  regexp?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Block of type Submenu item (submenu_item) */
export type SubmenuItemRecord = RecordInterface & {
  __typename?: 'SubmenuItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  label?: Maybe<Scalars['String']['output']>
  menu: Array<MenuItemRecord>
}

/** Block of type Submenu item (submenu_item) */
export type SubmenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Tag = {
  __typename?: 'Tag'
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>
  content?: Maybe<Scalars['String']['output']>
  tag: Scalars['String']['output']
}

export type TextBlockModelContentBlocksField =
  | CallToActionRecord
  | DocumentRecord
  | ImageRecord
  | VideoRecord

export type TextBlockModelContentField = {
  __typename?: 'TextBlockModelContentField'
  blocks: Array<TextBlockModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']['output']>
  links: Array<TextBlockModelContentLinksField>
  value: Scalars['JsonField']['output']
}

export type TextBlockModelContentLinksField = ConcertRecord | PageRecord

/** Block of type Tekst blok (text_block) */
export type TextBlockRecord = RecordInterface & {
  __typename?: 'TextBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content?: Maybe<TextBlockModelContentField>
  id: Scalars['ItemId']['output']
}

/** Block of type Tekst blok (text_block) */
export type TextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type TwoColumnModelLeftContentBlocksField =
  | CallToActionRecord
  | DocumentRecord
  | ImageRecord
  | VideoRecord

export type TwoColumnModelLeftContentField = {
  __typename?: 'TwoColumnModelLeftContentField'
  blocks: Array<TwoColumnModelLeftContentBlocksField>
  inlineBlocks: Array<Scalars['String']['output']>
  links: Array<TwoColumnModelLeftContentLinksField>
  value: Scalars['JsonField']['output']
}

export type TwoColumnModelLeftContentLinksField = ConcertRecord | PageRecord

export type TwoColumnModelRightContentBlocksField =
  | CallToActionRecord
  | DocumentRecord
  | ImageRecord
  | VideoRecord

export type TwoColumnModelRightContentField = {
  __typename?: 'TwoColumnModelRightContentField'
  blocks: Array<TwoColumnModelRightContentBlocksField>
  inlineBlocks: Array<Scalars['String']['output']>
  links: Array<TwoColumnModelRightContentLinksField>
  value: Scalars['JsonField']['output']
}

export type TwoColumnModelRightContentLinksField = ConcertRecord | PageRecord

/** Block of type Twee kolommen tekst blok (two_column) */
export type TwoColumnRecord = RecordInterface & {
  __typename?: 'TwoColumnRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  leftContent?: Maybe<TwoColumnModelLeftContentField>
  rightContent?: Maybe<TwoColumnModelRightContentField>
}

/** Block of type Twee kolommen tekst blok (two_column) */
export type TwoColumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  alt?: InputMaybe<UploadAltFilter>
  author?: InputMaybe<UploadAuthorFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  colors?: InputMaybe<UploadColorsFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  id?: InputMaybe<UploadIdFilter>
  inUse?: InputMaybe<InUseFilter>
  md5?: InputMaybe<UploadMd5Filter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  notes?: InputMaybe<UploadNotesFilter>
  orientation?: InputMaybe<OrientationFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  tags?: InputMaybe<UploadTagsFilter>
  title?: InputMaybe<UploadTitleFilter>
  type?: InputMaybe<TypeFilter>
  width?: InputMaybe<UploadWidthFilter>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export type UploadVideoField = {
  __typename?: 'UploadVideoField'
  alt?: Maybe<Scalars['String']['output']>
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['Int']['output']>
  framerate?: Maybe<Scalars['Int']['output']>
  height: Scalars['IntType']['output']
  mp4Url?: Maybe<Scalars['String']['output']>
  muxAssetId: Scalars['String']['output']
  muxPlaybackId: Scalars['String']['output']
  streamingUrl: Scalars['String']['output']
  thumbhash?: Maybe<Scalars['String']['output']>
  thumbnailUrl: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  width: Scalars['IntType']['output']
}

export type UploadVideoFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type UploadVideoFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>
  res?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

export type UploadVideoFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

export type VideoField = {
  __typename?: 'VideoField'
  height: Scalars['IntType']['output']
  provider: Scalars['String']['output']
  providerUid: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

/** Block of type Video (video) */
export type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  media?: Maybe<VideoField>
  thumbnail?: Maybe<Scalars['JsonField']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Video (video) */
export type VideoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type FocalPoint = {
  __typename?: 'focalPoint'
  x: Scalars['FloatType']['output']
  y: Scalars['FloatType']['output']
}

export type CallToActionFragment = {
  __typename: 'CallToActionRecord'
  label?: string | null
  variant?: string | null
  externalUrl?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  pageLink?:
    | {
        __typename: 'ConcertRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | null
}

export type ColorsFragment = {
  __typename?: 'ColorField'
  alpha: number
  blue: number
  cssRgb: string
  green: number
  hex: string
  red: number
}

export type ConcertDetailFragment = {
  __typename: 'ConcertRecord'
  title?: string | null
  slug?: string | null
  poster?: unknown | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  locations: Array<{
    __typename?: 'LocationItemRecord'
    id: string
    dateTime?: string | null
    ticketLink?: string | null
    location?: {
      __typename?: 'LocationRecord'
      id: string
      title?: string | null
      addressTitle?: string | null
      address?: {
        __typename?: 'LatLonField'
        latitude: number
        longitude: number
      } | null
    } | null
  }>
  content: Array<
    | {
        __typename: 'HeaderRecord'
        cover?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        body?: {
          __typename?: 'HeaderModelBodyField'
          value: unknown
          blocks: Array<{
            __typename: 'CallToActionRecord'
            label?: string | null
            variant?: string | null
            externalUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            pageLink?:
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | null
          }>
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
        } | null
      }
    | {
        __typename: 'TextBlockRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        content?: {
          __typename?: 'TextBlockModelContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
      }
    | {
        __typename: 'TwoColumnRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        leftContent?: {
          __typename?: 'TwoColumnModelLeftContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
        rightContent?: {
          __typename?: 'TwoColumnModelRightContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
      }
  >
}

export type ConcertLinkFragment = {
  __typename: 'ConcertRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type CoordinatesFragment = {
  __typename?: 'LatLonField'
  latitude: number
  longitude: number
}

export type EventLinkFragment = {
  __typename: 'ConcertRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type EventPageSeoFragment = {
  __typename: 'ConcertRecord'
  title?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  _seoMetaTags: Array<{
    __typename?: 'Tag'
    attributes?: Record<string, string> | null
    content?: string | null
    tag: string
  }>
  seo?: {
    __typename?: 'SeoField'
    description?: string | null
    title?: string | null
    twitterCard?: string | null
  } | null
}

export type FileFragment = {
  __typename?: 'FileField'
  id: string
  alt?: string | null
  width?: number | null
  height?: number | null
  title?: string | null
  url: string
  video?: {
    __typename?: 'UploadVideoField'
    mp4Url?: string | null
    muxAssetId: string
    muxPlaybackId: string
    streamingUrl: string
    thumbnailUrl: string
  } | null
}

export type FocalPointFragment = {
  __typename?: 'focalPoint'
  x: number
  y: number
}

export type GeneralInfoFragment = {
  __typename?: 'GeneralRecord'
  id: string
  title?: string | null
  menu: Array<
    | {
        __typename?: 'MenuItemRecord'
        id: string
        label?: string | null
        link?:
          | {
              __typename: 'ConcertRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            }
          | {
              __typename: 'PageRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            }
          | null
      }
    | {
        __typename?: 'SubmenuItemRecord'
        id: string
        label?: string | null
        menu: Array<{
          __typename?: 'MenuItemRecord'
          id: string
          label?: string | null
          link?:
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | null
        }>
      }
  >
}

export type HeaderFragment = {
  __typename: 'HeaderRecord'
  cover?: unknown | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  body?: {
    __typename?: 'HeaderModelBodyField'
    value: unknown
    blocks: Array<{
      __typename: 'CallToActionRecord'
      label?: string | null
      variant?: string | null
      externalUrl?: string | null
      _createdAt: string
      _firstPublishedAt?: string | null
      _publishedAt?: string | null
      _updatedAt: string
      id: string
      pageLink?:
        | {
            __typename: 'ConcertRecord'
            title?: string | null
            slug?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
          }
        | {
            __typename: 'PageRecord'
            title?: string | null
            slug?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
          }
        | null
    }>
    links: Array<
      | {
          __typename: 'ConcertRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
    >
  } | null
}

export type HeaderBodyFragment = {
  __typename?: 'HeaderModelBodyField'
  value: unknown
  blocks: Array<{
    __typename: 'CallToActionRecord'
    label?: string | null
    variant?: string | null
    externalUrl?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    pageLink?:
      | {
          __typename: 'ConcertRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | null
  }>
  links: Array<
    | {
        __typename: 'ConcertRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
  >
}

type Identifiable_CallToActionRecord_Fragment = {
  __typename: 'CallToActionRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_ConcertListRecord_Fragment = {
  __typename: 'ConcertListRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_ConcertRecord_Fragment = {
  __typename: 'ConcertRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_DocumentRecord_Fragment = {
  __typename: 'DocumentRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_GeneralRecord_Fragment = {
  __typename: 'GeneralRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_HeaderRecord_Fragment = {
  __typename: 'HeaderRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_ImageRecord_Fragment = {
  __typename: 'ImageRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_LocationItemRecord_Fragment = {
  __typename: 'LocationItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_LocationRecord_Fragment = {
  __typename: 'LocationRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_MenuItemRecord_Fragment = {
  __typename: 'MenuItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_PageRecord_Fragment = {
  __typename: 'PageRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_SubmenuItemRecord_Fragment = {
  __typename: 'SubmenuItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_TextBlockRecord_Fragment = {
  __typename: 'TextBlockRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_TwoColumnRecord_Fragment = {
  __typename: 'TwoColumnRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_VideoRecord_Fragment = {
  __typename: 'VideoRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

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
  | Identifiable_VideoRecord_Fragment

export type ResponsiveImageFragment = {
  __typename?: 'ResponsiveImage'
  title?: string | null
  alt?: string | null
  sizes: string
  aspectRatio: number
  bgColor?: string | null
  src: string
  height: number
  width: number
}

export type ImageFragment = {
  __typename: 'ImageRecord'
  image?: unknown | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type DocumentFragment = {
  __typename: 'DocumentRecord'
  document?: unknown | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type LocationFragment = {
  __typename?: 'LocationRecord'
  id: string
  title?: string | null
  addressTitle?: string | null
  address?: {
    __typename?: 'LatLonField'
    latitude: number
    longitude: number
  } | null
}

export type LocationItemFragment = {
  __typename?: 'LocationItemRecord'
  id: string
  dateTime?: string | null
  ticketLink?: string | null
  location?: {
    __typename?: 'LocationRecord'
    id: string
    title?: string | null
    addressTitle?: string | null
    address?: {
      __typename?: 'LatLonField'
      latitude: number
      longitude: number
    } | null
  } | null
}

export type MenuItemFragment = {
  __typename?: 'MenuItemRecord'
  id: string
  label?: string | null
  link?:
    | {
        __typename: 'ConcertRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | null
}

export type PageFragment = {
  __typename: 'PageRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  content: Array<
    | {
        __typename: 'HeaderRecord'
        cover?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        body?: {
          __typename?: 'HeaderModelBodyField'
          value: unknown
          blocks: Array<{
            __typename: 'CallToActionRecord'
            label?: string | null
            variant?: string | null
            externalUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            pageLink?:
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | null
          }>
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
        } | null
      }
    | {
        __typename: 'TextBlockRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        content?: {
          __typename?: 'TextBlockModelContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
      }
    | {
        __typename: 'TwoColumnRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        leftContent?: {
          __typename?: 'TwoColumnModelLeftContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
        rightContent?: {
          __typename?: 'TwoColumnModelRightContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
      }
  >
}

export type PageDetailFragment = {
  __typename: 'PageRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  content: Array<
    | {
        __typename: 'HeaderRecord'
        cover?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        body?: {
          __typename?: 'HeaderModelBodyField'
          value: unknown
          blocks: Array<{
            __typename: 'CallToActionRecord'
            label?: string | null
            variant?: string | null
            externalUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            pageLink?:
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | null
          }>
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
        } | null
      }
    | {
        __typename: 'TextBlockRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        content?: {
          __typename?: 'TextBlockModelContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
      }
    | {
        __typename: 'TwoColumnRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        leftContent?: {
          __typename?: 'TwoColumnModelLeftContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
        rightContent?: {
          __typename?: 'TwoColumnModelRightContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'CallToActionRecord'
                label?: string | null
                variant?: string | null
                externalUrl?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pageLink?:
                  | {
                      __typename: 'ConcertRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | {
                      __typename: 'PageRecord'
                      title?: string | null
                      slug?: string | null
                      _createdAt: string
                      _firstPublishedAt?: string | null
                      _publishedAt?: string | null
                      _updatedAt: string
                      id: string
                    }
                  | null
              }
            | {
                __typename: 'DocumentRecord'
                document?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'ImageRecord'
                image?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                thumbnail?: unknown | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
              }
          >
        } | null
      }
  >
}

export type PageDetailSeoFragment = {
  __typename: 'PageRecord'
  title?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  _seoMetaTags: Array<{
    __typename?: 'Tag'
    attributes?: Record<string, string> | null
    content?: string | null
    tag: string
  }>
  seo?: {
    __typename?: 'SeoField'
    description?: string | null
    title?: string | null
    twitterCard?: string | null
  } | null
}

export type PageLinkFragment = {
  __typename: 'PageRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type SeoFieldFragment = {
  __typename?: 'SeoField'
  description?: string | null
  title?: string | null
  twitterCard?: string | null
}

export type SeoSettingsFragment = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: string | null
  siteName?: string | null
  titleSuffix?: string | null
  twitterAccount?: string | null
  fallbackSeo?: {
    __typename?: 'SeoField'
    description?: string | null
    title?: string | null
    twitterCard?: string | null
  } | null
}

export type SiteMetadataFragment = {
  __typename: 'GeneralRecord'
  title?: string | null
  siteMetadata?: unknown | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type SubmenuItemFragment = {
  __typename?: 'SubmenuItemRecord'
  id: string
  label?: string | null
  menu: Array<{
    __typename?: 'MenuItemRecord'
    id: string
    label?: string | null
    link?:
      | {
          __typename: 'ConcertRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | null
  }>
}

export type TagFragment = {
  __typename?: 'Tag'
  attributes?: Record<string, string> | null
  content?: string | null
  tag: string
}

export type TextBlockContentFragment = {
  __typename?: 'TextBlockModelContentField'
  value: unknown
  links: Array<
    | {
        __typename: 'ConcertRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
  >
  blocks: Array<
    | {
        __typename: 'CallToActionRecord'
        label?: string | null
        variant?: string | null
        externalUrl?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pageLink?:
          | {
              __typename: 'ConcertRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            }
          | {
              __typename: 'PageRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            }
          | null
      }
    | {
        __typename: 'DocumentRecord'
        document?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'ImageRecord'
        image?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'VideoRecord'
        title?: string | null
        thumbnail?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        media?: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        } | null
      }
  >
}

export type LeftContentFragment = {
  __typename?: 'TwoColumnModelLeftContentField'
  value: unknown
  links: Array<
    | {
        __typename: 'ConcertRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
  >
  blocks: Array<
    | {
        __typename: 'CallToActionRecord'
        label?: string | null
        variant?: string | null
        externalUrl?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pageLink?:
          | {
              __typename: 'ConcertRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            }
          | {
              __typename: 'PageRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            }
          | null
      }
    | {
        __typename: 'DocumentRecord'
        document?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'ImageRecord'
        image?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'VideoRecord'
        title?: string | null
        thumbnail?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        media?: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        } | null
      }
  >
}

export type RightContentFragment = {
  __typename?: 'TwoColumnModelRightContentField'
  value: unknown
  links: Array<
    | {
        __typename: 'ConcertRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
  >
  blocks: Array<
    | {
        __typename: 'CallToActionRecord'
        label?: string | null
        variant?: string | null
        externalUrl?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pageLink?:
          | {
              __typename: 'ConcertRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            }
          | {
              __typename: 'PageRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            }
          | null
      }
    | {
        __typename: 'DocumentRecord'
        document?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'ImageRecord'
        image?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'VideoRecord'
        title?: string | null
        thumbnail?: unknown | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        media?: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        } | null
      }
  >
}

export type TextBlockFragment = {
  __typename: 'TextBlockRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  content?: {
    __typename?: 'TextBlockModelContentField'
    value: unknown
    links: Array<
      | {
          __typename: 'ConcertRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
    >
    blocks: Array<
      | {
          __typename: 'CallToActionRecord'
          label?: string | null
          variant?: string | null
          externalUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          pageLink?:
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | null
        }
      | {
          __typename: 'DocumentRecord'
          document?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'ImageRecord'
          image?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'VideoRecord'
          title?: string | null
          thumbnail?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          media?: {
            __typename?: 'VideoField'
            height: number
            provider: string
            providerUid: string
            thumbnailUrl: string
            title: string
            url: string
            width: number
          } | null
        }
    >
  } | null
}

export type TwoColumFragment = {
  __typename: 'TwoColumnRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  leftContent?: {
    __typename?: 'TwoColumnModelLeftContentField'
    value: unknown
    links: Array<
      | {
          __typename: 'ConcertRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
    >
    blocks: Array<
      | {
          __typename: 'CallToActionRecord'
          label?: string | null
          variant?: string | null
          externalUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          pageLink?:
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | null
        }
      | {
          __typename: 'DocumentRecord'
          document?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'ImageRecord'
          image?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'VideoRecord'
          title?: string | null
          thumbnail?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          media?: {
            __typename?: 'VideoField'
            height: number
            provider: string
            providerUid: string
            thumbnailUrl: string
            title: string
            url: string
            width: number
          } | null
        }
    >
  } | null
  rightContent?: {
    __typename?: 'TwoColumnModelRightContentField'
    value: unknown
    links: Array<
      | {
          __typename: 'ConcertRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
    >
    blocks: Array<
      | {
          __typename: 'CallToActionRecord'
          label?: string | null
          variant?: string | null
          externalUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          pageLink?:
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | null
        }
      | {
          __typename: 'DocumentRecord'
          document?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'ImageRecord'
          image?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'VideoRecord'
          title?: string | null
          thumbnail?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          media?: {
            __typename?: 'VideoField'
            height: number
            provider: string
            providerUid: string
            thumbnailUrl: string
            title: string
            url: string
            width: number
          } | null
        }
    >
  } | null
}

export type VideoUploadFragment = {
  __typename?: 'UploadVideoField'
  mp4Url?: string | null
  muxAssetId: string
  muxPlaybackId: string
  streamingUrl: string
  thumbnailUrl: string
}

export type VideoFragment = {
  __typename: 'VideoRecord'
  title?: string | null
  thumbnail?: unknown | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  media?: {
    __typename?: 'VideoField'
    height: number
    provider: string
    providerUid: string
    thumbnailUrl: string
    title: string
    url: string
    width: number
  } | null
}

export type VideoFieldFragment = {
  __typename?: 'VideoField'
  height: number
  provider: string
  providerUid: string
  thumbnailUrl: string
  title: string
  url: string
  width: number
}

export type GetEventQueryVariables = Exact<{
  id: Scalars['ItemId']['input']
}>

export type GetEventQuery = {
  __typename?: 'Query'
  concert?: {
    __typename: 'ConcertRecord'
    title?: string | null
    slug?: string | null
    poster?: unknown | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime?: string | null
      ticketLink?: string | null
      location?: {
        __typename?: 'LocationRecord'
        id: string
        title?: string | null
        addressTitle?: string | null
        address?: {
          __typename?: 'LatLonField'
          latitude: number
          longitude: number
        } | null
      } | null
    }>
    content: Array<
      | {
          __typename: 'HeaderRecord'
          cover?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          body?: {
            __typename?: 'HeaderModelBodyField'
            value: unknown
            blocks: Array<{
              __typename: 'CallToActionRecord'
              label?: string | null
              variant?: string | null
              externalUrl?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
              pageLink?:
                | {
                    __typename: 'ConcertRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | {
                    __typename: 'PageRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | null
            }>
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
          } | null
        }
      | {
          __typename: 'TextBlockRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          content?: {
            __typename?: 'TextBlockModelContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
      | {
          __typename: 'TwoColumnRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          leftContent?: {
            __typename?: 'TwoColumnModelLeftContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
          rightContent?: {
            __typename?: 'TwoColumnModelRightContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
    >
  } | null
}

export type GetEventPageQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetEventPageQuery = {
  __typename?: 'Query'
  concert?: {
    __typename: 'ConcertRecord'
    title?: string | null
    slug?: string | null
    poster?: unknown | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime?: string | null
      ticketLink?: string | null
      location?: {
        __typename?: 'LocationRecord'
        id: string
        title?: string | null
        addressTitle?: string | null
        address?: {
          __typename?: 'LatLonField'
          latitude: number
          longitude: number
        } | null
      } | null
    }>
    content: Array<
      | {
          __typename: 'HeaderRecord'
          cover?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          body?: {
            __typename?: 'HeaderModelBodyField'
            value: unknown
            blocks: Array<{
              __typename: 'CallToActionRecord'
              label?: string | null
              variant?: string | null
              externalUrl?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
              pageLink?:
                | {
                    __typename: 'ConcertRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | {
                    __typename: 'PageRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | null
            }>
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
          } | null
        }
      | {
          __typename: 'TextBlockRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          content?: {
            __typename?: 'TextBlockModelContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
      | {
          __typename: 'TwoColumnRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          leftContent?: {
            __typename?: 'TwoColumnModelLeftContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
          rightContent?: {
            __typename?: 'TwoColumnModelRightContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
    >
  } | null
}

export type GetEventSeoQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetEventSeoQuery = {
  __typename?: 'Query'
  concert?: {
    __typename: 'ConcertRecord'
    title?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    _seoMetaTags: Array<{
      __typename?: 'Tag'
      attributes?: Record<string, string> | null
      content?: string | null
      tag: string
    }>
    seo?: {
      __typename?: 'SeoField'
      description?: string | null
      title?: string | null
      twitterCard?: string | null
    } | null
  } | null
}

export type GetEventsUrlsQueryVariables = Exact<{
  skip: Scalars['IntType']['input']
  first: Scalars['IntType']['input']
  order?: InputMaybe<
    Array<InputMaybe<ConcertModelOrderBy>> | InputMaybe<ConcertModelOrderBy>
  >
}>

export type GetEventsUrlsQuery = {
  __typename?: 'Query'
  allConcerts: Array<{
    __typename: 'ConcertRecord'
    title?: string | null
    slug?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
  }>
}

export type GetEventsQueryVariables = Exact<{
  skip: Scalars['IntType']['input']
  first: Scalars['IntType']['input']
  order?: InputMaybe<
    Array<InputMaybe<ConcertModelOrderBy>> | InputMaybe<ConcertModelOrderBy>
  >
}>

export type GetEventsQuery = {
  __typename?: 'Query'
  allConcerts: Array<{
    __typename: 'ConcertRecord'
    title?: string | null
    slug?: string | null
    poster?: unknown | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime?: string | null
      ticketLink?: string | null
      location?: {
        __typename?: 'LocationRecord'
        id: string
        title?: string | null
        addressTitle?: string | null
        address?: {
          __typename?: 'LatLonField'
          latitude: number
          longitude: number
        } | null
      } | null
    }>
    content: Array<
      | {
          __typename: 'HeaderRecord'
          cover?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          body?: {
            __typename?: 'HeaderModelBodyField'
            value: unknown
            blocks: Array<{
              __typename: 'CallToActionRecord'
              label?: string | null
              variant?: string | null
              externalUrl?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
              pageLink?:
                | {
                    __typename: 'ConcertRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | {
                    __typename: 'PageRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | null
            }>
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
          } | null
        }
      | {
          __typename: 'TextBlockRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          content?: {
            __typename?: 'TextBlockModelContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
      | {
          __typename: 'TwoColumnRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          leftContent?: {
            __typename?: 'TwoColumnModelLeftContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
          rightContent?: {
            __typename?: 'TwoColumnModelRightContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
    >
  }>
}

export type GetEventsMetaQueryVariables = Exact<{ [key: string]: never }>

export type GetEventsMetaQuery = {
  __typename?: 'Query'
  _allConcertsMeta: { __typename?: 'CollectionMetadata'; count: number }
}

export type GetFutureEventsQueryVariables = Exact<{
  skip: Scalars['IntType']['input']
  first: Scalars['IntType']['input']
  order?: InputMaybe<
    Array<InputMaybe<ConcertModelOrderBy>> | InputMaybe<ConcertModelOrderBy>
  >
  filter?: InputMaybe<ConcertModelFilter>
}>

export type GetFutureEventsQuery = {
  __typename?: 'Query'
  allConcerts: Array<{
    __typename: 'ConcertRecord'
    title?: string | null
    slug?: string | null
    poster?: unknown | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime?: string | null
      ticketLink?: string | null
      location?: {
        __typename?: 'LocationRecord'
        id: string
        title?: string | null
        addressTitle?: string | null
        address?: {
          __typename?: 'LatLonField'
          latitude: number
          longitude: number
        } | null
      } | null
    }>
    content: Array<
      | {
          __typename: 'HeaderRecord'
          cover?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          body?: {
            __typename?: 'HeaderModelBodyField'
            value: unknown
            blocks: Array<{
              __typename: 'CallToActionRecord'
              label?: string | null
              variant?: string | null
              externalUrl?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
              pageLink?:
                | {
                    __typename: 'ConcertRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | {
                    __typename: 'PageRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | null
            }>
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
          } | null
        }
      | {
          __typename: 'TextBlockRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          content?: {
            __typename?: 'TextBlockModelContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
      | {
          __typename: 'TwoColumnRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          leftContent?: {
            __typename?: 'TwoColumnModelLeftContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
          rightContent?: {
            __typename?: 'TwoColumnModelRightContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
    >
  }>
}

export type GetGeneralInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetGeneralInfoQuery = {
  __typename?: 'Query'
  general?: {
    __typename?: 'GeneralRecord'
    id: string
    title?: string | null
    menu: Array<
      | {
          __typename?: 'MenuItemRecord'
          id: string
          label?: string | null
          link?:
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | null
        }
      | {
          __typename?: 'SubmenuItemRecord'
          id: string
          label?: string | null
          menu: Array<{
            __typename?: 'MenuItemRecord'
            id: string
            label?: string | null
            link?:
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | null
          }>
        }
    >
  } | null
}

export type GetLocationQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>
}>

export type GetLocationQuery = {
  __typename?: 'Query'
  location?: {
    __typename?: 'LocationRecord'
    id: string
    title?: string | null
    addressTitle?: string | null
    address?: {
      __typename?: 'LatLonField'
      latitude: number
      longitude: number
    } | null
  } | null
}

export type GetLocationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>
  skip?: InputMaybe<Scalars['IntType']['input']>
  order?: InputMaybe<
    Array<InputMaybe<LocationModelOrderBy>> | InputMaybe<LocationModelOrderBy>
  >
}>

export type GetLocationsQuery = {
  __typename?: 'Query'
  allLocations: Array<{
    __typename?: 'LocationRecord'
    id: string
    title?: string | null
    addressTitle?: string | null
    address?: {
      __typename?: 'LatLonField'
      latitude: number
      longitude: number
    } | null
  }>
}

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPageQuery = {
  __typename?: 'Query'
  page?: {
    __typename: 'PageRecord'
    title?: string | null
    slug?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    content: Array<
      | {
          __typename: 'HeaderRecord'
          cover?: unknown | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          body?: {
            __typename?: 'HeaderModelBodyField'
            value: unknown
            blocks: Array<{
              __typename: 'CallToActionRecord'
              label?: string | null
              variant?: string | null
              externalUrl?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
              pageLink?:
                | {
                    __typename: 'ConcertRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | {
                    __typename: 'PageRecord'
                    title?: string | null
                    slug?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                  }
                | null
            }>
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
          } | null
        }
      | {
          __typename: 'TextBlockRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          content?: {
            __typename?: 'TextBlockModelContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
      | {
          __typename: 'TwoColumnRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          leftContent?: {
            __typename?: 'TwoColumnModelLeftContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
          rightContent?: {
            __typename?: 'TwoColumnModelRightContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'CallToActionRecord'
                  label?: string | null
                  variant?: string | null
                  externalUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pageLink?:
                    | {
                        __typename: 'ConcertRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | {
                        __typename: 'PageRecord'
                        title?: string | null
                        slug?: string | null
                        _createdAt: string
                        _firstPublishedAt?: string | null
                        _publishedAt?: string | null
                        _updatedAt: string
                        id: string
                      }
                    | null
                }
              | {
                  __typename: 'DocumentRecord'
                  document?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'ImageRecord'
                  image?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  thumbnail?: unknown | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                }
            >
          } | null
        }
    >
  } | null
}

export type GetPageSeoQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPageSeoQuery = {
  __typename?: 'Query'
  page?: {
    __typename: 'PageRecord'
    title?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    _seoMetaTags: Array<{
      __typename?: 'Tag'
      attributes?: Record<string, string> | null
      content?: string | null
      tag: string
    }>
    seo?: {
      __typename?: 'SeoField'
      description?: string | null
      title?: string | null
      twitterCard?: string | null
    } | null
  } | null
}

export type GetPagesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['IntType']['input']>
  first?: InputMaybe<Scalars['IntType']['input']>
  order?: InputMaybe<
    Array<InputMaybe<PageModelOrderBy>> | InputMaybe<PageModelOrderBy>
  >
}>

export type GetPagesQuery = {
  __typename?: 'Query'
  allPages: Array<{
    __typename: 'PageRecord'
    title?: string | null
    slug?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
  }>
}

export type GetPagesMetaQueryVariables = Exact<{ [key: string]: never }>

export type GetPagesMetaQuery = {
  __typename?: 'Query'
  _allPagesMeta: { __typename?: 'CollectionMetadata'; count: number }
}

export type GetSiteInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetSiteInfoQuery = {
  __typename?: 'Query'
  _site: {
    __typename?: 'Site'
    locales: Array<SiteLocale>
    globalSeo?: {
      __typename?: 'GlobalSeoField'
      facebookPageUrl?: string | null
      siteName?: string | null
      titleSuffix?: string | null
      twitterAccount?: string | null
      fallbackSeo?: {
        __typename?: 'SeoField'
        description?: string | null
        title?: string | null
        twitterCard?: string | null
      } | null
    } | null
  }
}

export type GetSiteMetadataQueryVariables = Exact<{ [key: string]: never }>

export type GetSiteMetadataQuery = {
  __typename?: 'Query'
  general?: {
    __typename: 'GeneralRecord'
    title?: string | null
    siteMetadata?: unknown | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
  } | null
}

export type GetSubmenuQueryVariables = Exact<{ [key: string]: never }>

export type GetSubmenuQuery = {
  __typename?: 'Query'
  general?: {
    __typename?: 'GeneralRecord'
    menu: Array<
      | { __typename?: 'MenuItemRecord' }
      | {
          __typename?: 'SubmenuItemRecord'
          id: string
          label?: string | null
          menu: Array<{
            __typename?: 'MenuItemRecord'
            id: string
            label?: string | null
            link?:
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | null
          }>
        }
    >
  } | null
}

export const ColorsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ColorsFragment, unknown>
export const IdentifiableFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IdentifiableFragment, unknown>
export const CoordinatesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CoordinatesFragment, unknown>
export const LocationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationFragment, unknown>
export const LocationItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'ticketLink' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationItemFragment, unknown>
export const ConcertLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConcertLinkFragment, unknown>
export const PageLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageLinkFragment, unknown>
export const CallToActionFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CallToActionFragment, unknown>
export const HeaderBodyFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
} as unknown as DocumentNode<HeaderBodyFragment, unknown>
export const HeaderFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderFragment, unknown>
export const VideoFieldFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFieldFragment, unknown>
export const VideoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFragment, unknown>
export const DocumentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DocumentFragment, unknown>
export const ImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageFragment, unknown>
export const TextBlockContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
} as unknown as DocumentNode<TextBlockContentFragment, unknown>
export const TextBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
} as unknown as DocumentNode<TextBlockFragment, unknown>
export const LeftContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
} as unknown as DocumentNode<LeftContentFragment, unknown>
export const RightContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
} as unknown as DocumentNode<RightContentFragment, unknown>
export const TwoColumFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
} as unknown as DocumentNode<TwoColumFragment, unknown>
export const ConcertDetailFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'poster' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locationItem' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HeaderRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'header' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'ticketLink' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConcertDetailFragment, unknown>
export const EventLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventLinkFragment, unknown>
export const TagFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TagFragment, unknown>
export const SeoFieldFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoFieldFragment, unknown>
export const EventPageSeoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventPageSeo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seoField' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventPageSeoFragment, unknown>
export const VideoUploadFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoUploadFragment, unknown>
export const FileFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileFragment, unknown>
export const FocalPointFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FocalPointFragment, unknown>
export const MenuItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MenuItemFragment, unknown>
export const SubmenuItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
} as unknown as DocumentNode<SubmenuItemFragment, unknown>
export const GeneralInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'generalInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GeneralRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'MenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'menuItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'SubmenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'submenuItem' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GeneralInfoFragment, unknown>
export const ResponsiveImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsiveImageFragment, unknown>
export const PageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'page' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HeaderRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'header' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragment, unknown>
export const PageDetailFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HeaderRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'header' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDetailFragment, unknown>
export const PageDetailSeoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetailSeo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seoField' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDetailSeoFragment, unknown>
export const SeoSettingsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoSettings' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalSeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'facebookPageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterAccount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fallbackSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seoField' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoSettingsFragment, unknown>
export const SiteMetadataFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'siteMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GeneralRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteMetadata' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SiteMetadataFragment, unknown>
export const GetEventDocument = {
  __meta__: { hash: '85d1809e4a603451368661d24907bc3f7fe3af73' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ItemId' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'concert' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'concertDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'ticketLink' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'poster' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locationItem' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HeaderRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'header' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
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
} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>
export const GetEventPageDocument = {
  __meta__: { hash: 'd99708bc2f59a9452008846360fc323a306b9cf5' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getEventPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'concert' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'concertDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'ticketLink' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'poster' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locationItem' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HeaderRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'header' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
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
} as unknown as DocumentNode<GetEventPageQuery, GetEventPageQueryVariables>
export const GetEventSeoDocument = {
  __meta__: { hash: 'b9650c4e2497e00a27be98d51294c42d3a7560cd' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getEventSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'concert' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventPageSeo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventPageSeo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seoField' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEventSeoQuery, GetEventSeoQueryVariables>
export const GetEventsUrlsDocument = {
  __meta__: { hash: '6aca3034179f4489db57f6de59c8b80c9c2d471c' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getEventsUrls' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ConcertModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allConcerts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEventsUrlsQuery, GetEventsUrlsQueryVariables>
export const GetEventsDocument = {
  __meta__: { hash: '37579c2eb93d83a403a6737884df7d0eeec7d5d3' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getEvents' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ConcertModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allConcerts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'concertDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'ticketLink' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'poster' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locationItem' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HeaderRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'header' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
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
} as unknown as DocumentNode<GetEventsQuery, GetEventsQueryVariables>
export const GetEventsMetaDocument = {
  __meta__: { hash: '5f4e0c315c52944b06ab4f74ded51360edf7746e' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getEventsMeta' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_allConcertsMeta' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEventsMetaQuery, GetEventsMetaQueryVariables>
export const GetFutureEventsDocument = {
  __meta__: { hash: 'b69036513ae83ae3f23b63e72eee8c843712230a' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getFutureEvents' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ConcertModelOrderBy' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ConcertModelFilter' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allConcerts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'concertDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locationItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'ticketLink' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'poster' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locationItem' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HeaderRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'header' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
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
} as unknown as DocumentNode<
  GetFutureEventsQuery,
  GetFutureEventsQueryVariables
>
export const GetGeneralInfoDocument = {
  __meta__: { hash: 'e9ca276953ca87df468b2c6b2899cfc8e52b5cae' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getGeneralInfo' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'general' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'generalInfo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'generalInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GeneralRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'MenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'menuItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'SubmenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'submenuItem' },
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
} as unknown as DocumentNode<GetGeneralInfoQuery, GetGeneralInfoQueryVariables>
export const GetLocationDocument = {
  __meta__: { hash: '2988170369bdd85ab11bab2716b98046fd98ab77' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getLocation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ItemId' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>
export const GetLocationsDocument = {
  __meta__: { hash: 'a59c400e602ddb912052c3ea8dea546d27cc8bca' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getLocations' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LocationModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allLocations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>
export const GetPageDocument = {
  __meta__: { hash: '42d7884b8d7b0bafb4d74d1ee95ea96b6b0e5feb' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'callToAction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CallToActionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageLink' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'headerBody' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderModelBodyField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'header' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeaderRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'headerBody' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'document' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'DocumentRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'document' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'DocumentRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'document' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CallToActionRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'callToAction' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HeaderRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'header' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
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
} as unknown as DocumentNode<GetPageQuery, GetPageQueryVariables>
export const GetPageSeoDocument = {
  __meta__: { hash: '55bf93684267f9682afdb0f44011be54dc504175' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPageSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageDetailSeo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetailSeo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seoField' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageSeoQuery, GetPageSeoQueryVariables>
export const GetPagesDocument = {
  __meta__: { hash: 'ca272263dd3de7afa339e7dec4ec14da84082ba6' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PageModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPagesQuery, GetPagesQueryVariables>
export const GetPagesMetaDocument = {
  __meta__: { hash: 'b1a1faf140eb73b05d10ed07a0f27ba22ce841d1' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPagesMeta' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_allPagesMeta' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPagesMetaQuery, GetPagesMetaQueryVariables>
export const GetSiteInfoDocument = {
  __meta__: { hash: '03d8c1a8a9221de3c54272e8ff3b1ad7cf68f34b' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSiteInfo' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_site' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locales' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'globalSeo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'seoSettings' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoSettings' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalSeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'facebookPageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterAccount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fallbackSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seoField' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSiteInfoQuery, GetSiteInfoQueryVariables>
export const GetSiteMetadataDocument = {
  __meta__: { hash: 'ca6cefbe29b30e5831d72ee8151f9d41f7a1631c' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSiteMetadata' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'general' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'siteMetadata' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'siteMetadata' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GeneralRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteMetadata' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSiteMetadataQuery,
  GetSiteMetadataQueryVariables
>
export const GetSubmenuDocument = {
  __meta__: { hash: 'f9e49b3ba91024123f7e0a850939ab3616c58fde' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSubmenu' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'general' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'menu' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'SubmenuItemRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'submenuItem' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
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
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSubmenuQuery, GetSubmenuQueryVariables>
