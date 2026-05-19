import type { NextConfig } from 'next'
import { headerConfig } from './headerConfig.js'

type Props = {
  domain: string
}

export const customNextConfig = ({ domain }: Props): NextConfig => ({
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: true,
  typedRoutes: true,
  experimental: {},
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
      destination: 'https://graphql.datocms.com/',
    },
  ],
  headers: async () => [{ source: '/(.*)', headers: headerConfig({ domain }) }],
})
