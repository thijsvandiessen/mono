import type { SchemaTypes } from '@datocms/cma-client-node'
import { z } from 'zod'

const ItemType = z.object({
  id: z.string(),
  type: z.literal('item_type'),
  attributes: z.object({
    name: z.string(),
    api_key: z.string(),
    sortable: z.boolean(),
    singleton: z.union([z.boolean(), z.undefined()]),
    all_locales_required: z.union([z.boolean(), z.undefined()]),
    modular_block: z.union([z.boolean(), z.undefined()]),
    draft_mode_active: z.union([z.boolean(), z.undefined()]),
    draft_saving_active: z.union([z.boolean(), z.undefined()]),
    tree: z.union([z.boolean(), z.undefined()]),
    ordering_direction: z.union([
      z.literal('asc'),
      z.literal('desc'),
      z.null(),
    ]),
    ordering_meta: z.union([
      z.literal('created_at'),
      z.literal('updated_at'),
      z.literal('first_published_at'),
      z.literal('published_at'),
      z.null(),
    ]),
    collection_appearance: z.union([z.literal('compact'), z.literal('table')]),
    hint: z.union([z.string(), z.null()]),
    inverse_relationships_enabled: z.union([z.boolean(), z.undefined()]),
  }),
  relationships: z.object({
    title_field: z.object({
      data: z.union([
        z.object({
          id: z.string(),
          type: z.literal('field'),
        }),
        z.null(),
      ]),
    }),
  }),
})

export function validateAndTransform(
  res: string
): SchemaTypes.ItemTypeCreateSchema {
  try {
    const data: unknown = JSON.parse(res)

    return {
      data: ItemType.parse(data),
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error in JSON: ${error.message}`)
    }
    throw new Error(`Invalid JSON format`)
  }
}
