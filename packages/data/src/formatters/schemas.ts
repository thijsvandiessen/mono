import type { Concert } from '../types/concert.js'
import { z } from 'zod'

export const locationSchema = z.object({
  id: z.string(),
  title: z.string().nullable(),
  address: z.string().nullable(),
  lat: z.number().nullable(),
  lng: z.number().nullable(),
  startTime: z.string().nullable(),
  ticketLink: z.string().nullable(),
})

export const locationArraySchema = z.array(locationSchema)

export const imageSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  url: z.string(),
})

export const pageLinkSchema = z.object({
  title: z.string(),
  url: z.string(),
  updatedAt: z.date(),
})

export const pageLinkArraySchema = z.array(pageLinkSchema)

const concertContentSchema = z.custom<NonNullable<Concert['content']>>(
  (value) => Array.isArray(value)
)

export const concertSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: imageSchema.optional(),
  locations: locationArraySchema,
  url: z.string(),
  content: concertContentSchema.optional(),
})

export const concertsSchema = z.array(concertSchema)
