/*
 * Fixture content served by the mock DatoCMS backend.
 *
 * The shape follows the DatoCMS GraphQL schema in
 * packages/data/src/generated/schema.graphql. Every value that is returned
 * for a union or interface field needs a `__typename` so GraphQL can resolve
 * the concrete type. Images are left out on purpose so no request leaves the
 * machine while the tests run.
 */

const timestamps = {
  _createdAt: "2024-01-01T10:00:00+01:00",
  _firstPublishedAt: "2024-01-01T10:00:00+01:00",
  _publishedAt: "2024-01-01T10:00:00+01:00",
  _updatedAt: "2024-01-01T10:00:00+01:00",
};

type Node = Record<string, unknown>;

const span = (value: string): Node => ({ type: "span", value });

export const heading = (level: number, text: string): Node => ({
  type: "heading",
  level,
  children: [span(text)],
});

export const paragraph = (text: string): Node => ({
  type: "paragraph",
  children: [span(text)],
});

export const structuredText = (...children: Node[]) => ({
  value: { schema: "dast", document: { type: "root", children } },
  blocks: [],
  links: [],
});

const record = <T extends Node>(__typename: string, id: string, fields: T) => ({
  __typename,
  id,
  ...timestamps,
  ...fields,
});

const seo = (title: string, description: string) => ({
  __typename: "SeoField",
  title,
  description,
  twitterCard: "summary_large_image",
  image: null,
});

const headerBlock = (id: string, ...children: Node[]) =>
  record("HeaderRecord", id, { body: structuredText(...children), cover: null });

const textBlock = (id: string, ...children: Node[]) =>
  record("TextBlockRecord", id, { content: structuredText(...children) });

export const pages = [
  record("PageRecord", "page-homepage", {
    title: "homepage",
    slug: "homepage",
    position: 1,
    seo: seo("Homepage", "Welkom bij Lundi Bleu"),
    _seoMetaTags: [],
    content: [
      headerBlock(
        "page-homepage-header",
        heading(1, "Lundi Bleu - Strijkorkest"),
        paragraph("Een strijkorkest uit Amsterdam."),
      ),
      textBlock("page-homepage-text", heading(2, "Over ons"), paragraph("Wij spelen graag.")),
    ],
  }),
  record("PageRecord", "page-concerten", {
    title: "Concerten",
    slug: "concerten",
    position: 2,
    seo: seo("Concerten", "Alle concerten van Lundi Bleu"),
    _seoMetaTags: [],
    content: [headerBlock("page-concerten-header", heading(2, "Concerten"))],
  }),
  record("PageRecord", "page-contact", {
    title: "Contact",
    slug: "contact",
    position: 3,
    seo: seo("Contact", "Neem contact op met Lundi Bleu"),
    _seoMetaTags: [],
    content: [
      headerBlock(
        "page-contact-header",
        heading(2, "Contact"),
        paragraph("Stuur ons een bericht."),
      ),
    ],
  }),
];

export const locations = [
  {
    __typename: "LocationRecord",
    id: "location-concertgebouw",
    ...timestamps,
    title: "Kleine Zaal",
    addressTitle: "Concertgebouwplein 10, Amsterdam",
    address: { __typename: "LatLonField", latitude: 52.3563, longitude: 4.8791 },
  },
];

const nextYear = new Date().getFullYear() + 1;

const locationItem = (id: string, dateTime: string, ticketLink: string | null = null) => ({
  __typename: "LocationItemRecord",
  id,
  ...timestamps,
  dateTime,
  ticketLink,
  location: locations[0],
});

export const concerts = [
  record("ConcertRecord", "concert-voorjaar", {
    title: "Voorjaarsconcert",
    slug: "voorjaarsconcert",
    position: 1,
    poster: null,
    seo: seo("Voorjaarsconcert", "Het voorjaarsconcert van Lundi Bleu"),
    _seoMetaTags: [],
    locations: [locationItem("location-item-voorjaar", `${nextYear}-04-12T20:00:00+02:00`)],
    content: [textBlock("concert-voorjaar-text", paragraph("Werken van Mozart en Grieg."))],
  }),
  record("ConcertRecord", "concert-winter", {
    title: "Winterconcert",
    slug: "winterconcert",
    position: 2,
    poster: null,
    seo: seo("Winterconcert", "Het winterconcert van Lundi Bleu"),
    _seoMetaTags: [],
    locations: [locationItem("location-item-winter", "2020-12-12T20:00:00+01:00")],
    content: [textBlock("concert-winter-text", paragraph("Werken van Tsjaikovski."))],
  }),
];

const pageLink = (slug: string) => pages.find((page) => page.slug === slug);

export const general = {
  __typename: "GeneralRecord",
  id: "general",
  ...timestamps,
  title: "Lundi Bleu",
  siteMetadata: {
    base_url: "https://www.lundi-bleu.nl",
    title: "Lundi Bleu - Strijkorkest",
    description: "Lundi Bleu is een strijkorkest.",
    social_one_name: "Instagram",
    social_one_url: "https://www.instagram.com/lundibleu",
  },
  menu: [
    {
      __typename: "MenuItemRecord",
      id: "menu-concerten",
      ...timestamps,
      label: "Concertagenda",
      link: pageLink("concerten"),
    },
    {
      __typename: "MenuItemRecord",
      id: "menu-contact",
      ...timestamps,
      label: "Contact",
      link: pageLink("contact"),
    },
  ],
};

export const site = {
  __typename: "Site",
  locales: ["nl"],
  globalSeo: {
    __typename: "GlobalSeoField",
    siteName: "Lundi Bleu",
    titleSuffix: " | Lundi Bleu",
    facebookPageUrl: null,
    twitterAccount: null,
    fallbackSeo: seo("Lundi Bleu", "Lundi Bleu is een strijkorkest."),
  },
};
