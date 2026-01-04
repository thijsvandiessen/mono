import { z } from 'zod'

export const metadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  metadataBase: z.instanceof(URL),
  alternates: z.object({
    canonical: z.string().optional(),
  }),
  openGraph: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    siteName: z.string(),
    type: z.literal('article'),
    images: z.array(
      z.object({
        url: z.string(),
        width: z.number(),
        height: z.number(),
      })
    ),
    locale: z.string(),
  }),
  twitter: z.object({
    card: z.literal('summary_large_image'),
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()),
  }),
})
