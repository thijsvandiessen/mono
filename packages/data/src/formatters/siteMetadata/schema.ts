import { z } from 'zod'

const socialSchema = z.object({
  name: z.string(),
  url: z.string(),
})

export const siteMetadataSchema = z.object({
  base_url: z.string(),
  title: z.string(),
  description: z.string(),
  socials: z.array(socialSchema),
})
