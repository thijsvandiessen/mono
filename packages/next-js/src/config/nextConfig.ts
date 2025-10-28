import { headerConfig } from './headerConfig.js'
import type { NextConfig } from 'next'

type Props = {
  domain: string
}

export const customNextConfig = ({ domain }: Props): NextConfig => ({
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    // typedRoutes: true,
    // serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  rewrites: async () => [
    {
      source: '/graphql',
      destination:
        'https://current--vandiessen-mono-graph.apollographos.net/graphql',
    },
  ],
  headers: async () => [{ source: '/(.*)', headers: headerConfig({ domain }) }],
})
