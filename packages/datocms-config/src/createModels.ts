import type { Client } from '@datocms/cma-client-node'
import fs from 'node:fs'
import { validateAndTransform } from './validators/itemType.js'

export const createModels = (client: Client) => {
  try {
    fs.readdirSync('../../packages/data-config/src/models').map(
      async (fileName) => {
        const res = fs.readFileSync(
          `../../packages/data-config/src/models/${fileName}`,
          {
            encoding: 'utf8',
            flag: 'r',
          }
        )
        const itemType = await client.itemTypes.rawCreate(
          validateAndTransform(res)
        )
        console.log(itemType)
      }
    )
  } catch (error) {
    console.error('Error reading directory:', error)
  }
}
