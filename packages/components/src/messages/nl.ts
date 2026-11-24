/*
 * Dutch UI texts for @mono/components. `nl` is the reference catalog: every
 * other locale must provide the same keys (enforced by the `Messages` type).
 * Texts use ICU message syntax, see https://next-intl.dev/docs/usage/messages.
 */
export const nl = {
  ConcertListItem: {
    concertPast: "Concert voorbij",
    buyTickets: "Koop nu kaarten",
    ticketsSoon: "Link voor de kaartverkoop volgt spoedig",
    viewConcert: "Bekijk concert",
  },
  ConcertPage: {
    agenda: "Agenda",
  },
  DocumentBlock: {
    title: "document",
    download: "Download document",
  },
  ErrorMessage: {
    title: "Iets ging verkeerd!",
    retry: "Probeer opnieuw",
  },
  Footer: {
    navigation: "Navigatie",
    followUs: "Volg ons",
  },
  LoadMoreConcerts: {
    progress: "{shown} van {total} concerten",
  },
  MobileMenu: {
    open: "Menu",
    close: "Sluit menu",
  },
  Navigation: {
    noLink: "Geen link opgegeven",
    noLabel: "Geen label opgegeven",
  },
  NotFound: {
    title: "Niet gevonden",
    description: "Deze pagina is niet gevonden.",
    backHome: "Ga terug naar de homepage",
  },
  PageContent: {
    unknownComponent: "Dit onderdeel bestaat niet",
  },
  UpcomingConcerts: {
    upcoming: "Aankomende concerten",
    other: "Overige concerten",
  },
  VideoPlaceholder: {
    play: "Start video",
  },
};

type DeepString<T> = { [K in keyof T]: T[K] extends string ? string : DeepString<T[K]> };

/** The shape every locale catalog has to match. */
export type Messages = DeepString<typeof nl>;
