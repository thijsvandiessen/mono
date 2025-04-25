import { headerConfig } from './headerConfig.js'

export const customNextConfig = ({ domain }) => ({
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
  rewrites: () =>
    Promise.resolve([
      {
        source: '/graphql',
        destination:
          'https://current--vandiessen-mono-graph.apollographos.net/graphql',
      },
    ]),
  headers: () =>
    Promise.resolve([{ source: '/(.*)', headers: headerConfig({ domain }) }]),
})
