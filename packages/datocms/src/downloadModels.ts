import type { Client } from '@datocms/cma-client-node'
import fs from 'node:fs'

export const downloadModels = async (client: Client) => {
  const { data } = await client.itemTypes.rawList()

  console.log('Saving models...')

  try {
    data.map((itemType) => {
      fs.writeFileSync(
        `../../packages/datocms/src/models/${itemType.attributes.api_key}.json`,
        JSON.stringify(itemType)
      )

      console.log(`Saved ${itemType.attributes.api_key}.json`)
    })
  } catch (error) {
    console.error('Error saving models', error)
  }
}
