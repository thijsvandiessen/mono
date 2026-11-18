const defaultUrl = "https://graphql.datocms.com";

/*
 * The endpoint can be overridden so the apps can run against a local mock
 * backend (see e2e/mock-server) instead of DatoCMS. It is a NEXT_PUBLIC_
 * variable because some queries are also executed in the browser.
 */
const getUrl = () => {
  return process.env.NEXT_PUBLIC_DATOCMS_GRAPHQL_URL || defaultUrl;
};

export const linkConfig = {
  url: getUrl(),
  headers: {
    "Content-Language": "nl-NL",
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_READONLY_TOKEN}`,
    "X-Exclude-Invalid": "true",
    "X-Cache-Tags": "true",
  },
};
