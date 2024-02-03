import { metaTitleFormatter } from './metaTitleFormatter'
import type { Metadata } from 'next'
import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql'
import { getSiteMetadata } from '../getters/getSiteMetadata'

export const metadataFormatter = async (
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined,
  slug: string
): Promise<Metadata> => {
  const { metadata } = await getSiteMetadata()

  const base = metadata?.base_url || 'https://example.com'
  const defaultTitle = metadata?.title || 'Default title'
  const defaultDescription = metadata?.description || 'Default description'
  const defaultLocale = 'nl-NL'

  return {
    title: await metaTitleFormatter(data),
    description: data?.seo?.description ?? defaultDescription,
    metadataBase: new URL(base),
    alternates: {
      canonical: slug === 'homepage' ? base : `${base}/${slug}`,
      // languages: {
      //   'en-US': '/en-US',
      //   'de-DE': '/de-DE',
      // },
    },
    // manifest: `${base}/manifest.json`, // TODO
    openGraph: {
      title:
        data?._seoMetaTags.find(
          (tags) => tags?.attributes?.property === 'og:title'
        )?.content ?? defaultTitle,
      description:
        data?._seoMetaTags.find(
          (tags) => tags?.attributes?.property === 'og:description'
        )?.content ?? defaultDescription,
      url: slug === 'homepage' ? base : `${base}/${slug}`,
      siteName: defaultTitle,
      type: 'article', // TODO: we only support this type at the moment
      images: [
        {
          url:
            data?._seoMetaTags.find(
              (tags) => tags?.attributes?.property === 'og:image'
            )?.content ?? '',
          width: 1200,
          height: 900,
        },
      ],
      locale:
        data?._seoMetaTags.find(
          (tags) => tags?.attributes?.property === 'og:locale'
        )?.content ?? defaultLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title:
        data?._seoMetaTags.find(
          (tags) => tags?.attributes?.name === 'twitter:title'
        )?.content ?? defaultTitle,
      description:
        data?._seoMetaTags.find(
          (tags) => tags?.attributes?.name === 'twitter:description'
        )?.content ?? '',
      // siteId: '24982498249824892498', // TODO: we need a twitter account for this
      // creator: '@creaOrkest', // TODO: we need a twitter account for this
      // creatorId: '24982498249824892498', // TODO: we need a twitter account for this
      images: [
        data?._seoMetaTags.find(
          (tags) => tags?.attributes?.name === 'twitter:image'
        )?.content ?? '',
      ],
    },
    // icons: {
    //   icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://example.com')], // TODO
    //   shortcut: ['/shortcut-icon.png'], // TODO
    //   apple: [
    //     { url: '/apple-icon.png' }, // TODO
    //     { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' }, // TODO
    //   ],
    //   other: [
    //     {
    //       rel: 'apple-touch-icon-precomposed', // TODO
    //       url: '/apple-touch-icon-precomposed.png', // TODO
    //     },
    //   ],
    // },
  }
}
