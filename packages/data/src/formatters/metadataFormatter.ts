import type {
  EventPageSeoFragment,
  PageDetailSeoFragment,
} from '../generated/graphql.js'
import type { Metadata } from '@mono/next-js'
import { getSiteMetadata } from '../getters/getSiteMetadata.js'
import { metaTitleFormatter } from './metaTitleFormatter.js'

export const metadataFormatter = async (
  data: PageDetailSeoFragment | EventPageSeoFragment | undefined,
  slug: string
): Promise<Metadata> => {
  const { metadata } = await getSiteMetadata()
  const title = await metaTitleFormatter(data)
  const base = metadata?.base_url || 'https://example.com'

  const defaultDescription = metadata?.description || ''
  const defaultLocale = 'nl-NL'

  const url = new URL(slug, base)
  const currentUrl = slug === 'homepage' ? base : url.href
  const canonical = data ? currentUrl : undefined

  return {
    title,
    description: data?.seo?.description ?? defaultDescription,
    metadataBase: new URL(base),
    alternates: {
      canonical,
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
        )?.content ?? title,
      description:
        data?._seoMetaTags.find(
          (tags) => tags?.attributes?.property === 'og:description'
        )?.content ?? defaultDescription,
      url: slug === 'homepage' ? base : `${base}/${slug}`,
      siteName: title,
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
        )?.content ?? title,
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
