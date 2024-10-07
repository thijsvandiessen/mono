export const csp = ({ domain }) => [
  `default-src 'self' 'unsafe-inline'`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com`,
  `manifest-src ${domain}/manifest.json`, // TODO
  `img-src 'self' 'unsafe-inline' data: https://maps.gstatic.com https://maps.googleapis.com https://i.ytimg.com https://i.vimeocdn.com`,
  `connect-src 'self' https://maps.googleapis.com`,
  `script-src-elem 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://maps.googleapis.com`,
  `style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com`,
  `font-src 'self' https://fonts.gstatic.com`,
  `frame-src 'self' https://www.youtube.com https://player.vimeo.com`,
]
