import { z } from 'zod'

export const navigationItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  slug: z.string(),
})

export const navigationSubMenuSchema = z.object({
  id: z.string(),
  label: z.string(),
  items: z.array(navigationItemSchema),
})

export const navigationDataSchema = z.object({
  id: z.string().min(1),
  title: z.string().default(''),
  menu: z.array(z.union([navigationItemSchema, navigationSubMenuSchema])),
})
