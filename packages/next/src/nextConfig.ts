import type { NextConfig } from 'next'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { headerConfig } from './headerConfig'

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
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
  webpack: (config) => {
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: true,
        })
      )
    }
    return config
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
    Promise.resolve([{ source: '*', headers: headerConfig({ domain }) }]),
})
